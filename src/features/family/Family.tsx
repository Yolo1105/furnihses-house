"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { useBag } from "../storefront/lib/bag";
import { mm } from "../storefront/lib/three/blocks";
import {
  families,
  familyOf,
  isConcept,
  firstLifeIn,
  jobOf,
  jobsIn,
  lifeOf,
  livesIn,
  lookKey,
  placeOf,
  productOf,
  recordsIn,
  resolveLife,
  statusOf,
  verbNames,
  verbsOf,
  type Body,
  type Family as FamilyDef,
  type FamilyId,
  type Job,
  type Life,
  type Look,
  type PlaceId,
  type VerbId,
} from "./data";
import { buildCounts, outfitFor, tallyBetween, type Tally } from "./outfit";
import {
  homes,
  roomOf,
  roomsOf,
  worldPoint,
  type HomeId,
  type Stand,
} from "./town";
import { ask } from "./ask";
import { placeStreet, type Placed, type StaticBody } from "./place";
import type { LookState, Perform, Track } from "./FamilyCanvas";

const FamilyCanvas = dynamic(() => import("./FamilyCanvas"), { ssr: false });

type Looks = Record<string, LookState>;
type View = {
  caseId: PlaceId | null;
  verb: VerbId | null;
  /** a life chosen by hand for a body, inside the current place */
  pins: Record<string, string>;
  doors: Record<string, boolean>;
};

/** left to right through the house: the order a change runs across the family */
const orderedIn = (f: FamilyDef) =>
  [...f.bodies].sort((a, b) => {
    const ra = roomOf(a.lives[0]?.caseId ?? null)?.x0 ?? 0;
    const rb = roomOf(b.lives[0]?.caseId ?? null)?.x0 ?? 0;
    return ra - rb;
  });

const toLooks = (looks: Looks): Record<string, Look> =>
  Object.fromEntries(Object.entries(looks).map(([k, v]) => [k, v.to]));

/** what a body wears: its life in the chosen place, or the life it lives at home */
function targetLook(body: Body, v: View): Look {
  const pinned = v.pins[body.id];
  const life =
    (pinned ? lifeOf(body, pinned) : undefined) ??
    (v.caseId ? firstLifeIn(body, v.caseId) : undefined) ??
    body.lives[0];
  if (!life) return { lifeId: null, doors: false };
  const canDoor = productOf(life)?.door ?? false;
  return { lifeId: life.id, doors: canDoor && v.doors[body.id] === true };
}

function firstLooks(f: FamilyDef, v: View): Looks {
  const out: Looks = {};
  orderedIn(f).forEach((b, i) => {
    const to = targetLook(b, v);
    out[b.id] = { from: to, to, n: 0, delay: i * 0.12, leftover: false };
  });
  return out;
}

/** the problem that brings this piece of another kind into this room, if we
    have one: picking it changes kind in the same street, with no page load */
const jobFor = (family: FamilyId, room: PlaceId, body: string) =>
  homes
    .flatMap((h) => jobsIn(h.id))
    .find((j) => j.family === family && j.room === room && j.body === body);

const caseName = (id: PlaceId | null) => placeOf(id)?.name ?? "Anywhere";

const sayTally = (name: string, t: Tally) =>
  `${name}: ${t.stay} parts stay, ${t.off} ${t.off === 1 ? "comes" : "come"} off, ${t.on} ${t.on === 1 ? "goes" : "go"} on. Same key.`;

const WANT_KEY = "furnishes-family-wants-v1";
/** the home the visitor said is most like theirs */
const HOME_KEY = "furnishes-home-v1";
/** the problems the visitor picked: what the quiz ends in */

export default function Family({
  familyId: firstFamily,
  initialCase,
  initialFocus = null,
  initialJob = null,
  initialLife = null,
  given = false,
}: {
  familyId: FamilyId;
  initialCase: PlaceId;
  /** the life the focused body arrives in, when the address names one */
  initialLife?: string | null;
  /** the address named a room: it wins over the home the visitor chose before */
  given?: boolean;
  initialFocus?: string | null;
  /** a problem chosen on another page: play its answer once the street is up */
  initialJob?: string | null;
}) {
  // the family's builders are functions, so the page hands over only its name;
  // which kind is awake is state, so a problem of another kind plays right here
  const [familyId, setFamilyId] = useState<FamilyId>(firstFamily);
  const family = familyOf(familyId) ?? families[0]!;
  const ordered = useMemo(() => orderedIn(family), [family]);
  // how the street opens: the room the address names, and the life it names
  const [first] = useState<View>(() => ({
    caseId: initialCase,
    verb: null,
    pins: initialFocus && initialLife ? { [initialFocus]: initialLife } : {},
    doors: {},
  }));
  const [view, setView] = useState<View>(first);
  const [street, setStreet] = useState<{
    placed: Record<string, Placed>;
    statics: StaticBody[];
  }>(() =>
    placeStreet(family, toLooks(firstLooks(family, first)), initialCase),
  );
  const placed = street.placed;
  const [looks, setLooks] = useState<Looks>(() => {
    const out: Looks = {};
    orderedIn(family).forEach((b, i) => {
      const to = placed[b.id]?.look ?? targetLook(b, first);
      out[b.id] = { from: to, to, n: 0, delay: i * 0.12, leftover: false };
    });
    return out;
  });
  const [homeId, setHomeId] = useState<HomeId>(
    roomOf(initialCase)?.home ?? "flat",
  );
  const [focus, setFocus] = useState<string | null>(initialFocus);
  const [hover, setHover] = useState<string | null>(null);
  const [perform, setPerform] = useState<(Perform & { only?: string }) | null>(
    null,
  );
  const [caption, setCaption] = useState<{
    text: string;
    action?:
      | { label: string; caseId: PlaceId; verb: VerbId }
      | { label: string; jobId: string }
      | { label: string; href: string };
  } | null>(null);
  const [tallies, setTallies] = useState<Record<string, Tally>>({});
  const [ready, setReady] = useState(false);
  const [wants, setWants] = useState<string[]>([]);
  const [took, setTook] = useState<string | null>(null);
  const [free, setFree] = useState(false);
  const [everFree, setEverFree] = useState(false);
  const onFree = useCallback((f: boolean) => {
    setFree(f);
    if (f) setEverFree(true);
  }, []);
  // carried well away from the place the words are about
  const [away, setAway] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [lastJob, setLastJob] = useState<string | null>(initialJob);
  // what the visitor typed, in their own words
  const [query, setQuery] = useState("");
  // the landing page sends what the visitor typed there
  useEffect(() => {
    const t = window.setTimeout(() => {
      const said = new URLSearchParams(window.location.search).get("ask");
      if (said) setQuery(said);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  const jobsEl = useRef<HTMLDivElement>(null);
  const touched = useRef(initialFocus !== null);
  const els = useRef(new Map<string, HTMLElement>());
  const bag = useBag();

  /* ---------- one way to change anything: the family re-dresses ---------- */

  const go = useCallback(
    (next: View, opts?: { byHand?: string; say?: string }) => {
      const out: Looks = {};
      const nextTallies: Record<string, Tally> = {};
      let wave = 0;
      let telling: string | null = null;
      const wanted: Record<string, Look> = {};
      for (const b of ordered) wanted[b.id] = targetLook(b, next);
      const nextStreet = placeStreet(family, wanted, next.caseId, placed);
      const nextPlaced = nextStreet.placed;
      for (const b of ordered) {
        const cur = looks[b.id];
        const to = nextPlaced[b.id]?.look ?? wanted[b.id];
        if (!cur || !to) continue;
        if (lookKey(cur.to) === lookKey(to)) {
          out[b.id] = cur;
          continue;
        }
        out[b.id] = {
          from: cur.to,
          to,
          n: cur.n + 1,
          delay: opts?.byHand === b.id ? 0 : wave++ * 0.14,
          leftover: opts?.byHand === b.id,
        };
        if (cur.to.lifeId && to.lifeId) {
          const t = tallyBetween(family, b, cur.to, to);
          nextTallies[b.id] = t;
          const life = lifeOf(b, to.lifeId);
          if (
            opts?.byHand === b.id ||
            (!telling && t.on + t.off > 0 && cur.to.lifeId !== to.lifeId)
          )
            telling = sayTally(life?.name ?? b.name, t);
        }
      }
      setLooks(out);
      setStreet(nextStreet);
      setView(next);
      const home = roomOf(next.caseId)?.home;
      if (home) setHomeId(home);
      setTallies(nextTallies);
      const c = placeOf(next.caseId);
      // who walked in from another room, so the visitor knows the move was the answer
      let came: string | null = null;
      for (const b of ordered) {
        const was = placed[b.id];
        const now = nextPlaced[b.id];
        if (!was || !now || was.room.id === now.room.id) continue;
        if (next.caseId && now.room.id !== next.caseId) continue;
        const life = lifeOf(b, now.look.lifeId);
        const from = was.room.name
          .replace(/^(by|in|on|at|beside)\s+/i, "")
          .toLowerCase();
        came = `The ${(life?.name ?? b.name).toLowerCase().replace(/^the\s+/, "")} came over from ${from}.`;
        break;
      }
      setCaption({
        text: [opts?.say ?? c?.line, came, telling]
          .filter(Boolean)
          .join("  ·  "),
      });
    },
    [looks, ordered, family, placed],
  );

  /* "What it does" is a question about the home chosen in step 1: who does it
     there, once the family stands the way this view asks. */
  const whoDoes = useCallback(
    (verb: VerbId, next: View, home: HomeId) => {
      const wanted: Record<string, Look> = {};
      for (const b of ordered) wanted[b.id] = targetLook(b, next);
      const at = placeStreet(family, wanted, next.caseId, placed).placed;
      return ordered.filter((b) => {
        const stands = at[b.id];
        if (stands?.room.home !== home) return false;
        const life = lifeOf(b, (stands.look ?? wanted[b.id])?.lifeId ?? null);
        return life ? verbsOf(life).includes(verb) : false;
      });
    },
    [ordered, family, placed],
  );

  const chooseCase = useCallback(
    (
      caseId: PlaceId | null,
      pin?: { body: string; life: string },
      keepVerb = true,
    ) => {
      const stays = focus
        ? family.bodies.find(
            (b) => b.id === focus && (!caseId || firstLifeIn(b, caseId)),
          )
        : undefined;
      if (focus && !stays && !pin) setFocus(null);
      // walking to another room keeps "what it does"; picking a problem is the
      // other answer to the same question, so it lets go of it
      const verb = keepVerb ? view.verb : null;
      const next: View = {
        caseId,
        verb,
        pins: pin ? { [pin.body]: pin.life } : {},
        doors: {},
      };
      // and it comes along only if something in that home does it
      if (verb) {
        const who = whoDoes(verb, next, roomOf(caseId)?.home ?? homeId);
        if (who.length === 0) next.verb = null;
        else if (verb === "hide") for (const b of who) next.doors[b.id] = true;
      }
      go(next, pin ? { byHand: pin.body } : undefined);
      if (next.verb && verb)
        window.setTimeout(
          () => setPerform((p) => ({ verb, n: (p?.n ?? 0) + 1 })),
          1700,
        );
      // nothing of this family lives here: say who does, and offer the way over
      if (caseId && livesIn(family, caseId).length === 0) {
        const other = families
          .filter((f) => f.id !== family.id)
          .flatMap((f) =>
            f.bodies.flatMap((b) =>
              b.lives
                .filter((l) => l.caseId === caseId && !l.grownFrom)
                .map((l) => ({ f, b, l })),
            ),
          )[0];
        const room = placeOf(caseId);
        window.setTimeout(
          () =>
            setCaption({
              text: other
                ? `No ${family.noun.replace(/^a /, "")} lives ${room?.name.toLowerCase() ?? "here"}. The ${other.l.name.toLowerCase()} does.`
                : `Nothing lives ${room?.name.toLowerCase() ?? "here"} yet.`,
              ...(other
                ? {
                    action: ((j) =>
                      j
                        ? { label: `See it, ${other.f.noun}`, jobId: j.id }
                        : {
                            label: `See it, ${other.f.noun}`,
                            href: `/family/${other.f.id}?case=${caseId}&focus=${other.b.id}`,
                          })(jobFor(other.f.id, caseId, other.b.id)),
                  }
                : {}),
            }),
          0,
        );
      }
    },
    [go, view.verb, focus, family, whoDoes, homeId],
  );

  /* ---------- the left menu: what it does, played ---------- */

  const doing = useCallback(
    (verb: VerbId) =>
      ordered.filter((b) => {
        if (placed[b.id]?.room.home !== homeId) return false;
        const life = lifeOf(b, looks[b.id]?.to.lifeId ?? null);
        return life ? verbsOf(life).includes(verb) : false;
      }),
    [looks, ordered, placed, homeId],
  );

  const showMe = useCallback(
    (caseId: PlaceId, verb: VerbId) => {
      const next: View = { caseId, verb, pins: {}, doors: {} };
      if (verb === "hide")
        for (const b of family.bodies) {
          const life = firstLifeIn(b, caseId);
          if (life && productOf(life)?.door) next.doors[b.id] = true;
        }
      go(next);
      setFocus(null);
      window.setTimeout(
        () => setPerform((p) => ({ verb, n: (p?.n ?? 0) + 1 })),
        1500,
      );
    },
    [go, family],
  );

  const playOn = useCallback(
    (bodyId: string, verb: VerbId) => {
      if (verb === "hide") {
        const body = family.bodies.find((b) => b.id === bodyId);
        const life = body
          ? lifeOf(body, looks[bodyId]?.to.lifeId ?? null)
          : undefined;
        if (life && productOf(life)?.door) {
          go(
            {
              ...view,
              doors: { ...view.doors, [bodyId]: !view.doors[bodyId] },
            },
            { byHand: bodyId },
          );
          return;
        }
      }
      setPerform((p) => ({ verb, n: (p?.n ?? 0) + 1, only: bodyId }));
    },
    [go, view, looks, family],
  );

  /* ---------- touching a body ---------- */

  const touch = useCallback(
    (id: string) => {
      touched.current = true;
      const body = family.bodies.find((b) => b.id === id);
      if (!body) return;
      const life = lifeOf(body, looks[id]?.to.lifeId ?? null);
      // it stands in another room: go there
      if (life && view.caseId !== null && life.caseId !== view.caseId)
        chooseCase(life.caseId);
      setFocus(id);
    },
    [looks, chooseCase, family, view.caseId],
  );

  const wear = useCallback(
    (body: Body, life: Life) => {
      touched.current = true;
      if (life.caseId !== view.caseId && view.caseId !== null) {
        chooseCase(life.caseId, { body: body.id, life: life.id });
        return;
      }
      go(
        { ...view, pins: { ...view.pins, [body.id]: life.id } },
        { byHand: body.id },
      );
    },
    [view, go, chooseCase],
  );

  /** a home tab: the whole home, everything where it lives */
  /* Step 1 decides what step 2 can be. Choosing another home therefore starts
     step 2 again: no problem picked, no piece in focus, no "what it does"
     carried over from the last home, the list back at its top, the view back
     to the showing view, so the camera travels to the new home and nothing
     else holds it back. */
  const chooseHome = useCallback(
    (id: HomeId) => {
      touched.current = true;
      setHomeId(id);
      setLastJob(null);
      setFocus(null);
      setHover(null);
      setPerform(null);
      setResetKey((k) => k + 1);
      jobsEl.current?.scrollTo({ top: 0 });
      go(
        { caseId: null, verb: null, pins: {}, doors: {} },
        { say: homes.find((h) => h.id === id)?.who ?? "" },
      );
    },
    [go],
  );
  /** the visitor says which home is most like theirs; the street remembers */
  const [mine, setMine] = useState<HomeId | null>(null);
  const pickHome = useCallback(
    (id: HomeId) => {
      setMine(id);
      try {
        window.localStorage.setItem(HOME_KEY, id);
      } catch {
        /* a private window: the choice lasts as long as the page */
      }
      chooseHome(id);
    },
    [chooseHome],
  );
  const homeRef = useRef<(id: HomeId) => void>(() => {});
  useEffect(() => {
    homeRef.current = chooseHome;
  }, [chooseHome]);

  /** a problem in the visitor's words: go to the room, bring the answer, play it */
  const runJob = useCallback(
    (j: Job) => {
      touched.current = true;
      setLastJob(j.id);
      chooseCase(j.room, { body: j.body, life: j.life }, false);
      setFocus(j.body);
      window.setTimeout(
        () =>
          setPerform((p) => ({
            verb: j.verb,
            n: (p?.n ?? 0) + 1,
            only: j.body,
          })),
        1900,
      );
    },
    [chooseCase],
  );
  useEffect(() => {
    if (!lastJob) return;
    jobsEl.current
      ?.querySelector('[aria-pressed="true"]')
      ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [lastJob]);
  /* A problem that belongs to another kind: that kind wakes up in the same
     street (its pieces become the ones that move), then the problem plays.
     No page load, the visitor stays where they were looking. */
  const [pending, setPending] = useState<string | null>(null);
  const pick = useCallback(
    (j: Job) => {
      if (j.family === family.id) {
        runJob(j);
        return;
      }
      const f = familyOf(j.family);
      if (!f) return;
      touched.current = true;
      const v: View = { caseId: j.room, verb: null, pins: {}, doors: {} };
      const st = placeStreet(f, toLooks(firstLooks(f, v)), j.room);
      const nextLooks: Looks = {};
      orderedIn(f).forEach((b, i) => {
        const to = st.placed[b.id]?.look ?? targetLook(b, v);
        nextLooks[b.id] = {
          from: to,
          to,
          n: 0,
          delay: i * 0.12,
          leftover: false,
        };
      });
      setFamilyId(f.id);
      setView(v);
      setStreet(st);
      setLooks(nextLooks);
      setTallies({});
      setFocus(null);
      setHover(null);
      setPerform(null);
      setLastJob(j.id);
      setPending(j.id);
      window.history.replaceState(null, "", `/family/${f.id}?case=${j.room}`);
    },
    [family.id, runJob],
  );
  const pendingRef = useRef<() => void>(() => {});
  useEffect(() => {
    pendingRef.current = () => {
      const j = jobOf(pending);
      if (j && j.family === family.id) runJob(j);
    };
  }, [pending, family.id, runJob]);
  useEffect(() => {
    if (!pending) return;
    // after the new kind has taken its places
    const t = window.setTimeout(() => {
      pendingRef.current();
      setPending(null);
    }, 350);
    return () => window.clearTimeout(t);
  }, [pending]);

  const jobRef = useRef<() => void>(() => {});
  useEffect(() => {
    jobRef.current = () => {
      const j = jobOf(initialJob);
      if (j && j.family === family.id) runJob(j);
    };
  }, [initialJob, family.id, runJob]);

  /* The page makes no move of its own. It used to walk next door a few seconds
     in, to show that it could; but step 1 is the visitor's choice of a home,
     and a page that changes that choice by itself reads as broken. */
  useEffect(() => {
    if (!ready) return;
    const j = window.setTimeout(() => jobRef.current(), 900);
    return () => window.clearTimeout(j);
  }, [ready]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(WANT_KEY);
        if (raw) setWants(JSON.parse(raw) as string[]);
        const home = homes.find(
          (h) => h.id === window.localStorage.getItem(HOME_KEY),
        );
        if (home) {
          setMine(home.id);
          // they come back to their own home, unless the address asks for a room
          if (!given && home.id !== roomOf(initialCase)?.home)
            homeRef.current(home.id);
        }
      } catch {
        /* a private window: nothing persists */
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, [given, initialCase]);

  const want = useCallback((lifeId: string) => {
    setWants((w) => {
      const next = w.includes(lifeId)
        ? w.filter((x) => x !== lifeId)
        : [...w, lifeId];
      try {
        window.localStorage.setItem(WANT_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFocus(null);
        setResetKey((k) => k + 1);
      }
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const at = e.target;
      if (at instanceof Element && at.closest("input, textarea")) return;
      touched.current = true;
      const ids: (PlaceId | null)[] = [
        ...roomsOf(homeId).map((c) => c.id),
        null,
      ];
      const i = ids.indexOf(view.caseId);
      const n =
        ids[(i + (e.key === "ArrowRight" ? 1 : -1) + ids.length) % ids.length];
      chooseCase(n ?? null);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [view.caseId, chooseCase, homeId]);

  /* ---------- what the stage needs to know ---------- */

  const performers = useMemo(() => {
    const out: Record<string, number> = {};
    if (!perform) return out;
    if (perform.only) {
      out[perform.only] = 0;
      return out;
    }
    doing(perform.verb).forEach((b, i) => (out[b.id] = i));
    return out;
  }, [perform, doing]);

  const washed = useMemo(() => {
    const out: Record<string, boolean> = {};
    for (const b of family.bodies) {
      const life = lifeOf(b, looks[b.id]?.to.lifeId ?? null);
      out[b.id] =
        !life ||
        (view.caseId !== null && life.caseId !== view.caseId) ||
        (view.verb !== null && !verbsOf(life).includes(view.verb)) ||
        (focus !== null && focus !== b.id);
    }
    return out;
  }, [looks, view.verb, view.caseId, focus, family]);

  const hinted = useMemo(() => {
    const out: Record<string, boolean> = {};
    const v = view.verb;
    if (!v || doing(v).length > 0) return out;
    for (const b of family.bodies)
      out[b.id] = b.lives.some((l) => verbsOf(l).includes(v));
    return out;
  }, [view.verb, doing, family]);

  /* What the visitor asked for is marked in the street itself: every piece that
     does the thing they picked, and the piece that answers their problem. */
  // ?still in the address: a clean picture is being taken, nothing is marked
  const [still, setStill] = useState(false);
  // ?before: the same picture without the answer in it, for a before-and-after
  const [before, setBefore] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => {
      const q = new URLSearchParams(window.location.search);
      setStill(q.has("still"));
      setBefore(q.has("before"));
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  const marked = useMemo(() => {
    const out: Record<string, boolean> = {};
    if (still) return out;
    if (view.verb) for (const b of doing(view.verb)) out[b.id] = true;
    if (focus) out[focus] = true;
    return out;
  }, [view.verb, doing, focus, still]);

  const focusBody = family.bodies.find((b) => b.id === focus);
  const focusLife = focusBody
    ? lifeOf(focusBody, looks[focusBody.id]?.to.lifeId ?? null)
    : undefined;
  const focusTally = focus ? tallies[focus] : undefined;
  // the same thing as another kind: shown in this street when we can
  const doorJob = focusLife?.door
    ? jobFor(focusLife.door.to, focusLife.door.caseId, focusLife.door.body)
    : undefined;

  const stands = useMemo(() => {
    const out: Record<string, Stand> = {};
    for (const [id, p] of Object.entries(placed)) out[id] = p.stand;
    return out;
  }, [placed]);

  const tracks = useMemo(() => {
    const out: Track[] = [];
    for (const b of family.bodies) {
      const look = looks[b.id];
      const st = stands[b.id];
      if (!look || !st) continue;
      const o = outfitFor(family, b, look.to);
      const cx = mm(o.left) + mm(o.width) / 2;
      const top = Math.max(o.height, ...o.props.map((pr) => pr.z + pr.h));
      const [tx, ty, tz] = worldPoint(st, cx, mm(top) + 0.08, mm(o.depth) / 2);
      out.push({ id: `tag:${b.id}`, x: tx, y: ty, z: tz });
      if (focus === b.id) {
        const [kx, ky, kz] = worldPoint(
          st,
          mm(o.left) + mm(o.width),
          mm(o.height) * 0.55,
          mm(o.depth) / 2,
        );
        out.push({ id: "card", x: kx, y: ky, z: kz, align: "card" });
        const [px, , pz] = worldPoint(st, cx, 0, mm(o.depth) + 0.85);
        out.push({ id: "pile", x: px, y: 0, z: pz, align: "pile" });
      }
    }
    return out;
  }, [looks, stands, focus, family]);

  const bind = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) els.current.set(id, el);
      else els.current.delete(id);
    },
    [],
  );

  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const set = () => setNarrow(mq.matches);
    const t = window.setTimeout(set, 0);
    mq.addEventListener("change", set);
    return () => {
      window.clearTimeout(t);
      mq.removeEventListener("change", set);
    };
  }, []);
  // the sentence at the top wraps on narrower screens; the scene keeps clear of it
  const [topH, setTopH] = useState(72);
  const top = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = top.current;
    if (!el) return;
    const ro = new ResizeObserver(() =>
      setTopH(Math.round(el.getBoundingClientRect().height)),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const [mid, setMid] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1180px)");
    const set = () => setMid(mq.matches);
    const t = window.setTimeout(set, 0);
    mq.addEventListener("change", set);
    return () => {
      window.clearTimeout(t);
      mq.removeEventListener("change", set);
    };
  }, []);
  // the answer column is open: a piece is in focus, or the visitor's list is
  const sideOpen = focus !== null;
  // the street is framed in the window between the two columns (family.css)
  const inset = useMemo<[number, number, number, number]>(() => {
    if (narrow) return [0, topH + 16, 0, 260];
    const rail = mid ? 320 : 364;
    const side = mid ? 340 : 372;
    return [rail + 24, topH, sideOpen ? side + 24 : 0, 84];
  }, [sideOpen, narrow, mid, topH]);

  const asked = query.trim().length > 1;
  const answers = useMemo(
    () => (asked ? ask(query, homeId) : []),
    [asked, query, homeId],
  );
  const homeNow = homes.find((h) => h.id === homeId);
  const homeTitle = (homeNow?.name ?? "").replace(/^./, (ch) =>
    ch.toUpperCase(),
  );
  const homeWho = homeNow?.who ?? "";
  const nounOf = (f: FamilyId) =>
    (families.find((x) => x.id === f)?.noun ?? f).replace(/^a /, "");
  const c = placeOf(view.caseId);
  const poster = `/family/poster-${family.id}.jpg`;
  const homeTabs = (
    <nav className="f-tabs fm-homes" aria-label="Which home is most like yours">
      {homes.map((h) => (
        <button
          key={h.id}
          type="button"
          className="f-tab"
          aria-pressed={h.id === homeId}
          data-mine={h.id === mine}
          onClick={() => pickHome(h.id)}
        >
          {h.name
            .replace(/^(the|our)\s+/i, "")
            .replace(/^./, (ch) => ch.toUpperCase())}
        </button>
      ))}
    </nav>
  );

  return (
    <div
      className="fm-root"
      data-ready={ready}
      data-side={sideOpen}
      style={{ "--fm-top": `${topH}px` } as React.CSSProperties}
      onPointerDown={() => {
        touched.current = true;
      }}
    >
      <div
        className="fm-poster"
        data-hide={ready}
        aria-hidden="true"
        style={{ backgroundImage: `url(${poster})` }}
      />
      <FamilyCanvas
        family={family}
        homeId={homeId}
        statics={street.statics}
        looks={looks}
        stands={stands}
        caseId={view.caseId}
        washed={washed}
        hinted={hinted}
        marked={marked}
        still={still}
        before={before}
        performers={performers}
        perform={perform}
        focus={focus}
        hover={hover}
        tracks={tracks}
        els={els}
        inset={inset}
        resetKey={resetKey}
        free={free}
        hint={ready && !everFree && focus === null}
        onHover={setHover}
        onTouch={touch}
        onRoom={(id) => {
          touched.current = true;
          chooseCase(id);
        }}
        onMiss={() => setFocus(null)}
        onReady={() => setReady(true)}
        onFree={onFree}
        onAway={setAway}
      />

      <div className="fm-labels">
        {family.bodies.map((b) => {
          const look = looks[b.id];
          const life = lifeOf(b, look?.to.lifeId ?? null);
          const show =
            focus === null ? life !== undefined || hover === b.id : false;
          return (
            <div
              key={b.id}
              ref={bind(`tag:${b.id}`)}
              className="fm-tag f-note"
              data-show={show}
              data-bare={!life}
              data-concept={life ? isConcept(life) : false}
              data-hover={hover === b.id}
              data-mark={marked[b.id] === true}
              data-at={`${placed[b.id]?.room.id ?? "?"} ${placed[b.id]?.spot.id ?? "?"}`}
            >
              {life ? life.name : b.name}
            </div>
          );
        })}
        {focusBody &&
          focusTally &&
          focusTally.off > 0 &&
          looks[focusBody.id]?.leftover === true && (
            <div ref={bind("pile")} className="fm-pile f-note">
              {focusTally.off} {focusTally.off === 1 ? "part" : "parts"} left
              over. They fit the next piece.
            </div>
          )}
      </div>

      <div className="fm-top" ref={top}>
        <SiteHeader />
        <div className="fm-homebar">{homeTabs}</div>
      </div>

      <aside className="fm-rail" aria-label="What bothers you in this home">
        <div className="fm-step">
          <p className="f-label">
            <b>1</b> {mine ? "Your home" : "Which home is most like yours?"}
          </p>
        </div>
        {homeTabs}
        <h1 className="f-h1 fm-title">{homeTitle}</h1>
        <p className="f-small f-muted fm-who">
          {homeWho}{" "}
          <span className="f-num">{recordsIn(homeId)} designs here.</span>
        </p>
        <div className="fm-step">
          <p className="f-label">
            <b>2</b> What bothers you here?
          </p>
          <button
            type="button"
            className="f-link f-small fm-whole"
            data-show={view.caseId !== null}
            tabIndex={view.caseId !== null ? 0 : -1}
            onClick={() => chooseHome(homeId)}
          >
            Whole home
          </button>
        </div>
        <form
          className="fm-say"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            const best = answers[0];
            if (best) pick(best.job);
          }}
        >
          <label className="f-small f-muted" htmlFor="fm-say">
            Say it in your own words
          </label>
          <div className="fm-sayrow">
            <input
              id="fm-say"
              className="f-input"
              type="text"
              autoComplete="off"
              spellCheck={false}
              placeholder="My shoes pile up by the door"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                className="fm-sayx"
                aria-label="Clear"
                onClick={() => setQuery("")}
              >
                ×
              </button>
            )}
          </div>
        </form>
        <div className="fm-jobs" ref={jobsEl}>
          {asked && (
            <section>
              <h2 className="fm-room" data-now="true">
                {answers.length > 0
                  ? "Closest to what you said"
                  : "We have no answer to that yet"}
              </h2>
              {answers.map((a) => (
                <button
                  key={a.job.id}
                  type="button"
                  className="f-option"
                  aria-pressed={lastJob === a.job.id}
                  onClick={() => pick(a.job)}
                >
                  <span>{a.job.say}</span>
                  <em>
                    {a.name}
                    {a.here
                      ? ""
                      : ` · ${homes.find((h) => h.id === a.job.home)?.name ?? ""}`}
                  </em>
                </button>
              ))}
              {answers.length === 0 && (
                <p className="f-small f-muted fm-none">
                  Tell us about it and we plan it with you, to scale, for your
                  room.{" "}
                  <Link href="/help" className="f-link">
                    Plan it with us →
                  </Link>
                </p>
              )}
            </section>
          )}
          {!asked && (
            <p className="f-small f-muted fm-orpick">
              Or pick what sounds like you
            </p>
          )}
          {(asked ? [] : roomsOf(homeId)).map((r) => {
            const list = jobsIn(homeId)
              .filter((j) => j.room === r.id)
              .sort(
                (a, b) =>
                  Number(b.family === family.id) -
                  Number(a.family === family.id),
              );
            if (list.length === 0) return null;
            return (
              <section key={r.id}>
                <h2 className="fm-room" data-now={view.caseId === r.id}>
                  {r.name}
                </h2>
                {list.map((j) => (
                  <button
                    key={j.id}
                    type="button"
                    className="f-option"
                    aria-pressed={lastJob === j.id}
                    onClick={() => pick(j)}
                  >
                    <span>{j.say}</span>
                    {j.family !== family.id && <em>{nounOf(j.family)}</em>}
                  </button>
                ))}
              </section>
            );
          })}
        </div>
      </aside>

      {sideOpen && (
        <aside className="fm-side" aria-label="The answer">
          {focusBody && focusLife && (
            <Card
              key={focusBody.id}
              family={family}
              body={focusBody}
              life={focusLife}
              doors={looks[focusBody.id]?.to.doors === true}
              tally={focusTally}
              wanted={wants.includes(focusLife.id)}
              took={took === focusLife.id}
              onPlay={(v) => playOn(focusBody.id, v)}
              onWear={(l) => wear(focusBody, l)}
              onWant={() => want(focusLife.id)}
              onDoor={doorJob ? () => pick(doorJob) : null}
              onTake={() => {
                const b = resolveLife(focusLife, family.strip);
                const first = b.placements[0];
                if (first && b.placements.length === 1) bag.add(first.config);
                setTook(focusLife.id);
              }}
              onClose={() => setFocus(null)}
            />
          )}
        </aside>
      )}

      <div className="fm-caption" data-away={away}>
        <span className="f-note">
          {caption?.text || c?.line || family.line}
        </span>
        {caption?.action && "href" in caption.action && (
          <Link className="f-btn f-btn--sm" href={caption.action.href}>
            {caption.action.label} →
          </Link>
        )}
        {caption?.action && "jobId" in caption.action && (
          <button
            type="button"
            className="f-btn f-btn--sm"
            onClick={() => {
              const a = caption.action;
              const j = a && "jobId" in a ? jobOf(a.jobId) : undefined;
              if (j) pick(j);
            }}
          >
            {caption.action.label} →
          </button>
        )}
        {caption?.action && "caseId" in caption.action && (
          <button
            type="button"
            className="f-btn f-btn--sm"
            onClick={() => {
              const a = caption.action;
              if (a && "caseId" in a) showMe(a.caseId, a.verb);
            }}
          >
            {caption.action.label} →
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- the card that hangs beside a touched piece ---------- */

function Card({
  family,
  body,
  life,
  doors,
  tally,
  wanted,
  took,
  onPlay,
  onWear,
  onWant,
  onDoor,
  onTake,
  onClose,
}: {
  family: FamilyDef;
  body: Body;
  life: Life;
  doors: boolean;
  tally: Tally | undefined;
  wanted: boolean;
  took: boolean;
  onPlay: (v: VerbId) => void;
  onWear: (l: Life) => void;
  onWant: () => void;
  /** the same thing as another kind, shown in this street; null = follow the link */
  onDoor: (() => void) | null;
  onTake: () => void;
  onClose: () => void;
}) {
  const b = resolveLife(life, family.strip);
  const product = productOf(life);
  const n = buildCounts(b);
  const single = b.placements.length === 1 && product !== undefined;
  const others = body.lives.filter(
    (l) => l.id !== life.id && !l.grownFrom && l.id !== life.grownFrom,
  );
  const grows = body.lives.filter((l) => l.grownFrom === life.id);
  const back = life.grownFrom ? lifeOf(body, life.grownFrom) : undefined;
  const canDoor = product?.door ?? false;
  return (
    <div className="fm-card" role="region" aria-label={life.name}>
      <button
        type="button"
        className="fm-x"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <p className="f-label">
        <b>3</b> Our answer · No. {life.record}
      </p>
      <div className="fm-head">
        <h2 className="f-h2">{life.name}</h2>
        <p className="fm-line">{life.line}</p>
      </div>

      <div className="fm-verbs">
        {verbsOf(life).map((v) => (
          <button
            key={v}
            type="button"
            className="f-btn f-btn--sm"
            onClick={() => onPlay(v)}
          >
            {v === "hide" && canDoor
              ? doors
                ? "open"
                : "hide"
              : verbNames[v].name.toLowerCase()}
          </button>
        ))}
      </div>

      <dl className="f-facts fm-facts">
        <div>
          <dt>Size</dt>
          <dd>
            {b.width / 10} × {b.depth / 10} × {b.height / 10} cm
          </dd>
        </div>
        <div>
          <dt>To build</dt>
          <dd>
            {n.parts} parts · {n.bolts} bolts · one key · about {n.minutes} min
            · {n.people === 1 ? "one person" : `${n.people} people`}
          </dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>
            <span className="f-status" data-made={statusOf(life).made}>
              {statusOf(life).label}
            </span>
          </dd>
        </div>
      </dl>

      {tally && (tally.on > 0 || tally.off > 0) && (
        <p className="fm-tally">
          <b>{tally.stay}</b> stay · <b>{tally.off}</b> come off ·{" "}
          <b>{tally.on}</b> go on · same key
          {tally.onNames.length > 0 && (
            <span>Goes on: {tally.onNames.join(", ")}.</span>
          )}
          {tally.offNames.length > 0 && (
            <span>Comes off: {tally.offNames.join(", ")}.</span>
          )}
        </p>
      )}
      {tally && tally.on === 0 && tally.off === 0 && tally.stay > 0 && (
        <p className="fm-tally">
          <b>{tally.stay}</b> parts, all of them stay · only the arrangement
          changes
        </p>
      )}

      {(others.length > 0 || grows.length > 0 || back || life.door) && (
        <div className="fm-rel">
          {others.length > 0 && (
            <>
              <span className="f-small">Same frame, other versions</span>
              {others.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  className="fm-ver"
                  onClick={() => onWear(l)}
                >
                  <b>{l.name}</b>
                  <span>{caseName(l.caseId).toLowerCase()}</span>
                </button>
              ))}
            </>
          )}
          {grows.map((l) => (
            <button
              key={l.id}
              type="button"
              className="fm-ver"
              onClick={() => onWear(l)}
            >
              <b>{l.name}</b>
              <span>add {l.growLine}</span>
            </button>
          ))}
          {back && (
            <button
              type="button"
              className="fm-ver"
              onClick={() => onWear(back)}
            >
              <b>{back.name}</b>
              <span>back to where it started</span>
            </button>
          )}
          {life.door && onDoor && (
            <button type="button" className="fm-ver" onClick={onDoor}>
              <b>{life.door.line}</b>
              <span>
                as {families.find((f) => f.id === life.door?.to)?.noun ?? ""} →
              </span>
            </button>
          )}
          {life.door && !onDoor && (
            <Link
              className="fm-ver"
              href={`/family/${life.door.to}?case=${life.door.caseId}&focus=${life.door.body}`}
            >
              <b>{life.door.line}</b>
              <span>
                as {families.find((f) => f.id === life.door?.to)?.noun ?? ""} →
              </span>
            </Link>
          )}
        </div>
      )}

      <div className="fm-actions">
        {isConcept(life) || !single ? (
          <>
            <button
              type="button"
              className="f-btn f-btn--primary"
              aria-pressed={wanted}
              onClick={onWant}
            >
              {wanted ? "Noted. We will tell you." : "Tell me when it is made"}
            </button>
            {wanted && (
              <Link href="/bag" className="f-link">
                Kept in your bag →
              </Link>
            )}
          </>
        ) : (
          <>
            <button
              type="button"
              className="f-btn f-btn--primary"
              onClick={onTake}
            >
              {took ? "Added to your bag" : "Add to bag"}
            </button>
            {took ? (
              <Link href="/bag" className="f-link">
                Go to your bag →
              </Link>
            ) : (
              <Link href={`/pieces/${product.id}`} className="f-link">
                Full details →
              </Link>
            )}
          </>
        )}
      </div>
      <Link className="f-link f-small fm-inline" href={`/pieces#r-${life.id}`}>
        All versions of this frame, in the shop →
      </Link>
    </div>
  );
}
