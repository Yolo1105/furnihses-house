import type { KeepId } from "./moments";
import type { Box, Rgb3 } from "./iso";
import { palette } from "./iso";

/** Footprint widths along the wall, mm. */
export const keepWidth: Record<KeepId, number> = {
  door: 900,
  chair: 450,
  desk: 1200,
  bed: 1500,
  sofa: 1800,
  counter: 1500,
  tv: 1100,
};

type KeepBox = Box & { colors: Rgb3; label?: string };

/** Simple drawn stand-ins for what is already in the room. Against the wall (y = D). */
export function keepBoxes(id: KeepId, x: number, D: number): KeepBox[] {
  const k = palette.keep;
  const s = palette.keepSoft;
  switch (id) {
    case "door":
      return [
        { x, y: D - 12, z: 0, w: 900, d: 12, h: 2050, colors: palette.door },
        {
          x: x + 790,
          y: D - 40,
          z: 1000,
          w: 30,
          d: 28,
          h: 30,
          colors: palette.wheel,
        },
      ];
    case "chair":
      return [
        { x: x + 20, y: D - 430, z: 0, w: 40, d: 40, h: 430, colors: k },
        { x: x + 390, y: D - 430, z: 0, w: 40, d: 40, h: 430, colors: k },
        { x: x + 20, y: D - 60, z: 0, w: 40, d: 40, h: 430, colors: k },
        { x: x + 390, y: D - 60, z: 0, w: 40, d: 40, h: 430, colors: k },
        { x, y: D - 450, z: 430, w: 450, d: 450, h: 30, colors: s },
        { x, y: D - 40, z: 460, w: 450, d: 40, h: 400, colors: k },
      ];
    case "desk":
      return [
        { x: x + 10, y: D - 560, z: 0, w: 30, d: 520, h: 700, colors: k },
        { x: x + 1160, y: D - 560, z: 0, w: 30, d: 520, h: 700, colors: k },
        { x, y: D - 600, z: 700, w: 1200, d: 600, h: 25, colors: s },
        {
          x: x + 350,
          y: D - 120,
          z: 725,
          w: 520,
          d: 40,
          h: 340,
          colors: palette.wheel,
        },
      ];
    case "bed":
      return [
        { x, y: D - 2000, z: 0, w: 1500, d: 2000, h: 280, colors: k },
        { x: x + 30, y: D - 1970, z: 280, w: 1440, d: 1940, h: 180, colors: s },
        { x, y: D - 60, z: 0, w: 1500, d: 60, h: 900, colors: k },
      ];
    case "sofa":
      return [
        { x, y: D - 850, z: 0, w: 1800, d: 850, h: 400, colors: k },
        { x, y: D - 250, z: 400, w: 1800, d: 250, h: 380, colors: s },
        { x, y: D - 850, z: 400, w: 180, d: 600, h: 180, colors: s },
        { x: x + 1620, y: D - 850, z: 400, w: 180, d: 600, h: 180, colors: s },
      ];
    case "counter":
      return [
        { x, y: D - 600, z: 0, w: 1500, d: 600, h: 860, colors: k },
        { x: x - 15, y: D - 615, z: 860, w: 1530, d: 630, h: 40, colors: s },
      ];
    case "tv":
      return [
        { x, y: D - 30, z: 900, w: 1100, d: 30, h: 650, colors: palette.wheel },
      ];
  }
}

type SpotLayout = {
  keeps: { id: KeepId; x: number }[];
  pieceX: number;
  total: number;
};

/** Lay the kept things and the piece along the wall, left to right, with a hand's width between. */
export function layoutSpot(
  layout: (KeepId | "piece")[],
  enabled: KeepId[],
  pieceWidth: number,
  gap = 100,
): SpotLayout {
  let x = gap;
  let pieceX = gap;
  const keeps: { id: KeepId; x: number }[] = [];
  let placedPiece = false;
  for (const item of layout) {
    if (item === "piece") {
      pieceX = x;
      x += pieceWidth + gap;
      placedPiece = true;
    } else if (enabled.includes(item)) {
      keeps.push({ id: item, x });
      x += keepWidth[item] + gap;
    }
  }
  if (!placedPiece) {
    pieceX = x;
    x += pieceWidth + gap;
  }
  return { keeps, pieceX, total: x };
}

type Fit =
  | { tone: "ok"; spare: number; title: string; body: string }
  | { tone: "tight"; spare: number; title: string; body: string }
  | { tone: "no"; spare: number; title: string; body: string };

export function fitVerdict(
  wallMm: number,
  total: number,
  pieceHeight: number,
  bays: number,
): Fit {
  const spare = wallMm - total;
  const cm = Math.round(Math.abs(spare) / 10);
  if (spare < 0)
    return {
      tone: "no",
      spare,
      title: `About ${cm} cm short.`,
      body: "Drag the wall wider if it really is, take something out of the line, or try a narrower piece. Nothing wrong with any of those.",
    };
  if (spare < 150 || pieceHeight >= 1600 || bays > 2)
    return {
      tone: "tight",
      spare,
      title:
        spare < 150
          ? `Fits, with ${cm} cm to spare. That is tight.`
          : `Fits on paper.`,
      body:
        spare < 150
          ? "Before an order we would check the skirting and what opens nearby. Not now."
          : pieceHeight >= 1600
            ? "At 160 cm the piece is fixed against tipping, so the wall behind it matters. A photo is enough, later."
            : "A run this long has connectors and a shared top. We confirm the floor is level before it ships.",
    };
  return {
    tone: "ok",
    spare,
    title: `Fits, with ${cm} cm to spare.`,
    body: "From your rough number. It becomes exact only when you order.",
  };
}
