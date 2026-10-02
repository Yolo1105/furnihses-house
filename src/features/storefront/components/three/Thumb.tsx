"use client";

import { useMemo } from "react";
import {
  configKeyOf,
  defaultConfig,
  type Configuration,
  type Product,
} from "../../lib/catalog";
import type { KeepId } from "../../lib/moments";
import {
  keepBlocks,
  placementBlocks,
  propBlocks,
  type Placement3D,
} from "../../lib/three/blocks";
import { propsForPiece } from "../../lib/props";
import { useThumb, useThumbResult } from "../../lib/three/thumb";
import { FurnitureModel } from "../FurnitureModel";
import { Scene } from "../Scene";

/** A piece on its own: rendered image once WebGL has drawn it, the line drawing until then. */
export function PieceThumb({
  product,
  config,
  turn = 0,
  explode = 0,
  alt,
}: {
  product: Product;
  config?: Configuration;
  turn?: number;
  explode?: number;
  alt?: string;
}) {
  const cfg = config ?? defaultConfig(product);
  const key = `piece:${configKeyOf(cfg)}:${turn}:${explode}`;
  const url = useThumb(key, () => ({
    blocks: placementBlocks(
      { key: "p", product, config: cfg, x: 0 },
      { depthMm: product.depth ?? 400, explode },
    ),
    depthMm: product.depth ?? 400,
    turn,
  }));
  return url ? (
    <img
      className="sf-thumb"
      src={url}
      alt={alt ?? `${product.name}, design drawing`}
      draggable={false}
    />
  ) : (
    <FurnitureModel product={product} config={cfg} />
  );
}

/** A caption pinned to a point in the scene: "Your desk · 120 cm" over the desk. */
export type SpotLabel = {
  key: string;
  text: string;
  tone?: "keep" | "piece";
  /** world mm: x along the wall, y from the viewer toward the wall, z up */
  x: number;
  y: number;
  z: number;
};

/** A spot: kept things and one or more pieces, drawn to scale. */
export function SpotThumb({
  placements,
  keeps,
  wallMm,
  depthMm,
  showWall = true,
  inUse = false,
  labels,
  size,
  alt,
}: {
  placements: Placement3D[];
  keeps: { id: KeepId; x: number; y?: number }[];
  wallMm: number;
  depthMm: number;
  showWall?: boolean;
  /** draw the first piece with the things it holds in use */
  inUse?: boolean;
  /** captions positioned on the image once it is rendered */
  labels?: SpotLabel[];
  /** rendered pixels; the element should keep the same ratio */
  size?: [number, number];
  alt: string;
}) {
  const key = useMemo(
    () =>
      `spot:${wallMm}:${depthMm}:${showWall}:${inUse ? "u" : ""}:${keeps.map((k) => `${k.id}@${k.x}/${k.y ?? ""}`).join(",")}:${placements
        .map(
          (p) =>
            `${configKeyOf(p.config)}@${p.x}/${p.y ?? ""}/${p.rot ?? 0}/${p.ghost ? "g" : ""}`,
        )
        .join(
          ",",
        )}:${(labels ?? []).map((l) => `${l.key}@${l.x}/${l.y}/${l.z}`).join(",")}:${size ? size.join("x") : ""}`,
    [placements, keeps, wallMm, depthMm, showWall, inUse, labels, size],
  );
  const out = useThumbResult(key, () => {
    const first = placements[0];
    return {
      blocks: [
        ...keepBlocks(keeps, depthMm),
        ...placements.flatMap((pl) => placementBlocks(pl, { depthMm })),
        ...(inUse && first
          ? propBlocks(propsForPiece(first.product.id, first.product.height), {
              x: first.x,
              y: first.y ?? depthMm - (first.product.depth ?? 400),
            })
          : []),
      ],
      depthMm,
      wallMm,
      showWall,
      width: size?.[0] ?? 800,
      height: size?.[1] ?? 480,
      marks: (labels ?? []).map((l) => ({
        key: l.key,
        x: l.x,
        y: l.y,
        z: l.z,
      })),
    };
  });
  if (out && labels)
    return (
      <div className="sf-thumbwrap">
        <img className="sf-thumb" src={out.url} alt={alt} draggable={false} />
        {out.marks.map((mk) => {
          const l = labels.find((x) => x.key === mk.key);
          if (!l || mk.px < 0 || mk.px > 1 || mk.py < 0 || mk.py > 1)
            return null;
          return (
            <span
              key={mk.key}
              className={`sf-thumblabel ${l.tone ?? "keep"}`}
              style={{ left: `${mk.px * 100}%`, top: `${mk.py * 100}%` }}
            >
              {l.text}
            </span>
          );
        })}
      </div>
    );
  return out ? (
    <img className="sf-thumb" src={out.url} alt={alt} draggable={false} />
  ) : (
    <Scene
      wallMm={wallMm}
      depthMm={depthMm}
      keeps={keeps}
      placements={placements.map((p) => ({
        key: p.key,
        product: p.product,
        config: p.config,
        x: p.x,
        ...(p.y !== undefined ? { y: p.y } : {}),
        ...(p.rot !== undefined ? { rot: p.rot } : {}),
        ...(p.ghost !== undefined ? { ghost: p.ghost } : {}),
      }))}
      showWall={showWall}
      dimension={false}
    />
  );
}
