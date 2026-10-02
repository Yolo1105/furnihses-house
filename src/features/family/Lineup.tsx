"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { euro } from "../shop/price";
import type { SixtyBody, SixtyItem } from "./sixty";

/** what it takes to get from the one pointed at to this one */
function relation(it: SixtyItem, hot: SixtyItem | undefined) {
  const c = hot ? it.from[hot.id] : undefined;
  if (!c)
    return `${it.parts} parts · ${it.minutes} min · ${it.people === 2 ? "two people" : "one person"}`;
  if (c.off === 0 && c.on === 0)
    return `all ${c.stay} parts stay, only the arrangement changes`;
  return `${c.stay} stay · ${c.off} off · ${c.on} on`;
}

/** the same sentence, written out for the panel */
function says(c: { stay: number; off: number; on: number }) {
  if (c.off === 0 && c.on === 0)
    return `all ${c.stay} parts stay where they are — only the arrangement changes`;
  const bits = [`${c.stay} parts stay`];
  if (c.off) bits.push(`${c.off} ${c.off === 1 ? "comes" : "come"} off`);
  if (c.on) bits.push(`${c.on} ${c.on === 1 ? "goes" : "go"} on`);
  return bits.join(", ");
}

/**
 * One body, all its lives, standing in a line on one floor at one scale.
 *
 * Pointing at one lifts it and tells the others what it takes to become it.
 * Opening one — a click, Enter, or arriving on its link — lays the whole thing
 * out underneath the line: the room it was made for, where in that room it
 * stands, and what separates it from each of its siblings. It opens in place
 * rather than in a far corner, because the corner was easy to miss and easy to
 * push off the screen; and a click opens it rather than leaving the page,
 * because a click on a picture means "let me look at this", not "take me away".
 */
export function Lineup({
  body,
  metre,
  floor,
  homes,
}: {
  body: SixtyBody;
  /** CSS px one metre of height takes */
  metre: number;
  /** CSS px from the bottom of a picture to the floor line */
  floor: number;
  /** a still of each design standing in its room, by design */
  homes: Record<string, string>;
}) {
  const [hotId, setHotId] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const hot = body.items.find((i) => i.id === hotId);
  const open = body.items.find((i) => i.id === openId);
  const n = body.items.length;

  // arriving on /pieces#r-<design> opens that one, the way clicking it would
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace(/^#r-/, "");
      if (id && body.items.some((i) => i.id === id)) setOpenId(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [body.items]);

  // the ruler stands as tall as the tallest of them, to the next half metre
  const metres = Math.max(
    0.5,
    Math.ceil(Math.max(...body.items.map((i) => i.tall)) / 500) / 2,
  );
  const ticks = Array.from({ length: metres * 2 + 1 }, (_, i) => i / 2);
  const others = open ? body.items.filter((i) => i.id !== open.id) : [];

  return (
    <article
      className="sx-body"
      id={`body-${body.id}`}
      style={{ "--metre": metre, "--floor": floor } as CSSProperties}
      onKeyDown={(e) => {
        if (e.key === "Escape" && openId) setOpenId(null);
      }}
    >
      <header className="sx-body-head">
        <h3 className="f-h2">{body.name}</h3>
        <p className="f-small f-muted">
          One frame · {n === 1 ? "one version so far" : `${n} versions`}
          {n > 1 && " · open one to see what separates them"}
        </p>
        <p className="sx-say" aria-live="polite">
          {hot && n > 1
            ? `Starting from the ${hot.name.toLowerCase()}: the parts that stay, come off and go on. Same key.`
            : ""}
        </p>
      </header>

      <div className="sx-line" onPointerLeave={() => setHotId(null)}>
        <div className="sx-item sx-rule" aria-hidden="true">
          <span className="sx-pic" style={{ "--h": metres } as CSSProperties}>
            {ticks.map((t) => (
              <i
                key={t}
                data-whole={Number.isInteger(t)}
                style={{ "--t": t } as CSSProperties}
              >
                {Number.isInteger(t) && t > 0 ? `${t} m` : ""}
              </i>
            ))}
          </span>
        </div>
        {body.items.map((it) => (
          <button
            key={it.id}
            type="button"
            id={`r-${it.id}`}
            className="sx-item"
            aria-expanded={openId === it.id}
            data-hot={hotId === it.id}
            data-open={openId === it.id}
            data-dim={hotId !== null && hotId !== it.id}
            data-concept={it.concept}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") setHotId(it.id);
            }}
            onFocus={() => setHotId(it.id)}
            onBlur={() => setHotId(null)}
            onClick={() => setOpenId((c) => (c === it.id ? null : it.id))}
          >
            <span className="sx-pic">
              {it.img && (
                <Image
                  src={it.img.src}
                  alt={`${it.name}, ${it.size}${it.concept ? ", in pale birch because it is not made yet" : ""}`}
                  width={it.img.w}
                  height={it.img.h}
                  unoptimized
                  loading="lazy"
                  style={{
                    width: `calc(${it.img.w} * var(--u))`,
                    height: "auto",
                  }}
                />
              )}
            </span>
            <span className="sx-cap">
              <span className="sx-rec">
                <span className="f-label">No. {it.record}</span>
                <span className="f-status" data-made={!it.concept}>
                  {it.status}
                </span>
              </span>
              <b className="f-h3">{it.name}</b>
              <span className="f-small f-num sx-eur">
                {euro(it.eur)} <span className="f-muted">est.</span>
              </span>
              <span className="f-small f-muted f-num">{it.size}</span>
              <span className="f-small f-muted">{it.where}</span>
              <span
                className="sx-rel"
                data-live={hot !== undefined && hot.id !== it.id}
              >
                {relation(it, hot && hot.id !== it.id ? hot : undefined)}
              </span>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <section className="sx-open" aria-label={`${open.name}, in its room`}>
          <figure className="sx-shot">
            {homes[open.id] ? (
              <Image
                key={open.id}
                src={homes[open.id] ?? ""}
                alt={`The ${open.name.toLowerCase()} standing in ${open.where}`}
                width={960}
                height={600}
                unoptimized
              />
            ) : (
              <p className="f-small f-muted sx-noshot">
                Not photographed in a room yet.
              </p>
            )}
            <figcaption className="f-small f-muted">
              Standing in <b>{open.where}</b>
            </figcaption>
          </figure>

          <div className="sx-told">
            <button
              type="button"
              className="sx-close"
              aria-label="Close"
              onClick={() => setOpenId(null)}
            >
              ×
            </button>
            <p className="f-label">
              [ no. {open.record} · {open.status.toLowerCase()} ]
            </p>
            <h4 className="f-h2">{open.name}</h4>
            <p className="f-lede sx-lede">{open.line}</p>
            <dl className="f-facts sx-facts">
              <div>
                <dt>Size</dt>
                <dd className="f-num">{open.size}</dd>
              </div>
              <div>
                <dt>To build</dt>
                <dd className="f-num">
                  {open.parts} parts · one key · about {open.minutes} min ·{" "}
                  {open.people === 2 ? "two people" : "one person"}
                </dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd className="f-num">
                  {euro(open.eur)} <span className="f-muted">estimated</span>
                </dd>
              </div>
            </dl>

            {others.length > 0 && (
              <div className="sx-vs">
                <p className="f-label">
                  [ and the other {others.length === 1 ? "one" : others.length}{" "}
                  on this frame ]
                </p>
                <ul>
                  {others.map((o) => {
                    const c = o.from[open.id];
                    return (
                      <li key={o.id}>
                        <button
                          type="button"
                          className="sx-vs-go"
                          onClick={() => setOpenId(o.id)}
                        >
                          {o.name}
                        </button>
                        <span className="f-small f-muted">
                          {" "}
                          — {o.where}
                          {c ? `. From this one: ${says(c)}.` : "."}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="sx-go">
              {open.recordHref && (
                <Link href={open.recordHref} className="f-btn f-btn--sm">
                  The whole piece →
                </Link>
              )}
              <Link href={open.href} className="f-link f-small">
                Walk around it in {open.where.split(" · ")[0]} →
              </Link>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
