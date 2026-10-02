import { notFound } from "next/navigation";
import Studio from "./Studio";

export const metadata = { title: "Portrait studio", robots: { index: false } };

/** Development only: where the sixty portraits of the index are taken. */
export default function Page() {
  if (process.env.NODE_ENV === "production") notFound();
  return <Studio />;
}
