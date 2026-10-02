"use client";

/* The street the five homes stand on, drawn as a street: grass underfoot, asphalt
   with a centre line and crossings, kerbs, paved pavements, a paved base under
   each of our homes and a path from it to the road; neighbours that are houses
   (plaster, gables, tiled roofs, windows, doors, chimneys) rather than blank
   blocks; trees with uneven crowns in leaf greens. Nothing here moves. */

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { usePal } from "./palette-ctx";
import { DRACO } from "./prop-models";
import { scaled } from "./pbr";
import {
  CLOSE,
  ROADS,
  homePoint,
  homes,
  scenery,
  type Home,
  type Road,
  type Scenery,
} from "./town";

/* The scene is lit bright, so what is underfoot is set darker than it should
   read. Everything out here is in the warm half of the wheel, because the
   page is peach paper and the homes are birch and oak: asphalt a warm taupe,
   paving a sandstone, grass the straw-olive of a lawn in late sun, leaves an
   olive. Nothing on the ground is white (white is for the walls and what
   stands in the rooms) and nothing is a cold, saturated green. */
const ASPHALT = "#786c62";
const PAVING = "#b8a690";
const KERB = "#c6b8a4";
const PAINT = "#eadfce";
export const LAWN = "#989a6c";
const HEDGE = "#7d7f52";
const LEAVES = ["#84874f", "#777b47", "#92935a"];
const BARK = "#6f5a46";
const WALLS = ["#f3ece0", "#efe3d2", "#f6f0e6", "#ead9c4"];
const STONE = "#cdc2b1";
// clay tiles and slate, greyed by weather: never a bright orange
const ROOFS = ["#a8836f", "#9a7b69", "#8d8780", "#b09079"];
/** the cut edge of a home's floor slab, the tone of its cut walls */
const SLAB = "#d8cbb6";

/** the same numbers every time, so a saved still matches the live street */
function dice(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- the ground ---------- */

/** mown grass seen from a roof: soft patches, no blades */
function grassTex() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d");
  const rnd = dice(7);
  if (g) {
    g.fillStyle = "#f4f4ee";
    g.fillRect(0, 0, 512, 512);
    // patches, drawn nine times over so the tile has no seam
    for (let i = 0; i < 150; i++) {
      const x = rnd() * 512;
      const y = rnd() * 512;
      const r = 18 + rnd() * 64;
      const warm = rnd() < 0.5;
      const a = 0.05 + rnd() * 0.07;
      for (const ox of [-512, 0, 512])
        for (const oy of [-512, 0, 512]) {
          const gr = g.createRadialGradient(
            x + ox,
            y + oy,
            0,
            x + ox,
            y + oy,
            r,
          );
          gr.addColorStop(
            0,
            warm ? `rgba(255, 240, 200, ${a})` : `rgba(170, 160, 110, ${a})`,
          );
          gr.addColorStop(1, "rgba(255, 255, 255, 0)");
          g.fillStyle = gr;
          g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2);
        }
    }
    for (let i = 0; i < 5200; i++) {
      g.fillStyle =
        rnd() < 0.5 ? "rgba(140, 128, 84, 0.10)" : "rgba(255, 248, 226, 0.12)";
      g.fillRect(rnd() * 512, rnd() * 512, 1.5, 1.5);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  // one tile is eleven metres of lawn
  t.repeat.set(260 / 11, 260 / 11);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** what the whole neighbourhood stands on */
export function Ground() {
  const grass = useMemo(() => grassTex(), []);
  return (
    <mesh
      position={[4, -0.02, -4]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[260, 260]} />
      <meshPhysicalMaterial color={LAWN} map={grass} roughness={1} />
    </mesh>
  );
}

/* ---------- roads ---------- */

const curveOf = (line: [number, number][]) =>
  new THREE.CatmullRomCurve3(
    line.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false,
    "catmullrom",
    0.4,
  );

/** a strip along a polyline, on the ground; one texture unit is four metres */
function ribbon(line: [number, number][], width: number, offset = 0) {
  const curve = curveOf(line);
  const n = 96;
  const pos: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];
  const len = curve.getLength();
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t);
    const nx = -tan.z;
    const nz = tan.x;
    const cx = p.x + nx * offset;
    const cz = p.z + nz * offset;
    pos.push(cx + nx * (width / 2), 0, cz + nz * (width / 2));
    pos.push(cx - nx * (width / 2), 0, cz - nz * (width / 2));
    uv.push((t * len) / 4, 0, (t * len) / 4, width / 4);
    if (i < n) {
      const a = i * 2;
      idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** flat rectangles on the ground, merged: each is [x, z, along, across, angle] */
function marks(list: [number, number, number, number, number][]) {
  const geos = list.map(([x, z, along, across, angle]) => {
    const g = new THREE.PlaneGeometry(along, across);
    g.rotateX(-Math.PI / 2);
    g.rotateY(angle);
    g.translate(x, 0, z);
    return g;
  });
  return mergeGeometries(geos, false) ?? new THREE.BufferGeometry();
}

/** the dashes down the middle of a road */
function centreLine(road: Road) {
  const curve = curveOf(road.line);
  const len = curve.getLength();
  const out: [number, number, number, number, number][] = [];
  for (let s = 2; s < len - 2; s += 4.2) {
    const t = s / len;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t);
    out.push([p.x, p.z, 1.8, 0.12, Math.atan2(-tan.z, tan.x)]);
  }
  return marks(out);
}

/** a zebra crossing at `at` metres along a road */
function crossing(road: Road, at: number) {
  const curve = curveOf(road.line);
  const t = at / curve.getLength();
  const p = curve.getPointAt(t);
  const tan = curve.getTangentAt(t);
  const nx = -tan.z;
  const nz = tan.x;
  const angle = Math.atan2(-tan.z, tan.x);
  const out: [number, number, number, number, number][] = [];
  const n = Math.floor(road.w / 0.9);
  for (let i = 0; i < n; i++) {
    const off = -road.w / 2 + 0.45 + i * 0.9;
    out.push([p.x + nx * off, p.z + nz * off, 2.6, 0.45, angle]);
  }
  return marks(out);
}

/** world metres -> a home's own metres (x along its back wall, z toward you) */
function toLocal(h: Home, x: number, z: number): [number, number] {
  const r = (h.rot * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  const dx = x - h.origin.x;
  const dz = z - h.origin.z;
  return [dx * c - dz * s, dx * s + dz * c];
}

/** where a path may meet a road: points down the middle of its pavement */
function kerbside() {
  const out: [number, number][] = [];
  for (const r of ROADS) {
    const curve = curveOf(r.line);
    const off = r.w / 2 + 0.16 + r.kerb / 2;
    for (let i = 0; i <= 240; i++) {
      const p = curve.getPointAt(i / 240);
      const tan = curve.getTangentAt(i / 240);
      for (const side of [1, -1])
        out.push([p.x - tan.z * off * side, p.z + tan.x * off * side]);
    }
  }
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    out.push([
      CLOSE.x + Math.cos(a) * (CLOSE.r + 0.6),
      CLOSE.z + Math.sin(a) * (CLOSE.r + 0.6),
    ]);
  }
  return out;
}

let edgeCache: [number, number][] | null = null;
const pavementPoints = () => (edgeCache ??= kerbside());

/** One path as one strip: corners are mitred and the slabs are counted along
    its whole length, so the paving runs on round a corner instead of two
    rectangles meeting at an angle. */
function pathStrip(line: [number, number][], width: number) {
  const pos: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];
  let run = 0;
  for (let i = 0; i < line.length; i++) {
    const at = line[i];
    const prev = line[i - 1] ?? at;
    const next = line[i + 1] ?? at;
    if (!at || !prev || !next) continue;
    if (i > 0) run += Math.hypot(at[0] - prev[0], at[1] - prev[1]);
    const dir = (p: [number, number], q: [number, number]) => {
      const l = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
      return [(q[0] - p[0]) / l, (q[1] - p[1]) / l] as const;
    };
    const d0 = i > 0 ? dir(prev, at) : dir(at, next);
    const d1 = i < line.length - 1 ? dir(at, next) : d0;
    // the mitre: the bisector of the two side normals, stretched to keep width
    let nx = -(d0[1] + d1[1]);
    let nz = d0[0] + d1[0];
    const nl = Math.hypot(nx, nz) || 1;
    nx /= nl;
    nz /= nl;
    const stretch = 1 / Math.max(0.5, nx * -d0[1] + nz * d0[0]);
    const h = (width / 2) * stretch;
    pos.push(
      at[0] + nx * h,
      0,
      at[1] + nz * h,
      at[0] - nx * h,
      0,
      at[1] - nz * h,
    );
    uv.push(run / 4, 0, run / 4, width / 4);
    if (i < line.length - 1) {
      const k = i * 2;
      idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // wound either way round depending on the turn: face it up
  const n = g.attributes.normal;
  if (n && n.getY(0) < 0) {
    const flipped = [];
    for (let i = 0; i < idx.length; i += 3)
      flipped.push(idx[i] ?? 0, idx[i + 2] ?? 0, idx[i + 1] ?? 0);
    g.setIndex(flipped);
    g.computeVertexNormals();
  }
  return g;
}

/** how far a path keeps from a wall it walks along */
const BESIDE = 0.78;

/** The way from a home's door to the road, in the home's own lines: straight
    out when the road is out there, otherwise along the back wall, round the
    nearer corner and down the side (the side passage every house has), and
    only then across to the pavement. It never enters the footprint, and it
    ends in the middle of the pavement, which is laid over its end. */
/** which side of each home its path walks down: -1 west, 1 east, 0 neither */
const pathSide = new Map<string, number>();

function homePaths() {
  const out: THREE.BufferGeometry[] = [];
  const edge = pavementPoints();
  for (const h of homes) {
    const W = h.w / 1000;
    const D = h.d / 1000;
    const world = (x: number, z: number) => homePoint(h, x * 1000, z * 1000);
    const local = edge.map(([x, z]) => toLocal(h, x, z));
    const crosses = (p: [number, number], q: [number, number]) => {
      for (let i = 1; i < 40; i++) {
        const x = p[0] + ((q[0] - p[0]) * i) / 40;
        const z = p[1] + ((q[1] - p[1]) * i) / 40;
        if (x > -0.4 && x < W + 0.4 && z > -0.4 && z < D + 0.4) return true;
      }
      return false;
    };
    /** the nearest pavement that can be walked to from here in a straight line */
    const reach = (from: [number, number]) => {
      let best: { to: [number, number]; d: number } | null = null;
      for (const q of local) {
        const d = Math.hypot(q[0] - from[0], q[1] - from[1]);
        if (d > 16 || (best && d >= best.d) || crosses(from, q)) continue;
        best = { to: q, d };
      }
      return best;
    };
    const door = h.rooms
      .flatMap((r) => r.keeps.map((k) => ({ r, k })))
      .find(({ k, r }) => k.id === "door" && r.z0 === 0);
    const shutter = h.rooms
      .flatMap((r) => (r.models ?? []).map((m) => ({ r, m })))
      .find(({ m, r }) => m.id === "rollershutter_door" && r.z0 === 0);
    const outs: { x: number; w: number }[] = [];
    if (door) outs.push({ x: (door.k.x + 450) / 1000, w: 1.2 });
    if (shutter) outs.push({ x: shutter.m.x / 1000, w: 2.8 });
    for (const o of outs) {
      const sill: [number, number] = [o.x, -0.12];
      const step: [number, number] = [o.x, -BESIDE];
      const routes: [number, number][][] = [];
      const direct = reach(step);
      // straight out: the road is behind the back wall, in front of this door
      if (direct && direct.to[1] < -BESIDE && Math.abs(direct.to[0] - o.x) < 3)
        routes.push([sill, direct.to]);
      for (const cx of [-BESIDE, W + BESIDE]) {
        const back: [number, number] = [cx, -BESIDE];
        const front: [number, number] = [cx, D + BESIDE];
        const fromBack = reach(back);
        if (fromBack) routes.push([sill, step, back, fromBack.to]);
        const fromFront = reach(front);
        if (fromFront) routes.push([sill, step, back, front, fromFront.to]);
      }
      const len = (r: [number, number][]) =>
        r.reduce((n, p, i) => {
          const q = r[i - 1];
          return q ? n + Math.hypot(p[0] - q[0], p[1] - q[1]) : n;
        }, 0);
      const route = routes.sort((p, q) => len(p) - len(q))[0];
      const corner = route && route.length > 2 ? route[2] : undefined;
      pathSide.set(h.id, corner ? (corner[0] < 0 ? -1 : 1) : 0);
      if (route)
        out.push(
          pathStrip(
            route.map(([x, z]) => world(x, z)),
            o.w,
          ),
        );
    }
  }
  // the neighbours' front paths: from each door step to its pavement
  for (const s of scenery) {
    if (s.kind !== "block") continue;
    const f = frontOf(s, edge);
    if (f.to) out.push(pathStrip([f.step, f.to], 1.1));
  }
  return mergeGeometries(out, false) ?? new THREE.BufferGeometry();
}

/** Which long side of a neighbour's house faces its street, where its door
    step is, and the pavement straight out from it (if it is near enough). */
function frontOf(
  s: Extract<Scenery, { kind: "block" }>,
  edge: [number, number][],
) {
  const r = (s.rot * Math.PI) / 180;
  const place = (x: number, z: number): [number, number] => [
    s.x + x * Math.cos(r) + z * Math.sin(r),
    s.z - x * Math.sin(r) + z * Math.cos(r),
  ];
  const nW = Math.max(2, Math.floor(s.w / 2.6));
  const doorX = -s.w / 2 + (s.w / nW) * (Math.floor(nW / 2) + 0.5);
  let best: {
    side: 1 | -1;
    step: [number, number];
    to: [number, number];
    d: number;
  } | null = null;
  for (const side of [1, -1] as const) {
    const step = place(doorX, side * (s.d / 2 + 0.6));
    for (const q of edge) {
      const d = Math.hypot(q[0] - step[0], q[1] - step[1]);
      if (!best || d < best.d) best = { side, step, to: q, d };
    }
  }
  const side = best?.side ?? 1;
  return {
    side,
    doorX,
    step: best?.step ?? place(doorX, s.d / 2 + 0.6),
    to: best && best.d < 9 ? best.to : null,
  };
}

function paverTex() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const rnd = dice(3);
  if (g) {
    g.fillStyle = "#f2f0ec";
    g.fillRect(0, 0, 256, 256);
    // eight slabs a side, laid half-bond, each a touch different
    for (let r = 0; r < 8; r++)
      for (let k = -1; k < 8; k++) {
        const x = k * 32 + (r % 2) * 16;
        const tone = 226 + Math.floor(rnd() * 22);
        g.fillStyle = `rgb(${tone}, ${tone - 2}, ${tone - 5})`;
        g.fillRect(x + 0.5, r * 32 + 0.5, 31, 31);
      }
    g.strokeStyle = "rgba(96, 86, 74, 0.34)";
    g.lineWidth = 1;
    for (let r = 0; r <= 8; r++) {
      g.beginPath();
      g.moveTo(0, r * 32);
      g.lineTo(256, r * 32);
      g.stroke();
      for (let k = -1; k <= 8; k++) {
        const x = k * 32 + (r % 2) * 16;
        g.beginPath();
        g.moveTo(x, r * 32);
        g.lineTo(x, r * 32 + 32);
        g.stroke();
      }
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  // a strip's texture unit is 4 m; one tile of this is 3.6 m of 45 cm slabs
  t.repeat.set(4 / 3.6, 4 / 3.6);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** What one of our homes stands on: its own floor slab, cut where the home is
    cut, a hand wider than the rooms and in the tone of the cut walls. Grass
    runs up to it. Drawn in the home's own metres. */
export function Slab({ home }: { home: Home }) {
  const geo = useMemo(
    () =>
      mergeGeometries(
        home.rooms.map((r) => {
          const w = (r.x1 - r.x0) / 1000 + 0.3;
          const d = (r.z1 - r.z0) / 1000 + 0.3;
          const g = new THREE.BoxGeometry(w, 0.16, d);
          g.translate((r.x0 + r.x1) / 2000, -0.081, (r.z0 + r.z1) / 2000);
          return g;
        }),
        false,
      ),
    [home],
  );
  if (!geo) return null;
  return (
    <mesh geometry={geo} receiveShadow>
      <meshPhysicalMaterial color={SLAB} roughness={0.9} />
    </mesh>
  );
}

export function Roads() {
  const palette = usePal();
  const asphalt = useMemo(() => scaled(palette.asphalt_floor, 8, 8), [palette]);
  const pavers = useMemo(() => paverTex(), []);
  const geo = useMemo(() => {
    const main = ROADS[0];
    return {
      strips: ROADS.map((r) => ({
        road: ribbon(r.line, r.w),
        kerbL: ribbon(r.line, 0.16, -(r.w / 2 + 0.08)),
        kerbR: ribbon(r.line, 0.16, r.w / 2 + 0.08),
        paveL: ribbon(r.line, r.kerb, -(r.w / 2 + 0.16 + r.kerb / 2)),
        paveR: ribbon(r.line, r.kerb, r.w / 2 + 0.16 + r.kerb / 2),
      })),
      line: main ? centreLine(main) : null,
      zebra: main
        ? [crossing(main, 38), crossing(main, 58), crossing(main, 80)]
        : [],
      paths: homePaths(),
    };
  }, []);
  const tarmac = (
    <meshPhysicalMaterial
      color={ASPHALT}
      roughness={0.94}
      roughnessMap={asphalt.rough}
      normalMap={asphalt.normal}
      normalScale={[0.55, 0.55]}
    />
  );
  const paved = (
    <meshPhysicalMaterial color={PAVING} roughness={0.9} map={pavers} />
  );
  return (
    <group>
      {/* paths first, so the pavements lie over their ends */}
      <mesh geometry={geo.paths} position={[0, 0.03, 0]} receiveShadow>
        {paved}
      </mesh>
      {geo.strips.map((g, i) => (
        <group key={i}>
          <mesh geometry={g.paveL} position={[0, 0.05, 0]} receiveShadow>
            {paved}
          </mesh>
          <mesh geometry={g.paveR} position={[0, 0.05, 0]} receiveShadow>
            {paved}
          </mesh>
          <mesh geometry={g.kerbL} position={[0, 0.062, 0]} receiveShadow>
            <meshPhysicalMaterial color={KERB} roughness={0.85} />
          </mesh>
          <mesh geometry={g.kerbR} position={[0, 0.062, 0]} receiveShadow>
            <meshPhysicalMaterial color={KERB} roughness={0.85} />
          </mesh>
          <mesh
            geometry={g.road}
            position={[0, 0.02 + i * 0.004, 0]}
            receiveShadow
          >
            {tarmac}
          </mesh>
        </group>
      ))}
      {/* the close: pavement, kerb, the turning circle, and the green in it */}
      <mesh
        position={[CLOSE.x, 0.048, CLOSE.z]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <ringGeometry args={[CLOSE.r, CLOSE.r + 1.2, 64]} />
        {paved}
      </mesh>
      <mesh
        position={[CLOSE.x, 0.026, CLOSE.z]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[CLOSE.r, 64]} />
        {tarmac}
      </mesh>
      <mesh position={[CLOSE.x, 0.07, CLOSE.z]} receiveShadow castShadow>
        <cylinderGeometry args={[CLOSE.green, CLOSE.green, 0.14, 48]} />
        <meshPhysicalMaterial color={LAWN} roughness={1} />
      </mesh>
      <mesh
        position={[CLOSE.x, 0.075, CLOSE.z]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[CLOSE.green, CLOSE.green + 0.16, 48]} />
        <meshPhysicalMaterial color={KERB} roughness={0.85} />
      </mesh>
      {geo.line && (
        <mesh geometry={geo.line} position={[0, 0.034, 0]}>
          <meshPhysicalMaterial color={PAINT} roughness={0.8} />
        </mesh>
      )}
      {geo.zebra.map((g, i) => (
        <mesh key={i} geometry={g} position={[0, 0.035, 0]}>
          <meshPhysicalMaterial color={PAINT} roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- what stands along it ---------- */

const box = (
  w: number,
  h: number,
  d: number,
  x: number,
  y: number,
  z: number,
) => {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x, y, z);
  return g;
};

/** courses of roof tiles: one unit of u is four courses, of v four tiles */
const COURSE = 0.34;
const TILE = 0.27;
function tileTex() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const rnd = dice(11);
  if (g) {
    for (let k = 0; k < 4; k++)
      for (let i = -1; i < 4; i++) {
        const y = i * 64 + (k % 2) * 32;
        const tone = 214 + Math.floor(rnd() * 34);
        g.fillStyle = `rgb(${tone}, ${tone - 3}, ${tone - 8})`;
        g.fillRect(k * 64, y, 64, 64);
        // the joint between two tiles of a course
        g.fillStyle = "rgba(70, 52, 44, 0.42)";
        g.fillRect(k * 64, y, 64, 2);
      }
    for (let k = 0; k < 4; k++) {
      // each course laps over the one below: a lit lip, then its shadow
      const gr = g.createLinearGradient(k * 64, 0, k * 64 + 64, 0);
      gr.addColorStop(0, "rgba(60, 44, 38, 0.5)");
      gr.addColorStop(0.16, "rgba(60, 44, 38, 0)");
      gr.addColorStop(0.86, "rgba(255, 255, 255, 0)");
      gr.addColorStop(1, "rgba(255, 255, 255, 0.28)");
      g.fillStyle = gr;
      g.fillRect(k * 64, 0, 64, 256);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1 / (COURSE * 4), 1 / (TILE * 4));
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
let tiles: THREE.CanvasTexture | null = null;
const roofTiles = () => (tiles ??= tileTex());

/** one side of a pitched roof: a slab whose top is mapped in metres */
function roofSlab(run: number, rise: number, len: number, side: 1 | -1) {
  const over = 0.42;
  const pitch = Math.atan2(rise, run);
  const slope = (run + over) / Math.cos(pitch);
  const g = new THREE.BoxGeometry(slope, 0.14, len);
  const uv = g.attributes.uv;
  if (uv)
    for (let i = 0; i < uv.count; i++)
      uv.setXY(i, uv.getX(i) * slope, uv.getY(i) * len);
  // lie it on the slope: its upper edge at the ridge, its lower past the wall
  g.translate((side * slope) / 2, 0.07, 0);
  g.rotateZ(-side * pitch);
  g.translate(0, rise, 0);
  return g;
}

/** A neighbour's house: closed, because only our five are opened up. */
function Neighbour({
  item,
  index,
}: {
  item: Extract<Scenery, { kind: "block" }>;
  index: number;
}) {
  const palette = usePal();
  const plaster = useMemo(
    () => scaled(palette.plastered_wall, 3, 2.5),
    [palette],
  );
  const { w, d, h } = item;
  const parts = useMemo(() => {
    const frames: THREE.BufferGeometry[] = [];
    const glass: THREE.BufferGeometry[] = [];
    // windows along the two long sides, a door on the side that faces its street
    const front = frontOf(item, pavementPoints()).side;
    const nW = Math.max(2, Math.floor(w / 2.6));
    for (const side of [1, -1]) {
      for (let i = 0; i < nW; i++) {
        const x = -w / 2 + (w / nW) * (i + 0.5);
        if (side === front && i === Math.floor(nW / 2)) continue;
        frames.push(box(1.12, 1.32, 0.08, x, 1.62, (side * d) / 2));
        glass.push(box(0.94, 1.14, 0.1, x, 1.62, (side * d) / 2));
        frames.push(box(1.3, 0.07, 0.2, x, 0.93, (side * d) / 2));
      }
    }
    const nD = Math.max(1, Math.floor(d / 3.2));
    for (const side of [1, -1])
      for (let i = 0; i < nD; i++) {
        const z = -d / 2 + (d / nD) * (i + 0.5);
        frames.push(box(0.08, 1.32, 1.12, (side * w) / 2, 1.62, z));
        glass.push(box(0.1, 1.14, 0.94, (side * w) / 2, 1.62, z));
        frames.push(box(0.2, 0.07, 1.3, (side * w) / 2, 0.93, z));
      }
    const doorX = -w / 2 + (w / nW) * (Math.floor(nW / 2) + 0.5);
    const rise = (w / 2) * 0.62;
    // the gable walls: the end walls carried up to the ridge
    const tri = new THREE.Shape();
    tri.moveTo(-w / 2, 0);
    tri.lineTo(w / 2, 0);
    tri.lineTo(0, rise);
    tri.closePath();
    const gable = new THREE.ExtrudeGeometry(tri, {
      depth: d,
      bevelEnabled: false,
    });
    gable.translate(0, h, -d / 2);
    const len = d + 0.8;
    const roof = mergeGeometries(
      [roofSlab(w / 2, rise, len, 1), roofSlab(w / 2, rise, len, -1)],
      false,
    );
    roof?.translate(0, h, 0);
    return {
      frames: mergeGeometries(frames, false),
      glass: mergeGeometries(glass, false),
      gable,
      roof,
      ridge: box(0.34, 0.12, len, 0, h + rise + 0.11, 0),
      door: mergeGeometries(
        [
          box(1.0, 2.1, 0.1, doorX, 1.05, (front * d) / 2),
          box(0.06, 0.06, 0.16, doorX + 0.36, 1.05, front * (d / 2 + 0.06)),
        ],
        false,
      ),
      stone: mergeGeometries(
        [
          // the plinth, the step at the door, the chimney
          box(w + 0.08, 0.36, d + 0.08, 0, 0.18, 0),
          box(1.5, 0.16, 0.7, doorX, 0.08, front * (d / 2 + 0.35)),
          box(
            0.55,
            rise * 0.62 + 1.0,
            0.55,
            w * 0.2,
            h + rise * 0.69 + 0.5,
            -d * 0.18,
          ),
        ],
        false,
      ),
    };
  }, [item, w, d, h]);
  const wallTone = WALLS[index % WALLS.length] ?? "#f3ece0";
  const roofTone = ROOFS[index % ROOFS.length] ?? "#a8836f";
  return (
    <group
      position={[item.x, 0, item.z]}
      rotation={[0, (item.rot * Math.PI) / 180, 0]}
    >
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshPhysicalMaterial
          color={wallTone}
          roughness={0.92}
          roughnessMap={plaster.rough}
          normalMap={plaster.normal}
          normalScale={[0.35, 0.35]}
        />
      </mesh>
      <mesh geometry={parts.gable} castShadow receiveShadow>
        <meshPhysicalMaterial color={wallTone} roughness={0.92} />
      </mesh>
      {parts.roof && (
        <mesh geometry={parts.roof} castShadow receiveShadow>
          <meshPhysicalMaterial
            color={roofTone}
            roughness={0.88}
            map={roofTiles()}
          />
        </mesh>
      )}
      <mesh geometry={parts.ridge} castShadow>
        <meshPhysicalMaterial color={roofTone} roughness={0.85} />
      </mesh>
      {parts.frames && (
        <mesh geometry={parts.frames} castShadow>
          <meshPhysicalMaterial color="#fbf8f2" roughness={0.6} />
        </mesh>
      )}
      {parts.glass && (
        <mesh geometry={parts.glass}>
          <meshPhysicalMaterial
            color="#5b6a72"
            roughness={0.12}
            metalness={0.2}
            envMapIntensity={1.4}
          />
        </mesh>
      )}
      {parts.door && (
        <mesh geometry={parts.door} castShadow>
          <meshPhysicalMaterial color="#9a6f4a" roughness={0.6} />
        </mesh>
      )}
      {parts.stone && (
        <mesh geometry={parts.stone} castShadow receiveShadow>
          <meshPhysicalMaterial color={STONE} roughness={0.9} />
        </mesh>
      )}
    </group>
  );
}

/** A tree: a trunk that forks, and a crown of uneven masses, darker underneath.
    Every tree is its own shape, and the same shape every time. */
function treeGeo(s: number, seed: number) {
  const rnd = dice(seed * 97 + 13);
  const masses: [number, number, number, number][] = [[0, 2.75, 0, 0.98]];
  const n = 7 + Math.floor(rnd() * 3);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rnd() * 0.7;
    const out = 0.5 + rnd() * 0.42;
    masses.push([
      Math.cos(a) * out,
      2.05 + rnd() * 1.15,
      Math.sin(a) * out,
      0.46 + rnd() * 0.3,
    ]);
  }
  const v = new THREE.Vector3();
  const lo = 1.5 * s;
  const hi = 3.9 * s;
  const crown = mergeGeometries(
    masses.map(([x, y, z, r], m) => {
      const g = new THREE.IcosahedronGeometry(r * s, 3);
      const pos = g.attributes.position;
      if (pos) {
        const tint = new Float32Array(pos.count * 3);
        for (let i = 0; i < pos.count; i++) {
          v.fromBufferAttribute(pos, i);
          // break the ball: the same push for the same point, so no cracks
          const k =
            1 +
            0.1 *
              Math.sin((v.x / s) * 7.1 + m) *
              Math.sin((v.y / s) * 6.3 + 1.7) +
            0.07 * Math.sin((v.z / s) * 9.7 + (v.x / s) * 4.1 + m * 2.3);
          v.multiplyScalar(k);
          pos.setXYZ(i, v.x + x * s, v.y + y * s, v.z + z * s);
          // leaves in the light on top, in shade underneath
          const lift = (v.y + y * s - lo) / (hi - lo);
          const c = 0.7 + 0.42 * Math.min(1, Math.max(0, lift));
          tint.set([c, c, c * 0.96], i * 3);
        }
        g.setAttribute("color", new THREE.BufferAttribute(tint, 3));
      }
      return g;
    }),
    false,
  );
  const limb = (
    len: number,
    r: number,
    lean: number,
    turn: number,
    y: number,
  ) => {
    const g = new THREE.CylinderGeometry(r * 0.6 * s, r * s, len * s, 8);
    g.translate(0, (len * s) / 2, 0);
    g.rotateZ(lean);
    g.rotateY(turn);
    g.translate(0, y * s, 0);
    return g;
  };
  const wood = mergeGeometries(
    [
      limb(2.2, 0.11, 0, 0, 0),
      limb(1.1, 0.06, 0.62, rnd() * 6, 1.35),
      limb(1.0, 0.055, -0.55, rnd() * 6, 1.55),
    ],
    false,
  );
  return { crown, wood };
}

function Tree({
  item,
  index,
}: {
  item: Extract<Scenery, { kind: "tree" }>;
  index: number;
}) {
  const geo = useMemo(() => treeGeo(item.size, index), [item.size, index]);
  return (
    <group position={[item.x, 0, item.z]} rotation={[0, index * 1.7, 0]}>
      {geo.wood && (
        <mesh geometry={geo.wood} castShadow>
          <meshPhysicalMaterial color={BARK} roughness={0.95} />
        </mesh>
      )}
      {geo.crown && (
        <mesh geometry={geo.crown} castShadow receiveShadow>
          <meshPhysicalMaterial
            color={LEAVES[index % LEAVES.length] ?? "#728d50"}
            roughness={1}
            vertexColors
          />
        </mesh>
      )}
    </group>
  );
}

function Lamp({ item }: { item: Extract<Scenery, { kind: "lamp" }> }) {
  const { scene } = useGLTF("/models/street_lamp_01.glb", DRACO);
  const obj = useMemo(() => {
    const c = scene.clone(true);
    c.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) m.castShadow = true;
    });
    return c;
  }, [scene]);
  return (
    <primitive
      object={obj}
      position={[item.x, 0, item.z]}
      rotation={[0, (item.rot * Math.PI) / 180, 0]}
      scale={0.9}
    />
  );
}

/* ---------- gardens ---------- */

const BRICK = "#b9795e";
const COPING = "#c9bba6";

/** a low garden wall in running bond: one unit of u is four bricks, of v six courses */
function brickTex() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const rnd = dice(19);
  if (g) {
    g.fillStyle = "#efe6da";
    g.fillRect(0, 0, 256, 256);
    const bw = 64;
    const bh = 256 / 6;
    for (let r = 0; r < 6; r++)
      for (let k = -1; k < 4; k++) {
        const tone = 205 + Math.floor(rnd() * 46);
        g.fillStyle = `rgb(${tone}, ${tone - 8}, ${tone - 14})`;
        g.fillRect(
          k * bw + (r % 2) * (bw / 2) + 1.5,
          r * bh + 1.5,
          bw - 3,
          bh - 3,
        );
      }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1 / 0.92, 1 / 0.45);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** a box whose faces are mapped in metres, turned and set down in the world */
function runBox(
  len: number,
  h: number,
  d: number,
  at: [number, number],
  y: number,
  rot: number,
) {
  const g = new THREE.BoxGeometry(len, h, d);
  const uv = g.attributes.uv;
  if (uv)
    for (let i = 0; i < uv.count; i++)
      uv.setXY(i, uv.getX(i) * len, uv.getY(i) * h);
  g.rotateY(rot);
  g.translate(at[0], y, at[1]);
  return g;
}

/** leaves as a mass: a few uneven lumps, lit on top and dark underneath */
function leafMass(
  lumps: [number, number, number, number][],
  seed: number,
  lo: number,
  hi: number,
) {
  const v = new THREE.Vector3();
  return lumps.map(([x, y, z, r], m) => {
    const g = new THREE.IcosahedronGeometry(r, 2);
    const pos = g.attributes.position;
    if (pos) {
      const tint = new Float32Array(pos.count * 3);
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const k =
          1 +
          0.11 *
            Math.sin((v.x / r) * 3.1 + m + seed) *
            Math.sin((v.y / r) * 2.7 + 1.7) +
          0.07 * Math.sin((v.z / r) * 4.3 + (v.x / r) * 1.9 + seed * 2.3);
        v.multiplyScalar(k);
        pos.setXYZ(i, v.x + x, Math.max(0.02, v.y * 0.8 + y), v.z + z);
        const lift = (v.y * 0.8 + y - lo) / (hi - lo);
        const c = 0.72 + 0.4 * Math.min(1, Math.max(0, lift));
        tint.set([c, c, c * 0.96], i * 3);
      }
      g.setAttribute("color", new THREE.BufferAttribute(tint, 3));
    }
    return g;
  });
}

/** What grows and is built in the gardens. A neighbour has a low brick wall
    along the front of the plot, open where the path comes in, and bushes under
    the front windows; our homes have bushes along the side the path does not
    use, never in front, where they are looked into. Nothing stands alone in a
    lawn: a wall bounds a plot, a bush leans on a house. All of it is low, all
    of it stands still, and all of it is three meshes. */
function gardens() {
  const edge = pavementPoints();
  const bricks: THREE.BufferGeometry[] = [];
  const copings: THREE.BufferGeometry[] = [];
  const leaves: THREE.BufferGeometry[] = [];
  const bush = (at: [number, number], r: number, seed: number) => {
    const rnd = dice(seed * 31 + 5);
    const lumps: [number, number, number, number][] = [[0, r * 0.62, 0, r]];
    for (let i = 0; i < 3; i++) {
      const a = rnd() * Math.PI * 2;
      lumps.push([
        Math.cos(a) * r * 0.7,
        r * (0.42 + rnd() * 0.2),
        Math.sin(a) * r * 0.7,
        r * (0.55 + rnd() * 0.25),
      ]);
    }
    for (const g of leafMass(lumps, seed, 0, r * 1.5)) {
      g.translate(at[0], 0, at[1]);
      leaves.push(g);
    }
  };
  scenery.forEach((s, i) => {
    if (s.kind !== "block") return;
    const f = frontOf(s, edge);
    const r = (s.rot * Math.PI) / 180;
    const place = (x: number, z: number): [number, number] => [
      s.x + x * Math.cos(r) + z * Math.sin(r),
      s.z - x * Math.sin(r) + z * Math.cos(r),
    ];
    const rnd = dice(i * 17 + 3);
    // under the front windows, either side of the door, and round one corner
    for (const side of [-1, 1]) {
      const x = f.doorX + side * (1.7 + rnd() * 0.9);
      if (Math.abs(x) < s.w / 2 - 0.3)
        bush(
          place(x, f.side * (s.d / 2 + 0.6)),
          0.42 + rnd() * 0.2,
          i * 7 + side,
        );
    }
    bush(
      place((rnd() < 0.5 ? -1 : 1) * (s.w / 2 + 0.55), f.side * (s.d / 2 - 1)),
      0.55 + rnd() * 0.25,
      i * 11,
    );
    if (!f.to) return;
    // the wall stands a step back from the pavement, along the front of the house
    const out = Math.hypot(f.to[0] - f.step[0], f.to[1] - f.step[1]);
    if (out < 2.2) return;
    const z = f.side * (s.d / 2 + 0.6 + out - 1.15);
    const half = s.w / 2 + 1.8;
    for (const [x0, x1] of [
      [-half, f.doorX - 0.85],
      [f.doorX + 0.85, half],
    ] as const) {
      const len = x1 - x0;
      if (len < 0.6) continue;
      const mid = place((x0 + x1) / 2, z);
      bricks.push(runBox(len, 0.62, 0.22, mid, 0.31, r));
      copings.push(runBox(len + 0.06, 0.07, 0.3, mid, 0.655, r));
    }
  });
  for (const [i, h] of homes.entries()) {
    // the workshop stands in a yard, not a garden
    if (h.id === "workshop") continue;
    const W = h.w / 1000;
    const D = h.d / 1000;
    // the side the path does not walk down; the west one if it walks down neither
    const side = pathSide.get(h.id) === -1 ? 1 : -1;
    const x = side < 0 ? -0.85 : W + 0.85;
    const rnd = dice(i * 53 + 9);
    // small, and none by the near corner: the rooms at that end are looked
    // into from just there
    for (let z = 0.8; z < D - 2.4; z += 1.4 + rnd() * 0.9)
      bush(
        homePoint(h, (x + (rnd() - 0.5) * 0.25) * 1000, z * 1000),
        0.28 + rnd() * 0.14,
        i * 101 + Math.round(z * 10),
      );
  }
  return {
    bricks: mergeGeometries(bricks, false),
    copings: mergeGeometries(copings, false),
    leaves: mergeGeometries(leaves, false),
  };
}

function Gardens() {
  // the paths are laid first: they say which side of a home is walked down
  const geo = useMemo(() => {
    if (pathSide.size === 0) homePaths();
    return gardens();
  }, []);
  const brick = useMemo(() => brickTex(), []);
  return (
    <group>
      {geo.bricks && (
        <mesh geometry={geo.bricks} castShadow receiveShadow>
          <meshPhysicalMaterial color={BRICK} roughness={0.92} map={brick} />
        </mesh>
      )}
      {geo.copings && (
        <mesh geometry={geo.copings} castShadow receiveShadow>
          <meshPhysicalMaterial color={COPING} roughness={0.9} />
        </mesh>
      )}
      {geo.leaves && (
        <mesh geometry={geo.leaves} castShadow receiveShadow>
          <meshPhysicalMaterial color={HEDGE} roughness={1} vertexColors />
        </mesh>
      )}
    </group>
  );
}

export function Scenery() {
  return (
    <group>
      {scenery.map((s, i) => {
        if (s.kind === "block") return <Neighbour key={i} item={s} index={i} />;
        if (s.kind === "tree") return <Tree key={i} item={s} index={i} />;
        if (s.kind === "lamp") return <Lamp key={i} item={s} />;
        return null;
      })}
      <Gardens />
    </group>
  );
}
