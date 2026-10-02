import { writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

/**
 * Development only: the family page posts its first frame here and it is
 * saved as the still that paints before the 3D scene is ready.
 */
export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production")
    return new Response("Not found", { status: 404 });
  const body = await req.text();
  const m = /^data:image\/jpeg;base64,(.+)$/.exec(body);
  if (!m?.[1]) return new Response("Expected a JPEG data URL", { status: 400 });
  const q = new URL(req.url).searchParams;
  // ?athome=<design>: a still of one design standing in its room, for its page
  const athome = q.get("athome");
  const family = q.get("family") ?? "pieces";
  if (athome ? !/^[a-z0-9-]+$/.test(athome) : !/^[a-z]+$/.test(family))
    return new Response("Bad name", { status: 400 });
  const file = athome
    ? path.join(process.cwd(), "public", "family", "athome", `${athome}.jpg`)
    : path.join(process.cwd(), "public", "family", `poster-${family}.jpg`);
  await writeFile(file, Buffer.from(m[1], "base64"));
  return Response.json({ saved: file });
}
