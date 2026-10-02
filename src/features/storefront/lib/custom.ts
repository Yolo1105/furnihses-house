import type { Product } from "./catalog";

/**
 * "Start from a panel." A body sized inside the engineering envelope the
 * assembly record allows today. Outside it, the answer is "Ask the studio",
 * never a form error. A custom body is a real configuration: it goes in a
 * spot, opens up, builds step by step and sits on the board like a preset.
 */
export const customHeights = [400, 800, 1200, 1600] as const;
type CustomHeight = (typeof customHeights)[number];

export type CustomSpec = {
  height: CustomHeight;
  segments: 1 | 2 | 3;
  mobile: boolean;
};

export const defaultCustom: CustomSpec = {
  height: 800,
  segments: 1,
  mobile: false,
};

type Envelope = { ok: true; notes: string[] } | { ok: false; reason: string };

export function envelope(s: CustomSpec): Envelope {
  if (s.mobile && s.height > 1200)
    return {
      ok: false,
      reason:
        "A body on casters stops at 120 cm. Taller than that we'd want to look at with you.",
    };
  if (s.segments > 1 && s.height >= 1600)
    return {
      ok: false,
      reason:
        "A 160 cm body wider than one segment needs anti-tip fixing, which we check case by case.",
    };
  const notes: string[] = [];
  if (s.height >= 1600) notes.push("Fixed against tipping at this height.");
  if (s.segments > 1)
    notes.push(
      `${s.segments - 1} connector${s.segments > 2 ? "s" : ""} join the segments.`,
    );
  if (s.mobile) notes.push("Casters add about 55 mm under the body.");
  return { ok: true, notes };
}

export function validCustom(input: unknown): CustomSpec | null {
  if (!input || typeof input !== "object") return null;
  const o = input as Record<string, unknown>;
  const height = Number(o.height);
  const segments = Number(o.segments);
  if (!customHeights.some((h) => h === height)) return null;
  if (![1, 2, 3].includes(segments)) return null;
  return {
    height: height as CustomHeight,
    segments: segments as 1 | 2 | 3,
    mobile: o.mobile === true || o.mobile === "1" || o.mobile === "true",
  };
}

export function customProduct(s: CustomSpec): Product {
  const full = s.height >= 1200;
  return {
    id: "custom",
    name: "Your panel body",
    category: "storage",
    subcategory: "From scratch",
    family: full ? "full-height" : "stacked",
    familyName: full ? "Full-height organisers" : "Stacked storage",
    shape: s.mobile ? "trolley" : full ? "organiser" : "cabinet",
    width: s.segments * 600,
    height: s.height,
    depth: 400,
    tiers: Math.max(1, s.height / 400),
    bays: s.segments,
    room: [],
    use: "Whatever this spot needs.",
    benefit: "A body sized to the spot, from the same panels.",
    fit: "Sized by you",
    space: "Check the full width and the final height against the spot.",
    description:
      "Made from the same panels, bases and connectors as everything else here. It is yours from the first panel: it goes in a spot, opens up, builds step by step and takes add-ons later.",
    source: "custom",
    door: !full,
    defaultAccessories: [],
    optionalAccessories: ["coat-hook", "key-tray", "headphone-hook"],
    does: ["put down"],
    lenses: ["nothing-yet", "everything-stays", "moves-with-you"],
    status: "adjustable",
    line: "small",
  };
}
