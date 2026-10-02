"use client";

import { useId } from "react";
import { assembly, type PartNode } from "../lib/assembly";
import {
  defaultConfig,
  type Configuration,
  type Product,
} from "../lib/catalog";
import { holeGrid, partColors } from "../lib/draw";
import { transitionParts, type TransitionPart } from "../lib/exploration";
import {
  bounds,
  boxCorners,
  faces,
  iso,
  paintSort,
  stage,
  type Proj,
} from "../lib/iso";
import { explodeStage } from "../lib/steps";

/**
 * Isometric drawing of a configured piece, part by part. Every polygon is a
 * real row in the bill of parts, so what you click is what you get.
 * Explode is staged in the order the parts went on; build mode drops parts
 * into place with motion.
 */
export function FurnitureModel({
  product: p,
  config: configIn,
  explode = 0,
  selected,
  selectedIds,
  placedIds,
  justPlacedIds,
  onSelect,
  dimensions = false,
  back = false,
  folded = false,
  morphTo,
  morphProgress = 0,
  turn,
  hideGroups,
  className,
}: {
  product: Product;
  config?: Configuration;
  explode?: number;
  selected?: string | undefined;
  selectedIds?: string[] | undefined;
  /** build mode: only these parts are in place; the rest wait above */
  placedIds?: string[] | undefined;
  justPlacedIds?: string[] | undefined;
  onSelect?: ((id: string) => void) | undefined;
  dimensions?: boolean;
  back?: boolean;
  folded?: boolean;
  morphTo?: { product: Product; config: Configuration } | undefined;
  morphProgress?: number;
  turn?: number | undefined;
  hideGroups?: string[] | undefined;
  className?: string | undefined;
}) {
  const config = configIn ?? defaultConfig(p);
  const uid = useId().replace(/:/g, "");
  const source = assembly(p, config);
  const targetNodes = morphTo
    ? assembly(morphTo.product, morphTo.config)
    : null;
  const nodes: (PartNode | TransitionPart)[] = targetNodes
    ? transitionParts(source, targetNodes, morphProgress)
    : source;
  const rotation = ((turn ?? (back ? 180 : 0)) * Math.PI) / 180;
  const cx = p.width / 2;
  const cy = (p.depth ?? 400) / 2;
  const rotate = (x: number, y: number): [number, number] => [
    cx + (x - cx) * Math.cos(rotation) - (y - cy) * Math.sin(rotation),
    cy + (x - cx) * Math.sin(rotation) + (y - cy) * Math.cos(rotation),
  ];
  const proj: Proj = (x, y, z) => {
    if (p.shape === "folding" && folded) {
      const leaf = Math.min(2, Math.floor(x / 600));
      const theta = Math.PI / 3;
      const localX = x - leaf * 600;
      const a = leaf === 1 ? theta : leaf === 2 ? -theta : 0;
      const startX = leaf === 2 ? 600 + 600 * Math.cos(theta) : leaf * 600;
      const startY = leaf === 2 ? 600 * Math.sin(theta) : 0;
      const nextX = startX + localX * Math.cos(a) - y * Math.sin(a);
      y = startY + localX * Math.sin(a) + y * Math.cos(a);
      x = nextX;
    }
    if (rotation) [x, y] = rotate(x, y);
    return iso(x, y, z);
  };
  const all = targetNodes ? [...source, ...targetNodes] : nodes;
  const b = bounds(all.flatMap((n) => boxCorners(n, proj)));
  const scale = Math.min(
    480 / (b.xmax - b.xmin + 170),
    400 / (b.ymax - b.ymin + 160),
  );

  const sorted = paintSort(
    nodes.map((n) => {
      const [rx, ry] = rotate(n.x, n.y);
      return { ...n, sortBox: { x: rx, y: ry } };
    }),
  ).sort((a, c) => {
    const ay = a.sortBox.y + a.d / 2;
    const cy2 = c.sortBox.y + c.d / 2;
    return cy2 - ay || a.z - c.z || a.sortBox.x - c.sortBox.x;
  });

  const justIndex = new Map<string, number>();

  return (
    <svg
      className={`sf-model${className ? ` ${className}` : ""}`}
      viewBox="0 0 600 520"
      role="img"
      aria-label={`${p.name}, ${config.storage === "doors" ? "with doors" : "open front"}, ${config.finish} panels. Design drawing.`}
    >
      <defs>
        <radialGradient id={`shadow${uid}`}>
          <stop stopColor="#6e1810" stopOpacity=".16" />
          <stop offset="1" stopColor="#6e1810" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse
        cx="300"
        cy={260 + ((b.ymax - b.ymin) / 2) * scale + 3}
        rx="215"
        ry="25"
        fill={`url(#shadow${uid})`}
      />
      <g
        transform={`translate(${300 - ((b.xmin + b.xmax) / 2) * scale} ${260 - ((b.ymin + b.ymax) / 2) * scale}) scale(${scale})`}
      >
        {sorted.map((n) => {
          const motion = "motion" in n ? n.motion : undefined;
          const visibility = "visibility" in n ? n.visibility : 1;
          const colors = partColors(n, config.finish);
          const [from, to] = explodeStage[n.group] ?? [0, 1];
          const e = stage(explode, from, to);
          const dx =
            e *
            ((n.x < p.width / 2 ? -1 : 1) *
              (n.group === "Body panels" ? 90 : 35));
          const dy =
            e *
            (n.group === "Top"
              ? -100
              : n.group === "Base"
                ? 65
                : n.group === "Accessories"
                  ? -40
                  : n.group === "Doors"
                    ? 50
                    : 0);
          const hidden = hideGroups?.includes(n.group) ?? false;
          const dim = selectedIds
            ? selectedIds.includes(n.partId)
              ? 1
              : 0.14
            : !selected || selected === n.partId
              ? 1
              : 0.14;
          const waiting = placedIds ? !placedIds.includes(n.partId) : false;
          let delay = 0;
          if (justPlacedIds?.includes(n.partId)) {
            const i = justIndex.get(n.partId) ?? 0;
            justIndex.set(n.partId, i + 1);
            delay = i * 70;
          }
          const f = faces(n, proj);
          return (
            <g
              key={n.id}
              className={onSelect ? "model-part interactive" : "model-part"}
              data-part={n.partId}
              data-motion={motion}
              style={{
                transform: waiting
                  ? "translate(0px,-170px)"
                  : `translate(${dx}px,${dy}px)`,
                opacity: hidden || waiting ? 0 : visibility * dim,
                pointerEvents: hidden || waiting ? "none" : undefined,
                transitionDelay: delay ? `${delay}ms` : undefined,
              }}
              onClick={onSelect ? () => onSelect(n.partId) : undefined}
            >
              <polygon
                points={f.front}
                fill={colors[0]}
                stroke="#6e181033"
                strokeWidth="1.1"
              />
              <polygon
                points={f.side}
                fill={colors[1]}
                stroke="#6e181044"
                strokeWidth="1.1"
              />
              <polygon
                points={f.top}
                fill={colors[2]}
                stroke="#6e181033"
                strokeWidth="1.1"
              />
              {n.partId === "functional-panel" &&
                ["organiser", "screen", "desk"].includes(p.shape) &&
                holeGrid(n).map(([hx, hy, hz], i) => {
                  const [px, py] = proj(hx, hy, hz);
                  return (
                    <circle key={i} cx={px} cy={py} r={2.8} fill="#6e18104a" />
                  );
                })}
            </g>
          );
        })}
      </g>
      {dimensions && (
        <g fill="#6b2c12" fontSize="12" fontFamily="ui-monospace, monospace">
          <path
            d="M85 474h430m-430-5v10m430-10v10"
            stroke="#6b2c12"
            strokeOpacity=".5"
          />
          <text x="300" y="498" textAnchor="middle">
            {p.width / 10} cm {p.shape === "folding" ? "unfolded" : "wide"}
          </text>
          <text
            x="22"
            y="255"
            transform="rotate(-90 22 255)"
            textAnchor="middle"
          >
            {p.height / 10} cm high
          </text>
          <text
            x="580"
            y="255"
            transform="rotate(-90 580 255)"
            textAnchor="middle"
          >
            {p.depth === null
              ? "depth varies with fold"
              : `${p.depth / 10} cm deep`}
          </text>
        </g>
      )}
    </svg>
  );
}
