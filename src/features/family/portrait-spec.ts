import type { FamilyId } from "./data";

/* How the sixty portraits are taken. The studio shoots with these numbers and
   the index page lays the pictures out with the same ones, so a ruler drawn on
   the page measures what is in the picture. */

/** px per mm in the saved picture; the page shows them at half this */
export const PORTRAIT_SCALE: Record<FamilyId, number> = {
  pieces: 0.5,
  walls: 0.32,
  screens: 0.4,
};

/** where the eye stands: the street's own showing angle, a little lower */
export const PORTRAIT_AZ = (-28 * Math.PI) / 180;
export const PORTRAIT_EL = (24 * Math.PI) / 180;

/** px of floor kept under the corner nearest the eye: the same for all, so they line up */
export const PORTRAIT_FLOOR = 36;
