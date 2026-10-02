import type { Metadata } from "next";

export const SITE_NAME = "Furnishes";
export const SITE_DESCRIPTION =
  "Furniture from one panel system. Small pieces that fix a big everyday problem, and dividing walls you build after dinner.";
export const SITE_EMAIL = "hello@furnish-es.com";

export const NOINDEX_ROBOTS = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false, noimageindex: true },
} as const satisfies Metadata["robots"];

export function publicPageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      title: `${input.title} | ${SITE_NAME}`,
      description: input.description,
      url: input.path,
      type: "website",
      siteName: SITE_NAME,
    },
  };
}
