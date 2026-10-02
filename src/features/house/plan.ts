import {
  defaultConfig,
  getProduct,
  type Configuration,
  type Product,
} from "../storefront/lib/catalog";
import { getMoment, type KeepId, type Moment } from "../storefront/lib/moments";
import { layoutSpot } from "../storefront/lib/scene";

/**
 * The house: two rows of three rooms, drawn to scale in millimetres. Each
 * room holds one place most homes have, with what is already there, and one
 * Furnishes piece that can arrive when the visitor touches it. Small pieces
 * stand at the walls; the divider stands into the shared room.
 */
export const ROW_DEPTH = 2400;
export const WALL_T = 100;
export const CUT_H = 850;
export const NORTH_H = 2500;

/** A wall a visitor drew: where it starts (local mm), which way it runs, how many segments. */
export type Wall = {
  x: number;
  y: number;
  dir: "x" | "z";
  n: number;
};

export type PileItem = {
  geo: "box" | "cylinder";
  /** mm from the kept thing's left edge */
  dx: number;
  /** mm from the wall to the item's back */
  yWall: number;
  z: number;
  w: number;
  d: number;
  h: number;
  color: string;
};

type PlaceDef = {
  id: string;
  room: string;
  row: 0 | 1;
  width: number;
  pieceId: string;
  layout: (KeepId | "piece")[];
  /** the piece stands out from the wall, into the room */
  divider?: true;
  pileOn: KeepId | null;
  pile: PileItem[];
  hint: string;
};

export type Place = {
  def: PlaceDef;
  moment: Moment;
  product: Product;
  config: Configuration;
  ox: number;
  oz: number;
  depth: number;
  keeps: { id: KeepId; x: number }[];
  pieceX: number;
  pieceY: number | undefined;
  rot: 90 | undefined;
  pile: {
    geo: "box" | "cylinder";
    x: number;
    y: number;
    z: number;
    w: number;
    d: number;
    h: number;
    color: string;
    mat: string;
  }[];
  /** local mm: the centre of the piece, for the camera and the whisper */
  focus: { x: number; y: number; z: number };
};

const ink = "#4a3a33";
const textile = "#8a7f77";
const textile2 = "#5f6f7a";
const leather = "#b8865a";
const cream = "#efe6d8";
const green = "#6d8b5a";

const matFor: Record<string, string> = {
  [ink]: "matte",
  [textile]: "fabric",
  [textile2]: "fabric",
  [leather]: "matte",
  [cream]: "ceramic",
  [green]: "matte",
};

const box = (
  dx: number,
  yWall: number,
  z: number,
  w: number,
  d: number,
  h: number,
  color: string,
): PileItem => ({ geo: "box", dx, yWall, z, w, d, h, color });
const cyl = (
  dx: number,
  yWall: number,
  z: number,
  w: number,
  h: number,
  color: string,
): PileItem => ({ geo: "cylinder", dx, yWall, z, w, d: w, h, color });

const defs: PlaceDef[] = [
  {
    id: "chair-by-the-door",
    room: "Entryway",
    row: 0,
    width: 2600,
    pieceId: "entry",
    layout: ["door", "piece", "chair"],
    pileOn: "chair",
    pile: [
      box(40, 60, 460, 370, 380, 170, textile2),
      box(90, 110, 630, 280, 300, 150, leather),
      box(20, 0, 700, 410, 70, 300, textile),
      box(520, 200, 0, 260, 160, 90, ink),
    ],
    hint: "Touch the chair by the door.",
  },
  {
    id: "kitchen-counter",
    room: "Kitchen",
    row: 0,
    width: 2600,
    pieceId: "kitchen",
    layout: ["counter", "piece"],
    pileOn: "counter",
    pile: [
      cyl(150, 150, 900, 300, 260, cream),
      cyl(550, 200, 900, 200, 240, ink),
      box(850, 120, 900, 380, 260, 20, leather),
      cyl(1250, 300, 900, 200, 80, green),
    ],
    hint: "Touch the counter.",
  },
  {
    id: "living-wall",
    room: "Living room",
    row: 0,
    width: 4600,
    pieceId: "sideboard",
    layout: ["tv", "piece"],
    pileOn: "tv",
    pile: [
      box(1150, 100, 0, 200, 250, 140, green),
      box(1170, 120, 140, 190, 230, 110, textile),
      box(1400, 80, 0, 320, 320, 260, leather),
      box(1450, 450, 0, 220, 300, 20, cream),
    ],
    hint: "Touch the pile beside the TV.",
  },
  {
    id: "bedside",
    room: "Bedroom",
    row: 1,
    width: 2600,
    pieceId: "bedside",
    layout: ["bed", "piece"],
    pileOn: "bed",
    pile: [
      box(1560, 300, 0, 70, 140, 10, ink),
      cyl(1620, 500, 0, 70, 90, cream),
      box(1540, 700, 0, 140, 200, 30, green),
      box(1700, 200, 0, 250, 250, 250, leather),
      cyl(1780, 280, 250, 90, 260, cream),
    ],
    hint: "Touch the floor beside the bed.",
  },
  {
    id: "desk-side",
    room: "Workspace",
    row: 1,
    width: 2600,
    pieceId: "desk",
    layout: ["desk", "piece"],
    pileOn: "desk",
    pile: [
      box(120, 120, 725, 220, 160, 20, ink),
      box(700, 300, 725, 180, 120, 25, ink),
      box(900, 150, 725, 180, 160, 70, ink),
      cyl(1000, 400, 725, 80, 95, cream),
      box(400, 450, 725, 120, 60, 30, textile),
    ],
    hint: "Touch the desk.",
  },
  {
    id: "shared-bedroom",
    room: "Shared room",
    row: 1,
    width: 4600,
    pieceId: "bookcase",
    layout: ["bed", "piece", "bed"],
    divider: true,
    pileOn: null,
    pile: [],
    hint: "Two beds, one room. Touch the space between.",
  },
];

export function buildPlaces(): Place[] {
  const out: Place[] = [];
  const cursor: Record<0 | 1, number> = { 0: 0, 1: 0 };
  for (const def of defs) {
    const moment = getMoment(def.id);
    const product = getProduct(def.pieceId);
    if (!moment || !product) continue;
    const ox = cursor[def.row];
    cursor[def.row] = ox + def.width + WALL_T;
    const oz = def.row === 0 ? 0 : ROW_DEPTH + WALL_T;
    const depth = ROW_DEPTH;
    const pdepth = product.depth ?? 400;
    let keeps: { id: KeepId; x: number }[];
    let pieceX: number;
    let pieceY: number | undefined;
    let rot: 90 | undefined;
    if (def.divider) {
      keeps = [
        { id: "bed", x: 100 },
        { id: "bed", x: def.width - 1600 },
      ];
      pieceX = def.width / 2 - pdepth / 2;
      pieceY = depth;
      rot = 90;
    } else {
      const keepIds = def.layout.filter((k): k is KeepId => k !== "piece");
      const l = layoutSpot(def.layout, keepIds, product.width);
      const shift = Math.max(0, Math.round((def.width - l.total) / 2));
      keeps = l.keeps.map((k) => ({ id: k.id, x: k.x + shift }));
      pieceX = l.pieceX + shift;
      pieceY = undefined;
      rot = undefined;
    }
    const on = def.pileOn ? keeps.find((k) => k.id === def.pileOn) : undefined;
    const pile = on
      ? def.pile.map((it) => ({
          geo: it.geo,
          x: on.x + it.dx,
          y: depth - it.yWall - it.d,
          z: it.z,
          w: it.w,
          d: it.d,
          h: it.h,
          color: it.color,
          mat: matFor[it.color] ?? "matte",
        }))
      : [];
    const focus = rot
      ? {
          x: pieceX + pdepth / 2,
          y: depth - product.width / 2,
          z: product.height / 2,
        }
      : {
          x: pieceX + product.width / 2,
          y: depth - pdepth / 2,
          z: product.height / 2,
        };
    out.push({
      def,
      moment,
      product,
      config: defaultConfig(product),
      ox,
      oz,
      depth,
      keeps,
      pieceX,
      pieceY,
      rot,
      pile,
      focus,
    });
  }
  return out;
}

export function houseSize(places: Place[]) {
  const w = Math.max(...places.map((p) => p.ox + p.def.width));
  return { w, d: 2 * ROW_DEPTH + WALL_T };
}
