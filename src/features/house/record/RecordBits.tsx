"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useBag } from "../../storefront/lib/bag";
import {
  configSummary,
  resolveProduct,
  type Configuration,
  type Product,
} from "../../storefront/lib/catalog";
import { counts } from "../../storefront/lib/steps";
import {
  ProductViewer,
  type ViewerMode,
} from "../../storefront/components/ProductViewer";
import { getOrder, type OrderRecord } from "../orders";

/** Add to bag. One bag for the whole site. */
export function TakeIt({ config }: { config: Configuration }) {
  const bag = useBag();
  const [took, setTook] = useState(false);
  return (
    <>
      <button
        type="button"
        className="f-btn f-btn--primary"
        onClick={() => {
          bag.add(config);
          setTook(true);
        }}
      >
        {took ? "Added to your bag" : "Add to bag"}
      </button>
      {(took || bag.count > 0) && (
        <Link href="/bag" className="f-link">
          Bag · {bag.count} →
        </Link>
      )}
    </>
  );
}

/** The piece in 3D: turn it, open it up, step by step. */
export function RecordViewer({
  product,
  config,
  mode: initial = "steps",
  onHover,
  pins,
  renderPin,
}: {
  product: Product;
  config: Configuration;
  mode?: ViewerMode;
  /** the pointer is over a part of the piece, or has left it */
  onHover?: ((partId: string | null) => void) | undefined;
  /** parts to hang a callout off, and what each callout says */
  pins?: string[] | undefined;
  renderPin?: ((partId: string) => ReactNode) | undefined;
}) {
  const [mode, setMode] = useState<ViewerMode>(initial);
  return (
    <ProductViewer
      product={product}
      config={config}
      mode={mode}
      onMode={setMode}
      onHover={onHover}
      pins={pins}
      renderPin={renderPin}
    />
  );
}

/** A quote record, read from this browser. */
export function OrderRecordView({ id }: { id: string }) {
  const [rec, setRec] = useState<OrderRecord | null | undefined>(undefined);
  useEffect(() => {
    // read after mount, off the render path
    const t = window.setTimeout(() => setRec(getOrder(id) ?? null), 0);
    return () => window.clearTimeout(t);
  }, [id]);
  if (rec === undefined)
    return <p className="f-muted">Looking for the quote…</p>;
  if (rec === null)
    return (
      <div className="d-empty">
        <p>
          No quote with that number in this browser. Quotes are kept where they
          were made until accounts exist.
        </p>
        <Link href="/pieces" className="f-btn f-btn--sm">
          Shop all designs
        </Link>
      </div>
    );
  const when = new Date(rec.at).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="d-doc">
      <div className="d-head">
        <p className="f-label">[ quote request · {when} ]</p>
        <h1 className="f-h1">{rec.id}</h1>
      </div>
      <p className="f-lede">
        The exact configuration of every piece, so the animation you get with
        the boxes is for this order, not a generic one. Kept in this browser
        until accounts exist.
      </p>
      {rec.items.map((it, i) => {
        const p = resolveProduct(it.config);
        if (!p) return null;
        const c = counts(p, it.config);
        return (
          <section key={i} className="d-section">
            <div className="d-total">
              <div>
                <h2 className="f-h2">
                  {it.qty > 1 ? `${it.qty} × ` : ""}
                  {p.name}
                </h2>
                <p className="f-small f-muted">{configSummary(it.config)}</p>
                <p className="f-small f-muted">
                  {c.parts} parts · {c.bolts} bolts · 1 key · ~{c.minutes} min ·{" "}
                  {c.people === 1 ? "one person" : "two people"} · {c.boxes}{" "}
                  {c.boxes === 1 ? "box" : "boxes"}, heaviest {c.heaviestKg} kg
                </p>
              </div>
              <Link href={`/pieces/${p.id}`} className="f-link">
                Full details →
              </Link>
            </div>
            <div className="d-frame sf sf-embed">
              <RecordViewer product={p} config={it.config} mode="steps" />
            </div>
          </section>
        );
      })}
    </div>
  );
}
