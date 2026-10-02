import { asked } from "../family/ask";
import { families, statusOf, type FamilyId, type Life } from "../family/data";
import type { Configuration, Product } from "../storefront/lib/catalog";

/* Turning a sentence into a change to the piece on screen.

   It runs here, in the page, with no model behind it: the site has to be whole
   without one. A model, when there is one, answers the same shape and is held
   to the same vocabulary — and either way the change is only ever PROPOSED.
   Nothing is applied until the visitor says so. */

export type Change = {
  /** a different frame, by catalogue id */
  frame?: string;
  finish?: "natural" | "orange";
  storage?: "open" | "doors";
  add?: string[];
  remove?: string[];
};

export type Advice = {
  /** one line, in the visitor's language of the thing, not ours */
  say: string;
  change: Change | null;
  /** whether a model answered, or the page did */
  from: "here" | "model";
};

const hit = (text: string, words: string[]) =>
  words.some((w) =>
    /[⺀-鿿]/.test(w) ? text.includes(w) : new RegExp(`\\b${w}\\b`).test(text),
  );

/** the design a problem brings, if it is one of the frames that can be built */
function frameFor(text: string, frames: string[]): string | null {
  const lifeOf = (id: string): Life | undefined =>
    families
      .flatMap((f) => f.bodies.flatMap((b) => b.lives))
      .find((l) => l.id === id);
  for (const a of asked(text, null, {}, 6).answers) {
    const life = lifeOf(a.job.life);
    if (!life?.productId || !statusOf(life).made) continue;
    if (frames.includes(life.productId)) return life.productId;
  }
  return null;
}

const nameOf = (id: string, frames: { id: string; name: string }[]) =>
  frames.find((f) => f.id === id)?.name ?? id;

/** what the page makes of a sentence, on its own */
export function advise(
  text: string,
  product: Product,
  config: Configuration,
  frames: { id: string; name: string; door?: boolean }[],
): Advice {
  const t = text.toLowerCase().trim();
  if (t.length < 2) return { say: "", change: null, from: "here" };
  const change: Change = {};
  const said: string[] = [];
  /** what was asked for and is already on the piece */
  const already: string[] = [];
  const allowed = [
    ...product.defaultAccessories,
    ...product.optionalAccessories,
  ];
  const wants = (a: string) =>
    allowed.includes(a) && !config.accessories.includes(a);
  const has = (a: string) => config.accessories.includes(a);

  // the face
  if (hit(t, ["orange", "colour", "color", "bright", "橙", "橘", "颜色"])) {
    if (config.finish !== "orange") {
      change.finish = "orange";
      said.push("the working face in orange");
    }
  } else if (
    hit(t, ["natural", "plain", "birch", "wood", "原色", "本色", "木"])
  ) {
    if (config.finish !== "natural") {
      change.finish = "natural";
      said.push("the face back to natural birch");
    }
  }

  // open or closed
  const wantsDoors = hit(t, [
    "door",
    "doors",
    "hide",
    "hidden",
    "closed",
    "shut",
    "dust",
    "门",
    "藏",
    "遮",
    "关",
  ]);
  if (!product.door && wantsDoors) {
    const withDoor = frames.find((f) => f.door && f.id !== product.id);
    return withDoor
      ? {
          say: `The ${product.name.toLowerCase()} is open by design. The ${withDoor.name.toLowerCase()} is the one that takes doors.`,
          change: { frame: withDoor.id, storage: "doors" },
          from: "here",
        }
      : {
          say: `The ${product.name.toLowerCase()} is open by design, and none of the frames that are made take doors yet.`,
          change: null,
          from: "here",
        };
  }
  if (product.door) {
    if (wantsDoors) {
      if (config.storage !== "doors") {
        change.storage = "doors";
        said.push("doors on it");
      }
    } else if (
      hit(t, ["open", "no door", "without door", "see", "show", "开放", "敞"])
    ) {
      if (config.storage !== "open") {
        change.storage = "open";
        said.push("it open again");
      }
    }
  }

  // what goes on the face
  const add: string[] = [];
  const remove: string[] = [];
  const asks: [string, string[], string][] = [
    [
      "coat-hook",
      ["hook", "hooks", "coat", "coats", "jacket", "hang", "挂", "钩", "外套"],
      "hooks",
    ],
    [
      "key-tray",
      ["tray", "keys", "wallet", "post", "small", "托盘", "钥匙", "零碎"],
      "a tray",
    ],
    [
      "headphone-hook",
      ["headphone", "headphones", "earphone", "cable", "耳机", "线"],
      "a utility hook",
    ],
    [
      "kitchen-rail",
      ["rail", "utensil", "pan", "towel", "kitchen", "挂杆", "厨具", "锅"],
      "a side rail",
    ],
    [
      "clothes-rail",
      ["clothes rail", "hanger", "hangers", "hanging", "衣杆", "衣架"],
      "a clothes rail",
    ],
  ];
  const dropping = hit(t, [
    "without",
    "no ",
    "remove",
    "take off",
    "drop",
    "去掉",
    "不要",
    "拆",
  ]);
  for (const [id, words, what] of asks) {
    if (!hit(t, words)) continue;
    if (dropping && has(id)) {
      remove.push(id);
      said.push(`${what} off`);
    } else if (wants(id)) {
      add.push(id);
      said.push(what);
    } else if (has(id)) {
      already.push(what);
    }
  }
  if (add.length) change.add = add;
  if (remove.length) change.remove = remove;

  // a cheaper answer: the same idea, with what can come off taken off
  if (hit(t, ["cheap", "cheaper", "less", "budget", "afford", "便宜", "省"])) {
    const off = config.accessories.filter(
      (a) => !product.defaultAccessories.includes(a),
    );
    if (config.storage === "doors") {
      change.storage = "open";
      said.push("the doors off");
    }
    if (off.length) {
      change.remove = [...(change.remove ?? []), ...off];
      said.push("what is on the face off");
    }
    if (!said.length)
      return {
        say: `This is the plainest the ${product.name.toLowerCase()} gets. A smaller frame costs less: the bedside cabinet is the smallest of them.`,
        change: null,
        from: "here",
      };
  }

  // a different frame, when the sentence is about a problem rather than a part
  const frame = frameFor(
    t,
    frames.map((f) => f.id),
  );
  if (frame && frame !== product.id && said.length === 0) {
    return {
      say: `For that, the ${nameOf(frame, frames).toLowerCase()} is the frame we would start from.`,
      change: { frame },
      from: "here",
    };
  }

  if (said.length === 0 && already.length > 0) {
    const list =
      already.length === 1
        ? already[0]
        : `${already.slice(0, -1).join(", ")} and ${already[already.length - 1]}`;
    return {
      say: `It has ${list} already — on the working face, in the drawing.`,
      change: null,
      from: "here",
    };
  }

  if (said.length === 0)
    return {
      say: "I did not follow that. Try naming what you want on it — hooks, a tray, a rail — or what you would keep there.",
      change: null,
      from: "here",
    };

  const list =
    said.length === 1
      ? said[0]
      : `${said.slice(0, -1).join(", ")} and ${said[said.length - 1]}`;
  return { say: `Then I would put ${list}.`, change, from: "here" };
}

/** the change, applied to a configuration */
export function applyChange(
  config: Configuration,
  change: Change,
  allowed: string[],
): Configuration {
  const add = (change.add ?? []).filter((a) => allowed.includes(a));
  const remove = new Set(change.remove ?? []);
  return {
    ...config,
    ...(change.finish ? { finish: change.finish } : {}),
    ...(change.storage ? { storage: change.storage } : {}),
    accessories: [
      ...new Set([...config.accessories.filter((a) => !remove.has(a)), ...add]),
    ],
  };
}

/** what a change says it will do, for the visitor to read before it happens */
export function readChange(
  change: Change,
  frames: { id: string; name: string }[],
  labels: Record<string, string>,
): string[] {
  const out: string[] = [];
  if (change.frame)
    out.push(`Start from the ${nameOf(change.frame, frames).toLowerCase()}`);
  if (change.finish)
    out.push(
      change.finish === "orange"
        ? "Working face in orange"
        : "Working face in natural birch",
    );
  if (change.storage)
    out.push(change.storage === "doors" ? "Add doors" : "Leave it open");
  for (const a of change.add ?? []) out.push(`Add ${labels[a] ?? a}`);
  for (const a of change.remove ?? []) out.push(`Take off ${labels[a] ?? a}`);
  return out;
}

export type { FamilyId };
