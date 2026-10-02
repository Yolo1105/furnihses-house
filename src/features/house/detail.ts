import type { Block3D } from "../storefront/lib/three/blocks";

/**
 * The parts list draws every part as one box. Here the small parts become
 * what they are: a hook is a peg with a tip, a tray has rims, a rail is a
 * rod, a caster is a wheel in a fork. Same part ids, same order, so the
 * assembly timing and the pull-apart still work part by part.
 */
const accent = "#e7551a";
const tyre = "#2a2623";
const hub = "#a7a7a5";
const fork = "#3a3a3a";
const steel = "#c9cbcc";

function sub(
  b: Block3D,
  j: number,
  patch: Partial<Block3D> & {
    x: number;
    y: number;
    z: number;
    w: number;
    d: number;
    h: number;
  },
): Block3D {
  return { ...b, ...patch, key: `${b.key}:d${j}` };
}

export function detailBlocks(list: Block3D[]): Block3D[] {
  const out: Block3D[] = [];
  for (const b of list) {
    if (b.kind !== "part" || !b.partId) {
      out.push(b);
      continue;
    }
    const id = b.partId;
    if (id === "coat-hook" || (id.endsWith("-hook") && b.w <= 24)) {
      // a peg out of the working face, with a rounded tip
      const cx = b.x + b.w / 2;
      const cz = b.z + b.h / 2;
      out.push(
        sub(b, 0, {
          x: cx - 12,
          y: b.y + b.d - 6,
          z: cz - 22,
          w: 24,
          d: 6,
          h: 44,
          color: accent,
          mat: "paint",
        }),
        sub(b, 1, {
          x: cx - 5,
          y: b.y + 8,
          z: cz - 5,
          w: 10,
          d: b.d - 8,
          h: 10,
          color: accent,
          mat: "paint",
        }),
        sub(b, 2, {
          x: cx - 9,
          y: b.y,
          z: cz - 9,
          w: 18,
          d: 18,
          h: 18,
          color: accent,
          mat: "paint",
          geo: "sphere",
        }),
      );
      continue;
    }
    if (id === "key-tray" || id.endsWith("-tray")) {
      // a shallow tray: a floor and four rims
      out.push(
        sub(b, 0, {
          x: b.x,
          y: b.y,
          z: b.z,
          w: b.w,
          d: b.d,
          h: 5,
          color: accent,
          mat: "paint",
        }),
        sub(b, 1, {
          x: b.x,
          y: b.y,
          z: b.z,
          w: 5,
          d: b.d,
          h: b.h,
          color: accent,
          mat: "paint",
        }),
        sub(b, 2, {
          x: b.x + b.w - 5,
          y: b.y,
          z: b.z,
          w: 5,
          d: b.d,
          h: b.h,
          color: accent,
          mat: "paint",
        }),
        sub(b, 3, {
          x: b.x,
          y: b.y,
          z: b.z,
          w: b.w,
          d: 5,
          h: b.h,
          color: accent,
          mat: "paint",
        }),
        sub(b, 4, {
          x: b.x,
          y: b.y + b.d - 5,
          z: b.z,
          w: b.w,
          d: 5,
          h: b.h,
          color: accent,
          mat: "paint",
        }),
      );
      continue;
    }
    if (id === "clothes-rail") {
      out.push(
        sub(b, 0, {
          x: b.x,
          y: b.y,
          z: b.z,
          w: b.w,
          d: 22,
          h: 22,
          color: steel,
          mat: "metal",
          geo: "cylinder",
          axis: "x",
        }),
        sub(b, 1, {
          x: b.x,
          y: b.y - 4,
          z: b.z - 4,
          w: 8,
          d: 30,
          h: 30,
          color: steel,
          mat: "metal",
        }),
        sub(b, 2, {
          x: b.x + b.w - 8,
          y: b.y - 4,
          z: b.z - 4,
          w: 8,
          d: 30,
          h: 30,
          color: steel,
          mat: "metal",
        }),
      );
      continue;
    }
    if (id === "kitchen-rail") {
      out.push(
        sub(b, 0, {
          x: b.x,
          y: b.y,
          z: b.z,
          w: 18,
          d: b.d,
          h: 18,
          color: steel,
          mat: "metal",
          geo: "cylinder",
          axis: "y",
        }),
        sub(b, 1, {
          x: b.x - 4,
          y: b.y,
          z: b.z - 4,
          w: 26,
          d: 8,
          h: 26,
          color: steel,
          mat: "metal",
        }),
        sub(b, 2, {
          x: b.x - 4,
          y: b.y + b.d - 8,
          z: b.z - 4,
          w: 26,
          d: 8,
          h: 26,
          color: steel,
          mat: "metal",
        }),
      );
      continue;
    }
    if (id === "caster-display") {
      // a wheel in a fork under the base
      const cx = b.x + b.w / 2;
      const cy = b.y + b.d / 2;
      out.push(
        sub(b, 0, {
          x: cx - 10,
          y: cy - 4,
          z: b.z + b.h - 12,
          w: 20,
          d: 8,
          h: 12,
          color: fork,
          mat: "matte",
        }),
        sub(b, 1, {
          x: cx - 18,
          y: cy - 30,
          z: b.z + 4,
          w: 4,
          d: 40,
          h: b.h - 14,
          color: fork,
          mat: "matte",
        }),
        sub(b, 2, {
          x: cx + 14,
          y: cy - 30,
          z: b.z + 4,
          w: 4,
          d: 40,
          h: b.h - 14,
          color: fork,
          mat: "matte",
        }),
        sub(b, 3, {
          x: cx - 12,
          y: cy - 26,
          z: b.z,
          w: 24,
          d: 52,
          h: 52,
          color: tyre,
          mat: "rubber",
          geo: "cylinder",
          axis: "x",
        }),
        sub(b, 4, {
          x: cx - 13,
          y: cy - 12,
          z: b.z + 14,
          w: 26,
          d: 24,
          h: 24,
          color: hub,
          mat: "metal",
          geo: "cylinder",
          axis: "x",
        }),
      );
      continue;
    }
    if (id.startsWith("door-assembly")) {
      // the door, and a handle on its opening edge
      out.push(
        b,
        sub(b, 1, {
          x: b.x + b.w - 60,
          y: b.y - 14,
          z: b.z + b.h / 2 - 45,
          w: 12,
          d: 14,
          h: 90,
          color: steel,
          mat: "metal",
        }),
      );
      continue;
    }
    out.push(b);
  }
  return out;
}
