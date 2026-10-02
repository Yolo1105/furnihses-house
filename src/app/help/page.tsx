import type { Metadata } from "next";
import "@/features/storefront/storefront.css";
import "@/styles/doc.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AskStudio } from "@/features/storefront/components/AskStudio";
import { SITE_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Help | Furnishes",
  description:
    "How Furnishes pieces are made, delivered and built, what can be returned, and how to get a wall planned with you.",
};

export default function Page() {
  return (
    <div className="f-page">
      <SiteHeader />
      <main className="f-main f-narrow d-doc">
        <div className="d-head">
          <p className="f-label">[ help ]</p>
          <h1 className="f-h1">How it works, and how to reach us.</h1>
        </div>
        <section className="d-section d-prose" id="how">
          <h2 className="f-h2">One panel, one unit, two bases</h2>
          <p>
            Every piece is 18 mm birch plywood bolted to panels on a 60 by 40 by
            40 cm unit. The working face carries a grid of holes that take
            hooks, trays, rails and shelves; the outside face is plain. Bodies
            stand on adjustable pads or on casters with brakes. Nothing is cut
            to order, so nothing is late.
          </p>
          <p>
            Small pieces settle one spot: by the door, beside the bed, next to
            the desk, in the kitchen. Walls for a room are the same panels as
            double-sided segments, end to end, built in place, planned with you.
          </p>
        </section>
        <section className="d-section d-prose" id="delivery">
          <h2 className="f-h2">Delivery and building</h2>
          <p>
            Flat, in boxes under 20 kg, packed by segment. One key does every
            bolt and it ships parked in the base. Parts are numbered, the bolts
            come in one bag grouped by step, and a 1:1 floor paper of the
            footprint is in the box. A small piece is about an evening for one
            person. A wall takes two people and is built where it stands.
          </p>
          <p>
            Nothing is drilled, except the 160 cm pieces, which take one
            anti-tip screw. Delivery areas, lead times and installation are
            confirmed with your quote; we do not state them until they are true.
          </p>
        </section>
        <section className="d-section d-prose" id="returns">
          <h2 className="f-h2">Returns and repairs</h2>
          <p>
            Unbuilt, a piece is returnable. Built, a damaged part is replaced on
            its own, because every part is a panel, a base or a top with a
            number. Full policy is published with the first prices.
          </p>
        </section>
        <section className="d-section" id="plan">
          <div className="d-prose">
            <h2 className="f-h2">We plan it with you</h2>
            <p>
              Send a photo of the wall and two measurements. We draw the piece
              or the wall into your room, to scale, and send it back within a
              few days with the parts, the boxes and the build time. No
              commission, no commitment.
            </p>
          </div>
          <div className="sf sf-embed">
            <AskStudio email={SITE_EMAIL} pieceId={null} configQuery={null} />
          </div>
        </section>
        <section className="d-section d-prose" id="privacy">
          <h2 className="f-h2">What we keep</h2>
          <p>
            The site remembers what you touched in your own browser only.
            Nothing you draw or take leaves your device until you send us a
            quote request, and that goes by email, to {SITE_EMAIL}. We do not
            ask for a budget and we do not sell addresses.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
