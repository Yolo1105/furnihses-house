import type { Metadata } from "next";
import "@/styles/first-layout.css";
import {
  families,
  livesIn,
  places,
  recordCount,
  verbNames,
  verbsOf,
  type VerbId,
} from "@/features/family/data";
import { NOINDEX_ROBOTS } from "@/lib/seo";
import { First, type Fam } from "./First";

export const metadata: Metadata = {
  title: "The first Explore layout | Furnishes",
  robots: NOINDEX_ROBOTS,
};

/** A reference page: the earliest Explore layout, filled with today's designs.
    Nothing links here from the site; it exists to be looked at and judged. */
export default function Page() {
  const shown: Fam[] = families.map((f) => {
    const lives = f.bodies.flatMap((b) => b.lives);
    return {
      id: f.id,
      noun: f.noun,
      line: f.line,
      count: recordCount(f),
      poster: `/family/poster-${f.id}.jpg`,
      verbs: f.verbs.map((v: VerbId) => ({
        id: v,
        name: verbNames[v].name,
        line: verbNames[v].line,
        n: lives.filter((l) => verbsOf(l).includes(v)).length,
      })),
      // only the rooms this family actually stands in, the way the top bar
      // only ever offered the places that had something in them
      rooms: places
        .map((p) => ({ id: p.id, name: p.name, n: livesIn(f, p.id).length }))
        .filter((r) => r.n > 0),
    };
  });
  return <First families={shown} />;
}
