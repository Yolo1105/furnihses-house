import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { mm, type Block3D } from "../storefront/lib/three/blocks";
import { plyEdgeTex, specsFor } from "../house/materials";

/**
 * Real materials for the model: scanned textures (CC0, Poly Haven) with
 * roughness and normal maps, a bevel on every panel, and texture scale
 * tied to real size so a 600 mm panel and an 1800 mm top show the same
 * grain. Two states, one construction: finished birch for what is made, pale
 * unfinished birch for what is drawn but not made yet.
 */

export type Spec = {
  color: string;
  roughness: number;
  metalness?: number;
  map?: THREE.Texture;
  roughnessMap?: THREE.Texture;
  normalMap?: THREE.Texture;
  normalScale?: number;
  envMapIntensity?: number;
  clearcoat?: number;
  sheen?: number;
};

const SETS = [
  "plywood",
  "laminate_floor_02",
  "oak_veneer_01",
  "plastered_wall",
  "rough_linen",
  "asphalt_floor",
  "cobblestone_floor_08",
] as const;
export type SetId = (typeof SETS)[number];

/** metres one tile of each texture covers in the world */
const TILE: Record<SetId, number> = {
  plywood: 1.25,
  laminate_floor_02: 2.6,
  oak_veneer_01: 1.6,
  plastered_wall: 2.0,
  rough_linen: 0.6,
  asphalt_floor: 3.0,
  cobblestone_floor_08: 2.0,
};

export type TexSet = {
  map: THREE.Texture;
  rough: THREE.Texture;
  normal: THREE.Texture;
  tile: number;
};
export type Palette = Record<SetId, TexSet> & {
  /** birch before it has a finish on it: what is drawn but not made yet */
  pale: THREE.Texture;
};

const urls = [
  ...SETS.flatMap((s) => [
    `/pbr/${s}/Diffuse.webp`,
    `/pbr/${s}/Rough.webp`,
    `/pbr/${s}/nor_gl.webp`,
  ]),
  "/pbr/plywood/Diffuse_pale.webp",
];

function prep(t: THREE.Texture, srgb: boolean) {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

/** Loads every scanned texture once (suspends until they are in). */
export function usePalette(): Palette {
  const list = useLoader(THREE.TextureLoader, urls);
  return useMemo(() => {
    const out = {} as Palette;
    const pale = list[SETS.length * 3];
    if (!pale) throw new Error("Pale birch texture missing");
    out.pale = prep(pale, true);
    SETS.forEach((s, i) => {
      const map = list[i * 3];
      const rough = list[i * 3 + 1];
      const normal = list[i * 3 + 2];
      if (!map || !rough || !normal)
        throw new Error(`Texture set ${s} missing`);
      out[s] = {
        map: prep(map, true),
        rough: prep(rough, false),
        normal: prep(normal, false),
        tile: TILE[s],
      };
    });
    return out;
  }, [list]);
}

/** A texture set scaled so one tile covers `tile` metres, for a surface `w × h` metres. */
export function scaled(set: TexSet, w: number, h: number): TexSet {
  const rx = w / set.tile;
  const ry = h / set.tile;
  const c = (t: THREE.Texture) => {
    const k = t.clone();
    k.repeat.set(rx, ry);
    k.needsUpdate = true;
    return k;
  };
  return {
    map: c(set.map),
    rough: c(set.rough),
    normal: c(set.normal),
    tile: set.tile,
  };
}

/** the face scan is already birch (public/pbr/plywood/Diffuse.webp, made light
    from the darker scan it came with); the tint only warms it a touch */
const BIRCH = "#fff8ee";

/** Materials for one block, by what it is: plywood faces get the scan, edges the layers. */
export function specsWith(
  p: Palette,
  bl: Block3D,
  role: "keep" | "pile" | "part" | "prop",
  state: "made" | "concept" = "made",
): Spec[] {
  if (role === "part") {
    if (bl.mat === "paint" || bl.color === "#e7551a")
      return [{ color: bl.color, roughness: 0.38, clearcoat: 0.3 }];
    if (bl.mat === "metal")
      return [{ color: bl.color, roughness: 0.3, metalness: 0.75 }];
    if (bl.mat === "rubber" || bl.color === "#2f2a26")
      return [{ color: "#2a2623", roughness: 0.9 }];
    if (bl.mat === "matte") return [{ color: bl.color, roughness: 0.86 }];
    // Not made yet: the same panels in birch without its finish, a shade
    // paler. It still reads as furniture in a home, not as a placeholder; the
    // words beside it say that it is not made.
    const concept = state === "concept";
    const tint =
      bl.color === "#8b7052" ? (concept ? "#eadfcb" : "#dcc4a2") : BIRCH;
    const ply = p.plywood;
    const face: Spec = {
      color: tint,
      roughness: concept ? 0.72 : 0.58,
      map: concept ? p.pale : ply.map,
      roughnessMap: ply.rough,
      normalMap: ply.normal,
      normalScale: 0.5,
      envMapIntensity: 0.9,
    };
    const edge = concept ? "#fff6ea" : tint;
    const eU: Spec = { color: edge, roughness: 0.74, map: plyEdgeTex(false) };
    const eV: Spec = { color: edge, roughness: 0.74, map: plyEdgeTex(true) };
    const thin = Math.min(bl.w, bl.h, bl.d);
    // BoxGeometry material order: +x, -x, +y, -y, +z, -z
    if (thin === bl.w) return [face, face, eU, eU, eU, eU];
    if (thin === bl.h) return [eV, eV, face, face, eV, eV];
    return [eU, eU, eV, eV, face, face];
  }
  // the workshop's own benches and the board it keeps are our birch ply
  if (role === "keep" && bl.mat === "ply")
    return specsWith(p, { ...bl, mat: "" }, "part", "made");
  if (role === "keep" && bl.mat === "wood") {
    const oak = p.oak_veneer_01;
    return [
      {
        color: "#f1dfc4",
        roughness: 0.55,
        map: oak.map,
        roughnessMap: oak.rough,
        normalMap: oak.normal,
        normalScale: 0.4,
      },
    ];
  }
  if (bl.mat === "fabric" || bl.mat === "duvet") {
    const lin = p.rough_linen;
    return [
      {
        color: bl.color,
        roughness: 0.95,
        normalMap: lin.normal,
        normalScale: 0.7,
        sheen: 0.5,
      },
    ];
  }
  // everything else keeps the house's own definitions
  return specsFor(bl, role).map((s) => ({
    color: s.color,
    roughness: s.roughness,
    ...(s.metalness !== undefined ? { metalness: s.metalness } : {}),
    ...(s.map ? { map: s.map } : {}),
  }));
}

/* ---------- bevelled boxes whose texture scale follows their real size ---------- */

const geoCache = new Map<string, THREE.BufferGeometry>();

/**
 * A box in metres with a small bevel, its UVs scaled so one texture unit is
 * `tile` metres on every face. Cached by size, so identical panels share.
 */
export function roundedBox(
  w: number,
  h: number,
  d: number,
  tile = 1.25,
  radius = 0.0015,
): THREE.BufferGeometry {
  const key = `${w.toFixed(4)}|${h.toFixed(4)}|${d.toFixed(4)}|${tile}|${radius}`;
  const hit = geoCache.get(key);
  if (hit) return hit;
  const r = Math.min(radius, w / 2.2, h / 2.2, d / 2.2);
  // a soft thing needs more steps round its corners than a panel's bevel does
  const g = new RoundedBoxGeometry(w, h, d, radius > 0.01 ? 5 : 2, r);
  const uv = g.getAttribute("uv");
  const count = uv.count;
  const per = count / 6;
  // face order +x, -x, +y, -y, +z, -z; the (u, v) dimensions of each
  const dims: [number, number][] = [
    [d, h],
    [d, h],
    [w, d],
    [w, d],
    [w, h],
    [w, h],
  ];
  for (let i = 0; i < count; i++) {
    const f = Math.min(5, Math.floor(i / per));
    const [du, dv] = dims[f] ?? [w, h];
    uv.setXY(i, uv.getX(i) * (du / tile), uv.getY(i) * (dv / tile));
  }
  uv.needsUpdate = true;
  geoCache.set(key, g);
  return g;
}

/** How round a block's corners are, metres. Panels get a 1.5 mm bevel; what is
    made of cloth or leather is soft: a coat, a bag, a duvet, a pillow. */
export function softness(bl: Block3D): number {
  if (bl.kind === "prop") {
    const name = bl.key.split(":").pop() ?? "";
    if (name === "coat") return 0.05;
    if (name === "bag") return 0.045;
    if (name === "cushion") return 0.06;
    if (name === "shoe") return 0.03;
    if (name === "towel" || name === "roll") return 0.02;
    return 0.004;
  }
  if (bl.mat === "duvet") return 0.07;
  if (bl.mat === "fabric") return 0.05;
  return 0.0015;
}

/* ---------- a whole body as a few meshes: one per material ---------- */

export const axisRotation = (bl: Block3D): [number, number, number] =>
  bl.axis === "x"
    ? [0, 0, Math.PI / 2]
    : bl.axis === "y"
      ? [Math.PI / 2, 0, 0]
      : [0, 0, 0];

export type Merged = { geometry: THREE.BufferGeometry; spec: Spec }[];

const specKey = (sp: Spec) =>
  [
    sp.color,
    sp.roughness,
    sp.metalness ?? 0,
    sp.map?.uuid ?? "",
    sp.roughnessMap?.uuid ?? "",
    sp.normalMap?.uuid ?? "",
    sp.normalScale ?? 1,
    sp.clearcoat ?? 0,
    sp.sheen ?? 0,
    sp.envMapIntensity ?? 1,
  ].join("|");

function slice(non: THREE.BufferGeometry, start: number, count: number) {
  const out = new THREE.BufferGeometry();
  for (const name of ["position", "normal", "uv"]) {
    const a = non.getAttribute(name);
    if (!a) continue;
    const arr = (a.array as Float32Array).slice(
      start * a.itemSize,
      (start + count) * a.itemSize,
    );
    out.setAttribute(name, new THREE.BufferAttribute(arr, a.itemSize));
  }
  return out;
}

/**
 * Every block of a body that does not move, merged into one geometry per
 * material, in body-local metres. A resting body is then a handful of draw
 * calls instead of hundreds.
 */
export function mergeBlocks(
  blocks: { block: Block3D; specs: Spec[] }[],
  strip: number,
): Merged {
  const buckets = new Map<
    string,
    { spec: Spec; geos: THREE.BufferGeometry[] }
  >();
  const put = (sp: Spec, g: THREE.BufferGeometry) => {
    const k = specKey(sp);
    const b = buckets.get(k) ?? { spec: sp, geos: [] };
    b.geos.push(g);
    buckets.set(k, b);
  };
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const one = new THREE.Vector3(1, 1, 1);
  for (const { block: bl, specs } of blocks) {
    const first = specs[0];
    if (!first) continue;
    const r = axisRotation(bl);
    m.compose(
      new THREE.Vector3(
        mm(bl.x + bl.w / 2),
        mm(bl.z + bl.h / 2),
        mm(strip - bl.y - bl.d / 2),
      ),
      q.setFromEuler(new THREE.Euler(r[0], r[1], r[2])),
      one,
    );
    const geo = bl.geo ?? "box";
    if (geo === "box") {
      // the cached box is shared with the live meshes: never transform it in place
      const base = roundedBox(mm(bl.w), mm(bl.h), mm(bl.d), 1.25, softness(bl));
      const non = base.index ? base.toNonIndexed() : base;
      if (specs.length === 6) {
        for (const g of non.groups) {
          const sp = specs[g.materialIndex ?? 0] ?? first;
          put(sp, slice(non, g.start, g.count).applyMatrix4(m));
        }
      } else put(first, non.clone().applyMatrix4(m));
    } else if (geo === "cylinder") {
      const args: [number, number, number, number] =
        bl.axis === "x"
          ? [mm(bl.h) / 2, mm(bl.h) / 2, mm(bl.w), 16]
          : bl.axis === "y"
            ? [mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.d), 16]
            : [mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.h), 16];
      put(
        first,
        new THREE.CylinderGeometry(...args).toNonIndexed().applyMatrix4(m),
      );
    } else {
      put(
        first,
        new THREE.SphereGeometry(mm(bl.w) / 2, 14, 10)
          .toNonIndexed()
          .applyMatrix4(m),
      );
    }
  }
  return [...buckets.values()].map((b) => ({
    spec: b.spec,
    geometry: mergeGeometries(b.geos, false) ?? b.geos[0]!,
  }));
}

/** a spec as the props of a physical material */
export function matProps(sp: Spec) {
  return {
    color: sp.color,
    roughness: sp.roughness,
    metalness: sp.metalness ?? 0,
    envMapIntensity: sp.envMapIntensity ?? 1,
    clearcoat: sp.clearcoat ?? 0,
    sheen: sp.sheen ?? 0,
    ...(sp.map ? { map: sp.map } : {}),
    ...(sp.roughnessMap ? { roughnessMap: sp.roughnessMap } : {}),
    ...(sp.normalMap
      ? {
          normalMap: sp.normalMap,
          normalScale: [sp.normalScale ?? 1, sp.normalScale ?? 1] as [
            number,
            number,
          ],
        }
      : {}),
  };
}
