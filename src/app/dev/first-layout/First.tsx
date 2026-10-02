"use client";

import Link from "next/link";
import { useState } from "react";

/* The first Explore layout, working again.

   The markup is the one from commit ccbbbaf; only the class prefix changed.
   What it is filled with is TODAY's data, so the page answers two questions at
   once: what the design looked like, and whether the sixty designs we have now
   still fit in it. */

export type Fam = {
  id: string;
  noun: string;
  line: string;
  count: number;
  verbs: { id: string; name: string; line: string; n: number }[];
  rooms: { id: string; name: string; n: number }[];
  poster: string;
};

export function First({ families }: { families: Fam[] }) {
  const [famId, setFamId] = useState(families[0]?.id ?? "");
  const family = families.find((f) => f.id === famId) ?? families[0];
  const [room, setRoom] = useState<string | null>(null);
  const [verb, setVerb] = useState<string | null>(null);

  if (!family) return null;

  const roomName = family.rooms.find((r) => r.id === room)?.name.toLowerCase();
  const verbName = family.verbs.find((v) => v.id === verb)?.name.toLowerCase();
  // the whole point of the layout, read back as the sentence it makes
  const sentence = [
    "I need",
    family.noun,
    roomName ?? "anywhere",
    verbName ? `that lets me ${verbName}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="o1-root">
      <div
        className="o1-poster"
        style={{ backgroundImage: `url(${family.poster})` }}
      />

      <header className="o1-top">
        <Link href="/" className="o1-brand">
          Furnishes
        </Link>
        <nav className="o1-cases" aria-label="What and where">
          <span className="o1-lead">I need</span>
          {families.map((f) => (
            <button
              key={f.id}
              type="button"
              className="o1-case o1-family"
              aria-current={f.id === family.id ? "page" : undefined}
              onClick={() => {
                setFamId(f.id);
                setRoom(null);
                setVerb(null);
              }}
            >
              {f.noun}
              <sup>{f.count}</sup>
            </button>
          ))}
          <span className="o1-gap" aria-hidden="true" />
          {family.rooms.map((r) => (
            <button
              key={r.id}
              type="button"
              className="o1-case"
              aria-pressed={room === r.id}
              data-none={r.n === 0}
              onClick={() => setRoom((c) => (c === r.id ? null : r.id))}
            >
              {r.name.toLowerCase()}
              <sup>{r.n}</sup>
            </button>
          ))}
          <button
            type="button"
            className="o1-case o1-all"
            aria-pressed={room === null}
            onClick={() => setRoom(null)}
          >
            anywhere
          </button>
        </nav>
        <Link href="/bag" className="o1-bag">
          Plain list
        </Link>
      </header>

      <aside className="o1-rail" aria-label="What it does">
        <span className="o1-lead">that lets me</span>
        {family.verbs.map((v) => (
          <button
            key={v.id}
            type="button"
            className="o1-verb"
            aria-pressed={verb === v.id}
            data-none={v.n === 0}
            onClick={() => setVerb((c) => (c === v.id ? null : v.id))}
          >
            <span>{v.name.toLowerCase()}</span>
            <sup>{v.n}</sup>
            <small>{v.line}</small>
          </button>
        ))}
        <p className="o1-legend">
          {family.line} More to the right, more to the back. Same panels, same
          holes, one key.
        </p>
      </aside>

      <div className="o1-caption">
        <span>{sentence}.</span>
      </div>

      <div className="o1-note">
        <p>
          The first Explore layout, from 17 Sep 2026 — the top bar and the left
          column are two halves of one sentence. The layout and the type are
          that commit&rsquo;s; what fills them is today&rsquo;s sixty designs,
          so you can see whether they still fit.{" "}
          <Link href="/family/pieces">The Explore that is live →</Link>
        </p>
      </div>

      <button type="button" className="o1-view">
        Showing view
      </button>
    </div>
  );
}
