import { familyOf, places, type FamilyId, type PlaceId } from "./data";

export type StreetQuery = {
  case?: string;
  focus?: string;
  job?: string;
  life?: string;
};

/** Where each family opens: a room where it is already standing, dressed.
    (The same rooms the page's one move by itself starts from.) */
const firstCase: Record<FamilyId, PlaceId> = {
  pieces: "flat.door",
  walls: "family.kids",
  screens: "loft.main",
};

/** What the street needs to open: from the address, checked against the data. */
export function streetProps(familyId: FamilyId, q: StreetQuery) {
  const f = familyOf(familyId);
  if (!f) return null;
  const initialCase: PlaceId =
    places.find((c) => c.id === q.case)?.id ?? firstCase[f.id];
  const focus = f.bodies.some((b) => b.id === q.focus)
    ? (q.focus ?? null)
    : null;
  // a version named by the shop: the frame arrives wearing it
  const life =
    f.bodies
      .find((b) => b.id === focus)
      ?.lives.find((l) => l.id === q.life && l.caseId === initialCase)?.id ??
    null;
  return {
    familyId: f.id,
    initialCase,
    initialFocus: focus,
    initialJob: typeof q.job === "string" ? q.job : null,
    initialLife: life,
    given: places.some((c) => c.id === q.case),
  };
}
