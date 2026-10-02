"use client";

import type { Configuration } from "../storefront/lib/catalog";

/**
 * Quote requests, kept as records. There is no account yet, so a record
 * lives in this browser; the page that shows it says so. Each record keeps
 * the exact configurations, which is what the assembly animation is built from.
 */
export type OrderRecord = {
  id: string;
  at: number;
  items: { config: Configuration; qty: number }[];
};

const KEY = "furnishes-orders-v1";

export function readOrders(): OrderRecord[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const o: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(o)) return [];
    return o.filter(
      (r): r is OrderRecord =>
        !!r &&
        typeof r === "object" &&
        typeof (r as OrderRecord).id === "string" &&
        Array.isArray((r as OrderRecord).items),
    );
  } catch {
    return [];
  }
}

export function getOrder(id: string): OrderRecord | undefined {
  return readOrders().find((r) => r.id === id);
}

export function saveOrder(
  items: { config: Configuration; qty: number }[],
): OrderRecord {
  const all = readOrders();
  const d = new Date();
  const stamp = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}`;
  const seq = all.filter((r) => r.id.includes(`-${stamp}-`)).length + 1;
  const rec: OrderRecord = {
    id: `F-${stamp}-${String(seq).padStart(2, "0")}`,
    at: Date.now(),
    items: items.map((i) => ({ config: i.config, qty: i.qty })),
  };
  try {
    window.localStorage.setItem(KEY, JSON.stringify([rec, ...all]));
  } catch {
    // memory only
  }
  return rec;
}
