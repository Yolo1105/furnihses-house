import type { KeepId } from "../storefront/lib/moments";
import { mm, type Block3D } from "../storefront/lib/three/blocks";
import { homeBlocks } from "../house/furnish";

/**
 * A small street: five homes, each a household with its own rooms, its own
 * furniture and its own reasons. All lengths in mm inside a home (x along
 * its front, z from its back wall toward its open side); homes stand on the
 * street in metres, turned as they like. The road bends, the neighbours'
 * roofs run past the edge of the picture.
 */

export const NORTH_H = 2500;
export const CUT_H = 850;
export const WALL_T = 100;
/** the furniture builders place things against a wall this far back */
export const KEEP_D = 2400;

export type HomeId = "studio" | "flat" | "family" | "loft" | "workshop";

export type PlaceId =
  | "studio.room"
  | "studio.bath"
  | "flat.door"
  | "flat.kitchen"
  | "flat.living"
  | "flat.balcony"
  | "flat.bath"
  | "flat.bed"
  | "flat.child"
  | "flat.desk"
  | "loft.main"
  | "loft.bath"
  | "loft.bed"
  | "family.hall"
  | "family.kids"
  | "family.parents"
  | "family.living"
  | "workshop.floor";

export type ExtraKeep =
  | "basin"
  | "washer"
  | "smallbed"
  | "rail"
  | "plant"
  | "deskchair"
  | "workbench"
  | "panelstack"
  | "panelrack"
  | "packing"
  | "cnc"
  | "sheetstack"
  | "partscart"
  | "boxpallet";

export type ModelId =
  | "painted_wooden_chair_02"
  | "sofa_02"
  | "modern_arm_chair_01"
  | "potted_plant_04"
  | "desk_lamp_arm_01"
  | "cardboard_box_01"
  | "modern_coffee_table_01"
  | "dining_chair_02"
  | "throw_pillows_01"
  | "wicker_basket_01"
  | "book_encyclopedia_set_01"
  | "classic_laptop"
  | "ceramic_vase_01"
  | "modern_wooden_cabinet"
  | "rollershutter_door"
  | "planter_box_02"
  | "metal_stool_01"
  | "street_lamp_01";

/**
 * The model library comes in its makers' colours (black leather, blue paint).
 * A skin keeps the scanned surface and changes the colour, so every home
 * speaks the same warm material language.
 */
export type Skin = { match: string; color: string; roughness?: number };
export const SKINS: Partial<Record<ModelId, Skin[]>> = {
  sofa_02: [
    { match: "Seat", color: "#eadfcc", roughness: 0.94 },
    { match: "", color: "#dccfb9", roughness: 0.92 },
  ],
  modern_arm_chair_01: [{ match: "pillow", color: "#b98a5e", roughness: 0.62 }],
  painted_wooden_chair_02: [{ match: "", color: "#dcc09a", roughness: 0.6 }],
  dining_chair_02: [{ match: "", color: "#caa57b", roughness: 0.66 }],
  modern_coffee_table_01: [{ match: "", color: "#e2c9a4", roughness: 0.55 }],
};

export type Spot = {
  id: string;
  /** which family's bodies stand here by default */
  kind: "wall" | "floor";
  /** home mm */
  x: number;
  /** mm from the room's back edge */
  z: number;
  /** degrees; 0 faces the open side, 90 faces +x, 270 faces -x */
  rot: 0 | 90 | 270;
};

export type ModelSpot = {
  id: ModelId;
  /** home mm, centre of its footprint */
  x: number;
  /** mm from the room's back edge */
  z: number;
  /** mm above the floor, for things standing on other things */
  h?: number;
  /** degrees */
  rot?: number;
  scale?: number;
};

export type Room = {
  id: PlaceId;
  name: string;
  line: string;
  home: HomeId;
  x0: number;
  x1: number;
  z0: number;
  z1: number;
  floor: "plank" | "plaster" | "concrete";
  keeps: { id: KeepId | ExtraKeep; x: number }[];
  /** things of the home's own that stand out on the floor, not against the back
      wall: x home mm (left edge), z mm from the room's back edge (back edge) */
  floorKeeps?: { id: ExtraKeep; x: number; z: number }[];
  models?: ModelSpot[];
  spots: Spot[];
};

/** Something soft on the floor. x: home mm, z: mm from the room's back edge,
    both at its middle. */
export type Rug = {
  room: PlaceId;
  x: number;
  z: number;
  w: number;
  d: number;
  tone: string;
};

/** Something framed on a room's back wall (only full-height walls carry one).
    x: home mm at its middle; y: mm to its middle. */
export type Art = {
  room: PlaceId;
  x: number;
  y: number;
  w: number;
  h: number;
  /** which of the drawn pictures; 4 is a working drawing of a cabinet */
  pic: 0 | 1 | 2 | 3 | 4;
};

export type Wall = {
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  kind: "full" | "cut";
};

export type Home = {
  id: HomeId;
  name: string;
  /** one line on who lives there */
  who: string;
  /** metres on the street, and degrees */
  origin: { x: number; z: number };
  rot: number;
  /** the whole footprint, home mm */
  w: number;
  d: number;
  tone: { wall: string; cut: string };
  rooms: Room[];
  walls: Wall[];
};

const spot = (
  id: string,
  kind: Spot["kind"],
  x: number,
  z: number,
  rot: Spot["rot"] = 0,
): Spot => ({ id, kind, x, z, rot });

const wall = (
  x0: number,
  z0: number,
  x1: number,
  z1: number,
  kind: Wall["kind"] = "cut",
): Wall => ({ x0, z0, x1, z1, kind });

/** A low wall with doorways: `gaps` are [from, to] along the wall, home mm. */
const doorway = (
  x0: number,
  z0: number,
  x1: number,
  z1: number,
  ...gaps: [number, number][]
): Wall[] => {
  const along = z0 === z1;
  const out: Wall[] = [];
  let from = along ? x0 : z0;
  const end = along ? x1 : z1;
  for (const [a, b] of [...gaps].sort((p, q) => p[0] - q[0])) {
    if (a > from)
      out.push(along ? wall(from, z0, a, z1) : wall(x0, from, x1, a));
    from = b;
  }
  if (end > from)
    out.push(along ? wall(from, z0, end, z1) : wall(x0, from, x1, end));
  return out;
};

export const homes: Home[] = [
  {
    id: "flat",
    name: "the flat",
    who: "Two of us. A hallway, a kitchen, a living room, a balcony.",
    origin: { x: -15.5, z: 14.4 },
    rot: 4,
    w: 14500,
    d: 4900,
    tone: { wall: "#f6f1e8", cut: "#f7f3eb" },
    rooms: [
      {
        id: "flat.door",
        name: "By the door",
        line: "Coats, keys and shoes stop landing on the chair.",
        home: "flat",
        x0: 0,
        x1: 3400,
        z0: 0,
        z1: 2400,
        floor: "plank",
        keeps: [{ id: "door", x: 200 }],
        models: [
          { id: "painted_wooden_chair_02", x: 2950, z: 480, rot: 200 },
          { id: "cardboard_box_01", x: 1500, z: 1950, rot: 12 },
          { id: "cardboard_box_01", x: 1950, z: 2000, rot: -25, scale: 0.85 },
        ],
        spots: [
          spot("beside-door", "wall", 1250, 0),
          spot("next", "wall", 1950, 0),
          spot("left-wall", "wall", 100, 2300, 90),
          spot("right-wall", "wall", 3300, 1000, 270),
          spot("floor", "floor", 500, 1000),
        ],
      },
      {
        id: "flat.kitchen",
        name: "In the kitchen",
        line: "More counter when you cook, out of the way when you don't.",
        home: "flat",
        x0: 3500,
        x1: 7300,
        z0: 0,
        z1: 2400,
        floor: "plaster",
        keeps: [{ id: "counter", x: 3700 }],
        models: [{ id: "ceramic_vase_01", x: 4300, z: 250, h: 900 }],
        spots: [
          spot("end-of-counter", "wall", 5300, 0),
          spot("corner", "wall", 5950, 0),
          spot("wall-end", "wall", 6600, 0),
          spot("floor", "floor", 4300, 1000),
        ],
      },
      {
        id: "flat.living",
        name: "In the living room",
        line: "Cables, remotes and the things with no home go behind a door.",
        home: "flat",
        x0: 7400,
        x1: 12400,
        z0: 0,
        z1: 2400,
        floor: "plank",
        keeps: [{ id: "tv", x: 10850 }],
        models: [
          { id: "sofa_02", x: 8550, z: 720 },
          { id: "modern_coffee_table_01", x: 8550, z: 1750 },
          {
            id: "book_encyclopedia_set_01",
            x: 8550,
            z: 1750,
            h: 430,
            scale: 0.7,
          },
          { id: "modern_arm_chair_01", x: 10050, z: 1500, rot: -35 },
          { id: "potted_plant_04", x: 12100, z: 420 },
        ],
        spots: [
          spot("under-tv", "wall", 10500, 0),
          spot("sofa-side", "wall", 9500, 0),
          spot("floor", "floor", 7600, 1000),
          spot("corner", "floor", 10600, 1300),
        ],
      },
      {
        id: "flat.balcony",
        name: "On the balcony",
        line: "A cart that goes out for the evening and comes back in.",
        home: "flat",
        x0: 12500,
        x1: 14500,
        z0: 0,
        z1: 2400,
        floor: "plaster",
        keeps: [{ id: "rail", x: 12500 }],
        models: [{ id: "potted_plant_04", x: 14100, z: 450, scale: 1.15 }],
        spots: [
          spot("by-the-rail", "wall", 12800, 0),
          spot("floor", "floor", 12700, 900),
        ],
      },
      {
        id: "flat.bath",
        name: "In the bathroom",
        line: "Towels, bottles and the laundry basket, off the floor.",
        home: "flat",
        x0: 0,
        x1: 2400,
        z0: 2500,
        z1: 4900,
        floor: "plaster",
        keeps: [
          { id: "basin", x: 200 },
          { id: "washer", x: 1000 },
        ],
        spots: [
          spot("beside-washer", "wall", 1700, 0),
          spot("floor", "floor", 600, 1100),
        ],
      },
      {
        id: "flat.bed",
        name: "Beside the bed",
        line: "The phone, the book and tomorrow's clothes each get a place.",
        home: "flat",
        x0: 2500,
        x1: 6300,
        z0: 2500,
        z1: 4900,
        floor: "plank",
        keeps: [{ id: "bed", x: 2700 }],
        spots: [
          spot("bedside", "wall", 4300, 0),
          spot("stand", "wall", 4950, 0),
          spot("floor", "floor", 4400, 900),
        ],
      },
      {
        id: "flat.child",
        name: "In the child's room",
        line: "One room, two children, or one child and a lot of toys.",
        home: "flat",
        x0: 6400,
        x1: 9800,
        z0: 2500,
        z1: 4900,
        floor: "plank",
        keeps: [{ id: "smallbed", x: 6600 }],
        models: [{ id: "wicker_basket_01", x: 9250, z: 1850, rot: 30 }],
        spots: [
          spot("bedside", "wall", 7650, 0),
          spot("next", "wall", 8300, 0),
          spot("floor", "floor", 7700, 1000),
        ],
      },
      {
        id: "flat.desk",
        name: "At the desk",
        line: "The desk stays. What piles up on it moves beside it.",
        home: "flat",
        x0: 9900,
        x1: 14500,
        z0: 2500,
        z1: 4900,
        floor: "plank",
        keeps: [{ id: "desk", x: 10100 }],
        models: [
          { id: "dining_chair_02", x: 10700, z: 1250, rot: 195 },
          { id: "classic_laptop", x: 10800, z: 320, h: 735, rot: 180 },
          { id: "desk_lamp_arm_01", x: 10250, z: 220, h: 735, rot: 20 },
        ],
        spots: [
          spot("beside-desk", "wall", 11400, 0),
          spot("cart", "wall", 12050, 0),
          spot("floor", "floor", 11800, 1300),
        ],
      },
    ],
    walls: [
      wall(-100, -50, 12450, -50, "full"),
      wall(-50, -100, -50, 4900),
      // the rooms open onto each other: a wall with a doorway is two walls
      ...doorway(
        -100,
        2450,
        14600,
        2450,
        [5500, 6300],
        [8950, 9750],
        [13300, 14100],
      ),
      ...doorway(3450, 0, 3450, 2400, [1500, 2300]),
      ...doorway(7350, 0, 7350, 2400, [1500, 2300]),
      ...doorway(12450, 0, 12450, 2400, [1300, 2200]),
      ...doorway(2450, 2500, 2450, 4900, [3900, 4700]),
      wall(6350, 2500, 6350, 4900),
      wall(9850, 2500, 9850, 4900),
      wall(14550, 2500, 14550, 4900),
    ],
  },
  {
    id: "studio",
    name: "the studio",
    who: "One person, one room. The bed, the desk and the kitchen share it.",
    origin: { x: -9.6, z: -0.8 },
    rot: 9,
    w: 6400,
    d: 5200,
    tone: { wall: "#f4eee3", cut: "#f6f1e7" },
    rooms: [
      {
        id: "studio.room",
        name: "The one room",
        line: "Everything happens in here: sleeping, working, calls, cooking.",
        home: "studio",
        x0: 0,
        x1: 6400,
        z0: 0,
        z1: 3800,
        floor: "plank",
        keeps: [
          { id: "bed", x: 200 },
          { id: "desk", x: 2000 },
          { id: "counter", x: 4800 },
        ],
        models: [
          { id: "dining_chair_02", x: 2600, z: 1100, rot: 190 },
          { id: "classic_laptop", x: 2600, z: 300, h: 735, rot: 180 },
          { id: "potted_plant_04", x: 5250, z: 3450, scale: 0.9 },
          { id: "painted_wooden_chair_02", x: 900, z: 3300, rot: 120 },
        ],
        spots: [
          spot("beside-desk", "wall", 3250, 0),
          spot("kitchen-end", "wall", 3900, 0),
          spot("by-the-door", "wall", 200, 3300, 90),
          spot("between", "floor", 1750, 900, 90),
          spot("behind-chair", "floor", 2400, 2300),
          // 1800 of folding screen along the east wall has to end before the bathroom
          spot("folded", "floor", 6000, 1850, 270),
        ],
      },
      {
        id: "studio.bath",
        name: "The bathroom",
        line: "A basin and a shower, and nowhere for the towels.",
        home: "studio",
        x0: 4400,
        x1: 6400,
        z0: 3900,
        z1: 5200,
        floor: "plaster",
        keeps: [{ id: "basin", x: 4600 }],
        spots: [spot("beside-basin", "wall", 5400, 0)],
      },
    ],
    walls: [
      wall(-100, -50, 6500, -50, "full"),
      // the west wall ends with the room: in front of it on that side is garden
      wall(-50, -100, -50, 3850),
      wall(6450, -100, 6450, 5200),
      ...doorway(4350, 3850, 4350, 5200, [4250, 5050]),
      wall(4400, 3850, 6400, 3850),
    ],
  },
  {
    id: "loft",
    name: "the loft",
    who: "Three flatmates who all work from home, in one big room.",
    origin: { x: 8, z: -4.6 },
    rot: -5,
    w: 12000,
    d: 8000,
    tone: { wall: "#f5f0e7", cut: "#f7f3ec" },
    rooms: [
      {
        id: "loft.main",
        name: "The big room",
        line: "Sofa, desks and kitchen in one space, and no way to close any of it.",
        home: "loft",
        x0: 0,
        x1: 9500,
        z0: 0,
        z1: 8000,
        floor: "plaster",
        keeps: [
          { id: "desk", x: 200 },
          { id: "desk", x: 1500 },
          { id: "desk", x: 2800 },
          { id: "counter", x: 5200 },
          { id: "counter", x: 6700 },
          { id: "tv", x: 8300 },
        ],
        models: [
          { id: "dining_chair_02", x: 800, z: 1150, rot: 180 },
          { id: "dining_chair_02", x: 2100, z: 1200, rot: 172 },
          { id: "dining_chair_02", x: 3400, z: 1150, rot: 188 },
          { id: "classic_laptop", x: 800, z: 300, h: 735, rot: 180 },
          { id: "classic_laptop", x: 3400, z: 300, h: 735, rot: 180 },
          { id: "desk_lamp_arm_01", x: 2300, z: 220, h: 735, rot: 30 },
          { id: "sofa_02", x: 4000, z: 4300, rot: 180 },
          { id: "modern_coffee_table_01", x: 4000, z: 5700 },
          {
            id: "book_encyclopedia_set_01",
            x: 4000,
            z: 5700,
            h: 430,
            scale: 0.7,
          },
          { id: "modern_arm_chair_01", x: 6300, z: 5300, rot: 215 },
          { id: "potted_plant_04", x: 9100, z: 7500 },
          { id: "potted_plant_04", x: 300, z: 7600, scale: 0.8 },
          { id: "ceramic_vase_01", x: 5800, z: 250, h: 900 },
        ],
        spots: [
          spot("behind-sofa", "floor", 3100, 3250),
          spot("middle", "floor", 5900, 2600),
          spot("corner", "floor", 200, 5200),
          spot("window", "floor", 7200, 6600),
          spot("kitchen", "floor", 5300, 1700),
          spot("party", "floor", 8000, 3700, 90),
          spot("desk-end", "wall", 4200, 0),
          spot("north-end", "wall", 4800, 0),
        ],
      },
      {
        id: "loft.bath",
        name: "The bathroom",
        line: "Three people's towels and one rail.",
        home: "loft",
        x0: 9600,
        x1: 12000,
        z0: 0,
        z1: 2000,
        floor: "plaster",
        keeps: [
          { id: "basin", x: 9800 },
          { id: "washer", x: 10700 },
        ],
        spots: [spot("beside-washer", "wall", 11400, 0)],
      },
      {
        id: "loft.bed",
        name: "The small bedroom",
        line: "A bed, a window and nothing else.",
        home: "loft",
        x0: 9600,
        x1: 12000,
        z0: 2100,
        z1: 8000,
        floor: "plaster",
        keeps: [{ id: "bed", x: 9800 }],
        spots: [
          spot("bedside", "wall", 11400, 0),
          spot("floor", "floor", 9800, 2400),
        ],
      },
    ],
    walls: [
      wall(-100, -50, 12100, -50, "full"),
      wall(-50, -100, -50, 8000),
      wall(12050, -100, 12050, 8000),
      ...doorway(9550, 0, 9550, 8000, [1000, 1800], [4200, 5100]),
      wall(9600, 2050, 12000, 2050),
    ],
  },
  {
    id: "family",
    name: "the family house",
    who: "Parents, two children and a cat. A hallway, three bedrooms and a garden.",
    origin: { x: -3.3, z: -28.8 },
    rot: 0,
    w: 13000,
    d: 9000,
    tone: { wall: "#f6efe3", cut: "#f7f2e8" },
    rooms: [
      {
        id: "family.hall",
        name: "The hallway",
        line: "Shoes, school bags, the pram and the cat, all in one corridor.",
        home: "family",
        x0: 0,
        x1: 3000,
        z0: 0,
        z1: 4600,
        floor: "plank",
        keeps: [{ id: "door", x: 1050 }],
        models: [
          { id: "wicker_basket_01", x: 2600, z: 4200, rot: 15, scale: 0.9 },
        ],
        spots: [
          spot("hall-wall", "wall", 100, 0),
          spot("hall-side", "wall", 100, 4400, 90),
          spot("hall-floor", "floor", 300, 1600),
        ],
      },
      {
        id: "family.kids",
        name: "The children's room",
        line: "Two beds, one room, no line between them.",
        home: "family",
        x0: 3100,
        x1: 8000,
        z0: 0,
        z1: 4600,
        floor: "plank",
        keeps: [
          { id: "smallbed", x: 3300 },
          { id: "smallbed", x: 6000 },
        ],
        models: [{ id: "wicker_basket_01", x: 5200, z: 3900, rot: -20 }],
        spots: [
          spot("kids-floor", "floor", 4500, 1200, 90),
          spot("kids-corner", "floor", 4400, 2800),
          spot("kids-wall", "wall", 7350, 0),
          spot("kids-door", "floor", 3200, 4000),
        ],
      },
      {
        id: "family.parents",
        name: "The parents' bedroom",
        line: "A bed and a chair, and clothes on the chair.",
        home: "family",
        x0: 8100,
        x1: 13000,
        z0: 0,
        z1: 4600,
        floor: "plank",
        keeps: [{ id: "bed", x: 8300 }],
        models: [
          { id: "painted_wooden_chair_02", x: 12400, z: 3800, rot: 150 },
        ],
        spots: [
          spot("parents-wall", "wall", 9900, 0),
          spot("parents-floor", "floor", 10200, 1800),
          spot("parents-corner", "floor", 12300, 3600, 270),
        ],
      },
      {
        id: "family.living",
        name: "The living room",
        line: "The sofa, the toys, and the friend who stays the night.",
        home: "family",
        x0: 0,
        x1: 6000,
        z0: 4700,
        z1: 9000,
        floor: "plank",
        keeps: [],
        models: [
          { id: "sofa_02", x: 3000, z: 2100 },
          { id: "modern_coffee_table_01", x: 3000, z: 3300 },
          { id: "potted_plant_04", x: 5600, z: 400 },
        ],
        spots: [
          spot("living-corner", "floor", 200, 200),
          spot("living-floor", "floor", 3600, 2700),
          spot("living-wall", "wall", 200, 0),
        ],
      },
    ],
    walls: [
      wall(-100, -50, 13100, -50, "full"),
      wall(-50, -100, -50, 9000),
      wall(13050, -100, 13050, 4600),
      ...doorway(3050, 0, 3050, 4600, [3500, 4350]),
      ...doorway(8050, 0, 8050, 4600, [3500, 4350]),
      ...doorway(-100, 4650, 13100, 4650, [1100, 2000]),
      ...doorway(6050, 4700, 6050, 9000, [6400, 7500]),
    ],
  },
  {
    id: "workshop",
    name: "our workshop",
    who: "Where the panels are cut and the boxes are packed. Ours.",
    origin: { x: 5.5, z: 14.6 },
    rot: -8,
    w: 8000,
    d: 5600,
    tone: { wall: "#f3ede2", cut: "#f5f0e6" },
    rooms: [
      {
        id: "workshop.floor",
        name: "The workshop",
        line: "Sheets come in, the router cuts twelve panels from each, and today's orders go out in boxes.",
        home: "workshop",
        x0: 0,
        x1: 8000,
        z0: 0,
        z1: 5600,
        floor: "plaster",
        keeps: [{ id: "workbench", x: 4650 }],
        floorKeeps: [
          { id: "sheetstack", x: 180, z: 1450 },
          { id: "cnc", x: 2300, z: 3800 },
          { id: "partscart", x: 5950, z: 1900 },
          { id: "panelrack", x: 6480, z: 3350 },
          { id: "packing", x: 250, z: 4560 },
          { id: "boxpallet", x: 3350, z: 120 },
        ],
        models: [
          { id: "rollershutter_door", x: 1250, z: 160, scale: 0.95 },
          { id: "metal_stool_01", x: 5700, z: 1350, rot: 30 },
          {
            id: "classic_laptop",
            x: 6500,
            z: 330,
            h: 905,
            rot: 180,
            scale: 0.9,
          },
          { id: "desk_lamp_arm_01", x: 4900, z: 250, h: 905, rot: 25 },
        ],
        spots: [
          spot("window", "wall", 2600, 0),
          spot("stand", "wall", 7250, 0),
          spot("floor", "floor", 5300, 2600),
          spot("niche", "floor", 2300, 3300),
          spot("bench-side", "floor", 3300, 2200),
        ],
      },
    ],
    walls: [
      wall(-100, -50, 8100, -50, "full"),
      wall(-50, -100, -50, 5600),
      wall(8050, -100, 8050, 5600),
    ],
  },
];

/* What makes rooms read as lived in rather than as a plan: something soft on
   the floor where people sit and sleep, something framed on the tall walls. */
const OAT = "#d9ccb4";
const SAND = "#cfb995";
const CLAY = "#cc9f80";
const SAGE = "#b4bb9a";

export const rugs: Rug[] = [
  { room: "flat.door", x: 1900, z: 1350, w: 2300, d: 800, tone: SAND },
  { room: "flat.living", x: 9050, z: 1550, w: 2700, d: 1500, tone: OAT },
  { room: "flat.bed", x: 5050, z: 1350, w: 1000, d: 1700, tone: OAT },
  { room: "flat.child", x: 8300, z: 1600, w: 1600, d: 1100, tone: CLAY },
  { room: "flat.desk", x: 10850, z: 1300, w: 1700, d: 1200, tone: SAGE },
  { room: "studio.room", x: 3100, z: 2500, w: 2600, d: 1600, tone: OAT },
  { room: "loft.main", x: 4800, z: 5300, w: 3800, d: 2500, tone: OAT },
  { room: "loft.bed", x: 10750, z: 3000, w: 1900, d: 1200, tone: SAND },
  { room: "family.hall", x: 1500, z: 2500, w: 900, d: 2800, tone: SAND },
  { room: "family.kids", x: 5350, z: 2900, w: 1900, d: 1500, tone: CLAY },
  { room: "family.parents", x: 10500, z: 3100, w: 2300, d: 1300, tone: OAT },
  { room: "family.living", x: 3000, z: 2800, w: 3200, d: 2000, tone: SAGE },
];

/* A workshop floor is drawn on: where to walk, where to keep clear, what each
   part of the floor is for. In our orange, because it is ours. Home mm, from
   the room's back wall. */
export type FloorLine = {
  room: PlaceId;
  x: number;
  z: number;
  w: number;
  d: number;
};
export type FloorWord = {
  room: PlaceId;
  x: number;
  z: number;
  text: string;
  size: number;
};

const frame = (
  room: PlaceId,
  x0: number,
  z0: number,
  x1: number,
  z1: number,
  t = 50,
): FloorLine[] => [
  { room, x: x0, z: z0, w: x1 - x0, d: t },
  { room, x: x0, z: z1 - t, w: x1 - x0, d: t },
  { room, x: x0, z: z0, w: t, d: z1 - z0 },
  { room, x: x1 - t, z: z0, w: t, d: z1 - z0 },
];

export const floorLines: FloorLine[] = [
  // keep clear in front of the shutter
  ...frame("workshop.floor", 150, 120, 2350, 1250),
  // where the sheets stand
  ...frame("workshop.floor", 90, 1350, 1560, 4060),
  // round the router
  ...frame("workshop.floor", 2100, 3560, 6350, 5560),
];

export const floorWords: FloorWord[] = [
  { room: "workshop.floor", x: 330, z: 860, text: "IN / OUT", size: 230 },
  { room: "workshop.floor", x: 4750, z: 1700, text: "FINISH", size: 230 },
];

export const art: Art[] = [
  { room: "flat.door", x: 2950, y: 1620, w: 480, h: 640, pic: 1 },
  { room: "flat.living", x: 8550, y: 1720, w: 1300, h: 860, pic: 0 },
  { room: "studio.room", x: 1050, y: 1720, w: 1000, h: 700, pic: 2 },
  { room: "loft.main", x: 800, y: 1760, w: 460, h: 600, pic: 1 },
  { room: "loft.main", x: 2100, y: 1760, w: 460, h: 600, pic: 3 },
  { room: "loft.main", x: 3400, y: 1760, w: 460, h: 600, pic: 2 },
  { room: "family.kids", x: 3800, y: 1560, w: 600, h: 600, pic: 3 },
  { room: "family.kids", x: 6500, y: 1560, w: 600, h: 600, pic: 1 },
  { room: "family.parents", x: 9200, y: 1760, w: 1300, h: 820, pic: 0 },
  // working drawings pinned over the bench
  { room: "workshop.floor", x: 5150, y: 1700, w: 700, h: 500, pic: 4 },
  { room: "workshop.floor", x: 6050, y: 1700, w: 700, h: 500, pic: 4 },
];

/** The strips of floor in the doorways: where two walls on one line leave a
    gap of a door's width. Home mm: the middle of the strip and its size. */
export function thresholds(h: Home) {
  const out: { x: number; z: number; w: number; d: number }[] = [];
  const lines = new Map<string, Wall[]>();
  for (const w of h.walls) {
    const along = w.z0 === w.z1;
    const key = along ? `z${w.z0}` : `x${w.x0}`;
    lines.set(key, [...(lines.get(key) ?? []), w]);
  }
  for (const [key, list] of lines) {
    const along = key.startsWith("z");
    const sorted = [...list].sort((p, q) =>
      along ? p.x0 - q.x0 : p.z0 - q.z0,
    );
    for (let i = 0; i + 1 < sorted.length; i++) {
      const a = sorted[i]!;
      const b = sorted[i + 1]!;
      const from = along ? a.x1 : a.z1;
      const to = along ? b.x0 : b.z0;
      if (to - from < 500 || to - from > 1400) continue;
      out.push(
        along
          ? { x: (from + to) / 2, z: a.z0, w: to - from, d: WALL_T }
          : { x: a.x0, z: (from + to) / 2, w: WALL_T, d: to - from },
      );
    }
  }
  return out;
}

export const homeOf = (id: HomeId | string | null | undefined) =>
  homes.find((h) => h.id === id);

export const allRooms: Room[] = homes.flatMap((h) => h.rooms);
export const roomOf = (id: PlaceId | string | null | undefined) =>
  allRooms.find((r) => r.id === id);
export const roomsOf = (home: HomeId) =>
  homes.find((h) => h.id === home)?.rooms ?? [];

/** where a body's local origin stands in the world, metres and radians */
export type Stand = { x: number; z: number; rot: number };

/** a home-local point (mm) in world metres */
export function homePoint(h: Home, lx: number, lz: number): [number, number] {
  const r = (h.rot * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  const x = mm(lx);
  const z = mm(lz);
  return [h.origin.x + x * c + z * s, h.origin.z - x * s + z * c];
}

export function standAt(r: Room, s: Spot): Stand {
  const h = homeOf(r.home);
  if (!h) throw new Error(`Room ${r.id} has no home`);
  const [x, z] = homePoint(h, s.x, r.z0 + s.z);
  return { x, z, rot: ((h.rot + s.rot) * Math.PI) / 180 };
}

/** a body-local point (metres: x right, y up, z toward you) placed in the world */
export function worldPoint(
  st: Stand,
  lx: number,
  ly: number,
  lz: number,
): [number, number, number] {
  const c = Math.cos(st.rot);
  const s = Math.sin(st.rot);
  return [st.x + lx * c + lz * s, ly, st.z - lx * s + lz * c];
}

/** the middle of a room, world metres, and how wide it is */
export function roomFrame(r: Room): {
  x: number;
  z: number;
  wide: number;
  deep: number;
} {
  const h = homeOf(r.home);
  if (!h) throw new Error(`Room ${r.id} has no home`);
  const [x, z] = homePoint(h, (r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2);
  return { x, z, wide: mm(r.x1 - r.x0), deep: mm(r.z1 - r.z0) };
}

export function homeFrame(h: Home): {
  x: number;
  z: number;
  wide: number;
  deep: number;
} {
  const [x, z] = homePoint(h, h.w / 2, h.d / 2);
  return { x, z, wide: mm(h.w), deep: mm(h.d) };
}

export const defaultKind = (family: string): Spot["kind"] =>
  family === "pieces" ? "wall" : "floor";

/* ---------- furniture the homes already have, beyond the house site's own ---------- */

const wood = "#c8a67a";
const linen = "#ede5d7";
const pillow = "#f7f2ea";
const white = "#f6f1ea";
const steel = "#c9cbcc";
const legDark = "#2f2b28";
const green = "#6d8b5a";
const clay = "#b9866a";

type B = {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  color: string;
  mat: string;
  geo?: "box" | "cylinder" | "sphere";
  /** which way a cylinder lies: along x, or along y (front to back) */
  axis?: "x" | "y";
};

function more(id: ExtraKeep, x: number, D: number): B[] {
  switch (id) {
    case "basin":
      return [
        // the cabinet, in the home's own oak, with two doors and their pulls
        {
          x,
          y: D - 470,
          z: 80,
          w: 600,
          d: 470,
          h: 700,
          color: wood,
          mat: "wood",
        },
        {
          x: x + 40,
          y: D - 440,
          z: 0,
          w: 520,
          d: 400,
          h: 80,
          color: "#3a3633",
          mat: "matte",
        },
        {
          x: x + 296,
          y: D - 474,
          z: 100,
          w: 8,
          d: 6,
          h: 660,
          color: "#8a6a48",
          mat: "matte",
        },
        {
          x: x + 250,
          y: D - 486,
          z: 560,
          w: 14,
          d: 14,
          h: 120,
          color: steel,
          mat: "metal",
        },
        {
          x: x + 336,
          y: D - 486,
          z: 560,
          w: 14,
          d: 14,
          h: 120,
          color: steel,
          mat: "metal",
        },
        // the ceramic top, and the bowl let into it
        {
          x: x - 20,
          y: D - 510,
          z: 780,
          w: 640,
          d: 510,
          h: 110,
          color: white,
          mat: "ceramic",
        },
        {
          x: x + 110,
          y: D - 440,
          z: 868,
          w: 420,
          d: 300,
          h: 24,
          color: "#d8d3cb",
          mat: "ceramic",
        },
        // the tap: a riser and a spout
        {
          x: x + 309,
          y: D - 95,
          z: 890,
          w: 22,
          d: 22,
          h: 190,
          color: steel,
          mat: "metal",
          geo: "cylinder",
        },
        {
          x: x + 311,
          y: D - 215,
          z: 1062,
          w: 18,
          d: 130,
          h: 18,
          color: steel,
          mat: "metal",
        },
      ];
    case "washer":
      return [
        {
          x,
          y: D - 600,
          z: 0,
          w: 600,
          d: 600,
          h: 850,
          color: white,
          mat: "paint",
        },
        // the door: a steel ring and dark glass, flat on the front
        {
          x: x + 95,
          y: D - 612,
          z: 215,
          w: 410,
          d: 14,
          h: 410,
          color: "#c9cdd0",
          mat: "metal",
          geo: "cylinder",
          axis: "y",
        },
        {
          x: x + 135,
          y: D - 618,
          z: 255,
          w: 330,
          d: 10,
          h: 330,
          color: "#2c3136",
          mat: "screen",
          geo: "cylinder",
          axis: "y",
        },
        // the panel: a drawer, a dial, a small display
        {
          x: x + 30,
          y: D - 604,
          z: 730,
          w: 190,
          d: 6,
          h: 80,
          color: "#e9e6e1",
          mat: "matte",
        },
        {
          x: x + 265,
          y: D - 612,
          z: 735,
          w: 70,
          d: 14,
          h: 70,
          color: "#c9cdd0",
          mat: "metal",
          geo: "cylinder",
          axis: "y",
        },
        {
          x: x + 380,
          y: D - 604,
          z: 748,
          w: 170,
          d: 6,
          h: 44,
          color: "#2c3136",
          mat: "screen",
        },
      ];
    /* ---- the workshop's own: what panels are cut, stacked and packed on ---- */
    case "workbench": {
      const out: B[] = [
        // a birch top on a dark steel frame, with a shelf under it
        {
          x,
          y: D - 900,
          z: 860,
          w: 2400,
          d: 900,
          h: 45,
          color: "#d9b98c",
          mat: "ply",
        },
        {
          x: x + 60,
          y: D - 840,
          z: 220,
          w: 2280,
          d: 780,
          h: 18,
          color: "#d9b98c",
          mat: "ply",
        },
      ];
      for (const [lx, ly] of [
        [40, 40],
        [2310, 40],
        [40, 810],
        [2310, 810],
      ] as const)
        out.push({
          x: x + lx,
          y: D - 900 + ly,
          z: 0,
          w: 50,
          d: 50,
          h: 860,
          color: "#3a3633",
          mat: "matte",
        });
      // a panel on the bench, and the one key beside it
      out.push({
        x: x + 520,
        y: D - 800,
        z: 905,
        w: 1200,
        d: 600,
        h: 18,
        color: "#d9b98c",
        mat: "ply",
      });
      out.push({
        x: x + 1900,
        y: D - 620,
        z: 905,
        w: 70,
        d: 8,
        h: 8,
        color: "#e7551a",
        mat: "paint",
      });
      out.push({
        x: x + 1962,
        y: D - 620,
        z: 905,
        w: 8,
        d: 60,
        h: 8,
        color: "#e7551a",
        mat: "paint",
      });
      // boxes of bolts on the shelf
      for (let i = 0; i < 3; i++)
        out.push({
          x: x + 200 + i * 420,
          y: D - 700,
          z: 238,
          w: 340,
          d: 260,
          h: 160,
          color: "#c9a877",
          mat: "matte",
        });
      return out;
    }
    case "panelstack": {
      // a pallet, and cut panels stacked on it: each sheet sits a hair off the last
      const out: B[] = [
        {
          x,
          y: D - 760,
          z: 0,
          w: 1340,
          d: 760,
          h: 110,
          color: "#b89468",
          mat: "wood",
        },
      ];
      for (let i = 0; i < 20; i++) {
        const dx = ((i * 37) % 13) - 6;
        const dy = ((i * 53) % 11) - 5;
        out.push({
          x: x + 60 + dx,
          y: D - 700 + dy,
          z: 110 + i * 18.5,
          w: 1220,
          d: 620,
          h: 18,
          color: "#d9b98c",
          mat: "ply",
        });
      }
      return out;
    }
    case "panelrack": {
      // board standing on edge in a steel rack, a finger apart
      const out: B[] = [
        {
          x,
          y: D - 640,
          z: 0,
          w: 1400,
          d: 640,
          h: 60,
          color: "#3a3633",
          mat: "matte",
        },
        {
          x,
          y: D - 640,
          z: 60,
          w: 40,
          d: 40,
          h: 1100,
          color: "#3a3633",
          mat: "matte",
        },
        {
          x: x + 1360,
          y: D - 640,
          z: 60,
          w: 40,
          d: 40,
          h: 1100,
          color: "#3a3633",
          mat: "matte",
        },
        {
          x,
          y: D - 40,
          z: 60,
          w: 40,
          d: 40,
          h: 1100,
          color: "#3a3633",
          mat: "matte",
        },
        {
          x: x + 1360,
          y: D - 40,
          z: 60,
          w: 40,
          d: 40,
          h: 1100,
          color: "#3a3633",
          mat: "matte",
        },
      ];
      for (let i = 0; i < 11; i++)
        out.push({
          x: x + 70 + ((i * 29) % 40),
          y: D - 600 + i * 52,
          z: 60,
          w: 1180 - ((i * 61) % 3) * 200,
          d: 18,
          h: 800 + ((i * 17) % 3) * 200,
          color: "#d9b98c",
          mat: "ply",
        });
      return out;
    }
    case "cnc": {
      /* The router the panels are cut on: a flat bed with a bridge over it. On
         the bed lies one birch sheet with its cuts marked: 2440 x 1220 gives
         four by three of our 600 x 400 panel, with a hand of waste. That is
         the whole system, and it is the one place the site can show it. */
      const W = 3300;
      const DP = 1750;
      const STEEL = "#dcd6cb";
      const DARK = "#38332f";
      const out: B[] = [
        // plinth, frame, the dark vacuum bed
        {
          x: x + 60,
          y: D - DP + 60,
          z: 0,
          w: W - 120,
          d: DP - 120,
          h: 90,
          color: DARK,
          mat: "matte",
        },
        {
          x,
          y: D - DP,
          z: 90,
          w: W,
          d: DP,
          h: 560,
          color: STEEL,
          mat: "paint",
        },
        {
          x: x + 40,
          y: D - DP + 40,
          z: 650,
          w: W - 80,
          d: DP - 80,
          h: 46,
          color: DARK,
          mat: "matte",
        },
        // the sheet
        {
          x: x + 320,
          y: D - DP + 265,
          z: 696,
          w: 2440,
          d: 1220,
          h: 18,
          color: "#d9b98c",
          mat: "ply",
        },
        // the rails the bridge runs on
        {
          x: x + 40,
          y: D - DP + 10,
          z: 650,
          w: W - 80,
          d: 60,
          h: 70,
          color: DARK,
          mat: "matte",
        },
        {
          x: x + 40,
          y: D - 70,
          z: 650,
          w: W - 80,
          d: 60,
          h: 70,
          color: DARK,
          mat: "matte",
        },
        // the bridge: two legs and a beam, the head on it in the brand's orange
        {
          x: x + 1180,
          y: D - DP - 40,
          z: 650,
          w: 240,
          d: 150,
          h: 560,
          color: "#f1ece3",
          mat: "paint",
        },
        {
          x: x + 1180,
          y: D - 110,
          z: 650,
          w: 240,
          d: 150,
          h: 560,
          color: "#f1ece3",
          mat: "paint",
        },
        {
          x: x + 1150,
          y: D - DP - 40,
          z: 1210,
          w: 300,
          d: DP + 80,
          h: 250,
          color: "#f1ece3",
          mat: "paint",
        },
        {
          x: x + 1120,
          y: D - DP + 520,
          z: 1010,
          w: 360,
          d: 330,
          h: 470,
          color: "#e7551a",
          mat: "paint",
        },
        {
          x: x + 1262,
          y: D - DP + 647,
          z: 760,
          w: 76,
          d: 76,
          h: 250,
          color: DARK,
          mat: "matte",
          geo: "cylinder",
        },
        // the cable chain along the back, and the desk it is run from
        {
          x: x + 60,
          y: D - DP - 70,
          z: 560,
          w: W - 120,
          d: 60,
          h: 90,
          color: DARK,
          mat: "matte",
        },
        {
          x: x + W + 120,
          y: D - 560,
          z: 0,
          w: 420,
          d: 420,
          h: 1020,
          color: STEEL,
          mat: "paint",
        },
        {
          x: x + W + 150,
          y: D - 545,
          z: 1020,
          w: 360,
          d: 40,
          h: 300,
          color: DARK,
          mat: "matte",
        },
      ];
      // the cuts: three across, four along, drawn on the sheet
      for (let i = 0; i <= 4; i++)
        out.push({
          x: x + 320 + 18 + i * 600,
          y: D - DP + 265 + 8,
          z: 714,
          w: 5,
          d: 1204,
          h: 1.5,
          color: "#8a6a44",
          mat: "matte",
        });
      for (let k = 0; k <= 3; k++)
        out.push({
          x: x + 320 + 18,
          y: D - DP + 265 + 8 + k * 400,
          z: 714,
          w: 2404,
          d: 5,
          h: 1.5,
          color: "#8a6a44",
          mat: "matte",
        });
      return out;
    }
    case "sheetstack": {
      // full sheets as they arrive, on a pallet, the long side toward the visitor
      const out: B[] = [
        {
          x,
          y: D - 2500,
          z: 0,
          w: 1280,
          d: 2500,
          h: 120,
          color: "#b89468",
          mat: "wood",
        },
      ];
      for (let i = 0; i < 16; i++) {
        const dx = ((i * 37) % 9) - 4;
        const dy = ((i * 53) % 9) - 4;
        out.push({
          x: x + 30 + dx,
          y: D - 2470 + dy,
          z: 120 + i * 18.4,
          w: 1220,
          d: 2440,
          h: 18,
          color: "#d9b98c",
          mat: "ply",
        });
      }
      return out;
    }
    case "partscart": {
      // cut panels, sorted, on a cart: three piles of our 600 x 400
      const out: B[] = [
        {
          x,
          y: D - 760,
          z: 150,
          w: 1960,
          d: 760,
          h: 40,
          color: "#38332f",
          mat: "matte",
        },
        {
          x: x + 1900,
          y: D - 760,
          z: 190,
          w: 40,
          d: 760,
          h: 760,
          color: "#38332f",
          mat: "matte",
        },
      ];
      for (const [wx, wy] of [
        [90, 90],
        [1790, 90],
        [90, 590],
        [1790, 590],
      ] as const)
        out.push({
          x: x + wx,
          y: D - 760 + wy,
          z: 0,
          w: 80,
          d: 80,
          h: 150,
          color: "#2f2b28",
          mat: "matte",
          geo: "cylinder",
        });
      [14, 9, 11].forEach((n, pile) => {
        for (let i = 0; i < n; i++) {
          const dx = ((i * 29 + pile * 7) % 7) - 3;
          out.push({
            x: x + 40 + pile * 620 + dx,
            y: D - 700 + (((i * 41) % 7) - 3),
            z: 190 + i * 18.4,
            w: 600,
            d: 400,
            h: 18,
            color: "#d9b98c",
            mat: "ply",
          });
        }
      });
      return out;
    }
    case "boxpallet": {
      // today's orders: flat boxes, taped in our orange, on a pallet by the door
      const out: B[] = [
        {
          x,
          y: D - 900,
          z: 0,
          w: 1240,
          d: 900,
          h: 120,
          color: "#b89468",
          mat: "wood",
        },
      ];
      const rows: [number, number, number][] = [
        [20, 20, 0],
        [640, 30, 0],
        [25, 470, 0],
        [630, 465, 0],
        [40, 30, 1],
        [650, 40, 1],
        [330, 470, 1],
        [300, 60, 2],
      ];
      for (const [bx, by, layer] of rows) {
        const z = 120 + layer * 172;
        out.push({
          x: x + bx,
          y: D - 900 + by,
          z,
          w: 580,
          d: 400,
          h: 170,
          color: "#c9a877",
          mat: "matte",
        });
        out.push({
          x: x + bx + 250,
          y: D - 900 + by - 1,
          z: z + 0.5,
          w: 80,
          d: 402,
          h: 170.5,
          color: "#e7551a",
          mat: "paint",
        });
      }
      return out;
    }
    case "packing": {
      const out: B[] = [
        {
          x,
          y: D - 760,
          z: 820,
          w: 1700,
          d: 760,
          h: 36,
          color: "#d9b98c",
          mat: "ply",
        },
        // flat cartons waiting, one made up, a roll of tape
        {
          x: x + 80,
          y: D - 700,
          z: 856,
          w: 900,
          d: 560,
          h: 90,
          color: "#c9a877",
          mat: "matte",
        },
        {
          x: x + 1080,
          y: D - 640,
          z: 856,
          w: 520,
          d: 420,
          h: 300,
          color: "#c9a877",
          mat: "matte",
        },
        {
          x: x + 1240,
          y: D - 170,
          z: 856,
          w: 110,
          d: 110,
          h: 50,
          color: "#e7551a",
          mat: "paint",
          geo: "cylinder",
        },
      ];
      for (const [lx, ly] of [
        [40, 40],
        [1610, 40],
        [40, 670],
        [1610, 670],
      ] as const)
        out.push({
          x: x + lx,
          y: D - 760 + ly,
          z: 0,
          w: 50,
          d: 50,
          h: 820,
          color: "#3a3633",
          mat: "matte",
        });
      return out;
    }
    case "smallbed":
      return [
        {
          x,
          y: D - 1800,
          z: 0,
          w: 900,
          d: 1800,
          h: 220,
          color: wood,
          mat: "wood",
        },
        {
          x: x + 25,
          y: D - 1775,
          z: 220,
          w: 850,
          d: 1750,
          h: 170,
          color: linen,
          mat: "duvet",
        },
        {
          x: x + 20,
          y: D - 1790,
          z: 390,
          w: 860,
          d: 1250,
          h: 90,
          color: "#e7dcc6",
          mat: "duvet",
        },
        {
          x: x + 120,
          y: D - 420,
          z: 390,
          w: 480,
          d: 340,
          h: 100,
          color: pillow,
          mat: "fabric",
        },
        {
          x: x + 950,
          y: D - 320,
          z: 0,
          w: 320,
          d: 320,
          h: 260,
          color: clay,
          mat: "fabric",
        },
      ];
    case "rail":
      return [
        {
          x,
          y: D - 40,
          z: 1000,
          w: 2000,
          d: 40,
          h: 40,
          color: legDark,
          mat: "metal",
        },
        ...[0, 400, 800, 1200, 1600, 1980].map((dx) => ({
          x: x + dx,
          y: D - 30,
          z: 0,
          w: 20,
          d: 20,
          h: 1000,
          color: legDark,
          mat: "metal",
        })),
        {
          x,
          y: D - 8,
          z: 60,
          w: 2000,
          d: 8,
          h: 900,
          color: "#dfe7ea",
          mat: "glass",
        },
      ];
    case "plant":
      return [
        {
          x,
          y: D - 420,
          z: 0,
          w: 380,
          d: 380,
          h: 340,
          color: clay,
          mat: "ceramic",
          geo: "cylinder",
        },
        {
          x: x + 40,
          y: D - 380,
          z: 340,
          w: 300,
          d: 300,
          h: 60,
          color: "#5b4636",
          mat: "matte",
          geo: "cylinder",
        },
        {
          x: x + 180,
          y: D - 240,
          z: 400,
          w: 22,
          d: 22,
          h: 700,
          color: "#4f6b3a",
          mat: "matte",
          geo: "cylinder",
        },
        {
          x: x - 60,
          y: D - 480,
          z: 900,
          w: 520,
          d: 500,
          h: 420,
          color: green,
          mat: "fabric",
          geo: "sphere",
        },
      ];
    case "deskchair":
      return [
        {
          x,
          y: D - 1250,
          z: 0,
          w: 480,
          d: 480,
          h: 30,
          color: legDark,
          mat: "metal",
          geo: "cylinder",
        },
        {
          x: x + 220,
          y: D - 1030,
          z: 30,
          w: 40,
          d: 40,
          h: 420,
          color: legDark,
          mat: "metal",
          geo: "cylinder",
        },
        {
          x: x + 10,
          y: D - 1240,
          z: 450,
          w: 460,
          d: 460,
          h: 70,
          color: "#5f6f7a",
          mat: "fabric",
        },
        {
          x: x + 30,
          y: D - 830,
          z: 520,
          w: 420,
          d: 40,
          h: 420,
          color: "#5f6f7a",
          mat: "fabric",
        },
      ];
    default:
      return [];
  }
}

const extras = new Set<string>([
  "basin",
  "washer",
  "smallbed",
  "rail",
  "plant",
  "deskchair",
  "workbench",
  "panelstack",
  "panelrack",
  "packing",
]);

/** every block of furniture a home has, in home mm (y runs toward the back edge of its room) */
export function homeKeeps(h: Home): { block: Block3D; zBack: number }[] {
  const out: { block: Block3D; zBack: number }[] = [];
  let n = 0;
  for (const r of h.rooms) {
    for (const k of r.keeps) {
      const list: Block3D[] = extras.has(k.id)
        ? more(k.id as ExtraKeep, k.x, KEEP_D).map((b, i) => ({
            key: `keep:${r.id}:${k.id}:${k.x}:${i}`,
            kind: "keep" as const,
            ...(b.geo ? { geo: b.geo } : {}),
            ...(b.axis ? { axis: b.axis } : {}),
            partId: null,
            group: null,
            x: b.x,
            y: b.y,
            z: b.z,
            w: b.w,
            d: b.d,
            h: b.h,
            color: b.color,
            opacity: 1,
            lift: 0,
            holes: null,
            order: n++,
            mat: b.mat,
          }))
        : homeBlocks(k.id as KeepId, k.x, KEEP_D).map((b) => ({
            ...b,
            key: `${r.id}:${k.x}:${b.key}`,
          }));
      for (const block of list) out.push({ block, zBack: r.z0 });
    }
    for (const k of r.floorKeeps ?? [])
      more(k.id, k.x, KEEP_D).forEach((b, i) =>
        out.push({
          block: {
            key: `floor:${r.id}:${k.id}:${k.x}:${i}`,
            kind: "keep" as const,
            ...(b.geo ? { geo: b.geo } : {}),
            ...(b.axis ? { axis: b.axis } : {}),
            partId: null,
            group: null,
            x: b.x,
            y: b.y,
            z: b.z,
            w: b.w,
            d: b.d,
            h: b.h,
            color: b.color,
            opacity: 1,
            lift: 0,
            holes: null,
            order: n++,
            mat: b.mat,
          },
          zBack: r.z0 + k.z,
        }),
      );
  }
  return out;
}

/** every real model in a home, with its home-local placement */
export function homeModels(h: Home): {
  key: string;
  id: ModelId;
  url: string;
  x: number;
  z: number;
  h: number;
  rot: number;
  scale: number;
}[] {
  const out: ReturnType<typeof homeModels> = [];
  for (const r of h.rooms)
    (r.models ?? []).forEach((m, i) =>
      out.push({
        key: `${r.id}:${m.id}:${i}`,
        id: m.id,
        url: `/models/${m.id}.glb`,
        x: m.x,
        z: r.z0 + m.z,
        h: m.h ?? 0,
        rot: ((m.rot ?? 0) * Math.PI) / 180,
        scale: m.scale ?? 1,
      }),
    );
  return out;
}

/* ---------- the neighbourhood ----------
   Not one road with homes tiled along it: a main street that bends, a lane
   that leaves it and climbs to a close with a green in the middle, and five
   homes around that T, each at its own angle and its own distance back. The
   rest of the neighbourhood is there too, but as an architect's model shows
   context: plain pale blocks and pale trees, so the five homes stay the ones
   that are real. */

/** a road: its centre line in world metres (front to back is +z), and widths */
export type Road = { line: [number, number][]; w: number; kerb: number };

export const ROADS: Road[] = [
  {
    // the main street
    line: [
      [-46, 12.2],
      [-34, 11.5],
      [-18, 10],
      [-4, 9.2],
      [8, 10],
      [20, 9],
      [34, 10.2],
      [46, 9.4],
      [58, 10],
    ],
    w: 4.2,
    kerb: 1.5,
  },
  {
    // the lane up to the close
    line: [
      [2.6, 8.2],
      [3.4, 3],
      [2.4, -3.5],
      [3.2, -9.5],
    ],
    w: 3.2,
    kerb: 1,
  },
];

/** the close at the top of the lane: a turning circle round a green */
export const CLOSE = { x: 3.2, z: -12.4, r: 4.8, green: 2.1 };

/** How far the visitor can carry the street. The point looked at stays inside
    the ring of the five homes, so one of them is always in the picture and
    there is no bare table to wander out onto. */
export const BOUNDS = { x0: -13, x1: 19, z0: -27, z1: 20 };

export type Scenery =
  | { kind: "tree"; x: number; z: number; size: number }
  | { kind: "lamp"; x: number; z: number; rot: number }
  | {
      /** a neighbour, as a model shows context: a plain block under a plain roof */
      kind: "block";
      x: number;
      z: number;
      w: number;
      d: number;
      h: number;
      rot: number;
    };

const block = (
  x: number,
  z: number,
  w: number,
  d: number,
  h: number,
  rot = 0,
): Scenery => ({ kind: "block", x, z, w, d, h, rot });
const tree = (x: number, z: number, size = 1): Scenery => ({
  kind: "tree",
  x,
  z,
  size,
});

export const scenery: Scenery[] = [
  // neighbours along the main street, west then east, north side then south
  block(-23, 2.4, 8, 7, 3.2, 6),
  block(-35, 3.4, 9, 8, 3.6, -3),
  block(-47, 3, 8, 7, 3.2, 4),
  block(-28, 19.2, 10, 7, 3.4, 3),
  block(-40, 20.4, 8, 8, 3.8, -4),
  block(29, 1.2, 9, 8, 3.6, -4),
  block(40, 2, 8, 7, 3.2, 5),
  block(52, 1.9, 9, 7, 3.4, -2),
  block(20.5, 19, 9, 7, 3.4, -6),
  block(31.5, 18, 10, 8, 3.6, 2),
  block(43, 18.6, 8, 7, 3.2, -3),
  // up the lane and round the close
  block(-33, -21.5, 9, 7, 3.4, -8),
  block(-24, -30, 8, 8, 3.6, 4),
  block(17, -17.5, 9, 7, 3.4, 10),
  block(19, -28, 8, 7, 3.2, -5),
  block(27, -12, 9, 8, 3.6, 3),
  block(-27, -10, 8, 7, 3.2, 8),
  // behind the family house
  block(-3, -40, 10, 7, 3.4, 0),
  block(10, -41, 9, 8, 3.6, 6),
  block(-16, -36, 8, 7, 3.2, -6),
  block(24, -38, 9, 7, 3.4, -4),
  // Nothing is built south of the flat and the workshop: that is where the
  // visitor looks from, and a roof there would fill the bottom of the picture.
  // Their gardens run down to a back lane instead.
  // Trees: on the green, along the lane and the street, in the gardens. They
  // stand still, so none is planted between a home's open side and where the
  // visitor looks from (checked by walking every home's view corridor).
  tree(CLOSE.x, CLOSE.z, 1.0),
  tree(-1.5, -3.6, 0.9),
  tree(-1.0, -7.4, 1.05),
  tree(8.8, -7.6, 0.85),
  tree(-8.5, -25.5, 1.1),
  tree(13.2, -22.5, 1.0),
  tree(-17, -1.5, 1.0),
  tree(-15.5, -5, 1.15),
  tree(12.5, -9.6, 0.9),
  tree(18.5, -10, 1.0),
  tree(22.9, -2.4, 0.8),
  tree(-21.2, 6.2, 0.9),
  tree(35, 6.2, 1.05),
  tree(-22, 14.3, 1.0),
  tree(17.5, 13.4, 0.9),
  tree(25.7, 13.5, 0.9),
  tree(38, 13.6, 0.95),
  tree(-17.5, 25.6, 1.1),
  tree(-1.6, 27.2, 0.9),
  tree(15, 26.8, 1.0),
  tree(24, 26.2, 1.1),
  tree(-23, 24.5, 1.0),
  // lamps: the street, the lane, the close
  { kind: "lamp", x: -17.5, z: 6.3, rot: 0 },
  { kind: "lamp", x: 23.5, z: 5.9, rot: 0 },
  { kind: "lamp", x: 30, z: 6.4, rot: 0 },
  { kind: "lamp", x: -21, z: 13.6, rot: 180 },
  { kind: "lamp", x: 1.8, z: 13.2, rot: 180 },
  { kind: "lamp", x: 24, z: 13.1, rot: 180 },
  { kind: "lamp", x: 0.6, z: 0.5, rot: 90 },
  { kind: "lamp", x: 5.8, z: -6.4, rot: -90 },
  { kind: "lamp", x: 9.6, z: -11.4, rot: -90 },
];
