"use client";

import dynamic from "next/dynamic";
import type { Stage3DProps } from "./Stage3D";

/**
 * The 3D stage loads on the client. Until its chunk arrives the page shows
 * nothing in its place for a moment, so callers keep the box the same size.
 */
export const Stage = dynamic<Stage3DProps>(() => import("./Stage3D"), {
  ssr: false,
  loading: () => (
    <div className="sf-stage3d sf-stage3d-loading" aria-hidden="true" />
  ),
});
