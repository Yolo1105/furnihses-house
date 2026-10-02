"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { assembly } from "../lib/assembly";
import type { Configuration, Product } from "../lib/catalog";
import { holeGrid, partColors } from "../lib/draw";
import {
  bounds,
  boxCorners,
  clamp,
  faces,
  iso,
  paintSort,
  ISO_X,
  type Box,
  type Rgb3,
} from "../lib/iso";
import { keepNames, type KeepId } from "../lib/moments";
import { keepBoxes, keepWidth } from "../lib/scene";

type Placement = {
  key: string;
  product: Product;
  config: Configuration;
  x: number;
  /** world y of the local origin; defaults to against the wall */
  y?: number;
  rot?: 0 | 90;
  ghost?: boolean;
  /** animate parts dropping in (keyed on `enterKey`) */
  enter?: boolean;
  label?: string;
};

type Drawn = Box & {
  key: string;
  colors: Rgb3;
  ghost: boolean;
  enter: boolean;
  holes: [number, number, number][] | null;
  order: number;
};

const VB_W = 800;
const VB_H = 480;

/**
 * A spot drawn to scale: a wall, a floor, the things already there, and one
 * or more pieces standing among them. Same projection as every piece
 * drawing, so the piece card and the piece in your room are the same object.
 * The wall edge is a handle: drag it and the wall is as wide as yours.
 */
export function Scene({
  wallMm,
  depthMm,
  keeps = [],
  placements,
  onWall,
  showWall = true,
  dimension = true,
  enterKey,
  caption,
  className,
}: {
  wallMm: number;
  depthMm: number;
  keeps?: { id: KeepId; x: number }[];
  placements: Placement[];
  onWall?: ((mm: number) => void) | undefined;
  showWall?: boolean;
  dimension?: boolean;
  enterKey?: string | number | undefined;
  caption?: string | undefined;
  className?: string | undefined;
}) {
  const W = wallMm;
  const D = depthMm;
  // Motion only for things the visitor adds after the drawing is on screen.
  // A drawing that arrives with a page is complete at first paint.
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setAnimate(true), 150);
    return () => window.clearTimeout(t);
  }, []);
  const tallest = keeps.reduce(
    (m, k) => Math.max(m, ...keepBoxes(k.id, k.x, 0).map((b) => b.z + b.h)),
    0,
  );
  const H = showWall ? Math.max(1500, tallest + 120) : 0;

  const drawn: Drawn[] = [];
  let order = 0;
  for (const k of keeps)
    for (const b of keepBoxes(k.id, k.x, D))
      drawn.push({
        ...b,
        key: `${k.id}-${k.x}-${order}`,
        ghost: false,
        enter: false,
        holes: null,
        order: order++,
      });
  for (const pl of placements) {
    const nodes = assembly(pl.product, pl.config);
    const depth = pl.product.depth ?? 400;
    const py = pl.y ?? D - depth;
    for (const n of nodes) {
      if (n.kind === "wheel") continue;
      const box: Box =
        pl.rot === 90
          ? { x: pl.x + n.y, y: py - n.x - n.w, z: n.z, w: n.d, d: n.w, h: n.h }
          : { x: pl.x + n.x, y: py + n.y, z: n.z, w: n.w, d: n.d, h: n.h };
      const holes =
        n.partId === "functional-panel" &&
        pl.rot !== 90 &&
        ["organiser", "screen", "desk"].includes(pl.product.shape)
          ? holeGrid({ ...n, x: box.x, y: box.y, z: box.z })
          : null;
      drawn.push({
        ...box,
        key: `${pl.key}-${n.id}`,
        colors: partColors(n, pl.config.finish),
        ghost: pl.ghost ?? false,
        enter: animate && (pl.enter ?? false),
        holes,
        order: order++,
      });
    }
  }
  const sorted = paintSort(drawn);

  const corners: [number, number, number][] = [
    [0, 0, 0],
    [W, 0, 0],
    [W, D, 0],
    [0, D, 0],
    [0, D, H],
    [W, D, H],
    [0, -160, 0],
  ];
  const pts = [
    ...corners.map(([x, y, z]) => iso(x, y, z)),
    ...drawn.flatMap((b) => boxCorners(b, iso)),
  ];
  const b = bounds(pts);
  const pad = 36;
  const scale = Math.min(
    (VB_W - 2 * pad) / (b.xmax - b.xmin),
    (VB_H - 2 * pad) / (b.ymax - b.ymin),
  );
  const tx = VB_W / 2 - ((b.xmin + b.xmax) / 2) * scale;
  const ty = VB_H / 2 - ((b.ymin + b.ymax) / 2) * scale;
  const P = (x: number, y: number, z: number): [number, number] => {
    const [px, py] = iso(x, y, z);
    return [px * scale + tx, py * scale + ty];
  };
  const poly = (c: [number, number, number][]) =>
    c.map((v) => P(...v).join(",")).join(" ");

  // wall handle drag
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ x0: number; w0: number; k: number } | null>(null);
  const onDown = (e: ReactPointerEvent<SVGGElement>) => {
    if (!onWall) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = {
      x0: e.clientX,
      w0: W,
      k: VB_W / rect.width / (ISO_X * scale),
    };
    e.preventDefault();
  };
  const onMove = (e: ReactPointerEvent<SVGGElement>) => {
    if (!drag.current || !onWall) return;
    const next =
      drag.current.w0 + (e.clientX - drag.current.x0) * drag.current.k;
    onWall(clamp(Math.round(next / 50) * 50, 600, 8000));
  };
  const onUp = () => {
    drag.current = null;
  };

  const handle = P(W, D, 0);
  const handleTop = P(W, D, showWall ? 700 : 300);
  const dimA = P(0, -140, 0);
  const dimB = P(W, -140, 0);

  return (
    <svg
      ref={svgRef}
      className={`sf-scene${className ? ` ${className}` : ""}`}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      role="img"
      aria-label={`A spot ${W / 10} cm wide with ${placements.map((p) => p.product.name).join(", ")}${keeps.length ? ` beside ${keeps.map((k) => keepNames[k.id]).join(", ")}` : ""}.`}
    >
      {/* floor */}
      <polygon
        points={poly([
          [0, 0, 0],
          [W, 0, 0],
          [W, D, 0],
          [0, D, 0],
        ])}
        fill="#f3dfcb"
        stroke="#6e1810"
        strokeOpacity=".25"
      />
      {/* wall */}
      {showWall && (
        <polygon
          points={poly([
            [0, D, 0],
            [W, D, 0],
            [W, D, H],
            [0, D, H],
          ])}
          fill="#fbeee0"
          stroke="#6e1810"
          strokeOpacity=".25"
        />
      )}
      {sorted.map((d) => {
        const f = faces(d, (x, y, z) => P(x, y, z));
        return (
          <g
            key={d.key}
            className={d.enter ? "sf-drop" : undefined}
            style={{
              opacity: d.ghost ? 0.38 : 1,
              animationDelay: d.enter
                ? `${Math.min(d.order % 40, 12) * 22}ms`
                : undefined,
            }}
            data-enter={enterKey}
          >
            <polygon
              points={f.front}
              fill={d.colors[0]}
              stroke="#6e181033"
              strokeWidth="1"
            />
            <polygon
              points={f.side}
              fill={d.colors[1]}
              stroke="#6e181044"
              strokeWidth="1"
            />
            <polygon
              points={f.top}
              fill={d.colors[2]}
              stroke="#6e181033"
              strokeWidth="1"
            />
            {d.holes?.map(([hx, hy, hz], i) => {
              const [px, py] = P(hx, hy, hz);
              return (
                <circle
                  key={i}
                  cx={px}
                  cy={py}
                  r={2.4 * Math.min(1, scale * 6)}
                  fill="#6e18104a"
                />
              );
            })}
          </g>
        );
      })}
      {/* labels for kept things */}
      {keeps.map((k) => {
        const [lx, ly] = P(
          k.x + keepWidth[k.id] / 2,
          D -
            (k.id === "bed"
              ? 2000
              : k.id === "sofa"
                ? 850
                : k.id === "desk" || k.id === "counter"
                  ? 600
                  : 450),
          0,
        );
        return (
          <text
            key={`${k.id}-${k.x}`}
            x={lx}
            y={ly + 16}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="10.5"
            fill="#6b2c12"
            fillOpacity=".7"
            letterSpacing=".5"
          >
            {keepNames[k.id].toUpperCase()}
          </text>
        );
      })}
      {placements
        .filter((p) => p.label)
        .map((p) => {
          const [lx, ly] = P(
            p.x + p.product.width / 2,
            D - (p.product.depth ?? 400),
            0,
          );
          return (
            <text
              key={p.key + "-label"}
              x={lx}
              y={ly + 16}
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fontSize="10.5"
              fill="#e7551a"
              letterSpacing=".5"
            >
              {p.label?.toUpperCase()}
            </text>
          );
        })}
      {/* dimension */}
      {dimension && (
        <g fontFamily="ui-monospace, monospace" fontSize="11" fill="#6b2c12">
          <line
            x1={dimA[0]}
            y1={dimA[1]}
            x2={dimB[0]}
            y2={dimB[1]}
            stroke="#6b2c12"
            strokeOpacity=".55"
          />
          <text
            x={(dimA[0] + dimB[0]) / 2}
            y={(dimA[1] + dimB[1]) / 2 + 16}
            textAnchor="middle"
          >
            {W / 10} cm {showWall ? "of wall" : "of floor"}
          </text>
        </g>
      )}
      {/* wall handle */}
      {onWall && (
        <g
          className="sf-wall-handle"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          role="slider"
          aria-label="Wall width"
          aria-valuenow={W / 10}
          aria-valuemin={60}
          aria-valuemax={800}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") onWall(clamp(W + 100, 600, 8000));
            if (e.key === "ArrowLeft") onWall(clamp(W - 100, 600, 8000));
          }}
        >
          <line
            x1={handle[0]}
            y1={handle[1]}
            x2={handleTop[0]}
            y2={handleTop[1]}
            stroke="#e7551a"
            strokeWidth="3"
          />
          <circle cx={handle[0]} cy={handle[1]} r="11" fill="#e7551a" />
          <path
            d={`M${handle[0] - 5} ${handle[1]}h10M${handle[0] - 3} ${handle[1] - 3}l-2 3 2 3M${handle[0] + 3} ${handle[1] - 3}l2 3-2 3`}
            stroke="#fbf0dc"
            strokeWidth="1.4"
            fill="none"
          />
        </g>
      )}
      {caption && (
        <text
          x="16"
          y="24"
          fontFamily="ui-monospace, monospace"
          fontSize="10.5"
          fill="#6b2c12"
          fillOpacity=".7"
          letterSpacing=".8"
        >
          {caption.toUpperCase()}
        </text>
      )}
    </svg>
  );
}
