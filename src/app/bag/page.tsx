import type { Metadata } from "next";
import "@/styles/doc.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Bag } from "@/components/Bag";
import { products } from "@/features/storefront/lib/catalog";
import { designFor } from "@/features/family/sixty";

export const metadata: Metadata = {
  title: "Your bag | Furnishes",
  robots: { index: false, follow: false },
};

export default function Page() {
  // the pictures are looked up on the server; the bag itself lives in the browser
  const pics = Object.fromEntries(
    products.flatMap((p) => {
      const d = designFor(p.id);
      return d?.img ? [[p.id, d.img] as const] : [];
    }),
  );
  return (
    <div className="f-page">
      <SiteHeader />
      <main className="f-main f-narrow d-doc">
        <Bag pics={pics} />
      </main>
      <SiteFooter />
    </div>
  );
}
