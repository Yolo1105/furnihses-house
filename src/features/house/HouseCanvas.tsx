"use client";

import {
  Canvas,
  useFrame,
  useThree,
  type ThreeEvent,
} from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
  Suspense,
  useCallback,
  useMemo,
  useRef,
  type MutableRefObject,
} from "react";
import * as THREE from "three";
import { propsForPiece } from "../storefront/lib/props";
import { boxes, buildSteps, stepForPart } from "../storefront/lib/steps";
import { getProduct } from "../storefront/lib/catalog";
import {
  clamp01,
  easeInOut,
  easeOutBack,
  easeOutBounce,
  easeOutCubic,
  hashUnit,
} from "../storefront/lib/three/anim";
import {
  mm,
  placementBlocks,
  propBlocks,
  type Block3D,
  type Placement3D,
} from "../storefront/lib/three/blocks";
import { detailBlocks } from "./detail";
import { kitLayout, type KitPose } from "./kit";
import { homeBlocksFor } from "./furnish";
import { paperTex, plankTex, specsFor, type MatSpec } from "./materials";
import {
  CUT_H,
  NORTH_H,
  ROW_DEPTH,
  WALL_T,
  type Place,
  type Wall,
} from "./plan";

export type PlaceState = "before" | "after" | "apart" | "kit";
export type Track = {
  id: string;
  x: number;
  y: number;
  z: number;
  /** how the element hangs on the point */
  align?: "above" | "tag" | "card" | "note";
};

type Props = {
  places: Place[];
  states: Record<string, PlaceState>;
  focus: string | null;
  hover: string | null;
  houseW: number;
  houseD: number;
  onHover: (id: string | null) => void;
  onTouch: (id: string) => void;
  onMiss: () => void;
  /** build progress 0–1 while a kit is going together, null when not */
  onBuild: (id: string, progress: number | null) => void;
  /** walls the visitor drew, by place */
  walls: Record<string, Wall>;
  /** a line drawn across a room's floor became a wall */
  onWall: (id: string, wall: Wall) => void;
  /** a piece was held and dragged into another room */
  onDrag: (from: string, to: string) => void;
  tracks: Track[];
  els: MutableRefObject<Map<string, HTMLElement>>;
  /** boxes by the front door, in the entry place's local mm */
  delivery: Block3D[];
};

const HDRI_PATH = "/studio/hdri/";
const HDRI_FILE = "studio_small_03_1k.hdr";

/** The house as one lit scene. Motion lives in refs read by the frame loop. */
export function HouseCanvas(p: Props) {
  const fadeMid = useRef(1);
  const fadeCut = useRef(1);
  const onFade = useCallback((mid: number, cut: number) => {
    fadeMid.current = mid;
    fadeCut.current = cut;
  }, []);
  return (
    <div className="hs-canvas">
      <Canvas
        shadows="percentage"
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        camera={{ fov: 30, near: 0.05, far: 80, position: [5, 9, 14] }}
        style={{ background: "transparent" }}
        onPointerMissed={() => p.onMiss()}
      >
        <Suspense fallback={null}>
          <Environment
            files={HDRI_FILE}
            path={HDRI_PATH}
            environmentIntensity={0.4}
          />
          <hemisphereLight args={["#fff4e6", "#c9a98a", 0.35]} />
          <directionalLight
            position={[4, 9, 7]}
            intensity={1.45}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0004}
            shadow-normalBias={0.02}
            shadow-camera-left={-8}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-bottom={-8}
            shadow-camera-near={0.1}
            shadow-camera-far={30}
          />
          <directionalLight position={[-6, 4, -3]} intensity={0.4} />
          <Shell
            places={p.places}
            houseW={p.houseW}
            houseD={p.houseD}
            fadeMid={fadeMid}
            fadeCut={fadeCut}
          />
          {p.places.map((pl) => (
            <PlaceGroup
              key={pl.def.id}
              place={pl}
              state={p.states[pl.def.id] ?? "before"}
              hovered={p.hover === pl.def.id}
              focused={p.focus === pl.def.id}
              onHover={p.onHover}
              onTouch={p.onTouch}
              onBuild={p.onBuild}
              delivery={pl.def.id === "chair-by-the-door" ? p.delivery : []}
              wall={p.walls[pl.def.id]}
              wallFocused={p.focus === `wall:${pl.def.id}`}
              onWall={p.onWall}
              onDrag={p.onDrag}
              places={p.places}
            />
          ))}
          <Rig
            places={p.places}
            focus={p.focus}
            walls={p.walls}
            houseW={p.houseW}
            houseD={p.houseD}
            fadeMid={fadeMid}
            fadeCut={fadeCut}
            onFade={onFade}
          />
          <Tracker tracks={p.tracks} els={p.els} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/* ---------- floor and cutaway walls ---------- */

function Shell({
  places,
  houseW,
  houseD,
  fadeMid,
  fadeCut,
}: {
  places: Place[];
  houseW: number;
  houseD: number;
  fadeMid: MutableRefObject<number>;
  fadeCut: MutableRefObject<number>;
}) {
  const walls = useMemo(() => {
    const list: {
      key: string;
      x: number;
      z: number;
      w: number;
      h: number;
      d: number;
      kind: "north" | "mid" | "cut";
    }[] = [];
    list.push({
      key: "north",
      x: houseW / 2,
      z: -WALL_T / 2,
      w: houseW + 2 * WALL_T,
      h: NORTH_H,
      d: WALL_T,
      kind: "north",
    });
    list.push({
      key: "mid",
      x: houseW / 2,
      z: ROW_DEPTH + WALL_T / 2,
      w: houseW + 2 * WALL_T,
      h: CUT_H,
      d: WALL_T,
      kind: "mid",
    });
    for (const side of [-WALL_T / 2, houseW + WALL_T / 2])
      list.push({
        key: `side${side}`,
        x: side,
        z: houseD / 2,
        w: WALL_T,
        h: CUT_H,
        d: houseD + 2 * WALL_T,
        kind: "cut",
      });
    for (const pl of places) {
      if (pl.ox === 0) continue;
      list.push({
        key: `part:${pl.def.id}`,
        x: pl.ox - WALL_T / 2,
        z: pl.oz + ROW_DEPTH / 2,
        w: WALL_T,
        h: CUT_H,
        d: ROW_DEPTH,
        kind: "cut",
      });
    }
    return list;
  }, [places, houseW, houseD]);
  return (
    <group>
      <mesh
        rotation-x={-Math.PI / 2}
        position={[mm(houseW) / 2, -0.001, mm(houseD) / 2]}
        receiveShadow
      >
        <planeGeometry args={[mm(houseW) + 1.6, mm(houseD) + 1.6]} />
        <meshStandardMaterial color="#f1dcc4" roughness={0.96} />
      </mesh>
      {places
        .filter((pl) => pl.def.row === 0 && pl.def.id !== "chair-by-the-door")
        .map((pl) => (
          <Window
            key={`win:${pl.def.id}`}
            x={pl.ox + pl.def.width / 2}
            w={Math.min(1400, pl.def.width - 800)}
          />
        ))}
      {walls.map((w) => (
        <Wall
          key={w.key}
          x={w.x}
          z={w.z}
          w={w.w}
          h={w.h}
          d={w.d}
          fade={
            w.kind === "north" ? null : w.kind === "mid" ? fadeMid : fadeCut
          }
        />
      ))}
    </group>
  );
}

/** A window in the north wall: a pale pane and a thin frame, daylight for the room. */
function Window({ x, w }: { x: number; w: number }) {
  const z0 = 1100;
  const h = 1000;
  const f = 50;
  return (
    <group>
      <mesh position={[mm(x), mm(z0 + h / 2), 0.004]}>
        <planeGeometry args={[mm(w), mm(h)]} />
        <meshStandardMaterial
          color="#e3edf2"
          roughness={0.2}
          metalness={0.05}
        />
      </mesh>
      {[
        [x - w / 2 + f / 2, z0 + h / 2, f, h],
        [x + w / 2 - f / 2, z0 + h / 2, f, h],
        [x, z0 + f / 2, w, f],
        [x, z0 + h - f / 2, w, f],
        [x, z0 + h / 2, f, h],
      ].map(([cx, cz, bw, bh], i) => (
        <mesh key={i} position={[mm(cx ?? 0), mm(cz ?? 0), 0.02]} castShadow>
          <boxGeometry args={[mm(bw ?? 0), mm(bh ?? 0), 0.03]} />
          <meshStandardMaterial color="#f7f1e8" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Wall({
  x,
  z,
  w,
  h,
  d,
  fade,
}: {
  x: number;
  z: number;
  w: number;
  h: number;
  d: number;
  fade: MutableRefObject<number> | null;
}) {
  const mat = useRef<THREE.MeshStandardMaterial>(null);
  useFrame(() => {
    const m = mat.current;
    if (!m || !fade) return;
    const o = clamp01(fade.current);
    m.opacity = o;
    m.transparent = o < 0.999;
    m.depthWrite = o > 0.5;
  });
  return (
    <mesh position={[mm(x), mm(h) / 2, mm(z)]} castShadow receiveShadow>
      <boxGeometry args={[mm(w), mm(h), mm(d)]} />
      <meshStandardMaterial
        ref={mat}
        color={fade ? "#f4e6d6" : "#f8ece0"}
        roughness={0.98}
        transparent={Boolean(fade)}
      />
    </mesh>
  );
}

/* ---------- one place: floor, what is there, the piece, its things ---------- */

type Anim = {
  asm: number;
  props: number;
  apart: number;
  pile: number;
  lift: number;
  paper: number;
  /** 0–1: parts lying flat on the floor */
  kit: number;
  /** how the parts arrive: from the air, or up from the kit */
  mode: "arrive" | "build";
  prev: PlaceState;
  lastReport: number;
  /** world-metre offset while the piece is held and dragged */
  dragX: number;
  dragZ: number;
};

const handled = new WeakSet<Event>();
const pressed = new WeakSet<Event>();

function rotateProps(list: Block3D[], px: number, py: number): Block3D[] {
  return list.map((b) => {
    const lx = b.x - px;
    const ly = b.y - py;
    return { ...b, x: px + ly, y: py - lx - b.w, w: b.d, d: b.w };
  });
}

function PlaceGroup({
  place,
  state,
  hovered,
  focused,
  onHover,
  onTouch,
  onBuild,
  delivery,
  wall,
  wallFocused,
  onWall,
  onDrag,
  places,
}: {
  place: Place;
  state: PlaceState;
  hovered: boolean;
  focused: boolean;
  onHover: (id: string | null) => void;
  onTouch: (id: string) => void;
  onBuild: (id: string, progress: number | null) => void;
  delivery: Block3D[];
  wall: Wall | undefined;
  wallFocused: boolean;
  onWall: (id: string, wall: Wall) => void;
  onDrag: (from: string, to: string) => void;
  places: Place[];
}) {
  const pl = useMemo<Placement3D>(
    () => ({
      key: place.def.id,
      product: place.product,
      config: place.config,
      x: place.pieceX,
      ...(place.pieceY !== undefined ? { y: place.pieceY } : {}),
      ...(place.rot ? { rot: place.rot } : {}),
    }),
    [place],
  );
  const together = useMemo(
    () =>
      detailBlocks(placementBlocks(pl, { depthMm: place.depth, explode: 0 })),
    [pl, place.depth],
  );
  const apart = useMemo(
    () =>
      detailBlocks(placementBlocks(pl, { depthMm: place.depth, explode: 1 })),
    [pl, place.depth],
  );
  const keeps = useMemo(
    () => homeBlocksFor(place.keeps, place.depth),
    [place.keeps, place.depth],
  );
  const props = useMemo(() => {
    const py = place.pieceY ?? place.depth - (place.product.depth ?? 400);
    const list = propBlocks(
      propsForPiece(place.product.id, place.product.height),
      { x: place.pieceX, y: py },
      `prop:${place.def.id}`,
    );
    return place.rot ? rotateProps(list, place.pieceX, py) : list;
  }, [place]);
  const pile = useMemo<Block3D[]>(
    () =>
      place.pile.map((it, i) => ({
        key: `pile:${place.def.id}:${i}`,
        kind: "prop",
        geo: it.geo,
        partId: null,
        group: null,
        x: it.x,
        y: it.y,
        z: it.z,
        w: it.w,
        d: it.d,
        h: it.h,
        color: it.color,
        opacity: 1,
        lift: 0,
        holes: null,
        order: i,
        mat: it.mat,
      })),
    [place],
  );
  const kit = useMemo(() => kitLayout(together, place), [together, place]);
  // where each piece of clutter goes when the piece arrives: onto its things
  const travel = useMemo(() => {
    const v = new THREE.Vector3();
    const centre = worldOf(
      {
        ...(together[0] ?? pile[0]),
        x: place.pieceX,
        y: place.pieceY ?? place.depth - (place.product.depth ?? 400),
        z: 0,
        w: place.rot ? (place.product.depth ?? 400) : place.product.width,
        d: place.rot ? place.product.width : (place.product.depth ?? 400),
        h: place.product.height,
        lift: 0,
      } as Block3D,
      place,
      v,
    ).clone();
    return pile.map((_, i) => {
      const pr = props[i % Math.max(1, props.length)];
      return pr ? worldOf(pr, place, new THREE.Vector3()) : centre.clone();
    });
  }, [pile, props, together, place]);
  const kitBoxes = useMemo<Block3D[]>(() => {
    const bx = boxes(place.product, place.config);
    return bx.map((_, i) => ({
      key: `kitbox:${place.def.id}:${i}`,
      kind: "keep",
      partId: null,
      group: null,
      x: 60 + (i % 2) * 10,
      y: place.depth - 520 + (i % 2) * 8,
      z: i * 132,
      w: 600,
      d: 400,
      h: 128,
      color: "#c9a274",
      opacity: 1,
      lift: 0,
      holes: null,
      order: i,
      mat: "card",
    }));
  }, [place]);
  const timing = useMemo(() => {
    const steps = buildSteps(place.product, place.config);
    const n = Math.max(1, steps.length);
    const map = new Map<string, { t0: number; t1: number }>();
    const counters = new Map<number, number>();
    for (const b of together) {
      if (!b.partId) continue;
      let s = stepForPart(steps, b.partId);
      if (s < 0) s = n - 1;
      const k = counters.get(s) ?? 0;
      counters.set(s, k + 1);
      const t0 = (s / n) * 0.82 + k * 0.03;
      map.set(b.key, { t0, t1: Math.min(1, t0 + 0.24) });
    }
    return map;
  }, [together, place]);

  const floor = useMemo(() => {
    const t = plankTex().clone();
    t.needsUpdate = true;
    t.repeat.set(mm(place.def.width) / 0.6, mm(place.depth) / 1.2);
    return t;
  }, [place.def.width, place.depth]);

  const anim = useRef<Anim>({
    asm: state === "before" ? 0 : 1,
    props: state === "before" ? 0 : 1,
    apart: state === "apart" ? 1 : 0,
    pile: state === "before" ? 1 : 0,
    lift: 0,
    paper: 0,
    kit: state === "kit" ? 1 : 0,
    mode: "arrive",
    prev: state,
    lastReport: 0,
    dragX: 0,
    dragZ: 0,
  });
  // drawing a line on the floor, or holding the piece: pointer state, no re-renders
  const gesture = useRef<{
    kind: "draw" | "drag";
    x0: number;
    z0: number;
    x1: number;
    z1: number;
    moved: boolean;
    id: number;
  } | null>(null);
  const line = useRef<THREE.Mesh>(null);
  const floorPoint = (e: ThreeEvent<PointerEvent>) => {
    const t = -e.ray.origin.y / e.ray.direction.y;
    return {
      x: e.ray.origin.x + e.ray.direction.x * t,
      z: e.ray.origin.z + e.ray.direction.z * t,
    };
  };
  /** the room under a floor point, or the nearest one within arm's reach */
  const placeAt = (x: number, z: number) => {
    let best: Place | undefined;
    let bestD = 1.6;
    for (const pl of places) {
      const dx = Math.max(mm(pl.ox) - x, 0, x - mm(pl.ox + pl.def.width));
      const dz = Math.max(mm(pl.oz) - z, 0, z - mm(pl.oz + pl.depth));
      const d = Math.hypot(dx, dz);
      if (d < bestD) {
        bestD = d;
        best = pl;
      }
    }
    return best;
  };
  useFrame(({ clock }, dt) => {
    const a = anim.current;
    if (a.prev !== state) {
      if (a.prev === "kit" && state === "after") {
        // the kit goes together, part by part, from the floor
        a.mode = "build";
        a.asm = 0;
        a.props = 0;
        a.kit = 0;
      } else if (state === "before") a.mode = "arrive";
      a.prev = state;
    }
    if (state === "before") {
      a.asm = 0;
      a.props = 0;
      if (a.mode === "build") onBuild(place.def.id, null);
      a.mode = "arrive";
    } else {
      const was = a.asm;
      a.asm = Math.min(1, a.asm + dt / (a.mode === "build" ? 7.5 : 2.6));
      if (a.asm >= 1) a.props = Math.min(1, a.props + dt / 1.3);
      if (a.mode === "build") {
        const t = clock.elapsedTime;
        if (a.asm >= 1 && was < 1) onBuild(place.def.id, null);
        else if (a.asm < 1 && t - a.lastReport > 0.08) {
          a.lastReport = t;
          onBuild(place.def.id, a.asm);
        }
      }
    }
    const wantKit = state === "kit" ? 1 : 0;
    a.kit += (wantKit - a.kit) * (1 - Math.exp(-dt * 4));
    const wantApart = state === "apart" ? 1 : 0;
    a.apart += (wantApart - a.apart) * (1 - Math.exp(-dt * 5));
    const wantPile = state === "before" ? 1 : 0;
    a.pile += (wantPile - a.pile) * (1 - Math.exp(-dt * 4));
    const wantLift = hovered && !focused ? 1 : 0;
    a.lift += (wantLift - a.lift) * (1 - Math.exp(-dt * 8));
    const wantPaper = focused && state !== "before" && a.asm >= 1 ? 1 : 0;
    a.paper += (wantPaper - a.paper) * (1 - Math.exp(-dt * 4));
    const g = gesture.current;
    const wantDX = g && g.kind === "drag" && g.moved ? g.x1 - g.x0 : 0;
    const wantDZ = g && g.kind === "drag" && g.moved ? g.z1 - g.z0 : 0;
    a.dragX += (wantDX - a.dragX) * (1 - Math.exp(-dt * 14));
    a.dragZ += (wantDZ - a.dragZ) * (1 - Math.exp(-dt * 14));
    const ln = line.current;
    if (ln) {
      if (g && g.kind === "draw" && g.moved) {
        const dx = g.x1 - g.x0;
        const dz = g.z1 - g.z0;
        const alongX = Math.abs(dx) >= Math.abs(dz);
        const len = Math.max(0.05, alongX ? Math.abs(dx) : Math.abs(dz));
        ln.visible = true;
        ln.position.set(
          alongX ? g.x0 + dx / 2 : g.x0,
          0.012,
          alongX ? g.z0 : g.z0 + dz / 2,
        );
        ln.scale.set(alongX ? len : 0.05, 1, alongX ? 0.05 : len);
      } else ln.visible = false;
    }
  });
  const onDown = (e: ThreeEvent<PointerEvent>) => {
    if (e.button !== 0) return;
    // one press reaches this handler once per thing under the pointer: take the first
    if (pressed.has(e.nativeEvent)) return;
    pressed.add(e.nativeEvent);
    const fp = floorPoint(e);
    const onPart = e.intersections.some(
      (hit) =>
        (hit.object as { userData?: { part?: boolean } }).userData?.part ===
        true,
    );
    const kind: "draw" | "drag" =
      onPart && state !== "before" && state !== "kit" ? "drag" : "draw";
    if (kind === "draw" && !focused) return;
    gesture.current = {
      kind,
      x0: fp.x,
      z0: fp.z,
      x1: fp.x,
      z1: fp.z,
      moved: false,
      id: e.pointerId,
    };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: ThreeEvent<PointerEvent>) => {
    const g = gesture.current;
    if (!g || g.id !== e.pointerId) return;
    const fp = floorPoint(e);
    g.x1 = fp.x;
    g.z1 = fp.z;
    if (!g.moved && Math.hypot(fp.x - g.x0, fp.z - g.z0) > 0.12) g.moved = true;
  };
  const onUp = (e: ThreeEvent<PointerEvent>) => {
    const g = gesture.current;
    if (!g || g.id !== e.pointerId) return;
    gesture.current = null;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
    if (!g.moved) return;
    handled.add(e.nativeEvent);
    if (g.kind === "draw") {
      const dx = g.x1 - g.x0;
      const dz = g.z1 - g.z0;
      const alongX = Math.abs(dx) >= Math.abs(dz);
      const lenMm = (alongX ? Math.abs(dx) : Math.abs(dz)) * 1000;
      const n = Math.max(1, Math.min(4, Math.round(lenMm / 1200)));
      const snap = (v: number) => Math.round(v / 100) * 100;
      // local mm: x along the wall, y from the front
      const x0 = snap(
        (Math.min(g.x0, alongX ? g.x1 : g.x0) - mm(place.ox)) * 1000,
      );
      const zBack = snap((Math.min(g.z0, g.z1) - mm(place.oz)) * 1000);
      if (alongX) {
        onWall(place.def.id, {
          x: Math.max(0, Math.min(place.def.width - n * 1200, x0)),
          y: Math.max(
            0,
            Math.min(place.depth - 400, place.depth - zBack - 400),
          ),
          dir: "x",
          n,
        });
      } else {
        onWall(place.def.id, {
          x: Math.max(
            0,
            Math.min(
              place.def.width - 400,
              snap((g.x0 - mm(place.ox)) * 1000) - 200,
            ),
          ),
          y: Math.max(n * 1200, Math.min(place.depth, place.depth - zBack)),
          dir: "z",
          n,
        });
      }
      return;
    }
    const to = placeAt(g.x1, g.z1);
    if (to && to.def.id !== place.def.id) onDrag(place.def.id, to.def.id);
  };
  // the floor paper: the footprint at true size, in front of the piece
  const paper = useMemo(() => {
    const pdepth = place.product.depth ?? 400;
    const fw = place.rot ? pdepth : place.product.width;
    const fd = place.rot ? place.product.width : pdepth;
    const fx = place.pieceX;
    const fyFront = place.rot
      ? place.depth - place.product.width
      : place.depth - pdepth;
    const marginX = 220;
    const front = 340;
    const pw = fw + 2 * marginX;
    const pd = fd + front;
    return {
      tex: paperTex(fw, fd, marginX, front),
      w: pw,
      d: pd,
      cx: fx + fw / 2,
      cyLocal: fyFront - front + pd / 2,
    };
  }, [place]);

  return (
    <group
      onPointerEnter={(e) => {
        e.stopPropagation();
        onHover(place.def.id);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        onHover(null);
        document.body.style.cursor = "";
      }}
      onClick={(e) => {
        // one DOM click can hit the catch volume and a part behind it: count it once
        if (handled.has(e.nativeEvent)) return;
        handled.add(e.nativeEvent);
        e.stopPropagation();
        onTouch(place.def.id);
      }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
    >
      {/* the line being drawn across the floor */}
      <mesh ref={line} visible={false} position={[0, 0.012, 0]}>
        <boxGeometry args={[1, 0.006, 1]} />
        <meshBasicMaterial color="#e7551a" />
      </mesh>
      {wall && (
        <Run
          place={place}
          wall={wall}
          anim={anim}
          focused={wallFocused}
          onHover={onHover}
        />
      )}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[
          mm(place.ox + place.def.width / 2),
          0.002,
          mm(place.oz + place.depth / 2),
        ]}
        receiveShadow
      >
        <planeGeometry args={[mm(place.def.width), mm(place.depth)]} />
        <meshStandardMaterial map={floor} color="#d8bd9c" roughness={0.9} />
      </mesh>
      {/* an unseen volume over the room floor, so a touch anywhere in the room lands here */}
      <mesh
        position={[
          mm(place.ox + place.def.width / 2),
          0.5,
          mm(place.oz + place.depth / 2),
        ]}
      >
        <boxGeometry args={[mm(place.def.width), 1, mm(place.depth)]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      {keeps.map((b) => (
        <HBlock key={b.key} block={b} place={place} anim={anim} role="keep" />
      ))}
      {pile.map((b, i) => (
        <HBlock
          key={b.key}
          block={b}
          place={place}
          anim={anim}
          role="pile"
          travel={travel[i]}
        />
      ))}
      {together.map((b, i) => (
        <HBlock
          key={b.key}
          block={b}
          alt={apart[i]}
          place={place}
          anim={anim}
          role="part"
          timing={timing.get(b.key)}
          kit={kit.get(b.key)}
        />
      ))}
      {kitBoxes.map((b) => (
        <HBlock key={b.key} block={b} place={place} anim={anim} role="kitbox" />
      ))}
      {props.map((b, i) => (
        <HBlock
          key={b.key}
          block={b}
          place={place}
          anim={anim}
          role="prop"
          propIndex={i}
          propCount={props.length}
        />
      ))}
      {delivery.map((b) => (
        <HBlock key={b.key} block={b} place={place} anim={anim} role="keep" />
      ))}
      <Paper
        tex={paper.tex}
        w={paper.w}
        d={paper.d}
        x={place.ox + paper.cx}
        z={place.oz + place.depth - paper.cyLocal}
        anim={anim}
      />
    </group>
  );
}

/** A wall the visitor drew: segments of the double-sided bookcase, end to end, arriving one after another. */
function Run({
  place,
  wall,
  anim,
  focused,
  onHover,
}: {
  place: Place;
  wall: Wall;
  anim: MutableRefObject<Anim>;
  focused: boolean;
  onHover: (id: string | null) => void;
}) {
  const segments = useMemo(() => {
    const product = getProduct("bookcase");
    if (!product) return [] as { blocks: Block3D[]; i: number }[];
    const config = {
      productId: product.id,
      finish: "natural" as const,
      storage: "open" as const,
      accessories: [] as string[],
    };
    const out: { blocks: Block3D[]; i: number }[] = [];
    for (let i = 0; i < wall.n; i++) {
      const pl: Placement3D =
        wall.dir === "x"
          ? {
              key: `wall:${place.def.id}:${i}`,
              product,
              config,
              x: wall.x + i * 1200,
              y: wall.y,
            }
          : {
              key: `wall:${place.def.id}:${i}`,
              product,
              config,
              x: wall.x,
              y: wall.y - i * 1200,
              rot: 90,
            };
      out.push({
        blocks: detailBlocks(placementBlocks(pl, { depthMm: place.depth })),
        i,
      });
    }
    return out;
  }, [place, wall]);
  const runAnim = useRef<Anim>({
    asm: 0,
    props: 0,
    apart: 0,
    pile: 0,
    lift: 0,
    paper: 0,
    kit: 0,
    mode: "arrive",
    prev: "after",
    lastReport: 0,
    dragX: 0,
    dragZ: 0,
  });
  const key = `${wall.x}:${wall.y}:${wall.dir}:${wall.n}`;
  const seen = useRef("");
  useFrame((_, dt) => {
    const a = runAnim.current;
    if (seen.current !== key) {
      seen.current = key;
      a.asm = 0;
    }
    a.asm = Math.min(1, a.asm + dt / (1.6 + wall.n * 0.9));
    a.lift +=
      ((focused ? 0 : anim.current.lift) - a.lift) * (1 - Math.exp(-dt * 8));
  });
  const n = Math.max(1, wall.n);
  return (
    <group
      onPointerEnter={(e) => {
        e.stopPropagation();
        onHover(place.def.id);
      }}
    >
      {segments.map((seg) =>
        seg.blocks.map((b) => (
          <HBlock
            key={b.key}
            block={b}
            place={place}
            anim={runAnim}
            role="part"
            timing={{
              t0: (seg.i / n) * 0.8,
              t1: Math.min(1, (seg.i / n) * 0.8 + 0.28),
            }}
          />
        )),
      )}
    </group>
  );
}

function Paper({
  tex,
  w,
  d,
  x,
  z,
  anim,
}: {
  tex: THREE.Texture;
  w: number;
  d: number;
  x: number;
  z: number;
  anim: MutableRefObject<Anim>;
}) {
  const mat = useRef<THREE.MeshStandardMaterial>(null);
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    const m = mat.current;
    const mesh = ref.current;
    if (!m || !mesh) return;
    const o = anim.current.paper;
    m.opacity = o;
    mesh.visible = o > 0.01;
  });
  return (
    <mesh
      ref={ref}
      rotation-x={-Math.PI / 2}
      position={[mm(x), 0.006, mm(z)]}
      receiveShadow
    >
      <planeGeometry args={[mm(w), mm(d)]} />
      <meshStandardMaterial
        ref={mat}
        map={tex}
        roughness={0.9}
        transparent
        opacity={0}
      />
    </mesh>
  );
}

function worldOf(b: Block3D, place: Place, out: THREE.Vector3) {
  return out.set(
    mm(place.ox + b.x + b.w / 2),
    mm(b.z + b.h / 2 + b.lift),
    mm(place.oz + place.depth - b.y - b.d / 2),
  );
}

function HBlock({
  block: bl,
  alt,
  place,
  anim,
  role,
  timing,
  propIndex = 0,
  propCount = 1,
  kit,
  travel,
}: {
  block: Block3D;
  alt?: Block3D | undefined;
  place: Place;
  anim: MutableRefObject<Anim>;
  role: "keep" | "pile" | "part" | "prop" | "kitbox";
  timing?: { t0: number; t1: number } | undefined;
  propIndex?: number;
  propCount?: number;
  /** where this part lies when the kit is laid out */
  kit?: KitPose | undefined;
  /** where this piece of clutter goes when the piece arrives */
  travel?: THREE.Vector3 | undefined;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const mats = useRef(new Map<number, THREE.MeshStandardMaterial>());
  const bindMat = useCallback(
    (i: number) => (m: THREE.MeshStandardMaterial | null) => {
      if (m) mats.current.set(i, m);
      else mats.current.delete(i);
    },
    [],
  );
  const specs = useMemo<MatSpec[]>(
    () => specsFor(bl, role === "kitbox" ? "keep" : role),
    [bl, role],
  );
  const kitPos = useMemo(
    () => (kit ? new THREE.Vector3(kit.x, kit.y, kit.z) : null),
    [kit],
  );
  const target = useMemo(
    () => worldOf(bl, place, new THREE.Vector3()),
    [bl, place],
  );
  const altTarget = useMemo(
    () => (alt ? worldOf(alt, place, new THREE.Vector3()) : null),
    [alt, place],
  );
  const from = useMemo(() => {
    const a = hashUnit(bl.key, 1);
    const c = hashUnit(bl.key, 2);
    const d = hashUnit(bl.key, 3);
    return {
      offset: new THREE.Vector3(
        (a - 0.5) * 0.9,
        0.9 + c * 0.6,
        0.15 + d * 0.35,
      ),
      spin: new THREE.Euler((c - 0.5) * 0.7, (a - 0.5) * 0.5, (d - 0.5) * 0.7),
    };
  }, [bl.key]);
  const scratch = useRef(new THREE.Vector3());

  useFrame(() => {
    const m = ref.current;
    if (!m) return;
    const a = anim.current;
    const out = scratch.current;
    let opacity = bl.opacity;
    let rx = 0;
    let ry = 0;
    let rz = 0;
    if (role === "part") {
      out.copy(target);
      if (altTarget) out.lerp(altTarget, easeInOut(a.apart));
      const kk = kitPos ? easeInOut(a.kit) : 0;
      if (kitPos && kk > 0) {
        out.lerp(kitPos, kk);
        if (kit) {
          rx = kit.rot[0] * kk;
          ry = kit.rot[1] * kk;
          rz = kit.rot[2] * kk;
        }
      }
      out.y += 0.02 * a.lift;
      if (a.mode === "build" && a.asm < 1 && timing && kitPos && kit) {
        // up from the floor, in order, with a small arc
        const u = clamp01((a.asm - timing.t0) / (timing.t1 - timing.t0));
        const e = easeInOut(u);
        out.copy(kitPos).lerp(target, e);
        out.y += Math.sin(u * Math.PI) * 0.22;
        rx = kit.rot[0] * (1 - e);
        ry = kit.rot[1] * (1 - e);
        rz = kit.rot[2] * (1 - e);
        opacity = bl.opacity;
      } else if (a.mode === "arrive" && a.asm <= 0) {
        // not here yet: a faint outline of what could stand here, on hover
        opacity = 0.3 * a.lift;
      } else if (a.mode === "arrive" && timing) {
        const u = clamp01((a.asm - timing.t0) / (timing.t1 - timing.t0));
        const e = easeOutBack(u);
        const eo = easeOutCubic(u);
        out.addScaledVector(from.offset, 1 - e);
        rx = from.spin.x * (1 - eo);
        ry = from.spin.y * (1 - eo);
        rz = from.spin.z * (1 - eo);
        opacity = bl.opacity * clamp01(u * 4);
      }
    } else if (role === "prop") {
      const n = Math.max(1, propCount);
      const t0 = (propIndex / n) * 0.7;
      const u = clamp01((a.props - t0) / 0.3);
      out.copy(target);
      out.y += 0.35 * (1 - easeOutBounce(u));
      // the things it holds go when it is laid out on the floor
      opacity = clamp01(u * 5) * (1 - a.kit);
    } else if (role === "pile") {
      // the clutter waits until the piece stands, then goes to it
      out.copy(target);
      if (a.asm >= 1 && travel) {
        const u = easeInOut(clamp01(a.props / 0.8));
        out.lerp(travel, u);
        out.y += Math.sin(u * Math.PI) * 0.18;
        opacity = 1 - clamp01((a.props - 0.5) / 0.35);
      } else opacity = a.asm >= 1 ? 0 : 1;
    } else if (role === "kitbox") {
      out.copy(target);
      out.y -= 0.05 * (1 - a.kit);
      opacity = a.kit;
    } else {
      out.copy(target);
    }
    if (role === "part" || role === "prop") {
      out.x += a.dragX;
      out.z += a.dragZ;
      if (a.dragX !== 0 || a.dragZ !== 0)
        out.y += 0.12 * clamp01(Math.hypot(a.dragX, a.dragZ) * 3);
    }
    m.position.copy(out);
    if (bl.axis === "x") m.rotation.set(rx, ry, rz + Math.PI / 2);
    else if (bl.axis === "y") m.rotation.set(rx + Math.PI / 2, ry, rz);
    else m.rotation.set(rx, ry, rz);
    for (const mt of mats.current.values()) {
      mt.opacity = opacity;
      mt.transparent = opacity < 0.999;
      mt.depthWrite = opacity > 0.5;
    }
    m.visible = opacity > 0.01;
  });

  const geo = bl.geo ?? "box";
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      userData={{ part: role === "part" }}
    >
      {geo === "box" && <boxGeometry args={[mm(bl.w), mm(bl.h), mm(bl.d)]} />}
      {geo === "cylinder" && (
        <cylinderGeometry
          args={
            bl.axis === "x"
              ? [mm(bl.h) / 2, mm(bl.h) / 2, mm(bl.w), 28]
              : bl.axis === "y"
                ? [mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.d), 28]
                : [mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.h), 28]
          }
        />
      )}
      {geo === "sphere" && <sphereGeometry args={[mm(bl.w) / 2, 24, 18]} />}
      {geo === "box" && specs.length === 6
        ? specs.map((sp, i) => (
            <meshStandardMaterial
              key={i}
              attach={`material-${i}`}
              ref={bindMat(i)}
              color={sp.color}
              roughness={sp.roughness}
              metalness={sp.metalness ?? 0}
              {...(sp.map ? { map: sp.map } : {})}
              opacity={bl.opacity}
              transparent
            />
          ))
        : (() => {
            const sp = specs[0] ?? { color: bl.color, roughness: 0.8 };
            return (
              <meshStandardMaterial
                ref={bindMat(0)}
                color={sp.color}
                roughness={sp.roughness}
                metalness={sp.metalness ?? 0}
                {...(sp.map ? { map: sp.map } : {})}
                opacity={bl.opacity}
                transparent
              />
            );
          })()}
      {bl.holes?.map(([hx, , hz], i) => (
        <mesh
          key={i}
          position={[
            mm(hx - (bl.x + bl.w / 2)),
            mm(hz - (bl.z + bl.h / 2)),
            mm(bl.d) / 2 + 0.0008,
          ]}
        >
          <circleGeometry args={[0.0055, 14]} />
          <meshStandardMaterial color="#4a3222" roughness={1} />
        </mesh>
      ))}
    </mesh>
  );
}

/* ---------- camera: the whole house, or one place ---------- */

function Rig({
  places,
  focus,
  walls,
  houseW,
  houseD,
  fadeMid,
  fadeCut,
  onFade,
}: {
  places: Place[];
  focus: string | null;
  walls: Record<string, Wall>;
  houseW: number;
  houseD: number;
  fadeMid: MutableRefObject<number>;
  fadeCut: MutableRefObject<number>;
  onFade: (mid: number, cut: number) => void;
}) {
  const look = useRef(new THREE.Vector3());
  const lookCur = useRef<THREE.Vector3 | null>(null);
  const goal = useRef(new THREE.Vector3());
  const clock = useRef(0);
  useFrame((state, dt) => {
    const cam = state.camera;
    const size = state.size;
    clock.current += dt;
    const aspect = size.width / Math.max(1, size.height);
    const tanV = Math.tan((15 * Math.PI) / 180);
    const tanH = tanV * aspect;
    const wallId = focus?.startsWith("wall:") ? focus.slice(5) : null;
    const f = focus
      ? places.find((p) => p.def.id === (wallId ?? focus))
      : undefined;
    const w = wallId && f ? walls[wallId] : undefined;
    let cx: number;
    let cy: number;
    let cz: number;
    let elev: number;
    let azim: number;
    let dist: number;
    const portrait = aspect < 0.95;
    if (f && w) {
      // a drawn wall: frame the whole run from a little higher
      const runW = w.dir === "x" ? w.n * 1200 : 400;
      const runD = w.dir === "x" ? 400 : w.n * 1200;
      const lx = w.x + runW / 2;
      const ly = w.dir === "x" ? w.y + 200 : w.y - runD / 2;
      cx = mm(f.ox + lx);
      cy = 0.8 - (portrait ? 0.9 : 0);
      cz = mm(f.oz + f.depth - ly);
      elev = 30;
      azim = -24;
      dist = Math.max(
        (mm(Math.max(runW, runD)) * 1.25) / 2 / tanH,
        (1.6 * 1.6 + 0.8) / 2 / tanV,
        3.6,
      );
    } else if (f) {
      cx = mm(f.ox + f.focus.x);
      // on a tall screen the panel sits below, so the piece is framed higher
      cy = mm(f.focus.z) * 0.9 - (portrait ? 0.95 : 0);
      cz = mm(f.oz + f.depth - f.focus.y);
      elev = 24;
      azim = -20;
      dist = Math.max(
        (mm(f.def.width) * 1.12) / 2 / tanH,
        (mm(f.product.height) * 1.5 + 0.6) / 2 / tanV,
        3.2,
      );
    } else {
      cx = mm(houseW) / 2;
      cy = portrait ? -0.3 : 0.4;
      cz = mm(houseD) / 2 + 0.3;
      elev = 41;
      azim = -14 + Math.sin(clock.current * 0.16) * 1.2;
      dist = Math.max(
        (mm(houseW) * 1.06) / 2 / tanH,
        (mm(houseD) * 0.9 + 2.2) / 2 / tanV,
      );
    }
    const a = (azim * Math.PI) / 180;
    const e = (elev * Math.PI) / 180;
    look.current.set(cx, cy, cz);
    goal.current.set(
      cx + Math.sin(a) * Math.cos(e) * dist,
      cy + Math.sin(e) * dist,
      cz + Math.cos(a) * Math.cos(e) * dist,
    );
    const k = 1 - Math.exp(-dt * 3);
    let lc = lookCur.current;
    if (!lc) {
      lc = look.current.clone();
      lookCur.current = lc;
      cam.position.copy(goal.current);
    } else {
      cam.position.lerp(goal.current, k);
      lc.lerp(look.current, k);
    }
    cam.lookAt(lc);
    const wantMid = f && f.def.row === 0 ? 0 : 1;
    const wantCut = f ? 0 : 1;
    onFade(
      fadeMid.current + (wantMid - fadeMid.current) * k,
      fadeCut.current + (wantCut - fadeCut.current) * k,
    );
  });
  return null;
}

/* ---------- world points → DOM elements, every frame ---------- */

function Tracker({
  tracks,
  els,
}: {
  tracks: Track[];
  els: MutableRefObject<Map<string, HTMLElement>>;
}) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const v = useMemo(() => new THREE.Vector3(), []);
  useFrame(() => {
    for (const t of tracks) {
      const el = els.current.get(t.id);
      if (!el) continue;
      v.set(t.x, t.y, t.z).project(camera);
      const al = t.align ?? "above";
      const minX = al === "card" ? 360 : al === "note" ? 16 : 230;
      const maxX = al === "note" ? size.width - 340 : size.width - 160;
      const px = Math.min(maxX, Math.max(minX, ((v.x + 1) / 2) * size.width));
      const py = Math.min(
        size.height - (al === "tag" ? 120 : 40),
        Math.max(al === "card" ? 260 : 142, ((1 - v.y) / 2) * size.height),
      );
      const shift =
        al === "tag"
          ? "translate(-50%, 0)"
          : al === "card"
            ? "translate(-100%, -100%)"
            : al === "note"
              ? "translate(0, -100%)"
              : "translate(-50%, -100%)";
      el.style.transform = `translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) ${shift}`;
      el.style.opacity = v.z < 1 ? "1" : "0";
    }
  });
  return null;
}
