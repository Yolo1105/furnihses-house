"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Lens } from "./catalog";
import { getMoment, moments, type KeepId } from "./moments";

/**
 * The one piece of state every page reads and writes: the spot the visitor
 * is thinking about. A moment (which spot), how wide the wall is, what stays
 * there, and which life they are looking through. Nothing here is an order.
 */
type Spot = {
  momentId: string | null;
  wallMm: number;
  keeps: KeepId[];
  lens: Lens | null;
};

const KEY = "furnishes-spot-v1";
const empty: Spot = { momentId: null, wallMm: 2400, keeps: [], lens: null };
let cache: Spot | null = null;
const listeners = new Set<() => void>();

const keepIds: KeepId[] = [
  "door",
  "chair",
  "desk",
  "bed",
  "sofa",
  "counter",
  "tv",
];
const lensIds: Lens[] = ["nothing-yet", "everything-stays", "moves-with-you"];

function read(): Spot {
  if (cache) return cache;
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    const o: unknown = raw ? JSON.parse(raw) : null;
    if (o && typeof o === "object") {
      const r = o as Record<string, unknown>;
      cache = {
        momentId:
          typeof r.momentId === "string" && getMoment(r.momentId)
            ? r.momentId
            : null,
        wallMm:
          typeof r.wallMm === "number" && r.wallMm >= 600 && r.wallMm <= 8000
            ? r.wallMm
            : empty.wallMm,
        keeps: Array.isArray(r.keeps)
          ? r.keeps.filter((k): k is KeepId => keepIds.includes(k as KeepId))
          : [],
        lens: lensIds.includes(r.lens as Lens) ? (r.lens as Lens) : null,
      };
    } else cache = empty;
  } catch {
    cache = empty;
  }
  return cache;
}

function write(next: Spot) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // memory only
  }
  for (const l of listeners) l();
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

/** Keeps a moment draws by default, through a lens. */
export function keepsFor(momentId: string | null, lens: Lens | null): KeepId[] {
  const m = momentId ? getMoment(momentId) : undefined;
  if (!m) return [];
  const all = m.layout.filter((k): k is KeepId => k !== "piece");
  if (lens === "nothing-yet") return all.filter((k) => k === "door");
  return all;
}

export function useSpot() {
  const spot = useSyncExternalStore(subscribe, read, () => empty);
  const set = useCallback(
    (patch: Partial<Spot>) => write({ ...read(), ...patch }),
    [],
  );
  const pickMoment = useCallback((momentId: string) => {
    const cur = read();
    const m = getMoment(momentId);
    write({
      ...cur,
      momentId,
      wallMm: m?.wall ?? cur.wallMm,
      keeps: keepsFor(momentId, cur.lens),
    });
  }, []);
  const setLens = useCallback((lens: Lens | null) => {
    const cur = read();
    write({
      ...cur,
      lens,
      keeps: cur.momentId ? keepsFor(cur.momentId, lens) : cur.keeps,
    });
  }, []);
  const toggleKeep = useCallback((k: KeepId) => {
    const cur = read();
    write({
      ...cur,
      keeps: cur.keeps.includes(k)
        ? cur.keeps.filter((x) => x !== k)
        : [...cur.keeps, k],
    });
  }, []);
  const clear = useCallback(() => write(empty), []);
  return { spot, set, pickMoment, setLens, toggleKeep, clear };
}

export const allKeeps = keepIds;

export { roomOrder } from "./rooms";

export function momentsIn(room: string) {
  return moments.filter((m) => m.room === room);
}

export function roomOfMoment(momentId: string | null) {
  return momentId ? (getMoment(momentId)?.room ?? null) : null;
}
