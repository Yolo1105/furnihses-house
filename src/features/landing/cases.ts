import { existsSync } from "node:fs";
import path from "node:path";
import {
  families,
  jobOf,
  placeOf,
  productOf,
  resolveLife,
  type Job,
} from "../family/data";
import { buildCounts } from "../family/outfit";
import { homeOf, roomOf } from "../family/town";

/* What the site opens with: a spot in a room as it is, and the same spot with
   the piece we would put there. Both pictures are stills from the street, at
   the same camera; the "before" was taken with ?before, which leaves the piece
   unbuilt and the things it holds on the floor.

   Every word comes from data that is already there: the problem in the
   visitor's own words from `jobs`, the answer's name and line from the design,
   the numbers from its part list. Nothing here is written twice. */

export type Swap = {
  id: string;
  /** the problem, in the visitor's words */
  say: string;
  /** "the flat · by the door" */
  where: string;
  /** what we would put there */
  name: string;
  line: string;
  /** "14 parts · 36 bolts · one key · about 22 min · one person" */
  build: string;
  before: string;
  after: string;
  /** its page in the shop, when it is a released design */
  href: string | null;
  /** where it stands on the street */
  street: string;
};

/** the six the site opens with: one from each home, each a design that is made */
const SHOWN = [
  "flat:entry",
  "flat:bedside",
  "loft:work-cart",
  "family:child-divider",
  "flat:kitchen",
  "loft:bookwall",
];

const still = (kind: "before" | "athome", id: string) => {
  const rel = `/family/${kind}/${id}.webp`;
  return existsSync(path.join(process.cwd(), "public", rel)) ? rel : null;
};

function swapOf(j: Job): Swap | null {
  const f = families.find((x) => x.id === j.family);
  const b = f?.bodies.find((x) => x.id === j.body);
  const life = b?.lives.find((x) => x.id === j.life);
  if (!f || !b || !life) return null;
  const before = still("before", life.id);
  const after = still("athome", life.id);
  if (!before || !after) return null;
  const n = buildCounts(resolveLife(life, f.strip));
  const product = productOf(life);
  return {
    id: j.id,
    say: j.say,
    where: [
      homeOf(roomOf(j.room)?.home)?.name,
      placeOf(j.room)?.name.toLowerCase(),
    ]
      .filter(Boolean)
      .join(" · "),
    name: life.name,
    line: life.line,
    build: [
      `${n.parts} parts`,
      `${n.bolts} bolts`,
      "one key",
      `about ${n.minutes} min`,
      n.people === 1 ? "one person" : `${n.people} people`,
    ].join(" · "),
    before,
    after,
    href: product ? `/pieces/${product.id}` : null,
    street: `/family/${f.id}?case=${j.room}&focus=${b.id}&life=${life.id}`,
  };
}

export function swaps(): Swap[] {
  return SHOWN.flatMap((id) => {
    const j = jobOf(id);
    const s = j ? swapOf(j) : null;
    return s ? [s] : [];
  });
}
