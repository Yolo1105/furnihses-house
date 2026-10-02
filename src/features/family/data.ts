import {
  customConfig,
  defaultConfig,
  getProduct,
  type Configuration,
  type Product,
} from "../storefront/lib/catalog";
import { customProduct, type CustomSpec } from "../storefront/lib/custom";
import { allRooms, type HomeId, type PlaceId } from "./town";

/**
 * Sixty records, three families, one rule: a family is a set of bodies, and
 * no body belongs to two families. A record goes wherever its body goes, so
 * every record has exactly one home and the three counts add up to sixty.
 * Inside a family the page stands the bodies on a lattice (more to the
 * right, more to the back) and lets a place dress them.
 */

export type FamilyId = "pieces" | "walls" | "screens";

export type { PlaceId } from "./town";

export type Place = { id: PlaceId; name: string; line: string };

/** every room in every home; a room nothing lives in stays, with a count of 0 */
export const places: Place[] = allRooms.map((r) => ({
  id: r.id,
  name: r.name,
  line: r.line,
}));

export const placeOf = (id: PlaceId | null) => places.find((p) => p.id === id);

export type VerbId =
  | "hang"
  | "put down"
  | "hide"
  | "sit"
  | "roll"
  | "divide"
  | "shelve"
  | "work"
  | "pass"
  | "show"
  | "fold"
  | "write"
  | "mirror";

export const verbNames: Record<VerbId, { name: string; line: string }> = {
  hang: { name: "Hang", line: "on the holes in the working face" },
  "put down": { name: "Put down", line: "on a top, a tray or a shelf" },
  hide: { name: "Hide", line: "behind a door" },
  sit: { name: "Sit", line: "on the seat board" },
  roll: { name: "Roll", line: "on four casters" },
  divide: { name: "Divide", line: "one room into two, without building" },
  shelve: { name: "Shelve", line: "on both sides at once" },
  work: { name: "Work", line: "at a desk top that is part of it" },
  pass: { name: "Pass through", line: "under a bridge, past a half door" },
  show: { name: "Show", line: "covers, plants, light through a grille" },
  fold: { name: "Fold", line: "flat, and lean it somewhere" },
  write: { name: "Write", line: "on a whiteboard face" },
  mirror: { name: "Mirror", line: "full length, on the quiet side" },
};

/* ---------- what a body is made of ---------- */

export type Placement = {
  product: Product;
  config: Configuration;
  /** mm, left edge relative to the body's place */
  x: number;
  /** mm, front of the placement in the family's strip; default is against the wall side */
  y?: number;
  rot?: 0 | 90;
  /** which set of things-in-use to stand on it; null for none */
  props?: string | null;
};

export type Board = {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  color?: string;
};

export type Build = {
  placements: Placement[];
  boards: Board[];
  width: number;
  depth: number;
  height: number;
  left: number;
};

export type Door = {
  to: FamilyId;
  caseId: PlaceId;
  body: string;
  line: string;
};

export type Life = {
  id: string;
  caseId: PlaceId;
  name: string;
  line: string;
  /** the catalogue piece, when there is one */
  productId?: string;
  /** a body drawn from the panel system but not released as a piece */
  custom?: CustomSpec;
  /** the things that stand on it in use, by staging id (see lib/props.ts);
      the frame's own set when this is absent */
  props?: string;
  concept?: boolean;
  /** this life is another life plus parts */
  grownFrom?: string;
  growLine?: string;
  quantity?: number;
  offsetX?: number;
  /** what it lets you do; derived from the product when absent */
  does?: VerbId[];
  /** several placements and boards, for walls and screens */
  build?: (strip: number) => Build;
  /** the same body, in another family */
  door?: Door;
  /** the appendix A record this comes from */
  record: string;
  /** where in its room it stands; the room's first free spot otherwise */
  spot?: string;
};

export type Body = {
  id: string;
  name: string;
  lives: Life[];
};

export type Family = {
  id: FamilyId;
  noun: string;
  name: string;
  line: string;
  /** mm: how deep a body's local strip is; the back is the wall side */
  strip: number;
  verbs: VerbId[];
  bodies: Body[];
};

/* ---------- building blocks for composite bodies ---------- */

const bookcase = getProduct("bookcase");
const mobileScreen = getProduct("mobile-screen");
if (!bookcase || !mobileScreen) throw new Error("Catalogue is missing a base");

/** one wall segment: 600 wide, two working faces, from the bookcase's construction */
const segment = (h: 800 | 1200 | 1600): Product => ({
  ...bookcase,
  id: `segment-${h}`,
  name: "Wall segment",
  width: 600,
  height: h,
  tiers: h / 400,
  bays: 1,
  status: "concept",
});

const screenUnit = (h: 1200 | 1600): Product =>
  h === 1200
    ? mobileScreen
    : {
        ...mobileScreen,
        id: "screen-1600",
        name: "Standing screen unit",
        height: 1600,
        tiers: 4,
        status: "concept",
      };

const lowBlock = customProduct({ height: 400, segments: 1, mobile: false });

const place = (
  product: Product,
  x: number,
  o: { y?: number; rot?: 0 | 90; props?: string | null; doors?: boolean } = {},
): Placement => ({
  product,
  config: {
    ...defaultConfig(product),
    storage: o.doors ? "doors" : "open",
  },
  x,
  ...(o.y !== undefined ? { y: o.y } : {}),
  ...(o.rot ? { rot: o.rot } : {}),
  props: o.props ?? null,
});

const board = (
  id: string,
  name: string,
  x: number,
  y: number,
  z: number,
  w: number,
  d: number,
  h = 18,
  color?: string,
): Board => ({ id, name, x, y, z, w, d, h, ...(color ? { color } : {}) });

const build = (
  placements: Placement[],
  boards: Board[],
  width: number,
  depth: number,
  height: number,
  left = 0,
): Build => ({ placements, boards, width, depth, height, left });

/** n segments in a line against the wall side */
const line =
  (n: number, h: 800 | 1200 | 1600, props: (string | null)[] = []) =>
  (strip: number): Build =>
    build(
      Array.from({ length: n }, (_, i) =>
        place(segment(h), i * 600, { y: strip - 400, props: props[i] ?? null }),
      ),
      [],
      n * 600,
      400,
      h,
    );

/** two segments, one turned: an L */
const shapeL =
  (h: 800 | 1200 | 1600) =>
  (strip: number): Build =>
    build(
      [
        place(segment(h), 0, { y: strip - 400, props: "bookcase" }),
        place(segment(h), 600, { y: strip, rot: 90 }),
      ],
      [],
      1000,
      1000,
      h,
    );

/** three segments: a T, a U, a Z, or steps */
const shapeT = (strip: number): Build =>
  build(
    [
      place(segment(1600), 0, { y: strip - 400, props: "bookcase" }),
      place(segment(1600), 600, { y: strip - 400 }),
      place(segment(1600), 400, { y: strip - 400, rot: 90 }),
    ],
    [],
    1200,
    1000,
    1600,
  );
const shapeU = (strip: number): Build =>
  build(
    [
      place(segment(1600), 0, { y: strip, rot: 90 }),
      place(segment(1600), 400, { y: strip - 400, props: "bookcase" }),
      place(segment(1600), 1000, { y: strip, rot: 90 }),
    ],
    [],
    1400,
    1000,
    1600,
  );
const shapeZ = (strip: number): Build =>
  build(
    [
      place(segment(1600), 0, { y: strip - 400, props: "bookcase" }),
      place(segment(1600), 600, { y: strip, rot: 90 }),
      place(segment(1600), 1000, { y: strip - 1000 }),
    ],
    [],
    1600,
    1000,
    1600,
  );
const shapeSteps = (strip: number): Build =>
  build(
    [
      place(segment(800), 0, { y: strip - 400 }),
      place(segment(1200), 600, { y: strip - 400 }),
      place(segment(1600), 1200, { y: strip - 400, props: "bookcase" }),
    ],
    [],
    1800,
    400,
    1600,
  );

/** two towers and a bridge over the gap */
const bridge =
  (o: { door?: number; cabinet?: boolean; curtain?: boolean } = {}) =>
  (strip: number): Build =>
    build(
      [
        place(segment(1600), 0, { y: strip - 400 }),
        place(segment(1600), 1800, { y: strip - 400 }),
        ...(o.cabinet
          ? [
              place(
                customProduct({ height: 800, segments: 2, mobile: false }),
                600,
                {
                  y: strip - 400,
                },
              ),
            ]
          : []),
      ],
      [
        board(
          "bridge-board",
          "Bridge board",
          400,
          strip - 400,
          1630,
          1600,
          400,
        ),
        ...(o.door
          ? [
              board(
                "half-door",
                "Half door",
                620,
                strip - 30,
                30,
                560,
                18,
                o.door,
                "#e7551a",
              ),
            ]
          : []),
        ...(o.curtain
          ? [
              board(
                "curtain-rail",
                "Curtain rail",
                600,
                strip - 200,
                1600,
                1200,
                12,
                12,
                "#2f2a26",
              ),
              board(
                "curtain",
                "Curtain",
                620,
                strip - 210,
                200,
                520,
                8,
                1390,
                "#8a7f77",
              ),
            ]
          : []),
      ],
      2400,
      400,
      1650,
    );

/** low blocks with one board across them */
const platform =
  (o: { blocks: number; w: number; d: number; sleep?: boolean }) =>
  (strip: number): Build => {
    const cols = o.blocks / 2;
    const ps: Placement[] = [];
    for (let r = 0; r < 2; r++)
      for (let c = 0; c < cols; c++)
        ps.push(place(lowBlock, c * 600, { y: strip - 400 - r * 800 }));
    return build(
      ps,
      [
        board(
          "platform-board",
          "Platform board",
          0,
          strip - 400 - 800,
          430,
          o.w,
          o.d,
        ),
        ...(o.sleep
          ? [
              board(
                "mattress",
                "Mattress",
                60,
                strip - 400 - 760,
                450,
                o.w - 120,
                o.d - 120,
                120,
                "#efe6d8",
              ),
            ]
          : []),
      ],
      o.w,
      o.d,
      o.sleep ? 570 : 450,
    );
  };

/** one, two, or a tall screen unit on casters */
const screens =
  (
    n: number,
    h: 1200 | 1600,
    o: { desk?: boolean; props?: string | null } = {},
  ) =>
  (strip: number): Build =>
    build(
      Array.from({ length: n }, (_, i) =>
        place(screenUnit(h), i * 600, {
          y: strip - 400,
          props:
            i === 0
              ? o.props === undefined
                ? "mobile-screen"
                : o.props
              : null,
        }),
      ),
      o.desk
        ? [
            board(
              "drop-leaf",
              "Drop-leaf top",
              0,
              strip - 400 - 500,
              740,
              600,
              500,
            ),
          ]
        : [],
      n * 600,
      o.desk ? 900 : 400,
      h,
    );

/* ---------- the three families ---------- */

export const families: Family[] = [
  {
    id: "pieces",
    noun: "a piece",
    name: "Pieces",
    line: "One frame for one spot. The same panels, set up for where they stand.",
    strip: 1000,
    verbs: ["hang", "put down", "hide", "sit", "roll"],
    bodies: [
      {
        id: "block",
        name: "Low block",
        lives: [
          {
            id: "bedside",
            caseId: "flat.bed",
            spot: "bedside",
            name: "Bedside cabinet",
            line: "A top for the lamp and the phone, a door for the rest.",
            productId: "bedside",
            record: "1.3",
          },
          {
            id: "child-bedside",
            caseId: "family.kids",
            spot: "kids-wall",
            name: "Child's bedside",
            props: "kids-bedside",
            line: "The same block, lower things in reach, nothing sharp on the face.",
            custom: { height: 400, segments: 1, mobile: false },
            concept: true,
            record: "1.20",
          },
          {
            id: "toy-cart",
            caseId: "family.kids",
            spot: "kids-wall",
            name: "Toy box cart",
            props: "kids-toys",
            line: "The block on casters with a lid: toys go in, the cart goes under the bed.",
            custom: { height: 400, segments: 1, mobile: true },
            concept: true,
            does: ["hide", "roll", "put down"],
            record: "1.8",
          },
          {
            id: "spice-face",
            caseId: "flat.kitchen",
            spot: "wall-end",
            name: "Spice station",
            props: "spice-shelf",
            line: "A block on the counter with a working face standing up from it.",
            custom: { height: 800, segments: 1, mobile: false },
            concept: true,
            does: ["hang", "put down"],
            record: "1.5",
          },
          {
            id: "sofa-side",
            caseId: "flat.living",
            spot: "sofa-side",
            name: "Sofa-side block",
            line: "The same block at the arm of the sofa, for the cup and the remote.",
            custom: { height: 400, segments: 1, mobile: false },
            concept: true,
            record: "1.3",
          },
        ],
      },
      {
        id: "bench",
        name: "Bench",
        lives: [
          {
            id: "bench",
            caseId: "family.hall",
            spot: "hall-side",
            name: "Storage bench",
            line: "Sit to tie your shoes. The shoes live underneath.",
            productId: "bench",
            record: "1.12",
          },
        ],
      },
      {
        id: "cart",
        name: "Two-tier cart",
        lives: [
          {
            id: "kitchen",
            caseId: "flat.kitchen",
            spot: "end-of-counter",
            name: "Kitchen trolley",
            line: "Extra counter that rolls to where you are cooking.",
            productId: "kitchen",
            record: "1.4",
          },
          {
            id: "work-cart",
            caseId: "loft.main",
            spot: "desk-end",
            name: "Work cart",
            line: "The printer and the paper, rolled under the desk when you are done.",
            productId: "work-cart",
            record: "1.6",
          },
          {
            id: "device-cabinet",
            caseId: "loft.main",
            spot: "desk-end",
            name: "Device cabinet",
            props: "devices",
            line: "The same two tiers on pads, for the router and the chargers.",
            custom: { height: 800, segments: 1, mobile: false },
            concept: true,
            record: "1.14",
          },
          {
            id: "bath-cart",
            caseId: "flat.bath",
            spot: "beside-washer",
            name: "Bathroom cart",
            props: "bath-cart",
            line: "Towels on the rail, bottles on the tray, the basket below. Faces that take steam.",
            custom: { height: 800, segments: 1, mobile: true },
            concept: true,
            does: ["hang", "put down", "roll"],
            record: "1.7",
          },
          {
            id: "balcony-cart",
            caseId: "flat.balcony",
            spot: "by-the-rail",
            name: "Balcony cart",
            props: "balcony-cart",
            line: "The kitchen cart in a coat that takes rain, with a rail for the tongs.",
            custom: { height: 800, segments: 1, mobile: true },
            concept: true,
            does: ["hang", "put down", "roll"],
            record: "1.19",
          },
          {
            id: "island",
            caseId: "loft.main",
            spot: "kitchen",
            name: "Preparation island",
            line: "Two carts under one long top.",
            productId: "island",
            grownFrom: "kitchen",
            growLine: "a second cart and one long top",
            quantity: 2,
            offsetX: -600,
            record: "1.11",
          },
        ],
      },
      {
        id: "console",
        name: "Two-bay cabinet",
        lives: [
          {
            id: "console",
            caseId: "family.hall",
            spot: "hall-wall",
            name: "Entry console",
            props: "console",
            line: "A waist-high top by the door for post, keys and a plant.",
            custom: { height: 800, segments: 2, mobile: false },
            concept: true,
            record: "1.16",
          },
          {
            id: "changing-table",
            caseId: "family.parents",
            spot: "parents-wall",
            name: "Changing table",
            props: "changing",
            line: "Two bays, a pad on top and a rail; the rail comes off when it is a cabinet again.",
            custom: { height: 800, segments: 2, mobile: false },
            concept: true,
            does: ["put down", "hide"],
            record: "1.13",
          },
        ],
      },
      {
        id: "sideboard",
        name: "Three-bay cabinet",
        lives: [
          {
            id: "sideboard",
            caseId: "flat.living",
            spot: "under-tv",
            name: "Three-bay sideboard",
            line: "Under the television: the cables and boxes go behind doors.",
            productId: "sideboard",
            record: "1.10",
          },
          {
            id: "tv-cabinet",
            caseId: "flat.living",
            spot: "under-tv",
            name: "TV cabinet",
            props: "tv-front",
            line: "The sideboard with a back panel standing up to carry the television and its cables.",
            custom: { height: 800, segments: 3, mobile: false },
            concept: true,
            does: ["put down", "hide", "show"],
            record: "1.15",
          },
          {
            id: "drop-leaf",
            caseId: "flat.living",
            spot: "under-tv",
            name: "Drop-leaf counter",
            props: "drop-leaf",
            line: "The sideboard with a top that folds down to work at, and folds back up.",
            custom: { height: 800, segments: 3, mobile: false },
            concept: true,
            grownFrom: "sideboard",
            growLine: "a drop-leaf top, its hinges and two end panels",
            does: ["work", "put down", "hide"],
            record: "4.1",
          },
        ],
      },
      {
        id: "upright",
        name: "Upright",
        lives: [
          {
            id: "entry",
            caseId: "flat.door",
            spot: "beside-door",
            name: "Entry organiser",
            line: "Hooks at hand height, a tray for keys, a shelf for shoes.",
            productId: "entry",
            record: "1.1",
          },
          {
            id: "desk",
            caseId: "studio.room",
            spot: "beside-desk",
            name: "Desk-side organiser",
            line: "Headphones, bag and chargers hang beside the desk, not on it.",
            productId: "desk",
            record: "1.2",
            door: {
              to: "screens",
              caseId: "loft.main",
              body: "one",
              line: "On casters, the same upright is a screen",
            },
          },
          {
            id: "coffee",
            caseId: "studio.room",
            spot: "kitchen-end",
            name: "Coffee corner",
            props: "coffee",
            line: "Cups on hooks, the machine at the right height, beans below.",
            custom: { height: 1200, segments: 1, mobile: false },
            concept: true,
            record: "1.9",
          },
          {
            id: "workstation",
            caseId: "studio.room",
            spot: "beside-desk",
            name: "Organiser workstation",
            line: "The organiser, with a desk top of its own.",
            productId: "workstation",
            grownFrom: "desk",
            growLine: "one more tier, a desk top and its support",
            record: "1.2",
          },
        ],
      },
      {
        id: "stand",
        name: "Tall upright",
        lives: [
          {
            id: "coat-stand",
            caseId: "studio.room",
            spot: "by-the-door",
            name: "Coat stand",
            props: "coat-stand",
            line: "Every coat in the house, off the chair and off the bannister.",
            productId: "coat-rack",
            record: "1.17",
            door: {
              to: "walls",
              caseId: "family.kids",
              body: "line-2",
              line: "Two of these, back to back, are a wall",
            },
          },
          {
            id: "clothes",
            caseId: "flat.bed",
            spot: "stand",
            name: "Clothes organiser",
            props: "wardrobe",
            line: "Tomorrow's clothes, and the ones not yet for the wash.",
            productId: "coat-rack",
            record: "1.17",
          },
          {
            id: "strip",
            caseId: "family.hall",
            spot: "hall-floor",
            name: "The long strip",
            props: "hall-strip",
            line: "Bench, upright, cabinet and coat stand joined along one wall. Each stands on its own first.",
            productId: "coat-rack",
            concept: true,
            grownFrom: "coat-stand",
            growLine: "a bench, an upright and a cabinet, joined in a row",
            record: "1.18",
          },
        ],
      },
    ],
  },
  {
    id: "walls",
    noun: "a wall",
    name: "Walls",
    line: "A room inside a room. Segments that work on both sides, joined into a shape.",
    strip: 2400,
    verbs: ["divide", "shelve", "hang", "work", "sit", "pass", "show"],
    bodies: [
      {
        id: "line-2",
        name: "Two segments, straight",
        lives: [
          {
            id: "child-divider",
            caseId: "family.kids",
            spot: "kids-floor",
            name: "Second bedroom",
            props: "kids-divider",
            line: "Two segments, four tiers: one room becomes two, each with shelves on its side.",
            productId: "bookcase",
            does: ["divide", "shelve", "show"],
            record: "2.1",
          },
          {
            id: "grille",
            caseId: "family.kids",
            spot: "kids-floor",
            name: "Grille wall",
            props: "kids-grille",
            line: "The same two segments with an open lattice above, so light and a look get through.",
            build: line(2, 1600, ["bookcase"]),
            concept: true,
            does: ["divide", "show"],
            record: "2.16",
          },
          {
            id: "bookwall",
            caseId: "loft.main",
            spot: "behind-sofa",
            name: "Double-sided bookshelf wall",
            line: "Books on the sofa side, records on the other.",
            productId: "bookcase",
            does: ["divide", "shelve", "show"],
            record: "2.9",
          },
          {
            id: "record-wall",
            caseId: "loft.main",
            spot: "behind-sofa",
            name: "Record wall",
            props: "records",
            line: "Tilted boards for covers, dividers and a light. Back to shelves whenever you like.",
            build: line(2, 1600, ["bookcase"]),
            concept: true,
            does: ["show", "shelve", "divide"],
            record: "2.24",
          },
          {
            id: "against-wall",
            caseId: "flat.living",
            spot: "floor",
            name: "Bookwall against the wall",
            props: "living-wall",
            line: "Tall and against the wall, with deeper shelves on the one side that faces the room.",
            build: line(2, 1600, ["bookcase"]),
            concept: true,
            does: ["shelve", "show"],
            record: "2.15",
          },
          {
            id: "offset",
            caseId: "loft.main",
            spot: "middle",
            name: "Offset line",
            line: "The two segments stepped past each other, so the wall has a fold in it.",
            build: (strip) =>
              build(
                [
                  place(segment(1600), 0, {
                    y: strip - 400,
                    props: "bookcase",
                  }),
                  place(segment(1600), 600, { y: strip - 600 }),
                ],
                [],
                1200,
                600,
                1600,
              ),
            concept: true,
            does: ["divide", "shelve"],
            record: "2.18",
          },
          {
            id: "opening",
            caseId: "family.living",
            spot: "living-floor",
            name: "Wall with an opening",
            props: "opening",
            line: "One face left out, for a look through or to pass a cup.",
            build: line(2, 1600, ["bookcase"]),
            concept: true,
            does: ["divide", "pass", "shelve"],
            record: "2.19",
          },
          {
            id: "wardrobe-side",
            caseId: "family.parents",
            spot: "parents-floor",
            name: "Wardrobe wall",
            line: "One side deepened to 60 cm with a rail and a door; the other side stays thin shelves.",
            build: (strip) =>
              build(
                [
                  place(segment(1600), 0, {
                    y: strip - 400,
                    props: "coat-rack",
                    doors: true,
                  }),
                  place(segment(1600), 600, { y: strip - 400, doors: true }),
                ],
                [],
                1200,
                600,
                1600,
              ),
            concept: true,
            does: ["divide", "hang", "hide", "shelve"],
            record: "2.10",
          },
          {
            id: "bed-head",
            caseId: "studio.room",
            spot: "between",
            name: "Bed-head wall",
            props: "bed-head",
            line: "Three tiers behind the pillows: a soft face on the bed side, storage behind.",
            build: line(2, 1200, ["bookcase"]),
            concept: true,
            does: ["divide", "shelve", "put down"],
            record: "2.12",
          },
          {
            id: "workstation-wall",
            caseId: "loft.main",
            spot: "middle",
            name: "Workstation wall",
            line: "The wall with a desk top on one side and a leg at the far end.",
            build: (strip) =>
              build(
                [
                  place(segment(1600), 0, {
                    y: strip - 400,
                    props: "bookcase",
                  }),
                  place(segment(1600), 600, { y: strip - 400 }),
                ],
                [
                  board("desktop", "Desk top", 0, strip - 1000, 730, 1200, 600),
                  board(
                    "desk-leg",
                    "Desk leg",
                    1160,
                    strip - 990,
                    30,
                    40,
                    40,
                    700,
                  ),
                ],
                1200,
                1000,
                1600,
              ),
            concept: true,
            grownFrom: "child-divider",
            growLine: "a desk top, its brackets and one leg",
            does: ["work", "divide", "shelve"],
            record: "2.11",
          },
        ],
      },
      {
        id: "line-3-low",
        name: "Three segments, low",
        lives: [
          {
            id: "sofa-back",
            caseId: "loft.main",
            spot: "behind-sofa",
            name: "Behind the sofa",
            line: "Three low segments with one long top: a shelf for the sofa, a desk for the other side.",
            build: (strip) =>
              build(
                [
                  place(segment(1200), 0, {
                    y: strip - 400,
                    props: "bookcase",
                  }),
                  place(segment(1200), 600, { y: strip - 400 }),
                  place(segment(1200), 1200, { y: strip - 400 }),
                ],
                [
                  board(
                    "long-top-1800",
                    "Long top",
                    0,
                    strip - 400,
                    1230,
                    1800,
                    400,
                  ),
                ],
                1800,
                400,
                1250,
              ),
            concept: true,
            does: ["divide", "shelve", "put down", "work"],
            record: "2.2",
          },
        ],
      },
      {
        id: "corner",
        name: "Two segments, one turn",
        lives: [
          {
            id: "shape-l",
            caseId: "loft.main",
            spot: "corner",
            name: "L corner",
            line: "One segment along, one across. A corner appears where there was none.",
            build: shapeL(1600),
            concept: true,
            does: ["divide", "shelve"],
            record: "2.3",
          },
          {
            id: "reading-corner",
            caseId: "loft.main",
            spot: "corner",
            name: "Reading corner",
            props: "reading",
            line: "The L with a seat board, a cushion and a light inside the corner.",
            build: (strip) => {
              const b = shapeL(1600)(strip);
              return {
                ...b,
                boards: [
                  board(
                    "seat-board",
                    "Seat board",
                    0,
                    strip - 1000,
                    430,
                    600,
                    600,
                  ),
                  board(
                    "cushion",
                    "Cushion",
                    40,
                    strip - 960,
                    450,
                    520,
                    520,
                    70,
                    "#5f6f7a",
                  ),
                ],
                depth: 1000,
              };
            },
            concept: true,
            grownFrom: "shape-l",
            growLine: "a seat board, two supports and a cushion",
            does: ["sit", "shelve", "divide"],
            record: "2.13",
          },
          {
            id: "play-corner",
            caseId: "family.living",
            spot: "living-corner",
            name: "Play corner",
            line: "Two low segments in an L, a whiteboard face and boxes. Nothing to climb.",
            build: shapeL(800),
            concept: true,
            does: ["divide", "write", "hide"],
            record: "2.21",
          },
        ],
      },
      {
        id: "three-turned",
        name: "Three segments, turned",
        lives: [
          {
            id: "shape-u",
            caseId: "loft.main",
            spot: "middle",
            name: "U nook",
            line: "Three segments around you. A place to read, work or play, open on one side.",
            build: shapeU,
            concept: true,
            does: ["divide", "shelve", "sit"],
            record: "2.4",
          },
          {
            id: "shape-t",
            caseId: "family.parents",
            spot: "parents-floor",
            name: "T with two bedsides",
            props: "two-bedsides",
            line: "The same three segments as a T: a bed head on each side, with a light and a socket.",
            build: shapeT,
            concept: true,
            does: ["divide", "shelve", "put down"],
            record: "2.23",
          },
          {
            id: "shape-t-plain",
            caseId: "loft.main",
            spot: "middle",
            name: "T",
            props: "plain-wall",
            line: "One segment meets the middle of two. Both sides get a working face.",
            build: shapeT,
            concept: true,
            does: ["divide", "shelve"],
            record: "2.5",
          },
          {
            id: "shape-z",
            caseId: "loft.main",
            spot: "middle",
            name: "Z line",
            props: "show-wall",
            line: "Two turns the other way. Display on one side, storage on the other.",
            build: shapeZ,
            concept: true,
            does: ["divide", "shelve", "show"],
            record: "2.17",
          },
          {
            id: "steps",
            caseId: "workshop.floor",
            spot: "window",
            name: "Steps",
            line: "Two, three and four tiers in a row; the low end is a table, the high end a wall.",
            build: shapeSteps,
            concept: true,
            does: ["divide", "shelve", "put down", "show"],
            record: "2.6",
          },
          {
            id: "phone-booth",
            caseId: "loft.main",
            spot: "middle",
            name: "Phone-booth corner",
            props: "booth",
            line: "The U with a desk top across it and a curtain. Not soundproof; just yours.",
            build: (strip) => {
              const b = shapeU(strip);
              return {
                ...b,
                boards: [
                  board("desktop", "Desk top", 400, strip - 900, 730, 600, 500),
                ],
              };
            },
            concept: true,
            grownFrom: "shape-u",
            growLine: "a desk top, its brackets and a curtain rail",
            does: ["work", "divide", "shelve"],
            record: "2.29",
          },
          {
            id: "two-desks",
            caseId: "loft.main",
            spot: "middle",
            name: "Two-person workstation",
            line: "The T with a desk top on each side of the stem, facing away from each other.",
            build: (strip) => {
              const b = shapeT(strip);
              return {
                ...b,
                boards: [
                  board(
                    "desktop",
                    "Desk top",
                    -200,
                    strip - 1000,
                    730,
                    600,
                    600,
                  ),
                  board(
                    "desktop",
                    "Desk top",
                    800,
                    strip - 1000,
                    730,
                    600,
                    600,
                  ),
                ],
                width: 1600,
                left: -200,
              };
            },
            concept: true,
            grownFrom: "shape-t-plain",
            growLine: "two desk tops, their brackets and two legs",
            does: ["work", "divide", "shelve"],
            record: "2.22",
          },
        ],
      },
      {
        id: "platform",
        name: "Blocks and a platform",
        lives: [
          {
            id: "tea-platform",
            caseId: "loft.main",
            spot: "window",
            name: "Tea platform",
            line: "Six low blocks under one board: a raised corner to sit on, storage underneath.",
            build: platform({ blocks: 6, w: 1800, d: 1200 }),
            concept: true,
            does: ["sit", "hide", "put down"],
            record: "2.14",
          },
          {
            id: "guest-platform",
            caseId: "loft.main",
            spot: "window",
            name: "Guest sleeping platform",
            line: "The same blocks and board with a mattress on top, for the nights someone stays.",
            build: platform({ blocks: 6, w: 1800, d: 1200, sleep: true }),
            concept: true,
            does: ["sit", "hide"],
            record: "2.28",
          },
        ],
      },
      {
        id: "bridge",
        name: "Two towers and a bridge",
        lives: [
          {
            id: "passage",
            caseId: "family.hall",
            spot: "hall-floor",
            name: "Bridge passage",
            props: "passage",
            line: "Two towers with a board across the top. You walk through the wall.",
            build: bridge(),
            concept: true,
            does: ["pass", "divide", "shelve"],
            record: "2.7",
          },
          {
            id: "pet-door",
            caseId: "family.hall",
            spot: "hall-floor",
            name: "Pet door",
            props: "pet-door",
            line: "The passage with a low door in it. The cat decides.",
            build: bridge({ door: 400 }),
            concept: true,
            does: ["pass", "divide", "shelve"],
            record: "2.27",
          },
          {
            id: "half-door",
            caseId: "family.kids",
            spot: "kids-door",
            name: "Half-door passage",
            props: "half-door",
            line: "A half-height door in the passage: a room that is theirs, with the top open.",
            build: bridge({ door: 900 }),
            concept: true,
            does: ["pass", "divide", "shelve"],
            record: "2.8",
          },
          {
            id: "niche",
            caseId: "workshop.floor",
            spot: "niche",
            name: "Display niche",
            line: "A low cabinet between the towers, under the bridge. Not a passage any more; a frame.",
            build: bridge({ cabinet: true }),
            concept: true,
            does: ["show", "shelve", "hide"],
            record: "2.25",
            door: {
              to: "pieces",
              caseId: "flat.living",
              body: "sideboard",
              line: "The cabinet in the middle is a piece on its own",
            },
          },
          {
            id: "walk-in",
            caseId: "family.parents",
            spot: "parents-floor",
            name: "Walk-in entrance",
            props: "walk-in",
            line: "The towers deepened for clothes, a curtain across the gap: the way into a wardrobe.",
            build: bridge({ curtain: true }),
            concept: true,
            does: ["pass", "hang", "hide"],
            record: "2.26",
          },
        ],
      },
    ],
  },
  {
    id: "screens",
    noun: "a screen",
    name: "Screens",
    line: "A wall that moves. One or two units on casters, or three leaves that fold.",
    strip: 1000,
    verbs: ["roll", "fold", "hide", "hang", "work", "write", "mirror"],
    bodies: [
      {
        id: "one",
        name: "One unit",
        lives: [
          {
            id: "screen",
            caseId: "loft.main",
            spot: "party",
            name: "Mobile screen",
            line: "Quiet on one side, a working face on the other, casters underneath.",
            productId: "mobile-screen",
            does: ["roll", "hide", "hang"],
            record: "3.1",
          },
          {
            id: "video-background",
            caseId: "studio.room",
            spot: "behind-chair",
            name: "Video background",
            line: "The quiet side behind you on calls; the light and the tablet on the side they don't see.",
            build: screens(1, 1200, { props: null }),
            concept: true,
            does: ["roll", "hide", "show"],
            record: "3.4",
          },
          {
            id: "standing-desk",
            caseId: "workshop.floor",
            spot: "floor",
            name: "Standing work screen",
            line: "A drop-leaf top on the working side, a whiteboard above it.",
            build: screens(1, 1200, { desk: true, props: null }),
            concept: true,
            grownFrom: "video-background",
            growLine: "a drop-leaf top, two supports and a whiteboard face",
            does: ["work", "write", "roll"],
            record: "3.5",
          },
          {
            id: "fitting",
            caseId: "family.parents",
            spot: "parents-corner",
            name: "Fitting screen",
            props: "fitting",
            line: "A full-length mirror on the quiet side, a rail and hooks on the other.",
            build: screens(1, 1200, { props: "coat-rack" }),
            concept: true,
            does: ["mirror", "hang", "roll"],
            record: "3.6",
          },
          {
            id: "bed-screen",
            caseId: "studio.room",
            spot: "between",
            name: "Bed screen",
            props: "bed-screen",
            line: "Between the bed and the rest of the room, with nothing sticking out on the bed side.",
            build: screens(1, 1200, { props: null }),
            concept: true,
            does: ["hide", "roll", "hang"],
            record: "3.7",
          },
          {
            id: "kitchen-screen",
            caseId: "loft.main",
            spot: "kitchen",
            name: "Kitchen prep screen",
            line: "A wipe-clean working face beside the counter: knives on the strip, roll and cloth on the rail.",
            build: screens(1, 1200, { props: "kitchen" }),
            concept: true,
            does: ["hang", "roll", "hide"],
            record: "3.9",
          },
        ],
      },
      {
        id: "two",
        name: "Two units",
        lives: [
          {
            id: "double",
            caseId: "loft.main",
            spot: "party",
            name: "Two-unit screen",
            props: "two-coats",
            line: "Two units joined: a longer wall that still rolls, and can take a top across.",
            build: screens(2, 1200),
            concept: true,
            does: ["roll", "hide", "hang"],
            record: "3.2",
          },
          {
            id: "wheeled-partition",
            caseId: "loft.main",
            spot: "party",
            name: "Wheeled partition",
            line: "The two units with storage on both sides and ballast below: a partition you can move by yourself.",
            build: screens(2, 1200, { props: "bookcase" }),
            concept: true,
            does: ["roll", "divide", "hide"],
            record: "2.20",
          },
          {
            id: "tool-screen",
            caseId: "workshop.floor",
            spot: "bench-side",
            name: "Tool and whiteboard screen",
            line: "Samples and tools on one side, a whiteboard on the other. Our own studio uses it.",
            build: screens(2, 1200, { props: "work-cart" }),
            concept: true,
            does: ["write", "hang", "roll"],
            record: "3.10",
          },
          {
            id: "child-boundary",
            caseId: "family.living",
            spot: "living-corner",
            name: "Play boundary",
            props: "play-boundary",
            line: "Two units with a whiteboard, boxes and a soft face: an edge to the play, not a fence.",
            build: screens(2, 1200, { props: null }),
            concept: true,
            does: ["write", "hide", "roll"],
            record: "3.8",
          },
        ],
      },
      {
        id: "folding",
        name: "Three leaves",
        lives: [
          {
            id: "folding",
            caseId: "studio.room",
            spot: "folded",
            name: "Three-panel folding screen",
            line: "Three framed leaves on a continuous hinge. Folds flat; carries little.",
            productId: "folding-screen",
            does: ["fold", "hide"],
            record: "3.3",
          },
        ],
      },
      {
        id: "tall",
        name: "One unit, tall",
        lives: [
          {
            id: "standing-background",
            caseId: "workshop.floor",
            spot: "stand",
            name: "Standing video background",
            line: "The background at 160 cm, for calls you take on your feet.",
            build: screens(1, 1600, { props: null }),
            concept: true,
            does: ["roll", "hide", "show"],
            record: "3.4",
          },
        ],
      },
    ],
  },
];

export const familyOf = (id: string) => families.find((f) => f.id === id);

export const lifeOf = (body: Body, id: string | null) =>
  body.lives.find((l) => l.id === id);

/** The life a body shows first in a place: never a grown one. */
export const firstLifeIn = (body: Body, caseId: PlaceId) =>
  body.lives.find((l) => l.caseId === caseId && !l.grownFrom);

export function resolveLife(life: Life, strip: number): Build {
  if (life.build) {
    const made = life.build(strip);
    if (!life.props) return made;
    /* Walls and screens are built by a shared function, so four lives can come
       back as the same segments in the same places. The life's own staging
       goes on the face that was already dressed — or on the first segment when
       the build dressed none — so those four hold four different things. */
    const i = made.placements.findIndex((pl) => pl.props != null);
    const at = i === -1 ? 0 : i;
    return {
      ...made,
      placements: made.placements.map((pl, n) =>
        n === at ? { ...pl, props: life.props ?? null } : pl,
      ),
    };
  }
  const product = life.custom
    ? customProduct(life.custom)
    : getProduct(life.productId ?? "");
  if (!product) throw new Error(`No product for life ${life.id}`);
  const config = life.custom
    ? customConfig(life.custom)
    : defaultConfig(product);
  const left = life.offsetX ?? 0;
  return build(
    [
      {
        product,
        config,
        x: left,
        /* What stands on it is the life's own, not the frame's. Two designs
           can share a frame — that is the point of the panel system — but a
           child's bedside and a spice station are not holding the same things,
           so each life names its own staging and only falls back to the
           frame's when it has not been given one. */
        props: life.props ?? (life.custom ? "custom" : product.id),
      },
    ],
    [],
    product.width,
    product.depth ?? 400,
    product.height,
    left,
  );
}

/** The one catalogue piece behind a life, when there is one. */
export const productOf = (life: Life) =>
  life.productId ? getProduct(life.productId) : undefined;

const rolls = (p: Product) => ["trolley", "island", "screen"].includes(p.shape);

export function verbsOf(life: Life): VerbId[] {
  if (life.does) return life.does;
  const product = life.custom
    ? customProduct(life.custom)
    : getProduct(life.productId ?? "");
  if (!product) return [];
  const out: VerbId[] = [];
  if (product.does.includes("hang")) out.push("hang");
  if (product.does.includes("put down")) out.push("put down");
  if (product.does.includes("hide") || product.door) out.push("hide");
  if (product.does.includes("sit")) out.push("sit");
  if (rolls(product)) out.push("roll");
  return out;
}

/** Not made yet: said by the design itself, or by the catalogue it comes from.
    One answer for the material it is drawn in and the words beside it. */
export function isConcept(life: Life): boolean {
  if (life.concept) return true;
  const p = productOf(life);
  return !p || p.status === "concept";
}

/** How far along a design is, in the visitor's words: the same on every page. */
export function statusOf(life: Life): { made: boolean; label: string } {
  if (isConcept(life)) return { made: false, label: "Not made yet" };
  return productOf(life)?.status === "buyable"
    ? { made: true, label: "Ready to order" }
    : { made: true, label: "Made · price to come" };
}

export const livesIn = (family: Family, caseId: PlaceId) =>
  family.bodies.flatMap((b) => b.lives.filter((l) => l.caseId === caseId));

/** how many of the sixty records a family holds */
export const recordCount = (family: Family) =>
  new Set(family.bodies.flatMap((b) => b.lives.map((l) => l.record))).size;

/** what the body wears right now */
export type Look = {
  /** null: the bare body, nothing on it */
  lifeId: string | null;
  doors: boolean;
};

export const lookKey = (l: Look | null) =>
  l ? `${l.lifeId ?? "bare"}${l.doors ? "+doors" : ""}` : "none";

/* ---------- what people actually say: one problem, one answer in one home ---------- */

export type Job = {
  id: string;
  /** the visitor's words */
  say: string;
  home: HomeId;
  room: PlaceId;
  family: FamilyId;
  body: string;
  life: string;
  verb: VerbId;
};

const job = (
  home: HomeId,
  room: PlaceId,
  say: string,
  family: FamilyId,
  body: string,
  life: string,
  verb: VerbId,
): Job => ({
  id: `${home}:${life}`,
  say,
  home,
  room,
  family,
  body,
  life,
  verb,
});

export const jobs: Job[] = [
  // the flat
  job(
    "flat",
    "flat.door",
    "Coats pile up on the chair by the door",
    "pieces",
    "upright",
    "entry",
    "hang",
  ),
  job(
    "flat",
    "flat.kitchen",
    "The counter is too short when I cook",
    "pieces",
    "cart",
    "kitchen",
    "roll",
  ),
  job(
    "flat",
    "flat.kitchen",
    "Bottles and jars crowd the counter",
    "pieces",
    "block",
    "spice-face",
    "hang",
  ),
  job(
    "flat",
    "flat.living",
    "Cables and boxes under the TV",
    "pieces",
    "sideboard",
    "sideboard",
    "hide",
  ),
  job(
    "flat",
    "flat.living",
    "There is no desk in the flat",
    "pieces",
    "sideboard",
    "drop-leaf",
    "work",
  ),
  job(
    "flat",
    "flat.living",
    "The cup and the remote at the sofa",
    "pieces",
    "block",
    "sofa-side",
    "put down",
  ),
  job(
    "flat",
    "flat.living",
    "A wall of books in the living room",
    "walls",
    "line-2",
    "against-wall",
    "shelve",
  ),
  job(
    "flat",
    "flat.bed",
    "Phone and book on the floor by the bed",
    "pieces",
    "block",
    "bedside",
    "put down",
  ),
  job(
    "flat",
    "flat.bed",
    "Tomorrow's clothes on the chair",
    "pieces",
    "stand",
    "clothes",
    "hang",
  ),
  job(
    "flat",
    "flat.bath",
    "Towels on the bathroom floor",
    "pieces",
    "cart",
    "bath-cart",
    "hang",
  ),
  job(
    "flat",
    "flat.balcony",
    "Evenings out on the balcony",
    "pieces",
    "cart",
    "balcony-cart",
    "roll",
  ),
  // the studio
  job(
    "studio",
    "studio.room",
    "No hallway: coats land on the chair by the door",
    "pieces",
    "stand",
    "coat-stand",
    "hang",
  ),
  job(
    "studio",
    "studio.room",
    "One table for eating and for working",
    "pieces",
    "upright",
    "desk",
    "hang",
  ),
  job(
    "studio",
    "studio.room",
    "The bed is behind me on every call",
    "screens",
    "one",
    "video-background",
    "hide",
  ),
  job(
    "studio",
    "studio.room",
    "The bed and the living room are the same room",
    "walls",
    "line-2",
    "bed-head",
    "divide",
  ),
  job(
    "studio",
    "studio.room",
    "Something between the bed and the rest, that rolls away",
    "screens",
    "one",
    "bed-screen",
    "roll",
  ),
  job(
    "studio",
    "studio.room",
    "Nowhere to put a screen when it is not needed",
    "screens",
    "folding",
    "folding",
    "fold",
  ),
  job(
    "studio",
    "studio.room",
    "The kitchen wall has nothing on it",
    "pieces",
    "upright",
    "coffee",
    "put down",
  ),
  // the family house
  job(
    "family",
    "family.kids",
    "Two children, one room, no line between them",
    "walls",
    "line-2",
    "child-divider",
    "divide",
  ),
  job(
    "family",
    "family.kids",
    "A room of their own, with the light still coming through",
    "walls",
    "line-2",
    "grille",
    "show",
  ),
  job(
    "family",
    "family.kids",
    "A door that is theirs, with the top open",
    "walls",
    "bridge",
    "half-door",
    "pass",
  ),
  job(
    "family",
    "family.kids",
    "Toys everywhere, every evening",
    "pieces",
    "block",
    "toy-cart",
    "hide",
  ),
  job(
    "family",
    "family.living",
    "A play corner where we can still see them",
    "walls",
    "corner",
    "play-corner",
    "divide",
  ),
  job(
    "family",
    "family.living",
    "A boundary to the play that moves",
    "screens",
    "two",
    "child-boundary",
    "roll",
  ),
  job(
    "family",
    "family.hall",
    "Shoes and school bags all over the hallway",
    "pieces",
    "bench",
    "bench",
    "sit",
  ),
  job(
    "family",
    "family.hall",
    "Post and keys need somewhere by the door",
    "pieces",
    "console",
    "console",
    "put down",
  ),
  job(
    "family",
    "family.hall",
    "The hallway into the living room has no door",
    "walls",
    "bridge",
    "passage",
    "pass",
  ),
  job(
    "family",
    "family.hall",
    "The cat wants in and out",
    "walls",
    "bridge",
    "pet-door",
    "pass",
  ),
  job(
    "family",
    "family.parents",
    "No wardrobe in our bedroom",
    "walls",
    "line-2",
    "wardrobe-side",
    "hang",
  ),
  job(
    "family",
    "family.parents",
    "A way into a wardrobe",
    "walls",
    "bridge",
    "walk-in",
    "pass",
  ),
  job(
    "family",
    "family.parents",
    "Two bedsides on one wall",
    "walls",
    "three-turned",
    "shape-t",
    "put down",
  ),
  job(
    "family",
    "family.parents",
    "A mirror to dress by",
    "screens",
    "one",
    "fitting",
    "mirror",
  ),
  job(
    "family",
    "family.parents",
    "The little one still needs changing",
    "pieces",
    "console",
    "changing-table",
    "put down",
  ),
  // the loft
  job(
    "loft",
    "loft.main",
    "The sofa has its back to the whole room",
    "walls",
    "line-3-low",
    "sofa-back",
    "divide",
  ),
  job(
    "loft",
    "loft.main",
    "Three desks in a row and three calls at once",
    "walls",
    "three-turned",
    "phone-booth",
    "work",
  ),
  job(
    "loft",
    "loft.main",
    "Two of us working back to back",
    "walls",
    "three-turned",
    "two-desks",
    "work",
  ),
  job(
    "loft",
    "loft.main",
    "A desk that is part of the wall",
    "walls",
    "line-2",
    "workstation-wall",
    "work",
  ),
  job(
    "loft",
    "loft.main",
    "One big room and no corners in it",
    "walls",
    "corner",
    "shape-l",
    "divide",
  ),
  job(
    "loft",
    "loft.main",
    "Somewhere to sit and read",
    "walls",
    "corner",
    "reading-corner",
    "sit",
  ),
  job(
    "loft",
    "loft.main",
    "Books and records with no wall to live on",
    "walls",
    "line-2",
    "bookwall",
    "shelve",
  ),
  job(
    "loft",
    "loft.main",
    "Friends stay the night",
    "walls",
    "platform",
    "guest-platform",
    "sit",
  ),
  job(
    "loft",
    "loft.main",
    "A corner to sit up on, by the window",
    "walls",
    "platform",
    "tea-platform",
    "sit",
  ),
  job(
    "loft",
    "loft.main",
    "Move the wall when there is a party",
    "screens",
    "two",
    "wheeled-partition",
    "roll",
  ),
  job(
    "loft",
    "loft.main",
    "A screen between two desks",
    "screens",
    "one",
    "screen",
    "hide",
  ),
  job(
    "loft",
    "loft.main",
    "The open kitchen splashes the sofa",
    "screens",
    "one",
    "kitchen-screen",
    "hide",
  ),
  job(
    "loft",
    "loft.main",
    "More counter when three of us cook",
    "pieces",
    "cart",
    "island",
    "roll",
  ),
  job(
    "loft",
    "loft.main",
    "The printer lives on the floor",
    "pieces",
    "cart",
    "work-cart",
    "roll",
  ),
  job(
    "loft",
    "loft.main",
    "The router and all the chargers",
    "pieces",
    "cart",
    "device-cabinet",
    "hide",
  ),
  // our workshop
  job(
    "workshop",
    "workshop.floor",
    "Tools on one side, a whiteboard on the other",
    "screens",
    "two",
    "tool-screen",
    "write",
  ),
  job(
    "workshop",
    "workshop.floor",
    "A standing desk on the screen itself",
    "screens",
    "one",
    "standing-desk",
    "work",
  ),
  job(
    "workshop",
    "workshop.floor",
    "A backdrop for product videos",
    "screens",
    "tall",
    "standing-background",
    "hide",
  ),
  job(
    "workshop",
    "workshop.floor",
    "Three heights in a row, in the window",
    "walls",
    "three-turned",
    "steps",
    "show",
  ),
  job(
    "workshop",
    "workshop.floor",
    "A frame around one piece, in the window",
    "walls",
    "bridge",
    "niche",
    "show",
  ),
];

export const jobsIn = (home: HomeId) => jobs.filter((j) => j.home === home);
export const jobOf = (id: string | null | undefined) =>
  jobs.find((j) => j.id === id);

/** how many of the sixty records live in a home */
export const recordsIn = (home: HomeId) =>
  new Set(
    families.flatMap((f) =>
      f.bodies.flatMap((b) =>
        b.lives
          .filter((l) => l.caseId.startsWith(`${home}.`))
          .map((l) => l.record),
      ),
    ),
  ).size;
