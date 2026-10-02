import type { Metadata } from "next";
import "@/features/storefront/storefront.css";
import "@/styles/doc.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { OrderRecordView } from "@/features/house/record/RecordBits";

export const metadata: Metadata = {
  title: "Your quote | Furnishes",
  robots: { index: false, follow: false },
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="f-page">
      <SiteHeader />
      <main className="f-main f-narrow">
        <OrderRecordView id={id} />
      </main>
      <SiteFooter />
    </div>
  );
}
