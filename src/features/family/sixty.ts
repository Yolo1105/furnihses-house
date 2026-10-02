import manifest from "./portraits.json";
import { getProduct } from "../storefront/lib/catalog";
import {
  families,
  placeOf,
  resolveLife,
  statusOf,
  verbsOf,
  type Body,
  type Family,
  type FamilyId,
  type Life,
} from "./data";
import { roomKindOf } from "./roomkind";
import { buildCounts, tallyBetween } from "./outfit";
import { priceOfBuild } from "../shop/price";
import { homeOf, roomOf } from "./town";
import { PORTRAIT_EL, PORTRAIT_FLOOR, PORTRAIT_SCALE } from "./portrait-spec";

/* All sixty, as the index page needs them: every life of every body with its
   portrait, where it lives, and what it takes to turn it into each of the
   other lives of the same body. Plain data: it crosses to the client as is. */

export type Change = { stay: number; off: number; on: number };

export type SixtyItem = {
  id: string;
  record: string;
  name: string;
  line: string;
  concept: boolean;
  /** "Made · price to come" */
  status: string;
  /** "60 × 120 × 40 cm" */
  size: string;
  /** mm, for the ruler at the head of its line */
  tall: number;
  /** what it would cost, estimated from its parts */
  eur: number;
  /** "the flat · by the door" */
  where: string;
  /** what it lets you do, for the shop's filter */
  verbs: string[];
  /** which kind of room in the visitor's own home this answers */
  room: string | null;
  /** the frame it is built on: the shop filters walls and screens by it */
  body: string;
  /** the same piece, standing in its room on the street */
  href: string;
  /** its own page, when it is a released piece */
  recordHref: string | null;
  grownFrom: string | null;
  parts: number;
  minutes: number;
  people: number;
  img: { src: string; w: number; h: number } | null;
  /** what it takes to become this one, from each of the others: by their id */
  from: Record<string, Change>;
};

export type SixtyBody = {
  id: string;
  name: string;
  items: SixtyItem[];
};

export type SixtyFamily = {
  id: FamilyId;
  name: string;
  noun: string;
  line: string;
  /** how many of the sixty records */
  count: number;
  bodies: SixtyBody[];
  /** CSS px one metre of height takes in these pictures */
  metre: number;
  /** CSS px from the bottom of a picture up to the floor line */
  floor: number;
};

const items = manifest.items as Record<string, { w: number; h: number }>;

const cm = (mm: number) => `${Math.round(mm / 10)}`;

function item(family: Family, body: Body, life: Life): SixtyItem {
  const build = resolveLife(life, family.strip);
  const counts = buildCounts(build);
  const room = roomOf(life.caseId);
  const home = homeOf(room?.home);
  const pic = items[life.id];
  const product = life.productId ? getProduct(life.productId) : undefined;
  const from: Record<string, Change> = {};
  for (const other of body.lives) {
    if (other.id === life.id) continue;
    const t = tallyBetween(
      family,
      body,
      { lifeId: other.id, doors: false },
      { lifeId: life.id, doors: false },
    );
    from[other.id] = { stay: t.stay, off: t.off, on: t.on };
  }
  return {
    id: life.id,
    record: life.record,
    name: life.name,
    line: life.line,
    concept: !statusOf(life).made,
    status: statusOf(life).label,
    size: `${cm(build.width)} × ${cm(build.height)} × ${cm(build.depth)} cm`,
    tall: build.height,
    eur: priceOfBuild(build).eur,
    where: [home?.name, placeOf(life.caseId)?.name.toLowerCase()]
      .filter(Boolean)
      .join(" · "),
    verbs: verbsOf(life),
    room: roomKindOf(life.caseId),
    body: body.id,
    href: `/family/${family.id}?case=${life.caseId}&focus=${body.id}&life=${life.id}`,
    recordHref: product ? `/pieces/${product.id}` : null,
    grownFrom: life.grownFrom ?? null,
    parts: counts.parts,
    minutes: counts.minutes,
    people: counts.people,
    img: pic
      ? { src: `/family/portraits/${life.id}.webp`, w: pic.w / 2, h: pic.h / 2 }
      : null,
    from,
  };
}

export function sixty(): SixtyFamily[] {
  return families.map((f) => {
    const scale = PORTRAIT_SCALE[f.id] / 2;
    return {
      id: f.id,
      name: f.name,
      noun: f.noun,
      line: f.line,
      count: new Set(f.bodies.flatMap((b) => b.lives.map((l) => l.record)))
        .size,
      bodies: f.bodies.map((b) => ({
        id: b.id,
        name: b.name,
        items: b.lives.map((l) => item(f, b, l)),
      })),
      metre: 1000 * scale * Math.cos(PORTRAIT_EL),
      floor: PORTRAIT_FLOOR / 2,
    };
  });
}

/** the portrait and the street address of a catalogue design, by its id */
export function designFor(productId: string) {
  const all = families.flatMap((f) =>
    f.bodies.flatMap((b) =>
      b.lives
        .filter((l) => l.productId === productId)
        .map((l) => ({ f, b, l })),
    ),
  );
  // the plain version first; one that grew out of another only if it is the only one
  const hit = all.find((x) => !x.l.grownFrom) ?? all[0];
  if (!hit) return null;
  const { f, b, l } = hit;
  const pic = items[l.id];
  return {
    lifeId: l.id,
    family: f.id,
    made: statusOf(l).made,
    status: statusOf(l).label,
    href: `/family/${f.id}?case=${l.caseId}&focus=${b.id}&life=${l.id}`,
    versions: `/pieces#r-${l.id}`,
    img: pic
      ? { src: `/family/portraits/${l.id}.webp`, w: pic.w / 2, h: pic.h / 2 }
      : null,
  };
}
