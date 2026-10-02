import type { Block3D } from "../storefront/lib/three/blocks";
import type { Place } from "./plan";

/**
 * The kit: every part of a piece laid flat on the floor in front of it,
 * biggest first, in rows, the way it looks when the boxes are opened. Each
 * part keeps its key, so the same mesh glides from its place to the floor
 * and back.
 */
export type KitPose = {
  /** world metres, centre of the part lying flat */
  x: number;
  y: number;
  z: number;
  /** mesh rotation that lays it flat */
  rot: [number, number, number];
  /** kit number, 1-based, in layout order */
  n: number;
};

function flat(b: Block3D): {
  fw: number;
  fd: number;
  fh: number;
  rot: [number, number, number];
} {
  if (b.geo === "cylinder" || b.geo === "sphere")
    return { fw: b.w, fd: b.d, fh: b.h, rot: [0, 0, 0] };
  const thin = Math.min(b.w, b.h, b.d);
  if (thin === b.w && b.h > b.w)
    return { fw: b.h, fd: b.d, fh: b.w, rot: [0, 0, Math.PI / 2] };
  if (thin === b.d && b.h > b.d)
    return { fw: b.w, fd: b.h, fh: b.d, rot: [Math.PI / 2, 0, 0] };
  return { fw: b.w, fd: b.d, fh: b.h, rot: [0, 0, 0] };
}

export function kitLayout(
  parts: Block3D[],
  place: Place,
): Map<string, KitPose> {
  const mm = (v: number) => v / 1000;
  const pdepth = place.product.depth ?? 400;
  const pieceFront = place.rot
    ? place.depth - place.product.width
    : place.depth - pdepth;
  const gap = 70;
  // on the free floor beside the piece, not under what is already there
  const left = Math.max(120, place.pieceX - 220);
  const maxW = Math.max(700, place.def.width - left - 120);
  // the key and the tiny hardware go last; panels first, biggest first
  const order = parts
    .map((b, i) => ({ b, i, f: flat(b), area: 0 }))
    .map((e) => ({ ...e, area: e.f.fw * e.f.fd }))
    .sort((a, c) => c.area - a.area || a.i - c.i);
  const out = new Map<string, KitPose>();
  let cx = left;
  let yBack = pieceFront - 260;
  let rowD = 0;
  let n = 0;
  for (const e of order) {
    const { fw, fd, fh } = e.f;
    if (cx + fw > left + maxW && cx > left) {
      cx = left;
      yBack = yBack - rowD - gap;
      rowD = 0;
    }
    const yFront = Math.max(60, yBack - fd);
    n++;
    out.set(e.b.key, {
      x: mm(place.ox + cx + fw / 2),
      y: mm(fh / 2) + 0.004,
      z: mm(place.oz + place.depth - (yFront + fd / 2)),
      rot: e.f.rot,
      n,
    });
    cx += fw + gap;
    rowD = Math.max(rowD, fd);
  }
  return out;
}
