"use client";

import type { Facet, Chosen } from "./facets";
import { JOIN } from "./facets";

/* The filter bar. Three rows, and the middle one is not the same twice.

   1 · the kind. Not an option among the others: it is what decides which
       questions the next row asks.
   2 · the questions that kind can answer, each option with the count it would
       leave. An option nothing matches any more stays, greyed, so you can see
       what you have ruled out rather than watching it vanish.
   3 · what has been asked, read back as a sentence. Every part of it comes
       off with a click, so nothing narrows the shop invisibly. */

export type Kind = { id: string; name: string; n: number };

export function Filter({
  kinds,
  kind,
  onKind,
  facets,
  chosen,
  onChosen,
  said,
  hits,
  made,
  onlyMade,
  onMade,
  query,
  onQuery,
}: {
  kinds: Kind[];
  /** the chosen kind, or null for all sixty */
  kind: string | null;
  onKind: (id: string | null) => void;
  facets: Facet[];
  chosen: Chosen;
  onChosen: (next: Chosen) => void;
  /** the sentence, already written: one phrase per question answered */
  said: { id: string; text: string }[];
  hits: number;
  made: number;
  onlyMade: boolean;
  onMade: (v: boolean) => void;
  query: string;
  onQuery: (v: string) => void;
}) {
  const toggle = (facet: string, option: string) => {
    const on = chosen[facet] ?? [];
    const next = on.includes(option)
      ? on.filter((x) => x !== option)
      : [...on, option];
    const out = { ...chosen };
    if (next.length) out[facet] = next;
    else delete out[facet];
    onChosen(out);
  };
  const all = kinds.reduce((n, k) => n + k.n, 0);
  const noun = kinds.find((k) => k.id === kind)?.name.toLowerCase();

  return (
    <div className="f-bar sf-filter">
      <div className="sf-row sf-row--kind">
        <form
          className="sx-find"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="f-input"
            type="search"
            autoComplete="off"
            aria-label="Find a design by what it is for"
            placeholder="What is it for? Books, shoes, a desk…"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </form>
        <nav className="sf-kinds" aria-label="The designs, by kind">
          {kinds.map((k) => (
            <button
              key={k.id}
              type="button"
              className="sf-kind"
              aria-pressed={kind === k.id}
              onClick={() => onKind(kind === k.id ? null : k.id)}
            >
              {k.name}
              <sup className="f-num">{k.n}</sup>
            </button>
          ))}
          <button
            type="button"
            className="sf-kind"
            aria-pressed={kind === null}
            onClick={() => onKind(null)}
          >
            All sixty
            <sup className="f-num">{all}</sup>
          </button>
        </nav>
        <button
          type="button"
          className="sf-kind sf-made"
          aria-pressed={onlyMade}
          onClick={() => onMade(!onlyMade)}
        >
          Made now
          <sup className="f-num">{made}</sup>
        </button>
      </div>

      {facets.length > 0 && (
        <div className="sf-row sf-row--asks">
          {facets.map((f) => (
            <div key={f.id} className="sf-ask">
              <p className="f-label">[ {f.label} ]</p>
              <div className="sf-opts">
                {f.options.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    className="sf-opt"
                    aria-pressed={(chosen[f.id] ?? []).includes(o.id)}
                    data-none={o.n === 0}
                    onClick={() => toggle(f.id, o.id)}
                  >
                    {o.name}
                    <sup className="f-num">{o.n}</sup>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="sf-said" aria-live="polite">
        <b className="f-num">
          {hits} {hits === 1 ? "design" : "designs"}
        </b>
        {noun && <span> · {noun}</span>}
        {said.map((s) => (
          <button
            key={s.id}
            type="button"
            className="sf-drop"
            onClick={() => {
              const out = { ...chosen };
              delete out[s.id];
              onChosen(out);
            }}
          >
            {JOIN[s.id] ? `${JOIN[s.id]} ` : ""}
            {s.text}
            <span aria-hidden="true"> ×</span>
          </button>
        ))}
        {(said.length > 0 || kind || onlyMade || query) && (
          <button
            type="button"
            className="f-link f-small sf-clear"
            onClick={() => {
              onChosen({});
              onKind(null);
              onMade(false);
              onQuery("");
            }}
          >
            Show all sixty
          </button>
        )}
      </p>
    </div>
  );
}
