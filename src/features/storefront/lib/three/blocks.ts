import { assembly, type PartNode } from "../assembly";
import type { Configuration, Product } from "../catalog";
import { holeGrid } from "../draw";
import { transitionParts, type TransitionPart } from "../exploration";
import { stage } from "../iso";
import type { KeepId } from "../moments";
import type { PropSpec } from "../props";
import { keepBoxes } from "../scene";
import { explodeStage } from "../steps";

/**
 * Everything the 3D stage draws, as plain boxes in millimetres. x runs along
 * the wall, y runs from the viewer toward the wall, z is up. The same list
 * feeds the live stage and the thumbnail renderer, so a card and the piece
 * in your room are the same object under the same light.
 */
export type Block3D = {
  key: string;
  kind: "part" | "keep" | "prop";
  geo?: "box" | "cylinder" | "sphere";
  partId: string | null;
  group: string | null;
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  color: string;
  /** 0–1 */
  opacity: number;
  /** extra height while waiting to be placed, mm */
  lift: number;
  holes: [number, number, number][] | null;
  order: number;
  /** what it is made of, when the colour alone does not say */
  mat?: string;
  /** a cylinder's axis: x along the wall, y toward the wall; default is upright */
  axis?: "x" | "y";
};

export type Placement3D = {
  key: string;
  product: Product;
  config: Configuration;
  x: number;
  /** world y of the local origin; defaults to against the wall */
  y?: number;
  rot?: 0 | 90;
  ghost?: boolean;
  label?: string;
};

export const colors3d = {
  wood: "#d9b98c",
  woodDark: "#c9a97d",
  base: "#8b7052",
  wheel: "#2f2a26",
  accent: "#e7551a",
  keep: "#e6d5c1",
  keepSoft: "#f1e4d3",
  door: "#f6ede1",
  floor: "#efd9c1",
  wall: "#fbeee0",
};

function partColor3d(n: PartNode, finish: Configuration["finish"]): string {
  const accent =
    n.kind === "accessory" ||
    n.kind === "hardware" ||
    (finish === "orange" &&
      (n.kind === "door" ||
        n.partId === "functional-panel" ||
        n.partId === "fold-panel"));
  if (accent) return colors3d.accent;
  if (n.kind === "wheel") return colors3d.wheel;
  if (n.kind === "base") return colors3d.base;
  return colors3d.wood;
}

/** Explode offsets by group, mm, in world axes (x along wall, y toward wall, z up). */
function explodeOffset(n: PartNode, width: number): [number, number, number] {
  const left = n.x + n.w / 2 < width / 2;
  switch (n.group) {
    case "Base":
      return [0, 0, -170];
    case "Body panels":
      if (n.partId.startsWith("side-")) return [left ? -140 : 140, 0, 0];
      if (n.partId === "functional-panel") return [0, 160, 0];
      return [0, 0, -80];
    case "Shelves":
      return [0, -170, 0];
    case "Top":
      return [0, 0, 220];
    case "Doors":
      return [0, -300, 0];
    case "Accessories":
      return [0, -200, 40];
    case "Connections":
      return [0, 0, 120];
    case "Desk":
      return [0, -160, 90];
    case "Screen frames":
      return [0, 0, -70];
    case "Screen panels":
      return [0, -140, 0];
    default:
      return [0, 0, 0];
  }
}

export type PlacementOptions = {
  depthMm: number;
  explode?: number;
  placedIds?: string[] | undefined;
  selected?: string | undefined;
  selectedIds?: string[] | undefined;
  hideGroups?: string[] | undefined;
  morphTo?: { product: Product; config: Configuration } | undefined;
  morphProgress?: number;
};

let serial = 0;

export function placementBlocks(
  pl: Placement3D,
  o: PlacementOptions,
): Block3D[] {
  const p = pl.product;
  const depth = p.depth ?? 400;
  const py = pl.y ?? o.depthMm - depth;
  const source = assembly(p, pl.config);
  const nodes: (PartNode | TransitionPart)[] = o.morphTo
    ? transitionParts(
        source,
        assembly(o.morphTo.product, o.morphTo.config),
        o.morphProgress ?? 0,
      )
    : source;
  const out: Block3D[] = [];
  for (const n of nodes) {
    if (o.hideGroups?.includes(n.group)) continue;
    const [from, to] = explodeStage[n.group] ?? [0, 1];
    const e = stage(o.explode ?? 0, from, to);
    const [ex, ey, ez] = explodeOffset(n, p.width);
    const lx = n.x + e * ex;
    const ly = n.y + e * ey;
    const lz = n.z + e * ez;
    const box =
      pl.rot === 90
        ? { x: pl.x + ly, y: py - lx - n.w, w: n.d, d: n.w }
        : { x: pl.x + lx, y: py + ly, w: n.w, d: n.d };
    const visibility = "visibility" in n ? n.visibility : 1;
    const dim = o.selectedIds
      ? o.selectedIds.includes(n.partId)
        ? 1
        : 0.14
      : !o.selected || o.selected === n.partId
        ? 1
        : 0.14;
    const waiting = o.placedIds ? !o.placedIds.includes(n.partId) : false;
    const holes =
      n.partId === "functional-panel" &&
      pl.rot !== 90 &&
      ["organiser", "screen", "desk"].includes(p.shape)
        ? holeGrid({ ...n, x: box.x, y: box.y, z: lz })
        : null;
    out.push({
      key: `${pl.key}:${n.id}`,
      kind: "part",
      partId: n.partId,
      group: n.group,
      x: box.x,
      y: box.y,
      z: lz,
      w: box.w,
      d: box.d,
      h: n.h,
      color: partColor3d(n, pl.config.finish),
      opacity: waiting ? 0 : (pl.ghost ? 0.4 : 1) * visibility * dim,
      lift: waiting ? 260 : 0,
      holes,
      order: serial++,
    });
  }
  // the L-key, parked on the front of the base: the assembly promise in every image
  if (p.shape !== "folding" && !o.morphTo) {
    const mobile = ["trolley", "screen", "island"].includes(p.shape);
    const baseZ = mobile ? 85 : 30;
    const kx = pl.x + p.width - 140;
    const ky = py - 14;
    const [from, to] = explodeStage.Base ?? [0, 0.35];
    const e = stage(o.explode ?? 0, from, to);
    const kz = baseZ - 24 - e * 170;
    const waiting = o.placedIds
      ? !o.placedIds.includes("foot-base") &&
        !o.placedIds.includes("caster-base")
      : false;
    for (const [i, box] of (
      [
        { x: kx, y: ky, z: kz, w: 70, d: 8, h: 8 },
        { x: kx + 62, y: ky, z: kz, w: 8, d: 8, h: 16 },
      ] as const
    ).entries())
      out.push({
        key: `${pl.key}:lkey${i}`,
        kind: "part",
        partId: i === 0 ? "foot-base" : "caster-base",
        group: "Base",
        // turned: the key keeps its place on the base, not the room's depth
        x: pl.rot === 90 ? pl.x + (box.y - py) : box.x,
        y: pl.rot === 90 ? py - (box.x - pl.x) - box.w : box.y,
        z: box.z,
        w: pl.rot === 90 ? box.d : box.w,
        d: pl.rot === 90 ? box.w : box.d,
        h: box.h,
        color: "#e7551a",
        opacity: waiting ? 0 : pl.ghost ? 0.4 : 1,
        lift: waiting ? 260 : 0,
        holes: null,
        order: serial++,
      });
  }
  return out;
}

export function keepBlocks(
  keeps: { id: KeepId; x: number; y?: number }[],
  depthMm: number,
): Block3D[] {
  const out: Block3D[] = [];
  for (const k of keeps) {
    keepBoxes(k.id, k.x, k.y ?? depthMm).forEach((b, i) => {
      out.push({
        key: `keep:${k.id}:${k.x}:${k.y ?? "w"}:${i}`,
        kind: "keep",
        partId: null,
        group: null,
        x: b.x,
        y: b.y,
        z: b.z,
        w: b.w,
        d: b.d,
        h: b.h,
        color:
          b.colors[0] === "#f6e9d8"
            ? colors3d.door
            : b.colors[0] === "#3b3530"
              ? colors3d.wheel
              : b.colors[0] === "#f1e2d0"
                ? colors3d.keepSoft
                : colors3d.keep,
        opacity: 1,
        lift: 0,
        holes: null,
        order: serial++,
      });
    });
  }
  return out;
}

/** Bounds of a block list in mm. */
export function blockBounds(blocks: Block3D[], extra?: Block3D[]) {
  let xmin = Infinity,
    xmax = -Infinity,
    ymin = Infinity,
    ymax = -Infinity,
    zmax = 0;
  for (const b of [...blocks, ...(extra ?? [])]) {
    xmin = Math.min(xmin, b.x);
    xmax = Math.max(xmax, b.x + b.w);
    ymin = Math.min(ymin, b.y);
    ymax = Math.max(ymax, b.y + b.d);
    zmax = Math.max(zmax, b.z + b.h);
  }
  if (!Number.isFinite(xmin))
    return { xmin: 0, xmax: 600, ymin: 0, ymax: 400, zmax: 400 };
  return { xmin, xmax, ymin, ymax, zmax };
}

export const mm = (v: number) => v / 1000;

/** Things in use on a piece, placed with it. Local coordinates become world. */
export function propBlocks(
  props: PropSpec[],
  origin: { x: number; y: number },
  keyPrefix = "prop",
): Block3D[] {
  return props.map((pr, i) => ({
    key: `${keyPrefix}:${i}:${pr.name}`,
    kind: "prop",
    geo: pr.geo,
    partId: null,
    group: null,
    x: origin.x + pr.x,
    y: origin.y + pr.y,
    z: pr.z,
    w: pr.w,
    d: pr.d,
    h: pr.h,
    color: pr.color,
    opacity: 1,
    lift: 0,
    holes: null,
    order: serial++,
  }));
}
