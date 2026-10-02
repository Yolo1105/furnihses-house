import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/landing.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Swaps } from "@/features/landing/Swap";
import { swaps } from "@/features/landing/cases";

export const metadata: Metadata = {
  title: "Furnishes | a piece for the spot that bothers you",
  description:
    "Birch plywood pieces from one panel system. See the spot in your home as it is, and the same spot with the piece we would put there: the parts, the key and the time it takes.",
};

export default function Page() {
  const all = swaps();
  return (
    <div className="f-page">
      <SiteHeader />
      <main className="f-main f-wrap ld-main">
        <Swaps swaps={all} />

        {/* The questions about your own place used to sit here, under six
            spots that are not yours. They belong at the front of exploring,
            where they are one of the two ways in rather than a form at the
            bottom of a page. */}
        <section className="ld-ways">
          <p className="f-label">[ where to go from here ]</p>
          <Link href="/family/pieces" className="f-link">
            Explore: answer three questions about your place, or walk the street
            yourself →
          </Link>
          <Link href="/pieces" className="f-link">
            The shop: every design, at one scale →
          </Link>
          <Link href="/help" className="f-link">
            How it is built, delivered and returned →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
