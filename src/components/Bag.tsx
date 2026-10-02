"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBag } from "@/features/storefront/lib/bag";
import {
  configSummary,
  resolveProduct,
} from "@/features/storefront/lib/catalog";
import { counts } from "@/features/storefront/lib/steps";
import { euro, priceOf } from "@/features/shop/price";
import { saveOrder } from "@/features/house/orders";
import { SITE_EMAIL } from "@/lib/seo";
import { families, statusOf } from "@/features/family/data";

type Pic = { src: string; w: number; h: number };

/** where the street keeps "tell me when it is made" */
const WANT_KEY = "furnishes-family-wants-v1";

/** What the visitor asked to hear about: designs that are drawn but not made,
    or made but not priced. They wait here, in the one place things are kept. */
function Waiting() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const raw: unknown = JSON.parse(
          window.localStorage.getItem(WANT_KEY) ?? "[]",
        );
        if (Array.isArray(raw))
          setIds(raw.filter((x): x is string => typeof x === "string"));
      } catch {
        /* a private window: nothing was kept */
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  const rows = ids.flatMap((id) => {
    for (const f of families)
      for (const b of f.bodies)
        for (const l of b.lives)
          if (l.id === id)
            return [
              {
                id,
                name: l.name,
                line: l.line,
                status: statusOf(l),
                href: `/family/${f.id}?case=${l.caseId}&focus=${b.id}&life=${l.id}`,
              },
            ];
    return [];
  });
  if (rows.length === 0) return null;
  const drop = (id: string) => {
    const next = ids.filter((x) => x !== id);
    setIds(next);
    try {
      window.localStorage.setItem(WANT_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };
  return (
    <section className="d-section d-waiting">
      <h2 className="f-h2">Waiting for</h2>
      <p className="f-small f-muted">
        You asked to hear when these are ready. They are kept on this device.
      </p>
      <ul className="d-bag">
        {rows.map((r) => (
          <li key={r.id} className="d-waitrow">
            <div>
              <h3 className="f-h3">
                <Link href={r.href} className="f-link">
                  {r.name}
                </Link>
              </h3>
              <p className="f-small f-muted">{r.line}</p>
            </div>
            <div className="d-bagside">
              <span className="f-status" data-made={r.status.made}>
                {r.status.label}
              </span>
              <button
                type="button"
                className="f-link f-small"
                onClick={() => drop(r.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The bag. Until prices are released, it becomes a quote request. */
export function Bag({ pics }: { pics: Record<string, Pic> }) {
  const { items, count, setQty, remove, clear } = useBag();
  const [sent, setSent] = useState<string | null>(null);
  const rows = items.flatMap((i) => {
    const p = resolveProduct(i.config);
    return p
      ? [
          {
            i,
            p,
            c: counts(p, i.config),
            eur: priceOf([{ product: p, config: i.config }]).eur,
          },
        ]
      : [];
  });
  const total = rows.reduce((t, r) => t + r.eur * r.i.qty, 0);
  const boxes = rows.reduce((n, r) => n + r.c.boxes * r.i.qty, 0);
  const minutes = rows.reduce((n, r) => n + r.c.minutes * r.i.qty, 0);
  const heaviest = Math.max(0, ...rows.map((r) => r.c.heaviestKg));

  if (count === 0)
    return (
      <div className="d-empty">
        <div className="d-head">
          <p className="f-label">[ your bag ]</p>
          <h1 className="f-h1">Nothing in it yet.</h1>
        </div>
        <p className="f-lede">
          {sent
            ? `Your request is saved as ${sent}. We answer by email with the price and lead time.`
            : "Add a design from the shop, or from the street while you explore. Nothing is charged: the bag becomes a quote request."}
        </p>
        <div className="d-actions">
          <Link href="/pieces" className="f-btn f-btn--primary">
            Shop all designs
          </Link>
          {sent && (
            <Link href={`/order/${sent}`} className="f-link">
              See the quote →
            </Link>
          )}
        </div>
        <Waiting />
      </div>
    );

  const send = () => {
    const rec = saveOrder(items.map((i) => ({ config: i.config, qty: i.qty })));
    const lines = rows.map(
      (r) => `${r.i.qty} × ${r.p.name} (${configSummary(r.i.config)})`,
    );
    const body = [
      "Hello Furnishes,",
      "",
      `Please send me a price and lead time for quote ${rec.id}:`,
      ...lines.map((l) => `- ${l}`),
      "",
      "Delivery to (city / postcode):",
    ].join("\n");
    window.location.assign(
      `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(`Quote ${rec.id}`)}&body=${encodeURIComponent(body)}`,
    );
    setSent(rec.id);
    clear();
  };

  return (
    <>
      <div className="d-head">
        <p className="f-label">
          [ your bag · {count} {count === 1 ? "design" : "designs"} ]
        </p>
        <h1 className="f-h1">Ask us for a quote.</h1>
        <p className="f-lede">
          The prices here are estimates, counted from the parts each design is
          made of. Send us the list and we answer with the confirmed price and
          the lead time. Nothing is charged today.
        </p>
      </div>
      <div>
        <ul className="d-bag">
          {rows.map(({ i, p, c, eur }) => {
            const pic = pics[p.id];
            return (
              <li key={i.id} className="d-bagrow">
                <div className="d-pic">
                  {pic && (
                    <Image
                      src={pic.src}
                      alt=""
                      width={pic.w}
                      height={pic.h}
                      unoptimized
                    />
                  )}
                </div>
                <div>
                  <h2 className="f-h3">
                    <Link href={`/pieces/${p.id}`} className="f-link">
                      {p.name}
                    </Link>
                  </h2>
                  <p className="f-small f-muted">{configSummary(i.config)}</p>
                  <p className="f-small f-muted f-num">
                    {c.parts} parts · about {c.minutes} min · {c.boxes}{" "}
                    {c.boxes === 1 ? "box" : "boxes"}
                  </p>
                  <p className="f-small f-num d-eur">
                    {euro(eur)} <span className="f-muted">each, estimated</span>
                  </p>
                </div>
                <div className="d-bagside">
                  <span className="d-qty">
                    <button
                      type="button"
                      className="f-btn f-btn--sm"
                      aria-label={`One fewer ${p.name}`}
                      disabled={i.qty <= 1}
                      onClick={() => setQty(i.id, i.qty - 1)}
                    >
                      −
                    </button>
                    {i.qty}
                    <button
                      type="button"
                      className="f-btn f-btn--sm"
                      aria-label={`One more ${p.name}`}
                      onClick={() => setQty(i.id, i.qty + 1)}
                    >
                      +
                    </button>
                  </span>
                  <button
                    type="button"
                    className="f-link f-small"
                    onClick={() => remove(i.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="d-total">
          <div>
            <p className="f-h3 f-num">
              {euro(total)}{" "}
              <span className="f-small f-muted">
                estimated, before delivery
              </span>
            </p>
            <p className="f-small f-muted f-num">
              {boxes} {boxes === 1 ? "box" : "boxes"}, heaviest {heaviest} kg ·
              about {minutes} min to build · one key
            </p>
          </div>
          <button type="button" className="f-btn f-btn--primary" onClick={send}>
            Send this for a quote
          </button>
        </div>
        <Waiting />
      </div>
    </>
  );
}
