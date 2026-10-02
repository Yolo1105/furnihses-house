/** The rooms the site shows, in order, and their URL slugs. Server-safe. */
export const roomOrder = [
  "Entryway",
  "Bedroom",
  "Workspace",
  "Kitchen & dining",
  "Living room",
  "Shared spaces",
];

export const roomSlug = (room: string) =>
  room.toLowerCase().replace(/[^a-z]+/g, "-");

export const roomFromSlug = (slug: string) =>
  roomOrder.find((r) => roomSlug(r) === slug);

/** "most entryways have", "for the entryway" */
export const roomNoun: Record<string, { plural: string; the: string }> = {
  Entryway: { plural: "entryways", the: "the entryway" },
  Bedroom: { plural: "bedrooms", the: "the bedroom" },
  Workspace: { plural: "workspaces", the: "a workspace" },
  "Kitchen & dining": { plural: "kitchens", the: "the kitchen" },
  "Living room": { plural: "living rooms", the: "the living room" },
  "Shared spaces": { plural: "shared rooms", the: "a shared room" },
};
