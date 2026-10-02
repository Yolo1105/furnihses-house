"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBag } from "@/features/storefront/lib/bag";

const NAV = [
  {
    href: "/family/pieces",
    label: "Explore",
    match: (p: string) => p.startsWith("/family"),
  },
  {
    href: "/pieces",
    label: "Shop",
    match: (p: string) => p.startsWith("/pieces"),
  },
  {
    href: "/build",
    label: "Build your own",
    match: (p: string) => p.startsWith("/build"),
  },
  { href: "/help", label: "Help", match: (p: string) => p.startsWith("/help") },
] as const;

/**
 * The one header. Brand, the three places the site has, and the bag: the same
 * words in the same order on every page. `over` lays it on top of the 3D.
 */
export function SiteHeader({ over = false }: { over?: boolean }) {
  const path = usePathname() ?? "/";
  const { count } = useBag();
  return (
    <header className="f-header" data-over={over}>
      <Link href="/" className="f-brand">
        Furnishes
      </Link>
      <nav className="f-nav" aria-label="Furnishes">
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="f-tab"
            aria-current={n.match(path) ? "page" : undefined}
          >
            {n.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/bag"
        className="f-btn f-btn--sm f-bag"
        data-empty={count === 0}
        aria-current={path.startsWith("/bag") ? "page" : undefined}
      >
        Bag{count > 0 ? ` · ${count}` : ""}
      </Link>
    </header>
  );
}
