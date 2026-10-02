import type { PlaceId } from "./town";

/* A room in your home, not a room in one of ours.

   The street has eighteen rooms because it has five homes, and two of them are
   called "The bathroom". As a way of saying where a design belongs that is
   fine — you are looking at the flat, or at the family house. As something to
   filter a catalogue by it is useless: nobody is shopping for "the loft's big
   room", and a list that offers "In the living room" and "The living room" as
   two different answers is not a list anyone can use.

   So the eighteen fold onto nine kinds of room that a visitor can recognise as
   one of their own. The street keeps its own names; only the shop reads these. */

export type RoomKindId =
  | "entrance"
  | "kitchen"
  | "living"
  | "bedroom"
  | "children"
  | "bathroom"
  | "balcony"
  | "openplan"
  | "workshop";

export type RoomKind = {
  id: RoomKindId;
  /** what it is called in a filter, in the visitor's home */
  name: string;
  /** the rooms of the street it stands for */
  rooms: PlaceId[];
};

export const roomKinds: RoomKind[] = [
  {
    id: "entrance",
    name: "A hallway or an entrance",
    rooms: ["flat.door", "family.hall"],
  },
  { id: "kitchen", name: "A kitchen", rooms: ["flat.kitchen"] },
  {
    id: "living",
    name: "A living room",
    rooms: ["flat.living", "family.living"],
  },
  {
    id: "bedroom",
    name: "A bedroom",
    rooms: ["flat.bed", "loft.bed", "family.parents"],
  },
  {
    id: "children",
    name: "A child's room",
    rooms: ["flat.child", "family.kids"],
  },
  {
    id: "bathroom",
    name: "A bathroom",
    rooms: ["flat.bath", "studio.bath", "loft.bath"],
  },
  { id: "balcony", name: "A balcony", rooms: ["flat.balcony"] },
  {
    /* the studio's one room and the loft's big room are the same problem: one
       room that has to be several, which is where most of the walls live */
    id: "openplan",
    name: "One room that is everything",
    rooms: ["studio.room", "loft.main"],
  },
  {
    id: "workshop",
    name: "A workshop or a study",
    rooms: ["workshop.floor", "flat.desk"],
  },
];

const byRoom = new Map<PlaceId, RoomKindId>(
  roomKinds.flatMap((k) => k.rooms.map((r) => [r, k.id] as const)),
);

/** which kind of room one of the street's rooms is */
export const roomKindOf = (id: PlaceId | null): RoomKindId | null =>
  id ? (byRoom.get(id) ?? null) : null;

export const roomKindName = (id: RoomKindId | null) =>
  roomKinds.find((k) => k.id === id)?.name ?? null;
