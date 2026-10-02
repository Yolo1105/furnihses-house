"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { asked } from "@/features/family/ask";
import { Lineup } from "@/features/family/Lineup";
import type { SixtyFamily, SixtyItem } from "@/features/family/sixty";
import { Filter } from "./Filter";
import { facetsOf, keeps, readBack, type Chosen } from "./facets";

/* The shop, as a line-up: every design standing on the floor line of the frame
   it is built on, at one scale.

   What narrows it is asked per kind, because a piece, a wall and a screen do
   not share a set of questions — see facets.ts. Choosing a kind is therefore
   not a filter among filters; it is what decides which questions exist. */

const records = (f: SixtyFamily) =>
  new Set(f.bodies.flatMap((b) => b.items.map((i) => i.record))).size;

/** the same data with only the designs named left in */
const only = (families: SixtyFamily[], keep: Set<string>) =>
  families
    .map((f) => ({
      ...f,
      bodies: f.bodies
        .map((b) => ({ ...b, items: b.items.filter((i) => keep.has(i.id)) }))
        .filter((b) => b.items.length > 0),
    }))
    .filter((f) => f.bodies.length > 0);

/** the same data with everything that is not made left out */
const madeOnly = (families: SixtyFamily[]) =>
  families
    .map((f) => ({
      ...f,
      bodies: f.bodies
        .map((b) => ({ ...b, items: b.items.filter((i) => !i.concept) }))
        .filter((b) => b.items.length > 0),
    }))
    .filter((f) => f.bodies.length > 0);

export function Shelf({
  families,
  made,
  homes,
  children,
}: {
  families: SixtyFamily[];
  /** how many designs are made */
  made: number;
  /** a still of each design standing in its room, by design */
  homes: Record<string, string>;
  /** what the page says above the line-up */
  children: ReactNode;
}) {
  const [onlyMade, setOnlyMade] = useState(false);
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<string | null>(null);
  const [chosen, setChosen] = useState<Chosen>({});
  const asking = query.trim().length > 1;
  // what the words match, as a set of designs to keep in the line-up
  const found = useMemo(
    () =>
      asking
        ? new Set(asked(query, null, {}, 24).answers.map((a) => a.job.life))
        : null,
    [asking, query],
  );

  // every design of the chosen kind, before its own questions are asked: the
  // pool the counts are worked out against
  const pool: SixtyItem[] = useMemo(() => {
    const fam = kind ? families.filter((f) => f.id === kind) : families;
    return fam.flatMap((f) => f.bodies.flatMap((b) => b.items));
  }, [families, kind]);

  const facets = useMemo(
    () => (kind ? facetsOf(pool, chosen, kind) : []),
    [pool, chosen, kind],
  );
  const said = useMemo(
    () =>
      kind
        ? readBack(chosen, kind).map((text, i) => ({
            id: Object.keys(chosen).filter((k) => (chosen[k] ?? []).length)[
              i
            ] as string,
            text,
          }))
        : [],
    [chosen, kind],
  );

  const asked_ = kind
    ? new Set(pool.filter((it) => keeps(it, chosen, kind)).map((it) => it.id))
    : null;

  let base = onlyMade ? madeOnly(families) : families;
  if (kind) base = base.filter((f) => f.id === kind);
  if (asked_) base = only(base, asked_);
  const shown = found ? only(base, found) : base;
  // counted in records, the way the kinds are: four of the sixty are drawn
  // twice, so counting tiles would say sixty-four next to a tab saying sixty
  const hits = new Set(
    shown.flatMap((f) => f.bodies.flatMap((b) => b.items.map((i) => i.record))),
  ).size;
  return (
    <>
      <Filter
        kinds={families.map((f) => ({
          id: f.id,
          name: f.name,
          n: records(f),
        }))}
        kind={kind}
        onKind={(id) => {
          setKind(id);
          // the questions belong to the kind: they do not survive it
          setChosen({});
        }}
        facets={facets}
        chosen={chosen}
        onChosen={setChosen}
        said={said}
        hits={hits}
        made={made}
        onlyMade={onlyMade}
        onMade={setOnlyMade}
        query={query}
        onQuery={setQuery}
      />
      <main className="f-main f-wrap sx-root">
        <section className="sx-intro">{children}</section>

        {/* the count and what is narrowing live in the bar; only the empty
            answer needs saying here, where the line-up would have been */}
        {hits === 0 && (
          <p className="f-small sx-hits">
            {asking
              ? `Nothing here is for “${query}” yet.`
              : "Nothing of ours answers all of that at once."}{" "}
            <Link href="/help" className="f-link">
              Tell us about it and we plan it with you →
            </Link>
          </p>
        )}

        {shown.map((f) => (
          <section key={f.id} id={f.id} className="sx-family">
            <div className="sx-family-head">
              <p className="f-label">
                [ {records(f)} {onlyMade ? "made" : "of 60"} · {f.bodies.length}{" "}
                {f.bodies.length === 1 ? "frame" : "frames"} ]
              </p>
              <h2 className="f-h1">{f.name}</h2>
              <p className="f-small f-muted">{f.line}</p>
              <Link href={`/family/${f.id}`} className="f-link f-small">
                See them at home →
              </Link>
            </div>
            <div className="sx-bodies">
              {f.bodies.map((b) => (
                <Lineup
                  key={b.id}
                  body={b}
                  metre={f.metre}
                  floor={f.floor}
                  homes={homes}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
