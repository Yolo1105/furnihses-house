import { createContext, useContext } from "react";
import type { Palette } from "./pbr";

/** the scanned textures, loaded once by the canvas and handed down */
export const PaletteCtx = createContext<Palette | null>(null);

export function usePal(): Palette {
  const p = useContext(PaletteCtx);
  if (!p) throw new Error("No palette");
  return p;
}
