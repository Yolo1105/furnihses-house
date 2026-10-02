import type { PartNode } from "./assembly";

export type TransitionPart = PartNode & {
  visibility: number;
  motion: "kept" | "added" | "removed";
};

/**
 * Interpolates one part list into another. Parts match on id and physical
 * spec, never on name alone: a same-named part with different dimensions
 * is a different part.
 */
export function transitionParts(
  source: PartNode[],
  target: PartNode[],
  progress: number,
): TransitionPart[] {
  const t = Math.max(0, Math.min(1, progress));
  const available = [...target];
  const result: TransitionPart[] = source.map((a) => {
    const i = available.findIndex(
      (b) =>
        b.partId === a.partId &&
        b.spec === a.spec &&
        b.w === a.w &&
        b.d === a.d &&
        b.h === a.h,
    );
    const b = i >= 0 ? available[i] : undefined;
    if (!b)
      return {
        ...a,
        x: a.x - 420 * t,
        y: a.y + 70 * t,
        visibility: 1 - 0.7 * t,
        motion: "removed",
      };
    available.splice(i, 1);
    return {
      ...a,
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      z: a.z + (b.z - a.z) * t,
      visibility: 1,
      motion: "kept",
    };
  });
  return [
    ...result,
    ...available.map((b) => ({
      ...b,
      id: "new-" + b.id,
      x: b.x + 420 * (1 - t),
      y: b.y + 70 * (1 - t),
      visibility: t,
      motion: "added" as const,
    })),
  ];
}
