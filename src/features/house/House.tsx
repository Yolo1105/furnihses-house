"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type TouchEvent,
  type WheelEvent,
} from "react";
import { SITE_EMAIL } from "@/lib/seo";
import { useBag } from "../storefront/lib/bag";
import {
  getProduct,
  products,
  resolveProduct,
} from "../storefront/lib/catalog";
import { boxes, buildSteps, counts } from "../storefront/lib/steps";
import {
  mm,
  placementBlocks,
  type Block3D,
  type Placement3D,
} from "../storefront/lib/three/blocks";
import Link from "next/link";
import { PieceThumb } from "../storefront/components/three/Thumb";
import {
  momentForFriend,
  sayToFriend,
  type FriendAction,
  type FriendMoment,
  type FriendState,
  type FriendTurn,
} from "./friend";
import {
  bumpVisit,
  readMemory,
  withFact,
  withTouched,
  writeMemory,
} from "./memory";
import { saveOrder } from "./orders";
import { detailBlocks } from "./detail";
import { kitLayout } from "./kit";
import { HouseCanvas, type PlaceState, type Track } from "./HouseCanvas";
import { buildPlaces, houseSize, type Place, type Wall } from "./plan";

const KEY = "furnishes-house-v1";
type Saved = {
  states: Record<string, PlaceState>;
  used: string[];
  walls: Record<string, Wall>;
};
const stateIds: PlaceState[] = ["before", "after", "apart", "kit"];

/** The first visit: one small piece already standing, and the wall already up, so both scales are in view. */
const firstFrame: Record<string, PlaceState> = {
  "desk-side": "after",
  "shared-bedroom": "after",
};

function load(): Saved {
  try {
    const raw = window.localStorage.getItem(KEY);
    const o: unknown = raw ? JSON.parse(raw) : null;
    if (o && typeof o === "object") {
      const r = o as Record<string, unknown>;
      const states: Record<string, PlaceState> = {};
      if (r.states && typeof r.states === "object")
        for (const [k, v] of Object.entries(
          r.states as Record<string, unknown>,
        ))
          if (stateIds.includes(v as PlaceState)) states[k] = v as PlaceState;
      const used = Array.isArray(r.used)
        ? r.used.filter((x): x is string => typeof x === "string")
        : [];
      const walls: Record<string, Wall> = {};
      if (r.walls && typeof r.walls === "object")
        for (const [k, v] of Object.entries(
          r.walls as Record<string, unknown>,
        )) {
          const w = v as Partial<Wall>;
          if (
            typeof w.x === "number" &&
            typeof w.y === "number" &&
            (w.dir === "x" || w.dir === "z") &&
            typeof w.n === "number"
          )
            walls[k] = { x: w.x, y: w.y, dir: w.dir, n: w.n };
        }
      return { states, used, walls };
    }
  } catch {
    // first visit
  }
  return { states: firstFrame, used: [], walls: {} };
}

type Whisper = {
  key: string;
  text: string;
  at: string;
  href?: string;
  label?: string;
};

/** Short names for the parts, for the tags on pull-apart. */
function partName(b: Block3D): string | null {
  const id = b.partId ?? "";
  if (b.key.includes(":lkey0")) return "the only tool";
  if (b.key.includes(":lkey1")) return null;
  if (id.startsWith("side-")) return "side panel";
  if (id === "functional-panel") return "working face";
  if (id === "structural-bottom") return "bottom";
  if (id.includes("shelf")) return "shelf";
  if (
    id.startsWith("top") ||
    id.startsWith("long-top") ||
    id.includes("worktop")
  )
    return "top";
  if (id === "foot-base") return "base";
  if (id === "caster-base") return "caster base";
  if (id === "caster-display") return "caster";
  if (id === "coat-hook") return "hook";
  if (id === "key-tray") return "tray";
  if (id.includes("rail")) return "rail";
  if (id.startsWith("door")) return "door";
  if (id === "desktop") return "desk top";
  if (id === "desk-support") return "support";
  if (id.includes("bracket")) return "bracket";
  if (id === "bay-connector") return "connector";
  if (id.startsWith("fold-panel")) return "leaf";
  if (id.startsWith("fold-frame")) return "frame";
  if (id === "hinge-assembly") return "hinge";
  if (id === "seat-assembly") return "seat";
  return null;
}

type PartTag = { id: string; text: string; t: Track };

/** One tag per kind of part when it is pulled apart; every part numbered when it lies in the kit. */
function partTagsFor(fp: Place | undefined, fs: PlaceState): PartTag[] {
  if (!fp || (fs !== "apart" && fs !== "kit")) return [];
  const pl: Placement3D = {
    key: fp.def.id,
    product: fp.product,
    config: fp.config,
    x: fp.pieceX,
    ...(fp.pieceY !== undefined ? { y: fp.pieceY } : {}),
    ...(fp.rot ? { rot: fp.rot } : {}),
  };
  const apart = detailBlocks(
    placementBlocks(pl, { depthMm: fp.depth, explode: 1 }),
  );
  const seen = new Set<string>();
  const out: PartTag[] = [];
  if (fs === "kit") {
    const together = detailBlocks(
      placementBlocks(pl, { depthMm: fp.depth, explode: 0 }),
    );
    const kit = kitLayout(together, fp);
    for (const b of together) {
      const k = kit.get(b.key);
      const name = partName(b);
      if (!k || !name || b.key.includes(":d")) continue;
      out.push({
        id: `kit:${b.key}`,
        text: `${k.n} · ${name}`,
        t: {
          id: `kit:${b.key}`,
          x: k.x,
          y: k.y + 0.03,
          z: k.z,
          align: "above",
        },
      });
    }
    return out;
  }
  for (const b of apart) {
    const name = partName(b);
    if (!name || seen.has(name)) continue;
    seen.add(name);
    out.push({
      id: `part:${name}`,
      text: name,
      t: {
        id: `part:${name}`,
        x: mm(fp.ox + b.x + b.w / 2),
        y: mm(b.z + b.h) + 0.03,
        z: mm(fp.oz + fp.depth - b.y - b.d / 2),
        align: "above",
      },
    });
  }
  return out;
}

function standsFraction(p: Place) {
  const steps = buildSteps(p.product, p.config);
  const n = Math.max(1, steps.length);
  let last = 0;
  steps.forEach((st, i) => {
    if (
      st.partIds.some(
        (id) => id.startsWith("side-") || id === "structural-bottom",
      )
    )
      last = i;
  });
  return Math.min(0.95, ((last + 1) / n) * 0.82);
}

const byId = (places: Place[], id: string) =>
  places.find((p) => p.def.id === id);

/** The site: a house you can touch. Everything you can read hangs on something in it. */
export function House() {
  const places = useMemo(() => buildPlaces(), []);
  const size = useMemo(() => houseSize(places), [places]);
  const [saved, setSaved] = useState<Saved>(load);
  const [focus, setFocus] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [whisper, setWhisper] = useState<Whisper | null>(null);
  const [reply, setReply] = useState<Whisper | null>(null);
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [history, setHistory] = useState<FriendTurn[]>([]);
  const [busy, setBusy] = useState(false);
  /** what the friend remembers about this visitor; counted as a visit on load */
  const [memory, setMemory] = useState(() => bumpVisit(readMemory()));
  /** null until the first call; false once the model is known to be unreachable this session */
  const [modelAlive, setModelAlive] = useState<boolean | null>(null);
  useEffect(() => {
    writeMemory(memory);
  }, [memory]);
  const [lastOrder, setLastOrder] = useState<string | null>(null);
  const [build, setBuild] = useState<{ id: string; p: number } | null>(null);
  /** always the latest moment(), for callbacks made earlier in the render */
  const momentRef = useRef<
    (type: string, place?: string, detail?: string) => void
  >(() => {});
  const onBuild = useCallback((id: string, p: number | null) => {
    setBuild((prev) => {
      if (p === null && prev && prev.id === id)
        window.setTimeout(() => momentRef.current("built", id), 400);
      return p === null ? null : { id, p };
    });
  }, []);
  const bag = useBag();
  const states = saved.states;
  const captionRef = useRef<HTMLInputElement>(null);
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(saved));
    } catch {
      // memory only
    }
  }, [saved]);

  const setState = useCallback((id: string, s: PlaceState) => {
    setSaved((v) => ({ ...v, states: { ...v.states, [id]: s } }));
  }, []);
  const markUsed = useCallback((key: string) => {
    setSaved((v) =>
      v.used.includes(key) ? v : { ...v, used: [...v.used, key] },
    );
  }, []);

  /** a line drawn across a room became a wall; the room is now the wall's */
  const onWall = useCallback((id: string, wall: Wall) => {
    setSaved((v) => ({ ...v, walls: { ...v.walls, [id]: wall } }));
    setFocus(`wall:${id}`);
    setReply({
      key: `ask:${Date.now()}`,
      text: `${wall.n === 1 ? "One segment" : `${wall.n} segments`}, both sides different. This one we plan with you.`,
      at: id,
    });
    window.setTimeout(
      () =>
        momentRef.current(
          "drew_wall",
          id,
          `${wall.n} segment${wall.n === 1 ? "" : "s"} ${wall.dir === "x" ? "along the wall" : "into the room"}`,
        ),
      2500,
    );
  }, []);
  const removeWall = useCallback((id: string) => {
    setSaved((v) => {
      const walls = { ...v.walls };
      delete walls[id];
      return { ...v, walls };
    });
    setFocus(id);
  }, []);
  /** a piece was held and dragged into another room: same panels, that room's life */
  const onDrag = useCallback(
    (from: string, to: string) => {
      setSaved((v) => ({
        ...v,
        states: { ...v.states, [from]: "before", [to]: "after" },
      }));
      setFocus(to);
      const target = byId(places, to);
      if (target)
        setReply({
          key: `ask:${Date.now()}`,
          text: `Same panels. Here they are the ${target.product.name.toLowerCase()}.`,
          at: to,
        });
      window.setTimeout(
        () => momentRef.current("dragged", to, `from ${from} to ${to}`),
        2500,
      );
    },
    [places],
  );

  /** go to a place; if nothing stands there yet, the piece arrives */
  const goTo = useCallback(
    (id: string) => {
      setFocus(id);
      setReply(null);
      if ((states[id] ?? "before") === "before") setState(id, "after");
    },
    [states, setState],
  );
  /** a touch: first brings the piece, the next pulls it apart, the next puts it back */
  const touch = useCallback(
    (id: string) => {
      const s = states[id] ?? "before";
      if (focus !== id) {
        goTo(id);
        window.setTimeout(
          () => momentRef.current(s === "before" ? "arrived" : "looked", id),
          900,
        );
      } else {
        const next = s === "after" ? "apart" : s === "apart" ? "kit" : "after";
        setState(id, next);
        window.setTimeout(
          () =>
            momentRef.current(
              next === "apart"
                ? "pulled_apart"
                : next === "kit"
                  ? "laid_flat"
                  : "building",
              id,
            ),
          600,
        );
      }
      if (whisper) {
        markUsed(whisper.key);
        setWhisper(null);
      }
      setReply(null);
    },
    [states, focus, goTo, setState, whisper, markUsed],
  );
  const order = places.map((p) => p.def.id);
  const step = useCallback(
    (dir: 1 | -1) => {
      if (!focus) {
        goTo(order[0] ?? "");
        return;
      }
      const i = order.indexOf(focus);
      const next = order[(i + dir + order.length) % order.length];
      if (next) goTo(next);
    },
    [focus, order, goTo],
  );

  // a link from a record page: /?go=<place>
  const went = useRef(false);
  useEffect(() => {
    if (went.current) return;
    went.current = true;
    const go = new URLSearchParams(window.location.search).get("go");
    if (go && byId(places, go)) {
      window.setTimeout(() => goTo(go), 400);
      window.history.replaceState(null, "", "/house");
    }
  }, [places, goTo]);

  // keys: escape out, arrows walk, typing goes to the caption line
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const inField =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;
      if (e.key === "Escape") {
        setSheet(false);
        setFocus(null);
        setReply(null);
        if (inField) (e.target as HTMLElement).blur();
        return;
      }
      if (inField) return;
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey)
        captionRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  // zoom is the switch: out to the house, in to the place under the pointer
  const wheelAcc = useRef(0);
  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    wheelAcc.current += e.deltaY;
    if (wheelAcc.current > 260) {
      wheelAcc.current = 0;
      if (focus) setFocus(null);
    } else if (wheelAcc.current < -260) {
      wheelAcc.current = 0;
      if (!focus && hover) goTo(hover);
    }
  };
  // fingers: swipe walks between places, pinch out returns to the house
  const gesture = useRef<{ x: number; y: number; dist: number } | null>(null);
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const t0 = e.touches[0];
    const t1 = e.touches[1];
    if (!t0) return;
    gesture.current = {
      x: t0.clientX,
      y: t0.clientY,
      dist: t1
        ? Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY)
        : 0,
    };
  };
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const g = gesture.current;
    const t0 = e.touches[0];
    const t1 = e.touches[1];
    if (!g || !t0 || !t1 || !g.dist) return;
    const d = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
    if (d < g.dist * 0.75 && focus) {
      setFocus(null);
      gesture.current = null;
    }
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const g = gesture.current;
    const t = e.changedTouches[0];
    gesture.current = null;
    if (!g || !t || g.dist) return;
    const dx = t.clientX - g.x;
    const dy = t.clientY - g.y;
    if (Math.abs(dx) > 70 && Math.abs(dy) < 60 && focus) step(dx < 0 ? 1 : -1);
  };

  // the friend waits a moment, then says one thing, once
  useEffect(() => {
    if (hover || reply || modelAlive === true) return;
    const t = window.setTimeout(() => {
      let next: Whisper | null = null;
      if (!focus) {
        const p = places.find(
          (pl) =>
            (saved.states[pl.def.id] ?? "before") === "before" &&
            !saved.used.includes(`house:${pl.def.id}`),
        );
        if (p)
          next = { key: `house:${p.def.id}`, text: p.def.hint, at: p.def.id };
      } else {
        const s = saved.states[focus] ?? "before";
        if (s === "after" && !saved.used.includes("apart"))
          next = {
            key: "apart",
            text: "Touch it again to pull it apart.",
            at: focus,
          };
        else if (s === "apart" && !saved.used.includes("key"))
          next = {
            key: "key",
            text: "One key, every bolt. That is all it takes.",
            at: focus,
          };
      }
      setWhisper(next);
    }, 1800);
    return () => window.clearTimeout(t);
  }, [hover, focus, reply, saved, places, modelAlive]);
  // a reply from the friend stays a while, then goes
  useEffect(() => {
    if (!reply) return;
    const t = window.setTimeout(() => setReply(null), 9000);
    return () => window.clearTimeout(t);
  }, [reply]);

  /* ---------- what hangs where ---------- */
  const wallFocus = focus?.startsWith("wall:") ? focus.slice(5) : null;
  const wp0 = wallFocus ? byId(places, wallFocus) : undefined;
  const wallOf = wp0 ? saved.walls[wp0.def.id] : undefined;
  const fp = focus && !wallFocus ? byId(places, focus) : undefined;
  const fs: PlaceState = fp ? (states[fp.def.id] ?? "before") : "before";
  const c = fp ? counts(fp.product, fp.config) : null;
  const bookcase = getProduct("bookcase");
  const wc =
    wallOf && bookcase
      ? (() => {
          const one = counts(bookcase, {
            productId: bookcase.id,
            finish: "natural",
            storage: "open",
            accessories: [],
          });
          return {
            parts: one.parts * wallOf.n,
            bolts: one.bolts * wallOf.n,
            minutes: one.minutes * wallOf.n,
            boxes: one.boxes * wallOf.n,
            heaviestKg: one.heaviestKg,
          };
        })()
      : null;
  const pdepthOf = (p: Place) => p.product.depth ?? 400;
  const frontOf = (p: Place) =>
    p.rot ? p.depth - p.product.width : p.depth - pdepthOf(p);
  const widthOf = (p: Place) => (p.rot ? pdepthOf(p) : p.product.width);
  const above = (p: Place): Track => ({
    id: "",
    x: mm(p.ox + p.focus.x),
    y: mm(p.product.height) + 0.3,
    z: mm(p.oz + p.depth - p.focus.y),
    align: "above",
  });

  const tracks: Track[] = [];
  const hp = hover && hover !== focus ? byId(places, hover) : undefined;
  if (hp) tracks.push({ ...above(hp), id: "hover" });
  const live = reply ?? (hover ? null : whisper);
  const wp = live ? byId(places, live.at) : undefined;
  if (wp) tracks.push({ ...above(wp), id: "whisper" });
  if (!focus) {
    const small = byId(places, "desk-side");
    const wall = byId(places, "shared-bedroom");
    if (small && (states[small.def.id] ?? "before") !== "before")
      tracks.push({
        ...above(small),
        id: "legend-small",
        align: "tag",
        y: mm(small.product.height) + 0.12,
      });
    if (wall && (states[wall.def.id] ?? "before") !== "before")
      tracks.push({
        ...above(wall),
        id: "legend-wall",
        align: "tag",
        y: mm(wall.product.height) + 0.12,
      });
  }
  if (fp && fs !== "before") {
    // the shop tag on the piece's top corner (part tags take its place when it is apart), the card by its base
    if (fs === "after")
      tracks.push({
        id: "tag",
        x: mm(fp.ox + fp.pieceX + widthOf(fp)) - 0.06,
        y: mm(fp.product.height) + 0.02,
        z: mm(fp.oz + fp.depth - frontOf(fp)) + 0.02,
        align: "tag",
      });
    if (!narrow)
      tracks.push({
        id: "card",
        x: mm(fp.ox + fp.pieceX) - 0.12,
        y: 0.16,
        z: mm(fp.oz + fp.depth - frontOf(fp)) + 0.18,
        align: "card",
      });
  }
  if (wp0 && wallOf && bookcase) {
    const w = wallOf;
    const ax = w.dir === "x" ? w.x + w.n * 1200 : w.x + 400;
    const ay = w.dir === "x" ? w.y : w.y - w.n * 1200;
    tracks.push({
      id: "tag",
      x: mm(wp0.ox + ax) - 0.06,
      y: mm(bookcase.height) + 0.02,
      z: mm(wp0.oz + wp0.depth - ay) + 0.02,
      align: "tag",
    });
    if (!narrow)
      tracks.push({
        id: "card",
        x: mm(wp0.ox + w.x) - 0.12,
        y: 0.16,
        z:
          mm(wp0.oz + wp0.depth - (w.dir === "x" ? w.y : w.y - w.n * 1200)) +
          0.18,
        align: "card",
      });
  }
  const partTags = partTagsFor(fp, fs);
  for (const pt of partTags) tracks.push(pt.t);

  // boxes by the front door: what is in the bag, as the boxes it ships in
  const entry = byId(places, "chair-by-the-door");
  const delivery = useMemo(() => {
    if (!entry)
      return {
        blocks: [] as Block3D[],
        lines: [] as string[],
        heaviest: 0,
        n: 0,
      };
    const door = entry.keeps.find((k) => k.id === "door");
    const x0 = (door?.x ?? 100) + 40;
    const y0 = entry.depth - 560;
    const blocks: Block3D[] = [];
    const lines: string[] = [];
    let heaviest = 0;
    let n = 0;
    for (const item of bag.items) {
      const product = resolveProduct(item.config);
      if (!product) continue;
      const bx = boxes(product, item.config);
      lines.push(
        `${item.qty > 1 ? `${item.qty} × ` : ""}${product.name}: ${bx.length * item.qty} ${bx.length * item.qty === 1 ? "box" : "boxes"}`,
      );
      for (let q = 0; q < item.qty; q++)
        for (const b of bx) {
          heaviest = Math.max(heaviest, b.weightKg);
          const stack = Math.floor(n / 5);
          const level = n % 5;
          blocks.push({
            key: `box:${item.id}:${q}:${b.id}`,
            kind: "keep",
            partId: null,
            group: null,
            x: x0 + stack * 660 + (level % 2) * 12,
            y: y0 + (level % 2) * 8,
            z: level * 132,
            w: 600,
            d: 400,
            h: 128,
            color: "#c9a274",
            opacity: 1,
            lift: 0,
            holes: null,
            order: n,
            mat: "card",
          });
          n++;
        }
    }
    return { blocks, lines, heaviest, n };
  }, [bag.items, entry]);
  if (entry && delivery.n > 0 && (!focus || focus === entry.def.id)) {
    const door = entry.keeps.find((k) => k.id === "door");
    const x0 = (door?.x ?? 100) + 40;
    tracks.push({
      id: "delivery",
      x: mm(entry.ox + x0 + 300),
      y: mm(Math.min(5, delivery.n) * 132) + 0.06,
      z: mm(entry.oz + 560 - 200),
      align: "note",
    });
  }

  const els = useRef(new Map<string, HTMLElement>());
  const bind = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) els.current.set(id, el);
      else els.current.delete(id);
    },
    [],
  );

  const sentence = fp
    ? fs === "apart"
      ? `${fp.product.name}, pulled apart. Every part is a panel, a base or a top, and the orange key does every bolt.`
      : fs === "kit"
        ? `${fp.product.name}, as it arrives: ${c?.parts ?? ""} parts flat on the floor, ${c?.bolts ?? ""} bolts in one bag, and the key. The boxes stand by the wall.`
        : (states[fp.def.id] ?? "before") !== "before" &&
            fp.moment.couldFor?.[fp.product.id]
          ? fp.moment.couldFor[fp.product.id]
          : fp.moment.could
    : "";
  // where on the time bar the piece first stands on its own: after the last body panel
  const standsAt = fp ? standsFraction(fp) : 0.3;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = q.trim();
    if (!text) return;
    ask(text);
  };
  /** a wall the friend draws for a room: in the middle, along the back wall or into the room */
  const wallFor = (p: Place, dir: "x" | "z", n: number): Wall =>
    dir === "x"
      ? {
          x: Math.max(0, Math.round((p.def.width - n * 1200) / 2 / 100) * 100),
          y: Math.max(400, Math.round(p.depth / 2 / 100) * 100),
          dir,
          n,
        }
      : {
          x: Math.max(0, Math.round((p.def.width - 400) / 2 / 100) * 100),
          y: p.depth,
          dir,
          n: Math.min(n, Math.max(1, Math.floor(p.depth / 1200))),
        };
  const act = (a: FriendAction): string | null => {
    const id = typeof a.input.place === "string" ? a.input.place : null;
    const p = id ? byId(places, id) : undefined;
    switch (a.name) {
      case "go_to":
        if (p) goTo(p.def.id);
        return p?.def.id ?? null;
      case "pull_apart":
        if (p) {
          setFocus(p.def.id);
          setState(p.def.id, "apart");
        }
        return p?.def.id ?? null;
      case "lay_flat":
        if (p) {
          setFocus(p.def.id);
          setState(p.def.id, "kit");
        }
        return p?.def.id ?? null;
      case "build":
        if (p) {
          setFocus(p.def.id);
          setState(p.def.id, "after");
        }
        return p?.def.id ?? null;
      case "take_it":
        if (p) {
          bag.add(p.config);
          if ((states[p.def.id] ?? "before") === "before") goTo(p.def.id);
        }
        return p?.def.id ?? null;
      case "leave_as_was":
        if (p) setState(p.def.id, "before");
        return p?.def.id ?? null;
      case "draw_wall": {
        const dir = a.input.dir === "z" ? "z" : "x";
        const n = Math.max(1, Math.min(4, Number(a.input.n) || 1));
        if (p) onWall(p.def.id, wallFor(p, dir, n));
        return p?.def.id ?? null;
      }
      case "remove_wall":
        if (p) removeWall(p.def.id);
        return p?.def.id ?? null;
      default:
        return null;
    }
  };
  const houseNow = (): FriendState => ({
    focus,
    places: places.map((p) => ({
      id: p.def.id,
      room: p.def.room,
      spot: p.moment.spot,
      piece: p.product.name,
      pieceId: p.product.id,
      state: states[p.def.id] ?? "before",
      ...(saved.walls[p.def.id]
        ? {
            wall: {
              dir: saved.walls[p.def.id]?.dir ?? "x",
              n: saved.walls[p.def.id]?.n ?? 1,
            },
          }
        : {}),
    })),
    bag: bag.items
      .map((i) => resolveProduct(i.config)?.name ?? "")
      .filter(Boolean),
  });
  const planHref = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Plan it with me")}&body=${encodeURIComponent("Hello Furnishes,\n\nI will send a photo of the wall and two measurements.\n")}`;
  /** run what the friend decided, and say its line at the right place */
  const settle = (
    r: {
      text: string;
      actions: FriendAction[];
      live: boolean;
      unreachable?: boolean;
    },
    at0: string,
    said: string | null,
  ) => {
    if (r.live) setModelAlive(true);
    else if (r.unreachable) setModelAlive(false);
    let at = at0;
    let href: string | undefined;
    let label: string | undefined;
    for (const a of r.actions) {
      if (a.name === "hand_over") {
        href = planHref;
        label = "Send a photo, we plan it";
        continue;
      }
      if (a.name === "remember") {
        if (typeof a.input.fact === "string")
          setMemory((m) => withFact(m, String(a.input.fact)));
        continue;
      }
      const went = act(a);
      if (went) at = went;
    }
    const line = r.text || (href ? "A person can take it from here." : "");
    if (line)
      setReply({
        key: `ask:${Date.now()}`,
        text: line,
        at,
        ...(href ? { href } : {}),
        ...(label ? { label } : {}),
      });
    if (said || line)
      setHistory((h) => {
        const next: FriendTurn[] = [
          ...h,
          ...(said ? [{ role: "user" as const, content: said }] : []),
          ...(line ? [{ role: "assistant" as const, content: line }] : []),
        ];
        return next.slice(-8);
      });
  };
  const ask = async (text: string) => {
    setQ("");
    setAsked(true);
    captionRef.current?.blur();
    setBusy(true);
    const at0 = focus?.startsWith("wall:")
      ? focus.slice(5)
      : (focus ?? "desk-side");
    const r = await sayToFriend(text, history, houseNow(), memory, places);
    setBusy(false);
    if (!r.text && r.actions.length === 0)
      settle(
        {
          ...r,
          text: "Tell me a place: the door, the bed, the desk, the kitchen, the living room, or two people in one room.",
        },
        at0,
        text,
      );
    else settle(r, at0, text);
  };
  /* ---------- moments: the friend watches, and mostly says nothing ---------- */
  const momentGate = useRef({ last: 0, count: 0, lingered: new Set<string>() });
  const moment = useCallback(
    (type: string, place?: string, detail?: string) => {
      if (modelAlive === false) return;
      const g = momentGate.current;
      const now = Date.now();
      if (type !== "visit" && (now - g.last < 6000 || g.count >= 14)) return;
      g.last = now;
      g.count += 1;
      const m: FriendMoment = {
        type,
        ...(place ? { place } : {}),
        ...(detail ? { detail } : {}),
      };
      if (place) setMemory((mem) => withTouched(mem, place));
      void momentForFriend(m, history, houseNow(), memory).then((r) => {
        if (r.live) setModelAlive(true);
        else if (r.unreachable) setModelAlive(false);
        if (!r.text && r.actions.length === 0) return;
        settle(r, place ?? focus ?? "desk-side", null);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modelAlive, history, memory, focus, states, saved, bag.items],
  );
  useEffect(() => {
    momentRef.current = moment;
  }, [moment]);
  // the visit itself is a moment: it also tells us whether the model is there
  const visited = useRef(false);
  useEffect(() => {
    if (visited.current) return;
    visited.current = true;
    const t = window.setTimeout(
      () => moment("visit", undefined, `visit number ${memory.visits}`),
      1200,
    );
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // lingering over a place where nothing stands yet
  useEffect(() => {
    if (!hover || (states[hover] ?? "before") !== "before") return;
    if (momentGate.current.lingered.has(hover)) return;
    const t = window.setTimeout(() => {
      momentGate.current.lingered.add(hover);
      moment("lingered", hover);
    }, 2500);
    return () => window.clearTimeout(t);
  }, [hover, states, moment]);
  const quoteHref = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Quote for the boxes by my door")}&body=${encodeURIComponent(`Hello Furnishes,\n\n${delivery.lines.join("\n")}\n\nPlease send the price and lead time.\n`)}`;

  return (
    <div
      className="hs-root"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <HouseCanvas
        places={places}
        states={states}
        focus={focus}
        hover={hover}
        houseW={size.w}
        houseD={size.d}
        onHover={setHover}
        onTouch={touch}
        onMiss={() => {
          setFocus(null);
          setReply(null);
        }}
        onBuild={onBuild}
        walls={saved.walls}
        onWall={onWall}
        onDrag={onDrag}
        tracks={tracks}
        els={els}
        delivery={delivery.blocks}
      />

      <div className="hs-labels" aria-hidden={false}>
        {hp && (
          <span ref={bind("hover")} className="hs-label">
            {(states[hp.def.id] ?? "before") === "before"
              ? hp.moment.now
              : `${hp.product.name} · ${hp.product.width / 10} cm`}
          </span>
        )}
        {wp && live && (
          <span ref={bind("whisper")} className="hs-label hs-whisper">
            {live.text}
            {live.href && live.label && (
              <>
                {" "}
                <a className="hs-whisper-link" href={live.href}>
                  {live.label} →
                </a>
              </>
            )}
          </span>
        )}
        {!focus && (
          <>
            <button
              ref={bind("legend-small")}
              type="button"
              className="hs-tag hs-tag-legend"
              onClick={() => goTo("desk-side")}
            >
              pieces for a spot
            </button>
            <button
              ref={bind("legend-wall")}
              type="button"
              className="hs-tag hs-tag-legend"
              onClick={() => goTo("shared-bedroom")}
            >
              walls for a room
            </button>
          </>
        )}
        {fp && fs !== "before" && (
          <>
            {fs === "after" && (
              <div ref={bind("tag")} className="hs-tag">
                <b>{fp.product.name}</b>
                <span>
                  {fp.product.width / 10} × {fp.product.height / 10}
                  {fp.product.depth !== null
                    ? ` × ${fp.product.depth / 10}`
                    : ""}{" "}
                  cm
                </span>
                <span className="hs-tag-price">price to be announced</span>
              </div>
            )}
            <div
              ref={narrow ? undefined : bind("card")}
              className={`hs-card${narrow ? " hs-card-sheet" : ""}`}
            >
              <p className="hs-card-kicker">
                {fp.def.room} · {fp.moment.spot}
              </p>
              <p className="hs-card-text">{sentence}</p>
              {c && (
                <p className="hs-card-counts">
                  {c.parts} parts · {c.bolts} bolts · 1 key · ~{c.minutes} min ·{" "}
                  {c.people === 1 ? "one person" : "two people"} · {c.boxes}{" "}
                  {c.boxes === 1 ? "box" : "boxes"}, heaviest {c.heaviestKg} kg
                </p>
              )}
              {build && build.id === fp.def.id && c ? (
                <div
                  className="hs-timebar"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(build.p * 100)}
                >
                  <span className="hs-timebar-label">
                    Building · {Math.round(build.p * c.minutes)} of ~{c.minutes}{" "}
                    min · {c.people === 1 ? "one person" : "two people"} · 1 key
                  </span>
                  <span className="hs-timebar-track">
                    <i
                      className="hs-timebar-fill"
                      style={{ width: `${build.p * 100}%` }}
                    />
                    <i
                      className="hs-timebar-mark"
                      style={{ left: `${standsAt * 100}%` }}
                      data-passed={build.p >= standsAt}
                    >
                      <span>it stands</span>
                    </i>
                  </span>
                </div>
              ) : (
                <p className="hs-card-hint">
                  {fs === "apart"
                    ? "Touch it again to lay every part flat."
                    : fs === "kit"
                      ? "Touch it to build it, part by part."
                      : "Touch it to pull it apart."}
                </p>
              )}
              <div className="hs-card-foot">
                <button
                  type="button"
                  className="hs-stub"
                  onClick={() => {
                    bag.add(fp.config);
                    window.setTimeout(
                      () => momentRef.current("took", fp.def.id),
                      300,
                    );
                  }}
                >
                  Take it
                </button>
                <button
                  type="button"
                  className="hs-quiet"
                  onClick={() => setState(fp.def.id, "before")}
                >
                  Leave the spot as it was
                </button>
              </div>
            </div>
          </>
        )}
        {wp0 && wallOf && bookcase && wc && (
          <>
            <div ref={bind("tag")} className="hs-tag">
              <b>
                {bookcase.name}
                {wallOf.n > 1 ? ` × ${wallOf.n}` : ""}
              </b>
              <span>{(wallOf.n * 120).toFixed(0)} × 160 × 40 cm</span>
              <span className="hs-tag-price">price to be announced</span>
            </div>
            <div
              ref={narrow ? undefined : bind("card")}
              className={`hs-card${narrow ? " hs-card-sheet" : ""}`}
            >
              <p className="hs-card-kicker">
                {wp0.def.room} · a wall for the room
              </p>
              <p className="hs-card-text">
                {wallOf.n === 1
                  ? "One double-sided segment"
                  : `${wallOf.n} double-sided segments end to end`}
                , books on both sides, nothing drilled. Against a wall it is
                storage; in the room it is a boundary.
              </p>
              <p className="hs-card-counts">
                {wc.parts} parts · {wc.bolts} bolts · 1 key · ~{wc.minutes} min
                · two people · {wc.boxes} boxes, heaviest {wc.heaviestKg} kg ·
                built in place
              </p>
              <p className="hs-card-hint">
                Draw another line to move it. This one we plan with you.
              </p>
              <div className="hs-card-foot">
                <a
                  className="hs-stub"
                  href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Plan a wall with me")}&body=${encodeURIComponent(`Hello Furnishes,\n\nA wall of ${wallOf.n} segment${wallOf.n === 1 ? "" : "s"} in the ${wp0.def.room.toLowerCase()}. I will send a photo and two measurements.\n`)}`}
                >
                  Send a photo, we plan it
                </a>
                <button
                  type="button"
                  className="hs-quiet"
                  onClick={() => removeWall(wp0.def.id)}
                >
                  Take the wall away
                </button>
              </div>
            </div>
          </>
        )}
        {partTags.map((pt) => (
          <span key={pt.id} ref={bind(pt.id)} className="hs-parttag">
            {pt.text}
          </span>
        ))}
        {entry && delivery.n > 0 && (!focus || focus === entry.def.id) && (
          <div ref={bind("delivery")} className="hs-note">
            <b>
              {delivery.n} {delivery.n === 1 ? "box" : "boxes"} by the door
              {delivery.heaviest ? ` · heaviest ${delivery.heaviest} kg` : ""}
            </b>
            {delivery.lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span className="hs-note-foot">
              <a
                className="hs-stub"
                href={quoteHref}
                onClick={() => setLastOrder(saveOrder(bag.items).id)}
              >
                Send this to us for a quote
              </a>
              <button
                type="button"
                className="hs-quiet"
                onClick={() => bag.clear()}
              >
                Empty
              </button>
            </span>
            {lastOrder && (
              <span className="hs-note-rec">
                Saved as {lastOrder} ·{" "}
                <Link href={`/order/${lastOrder}`}>its record →</Link>
              </span>
            )}
          </div>
        )}
      </div>

      <div className="hs-corner">
        <button
          type="button"
          className="hs-mark"
          onClick={() => setFocus(null)}
        >
          Furnishes
        </button>
        {!focus ? (
          <p className="hs-tagline">
            A house you can touch. Small pieces for a spot, walls for a room.
          </p>
        ) : (
          <button
            type="button"
            className="hs-home"
            onClick={() => setFocus(null)}
          >
            ← The whole house
          </button>
        )}
        {delivery.n > 0 && (
          <button
            type="button"
            className="hs-boxes"
            onClick={() => goTo("chair-by-the-door")}
          >
            {delivery.n} {delivery.n === 1 ? "box" : "boxes"} by the door
          </button>
        )}
      </div>

      <button
        type="button"
        className="hs-index"
        aria-expanded={sheet}
        onClick={() => setSheet((v) => !v)}
      >
        All pieces
      </button>
      <aside
        className="hs-sheet"
        data-open={sheet}
        aria-hidden={!sheet}
        aria-label="Every piece"
      >
        <div className="hs-sheet-head">
          <b>Every piece, and every wall</b>
          <button
            type="button"
            className="hs-quiet"
            onClick={() => setSheet(false)}
          >
            Close
          </button>
        </div>
        {(
          [
            ["Pieces for a spot", products.filter((p) => p.line === "small")],
            ["Walls for a room", products.filter((p) => p.line === "wall")],
          ] as const
        ).map(([title, list]) => (
          <div key={title} className="hs-sheet-list">
            <h3>{title}</h3>
            {list.map((p) => {
              const here = places.find((pl) => pl.product.id === p.id);
              return (
                <div key={p.id} className="hs-sheet-row">
                  <span className="hs-sheet-pic">
                    <PieceThumb product={p} />
                  </span>
                  <span>
                    <b>{p.name}</b>
                    <span className="hs-sheet-meta">
                      {" "}
                      · {p.width / 10} × {p.height / 10}
                      {p.depth !== null ? ` × ${p.depth / 10}` : ""} cm
                    </span>
                    <span className="hs-sheet-links">
                      {here && (
                        <button
                          type="button"
                          onClick={() => {
                            setSheet(false);
                            goTo(here.def.id);
                          }}
                        >
                          In the house
                        </button>
                      )}
                      <Link href={`/pieces/${p.id}`}>The record</Link>
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        ))}
        <div className="hs-sheet-foot">
          <Link href="/family">The whole family, side by side →</Link>
          <Link href="/pieces">The plain list, as a page →</Link>
          <Link href="/help">Help, delivery, returns, planning →</Link>
        </div>
      </aside>

      <form className="hs-caption" onSubmit={submit}>
        {!asked && (
          <span className="hs-starters">
            <button type="button" onClick={() => ask("Something for a spot")}>
              Something for a spot
            </button>
            <button type="button" onClick={() => ask("Divide a room for two")}>
              Divide a room for two
            </button>
          </span>
        )}
        <span className="hs-caption-line">
          <input
            ref={captionRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Say where, or what bothers you…"
            aria-label="Ask the friend who knows the house"
          />
          <button
            type="submit"
            className="hs-caption-go"
            aria-label="Ask"
            data-busy={busy}
          >
            →
          </button>
        </span>
      </form>
    </div>
  );
}
