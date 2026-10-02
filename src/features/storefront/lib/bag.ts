"use client";

import { useCallback, useSyncExternalStore } from "react";
import { configKeyOf, validConfig, type Configuration } from "./catalog";

/** The bag. Prices arrive when pieces are released; until then it is a quote request. */
export type BagItem = {
  id: string;
  config: Configuration;
  qty: number;
  at: number;
};

const KEY = "furnishes-bag-v1";
let cache: BagItem[] | null = null;
const listeners = new Set<() => void>();
const empty: BagItem[] = [];

function read(): BagItem[] {
  if (cache) return cache;
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    cache = Array.isArray(parsed)
      ? parsed.flatMap((v: unknown) => {
          if (!v || typeof v !== "object") return [];
          const o = v as Record<string, unknown>;
          const config = validConfig(o.config);
          if (!config || typeof o.id !== "string") return [];
          return [
            {
              id: o.id,
              config,
              qty:
                typeof o.qty === "number" && o.qty > 0
                  ? Math.min(9, Math.round(o.qty))
                  : 1,
              at: typeof o.at === "number" ? o.at : 0,
            },
          ];
        })
      : [];
  } catch {
    cache = [];
  }
  return cache;
}

function write(items: BagItem[]) {
  cache = items;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // memory only
  }
  for (const l of listeners) l();
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useBag() {
  const items = useSyncExternalStore(subscribe, read, () => empty);
  const add = useCallback((config: Configuration) => {
    const id = configKeyOf(config);
    const cur = read();
    const hit = cur.find((i) => i.id === id);
    write(
      hit
        ? cur.map((i) =>
            i.id === id ? { ...i, qty: Math.min(9, i.qty + 1) } : i,
          )
        : [...cur, { id, config, qty: 1, at: Date.now() }],
    );
  }, []);
  const setQty = useCallback((id: string, qty: number) => {
    write(
      read().map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, Math.min(9, qty)) } : i,
      ),
    );
  }, []);
  const remove = useCallback(
    (id: string) => write(read().filter((i) => i.id !== id)),
    [],
  );
  const clear = useCallback(() => write([]), []);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return { items, count, add, setQty, remove, clear };
}
