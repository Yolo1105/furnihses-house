"use client";

import { useCallback, useSyncExternalStore } from "react";
import { validConfig, type Configuration } from "./catalog";

/**
 * The Saved board. A free surface, not a list: pieces, spots and plain
 * notes sit where you drop them. Crossing out keeps a thing but marks it
 * considered. Lives in localStorage; no account needed.
 */
type Base = {
  id: string;
  crossed: boolean;
  at: number;
  /** free position on the board canvas, in canvas pixels */
  x: number;
  y: number;
};
export type BoardItem =
  | (Base & { kind: "piece"; config: Configuration; note: string })
  | (Base & { kind: "moment"; momentId: string; note: string })
  | (Base & { kind: "note"; text: string });

const KEY = "furnishes-board-v2";
let cache: BoardItem[] | null = null;
const listeners = new Set<() => void>();
const empty: BoardItem[] = [];

function read(): BoardItem[] {
  if (cache) return cache;
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    cache = Array.isArray(parsed) ? parsed.flatMap(validItem) : [];
  } catch {
    cache = [];
  }
  return cache;
}

function validItem(v: unknown): BoardItem[] {
  if (!v || typeof v !== "object") return [];
  const o = v as Record<string, unknown>;
  const base: Base = {
    id: typeof o.id === "string" ? o.id : "",
    crossed: o.crossed === true,
    at: typeof o.at === "number" ? o.at : 0,
    x: typeof o.x === "number" ? o.x : 40,
    y: typeof o.y === "number" ? o.y : 40,
  };
  if (!base.id) return [];
  const note = typeof o.note === "string" ? o.note : "";
  if (o.kind === "piece") {
    const config = validConfig(o.config);
    return config ? [{ ...base, kind: "piece", config, note }] : [];
  }
  if (o.kind === "moment" && typeof o.momentId === "string")
    return [{ ...base, kind: "moment", momentId: o.momentId, note }];
  if (o.kind === "note" && typeof o.text === "string")
    return [{ ...base, kind: "note", text: o.text }];
  return [];
}

/** Items from a shared link, validated the same way as storage. */
export function parseBoard(v: unknown): BoardItem[] {
  return Array.isArray(v) ? v.flatMap(validItem) : [];
}

function write(items: BoardItem[]) {
  cache = items;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // storage unavailable; keep in memory
  }
  for (const l of listeners) l();
}

function subscribe(l: () => void) {
  listeners.add(l);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      l();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(l);
    window.removeEventListener("storage", onStorage);
  };
}

const newId = () => Math.random().toString(36).slice(2, 10);

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;
type NewBoardItem = DistributiveOmit<
  BoardItem,
  "id" | "at" | "crossed" | "x" | "y"
>;

export function useBoard() {
  const items = useSyncExternalStore(subscribe, read, () => empty);
  const add = useCallback((item: NewBoardItem) => {
    const n = read().length;
    const next = {
      ...item,
      id: newId(),
      at: Date.now(),
      crossed: false,
      x: 24 + ((n * 236) % 700),
      y: 24 + Math.floor((n * 236) / 700) * 210 + (n % 3) * 18,
    } as BoardItem;
    write([...read(), next]);
    return next.id;
  }, []);
  const update = useCallback((id: string, patch: Partial<BoardItem>) => {
    write(
      read().map((i) => (i.id === id ? ({ ...i, ...patch } as BoardItem) : i)),
    );
  }, []);
  const move = useCallback((id: string, x: number, y: number) => {
    write(read().map((i) => (i.id === id ? { ...i, x, y } : i)));
  }, []);
  const remove = useCallback((id: string) => {
    write(read().filter((i) => i.id !== id));
  }, []);
  const clear = useCallback(() => write([]), []);
  const replace = useCallback((list: BoardItem[]) => write(list), []);
  return { items, add, update, move, remove, clear, replace };
}

export function hasPiece(items: BoardItem[], productId: string) {
  return items.some(
    (i) => i.kind === "piece" && i.config.productId === productId,
  );
}
