import type { Metadata } from "next";
import "@/features/house/house.css";
import { HouseLoader } from "@/features/house/HouseLoader";

export const metadata: Metadata = {
  title: "The house | Furnishes",
  robots: { index: false, follow: false },
};

/** The earlier homepage, kept for reference. Nothing links here. */
export default function Page() {
  return (
    <div className="hs">
      <HouseLoader />
    </div>
  );
}
