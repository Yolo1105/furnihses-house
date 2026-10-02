import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/features/family/family.css";
import "@/styles/landing.css";
import Family from "@/features/family/Family";
import { Doorway } from "@/features/family/Doorway";
import { families, familyOf, recordCount } from "@/features/family/data";
import { streetProps, type StreetQuery } from "@/features/family/street-props";
import { cardPic, DAYS, designs, rooms } from "@/features/landing/plan-data";
import { athomeSrc } from "@/features/shop/athome";

type Params = { family: string };

export function generateStaticParams() {
  return families.map((f) => ({ family: f.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const f = familyOf((await params).family);
  if (!f) return { title: "Explore | Furnishes" };
  return {
    title: `${f.name} at home | Furnishes`,
    description: `${f.line} ${recordCount(f)} of our sixty designs, standing in the homes they are for.`,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<StreetQuery>;
}) {
  const f = familyOf((await params).family);
  if (!f) notFound();
  const props = streetProps(f.id, await searchParams);
  if (!props) notFound();
  // an address that already names a room came from somewhere that chose for
  // them — the shop, an answer, a link — so it goes straight through
  if (props.given) return <Family {...props} />;
  const stills = athomeSrc();
  return (
    <Doorway
      street={props}
      days={DAYS.map((d) => ({ ...d, pic: cardPic(d, stills) }))}
      rooms={rooms()}
      designs={designs()}
    />
  );
}
