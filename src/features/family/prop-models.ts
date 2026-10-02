import type { Block3D } from "../storefront/lib/three/blocks";
import type { ModelId } from "./town";

/* What a design holds is drawn as small stand-ins (a pot with a ball of leaves,
   a slab with a screen). Where the library has the real thing, the stand-in is
   replaced by it: a scanned plant, vase, laptop, lamp, basket. The rest stay
   stand-ins, but soft ones (see pbr.ts::softness). */

export type PropBlock = Block3D & {
  hangs: boolean;
  /** the scanned model that stands here instead of the block, fitted inside it */
  model?: ModelId;
  /** radians about the vertical, so it faces the room */
  turn?: number;
};

/* The models are Draco-compressed .glb with WebP textures (made from the
   Poly Haven glTF with @gltf-transform). The decoder is served from this site
   rather than a CDN, so the page has no third party in it. */
export const DRACO = "/draco/";

export const modelUrl = (id: ModelId) => `/models/${id}.glb`;

const nameOf = (b: Block3D) => b.key.split(":").pop() ?? "";
const mid = (b: Block3D) => [b.x + b.w / 2, b.y + b.d / 2] as const;
const near = (a: Block3D, b: Block3D, reach: number) => {
  const [ax, ay] = mid(a);
  const [bx, by] = mid(b);
  return Math.abs(ax - bx) < reach && Math.abs(ay - by) < reach;
};

/** one real thing, and the stand-in blocks it replaces */
const SWAPS: {
  base: string;
  with: string[];
  model: ModelId;
  reach: number;
  /** the model fills the base block only; what stood on it is simply dropped */
  own?: boolean;
  turn?: number;
}[] = [
  // a pot with a ball of leaves is a plant
  { base: "plant", with: ["leaves"], model: "potted_plant_04", reach: 160 },
  // a vase keeps its own size; the ball of "stems" above it goes
  {
    base: "vase",
    with: ["stems"],
    model: "ceramic_vase_01",
    reach: 160,
    own: true,
  },
  {
    base: "laptop",
    with: ["screen"],
    model: "classic_laptop",
    reach: 260,
    turn: Math.PI,
  },
  { base: "basket", with: [], model: "wicker_basket_01", reach: 0 },
  /* A trough of earth, with the bush left to grow out of it: `with` is empty
     on purpose, so the leaves above are not swallowed by the box. */
  { base: "planter", with: [], model: "planter_box_02", reach: 0 },
  /* No model for a lamp. desk_lamp_arm_01 is an articulated arm, and fitted
     into the upright box that a base, a stem and a shade make, it comes out
     stretched and hanging over the back corner. The three stand-ins read as a
     lamp; the real one did not. */
  // cardboard: what a cabinet keeps, and what a child's toys live in
  { base: "toy box", with: [], model: "cardboard_box_01", reach: 0 },
  { base: "cushion", with: [], model: "throw_pillows_01", reach: 0 },
];

/** Replace the stand-ins the library has a real model for. */
export function realise(props: PropBlock[]): PropBlock[] {
  const gone = new Set<string>();
  const out: PropBlock[] = [];
  for (const p of props) {
    const swap = SWAPS.find((s) => s.base === nameOf(p));
    if (!swap) continue;
    const parts = props.filter(
      (q) => swap.with.includes(nameOf(q)) && near(p, q, swap.reach),
    );
    for (const q of parts) gone.add(q.key);
    gone.add(p.key);
    const all = swap.own ? [p] : [p, ...parts];
    const x0 = Math.min(...all.map((q) => q.x));
    const x1 = Math.max(...all.map((q) => q.x + q.w));
    const y0 = Math.min(...all.map((q) => q.y));
    const y1 = Math.max(...all.map((q) => q.y + q.d));
    const top = Math.max(...all.map((q) => q.z + q.h));
    out.push({
      ...p,
      // the block now stands for the whole thing: the model is fitted inside it
      geo: "box",
      x: x0,
      w: x1 - x0,
      y: y0,
      d: y1 - y0,
      h: top - p.z,
      model: swap.model,
      ...(swap.turn !== undefined ? { turn: swap.turn } : {}),
    });
  }
  return [...props.filter((p) => !gone.has(p.key)), ...out];
}
