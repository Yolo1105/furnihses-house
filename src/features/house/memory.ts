"use client";

/**
 * What the friend remembers about this visitor, in this browser: facts in
 * their words, the places they touched, how many times they came. Small on
 * purpose; the house itself remembers what stands where.
 */
export type FriendMemory = {
  facts: string[];
  touched: string[];
  visits: number;
  lastAt: number;
};

const KEY = "furnishes-friend-v1";
const empty: FriendMemory = { facts: [], touched: [], visits: 0, lastAt: 0 };

export function readMemory(): FriendMemory {
  try {
    const raw = window.localStorage.getItem(KEY);
    const o: unknown = raw ? JSON.parse(raw) : null;
    if (!o || typeof o !== "object") return { ...empty };
    const r = o as Partial<FriendMemory>;
    return {
      facts: Array.isArray(r.facts)
        ? r.facts.filter((f): f is string => typeof f === "string").slice(-20)
        : [],
      touched: Array.isArray(r.touched)
        ? r.touched.filter((f): f is string => typeof f === "string").slice(-20)
        : [],
      visits: typeof r.visits === "number" ? r.visits : 0,
      lastAt: typeof r.lastAt === "number" ? r.lastAt : 0,
    };
  } catch {
    return { ...empty };
  }
}

export function writeMemory(m: FriendMemory) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(m));
  } catch {
    // memory only
  }
}

/** a new visit: counted once per page load, and only if the last one was a while ago */
export function bumpVisit(m: FriendMemory): FriendMemory {
  const now = Date.now();
  const fresh = now - m.lastAt > 30 * 60 * 1000;
  return {
    ...m,
    visits: fresh ? m.visits + 1 : Math.max(1, m.visits),
    lastAt: now,
  };
}

export function withFact(m: FriendMemory, fact: string): FriendMemory {
  const f = fact.trim().slice(0, 120);
  if (!f || m.facts.includes(f)) return m;
  return { ...m, facts: [...m.facts, f].slice(-20) };
}

export function withTouched(m: FriendMemory, place: string): FriendMemory {
  if (m.touched.includes(place)) return m;
  return { ...m, touched: [...m.touched, place].slice(-20) };
}
