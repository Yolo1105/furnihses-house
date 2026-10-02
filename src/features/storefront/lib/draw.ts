import type { PartNode } from "./assembly";
import type { Configuration } from "./catalog";
import { palette, type Rgb3 } from "./iso";

/** Colour of a part: accessories and hardware in orange, doors and the working face too when the finish is orange. */
export function partColors(n: PartNode, finish: Configuration["finish"]): Rgb3 {
  const accent =
    n.kind === "accessory" ||
    n.kind === "hardware" ||
    (finish === "orange" &&
      (n.kind === "door" ||
        n.partId === "functional-panel" ||
        n.partId === "fold-panel"));
  if (accent) return palette.accent;
  if (n.kind === "wheel") return palette.wheel;
  if (n.kind === "base") return palette.base;
  return palette.wood;
}

/** The exposed holes on a working face: 4 × 3 per functional panel. */
export function holeGrid(n: PartNode): [number, number, number][] {
  const out: [number, number, number][] = [];
  for (let i = 0; i < 12; i++)
    out.push([
      n.x + 60 + (i % 4) * 125,
      n.y - 1,
      n.z + 70 + Math.floor(i / 4) * 115,
    ]);
  return out;
}
