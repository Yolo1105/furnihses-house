import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "@/features/storefront/storefront.css";
import "@/styles/doc.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  PieceThumb,
  SpotThumb,
} from "@/features/storefront/components/three/Thumb";
import { RecordViewer, TakeIt } from "@/features/house/record/RecordBits";
import { designFor } from "@/features/family/sixty";
import { athomeFor } from "@/features/shop/athome";
import { euro, priceOf } from "@/features/shop/price";
import { billOfParts } from "@/features/storefront/lib/assembly";
import {
  categories,
  defaultConfig,
  getProduct,
  products,
} from "@/features/storefront/lib/catalog";
import { moments } from "@/features/storefront/lib/moments";
import { layoutSpot } from "@/features/storefront/lib/scene";
import { boxes, counts } from "@/features/storefront/lib/steps";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.name} | Furnishes`,
    description: `${p.use} ${p.description}`,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  const config = defaultConfig(p);
  const parts = billOfParts(p, config);
  const c = counts(p, config);
  const price = priceOf([{ product: p, config }]);
  const bx = boxes(p, config);
  const cat = categories.find((x) => x.id === p.category);
  const moment = moments.find((m) => m.pieces.includes(p.id));
  const design = designFor(p.id);
  const home = athomeFor(p.id);
  const layout = moment
    ? layoutSpot(
        moment.layout,
        moment.layout.filter(
          (k): k is Exclude<typeof k, "piece"> => k !== "piece",
        ),
        p.width,
      )
    : null;
  const size = `${p.width / 10} × ${p.height / 10}${p.depth !== null ? ` × ${p.depth / 10}` : ""} cm`;
  return (
    <div className="f-page">
      <SiteHeader />
      <div className="f-bar">
        <nav className="f-trail" aria-label="Where you are">
          <Link href="/pieces">Shop</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/pieces#${p.line === "wall" ? "walls" : "pieces"}`}>
            {p.line === "wall" ? "Walls" : "Pieces"}
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{p.name}</span>
        </nav>
      </div>
      <main className="f-main f-narrow d-doc">
        <section className="d-hero">
          <div className="d-gallery">
            <div className="d-pic">
              {design?.img ? (
                <Image
                  src={design.img.src}
                  alt={`${p.name}, ${size}, in birch plywood`}
                  width={design.img.w}
                  height={design.img.h}
                  unoptimized
                  priority
                />
              ) : (
                <PieceThumb product={p} />
              )}
            </div>
            {home && (
              <figure className="d-athome">
                <Image
                  src={home.src}
                  alt={`${p.name} standing in a furnished room`}
                  width={960}
                  height={600}
                  unoptimized
                />
                <figcaption className="f-small f-muted">
                  {home.caption}.{" "}
                  {design && (
                    <Link href={design.href} className="f-link">
                      Walk around it →
                    </Link>
                  )}
                </figcaption>
              </figure>
            )}
          </div>
          <div className="d-intro">
            <p className="f-label">
              [ {p.line === "wall" ? "a wall for a room" : "a piece for a spot"}
              {cat ? ` · ${cat.name.toLowerCase()}` : ""} ]
            </p>
            <h1 className="f-h1">{p.name}</h1>
            <p className="f-lede">{p.use}</p>
            <p>{p.description}</p>
            <dl className="f-facts">
              <div>
                <dt>Size</dt>
                <dd>{size}</dd>
              </div>
              <div>
                <dt>Made of</dt>
                <dd>18 mm birch plywood, natural or orange working face</dd>
              </div>
              <div>
                <dt>To build</dt>
                <dd>
                  {c.parts} parts · {c.bolts} bolts · one key · about{" "}
                  {c.minutes} min ·{" "}
                  {c.people === 1 ? "one person" : "two people"}
                </dd>
              </div>
              <div>
                <dt>Arrives</dt>
                <dd>
                  {c.boxes} {c.boxes === 1 ? "box" : "boxes"}, heaviest{" "}
                  {c.heaviestKg} kg
                </dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>
                  <b className="d-eur">{euro(price.eur)}</b>{" "}
                  <span className="f-small f-muted">
                    estimated, from the parts below. We confirm it with your
                    quote; nothing is charged today.
                  </span>
                </dd>
              </div>
            </dl>
            <div className="d-actions">
              <TakeIt config={config} />
              {design && (
                <Link href={design.href} className="f-link">
                  See it at home →
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="d-section">
          <h2 className="f-h2">Where the price comes from</h2>
          <p>
            Counted from the parts, not set by hand: {price.m2} m² of 18 mm
            birch across {price.panels}{" "}
            {price.panels === 1 ? "panel" : "panels"}, {price.bolts} bolts, and
            what it takes us to cut, finish and pack it. The figure is an
            estimate until the first run is costed.
          </p>
          <dl className="f-facts d-price">
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
            <div>
              <dt>
                <b>Estimated price</b>
              </dt>
              <dd className="f-num">
                <b>{euro(price.eur)}</b>
              </dd>
            </div>
          </dl>
        </section>

        <section className="d-section">
          <h2 className="f-h2">What is in the box</h2>
          <p>
            {c.parts} parts · {c.bolts} bolts in one bag · 1 key, parked in the
            base · {c.boxes} {c.boxes === 1 ? "box" : "boxes"}, heaviest{" "}
            {c.heaviestKg} kg
          </p>
          <table className="d-table">
            <tbody>
              {parts.map((r) => (
                <tr key={r.id}>
                  <td>
                    <b>{r.name}</b>
                    <span>{r.spec}</span>
                  </td>
                  <td>× {r.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="d-list">
            {bx.map((b) => (
              <li key={b.id}>
                {b.label}: {b.contents} · {b.weightKg} kg
              </li>
            ))}
          </ul>
        </section>

        <section className="d-section">
          <h2 className="f-h2">Delivery and building</h2>
          <ul className="d-list">
            <li>
              Flat in {c.boxes} {c.boxes === 1 ? "box" : "boxes"}, none over 20
              kg, packed by segment. No part longer than 180 cm; 120 cm parts go
              sideways through any door.
            </li>
            <li>
              One key does every bolt, and it ships parked in the base. Parts
              are numbered; the bolts come in one bag grouped by step.
            </li>
            <li>
              About {c.minutes} minutes,{" "}
              {c.people === 1 ? "one person" : "two people"}. It stands on its
              own within the first few minutes.
            </li>
            <li>
              {p.height >= 1600
                ? "At 160 cm it takes one anti-tip screw into the wall behind it."
                : "Nothing drilled. Keep 5 cm from the wall; the feet adjust."}
            </li>
            <li>
              A 1:1 floor paper of its footprint is in the box, so you can tape
              out where it stands before you open the rest.
            </li>
            <li>
              Unbuilt, it is returnable. Every part is a panel, a base or a top,
              so a damaged part is replaced, not the piece.
            </li>
          </ul>
        </section>

        <section className="d-section">
          <h2 className="f-h2">Watch it go together</h2>
          <p className="f-muted">
            Turn it, open it up, or step through the build. The same animation
            comes with the boxes, made for the exact configuration you take.
          </p>
          <div className="d-frame sf sf-embed">
            <RecordViewer product={p} config={config} mode="steps" />
          </div>
        </section>

        {moment && layout && (
          <section className="d-section">
            <h2 className="f-h2">Where it lives</h2>
            <p>
              {moment.spot}. {moment.could}
            </p>
            <div className="d-frame d-frame--room">
              <SpotThumb
                placements={[
                  { key: p.id, product: p, config, x: layout.pieceX },
                ]}
                keeps={layout.keeps}
                wallMm={moment.wall}
                depthMm={moment.depth}
                inUse
                alt={`${p.name} at ${moment.spot.toLowerCase()}`}
              />
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
