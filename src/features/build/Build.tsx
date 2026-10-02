"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { TakeIt } from "@/features/house/record/RecordBits";
import {
  ProductViewer,
  type ViewerMode,
} from "@/features/storefront/components/ProductViewer";
import { billOfParts } from "@/features/storefront/lib/assembly";
import {
  accessories as ACCESSORIES,
  defaultConfig,
  getProduct,
  type Configuration,
} from "@/features/storefront/lib/catalog";
import { counts } from "@/features/storefront/lib/steps";
import { euro, partPrices, priceOf } from "@/features/shop/price";
import { advise, applyChange, readChange, type Advice } from "./advise";

/* Build your own: one frame, and everything about it that can change. Every
   change is answered at once — the drawing, the part list, what it takes to
   build and what it would cost — because all four are counted from the same
   configuration. Nothing here is a separate price list. */

/* What a part is there for: the group it belongs to says it, once, rather
   than a sentence written again for every part. */
const WHAT: Record<string, string> = {
  Base: "Lifts it off the floor and keeps it level; the L-key parks in here.",
  "Body panels": "The walls of the piece. The working face carries the holes.",
  Shelves: "What you put things on. It moves up or down the holes.",
  Top: "The surface you use, and what ties the sides together.",
  Connections: "Holds two bodies in line, so a row stands as one piece.",
  Desk: "The working top, and what carries it.",
  Doors: "Closes it off. Hinges, catch and handle come with the leaf.",
  "Screen frames": "The frame the panels sit in, and what it turns on.",
  "Screen panels": "What you see through, or do not.",
  Accessories: "Hangs on the working face: hooks, trays, rails.",
};

export type Frame = {
  id: string;
  name: string;
  use: string;
  /** what it is for, in one line */
  line: string;
  /** whether this frame takes doors */
  door: boolean;
};

export function Build({ frames }: { frames: Frame[] }) {
  const [id, setId] = useState(frames[0]?.id ?? "entry");
  const product = getProduct(id);
  const [config, setConfig] = useState<Configuration>(() =>
    product ? defaultConfig(product) : ({} as Configuration),
  );

  const pick = (next: string) => {
    const p = getProduct(next);
    if (!p) return;
    setId(next);
    setConfig(defaultConfig(p));
  };

  const parts = useMemo(
    () => (product ? billOfParts(product, config) : []),
    [product, config],
  );
  const n = useMemo(
    () => (product ? counts(product, config) : null),
    [product, config],
  );
  const price = useMemo(
    () => (product ? priceOf([{ product, config }]) : null),
    [product, config],
  );
  const each = useMemo(
    () => (product ? partPrices(product, config) : {}),
    [product, config],
  );
  const [over, setOver] = useState<string | null>(null);
  const [at, setAt] = useState({ x: 0, y: 0 });
  const [callouts, setCallouts] = useState(false);
  const [mode, setMode] = useState<ViewerMode>("built");
  const [said, setSaid] = useState("");
  const [answer, setAnswer] = useState<Advice | null>(null);
  // ?prices in the address opens it with every part priced, so the view can
  // be sent to someone as it is
  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!new URLSearchParams(window.location.search).has("prices")) return;
      setCallouts(true);
      setMode("parts");
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  const hovered = parts.find((r) => r.id === over);

  if (!product || !n || !price) return null;

  const canDoor = product.door;
  const options = [
    ...product.defaultAccessories,
    ...product.optionalAccessories,
  ];
  const has = (a: string) => config.accessories.includes(a);
  const labels = Object.fromEntries(
    Object.entries(ACCESSORIES).map(([k, v]) => [k, v.name.toLowerCase()]),
  );

  /* What the visitor says is answered here, in the page. A change is never
     made for them: it is written out and waits to be taken. */
  const ask = (text: string) => {
    if (!product) return;
    setAnswer(advise(text, product, config, frames));
  };
  const take = () => {
    const c = answer?.change;
    if (!c || !product) return;
    if (c.frame && c.frame !== id) {
      const next = getProduct(c.frame);
      if (next) {
        setId(c.frame);
        setConfig(
          applyChange(defaultConfig(next), c, [
            ...next.defaultAccessories,
            ...next.optionalAccessories,
          ]),
        );
      }
    } else {
      setConfig((cur) => applyChange(cur, c, options));
    }
    setAnswer(null);
    setSaid("");
  };
  const toggle = (a: string) =>
    setConfig((c) => ({
      ...c,
      accessories: has(a)
        ? c.accessories.filter((x) => x !== a)
        : [...c.accessories, a],
    }));

  return (
    <div className="bd-root">
      {/* `sf sf-embed`: the viewer still comes from the earlier storefront
          sheet, which draws its own pill chips. Inside this scope it takes the
          system's geometry and tokens, the way the shop and the record do. */}
      <section
        className="bd-stage sf sf-embed"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setAt({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
      >
        <button
          type="button"
          className="f-btn f-btn--sm bd-callout"
          aria-pressed={callouts}
          onClick={() => {
            const on = !callouts;
            setCallouts(on);
            // the parts need room to be labelled: opening it up gives it
            if (on && mode === "built") setMode("parts");
          }}
        >
          {callouts ? "Hide the prices" : "Price every part"}
        </button>
        <ProductViewer
          product={product}
          config={config}
          mode={mode}
          onMode={setMode}
          onHover={setOver}
          pins={callouts ? parts.map((r) => r.id) : undefined}
          renderPin={(id) => {
            const r = parts.find((x) => x.id === id);
            if (!r) return null;
            return (
              <>
                <b>{r.name}</b>
                <span className="f-num">{euro(each[id] ?? 0)}</span>
              </>
            );
          }}
        />
        {hovered && (
          <div
            className="bd-bubble"
            style={{ left: `${at.x}px`, top: `${at.y}px` }}
          >
            <b className="f-h3">{hovered.name}</b>
            <span className="f-small f-muted">{hovered.spec}</span>
            <span className="f-small">
              {WHAT[hovered.group] ?? hovered.group}
            </span>
            <span className="f-num bd-bubble-eur">
              {euro(each[hovered.id] ?? 0)}
              {hovered.quantity > 1 && (
                <span className="f-small f-muted"> for {hovered.quantity}</span>
              )}
            </span>
          </div>
        )}
      </section>

      <aside className="bd-side" aria-label="What can change">
        <form
          className="bd-say"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            ask(said);
          }}
        >
          <label className="f-label" htmlFor="bd-say">
            [ say what you need, and we answer here ]
          </label>
          <div className="bd-sayrow">
            <input
              id="bd-say"
              className="f-input"
              type="text"
              autoComplete="off"
              placeholder="Somewhere for keys, and doors to hide the rest"
              value={said}
              onChange={(e) => {
                setSaid(e.target.value);
                if (answer) setAnswer(null);
              }}
            />
            <button type="submit" className="f-btn f-btn--primary">
              Ask
            </button>
          </div>
          {answer && (
            <div className="bd-answer">
              <p className="f-small">{answer.say}</p>
              {answer.change && (
                <>
                  <ul className="bd-change">
                    {readChange(answer.change, frames, labels).map((line) => (
                      <li key={line} className="f-small">
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="bd-answer-acts">
                    <button
                      type="button"
                      className="f-btn f-btn--sm f-btn--primary"
                      onClick={take}
                    >
                      Change it
                    </button>
                    <button
                      type="button"
                      className="f-link f-small"
                      onClick={() => setAnswer(null)}
                    >
                      Leave it as it is
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </form>

        <div className="bd-block">
          <p className="f-label">[ 1 · the frame ]</p>
          <div className="f-chips">
            {frames.map((f) => (
              <button
                key={f.id}
                type="button"
                className="f-chip"
                aria-pressed={f.id === id}
                onClick={() => pick(f.id)}
              >
                {f.name}
              </button>
            ))}
          </div>
          <p className="f-small f-muted bd-use">{product.use}</p>
        </div>

        <div className="bd-block">
          <p className="f-label">[ 2 · the working face ]</p>
          <div className="f-chips">
            {(["natural", "orange"] as const).map((f) => (
              <button
                key={f}
                type="button"
                className="f-chip"
                aria-pressed={config.finish === f}
                onClick={() => setConfig((c) => ({ ...c, finish: f }))}
              >
                {f === "natural" ? "Natural birch" : "Orange face"}
              </button>
            ))}
          </div>
        </div>

        {canDoor && (
          <div className="bd-block">
            <p className="f-label">[ 3 · open or behind a door ]</p>
            <div className="f-chips">
              {(["open", "doors"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  className="f-chip"
                  aria-pressed={config.storage === s}
                  onClick={() => setConfig((c) => ({ ...c, storage: s }))}
                >
                  {s === "open" ? "Open" : "With doors"}
                </button>
              ))}
            </div>
          </div>
        )}

        {options.length > 0 && (
          <div className="bd-block">
            <p className="f-label">[ {canDoor ? 4 : 3} · what goes on it ]</p>
            <ul className="bd-opts">
              {options.map((a) => {
                const it = ACCESSORIES[a];
                if (!it) return null;
                return (
                  <li key={a}>
                    <button
                      type="button"
                      className="f-option"
                      aria-pressed={has(a)}
                      onClick={() => toggle(a)}
                    >
                      <span>
                        <b>{it.name}</b>
                        <em className="bd-what">{it.description}</em>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="bd-price">
          <p className="f-label">[ what it comes to ]</p>
          <p className="f-display bd-eur">{euro(price.eur)}</p>
          <p className="f-small f-muted">
            Estimated, counted from the {price.panels} panels, {price.bolts}{" "}
            bolts and {price.m2} m² of 18 mm birch below. Confirmed with your
            quote; nothing is charged today.
          </p>
          <dl className="f-facts bd-lines">
            {price.lines.map((l) => (
              <div key={l.label}>
                <dt>{l.label}</dt>
                <dd className="f-num">{euro(l.eur)}</dd>
              </div>
            ))}
            <div>
              <dt>Everything else, and what is left over</dt>
              <dd className="f-num">
                {euro(price.eur - price.lines.reduce((t, l) => t + l.eur, 0))}
              </dd>
            </div>
          </dl>
          <p className="f-small f-muted f-num bd-build">
            {n.parts} parts · {n.bolts} bolts · one key · about {n.minutes} min
            · {n.people === 1 ? "one person" : "two people"} · {n.boxes}{" "}
            {n.boxes === 1 ? "box" : "boxes"}
          </p>
          <div className="bd-acts">
            <TakeIt config={config} />
          </div>
        </div>

        <div className="bd-block">
          <p className="f-label">[ every part, and what it costs ]</p>
          <dl className="f-facts bd-parts">
            {parts.map((r) => (
              <div key={r.id} data-over={over === r.id}>
                <dt>
                  {r.quantity} × {r.name}
                  <em className="bd-spec">{r.spec}</em>
                </dt>
                <dd className="f-num">{euro(each[r.id] ?? 0)}</dd>
              </div>
            ))}
          </dl>
          <p className="f-small f-muted">
            Point at a part in the drawing to see what it is for and what it
            costs; the parts add up to the piece.{" "}
            <Link href="/help" className="f-link">
              How it is delivered →
            </Link>
          </p>
        </div>
      </aside>
    </div>
  );
}
