import {
  families,
  jobs,
  placeOf,
  productOf,
  resolveLife,
  statusOf,
} from "../family/data";
import { buildCounts } from "../family/outfit";
import { homeOf, roomOf } from "../family/town";
import { asked } from "../family/ask";
import { athomeSrc } from "../shop/athome";
import { euro, priceOfBuild } from "../shop/price";

/* What the visitor is asked about their own place, and everything needed to
   answer them. The questions are not a form: each card is a sentence we run
   through the same matcher the search uses, so there is one way in the site
   turns words into designs. */

export type DayCard = {
  id: string;
  /** what the card says */
  label: string;
  /** what it means, in the words the matcher knows */
  say: string;
};

export type Design = {
  name: string;
  line: string;
  where: string;
  build: string;
  /** "€275 est." */
  price: string;
  status: string;
  made: boolean;
  still: string | null;
  /** its page in the shop, or where it stands on the street */
  href: string;
};

export const DAYS: DayCard[] = [
  {
    id: "wfh",
    label: "I work from home",
    say: "I work from home at a desk with a laptop and papers",
  },
  {
    id: "kids",
    label: "There are children",
    say: "children with toys and school bags everywhere",
  },
  {
    id: "cook",
    label: "I cook a lot",
    say: "I cook a lot and the kitchen counter is crowded",
  },
  {
    id: "small",
    label: "Small, and rented",
    say: "a small rented flat: nothing drilled, clutter everywhere, no storage",
  },
  {
    id: "share",
    label: "I share the room",
    say: "I share a room with someone and want a divider between us",
  },
  {
    id: "calls",
    label: "I am on calls",
    say: "video calls with the bed behind me",
  },
  {
    id: "books",
    label: "Books and records",
    say: "books and records with nowhere to live",
  },
  {
    id: "hall",
    label: "No hallway",
    say: "no hallway: coats, keys and shoes land by the door",
  },
];

/** the card's picture: the design its own words bring back first, so the
    picture is never a promise the answer does not keep */
export function cardPic(card: DayCard, stills: Record<string, string>) {
  for (const a of asked(card.say, null, {}, 3).answers) {
    const src = stills[a.job.life];
    if (src) return src;
  }
  return null;
}

/** the rooms worth offering: the ones we have more than one answer for */
export function rooms(): string[] {
  const n = new Map<string, number>();
  for (const j of jobs) {
    const name = placeOf(j.room)?.name;
    if (name) n.set(name, (n.get(name) ?? 0) + 1);
  }
  return [...n.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name]) => name)
    .slice(0, 9);
}

/** every design, as a result needs it */
export function designs(): Record<string, Design> {
  const stills = athomeSrc();
  const out: Record<string, Design> = {};
  for (const f of families)
    for (const b of f.bodies)
      for (const l of b.lives) {
        const made = resolveLife(l, f.strip);
        const n = buildCounts(made);
        const product = productOf(l);
        const st = statusOf(l);
        out[l.id] = {
          name: l.name,
          line: l.line,
          where: [
            homeOf(roomOf(l.caseId)?.home)?.name,
            placeOf(l.caseId)?.name.toLowerCase(),
          ]
            .filter(Boolean)
            .join(" · "),
          build: `${n.parts} parts · one key · about ${n.minutes} min`,
          price: `${euro(priceOfBuild(made).eur)} est.`,
          status: st.label,
          made: st.made,
          still: stills[l.id] ?? null,
          href:
            product && st.made
              ? `/pieces/${product.id}`
              : `/family/${f.id}?case=${l.caseId}&focus=${b.id}&life=${l.id}`,
        };
      }
  return out;
}
