"use client";

import dynamic from "next/dynamic";

const House = dynamic(() => import("./House").then((m) => m.House), {
  ssr: false,
  loading: () => <div className="hs-loading" aria-hidden="true" />,
});

export function HouseLoader() {
  return <House />;
}
