import { products } from "../storefront/lib/catalog";
import { statusOf, families } from "../family/data";
import type { Frame } from "./Build";

/* The frames that can be built from today: the designs that are made. Anything
   drawn but not made is on the street and in the shop, not here, because what
   this page says about a piece — its parts, its time, its price — is only
   honest for something we have actually built. */

export function shopFrames(): Frame[] {
  const made = new Set(
    families.flatMap((f) =>
      f.bodies.flatMap((b) =>
        b.lives
          .filter((l) => statusOf(l).made && l.productId)
          .map((l) => l.productId as string),
      ),
    ),
  );
  return products
    .filter((p) => made.has(p.id))
    .map((p) => ({
      id: p.id,
      name: p.name,
      use: p.use,
      line: p.benefit,
      door: p.door,
    }));
}
