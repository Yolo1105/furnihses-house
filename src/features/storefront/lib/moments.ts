import type { Lens } from "./catalog";

/**
 * A moment is a spot in a home and what happens there. It is drawn, not
 * described: each one has a wall, a floor depth, and a layout of the things
 * that are already there, with a slot for the piece. Nothing here diagnoses
 * the visitor's home: it shows a spot most homes have, and they say whether
 * it is a bit like theirs.
 */
export type KeepId =
  | "door"
  | "chair"
  | "desk"
  | "bed"
  | "sofa"
  | "counter"
  | "tv";

export const keepNames: Record<KeepId, string> = {
  door: "the door",
  chair: "a chair",
  desk: "my desk",
  bed: "the bed",
  sofa: "the sofa",
  counter: "the counter",
  tv: "the TV",
};

export type Moment = {
  id: string;
  spot: string;
  room: string;
  title: string;
  now: string;
  could: string;
  /** the sentence for an alternative piece shown in the same place */
  couldFor?: Record<string, string>;
  pieces: string[];
  lenses: Lens[];
  does: string[];
  /** position on the 2D home map, in map units (0–100) */
  map: { x: number; y: number };
  line: "small" | "wall";
  /** the drawn spot */
  wall: number; // mm along the wall
  depth: number; // mm of floor shown
  layout: (KeepId | "piece")[]; // left to right along the wall
};

export const moments: Moment[] = [
  {
    id: "chair-by-the-door",
    spot: "The chair by the door",
    room: "Entryway",
    title: "That chair by the door",
    now: "A chair nobody sits on, wearing a coat and holding a bag.",
    could:
      "One panel with hooks and a shoe shelf beside it. The chair goes back to being a chair.",
    pieces: ["entry", "bench"],
    couldFor: {
      bench:
        "A bench with storage under the seat. Sit to put your shoes on; the chair goes back to being a chair.",
    },
    lenses: ["nothing-yet", "everything-stays", "moves-with-you"],
    does: ["hang", "put down"],
    map: { x: 12, y: 78 },
    line: "small",
    wall: 2600,
    depth: 1200,
    layout: ["door", "piece", "chair"],
  },
  {
    id: "desk-side",
    spot: "Beside the desk",
    room: "Workspace",
    title: "The desk you already like",
    now: "The desk is fine. The desk is also under a monitor, a charger, headphones and three cables.",
    could:
      "An organiser stands beside it. Nothing attaches to the desk. The desktop comes back.",
    pieces: ["desk", "work-cart"],
    couldFor: {
      "work-cart":
        "A trolley on casters parks beside the desk and rolls away when you need the floor.",
    },
    lenses: ["everything-stays", "moves-with-you"],
    does: ["hang", "put down", "charge", "work"],
    map: { x: 74, y: 30 },
    line: "small",
    wall: 2400,
    depth: 1400,
    layout: ["desk", "piece"],
  },
  {
    id: "bedside",
    spot: "Beside the bed",
    room: "Bedroom",
    title: "The last thing at night",
    now: "A phone on the floor. A glass on a book. A lamp on a box.",
    could:
      "A 40 cm block with a top and one open compartment. Or a door, if you'd rather not see inside.",
    pieces: ["bedside"],
    lenses: ["nothing-yet", "everything-stays", "moves-with-you"],
    does: ["put down", "hide", "charge"],
    map: { x: 30, y: 26 },
    line: "small",
    wall: 2400,
    depth: 2300,
    layout: ["bed", "piece"],
  },
  {
    id: "kitchen-counter",
    spot: "The kitchen counter",
    room: "Kitchen & dining",
    title: "Thirty centimetres of counter",
    now: "The rice cooker, the kettle and the chopping board share the only free stretch.",
    could:
      "A trolley with a worktop rolls in when you cook and out when you don't.",
    pieces: ["kitchen", "island"],
    couldFor: {
      island:
        "Two bays under one worktop. More counter, on casters, where the cooking happens.",
    },
    lenses: ["everything-stays", "moves-with-you"],
    does: ["put down", "work"],
    map: { x: 52, y: 80 },
    line: "small",
    wall: 2400,
    depth: 1300,
    layout: ["counter", "piece"],
  },
  {
    id: "shared-bedroom",
    spot: "The shared room",
    room: "Shared spaces",
    title: "One room, two people",
    now: "A bed on each side and a line down the middle nobody can see.",
    could:
      "A double-sided bookcase makes the line real. Books on both sides, no drilling, no contractor.",
    pieces: ["bookcase", "mobile-screen", "folding-screen"],
    couldFor: {
      "mobile-screen":
        "A screen on casters. A quiet face on one side, storage on the other, moved by hand.",
      "folding-screen":
        "Three framed leaves on hinges. A soft line across the room that folds flat when guests come.",
    },
    lenses: ["nothing-yet", "everything-stays", "moves-with-you"],
    does: ["divide", "display"],
    map: { x: 52, y: 40 },
    line: "wall",
    wall: 4600,
    depth: 2300,
    layout: ["bed", "piece", "bed"],
  },
  {
    id: "video-call-corner",
    spot: "Behind the camera",
    room: "Workspace",
    title: "What the camera sees",
    now: "The call sees the laundry rack, the bed, the door.",
    could:
      "A mobile screen with a quiet face rolls behind your chair. Storage on your side.",
    pieces: ["mobile-screen"],
    lenses: ["moves-with-you", "everything-stays"],
    does: ["divide", "hang"],
    map: { x: 88, y: 56 },
    line: "wall",
    wall: 2400,
    depth: 1600,
    layout: ["desk", "piece"],
  },
  {
    id: "living-wall",
    spot: "The long wall",
    room: "Living room",
    title: "The long empty wall",
    now: "A TV and a lot of nothing. Things pile on the floor beside it.",
    could: "Three bays low along the wall. Open, doors, or both.",
    pieces: ["sideboard", "bookcase"],
    couldFor: {
      bookcase:
        "A double-sided bookcase stands against the wall now and steps out to divide the room later.",
    },
    lenses: ["nothing-yet", "everything-stays"],
    does: ["hide", "display", "put down"],
    map: { x: 24, y: 55 },
    line: "small",
    wall: 3400,
    depth: 1400,
    layout: ["tv", "piece"],
  },
  {
    id: "new-workspace",
    spot: "The empty corner",
    room: "Workspace",
    title: "A corner with nothing in it yet",
    now: "You've just moved in. The corner is waiting for a desk.",
    could:
      "A desk and an organiser body that arrive as one flat delivery and go up in an evening.",
    pieces: ["workstation"],
    lenses: ["nothing-yet"],
    does: ["work", "hang", "charge"],
    map: { x: 88, y: 12 },
    line: "small",
    wall: 2400,
    depth: 1600,
    layout: ["piece"],
  },
];

export const getMoment = (id: string) => moments.find((m) => m.id === id);

/** Home page spot map uses the first five moments. */
export const heroMoments = moments.slice(0, 5);
