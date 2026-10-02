import { verbNames } from "../family/data";
import { roomKinds } from "../family/roomkind";
import type { SixtyItem } from "../family/sixty";

/* What the shop can ask about a kind of design.

   A piece, a wall and a screen do not share a set of questions. Only a wall has
   a shape; only a screen has a number of panels; `divide` and `shelve` mean
   nothing to a piece and `fold` means nothing to a wall. A single sentence with
   fixed slots would have to keep a slot each kind cannot fill, so the kind is
   not one of the answers here — it is what decides which questions get asked.

   Every option carries its own count, worked out against what is already
   narrowed. Nothing is hidden for being a weak filter: that most walls divide
   and shelve is true, and the count says so plainly. An option is only left out
   when choosing it would change nothing (it matches the whole kind) or when
   the kind has none of it at all. */

export type Option = { id: string; name: string; n: number };
export type Facet = { id: string; label: string; options: Option[] };
/** what is currently narrowing the shop: facet id → option ids */
export type Chosen = Record<string, string[]>;

type Def = {
  id: string;
  label: string;
  /** every value this facet can take, in the order they should be read */
  values: { id: string; name: string }[];
  of: (it: SixtyItem) => string[];
};

const verb = (ids: string[]): Def => ({
  id: "does",
  label: "what it lets you do",
  values: ids.map((v) => ({
    id: v,
    name: (verbNames[v as keyof typeof verbNames]?.name ?? v).toLowerCase(),
  })),
  of: (it) => it.verbs,
});

const room: Def = {
  id: "room",
  label: "which room of yours",
  values: roomKinds.map((k) => ({ id: k.id, name: k.name })),
  of: (it) => (it.room ? [it.room] : []),
};

/** how tall a piece stands, in the four steps the panel system allows */
const height: Def = {
  id: "tall",
  label: "how tall it stands",
  values: [
    { id: "400", name: "Low · 40 cm" },
    { id: "800", name: "Waist · 80 cm" },
    { id: "1200", name: "Chest · 120 cm" },
    { id: "1600", name: "Full height · 160 cm" },
  ],
  of: (it) => [String(Math.round(it.tall / 400) * 400)],
};

/** a wall's shape is the frame it is built on */
const shape: Def = {
  id: "shape",
  label: "what shape it takes",
  values: [
    { id: "line-2", name: "A straight line" },
    { id: "line-3-low", name: "A low run" },
    { id: "corner", name: "A corner" },
    { id: "three-turned", name: "Three turns" },
    { id: "bridge", name: "A bridge you walk under" },
    { id: "platform", name: "A platform you stand on" },
  ],
  of: (it) => [it.body],
};

const panels: Def = {
  id: "panels",
  label: "how many panels",
  values: [
    { id: "one", name: "One" },
    { id: "tall", name: "One, full height" },
    { id: "two", name: "Two" },
    { id: "folding", name: "Three, folding" },
  ],
  of: (it) => [it.body],
};

/** the questions each kind can answer, in the order they are asked */
const DEFS: Record<string, Def[]> = {
  pieces: [verb(["hang", "put down", "hide", "roll", "sit"]), height, room],
  walls: [
    shape,
    verb(["divide", "shelve", "pass", "show", "work", "sit", "hang"]),
    room,
  ],
  screens: [
    panels,
    verb(["roll", "hide", "hang", "write", "mirror", "work", "fold"]),
    room,
  ],
};

/** does one design answer everything currently asked of it */
export function keeps(it: SixtyItem, chosen: Chosen, familyId: string) {
  const defs = DEFS[familyId] ?? [];
  return defs.every((d) => {
    const want = chosen[d.id];
    if (!want?.length) return true;
    const has = d.of(it);
    return want.some((w) => has.includes(w));
  });
}

/** the questions to ask about one kind, counted against what is already asked */
export function facetsOf(
  all: SixtyItem[],
  chosen: Chosen,
  familyId: string,
): Facet[] {
  const defs = DEFS[familyId] ?? [];
  const out: Facet[] = [];
  for (const d of defs) {
    /* A count is what would be left if this option were the answer, with every
       OTHER question still applied — so the number says what the click does,
       and picking a second option inside one question widens rather than
       empties it. */
    const rest: Chosen = { ...chosen };
    delete rest[d.id];
    const pool = all.filter((it) => keeps(it, rest, familyId));
    const on = chosen[d.id] ?? [];
    const options = d.values
      /* Which options exist is a fact about the kind, not about what is
         narrowed: a thing none of them is, and a thing all of them are, are
         both not questions. Measured against the whole kind so the row holds
         still while you click — only the counts move. */
      .filter((v) => {
        if (on.includes(v.id)) return true;
        const n = all.filter((it) => d.of(it).includes(v.id)).length;
        return n > 0 && n < all.length;
      })
      .map((v) => ({
        ...v,
        n: pool.filter((it) => d.of(it).includes(v.id)).length,
      }));
    if (options.length >= 2) out.push({ id: d.id, label: d.label, options });
  }
  return out;
}

/** the line that reads back what is being asked, in the order it was asked */
export function readBack(chosen: Chosen, familyId: string): string[] {
  const defs = DEFS[familyId] ?? [];
  const out: string[] = [];
  for (const d of defs) {
    const want = chosen[d.id];
    if (!want?.length) continue;
    const names = want
      .map((w) => d.values.find((v) => v.id === w)?.name ?? w)
      .map((n) => n.toLowerCase());
    out.push(
      names.length === 1
        ? (names[0] ?? "")
        : `${names.slice(0, -1).join(", ")} or ${names[names.length - 1]}`,
    );
  }
  return out;
}

/** how the read-back reads: "6 pieces · that roll · in a kitchen" */
export const JOIN: Record<string, string> = {
  does: "that",
  tall: "",
  shape: "shaped as",
  panels: "",
  room: "for",
};
