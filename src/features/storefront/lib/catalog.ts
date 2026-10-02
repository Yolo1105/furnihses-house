/**
 * Storefront catalogue — the 13 preliminary recipes carried over from the
 * `/Documents/Furnishes` prototype, with the additions the site plan needs:
 * status tier, "what happens here" tags and the three life lenses.
 *
 * Dimensions and parts are design studies drawn from the assembly record.
 * Nothing here is a released SKU, price or load rating.
 */

import { customProduct, validCustom, type CustomSpec } from "./custom";

type CategoryId = "storage" | "organisers" | "tables" | "screens" | "seating";

export const categories = [
  {
    id: "storage",
    name: "Storage",
    intro: "For the things beside your bed, and a whole wall of books.",
    sub: [
      "Bedside storage",
      "Shelving & bookcases",
      "Cabinets & sideboards",
      "Storage trolleys",
    ],
  },
  {
    id: "organisers",
    name: "Organisers & racks",
    intro: "For the things you drop when you come in and reach for all day.",
    sub: ["Freestanding organisers", "Clothes & entry racks"],
  },
  {
    id: "tables",
    name: "Tables & desks",
    intro: "A surface to work, make, prepare and gather around.",
    sub: [
      "Desks & workstations",
      "Prep tables & islands",
      "Side & bedside tables",
      "Work trolleys",
    ],
  },
  {
    id: "screens",
    name: "Screens & dividers",
    intro: "Make room for two different things in the same space.",
    sub: ["Mobile screens", "Folding screens", "Shelving as dividers"],
  },
  {
    id: "seating",
    name: "Seating",
    intro: "A place to pause, with room underneath.",
    sub: ["Benches"],
  },
] as const;

/** What a piece lets you do. Used for the "browse by what happens" strip. */
type Does =
  | "hang"
  | "put down"
  | "sit"
  | "hide"
  | "divide"
  | "work"
  | "charge"
  | "display";

export const doesList: Does[] = [
  "hang",
  "put down",
  "sit",
  "hide",
  "divide",
  "work",
  "charge",
  "display",
];

/** The three lives the plan serves as lenses, never as gates. */
export type Lens = "nothing-yet" | "everything-stays" | "moves-with-you";

export const lenses: { id: Lens; label: string; blurb: string }[] = [
  {
    id: "nothing-yet",
    label: "Nothing here yet",
    blurb: "A new room. Start from an empty wall and stack a setup.",
  },
  {
    id: "everything-stays",
    label: "Everything stays",
    blurb: "A home you've lived in for years. One piece next to what you keep.",
  },
  {
    id: "moves-with-you",
    label: "Moves with you",
    blurb: "Renting. No drilling, on wheels, comes apart and leaves no trace.",
  },
];

/**
 * Status tiers, mapped from the plan's vocabulary
 * (当轮认为可行 / 有条件 / 候选 / 待核实).
 * No recipe is "buyable" until it is costed and validated on samples.
 */
type Status = "buyable" | "adjustable" | "concept";

export const statusLabel: Record<Status, string> = {
  buyable: "Buyable",
  adjustable: "Adjustable",
  concept: "Concept",
};

export const statusBlurb: Record<Status, string> = {
  buyable: "Costed and validated on samples. Can be ordered.",
  adjustable:
    "A configurable design preview. Parts and drawings are real; price and load rating are not yet released.",
  concept: "A direction we are still checking. Save it, compare it, ask us.",
};

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  subcategory: string;
  secondary?: CategoryId[];
  family: "full-height" | "stacked" | "folding" | "seating";
  familyName: string;
  shape:
    | "organiser"
    | "cabinet"
    | "trolley"
    | "shelf"
    | "desk"
    | "screen"
    | "folding"
    | "bench"
    | "island";
  width: number;
  height: number;
  depth: number | null;
  tiers: number;
  bays: number;
  room: string[];
  use: string;
  benefit: string;
  fit: string;
  space: string;
  description: string;
  source: string;
  door: boolean;
  defaultAccessories: string[];
  optionalAccessories: string[];
  does: Does[];
  lenses: Lens[];
  status: Status;
  /** Which line of the "two doors" this piece belongs to. */
  line: "small" | "wall";
};

const base = {
  door: false,
  defaultAccessories: [] as string[],
  optionalAccessories: [] as string[],
  lenses: ["nothing-yet", "everything-stays"] as Lens[],
  status: "adjustable" as Status,
  line: "small" as const,
};

export const products: Product[] = [
  {
    ...base,
    id: "entry",
    name: "Entry organiser",
    category: "organisers",
    subcategory: "Freestanding organisers",
    family: "full-height",
    familyName: "Full-height organisers",
    shape: "organiser",
    width: 600,
    height: 1200,
    depth: 400,
    tiers: 3,
    bays: 1,
    room: ["Entryway"],
    use: "Hang, set down, head out.",
    benefit: "Coats, keys and shoes in one place.",
    fit: "Freestanding entry storage",
    space:
      "Measure the full base and leave access in front for coats and shoes.",
    description:
      "A freestanding landing place for bags, keys and everyday shoes. Hanging space above, a shoe shelf below, and a small tray for the things that travel with you.",
    source: "1.1",
    defaultAccessories: ["coat-hook", "key-tray"],
    optionalAccessories: ["headphone-hook"],
    does: ["hang", "put down"],
    lenses: ["nothing-yet", "everything-stays", "moves-with-you"],
  },
  {
    ...base,
    id: "desk",
    name: "Desk-side organiser",
    category: "organisers",
    subcategory: "Freestanding organisers",
    family: "full-height",
    familyName: "Full-height organisers",
    shape: "organiser",
    width: 600,
    height: 1200,
    depth: 400,
    tiers: 3,
    bays: 1,
    room: ["Workspace"],
    use: "Your tools, an arm’s reach away.",
    benefit: "More storage. Keep your desk.",
    fit: "Added storage · desk not included",
    space:
      "Allow for your chair and reaching the shelves. Your desk stands independently.",
    description:
      "An independent organising surface beside the desk you already like. Open shelves and a functional panel keep the everyday visible without using your desktop.",
    source: "1.2",
    defaultAccessories: ["headphone-hook"],
    optionalAccessories: ["key-tray", "coat-hook"],
    does: ["hang", "put down", "work", "charge"],
    lenses: ["everything-stays", "moves-with-you"],
  },
  {
    ...base,
    id: "bedside",
    name: "Bedside cabinet",
    category: "storage",
    subcategory: "Bedside storage",
    secondary: ["tables"],
    family: "stacked",
    familyName: "Stacked storage",
    shape: "cabinet",
    width: 600,
    height: 400,
    depth: 400,
    tiers: 1,
    bays: 1,
    room: ["Bedroom", "Living room"],
    use: "Last thing at night. First thing in the morning.",
    benefit: "The little things, close at hand.",
    fit: "Low storage · open or with a door",
    space:
      "Compare the final top height with your mattress. Allow space for an optional door.",
    description:
      "One tabletop and an open compartment for the things you keep close. Explore an open front or a door, then compare the preliminary body height with your bedside space.",
    source: "1.3",
    door: true,
    optionalAccessories: ["key-tray"],
    does: ["put down", "hide", "charge"],
    lenses: ["nothing-yet", "everything-stays", "moves-with-you"],
  },
  {
    ...base,
    id: "kitchen",
    name: "Kitchen trolley",
    category: "storage",
    subcategory: "Storage trolleys",
    secondary: ["tables"],
    family: "stacked",
    familyName: "Stacked storage",
    shape: "trolley",
    width: 600,
    height: 800,
    depth: 400,
    tiers: 2,
    bays: 1,
    room: ["Kitchen & dining"],
    use: "A little extra room for preparation.",
    benefit: "A surface that comes to you.",
    fit: "Mobile storage with a worktop",
    space:
      "Check final worktop height and allow a clear path around the caster base.",
    description:
      "A two-tier storage body with a worktop and a caster base. Keep everyday supplies nearby and see how two units could form an island.",
    source: "1.4",
    defaultAccessories: ["kitchen-rail"],
    optionalAccessories: ["key-tray"],
    does: ["put down", "work"],
    lenses: ["everything-stays", "moves-with-you"],
  },
  {
    ...base,
    id: "work-cart",
    secondary: ["tables"],
    name: "Work trolley",
    category: "storage",
    subcategory: "Storage trolleys",
    family: "stacked",
    familyName: "Stacked storage",
    shape: "trolley",
    width: 600,
    height: 800,
    depth: 400,
    tiers: 2,
    bays: 1,
    room: ["Workspace"],
    use: "Bring the useful things closer.",
    benefit: "Keep supplies close. Roll them away.",
    fit: "Added storage · desk not included",
    space:
      "Allow room to move the trolley and open any doors, separate from your chair.",
    description:
      "Open storage for tools and materials beside your work area. Compare it with an upright organiser when you want to keep your existing desk.",
    source: "1.6",
    door: true,
    defaultAccessories: ["headphone-hook"],
    optionalAccessories: ["key-tray"],
    does: ["put down", "hide", "work"],
    lenses: ["everything-stays", "moves-with-you"],
  },
  {
    ...base,
    id: "sideboard",
    name: "Three-bay sideboard",
    category: "storage",
    subcategory: "Cabinets & sideboards",
    family: "stacked",
    familyName: "Stacked storage",
    shape: "cabinet",
    width: 1800,
    height: 800,
    depth: 400,
    tiers: 2,
    bays: 3,
    room: ["Living room", "Entryway", "Workspace"],
    use: "One continuous place for everyday things.",
    benefit: "A longer home for everyday things.",
    fit: "Three connected storage bays",
    space:
      "Check the full 180 cm body width, final base footprint and access to the front.",
    description:
      "Three storage bays form a longer piece for a living room, hallway or workspace. Explore open compartments or doors across the front.",
    source: "1.10",
    door: true,
    does: ["put down", "hide", "display"],
  },
  {
    ...base,
    id: "bookcase",
    name: "Double-sided bookcase",
    category: "storage",
    subcategory: "Shelving & bookcases",
    secondary: ["screens"],
    family: "stacked",
    familyName: "Stacked storage",
    shape: "shelf",
    width: 1200,
    height: 1600,
    depth: 400,
    tiers: 4,
    bays: 2,
    room: ["Living room", "Workspace", "Shared spaces"],
    use: "A place for books. A boundary between spaces.",
    benefit: "A boundary you can use on both sides.",
    fit: "Double-sided shelving",
    space:
      "Shelves on either side are shallower than the full body depth. Keep both sides accessible.",
    description:
      "Shallower shelves on either side of a central panel let this piece work between two areas. Compare it with a screen if storage on both sides matters.",
    source: "2.9",
    does: ["divide", "display", "put down"],
    line: "wall",
  },
  {
    ...base,
    id: "workstation",
    name: "Organiser workstation",
    category: "tables",
    subcategory: "Desks & workstations",
    family: "full-height",
    familyName: "Full-height organisers",
    shape: "desk",
    width: 1200,
    height: 1600,
    depth: 1000,
    tiers: 4,
    bays: 1,
    room: ["Workspace", "Shared spaces"],
    use: "A place to work, with everything around it.",
    benefit: "A desk and storage, together.",
    fit: "Desk surface and support included",
    space:
      "Allow chair and legroom in front of the desk, plus access to the organiser.",
    description:
      "A desk surface, independent supports and an upright organising body form one workspace. Unlike a desk-side organiser, this design includes the desk.",
    source: "2.11",
    defaultAccessories: ["headphone-hook"],
    optionalAccessories: ["key-tray"],
    does: ["work", "hang", "charge"],
    lenses: ["nothing-yet"],
  },
  {
    ...base,
    id: "mobile-screen",
    name: "Mobile functional screen",
    category: "screens",
    subcategory: "Mobile screens",
    family: "full-height",
    familyName: "Full-height screens",
    shape: "screen",
    width: 600,
    height: 1200,
    depth: 400,
    tiers: 3,
    bays: 1,
    room: ["Shared spaces", "Workspace", "Bedroom"],
    use: "One piece. Two sides to your day.",
    benefit: "A little separation, wherever it helps.",
    fit: "Mobile divider with storage",
    space:
      "Check the base footprint and allow access to the storage side. This screen does not fold.",
    description:
      "A full-height panel body with storage on one side and a quieter face on the other. Use it as a background or a temporary visual boundary.",
    source: "3.1",
    optionalAccessories: ["coat-hook", "headphone-hook"],
    does: ["divide", "hang", "work"],
    lenses: ["everything-stays", "moves-with-you"],
    line: "wall",
  },
  {
    ...base,
    id: "folding-screen",
    name: "Three-panel folding screen",
    category: "screens",
    subcategory: "Folding screens",
    family: "folding",
    familyName: "Folding screens",
    shape: "folding",
    width: 1800,
    height: 1200,
    depth: null,
    tiers: 3,
    bays: 3,
    room: ["Shared spaces", "Bedroom", "Workspace"],
    use: "A little separation, when you want it.",
    benefit: "Open up. Make a little room.",
    fit: "Three folding leaves · no storage",
    space:
      "The 180 cm span is fully unfolded. Fold angle changes both width and depth.",
    description:
      "Three framed leaves connected by hinges. Its construction is separate from the storage and mobile-screen families.",
    source: "3.3",
    does: ["divide"],
    lenses: ["moves-with-you", "everything-stays"],
    line: "wall",
  },
  {
    ...base,
    id: "island",
    name: "Two-unit preparation island",
    category: "tables",
    subcategory: "Prep tables & islands",
    family: "stacked",
    familyName: "Stacked storage",
    shape: "island",
    width: 1200,
    height: 800,
    depth: 400,
    tiers: 2,
    bays: 2,
    room: ["Kitchen & dining"],
    use: "Two pieces. A shared surface.",
    benefit: "Two bodies. One generous surface.",
    fit: "Complete two-unit arrangement",
    space:
      "Check the shared top, final worktop height and access around both caster bases.",
    description:
      "Two trolley bodies sit beneath a longer worktop. The short worktops are set aside; a connecting assembly is also needed.",
    source: "1.11",
    does: ["work", "put down"],
    status: "concept",
  },
  {
    ...base,
    id: "bench",
    name: "Storage bench",
    category: "seating",
    subcategory: "Benches",
    family: "seating",
    familyName: "Bench studies",
    shape: "bench",
    width: 1200,
    height: 450,
    depth: 400,
    tiers: 1,
    bays: 2,
    room: ["Entryway", "Living room"],
    use: "A place to pause on your way out.",
    benefit: "Sit down. Put things away.",
    fit: "Dedicated seat and storage",
    space:
      "Final seat height and seating load are still being validated. Ordinary cabinet tops are not seats.",
    description:
      "A storage-and-seating study with a dedicated seat surface. Seat support and load testing are separate from the storage system.",
    source: "1.12",
    does: ["sit", "hide"],
    status: "concept",
  },
  {
    ...base,
    id: "coat-rack",
    name: "Clothes organiser",
    category: "organisers",
    subcategory: "Clothes & entry racks",
    family: "full-height",
    familyName: "Full-height organisers",
    shape: "organiser",
    width: 600,
    height: 1600,
    depth: 400,
    tiers: 4,
    bays: 1,
    room: ["Entryway", "Bedroom"],
    use: "Make room for what you wear.",
    benefit: "Make space for what you wear.",
    fit: "Taller hanging storage",
    space:
      "Compare the available hanging height with your clothes, and check the final base footprint.",
    description:
      "A taller organising piece for clothes and bags, with a hanging rail and a lower storage shelf.",
    source: "1.17",
    defaultAccessories: ["clothes-rail"],
    optionalAccessories: ["coat-hook"],
    does: ["hang", "put down"],
    status: "concept",
  },
];

export const accessories: Record<
  string,
  { name: string; description: string; category: string }
> = {
  "coat-hook": {
    name: "Coat hook set",
    description: "Three hooks on the working face.",
    category: "Hooks & trays",
  },
  "key-tray": {
    name: "Small tray",
    description: "A shallow resting place for everyday small items.",
    category: "Hooks & trays",
  },
  "headphone-hook": {
    name: "Utility hook",
    description: "A place for headphones or a small everyday item.",
    category: "Hooks & trays",
  },
  "kitchen-rail": {
    name: "Side rail",
    description: "A rail beside the kitchen worktop.",
    category: "Rails",
  },
  "clothes-rail": {
    name: "Clothes rail assembly",
    description: "A hanging rail and its supports.",
    category: "Rails",
  },
};

export type Configuration = {
  productId: string;
  finish: "natural" | "orange";
  storage: "open" | "doors";
  accessories: string[];
  /** Present when productId is "custom": a body sized from scratch. */
  custom?: CustomSpec;
};

export const getProduct = (id: string) => products.find((p) => p.id === id);

/** The product a configuration draws, including from-scratch bodies. */
export function resolveProduct(c: Configuration): Product | undefined {
  if (c.productId === "custom")
    return c.custom ? customProduct(c.custom) : undefined;
  return getProduct(c.productId);
}

export function defaultConfig(p: Product): Configuration {
  return {
    productId: p.id,
    finish: "natural",
    storage: "open",
    accessories: [...p.defaultAccessories],
  };
}

export function customConfig(spec: CustomSpec): Configuration {
  return { ...defaultConfig(customProduct(spec)), custom: spec };
}

export function validConfig(input: unknown): Configuration | null {
  if (!input || typeof input !== "object") return null;
  const c = input as Record<string, unknown>;
  const custom =
    String(c.productId) === "custom" ? validCustom(c.custom) : null;
  const p = custom ? customProduct(custom) : getProduct(String(c.productId));
  if (!p) return null;
  if (
    typeof c.finish !== "string" ||
    !["natural", "orange"].includes(c.finish) ||
    typeof c.storage !== "string" ||
    !["open", "doors"].includes(c.storage) ||
    (c.storage === "doors" && !p.door) ||
    !Array.isArray(c.accessories)
  )
    return null;
  const allowed = [...p.defaultAccessories, ...p.optionalAccessories];
  if (c.accessories.some((x) => typeof x !== "string" || !allowed.includes(x)))
    return null;
  return {
    productId: p.id,
    finish: c.finish as Configuration["finish"],
    storage: c.storage as Configuration["storage"],
    accessories: [...new Set(c.accessories as string[])].sort(),
    ...(custom ? { custom } : {}),
  };
}

/** A stable key for a configuration, for caches. */
export function configKeyOf(c: Configuration) {
  return `${c.productId}:${c.finish}:${c.storage}:${[...c.accessories].sort().join(",")}${
    c.custom
      ? `:${c.custom.height}x${c.custom.segments}${c.custom.mobile ? "m" : ""}`
      : ""
  }`;
}

/** Query string for a configuration, so a link reopens the same drawing. */
export function configQuery(c: Configuration, extra?: Record<string, string>) {
  const q = new URLSearchParams(extra);
  q.set("finish", c.finish);
  if (c.storage === "doors") q.set("storage", "doors");
  if (c.accessories.length) q.set("acc", c.accessories.join(","));
  if (c.custom) {
    q.set("h", String(c.custom.height));
    q.set("w", String(c.custom.segments));
    if (c.custom.mobile) q.set("mobile", "1");
  }
  return q.toString();
}

export const configHref = (c: Configuration, extra?: Record<string, string>) =>
  `/shop/${c.productId}?${configQuery(c, extra)}`;

export function configSummary(c: Configuration) {
  const p = resolveProduct(c);
  if (!p) return "";
  return [
    c.custom
      ? `${c.custom.segments * 60} × ${c.custom.height / 10} cm${c.custom.mobile ? " on casters" : ""}`
      : null,
    c.finish === "orange" ? "Orange panels" : "Natural panels",
    p.door ? (c.storage === "doors" ? "With doors" : "Open front") : null,
    c.accessories.length
      ? c.accessories.map((a) => accessories[a]?.name).join(", ")
      : "No accessories",
  ]
    .filter(Boolean)
    .join(" · ");
}

/**
 * Everyday words people actually type, mapped to what a piece does or to a
 * piece. "something for cables" should find the desk-side organiser.
 */
const everyday: Record<string, string> = {
  cable: "charge",
  cables: "charge",
  charger: "charge",
  phone: "charge",
  coat: "hang",
  coats: "hang",
  jacket: "hang",
  bag: "hang",
  bags: "hang",
  keys: "put down",
  shoes: "entry",
  shoe: "entry",
  books: "display",
  book: "display",
  privacy: "divide",
  roommate: "divide",
  flatmate: "divide",
  camera: "divide",
  zoom: "divide",
  call: "divide",
  calls: "divide",
  laundry: "hide",
  clutter: "hide",
  mess: "hide",
  cook: "work",
  cooking: "kitchen",
  prep: "kitchen",
  counter: "kitchen",
  nightstand: "bedside",
  lamp: "bedside",
  hallway: "entry",
  door: "entry",
  cart: "trolley",
  tools: "work",
  shelves: "shelf",
  wardrobe: "clothes",
  wall: "divider",
  partition: "divider",
  seat: "sit",
  bench: "sit",
};
const stop = new Set([
  "a",
  "for",
  "the",
  "my",
  "something",
  "to",
  "and",
  "of",
  "in",
  "on",
  "with",
]);

export function filterProducts(filters: {
  category?: string;
  sub?: string;
  room?: string;
  q?: string;
  mobile?: boolean;
  does?: string;
  lens?: string;
  line?: string;
  family?: string;
}) {
  const term = (filters.q || "").trim().toLowerCase();
  const words = term
    .split(/[\s,]+/)
    .filter((w) => w && !stop.has(w))
    .map((w) => everyday[w] ?? w);
  return products.filter(
    (p) =>
      (!filters.line || p.line === filters.line) &&
      (!filters.family || p.family === filters.family) &&
      (!filters.category ||
        filters.category === "all" ||
        p.category === filters.category ||
        p.secondary?.includes(filters.category as CategoryId)) &&
      (!filters.sub || subcategoryFor(p, filters.category) === filters.sub) &&
      (!filters.room || p.room.includes(filters.room)) &&
      (!filters.mobile || ["trolley", "screen", "island"].includes(p.shape)) &&
      (!filters.does || p.does.includes(filters.does as Does)) &&
      (!filters.lens || p.lenses.includes(filters.lens as Lens)) &&
      (!words.length ||
        words.some((w) =>
          w === "divider"
            ? p.category === "screens" || p.secondary?.includes("screens")
            : `${p.id} ${p.name} ${p.subcategory} ${p.room.join(" ")} ${p.use} ${p.description} ${p.does.join(" ")}`
                .toLowerCase()
                .includes(w),
        )),
  );
}

export function subcategoryFor(p: Product, category?: string): string {
  if (category === "tables" && p.id === "bedside")
    return "Side & bedside tables";
  if (category === "tables" && ["kitchen", "work-cart"].includes(p.id))
    return "Work trolleys";
  if (category === "screens" && p.id === "bookcase")
    return "Shelving as dividers";
  return p.subcategory;
}

export function dimensionSummary(p: Product): string {
  return p.shape === "folding"
    ? `${p.width / 10} W × ${p.height / 10} H cm unfolded · depth varies`
    : `${p.width / 10} W × ${p.height / 10} H × ${(p.depth ?? 0) / 10} D cm`;
}

/** Same-body and combination relations. Design studies, not validated changes. */
export const relationships = [
  {
    id: "entry-to-desk",
    from: "entry",
    to: "desk",
    quantity: 1,
    kind: "same-body" as const,
    title: "From hallway to workday",
    summary:
      "The full-height body is the common starting point. The shoe shelf, shelves and accessories differ.",
    note: "Panel revisions, mounting points and the condition of existing parts need checking before reuse.",
  },
  {
    id: "kitchen-to-work",
    from: "kitchen",
    to: "work-cart",
    quantity: 1,
    kind: "same-body" as const,
    title: "From preparation to making",
    summary: "The two-tier body stays; the everyday accessories change.",
    note: "Kitchen and workspace use have different surface, loading and movement requirements.",
  },
  {
    id: "two-trolleys-to-island",
    from: "kitchen",
    to: "island",
    quantity: 2,
    kind: "combine" as const,
    title: "Two trolleys. One shared surface.",
    summary:
      "Keep two bodies and bases, set aside the two short worktops, add a long worktop and a connecting assembly.",
    note: "This combination needs its own stability, connector and worktop verification.",
  },
];

type RecommendationType = "alternative" | "family" | "companion";

export const recommendations: Record<
  string,
  { id: string; type: RecommendationType; reason: string }[]
> = {
  entry: [
    {
      id: "coat-rack",
      type: "family",
      reason:
        "More hanging height and a clothes rail. The taller uprights are different parts.",
    },
    {
      id: "bench",
      type: "companion",
      reason:
        "A separate place to sit in the entryway. The two pieces are not joined.",
    },
  ],
  desk: [
    {
      id: "work-cart",
      type: "alternative",
      reason:
        "Keep the existing desk, but put your supplies in a lower mobile unit instead.",
    },
    {
      id: "workstation",
      type: "alternative",
      reason:
        "A complete desk arrangement if you need a new work surface as well as storage.",
    },
  ],
  bedside: [
    {
      id: "work-cart",
      type: "family",
      reason: "A taller two-tier body with a mobile base. A different piece.",
    },
  ],
  kitchen: [],
  "work-cart": [
    {
      id: "desk",
      type: "alternative",
      reason: "An upright, visible place for your tools beside the same desk.",
    },
    {
      id: "sideboard",
      type: "alternative",
      reason:
        "More storage across a longer fixed piece, when floor space matters less.",
    },
  ],
  sideboard: [
    {
      id: "bookcase",
      type: "alternative",
      reason:
        "Height and access from two sides instead of a long, low surface.",
    },
  ],
  bookcase: [
    {
      id: "mobile-screen",
      type: "alternative",
      reason: "A movable visual boundary over shelves on both sides.",
    },
    {
      id: "folding-screen",
      type: "alternative",
      reason: "Folding leaves with no storage, when the boundary is temporary.",
    },
  ],
  workstation: [
    {
      id: "desk",
      type: "alternative",
      reason: "Keep your own desk and add an independent organiser.",
    },
    {
      id: "bookcase",
      type: "companion",
      reason: "Separate storage beside your work area. Not connected.",
    },
  ],
  "mobile-screen": [
    {
      id: "folding-screen",
      type: "alternative",
      reason: "Folding leaves for a visual boundary, with no storage body.",
    },
    {
      id: "bookcase",
      type: "alternative",
      reason: "A taller boundary that holds books on both sides.",
    },
  ],
  "folding-screen": [
    {
      id: "mobile-screen",
      type: "alternative",
      reason: "A movable body with storage, instead of folding leaves.",
    },
  ],
  island: [],
  bench: [
    {
      id: "entry",
      type: "companion",
      reason: "Coats and keys get their own upright place beside a seat.",
    },
  ],
  "coat-rack": [
    {
      id: "entry",
      type: "family",
      reason: "A lower body for hooks, shoes and keys.",
    },
  ],
};

export const recommendationLabel: Record<RecommendationType, string> = {
  alternative: "Another way to solve this",
  family: "Same family, another size",
  companion: "Goes beside it, not joined",
};

type Mark = {
  kind: "body" | "combine" | "alternative";
  text: string;
  to: string;
};

/** Relations a card shows at a glance, so the system is visible before the piece page. */
export function relationMarks(id: string): Mark[] {
  const out: Mark[] = [];
  for (const r of relationships) {
    if (r.from === id) {
      const to = getProduct(r.to);
      if (!to) continue;
      out.push(
        r.kind === "combine"
          ? {
              kind: "combine",
              text: `Two make ${to.name.toLowerCase()}`,
              to: r.to,
            }
          : {
              kind: "body",
              text: `Same body as ${to.name.toLowerCase()}`,
              to: r.to,
            },
      );
    } else if (r.to === id && r.kind === "same-body") {
      const from = getProduct(r.from);
      if (from)
        out.push({
          kind: "body",
          text: `Same body as ${from.name.toLowerCase()}`,
          to: r.from,
        });
    }
  }
  const alt = (recommendations[id] ?? []).find((x) => x.type === "alternative");
  if (alt) {
    const p = getProduct(alt.id);
    if (p)
      out.push({
        kind: "alternative",
        text: `Another way: ${p.name.toLowerCase()}`,
        to: alt.id,
      });
  }
  return out.slice(0, 2);
}

/**
 * Families: pieces that share a structure. This is where transformations
 * live: a body that has several lives, or two bodies that combine.
 */
export const families: {
  id: Product["family"];
  name: string;
  blurb: string;
}[] = [
  {
    id: "full-height",
    name: "Full-height organisers",
    blurb: "One upright body: by the door, beside the desk, or as a screen.",
  },
  {
    id: "stacked",
    name: "Stacked storage",
    blurb: "40 cm tiers that stack: bedside, trolley, sideboard, bookcase.",
  },
  {
    id: "folding",
    name: "Folding screens",
    blurb: "Framed leaves on hinges. No storage, quick to move.",
  },
  {
    id: "seating",
    name: "Seating",
    blurb: "A dedicated seat over storage. Load-tested separately.",
  },
];

export function familyOf(id: string) {
  return families.find((f) => f.id === id);
}

/** Subcategories that actually have pieces, for a category. */
export function subcategoriesWithPieces(categoryId: string) {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  return cat.sub
    .map((name) => ({
      name,
      count: products.filter(
        (p) =>
          subcategoryFor(p, categoryId) === name &&
          (p.category === categoryId ||
            p.secondary?.includes(categoryId as CategoryId)),
      ).length,
    }))
    .filter((x) => x.count > 0);
}
