import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { families, placeOf, type Life } from "../family/data";
import { homeOf, roomOf } from "../family/town";

/* A still of a design standing in its room, taken from the street
   (public/family/athome/<design>.webp, from /api/dev-poster?athome=).
   Server only: it looks on disk for the picture. */

export type AtHome = { src: string; caption: string };

const dir = () => path.join(process.cwd(), "public", "family", "athome");

const lives = () => families.flatMap((f) => f.bodies.flatMap((b) => b.lives));

const where = (life: Life | undefined) =>
  [
    homeOf(roomOf(life?.caseId ?? null)?.home)?.name,
    life ? placeOf(life.caseId)?.name.toLowerCase() : undefined,
  ]
    .filter(Boolean)
    .join(", ");

/* The stills are kept as WebP, at 960 px: twice the widest place they are
   shown. A fresh one from the street arrives as a JPEG, so both are read. */
const KINDS = [".webp", ".jpg"];

const fileOf = (lifeId: string) =>
  KINDS.find((k) => existsSync(path.join(dir(), lifeId + k)));

/** the still of one design, if it has been taken */
export function athomeOf(lifeId: string): AtHome | null {
  const kind = fileOf(lifeId);
  if (!kind) return null;
  const w = where(lives().find((l) => l.id === lifeId));
  return {
    src: `/family/athome/${lifeId}${kind}`,
    caption: w ? `At home: ${w}` : "At home",
  };
}

/** the still of a released design, by its catalogue id */
export function athomeFor(productId: string): AtHome | null {
  const all = lives().filter((l) => l.productId === productId);
  const life = all.find((l) => !l.grownFrom) ?? all[0];
  return life ? athomeOf(life.id) : null;
}

/** where every still is, by the design it shows: read once, for a listing */
export function athomeSrc(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    for (const f of readdirSync(dir())) {
      const kind = KINDS.find((k) => f.endsWith(k));
      if (!kind) continue;
      const id = f.slice(0, -kind.length);
      // a WebP wins over the JPEG it was made from
      if (kind === ".webp" || !out[id]) out[id] = `/family/athome/${f}`;
    }
  } catch {
    /* no stills taken yet */
  }
  return out;
}
