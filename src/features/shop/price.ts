import { billOfParts } from "../storefront/lib/assembly";
import type { Configuration, Product } from "../storefront/lib/catalog";
import { counts } from "../storefront/lib/steps";
import type { Build } from "../family/data";

/* What a design would cost, counted from the parts it is made of.

   This is an ESTIMATE and is labelled as one everywhere it is shown. It is not
   a price list: there is one table of rates below, and every design's figure is
   worked out from its own bill of parts, so correcting a rate corrects all
   sixty at once. Nothing is typed in per design, so no design can drift.

   The rates are first guesses at European trade prices in 2026 and are the
   part of this that most needs replacing with real ones. */

export const RATES = {
  /** one 2440 × 1220 × 18 mm sheet of birch plywood, delivered */
  sheet: 86,
  sheetM2: 2.977,
  /** offcuts: the drawn area is never the area bought */
  waste: 0.12,
  /** sanding and oil, both faces */
  finishM2: 2.4,
  /** a furniture bolt and the insert it turns into */
  bolt: 0.42,
  /** the one L-key, parked in the base */
  key: 1.1,
  /** a base, by tier */
  feet: 9,
  casters: 16,
  /** a rail, a hook strip, a tray: the small steel and the fixings */
  accessory: 6,
  /** hinges, catch and handle for one door leaf */
  doorParts: 7,
  /** one box, its tray and the printed sheet */
  box: 3.8,
  /** our own minutes on one part: cutting, edging, sanding, checking, packing */
  minutesPerPart: 1.6,
  /** what an hour of that costs us */
  hour: 42,
  /** rent, machines, drawings, returns, the studio and what is left over */
  overhead: 2.15,
};

export type Line = { label: string; eur: number };

export type Price = {
  /** what we would ask, rounded to the nearest five */
  eur: number;
  /** what it costs us, before the overhead, line by line */
  lines: Line[];
  /** what it is made of */
  m2: number;
  panels: number;
  bolts: number;
  boxes: number;
};

/** the face area of a part, from the spec it is drawn with ("564 × 380 × 18 mm") */
function area(spec: string | undefined): number {
  if (!spec) return 0;
  const mm = [...spec.matchAll(/(\d{2,4})\s*(?=×|mm)/g)]
    .map((m) => Number(m[1]))
    .filter((n) => n > 0);
  if (mm.length < 2) return 0;
  const [a = 0, b = 0] = mm.sort((x, y) => y - x);
  return (a * b) / 1_000_000;
}

const round5 = (n: number) => Math.max(5, Math.round(n / 5) * 5);

/** what one product in one configuration is made of, priced */
function priceOne(p: Product, c: Configuration) {
  const rows = billOfParts(p, c);
  const n = counts(p, c);
  let m2 = 0;
  let panels = 0;
  let bases = 0;
  let casters = 0;
  let doors = 0;
  let extras = 0;
  for (const r of rows) {
    if (r.kind === "panel" || r.kind === "door") {
      m2 += area(r.spec) * r.quantity;
      panels += r.quantity;
      if (r.kind === "door") doors += r.quantity;
    } else if (r.kind === "base") {
      bases += r.quantity;
      if (/caster|wheel/i.test(r.spec ?? "")) casters += r.quantity;
    } else if (r.kind === "accessory") {
      extras += r.quantity;
    }
  }
  const bought = m2 * (1 + RATES.waste);
  return {
    board: (bought / RATES.sheetM2) * RATES.sheet,
    finish: m2 * 2 * RATES.finishM2,
    fixings:
      n.bolts * RATES.bolt +
      RATES.key +
      doors * RATES.doorParts +
      extras * RATES.accessory,
    base: casters * RATES.casters + (bases - casters) * RATES.feet,
    work: ((n.parts * RATES.minutesPerPart) / 60) * RATES.hour,
    pack: n.boxes * RATES.box,
    m2,
    panels,
    bolts: n.bolts,
    boxes: n.boxes,
  };
}

/** what a design would cost: one product, or all the segments of a wall */
export function priceOf(
  placements: { product: Product; config: Configuration }[],
): Price {
  const sum = placements.map((pl) => priceOne(pl.product, pl.config));
  const add = (of: (x: (typeof sum)[number]) => number) =>
    sum.reduce((t, x) => t + of(x), 0);
  const lines: Line[] = [
    { label: "Birch plywood, cut", eur: add((x) => x.board) },
    { label: "Sanded and oiled", eur: add((x) => x.finish) },
    { label: "Bolts, key and fittings", eur: add((x) => x.fixings) },
    { label: "Base", eur: add((x) => x.base) },
    { label: "Our work on it", eur: add((x) => x.work) },
    { label: "Boxes", eur: add((x) => x.pack) },
  ].filter((l) => l.eur > 0.01);
  const cost = lines.reduce((t, l) => t + l.eur, 0);
  return {
    eur: round5(cost * RATES.overhead),
    lines: lines.map((l) => ({ ...l, eur: Math.round(l.eur) })),
    m2: Math.round(add((x) => x.m2) * 100) / 100,
    panels: add((x) => x.panels),
    bolts: add((x) => x.bolts),
    boxes: add((x) => x.boxes),
  };
}

/** What each part of one piece costs, from the same rates. The pieces of the
    price that belong to no single part — the bolts, our time, the boxes and
    the overhead — are shared out over the parts by what they are worth, so the
    parts add up to the piece. */
export function partPrices(
  p: Product,
  c: Configuration,
): Record<string, number> {
  const rows = billOfParts(p, c);
  const own = new Map<string, number>();
  for (const r of rows) {
    const each =
      r.kind === "panel" || r.kind === "door"
        ? (area(r.spec) * (1 + RATES.waste) * RATES.sheet) / RATES.sheetM2 +
          area(r.spec) * 2 * RATES.finishM2 +
          (r.kind === "door" ? RATES.doorParts : 0)
        : r.kind === "base"
          ? /caster|wheel/i.test(r.spec ?? "")
            ? RATES.casters
            : RATES.feet
          : r.kind === "accessory"
            ? RATES.accessory
            : 0.5;
    own.set(r.id, each * r.quantity);
  }
  const material = [...own.values()].reduce((t, v) => t + v, 0) || 1;
  const whole = priceOf([{ product: p, config: c }]).eur;
  const out: Record<string, number> = {};
  for (const [id, v] of own)
    out[id] = Math.max(1, Math.round((v / material) * whole));
  return out;
}

/** the same, for a design as the street builds it */
export const priceOfBuild = (b: Build): Price => priceOf(b.placements);

export const euro = (n: number) => `€${n.toLocaleString("en-GB")}`;
