import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

type Manifest = {
  /** px per mm in the saved pictures, per family */
  scale: Record<string, number>;
  items: Record<string, { w: number; h: number }>;
};

/**
 * Development only: the portrait studio posts one cut-out picture per life
 * here. The picture goes to public/, its size to the manifest the index reads.
 */
export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production")
    return new Response("Not found", { status: 404 });
  const q = new URL(req.url).searchParams;
  const id = q.get("id") ?? "";
  const family = q.get("family") ?? "";
  const w = Number(q.get("w"));
  const h = Number(q.get("h"));
  const scale = Number(q.get("scale"));
  if (!/^[a-z0-9-]+$/.test(id) || !/^[a-z]+$/.test(family))
    return new Response("Bad id", { status: 400 });
  if (!(w > 0 && h > 0 && scale > 0))
    return new Response("Bad size", { status: 400 });
  const bytes = Buffer.from(await req.arrayBuffer());
  if (bytes.length < 200) return new Response("Empty", { status: 400 });
  const root = process.cwd();
  await writeFile(
    path.join(root, "public", "family", "portraits", `${id}.webp`),
    bytes,
  );
  const file = path.join(root, "src", "features", "family", "portraits.json");
  let manifest: Manifest = { scale: {}, items: {} };
  try {
    manifest = JSON.parse(await readFile(file, "utf8")) as Manifest;
  } catch {
    /* the first one */
  }
  manifest.scale[family] = scale;
  manifest.items[id] = { w, h };
  const sorted: Manifest = {
    scale: manifest.scale,
    items: Object.fromEntries(
      Object.entries(manifest.items).sort(([a], [b]) => a.localeCompare(b)),
    ),
  };
  await writeFile(file, `${JSON.stringify(sorted, null, 2)}\n`);
  return Response.json({ saved: id, bytes: bytes.length });
}
