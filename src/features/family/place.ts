import {
  allRooms,
  defaultKind,
  roomOf,
  standAt,
  type Room,
  type Spot,
  type Stand,
} from "./town";
import {
  families,
  lifeOf,
  type Body,
  type Family,
  type Life,
  type Look,
  type PlaceId,
} from "./data";
import { outfitFor } from "./outfit";

export type Placed = { room: Room; spot: Spot; stand: Stand; look: Look };

/** mm: whether a body this size stands inside the room from that spot */
function fits(r: Room, s: Spot, width: number, depth: number) {
  const x = s.x - r.x0;
  const roomW = r.x1 - r.x0;
  const roomD = r.z1 - r.z0;
  if (s.rot === 0) return x + width <= roomW + 60 && s.z + depth <= roomD + 60;
  if (s.rot === 90) return s.z - width >= -60 && x + depth <= roomW + 60;
  return s.z + width <= roomD + 60 && x - depth >= -60;
}

/**
 * Where every body stands, and therefore what it wears. A body goes to the
 * room of the life asked for, on the spot that life names or the first free
 * spot that fits. If that room has no place for it, it wears another of its
 * lives, in a room that does. Two bodies never share a spot. The bodies the
 * chosen room asked for take their spots first.
 */
export type Taken = Map<string, Set<string>>;

export function placeBodies(
  family: Family,
  wanted: Record<string, Look>,
  caseId: PlaceId | null,
  before?: Record<string, Placed>,
  taken: Taken = new Map(),
): Record<string, Placed> {
  const out: Record<string, Placed> = {};
  const take = (r: Room, s: Spot) => {
    const set = taken.get(r.id) ?? new Set<string>();
    set.add(s.id);
    taken.set(r.id, set);
  };
  const free = (r: Room, s: Spot) => !(taken.get(r.id)?.has(s.id) ?? false);
  const kind = defaultKind(family.id);

  const tryLife = (bodyId: string, life: Life, look: Look): Placed | null => {
    const body = family.bodies.find((b) => b.id === bodyId);
    if (!body) return null;
    const r = roomOf(life.caseId);
    if (!r) return null;
    const o = outfitFor(family, body, look);
    const named = life.spot
      ? r.spots.find((s) => s.id === life.spot)
      : undefined;
    // pieces stand against walls and may use the floor; walls and screens only the floor
    const candidates = [
      ...(named ? [named] : []),
      ...r.spots.filter((s) => s.kind === kind),
      ...(family.id === "pieces" ? r.spots : []),
    ];
    const spot = candidates.find(
      (s) => free(r, s) && fits(r, s, o.width, o.depth),
    );
    if (!spot) return null;
    return { room: r, spot, stand: standAt(r, spot), look };
  };

  const order = [...family.bodies].sort((a, b) => {
    const la = lifeOf(a, wanted[a.id]?.lifeId ?? null);
    const lb = lifeOf(b, wanted[b.id]?.lifeId ?? null);
    const pa = la?.caseId === caseId ? 0 : 1;
    const pb = lb?.caseId === caseId ? 0 : 1;
    return pa - pb;
  });

  // first, whoever is not asked to change keeps its spot
  for (const b of order) {
    const w = wanted[b.id];
    const was = before?.[b.id];
    if (!w || !was || was.look.lifeId !== w.lifeId) continue;
    if (free(was.room, was.spot)) {
      take(was.room, was.spot);
      out[b.id] = { ...was, look: w };
    }
  }
  for (const b of order) {
    if (out[b.id]) continue;
    const w = wanted[b.id];
    if (!w) continue;
    const first = lifeOf(b, w.lifeId) ?? b.lives[0];
    if (!first) continue;
    const others = b.lives.filter((l) => l.id !== first.id && !l.grownFrom);
    let placed: Placed | null = tryLife(b.id, first, w);
    for (const l of others) {
      if (placed) break;
      placed = tryLife(b.id, l, { lifeId: l.id, doors: false });
    }
    if (!placed) {
      // Nowhere it lives has room: the nearest free floor in the same home.
      // Never another home: a studio's screen in the flat's hallway is wrong,
      // however free that floor is.
      const body = family.bodies.find((x) => x.id === b.id);
      const o = body ? outfitFor(family, body, w) : null;
      const home = roomOf(first.caseId) ?? allRooms[0]!;
      const byDistance = allRooms
        .filter((r) => r.home === home.home)
        .sort((a, c) => Math.abs(a.x0 - home.x0) - Math.abs(c.x0 - home.x0));
      for (const r of byDistance) {
        const s = r.spots.find(
          (sp) =>
            sp.kind === "floor" &&
            free(r, sp) &&
            (!o || fits(r, sp, o.width, o.depth)),
        );
        if (s) {
          placed = { room: r, spot: s, stand: standAt(r, s), look: w };
          break;
        }
      }
    }
    if (!placed) {
      const r = roomOf(first.caseId) ?? allRooms[0]!;
      const any = r.spots.find((s) => free(r, s)) ?? r.spots[0]!;
      placed = { room: r, spot: any, stand: standAt(r, any), look: w };
    }
    take(placed.room, placed.spot);
    out[b.id] = placed;
  }
  return out;
}

export type StaticBody = { family: Family; body: Body; placed: Placed };

/**
 * The whole street at once: the family being browsed is placed first and
 * animates; the other two stand still in their own homes, wearing the life
 * they live at home, on whatever spots are left.
 */
export function placeStreet(
  active: Family,
  wanted: Record<string, Look>,
  caseId: PlaceId | null,
  before?: Record<string, Placed>,
): { placed: Record<string, Placed>; statics: StaticBody[] } {
  const taken: Taken = new Map();
  const placed = placeBodies(active, wanted, caseId, before, taken);
  const statics: StaticBody[] = [];
  for (const f of families) {
    if (f.id === active.id) continue;
    const homeLooks: Record<string, Look> = {};
    for (const b of f.bodies)
      homeLooks[b.id] = { lifeId: b.lives[0]?.id ?? null, doors: false };
    const p = placeBodies(f, homeLooks, null, undefined, taken);
    for (const b of f.bodies) {
      const pl = p[b.id];
      if (pl) statics.push({ family: f, body: b, placed: pl });
    }
  }
  return { placed, statics };
}
