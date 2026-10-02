import { billOfParts, difference } from "../storefront/lib/assembly";
import { propsForPiece } from "../storefront/lib/props";
import { counts } from "../storefront/lib/steps";
import {
  placementBlocks,
  propBlocks,
  type Block3D,
} from "../storefront/lib/three/blocks";
import { detailBlocks } from "../house/detail";
import { realise, type PropBlock } from "./prop-models";
import {
  lifeOf,
  resolveLife,
  type Body,
  type Build,
  type Family,
  type Look,
} from "./data";

/** What is left when a body wears nothing: base, carcass, top. */
const DRESS_GROUPS = ["Shelves", "Doors", "Desk", "Accessories", "Connections"];

const HANGS = new Set(["coat", "bag", "towel", "headphones"]);

export type Outfit = {
  parts: Block3D[];
  props: PropBlock[];
  width: number;
  depth: number;
  height: number;
  /** mm, left edge relative to the body's place */
  left: number;
};

const cache = new Map<string, Outfit>();
let serial = 0;

function buildFor(family: Family, body: Body, look: Look): Build {
  const life = lifeOf(body, look.lifeId) ?? body.lives[0];
  if (!life) throw new Error(`Body ${body.id} has no lives`);
  return resolveLife(life, family.strip);
}

export function outfitFor(family: Family, body: Body, look: Look): Outfit {
  const key = `${family.id}|${body.id}|${look.lifeId ?? "bare"}|${look.doors ? 1 : 0}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const bare = look.lifeId === null;
  const b = buildFor(family, body, look);
  const parts: Block3D[] = [];
  const props: Outfit["props"] = [];
  b.placements.forEach((pl, i) => {
    const doors = look.doors || pl.config.storage === "doors";
    const config =
      doors && pl.product.door && !bare
        ? { ...pl.config, storage: "doors" as const }
        : { ...pl.config, storage: "open" as const };
    parts.push(
      ...detailBlocks(
        placementBlocks(
          {
            key: `${body.id}:${i}`,
            product: pl.product,
            config,
            x: pl.x,
            ...(pl.y !== undefined ? { y: pl.y } : {}),
            ...(pl.rot ? { rot: pl.rot } : {}),
          },
          {
            depthMm: family.strip,
            hideGroups: bare ? DRESS_GROUPS : undefined,
          },
        ),
      ),
    );
    if (!bare && pl.props && !pl.rot) {
      const py = pl.y ?? family.strip - (pl.product.depth ?? 400);
      // A list of things written for a two-bay body is also used on walls of
      // other widths and stepped heights: what would stand on a shelf that is
      // not there is left out.
      const several = b.placements.length > 1;
      const held = (bl: Block3D) =>
        !several ||
        b.placements.some(
          (q) =>
            !q.rot &&
            bl.x + bl.w / 2 >= q.x &&
            bl.x + bl.w / 2 <= q.x + q.product.width &&
            bl.z <= q.product.height + 300,
        );
      props.push(
        ...propBlocks(
          propsForPiece(pl.props, pl.product.height),
          { x: pl.x, y: py },
          `${body.id}:${look.lifeId}:${i}`,
        )
          .filter(held)
          .map((bl) => ({
            ...bl,
            hangs: HANGS.has(bl.key.split(":").pop() ?? ""),
          })),
      );
    }
  });
  if (!bare)
    for (const bd of b.boards)
      parts.push({
        key: `${body.id}:board:${bd.id}:${serial++}`,
        kind: "part",
        partId: bd.id,
        group: "Top",
        x: bd.x,
        y: bd.y,
        z: bd.z,
        w: bd.w,
        d: bd.d,
        h: bd.h,
        color: bd.color ?? "#d9b98c",
        opacity: 1,
        lift: 0,
        holes: null,
        order: serial++,
        ...(bd.color ? { mat: "paint" } : {}),
      });
  const out: Outfit = {
    parts,
    props: realise(props),
    width: b.width,
    depth: b.depth,
    height: b.height,
    left: b.left,
  };
  cache.set(key, out);
  return out;
}

const geoKey = (b: Block3D) =>
  [b.partId, b.x, b.y, b.z, b.w, b.d, b.h, b.color, b.geo ?? "box"].join("|");

export type Change = {
  kept: Block3D[];
  off: Block3D[];
  on: Block3D[];
};

/** Which blocks stay where they are, which leave and which arrive. */
export function changeBetween(from: Outfit | null, to: Outfit): Change {
  if (!from) return { kept: to.parts, off: [], on: [] };
  const a = new Map(from.parts.map((b) => [geoKey(b), b]));
  const b = new Map(to.parts.map((bl) => [geoKey(bl), bl]));
  return {
    kept: to.parts.filter((bl) => a.has(geoKey(bl))),
    on: to.parts.filter((bl) => !a.has(geoKey(bl))),
    off: from.parts.filter((bl) => !b.has(geoKey(bl))),
  };
}

type Row = ReturnType<typeof billOfParts>[number];

/** The bill of parts for a whole build: every placement, plus its boards. */
function billOfBuild(b: Build, doors: boolean): Row[] {
  const map = new Map<string, Row>();
  const put = (r: Row) => {
    const old = map.get(r.id);
    if (old) old.quantity += r.quantity;
    else map.set(r.id, { ...r });
  };
  for (const pl of b.placements) {
    const config =
      (doors || pl.config.storage === "doors") && pl.product.door
        ? { ...pl.config, storage: "doors" as const }
        : { ...pl.config, storage: "open" as const };
    for (const r of billOfParts(pl.product, config)) put(r);
  }
  for (const bd of b.boards)
    put({
      id: bd.id,
      name: bd.name,
      quantity: 1,
      spec: `${bd.w} × ${bd.d} × ${bd.h} mm`,
      group: "Top",
      kind: "panel",
    });
  return [...map.values()];
}

export type Tally = {
  stay: number;
  off: number;
  on: number;
  offNames: string[];
  onNames: string[];
};

/** The same change, counted in real parts from the bill of parts. */
export function tallyBetween(
  family: Family,
  body: Body,
  from: Look,
  to: Look,
): Tally {
  const lifeA = lifeOf(body, from.lifeId);
  const lifeB = lifeOf(body, to.lifeId);
  if (!lifeA || !lifeB)
    return { stay: 0, off: 0, on: 0, offNames: [], onNames: [] };
  const quantity = lifeB.grownFrom === lifeA.id ? (lifeB.quantity ?? 1) : 1;
  const rows = difference(
    billOfBuild(resolveLife(lifeA, family.strip), from.doors),
    billOfBuild(resolveLife(lifeB, family.strip), to.doors),
    quantity,
  );
  const names = (k: "added" | "removed") =>
    rows
      .filter((r) => r[k] > 0)
      .map((r) => `${r[k] > 1 ? `${r[k]} × ` : ""}${r.name.toLowerCase()}`);
  return {
    stay: rows.reduce((s, r) => s + r.kept, 0),
    off: rows.reduce((s, r) => s + r.removed, 0),
    on: rows.reduce((s, r) => s + r.added, 0),
    offNames: names("removed"),
    onNames: names("added"),
  };
}

/** Parts, bolts and minutes for a whole build: the sum of its placements. */
export function buildCounts(b: Build) {
  let parts = 0;
  let bolts = 0;
  let minutes = 0;
  let people: 1 | 2 = 1;
  for (const pl of b.placements) {
    const c = counts(pl.product, pl.config);
    parts += c.parts;
    bolts += c.bolts;
    minutes += c.minutes;
    if (c.people === 2) people = 2;
  }
  parts += b.boards.length;
  if (b.placements.length > 1) people = 2;
  return { parts, bolts, minutes, people };
}
