/**
 * One isometric projection for every drawing on the site, so a piece in a
 * catalogue card, a piece in a spot and a divider run all read the same.
 * World units are millimetres: x along the wall, y into the room (larger y
 * is further back, against the wall), z up.
 */
type Vec2 = [number, number];
export type Proj = (x: number, y: number, z: number) => Vec2;

export const iso: Proj = (x, y, z) => [
  (x + 0.45 * y) * 0.75,
  x * 0.15 - y * 0.33 - z * 0.75,
];

/** Screen x per world mm along the x axis, used to turn drags into widths. */
export const ISO_X = 0.75;

export type Rgb3 = [string, string, string];

export const palette = {
  wood: ["#dcbd8f", "#bb9867", "#efd8b4"] as Rgb3,
  base: ["#9a8065", "#806953", "#c1a787"] as Rgb3,
  wheel: ["#3b3530", "#2c2824", "#5a524a"] as Rgb3,
  accent: ["#e7551a", "#c9430f", "#f0834f"] as Rgb3,
  keep: ["#e9d6c2", "#d3bba1", "#f4e6d4"] as Rgb3,
  keepSoft: ["#f1e2d0", "#dcc7ae", "#f8ecdc"] as Rgb3,
  door: ["#f6e9d8", "#e2cfb8", "#fbf3e8"] as Rgb3,
};

export type Box = {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
};

export function boxCorners(b: Box, proj: Proj): Vec2[] {
  const pts: Vec2[] = [];
  for (const dx of [0, b.w])
    for (const dy of [0, b.d])
      for (const dz of [0, b.h]) pts.push(proj(b.x + dx, b.y + dy, b.z + dz));
  return pts;
}

export function bounds(points: Vec2[]) {
  let xmin = Infinity,
    xmax = -Infinity,
    ymin = Infinity,
    ymax = -Infinity;
  for (const [x, y] of points) {
    if (x < xmin) xmin = x;
    if (x > xmax) xmax = x;
    if (y < ymin) ymin = y;
    if (y > ymax) ymax = y;
  }
  return { xmin, xmax, ymin, ymax };
}

/** Painter's order: back to front, then bottom to top, then left to right. */
function painterKey(b: Box) {
  return [-(b.y + b.d / 2), b.z, b.x] as const;
}
export function paintSort<T extends Box>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const ka = painterKey(a);
    const kb = painterKey(b);
    return ka[0] - kb[0] || ka[1] - kb[1] || ka[2] - kb[2];
  });
}

const pointsAttr = (pts: Vec2[]) =>
  pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");

/** Three visible faces of a box: front (y), right (x+w), top (z+h). */
export function faces(b: Box, proj: Proj) {
  const { x, y, z, w, d, h } = b;
  return {
    front: pointsAttr([
      proj(x, y, z),
      proj(x + w, y, z),
      proj(x + w, y, z + h),
      proj(x, y, z + h),
    ]),
    side: pointsAttr([
      proj(x + w, y, z),
      proj(x + w, y + d, z),
      proj(x + w, y + d, z + h),
      proj(x + w, y, z + h),
    ]),
    top: pointsAttr([
      proj(x, y, z + h),
      proj(x + w, y, z + h),
      proj(x + w, y + d, z + h),
      proj(x, y + d, z + h),
    ]),
  };
}

export const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

/** Eased stage: 0 before `from`, 1 after `to`. */
export function stage(t: number, from: number, to: number) {
  const u = clamp((t - from) / (to - from), 0, 1);
  return u * u * (3 - 2 * u);
}
