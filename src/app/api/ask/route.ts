import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { defaultConfig, products } from "@/features/storefront/lib/catalog";
import { moments } from "@/features/storefront/lib/moments";
import { counts } from "@/features/storefront/lib/steps";

/**
 * The friend who knows the house, on a real model.
 *
 * Two kinds of call. A "say" is something the visitor typed. A "moment" is
 * something the visitor just did: the friend decides whether it needs a
 * sentence at all, and most of the time it does not. Facts come from the
 * catalogue below and nowhere else. The route is same-site only and rate
 * limited, so nobody can run up the bill from outside the house.
 */
export const runtime = "nodejs";

type PlaceNow = {
  id: string;
  room: string;
  spot: string;
  piece: string;
  pieceId: string;
  state: string;
  wall?: { dir: string; n: number };
};
type Turn = { role: "user" | "assistant"; content: string };
type Moment = { type: string; place?: string; detail?: string };
type Memory = { facts: string[]; touched: string[]; visits: number };
type Body = {
  kind: "say" | "moment";
  text?: string;
  moment?: Moment;
  history?: Turn[];
  state: { focus: string | null; places: PlaceNow[]; bag: string[] };
  memory?: Memory;
};

const FACTS = products.map((p) => {
  const c = counts(p, defaultConfig(p));
  return {
    id: p.id,
    name: p.name,
    kind: p.line === "wall" ? "wall for a room" : "piece for a spot",
    size_cm: `${p.width / 10} wide × ${p.height / 10} high × ${p.depth !== null ? p.depth / 10 : "varies"} deep`,
    for: p.use,
    does: p.does,
    parts: c.parts,
    bolts: c.bolts,
    minutes_about: c.minutes,
    people: c.people,
    boxes: c.boxes,
    heaviest_box_kg: c.heaviestKg,
    price: "to be announced when released",
    verified_loads: "not yet; tested on samples first",
  };
});

const PLACES = moments.map((m) => ({
  id: m.id,
  room: m.room,
  spot: m.spot,
  situation_before: m.now,
  what_changes: m.could,
  pieces: m.pieces,
}));

const SYSTEM = `You are the friend who knows the house, on the Furnishes website. The website is a small home drawn to scale that the visitor can touch. Small pieces stand at the walls of each room; a wall for a room (double-sided bookcase segments) stands in the middle of a room. You walk beside the visitor. You notice things. You show rather than tell. You count instead of persuading. You sometimes say no.

Your job is an arc, in this order, never rushed and never all at once:
1. Recognise. Help them see their own situation in the house: that chair by the door wearing three coats, the phone on the floor beside the bed. You point at it; you never say their home is a problem.
2. Show. Get the piece to arrive (go_to) and let them watch the change. The coats leave the chair. That is the argument; you do not add to it.
3. Make it theirs. One question at a time, and only when the answer changes what you would show: how wide the wall is, what they already own, who uses the spot. Never a list of questions. Never ask what you could see.
4. Count. Parts, bolts, one key, minutes, boxes, the heaviest box. Only numbers from the facts below.
5. Let them decide. Take it, or not now. Both are fine, and you say so.

How you speak:
- One sentence, sometimes two. Plain words. No exclamation marks. No adjectives about quality, no urgency, no "perfect", no "imagine".
- Act with the tools whenever the visitor names a place, a thing, a problem or a wish. Say one true sentence alongside the action. Never say you did something without calling the tool.
- Never invent a price, a load rating, a delivery date or a lead time. The prices on the site are estimates worked out from each design's own parts, and are confirmed with a quote; loads are tested on samples first. Say exactly that when asked.
- Say no when it is true: if they already own something that does the job, they do not need the piece; if a wall is too short for a piece, name the smaller one; one piece per spot, never more; if what they want is not in the house, say so and offer the nearest thing. A friend who says no is the one they believe when you say yes.
- When they tell you something about their home or themselves, keep it with remember(fact), short and in their words.
- If they want a wall planned, a photo drawn into their room, a quote, or a person: hand_over.
- If the message is not about the house or furniture, one sentence saying so and one place to look at.

When the page sends you a MOMENT (something the visitor just did), decide whether it needs anything from you. Most moments need nothing: reply with exactly the text "(quiet)" and no tool. Speak only when one sentence moves the arc one step, tells them something true they could not see, or says they do not need something. Never twice in a row about the same thing. Remember what you already said; the recent turns are in the conversation.

The pieces (facts):
${JSON.stringify(FACTS)}

The places in the house:
${JSON.stringify(PLACES)}

Every message ends with the state of the house in brackets: which place is in focus, what stands where (before = nothing there yet, after = the piece stands, apart = pulled apart, kit = laid flat on the floor), the walls they drew, what is in their bag, and what you remember about this visitor (facts, places they touched, how many visits). Use it.`;

const placeIds = moments.map((m) => m.id);
const placeSchema = { type: "string", enum: placeIds } as const;
const onePlace = {
  type: "object",
  properties: { place: placeSchema },
  required: ["place"],
  additionalProperties: false,
} as const;

const tools: Anthropic.Beta.BetaTool[] = [
  {
    name: "go_to",
    description:
      "Walk the camera to a place in the house. If nothing stands there yet, the piece for that place arrives and the clutter moves onto it.",
    input_schema: onePlace,
    strict: true,
  },
  {
    name: "pull_apart",
    description: "Pull the piece at a place apart in place, every part tagged.",
    input_schema: onePlace,
    strict: true,
  },
  {
    name: "lay_flat",
    description:
      "Lay every part of the piece at a place flat on the floor, numbered, as it arrives in the boxes.",
    input_schema: onePlace,
    strict: true,
  },
  {
    name: "build",
    description:
      "Build the piece at a place from the parts on the floor, with the time bar.",
    input_schema: onePlace,
    strict: true,
  },
  {
    name: "take_it",
    description:
      "Put the piece at a place in the visitor's bag: its boxes appear by the front door. Only when they said they want it.",
    input_schema: onePlace,
    strict: true,
  },
  {
    name: "leave_as_was",
    description:
      "Take the piece away from a place and put the spot back as it was.",
    input_schema: onePlace,
    strict: true,
  },
  {
    name: "draw_wall",
    description:
      "Grow a wall for a room at a place: double-sided bookcase segments end to end. dir x runs along the back wall, dir z runs into the room. n is 1 to 4 segments of 120 cm.",
    input_schema: {
      type: "object",
      properties: {
        place: placeSchema,
        dir: { type: "string", enum: ["x", "z"] },
        n: { type: "integer", minimum: 1, maximum: 4 },
      },
      required: ["place", "dir", "n"],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    name: "remove_wall",
    description: "Take away the wall the visitor drew at a place.",
    input_schema: onePlace,
    strict: true,
  },
  {
    name: "remember",
    description:
      "Keep one short fact about this visitor's home or life, in their words, for next time. Examples: 'has a shoe cabinet by the door', 'wall by the desk is 210 cm', 'two kids share the room'.",
    input_schema: {
      type: "object",
      properties: { fact: { type: "string", maxLength: 120 } },
      required: ["fact"],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    name: "hand_over",
    description:
      "Hand the visitor to a person: the planning service, where they send a photo and two measurements and get the wall or piece drawn into their room.",
    input_schema: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    strict: true,
  },
];

/* ---------- the door: same site only, and not too often ---------- */

const hits = new Map<string, number[]>();
const WINDOW = 60_000;
const PER_IP = 40;
const PER_ALL = 400;
function limited(ip: string) {
  const now = Date.now();
  const mine = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  let all = 0;
  for (const [k, list] of hits) {
    const live = list.filter((t) => now - t < WINDOW);
    if (live.length) hits.set(k, live);
    else hits.delete(k);
    all += live.length;
  }
  if (mine.length >= PER_IP || all >= PER_ALL) return true;
  mine.push(now);
  hits.set(ip, mine);
  return false;
}

function sameSite(req: Request) {
  const site = req.headers.get("sec-fetch-site");
  if (site && site !== "same-origin" && site !== "none") return false;
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return false;
    } catch {
      return false;
    }
  }
  return true;
}

const quiet = { text: "", actions: [] as { name: string; input: unknown }[] };

export async function POST(req: Request) {
  if (!sameSite(req))
    return NextResponse.json({ error: "not from the house" }, { status: 403 });
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local";
  if (limited(ip))
    return NextResponse.json(
      { fallback: true, reason: "too often" },
      { status: 429 },
    );

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  const kind = body.kind === "moment" ? "moment" : "say";
  const text = typeof body.text === "string" ? body.text.slice(0, 800) : "";
  const moment =
    body.moment && typeof body.moment.type === "string"
      ? {
          type: body.moment.type.slice(0, 40),
          ...(typeof body.moment.place === "string"
            ? { place: body.moment.place.slice(0, 40) }
            : {}),
          ...(typeof body.moment.detail === "string"
            ? { detail: body.moment.detail.slice(0, 200) }
            : {}),
        }
      : null;
  if (kind === "say" && !text.trim())
    return NextResponse.json({ error: "empty" }, { status: 400 });
  if (kind === "moment" && !moment)
    return NextResponse.json({ error: "empty" }, { status: 400 });

  let client: Anthropic;
  try {
    client = new Anthropic();
  } catch {
    return NextResponse.json(
      { fallback: true, reason: "no credentials" },
      { status: 503 },
    );
  }

  const history: Anthropic.Beta.BetaMessageParam[] = (
    Array.isArray(body.history) ? body.history : []
  )
    .slice(-8)
    .filter(
      (t) =>
        (t.role === "user" || t.role === "assistant") &&
        typeof t.content === "string" &&
        t.content.trim(),
    )
    .map((t) => ({ role: t.role, content: t.content.slice(0, 800) }));
  const state = body.state ?? { focus: null, places: [], bag: [] };
  const memory: Memory = {
    facts: Array.isArray(body.memory?.facts)
      ? body.memory.facts.slice(0, 20)
      : [],
    touched: Array.isArray(body.memory?.touched)
      ? body.memory.touched.slice(0, 20)
      : [],
    visits: typeof body.memory?.visits === "number" ? body.memory.visits : 1,
  };
  const tail = `\n\n[House now: ${JSON.stringify({ ...state, memory })}]`;
  const userText =
    kind === "say"
      ? `${text}${tail}`
      : `MOMENT: ${JSON.stringify(moment)}${tail}`;
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    ...history,
    { role: "user", content: userText },
  ];

  try {
    const res = await client.beta.messages.create({
      model: "claude-opus-5",
      max_tokens: 400,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      system: [
        { type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } },
      ],
      tools,
      tool_choice: { type: "auto" },
      messages,
    });
    if (res.stop_reason === "refusal") return NextResponse.json(quiet);
    const out = res.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join(" ")
      .trim();
    const actions = res.content
      .filter(
        (b): b is Anthropic.Beta.BetaToolUseBlock => b.type === "tool_use",
      )
      .map((b) => ({ name: b.name, input: b.input }));
    const silent =
      /^\(?quiet\)?\.?$/i.test(out) || (!out && actions.length === 0);
    return NextResponse.json(
      silent ? quiet : { text: out, actions, model: res.model },
    );
  } catch (error) {
    if (
      error instanceof Anthropic.AuthenticationError ||
      error instanceof Anthropic.PermissionDeniedError
    )
      return NextResponse.json(
        { fallback: true, reason: "credentials" },
        { status: 503 },
      );
    if (error instanceof Anthropic.RateLimitError)
      return NextResponse.json(
        { fallback: true, reason: "rate limited" },
        { status: 503 },
      );
    if (error instanceof Anthropic.APIError)
      return NextResponse.json(
        { fallback: true, reason: `api ${error.status ?? ""}`.trim() },
        { status: 502 },
      );
    const msg = error instanceof Error ? error.message : "";
    if (/credential|api key|apiKey|ANTHROPIC_API_KEY/i.test(msg))
      return NextResponse.json(
        { fallback: true, reason: "no credentials" },
        { status: 503 },
      );
    return NextResponse.json(
      { fallback: true, reason: "network" },
      { status: 502 },
    );
  }
}
