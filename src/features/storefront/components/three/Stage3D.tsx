"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import * as THREE from "three";
import { clamp } from "../../lib/iso";
import { keepNames, type KeepId } from "../../lib/moments";
import type { PropSpec } from "../../lib/props";
import { keepWidth } from "../../lib/scene";
import {
  clamp01,
  easeOutBack,
  easeOutBounce,
  easeOutCubic,
  hashUnit,
} from "../../lib/three/anim";
import {
  blockBounds,
  colors3d,
  keepBlocks,
  mm,
  placementBlocks,
  propBlocks,
  type Block3D,
  type Placement3D,
  type PlacementOptions,
} from "../../lib/three/blocks";

/**
 * Motion is driven by refs read inside the frame loop, so a running
 * animation never re-renders React. The page owns the clock; the stage
 * only reads it.
 */
export type Assembly = {
  /** 0–1: nothing placed → everything placed */
  progress: MutableRefObject<number>;
  /** which step (0-based) places a part; -1 = last */
  stepOf: (partId: string) => number;
  steps: number;
};

export type Stage3DProps = {
  placements: Placement3D[];
  keeps?: { id: KeepId; x: number; y?: number }[];
  wallMm?: number | undefined;
  depthMm?: number | undefined;
  showWall?: boolean;
  explode?: number;
  placedIds?: string[] | undefined;
  selected?: string | undefined;
  selectedIds?: string[] | undefined;
  hideGroups?: string[] | undefined;
  morphTo?: PlacementOptions["morphTo"];
  morphProgress?: number;
  onSelect?: ((partId: string) => void) | undefined;
  /** the pointer is over a part, or has left every part */
  onHover?: ((partId: string | null) => void) | undefined;
  /** parts to pin a callout to: a dot on the part, a thin line, and this */
  pins?: string[] | undefined;
  renderPin?: ((partId: string) => ReactNode) | undefined;
  onWall?: ((mm: number) => void) | undefined;
  labels?: boolean;
  orbit?: boolean;
  turn?: number;
  /** parts fly in on a timeline */
  assembly?: Assembly | undefined;
  /** things in use on the first placement; appear on `propsProgress` */
  props?: PropSpec[] | undefined;
  propsProgress?: MutableRefObject<number> | undefined;
  /** 0–1 fade of floor, wall and kept things (story mode) */
  roomFade?: MutableRefObject<number> | undefined;
  /** camera offsets read every frame (story mode) */
  drift?:
    | MutableRefObject<{ turn: number; zoom: number; lift: number }>
    | undefined;
  className?: string | undefined;
};

const HDRI_PATH = "/studio/hdri/";
const HDRI_FILE = "studio_small_03_1k.hdr";

export default function Stage3D(props: Stage3DProps) {
  const depth =
    props.depthMm ??
    Math.max(...props.placements.map((p) => p.product.depth ?? 400), 400);
  const wall = props.wallMm;
  const blocks = useMemo(() => {
    const opts: PlacementOptions = {
      depthMm: depth,
      explode: props.explode ?? 0,
      placedIds: props.placedIds,
      selected: props.selected,
      selectedIds: props.selectedIds,
      hideGroups: props.hideGroups,
      morphTo: props.morphTo,
      morphProgress: props.morphProgress ?? 0,
    };
    const first = props.placements[0];
    const propList =
      props.props && first
        ? propBlocks(props.props, {
            x: first.x,
            y: first.y ?? depth - (first.product.depth ?? 400),
          })
        : [];
    return [
      ...keepBlocks(props.keeps ?? [], depth),
      ...props.placements.flatMap((pl) => placementBlocks(pl, opts)),
      ...propList,
    ];
  }, [
    props.placements,
    props.keeps,
    props.props,
    depth,
    props.explode,
    props.placedIds,
    props.selected,
    props.selectedIds,
    props.hideGroups,
    props.morphTo,
    props.morphProgress,
  ]);

  // assembly timing per block: parts placed by the same step follow each other
  const timing = useMemo(() => {
    const map = new Map<string, { t0: number; t1: number; i: number }>();
    if (!props.assembly) return map;
    const counters = new Map<number, number>();
    const n = Math.max(1, props.assembly.steps);
    for (const b of blocks) {
      if (b.kind !== "part" || !b.partId) continue;
      let s = props.assembly.stepOf(b.partId);
      if (s < 0) s = n - 1;
      const k = counters.get(s) ?? 0;
      counters.set(s, k + 1);
      const t0 = (s / n) * 0.82 + k * 0.03;
      map.set(b.key, { t0, t1: Math.min(1, t0 + 0.24), i: k });
    }
    return map;
  }, [blocks, props.assembly]);
  const propIndex = useMemo(() => {
    const m = new Map<string, number>();
    let i = 0;
    for (const b of blocks) if (b.kind === "prop") m.set(b.key, i++);
    return m;
  }, [blocks]);

  const b = blockBounds(blocks.filter((x) => x.kind !== "prop"));
  const spot = wall !== undefined;
  const W = wall ?? b.xmax - b.xmin;
  const bounds = spot
    ? { xmin: 0, xmax: W, ymin: 0, ymax: depth, zmax: Math.max(b.zmax, 1200) }
    : b;

  // DOM overlays positioned each frame by the Tracker
  const overlays: {
    id: string;
    x: number;
    y: number;
    z: number;
    text: string;
    kind: "keep" | "piece" | "dim";
  }[] = [];
  if (spot && props.labels !== false) {
    (props.keeps ?? []).forEach((k, ki) => {
      const front =
        (k.y ?? depth) -
        (k.id === "bed"
          ? 2000
          : k.id === "sofa"
            ? 850
            : k.id === "desk" || k.id === "counter"
              ? 600
              : 450);
      overlays.push({
        id: `k${ki}`,
        x: mm(k.x + keepWidth[k.id] / 2),
        y: 0.02,
        z: mm(front) + 0.12,
        text: keepNames[k.id],
        kind: "keep",
      });
    });
    props.placements.forEach((pl, pi) => {
      if (!pl.label) return;
      overlays.push({
        id: `p${pi}`,
        x: mm(pl.x + pl.product.width / 2),
        y: 0.02,
        z: mm(depth - (pl.product.depth ?? 400)) + 0.12,
        text: pl.label,
        kind: "piece",
      });
    });
  }
  if (spot && props.labels !== false)
    overlays.push({
      id: "dim",
      x: mm(W) / 2,
      y: 0.01,
      z: mm(depth) + 0.26,
      text: `${W / 10} cm of wall`,
      kind: "dim",
    });
  const handleTrack =
    spot && props.onWall
      ? { id: "handle", x: mm(W), y: 0.35, z: mm(depth) * 0.5 }
      : null;
  /* a callout hangs off the middle of the first block of its part; the line
     leaves alternately left and right so two pins near each other do not
     write over one another */
  const pinned = (() => {
    const mid = (b.xmin + b.xmax) / 2;
    const found = (props.pins ?? []).flatMap((id) => {
      const bl = blocks.find((x) => x.partId === id && x.kind === "part");
      return bl ? [{ id, bl }] : [];
    });
    // The line leaves towards the nearer side of the piece, so it points away
    // from the drawing. Two labels on the same side are told apart by how far
    // the line runs, given in the order they stand, so the ones that are near
    // each other never get the same length.
    const seen = { left: 0, right: 0 };
    return found
      .sort((p, q) => q.bl.z + q.bl.lift - (p.bl.z + p.bl.lift))
      .map(({ id, bl }) => {
        const side: "left" | "right" = bl.x + bl.w / 2 < mid ? "left" : "right";
        const rank = seen[side]++ % 5;
        return {
          id,
          side,
          rank,
          x: mm(bl.x + bl.w / 2),
          y: mm(bl.z + bl.h / 2 + bl.lift),
          z: mm(depth - bl.y - bl.d / 2),
        };
      });
  })();

  const els = useRef(new Map<string, HTMLElement>());
  const pxPerM = useRef(60);
  const onScale = useCallback((v: number) => {
    pxPerM.current = v;
  }, []);
  const bind = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) els.current.set(id, el);
      else els.current.delete(id);
    },
    [],
  );
  const tracks = [
    ...overlays.map((o) => ({ id: o.id, x: o.x, y: o.y, z: o.z })),
    ...pinned.map((p) => ({ id: `pin:${p.id}`, x: p.x, y: p.y, z: p.z })),
    ...(handleTrack ? [handleTrack] : []),
  ];

  return (
    <div
      className={`sf-stage3d${props.className ? ` ${props.className}` : ""}`}
    >
      <Canvas
        shadows="percentage"
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        camera={{ fov: 30, near: 0.05, far: 60 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Environment
            files={HDRI_FILE}
            path={HDRI_PATH}
            environmentIntensity={0.42}
          />
          <hemisphereLight args={["#fff4e6", "#c9a98a", 0.35]} />
          <directionalLight
            position={[2.6, 4.2, 3.4]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0004}
            shadow-normalBias={0.02}
            shadow-camera-left={-mm(Math.max(W, depth)) * 0.9}
            shadow-camera-right={mm(Math.max(W, depth)) * 0.9}
            shadow-camera-top={mm(Math.max(W, depth)) * 0.9}
            shadow-camera-bottom={-mm(Math.max(W, depth)) * 0.9}
            shadow-camera-near={0.1}
            shadow-camera-far={20}
          />
          <directionalLight position={[-3, 2.5, -1.5]} intensity={0.45} />
          <group>
            {spot && (
              <Room
                W={W}
                depth={depth}
                zmax={bounds.zmax}
                showWall={props.showWall !== false}
                fade={props.roomFade}
              />
            )}
            {!spot && (
              <ContactShadows
                position={[
                  mm(b.xmin + b.xmax) / 2,
                  0,
                  mm(depth - (b.ymin + b.ymax) / 2),
                ]}
                opacity={0.42}
                scale={Math.max(mm(b.xmax - b.xmin), mm(b.ymax - b.ymin)) * 2.4}
                blur={2.2}
                far={2}
                resolution={512}
              />
            )}
            {blocks.map((bl) => (
              <Block
                key={bl.key}
                block={bl}
                depth={depth}
                onSelect={props.onSelect}
                onHover={props.onHover}
                assembly={props.assembly}
                timing={timing.get(bl.key)}
                propsProgress={props.propsProgress}
                propIndex={propIndex.get(bl.key) ?? 0}
                propCount={propIndex.size}
                roomFade={props.roomFade}
              />
            ))}
            <Tracker
              tracks={tracks}
              els={els}
              onScale={onScale}
              spot={spot}
              wallMm={W}
              depthMm={depth}
            />
          </group>
          <CameraRig
            bounds={bounds}
            depth={depth}
            turn={props.turn ?? 0}
            spot={spot}
            drift={props.drift}
          />
          {props.orbit !== false && (
            <OrbitControls
              makeDefault
              enablePan={false}
              enableZoom={false}
              enableDamping
              dampingFactor={0.08}
              minPolarAngle={0.55}
              maxPolarAngle={1.5}
              minAzimuthAngle={-1.15}
              maxAzimuthAngle={1.15}
            />
          )}
        </Suspense>
      </Canvas>
      {pinned.length > 0 && props.renderPin && (
        <div className="sf-pins" aria-hidden="true">
          {pinned.map((p) => (
            <span
              key={p.id}
              ref={bind(`pin:${p.id}`)}
              className="sf-pin"
              data-side={p.side}
              style={{ ["--rank" as string]: String(p.rank) }}
            >
              <b className="sf-pin-dot" />
              <i className="sf-pin-line" />
              <span className="sf-pin-what">{props.renderPin?.(p.id)}</span>
            </span>
          ))}
        </div>
      )}
      <div className="sf-3dlabels" aria-hidden="true">
        {overlays.map((o) => (
          <span
            key={o.id}
            ref={bind(o.id)}
            className={`sf-3dlabel ${o.kind === "piece" ? "accent" : o.kind === "dim" ? "dim" : ""}`}
          >
            {o.text}
          </span>
        ))}
      </div>
      {handleTrack && props.onWall && (
        <WallHandle
          bind={bind("handle")}
          wallMm={W}
          onWall={props.onWall}
          pxPerM={pxPerM}
        />
      )}
    </div>
  );
}

/* ---------- floor and wall, fadeable ---------- */

function Room({
  W,
  depth,
  zmax,
  showWall,
  fade,
}: {
  W: number;
  depth: number;
  zmax: number;
  showWall: boolean;
  fade: MutableRefObject<number> | undefined;
}) {
  const floorMat = useRef<THREE.MeshStandardMaterial>(null);
  const wallMat = useRef<THREE.MeshStandardMaterial>(null);
  useFrame(() => {
    const f = fade ? clamp01(fade.current) : 1;
    for (const m of [floorMat.current, wallMat.current]) {
      if (!m) continue;
      m.opacity = f;
      m.transparent = f < 0.999;
    }
  });
  return (
    <>
      <mesh
        rotation-x={-Math.PI / 2}
        position={[mm(W) / 2, -0.001, mm(depth) / 2]}
        receiveShadow
      >
        <planeGeometry args={[mm(W) + 0.4, mm(depth) + 0.4]} />
        <meshStandardMaterial
          ref={floorMat}
          color={colors3d.floor}
          roughness={0.95}
          transparent={Boolean(fade)}
        />
      </mesh>
      {showWall && (
        <mesh position={[mm(W) / 2, mm(zmax + 500) / 2, -0.012]} receiveShadow>
          <boxGeometry args={[mm(W) + 0.4, mm(zmax + 500), 0.024]} />
          <meshStandardMaterial
            ref={wallMat}
            color={colors3d.wall}
            roughness={0.98}
            transparent={Boolean(fade)}
          />
        </mesh>
      )}
    </>
  );
}

/* ---------- where a block is on this frame ---------- */

function frameFor(
  bl: Block3D,
  target: THREE.Vector3,
  from: { offset: THREE.Vector3; spin: THREE.Euler },
  out: THREE.Vector3,
  s: {
    assembly: number | null;
    timing: { t0: number; t1: number; i: number } | undefined;
    props: number | null;
    propIndex: number;
    propCount: number;
    room: number | null;
  },
): {
  pos: THREE.Vector3;
  rx: number;
  ry: number;
  rz: number;
  opacity: number;
  snap: boolean;
} {
  if (bl.kind === "part" && s.assembly !== null && s.timing) {
    const u = clamp01((s.assembly - s.timing.t0) / (s.timing.t1 - s.timing.t0));
    const e = easeOutBack(u);
    const eo = easeOutCubic(u);
    out.copy(target).addScaledVector(from.offset, 1 - e);
    return {
      pos: out,
      rx: from.spin.x * (1 - eo),
      ry: from.spin.y * (1 - eo),
      rz: from.spin.z * (1 - eo),
      opacity: bl.opacity * clamp01(u * 4),
      snap: true,
    };
  }
  if (bl.kind === "prop" && s.props !== null) {
    const n = Math.max(1, s.propCount);
    const t0 = (s.propIndex / n) * 0.7;
    const u = clamp01((s.props - t0) / 0.3);
    out.copy(target);
    out.y += 0.35 * (1 - easeOutBounce(u));
    return {
      pos: out,
      rx: 0,
      ry: 0,
      rz: 0,
      opacity: clamp01(u * 5),
      snap: true,
    };
  }
  const roomOpacity =
    bl.kind === "keep" && s.room !== null
      ? bl.opacity * clamp01(s.room)
      : bl.opacity;
  return {
    pos: target,
    rx: 0,
    ry: 0,
    rz: 0,
    opacity: roomOpacity,
    snap: s.room !== null && bl.kind === "keep",
  };
}

/* ---------- one box (or cylinder, or sphere) ---------- */

function Block({
  block: bl,
  depth,
  onSelect,
  onHover,
  assembly,
  timing,
  propsProgress,
  propIndex,
  propCount,
  roomFade,
}: {
  block: Block3D;
  depth: number;
  onSelect: ((id: string) => void) | undefined;
  onHover: ((id: string | null) => void) | undefined;
  assembly: Assembly | undefined;
  timing: { t0: number; t1: number; i: number } | undefined;
  propsProgress: MutableRefObject<number> | undefined;
  propIndex: number;
  propCount: number;
  roomFade: MutableRefObject<number> | undefined;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshStandardMaterial>(null);
  const target = useMemo(
    () =>
      new THREE.Vector3(
        mm(bl.x + bl.w / 2),
        mm(bl.z + bl.h / 2 + bl.lift),
        mm(depth - bl.y - bl.d / 2),
      ),
    [bl.x, bl.y, bl.z, bl.w, bl.d, bl.h, bl.lift, depth],
  );
  // where this part comes from when it flies in, and how it is turned
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
  const first = useRef(true);
  const scratch = useRef(new THREE.Vector3());

  useFrame((_, dt) => {
    const m = ref.current;
    const mt = mat.current;
    if (!m || !mt) return;
    const f = frameFor(bl, target, from, scratch.current, {
      assembly: assembly ? assembly.progress.current : null,
      timing,
      props: propsProgress ? propsProgress.current : null,
      propIndex,
      propCount,
      room: roomFade ? roomFade.current : null,
    });
    if (f.snap) {
      m.position.copy(f.pos);
    } else if (first.current) {
      m.position.copy(f.pos);
      first.current = false;
    } else {
      m.position.lerp(f.pos, 1 - Math.exp(-dt * 9));
    }
    m.rotation.set(f.rx, f.ry, f.rz);
    const o = f.snap
      ? f.opacity
      : mt.opacity + (f.opacity - mt.opacity) * (1 - Math.exp(-dt * 10));
    mt.opacity = o;
    mt.transparent = o < 0.999;
    mt.depthWrite = o > 0.5;
    m.visible = o > 0.01;
  });

  const interactive = Boolean((onSelect || onHover) && bl.partId);
  const geo = bl.geo ?? "box";
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      {...(interactive
        ? {
            onClick: (e: { stopPropagation: () => void }) => {
              if (!onSelect) return;
              e.stopPropagation();
              if (bl.partId) onSelect(bl.partId);
            },
            onPointerOver: () => {
              if (onSelect) document.body.style.cursor = "pointer";
              if (bl.partId) onHover?.(bl.partId);
            },
            onPointerOut: () => {
              document.body.style.cursor = "";
              onHover?.(null);
            },
          }
        : {})}
    >
      {geo === "box" && <boxGeometry args={[mm(bl.w), mm(bl.h), mm(bl.d)]} />}
      {geo === "cylinder" && (
        <cylinderGeometry args={[mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.h), 28]} />
      )}
      {geo === "sphere" && <sphereGeometry args={[mm(bl.w) / 2, 24, 18]} />}
      <meshStandardMaterial
        ref={mat}
        color={bl.color}
        roughness={bl.kind === "keep" ? 0.9 : bl.kind === "prop" ? 0.8 : 0.72}
        metalness={0}
        opacity={bl.opacity}
        transparent={bl.opacity < 0.999}
      />
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
          <meshStandardMaterial color="#5a3e2c" roughness={1} />
        </mesh>
      ))}
    </mesh>
  );
}

/* ---------- projects world points onto the DOM overlays every frame ---------- */

function Tracker({
  tracks,
  els,
  onScale,
  spot,
  wallMm,
  depthMm,
}: {
  tracks: { id: string; x: number; y: number; z: number }[];
  els: MutableRefObject<Map<string, HTMLElement>>;
  onScale: (pxPerMetre: number) => void;
  spot: boolean;
  wallMm: number;
  depthMm: number;
}) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const v = useMemo(() => new THREE.Vector3(), []);
  const w = useMemo(() => new THREE.Vector3(), []);
  useFrame(() => {
    for (const t of tracks) {
      const el = els.current.get(t.id);
      if (!el) continue;
      v.set(t.x, t.y, t.z).project(camera);
      const px = ((v.x + 1) / 2) * size.width;
      const py = ((1 - v.y) / 2) * size.height;
      el.style.transform = `translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) translate(-50%, -50%)`;
      el.style.opacity = v.z < 1 ? "1" : "0";
    }
    if (spot) {
      v.set(mm(wallMm), 0, mm(depthMm) / 2).project(camera);
      w.set(mm(wallMm) - 1, 0, mm(depthMm) / 2).project(camera);
      onScale(Math.max(1, Math.abs(v.x - w.x) * (size.width / 2)));
    }
  });
  return null;
}

/* ---------- camera ---------- */

function CameraRig({
  bounds,
  depth,
  turn,
  spot,
  drift,
}: {
  bounds: {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    zmax: number;
  };
  depth: number;
  turn: number;
  spot: boolean;
  drift:
    | MutableRefObject<{ turn: number; zoom: number; lift: number }>
    | undefined;
}) {
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls) as {
    target: THREE.Vector3;
    update: () => void;
  } | null;
  const goal = useRef(new THREE.Vector3());
  const look = useRef(new THREE.Vector3());
  const settle = useRef(0);
  const base = useRef({ cx: 0, cy: 0, cz: 0, dist: 1, angle: 0, lift: 0.5 });
  useEffect(() => {
    const cx = mm(bounds.xmin + bounds.xmax) / 2;
    const cy = mm(bounds.zmax) * (spot ? 0.42 : 0.5);
    const cz = mm(depth - (bounds.ymin + bounds.ymax) / 2);
    const size = Math.max(
      mm(bounds.xmax - bounds.xmin),
      mm(bounds.zmax) * 1.1,
      mm(bounds.ymax - bounds.ymin) * 0.8,
    );
    const fov =
      ("fov" in camera ? (camera as THREE.PerspectiveCamera).fov : 30) *
      (Math.PI / 180);
    const dist = (size / 2 / Math.tan(fov / 2)) * (spot ? 1.15 : 1.25);
    base.current = {
      cx,
      cy,
      cz,
      dist,
      angle: turn + (spot ? 22 : 34),
      lift: spot ? 0.42 : 0.5,
    };
    settle.current = 1;
  }, [
    bounds.xmin,
    bounds.xmax,
    bounds.ymin,
    bounds.ymax,
    bounds.zmax,
    depth,
    turn,
    spot,
    camera,
  ]);
  useFrame((_, dt) => {
    const d = drift?.current;
    const bcur = base.current;
    const a = ((bcur.angle + (d?.turn ?? 0)) * Math.PI) / 180;
    const dir = new THREE.Vector3(
      Math.sin(a),
      bcur.lift + (d?.lift ?? 0),
      Math.cos(a),
    ).normalize();
    look.current.set(bcur.cx, bcur.cy, bcur.cz);
    goal.current
      .copy(look.current)
      .addScaledVector(dir, bcur.dist * (d?.zoom ?? 1));
    if (d) {
      // story mode: the camera follows the timeline directly
      camera.position.lerp(goal.current, 1 - Math.exp(-dt * 4));
      if (controls) {
        controls.target.lerp(look.current, 1 - Math.exp(-dt * 4));
        controls.update();
      } else camera.lookAt(look.current);
      return;
    }
    if (settle.current <= 0) return;
    const k = 1 - Math.exp(-dt * 6);
    camera.position.lerp(goal.current, k);
    if (controls) {
      controls.target.lerp(look.current, k);
      controls.update();
    } else camera.lookAt(look.current);
    if (camera.position.distanceTo(goal.current) < 0.003) settle.current = 0;
  });
  return null;
}

/* ---------- the wall edge you drag ---------- */

function WallHandle({
  bind,
  wallMm,
  onWall,
  pxPerM,
}: {
  bind: (el: HTMLElement | null) => void;
  wallMm: number;
  onWall: (mm: number) => void;
  pxPerM: MutableRefObject<number>;
}) {
  const drag = useRef<{ x0: number; w0: number; k: number } | null>(null);
  const [active, setActive] = useState(false);
  const onDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x0: e.clientX, w0: wallMm, k: pxPerM.current };
    setActive(true);
    e.preventDefault();
    e.stopPropagation();
  };
  const onMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d) return;
    const next = d.w0 + ((e.clientX - d.x0) / d.k) * 1000;
    onWall(clamp(Math.round(next / 50) * 50, 600, 8000));
  };
  const onUp = () => {
    drag.current = null;
    setActive(false);
  };
  return (
    <button
      ref={bind}
      type="button"
      className="sf-3dhandle"
      data-active={active}
      aria-label="Wall width"
      title="Drag to your wall width"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") onWall(clamp(wallMm + 100, 600, 8000));
        if (e.key === "ArrowLeft") onWall(clamp(wallMm - 100, 600, 8000));
      }}
    >
      ⟷
    </button>
  );
}
