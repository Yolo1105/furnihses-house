import type { Metadata } from "next";
import "@/features/storefront/storefront.css";
import "@/styles/doc.css";
import "@/styles/build.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Build, type Frame } from "@/features/build/Build";
import { shopFrames } from "@/features/build/frames";

export const metadata: Metadata = {
  title: "Build your own | Furnishes",
  description:
    "Take one frame and change it: the face, the doors, what goes on it. The drawing, the part list, the build time and the estimated price all answer at once.",
};

export default function Page() {
  const frames: Frame[] = shopFrames();
  return (
    <div className="f-page">
      <SiteHeader />
      <div className="f-bar bd-bar">
        <p className="f-label">
          [ build your own · 18 mm birch plywood · one key ]
        </p>
      </div>
      <main className="f-main">
        <Build frames={frames} />
      </main>
      <SiteFooter />
    </div>
  );
}
