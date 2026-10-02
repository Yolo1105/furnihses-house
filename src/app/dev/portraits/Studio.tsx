"use client";

import dynamic from "next/dynamic";

const PortraitStudio = dynamic(
  () => import("@/features/family/PortraitStudio"),
  { ssr: false },
);

export default function Studio() {
  return <PortraitStudio />;
}
