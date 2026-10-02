/** Easings and a deterministic jitter, so every part has its own arc and the same arc every time. */
export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - clamp01(t), 3);
export const easeOutQuint = (t: number) => 1 - Math.pow(1 - clamp01(t), 5);
export const easeInOut = (t: number) => {
  const u = clamp01(t);
  return u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
};
export const easeOutBack = (t: number) => {
  const u = clamp01(t);
  const c1 = 1.25;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2);
};
export const easeOutBounce = (t: number) => {
  let u = clamp01(t);
  const n1 = 7.5625;
  const d1 = 2.75;
  if (u < 1 / d1) return n1 * u * u;
  if (u < 2 / d1) return n1 * (u -= 1.5 / d1) * u + 0.75;
  if (u < 2.5 / d1) return n1 * (u -= 2.25 / d1) * u + 0.9375;
  return n1 * (u -= 2.625 / d1) * u + 0.984375;
};

/** 0–1 from a string, stable across renders. */
export function hashUnit(key: string, salt = 0) {
  let h = 2166136261 ^ salt;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10000) / 10000;
}

/** Window inside a 0–1 timeline: 0 before `from`, 1 after `to`. */
export const window01 = (t: number, from: number, to: number) =>
  clamp01((t - from) / Math.max(1e-6, to - from));
