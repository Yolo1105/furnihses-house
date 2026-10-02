import type { Place } from "./plan";

/**
 * The friend with a voice. It answers in the house: it walks you to a place
 * and says one useful thing. Rule-based demo; it never invents a price, a
 * load or a lead time.
 */
export function askHouse(
  q: string,
  places: Place[],
): { text: string; go?: string } {
  const s = q.toLowerCase();
  const rules: [RegExp, string, string][] = [
    [
      /door|entry|entrance|hall|coat|shoe|bag|keys?\b/,
      "chair-by-the-door",
      "By the door, then. Touch the chair and watch where the coats go.",
    ],
    [
      /bedside|night|sleep|phone|lamp|glasses|\bbed\b/,
      "bedside",
      "Beside the bed. A clear top at arm's reach; nothing on the floor.",
    ],
    [
      /desk|work|monitor|cable|headphone|laptop|office|tool/,
      "desk-side",
      "Beside the desk. The desk you have stays; the organiser stands next to it.",
    ],
    [
      /kitchen|cook|counter|prep|kettle|rice|chop/,
      "kitchen-counter",
      "In the kitchen. A worktop on casters that follows you to the sink.",
    ],
    [
      /\btv\b|living|sofa|lounge|sideboard|records?/,
      "living-wall",
      "The long wall. Three bays low, open or with doors.",
    ],
    [
      /two|share|divid|split|wall|screen|separat|privacy|sibling|roommate|partner|kids?/,
      "shared-bedroom",
      "The shared room. One bookcase down the middle, a side each, nothing drilled.",
    ],
  ];
  for (const [re, id, text] of rules)
    if (re.test(s) && places.some((p) => p.def.id === id))
      return { text, go: id };
  if (/price|cost|how much|\$|expensive|cheap/.test(s))
    return {
      text: "The price shown is an estimate, counted from the parts. Take a piece and we send the confirmed price and the lead time.",
    };
  if (/drill|rent|landlord|damage|deposit/.test(s))
    return {
      text: "Nothing here needs a drill except the 160 cm pieces, which take one anti-tip screw. Everything comes apart with the same key and travels flat.",
    };
  if (/build|assembl|install|tool|minute|hour|hard|difficult/.test(s))
    return {
      text: "One key, included, parked in the base. Touch any piece twice and it pulls apart so you can count the parts yourself.",
    };
  if (/small|big|large|room|space|idea|help|start|where/.test(s))
    return {
      text: "Small pieces stand at the walls; the wall for a room stands in the middle of the shared room. Zoom in on whichever you want to change.",
      go: "shared-bedroom",
    };
  return {
    text: "Tell me a place: the door, the bed, the desk, the kitchen, the living room, or two people in one room. Or touch the house; I follow.",
  };
}
