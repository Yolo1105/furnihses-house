"use client";

import * as THREE from "three";
import type { Block3D } from "../storefront/lib/three/blocks";

/**
 * Materials drawn in code: birch plywood faces with visible ply layers on
 * the edges, a plank floor, fabric, paint, rubber. Textures are made once
 * on a canvas and shared; every mesh gets its own material so it can fade.
 */
export type MatSpec = {
  map?: THREE.Texture;
  color: string;
  roughness: number;
  metalness?: number;
};

const cache = new Map<string, THREE.Texture>();

function canvasTex(
  key: string,
  w: number,
  h: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  repeat: [number, number] = [1, 1],
): THREE.Texture {
  const hit = cache.get(key);
  if (hit) return hit;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  if (ctx) draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  cache.set(key, t);
  return t;
}

/** deterministic noise */
function rnd(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Birch face: pale, with long soft streaks and a few flecks. */
export function birchTex() {
  return canvasTex("birch", 512, 512, (ctx, w, h) => {
    ctx.fillStyle = "#ead8b8";
    ctx.fillRect(0, 0, w, h);
    const r = rnd(7);
    for (let i = 0; i < 70; i++) {
      const x = r() * w;
      const wid = 6 + r() * 26;
      const a = 0.05 + r() * 0.08;
      ctx.fillStyle = `rgba(160, 118, 70, ${a})`;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(
        x + 18 * (r() - 0.5),
        h * 0.3,
        x - 18 * (r() - 0.5),
        h * 0.7,
        x + 8 * (r() - 0.5),
        h,
      );
      ctx.lineTo(x + wid + 8 * (r() - 0.5), h);
      ctx.bezierCurveTo(
        x + wid - 18 * (r() - 0.5),
        h * 0.7,
        x + wid + 18 * (r() - 0.5),
        h * 0.3,
        x + wid,
        0,
      );
      ctx.closePath();
      ctx.fill();
    }
    for (let i = 0; i < 260; i++) {
      ctx.fillStyle = `rgba(120, 84, 48, ${0.06 + r() * 0.08})`;
      ctx.fillRect(r() * w, r() * h, 1 + r() * 2, 4 + r() * 22);
    }
  });
}

/** Ply edge: thirteen layers stacked across the thickness. */
export function plyEdgeTex(alongV: boolean) {
  return canvasTex(
    `ply-${alongV ? "v" : "u"}`,
    alongV ? 128 : 256,
    alongV ? 256 : 128,
    (ctx, w, h) => {
      const layers = 13;
      for (let i = 0; i < layers; i++) {
        const light = i % 2 === 0;
        ctx.fillStyle = light ? "#dbbd90" : "#c19c6c";
        if (alongV) ctx.fillRect(0, (i / layers) * h, w, h / layers + 1);
        else ctx.fillRect((i / layers) * w, 0, w / layers + 1, h);
        ctx.fillStyle = "rgba(90, 60, 30, 0.35)";
        if (alongV) ctx.fillRect(0, (i / layers) * h, w, 1);
        else ctx.fillRect((i / layers) * w, 0, 1, h);
      }
      const r = rnd(3);
      for (let i = 0; i < 120; i++) {
        ctx.fillStyle = `rgba(110, 76, 40, ${0.05 + r() * 0.08})`;
        if (alongV) ctx.fillRect(r() * w, r() * h, 6 + r() * 30, 1);
        else ctx.fillRect(r() * w, r() * h, 1, 6 + r() * 30);
      }
    },
  );
}

/** Floor planks, four across a tile, with seams and grain. */
export function plankTex() {
  return canvasTex("planks", 512, 512, (ctx, w, h) => {
    const r = rnd(11);
    const n = 4;
    for (let i = 0; i < n; i++) {
      const x0 = (i / n) * w;
      const tone = 196 + Math.floor(r() * 22);
      ctx.fillStyle = `rgb(${tone}, ${tone - 40}, ${tone - 78})`;
      ctx.fillRect(x0, 0, w / n, h);
      for (let k = 0; k < 40; k++) {
        ctx.fillStyle = `rgba(110, 70, 30, ${0.05 + r() * 0.09})`;
        ctx.fillRect(x0 + r() * (w / n), r() * h, 1 + r() * 3, 30 + r() * 140);
      }
      ctx.fillStyle = "rgba(70, 40, 18, 0.45)";
      ctx.fillRect(x0, 0, 2, h);
      const seamY = r() * h;
      ctx.fillRect(x0, seamY, w / n, 2);
    }
  });
}

/** Woven noise for fabric. */
export function fabricTex() {
  return canvasTex(
    "fabric",
    256,
    256,
    (ctx, w, h) => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
      const r = rnd(5);
      for (let i = 0; i < 9000; i++) {
        ctx.fillStyle = `rgba(0, 0, 0, ${r() * 0.12})`;
        ctx.fillRect(r() * w, r() * h, 2, 1);
      }
    },
    [4, 4],
  );
}

/** The 1:1 floor paper: the footprint outline with its width and depth written on the margins. */
export function paperTex(
  wMm: number,
  dMm: number,
  marginX: number,
  front: number,
) {
  const pw = wMm + 2 * marginX;
  const pd = dMm + front;
  const W = 1024;
  const H = Math.round((W * pd) / pw);
  return canvasTex(
    `paper-${wMm}-${dMm}-${marginX}-${front}`,
    W,
    H,
    (ctx, w, h) => {
      const k = w / pw;
      ctx.fillStyle = "#fbf5ea";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(110, 24, 16, 0.85)";
      ctx.lineWidth = 6;
      ctx.setLineDash([26, 16]);
      ctx.strokeRect(marginX * k, 0, wMm * k, dMm * k);
      ctx.setLineDash([]);
      ctx.fillStyle = "#6e1810";
      const fs = Math.max(60, Math.min(120, front * k * 0.5));
      ctx.font = `700 ${fs}px Archivo, system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${wMm / 10} cm`, w / 2, dMm * k + (front * k) / 2);
      ctx.save();
      ctx.translate(w - (marginX * k) / 2, (dMm * k) / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.font = `700 ${Math.min(fs, marginX * k * 0.55)}px Archivo, system-ui, sans-serif`;
      ctx.fillText(`${dMm / 10} cm`, 0, 0);
      ctx.restore();
      ctx.fillStyle = "rgba(110, 24, 16, 0.6)";
      ctx.font = `500 ${Math.max(28, fs * 0.36)}px Archivo, system-ui, sans-serif`;
      ctx.fillText("footprint, true size", w / 2, dMm * k + front * k * 0.86);
    },
  );
}

/** The thinnest axis of a panel decides which faces are faces and which are edges. */
function plySpecs(bl: Block3D, tint: string): MatSpec[] {
  const face: MatSpec = { map: birchTex(), color: tint, roughness: 0.6 };
  const eU: MatSpec = { map: plyEdgeTex(false), color: tint, roughness: 0.72 };
  const eV: MatSpec = { map: plyEdgeTex(true), color: tint, roughness: 0.72 };
  const thin = Math.min(bl.w, bl.h, bl.d);
  // BoxGeometry material order: +x, -x, +y, -y, +z, -z
  // ±x faces: u↔z v↔y · ±y faces: u↔x v↔z · ±z faces: u↔x v↔y
  if (thin === bl.w) return [face, face, eU, eU, eU, eU];
  if (thin === bl.h) return [eV, eV, face, face, eV, eV];
  return [eU, eU, eV, eV, face, face];
}

/** Materials for one block, by what it is. */
export function specsFor(
  bl: Block3D,
  role: "keep" | "pile" | "part" | "prop",
): MatSpec[] {
  const m = bl.mat;
  if (m === "paint") return [{ color: bl.color, roughness: 0.42 }];
  if (m === "rubber") return [{ color: bl.color, roughness: 0.92 }];
  if (role === "part" && m === "metal")
    return [{ color: bl.color, roughness: 0.32, metalness: 0.7 }];
  if (role === "part" && m === "matte")
    return [{ color: bl.color, roughness: 0.86 }];
  if (role === "part") {
    if (bl.color === "#e7551a") return [{ color: bl.color, roughness: 0.42 }];
    if (bl.color === "#2f2a26") return [{ color: "#2a2623", roughness: 0.9 }];
    if (bl.color === "#8b7052") return plySpecs(bl, "#b89468");
    return plySpecs(bl, "#ffffff");
  }
  switch (m) {
    case "fabric":
      return [{ map: fabricTex(), color: bl.color, roughness: 0.96 }];
    case "duvet":
      return [{ map: fabricTex(), color: bl.color, roughness: 0.92 }];
    case "wood":
      return [{ map: birchTex(), color: bl.color, roughness: 0.58 }];
    case "screen":
      return [{ color: bl.color, roughness: 0.22, metalness: 0.1 }];
    case "metal":
      return [{ color: bl.color, roughness: 0.32, metalness: 0.7 }];
    case "ceramic":
      return [{ color: bl.color, roughness: 0.28 }];
    case "glass":
      return [{ color: bl.color, roughness: 0.15, metalness: 0.05 }];
    case "matte":
      return [{ color: bl.color, roughness: 0.86 }];
    case "card":
      return [{ color: bl.color, roughness: 0.95 }];
    default:
      break;
  }
  if (role === "prop" || role === "pile")
    return [{ map: fabricTex(), color: bl.color, roughness: 0.9 }];
  return [{ color: bl.color, roughness: 0.88 }];
}
