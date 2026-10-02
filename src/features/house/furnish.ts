import type { KeepId } from "../storefront/lib/moments";
import type { Block3D } from "../storefront/lib/three/blocks";

/**
 * The furniture people already own, drawn as furniture: a bed with a
 * duvet and pillows, a desk with a monitor, a chair, a counter with a
 * sink, a door in its frame. Local mm: x along the wall from the item's
 * left edge, y from the front (0) to the wall (D), z up.
 */
type B = {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  color: string;
  mat: string;
  geo?: "box" | "cylinder" | "sphere";
};

const wood = "#c8a67a";
const woodDark = "#8a6a4b";
const legDark = "#2f2b28";
const cream = "#f2ebe0";
const linen = "#ede5d7";
const pillow = "#f7f2ea";
const grey = "#8f8a80";
const white = "#f6f1ea";
const steel = "#c9cbcc";
const screen = "#15171a";

export function homeBlocks(id: KeepId, x: number, D: number): Block3D[] {
  const list: B[] = [];
  const add = (b: B) => list.push(b);
  switch (id) {
    case "door": {
      add({
        x,
        y: D - 40,
        z: 0,
        w: 60,
        d: 40,
        h: 2100,
        color: white,
        mat: "matte",
      });
      add({
        x: x + 840,
        y: D - 40,
        z: 0,
        w: 60,
        d: 40,
        h: 2100,
        color: white,
        mat: "matte",
      });
      add({
        x,
        y: D - 40,
        z: 2050,
        w: 900,
        d: 40,
        h: 60,
        color: white,
        mat: "matte",
      });
      add({
        x: x + 60,
        y: D - 36,
        z: 0,
        w: 780,
        d: 36,
        h: 2050,
        color: "#efe4d3",
        mat: "matte",
      });
      add({
        x: x + 700,
        y: D - 62,
        z: 1000,
        w: 110,
        d: 26,
        h: 26,
        color: steel,
        mat: "metal",
      });
      break;
    }
    case "chair": {
      const legs: [number, number][] = [
        [20, 20],
        [400, 20],
        [20, 400],
        [400, 400],
      ];
      for (const [dx, dy] of legs)
        add({
          x: x + dx,
          y: D - 450 + dy,
          z: 0,
          w: 30,
          d: 30,
          h: 430,
          color: woodDark,
          mat: "wood",
        });
      add({
        x,
        y: D - 450,
        z: 430,
        w: 450,
        d: 450,
        h: 32,
        color: wood,
        mat: "wood",
      });
      add({
        x: x + 20,
        y: D - 50,
        z: 462,
        w: 30,
        d: 30,
        h: 420,
        color: woodDark,
        mat: "wood",
      });
      add({
        x: x + 400,
        y: D - 50,
        z: 462,
        w: 30,
        d: 30,
        h: 420,
        color: woodDark,
        mat: "wood",
      });
      add({
        x,
        y: D - 48,
        z: 700,
        w: 450,
        d: 26,
        h: 170,
        color: wood,
        mat: "wood",
      });
      break;
    }
    case "desk": {
      add({
        x,
        y: D - 600,
        z: 700,
        w: 1200,
        d: 600,
        h: 28,
        color: wood,
        mat: "wood",
      });
      add({
        x: x + 20,
        y: D - 560,
        z: 0,
        w: 30,
        d: 520,
        h: 700,
        color: legDark,
        mat: "matte",
      });
      add({
        x: x + 1150,
        y: D - 560,
        z: 0,
        w: 30,
        d: 520,
        h: 700,
        color: legDark,
        mat: "matte",
      });
      add({
        x: x + 480,
        y: D - 190,
        z: 728,
        w: 240,
        d: 150,
        h: 14,
        color: legDark,
        mat: "matte",
      });
      add({
        x: x + 585,
        y: D - 130,
        z: 742,
        w: 30,
        d: 30,
        h: 130,
        color: legDark,
        mat: "matte",
      });
      add({
        x: x + 340,
        y: D - 130,
        z: 872,
        w: 520,
        d: 22,
        h: 320,
        color: screen,
        mat: "screen",
      });
      add({
        x: x + 330,
        y: D - 460,
        z: 728,
        w: 300,
        d: 110,
        h: 12,
        color: "#3a3734",
        mat: "matte",
      });
      break;
    }
    case "bed": {
      add({
        x,
        y: D - 2000,
        z: 0,
        w: 1500,
        d: 2000,
        h: 240,
        color: wood,
        mat: "wood",
      });
      add({
        x: x + 30,
        y: D - 1970,
        z: 240,
        w: 1440,
        d: 1940,
        h: 200,
        color: linen,
        mat: "duvet",
      });
      add({
        x: x + 20,
        y: D - 1990,
        z: 440,
        w: 1460,
        d: 1420,
        h: 110,
        color: cream,
        mat: "duvet",
      });
      add({
        x: x + 120,
        y: D - 440,
        z: 440,
        w: 560,
        d: 380,
        h: 110,
        color: pillow,
        mat: "fabric",
      });
      add({
        x: x + 820,
        y: D - 440,
        z: 440,
        w: 560,
        d: 380,
        h: 110,
        color: pillow,
        mat: "fabric",
      });
      add({
        x,
        y: D - 60,
        z: 0,
        w: 1500,
        d: 60,
        h: 900,
        color: wood,
        mat: "wood",
      });
      break;
    }
    case "sofa": {
      add({
        x,
        y: D - 850,
        z: 0,
        w: 1800,
        d: 850,
        h: 400,
        color: grey,
        mat: "fabric",
      });
      add({
        x,
        y: D - 250,
        z: 400,
        w: 1800,
        d: 250,
        h: 400,
        color: grey,
        mat: "fabric",
      });
      add({
        x: x + 180,
        y: D - 830,
        z: 400,
        w: 700,
        d: 580,
        h: 140,
        color: "#9a958b",
        mat: "fabric",
      });
      add({
        x: x + 920,
        y: D - 830,
        z: 400,
        w: 700,
        d: 580,
        h: 140,
        color: "#9a958b",
        mat: "fabric",
      });
      add({
        x,
        y: D - 850,
        z: 400,
        w: 180,
        d: 600,
        h: 200,
        color: grey,
        mat: "fabric",
      });
      add({
        x: x + 1620,
        y: D - 850,
        z: 400,
        w: 180,
        d: 600,
        h: 200,
        color: grey,
        mat: "fabric",
      });
      break;
    }
    case "counter": {
      add({
        x,
        y: D - 600,
        z: 0,
        w: 1500,
        d: 600,
        h: 860,
        color: "#efe7db",
        mat: "matte",
      });
      add({
        x: x - 15,
        y: D - 615,
        z: 860,
        w: 1530,
        d: 630,
        h: 40,
        color: "#d9d2c6",
        mat: "ceramic",
      });
      add({
        x: x + 900,
        y: D - 500,
        z: 880,
        w: 500,
        d: 400,
        h: 24,
        color: "#b9bcbd",
        mat: "metal",
      });
      add({
        x: x + 1140,
        y: D - 100,
        z: 900,
        w: 22,
        d: 22,
        h: 260,
        color: steel,
        mat: "metal",
        geo: "cylinder",
      });
      add({
        x: x + 1090,
        y: D - 120,
        z: 1140,
        w: 120,
        d: 18,
        h: 18,
        color: steel,
        mat: "metal",
      });
      // three oak fronts standing proud of the carcass, each with a steel pull,
      // and a dark plinth set back under them
      for (let i = 0; i < 3; i++) {
        add({
          x: x + 12 + i * 496,
          y: D - 612,
          z: 110,
          w: 484,
          d: 14,
          h: 740,
          color: "#d9bd93",
          mat: "wood",
        });
        add({
          x: x + 12 + i * 496 + 182,
          y: D - 628,
          z: 770,
          w: 120,
          d: 14,
          h: 12,
          color: steel,
          mat: "metal",
        });
      }
      add({
        x: x + 30,
        y: D - 560,
        z: 0,
        w: 1440,
        d: 20,
        h: 100,
        color: "#3a3633",
        mat: "matte",
      });
      // a hob on the worktop, away from the sink
      add({
        x: x + 180,
        y: D - 520,
        z: 900,
        w: 520,
        d: 420,
        h: 8,
        color: "#26282b",
        mat: "screen",
      });
      break;
    }
    case "tv": {
      add({
        x,
        y: D - 30,
        z: 900,
        w: 1100,
        d: 30,
        h: 650,
        color: screen,
        mat: "screen",
      });
      add({
        x: x + 20,
        y: D - 20,
        z: 920,
        w: 1060,
        d: 8,
        h: 610,
        color: "#0c0d0f",
        mat: "screen",
      });
      break;
    }
  }
  return list.map((b, i) => ({
    key: `home:${id}:${x}:${i}`,
    kind: "keep" as const,
    ...(b.geo ? { geo: b.geo } : {}),
    partId: null,
    group: null,
    x: b.x,
    y: b.y,
    z: b.z,
    w: b.w,
    d: b.d,
    h: b.h,
    color: b.color,
    opacity: 1,
    lift: 0,
    holes: null,
    order: i,
    mat: b.mat,
  }));
}

export function homeBlocksFor(
  keeps: { id: KeepId; x: number }[],
  D: number,
): Block3D[] {
  return keeps.flatMap((k) => homeBlocks(k.id, k.x, D));
}
