"use client";

import { askHouse } from "./ask";
import type { FriendMemory } from "./memory";
import type { Place } from "./plan";

/**
 * The bridge to the friend on a real model. A "say" is typed; a "moment" is
 * something the visitor did, which the friend may answer with silence.
 * When the model is not reachable the rule-based friend answers typed
 * questions and stays silent on moments; the page never announces which.
 */
export type FriendAction = { name: string; input: Record<string, unknown> };
export type FriendTurn = { role: "user" | "assistant"; content: string };
export type FriendMoment = { type: string; place?: string; detail?: string };
export type FriendState = {
  focus: string | null;
  places: {
    id: string;
    room: string;
    spot: string;
    piece: string;
    pieceId: string;
    state: string;
    wall?: { dir: string; n: number };
  }[];
  bag: string[];
};
export type FriendReply = {
  text: string;
  actions: FriendAction[];
  /** true when the model answered; false when the rules did, or nobody */
  live: boolean;
  /** the model is not reachable in this session */
  unreachable?: boolean;
};

async function call(
  body: Record<string, unknown>,
): Promise<
  | { ok: true; text: string; actions: FriendAction[] }
  | { ok: false; unreachable: boolean }
> {
  try {
    const ctrl = new AbortController();
    const t = window.setTimeout(() => ctrl.abort(), 20000);
    const r = await fetch("/api/ask", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    window.clearTimeout(t);
    if (!r.ok)
      return { ok: false, unreachable: r.status === 503 || r.status === 403 };
    const j = (await r.json()) as { text?: unknown; actions?: unknown };
    const actions = Array.isArray(j.actions)
      ? j.actions.filter(
          (a): a is FriendAction =>
            !!a &&
            typeof a === "object" &&
            typeof (a as FriendAction).name === "string",
        )
      : [];
    return {
      ok: true,
      text: typeof j.text === "string" ? j.text : "",
      actions,
    };
  } catch {
    return { ok: false, unreachable: false };
  }
}

export async function sayToFriend(
  text: string,
  history: FriendTurn[],
  state: FriendState,
  memory: FriendMemory,
  places: Place[],
): Promise<FriendReply> {
  const r = await call({
    kind: "say",
    text,
    history,
    state,
    memory: {
      facts: memory.facts,
      touched: memory.touched,
      visits: memory.visits,
    },
  });
  if (r.ok) return { text: r.text, actions: r.actions, live: true };
  const f = askHouse(text, places);
  return {
    text: f.text,
    actions: f.go ? [{ name: "go_to", input: { place: f.go } }] : [],
    live: false,
    unreachable: r.unreachable,
  };
}

export async function momentForFriend(
  moment: FriendMoment,
  history: FriendTurn[],
  state: FriendState,
  memory: FriendMemory,
): Promise<FriendReply> {
  const r = await call({
    kind: "moment",
    moment,
    history,
    state,
    memory: {
      facts: memory.facts,
      touched: memory.touched,
      visits: memory.visits,
    },
  });
  if (r.ok) return { text: r.text, actions: r.actions, live: true };
  return { text: "", actions: [], live: false, unreachable: r.unreachable };
}
