import type { Metadata } from "next";
import "@/features/family/sixty.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Shelf } from "@/features/shop/Shelf";
import { sixty } from "@/features/family/sixty";
import { athomeSrc } from "@/features/shop/athome";

export const metadata: Metadata = {
  title: "Shop | Furnishes",
  description:
    "Every Furnishes design in one light and at one scale: sixty designs on seventeen frames, the ones that share a line sharing the same panels. Ten are made and can be ordered.",
};

const WORDS = [
  "No",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "Twenty",
];

export default function Page() {
  const all = sixty();
  const frames = all.reduce((n, f) => n + f.bodies.length, 0);
  const made = all.reduce(
    (n, f) =>
      n +
      new Set(
        f.bodies.flatMap((b) =>
          b.items.filter((i) => !i.concept).map((i) => i.record),
        ),
      ).size,
    0,
  );
  return (
    <div className="f-page">
      <SiteHeader />
      <Shelf families={all} made={made} homes={athomeSrc()}>
        <div>
          <p className="f-label">[ shop · 18 mm birch plywood · one key ]</p>
          <h1 className="f-display">
            Sixty designs.
            <br />
            {WORDS[frames] ?? frames} frames.
          </h1>
        </div>
        <div>
          <p className="f-lede">
            Everything we make or mean to make, in the same light. The ones that
            share a line share a frame: the same panels, set up for another
            place. Point at one and the rest of its line says how many parts
            stay, come off and go on to become it.
          </p>
          <p className="f-small f-muted sx-buy">
            {WORDS[made] ?? made} are made. Every price here is an estimate,
            counted from the parts the design is made of: add what you want to
            your bag and we answer with the confirmed price and the lead time.
            Nothing is charged today.
          </p>
          <ul className="sx-key" aria-label="How to read the pictures">
            <li>
              <span className="f-status" data-made="true">
                Finished birch: made, {made} so far
              </span>
            </li>
            <li>
              <span className="f-status" data-made="false">
                Pale birch: drawn, not made yet
              </span>
            </li>
          </ul>
        </div>
      </Shelf>
      <SiteFooter />
    </div>
  );
}
