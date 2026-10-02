import Link from "next/link";
import { SITE_EMAIL } from "@/lib/seo";

/** The one footer, on every page that scrolls. */
export function SiteFooter() {
  return (
    <footer className="f-footer">
      <p>
        <b>Furnishes</b>
        Birch plywood furniture from one panel system: pieces for a spot, walls
        for a room, screens that move. One key builds all of it.
      </p>
      <nav aria-label="The site">
        <Link href="/family/pieces">Explore the street</Link>
        <Link href="/pieces">Shop: sixty designs, seventeen frames</Link>
        <Link href="/build">Build your own</Link>
        <Link href="/help">Delivery, building and returns</Link>
      </nav>
      <p>
        Prices are estimates until the first run is costed.
        <br />
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
      </p>
    </footer>
  );
}
