import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import "@/styles/system.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

/* No `robots` here on purpose. Metadata is merged field by field, so a rule
   written once at the root is inherited by every page that does not name
   `robots` itself — and none of the public ones do. Kept here it hid the whole
   site. The pages that should stay out of search say so themselves, with
   NOINDEX_ROBOTS: the bag, an order, the old house, the dev tools. */
export const metadata: Metadata = {
  title: "Furnishes",
  description:
    "Birch plywood furniture from one panel system: pieces for a spot, walls for a room, screens that move.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
