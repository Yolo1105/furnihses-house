"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Plan } from "@/features/landing/Plan";
import type { DayCard, Design } from "@/features/landing/plan-data";
import type { FamilyId, PlaceId } from "./data";

/* The two ways in.

   Exploring is not one thing. Some people want to be asked — they know what
   bothers them at home and would rather we did the looking. Some want to be
   left alone with the street. Sending everyone down one of those corridors
   was wrong, so the street now opens on a choice, and neither door is the
   small print of the other.

   A link that already names a room — from the shop, from an answer — skips
   this and goes straight through, because that visitor has chosen already. */

const Family = dynamic(() => import("./Family"), { ssr: false });

export type Street = {
  familyId: FamilyId;
  initialCase: PlaceId;
  initialFocus: string | null;
  initialJob: string | null;
  initialLife: string | null;
  given: boolean;
};

export function Doorway({
  street,
  days,
  rooms,
  designs,
}: {
  street: Street;
  days: (DayCard & { pic: string | null })[];
  rooms: string[];
  designs: Record<string, Design>;
}) {
  const [way, setWay] = useState<"ask" | "quiz" | "street">("ask");

  if (way === "street") return <Family {...street} />;

  return (
    <div className="f-page">
      <SiteHeader />
      <main className="f-main f-wrap dw-main">
        {way === "ask" ? (
          <section className="dw-fork">
            <div className="dw-head">
              <p className="f-label">[ explore ]</p>
              <h1 className="f-display">Sixty designs, five homes.</h1>
              <p className="f-lede dw-lede">
                Two ways in, and neither is the long way round.
              </p>
            </div>
            <div className="dw-doors">
              <button
                type="button"
                className="dw-door"
                onClick={() => setWay("quiz")}
              >
                <span className="f-label">[ one ]</span>
                <b className="f-h1">Help me decide</b>
                <span className="f-small">
                  Say what your place is like — three questions, none of them
                  compulsory — and the designs that answer it come back as you
                  go. Nothing is sent anywhere.
                </span>
                <span className="f-link dw-go">Start with my place →</span>
              </button>
              <button
                type="button"
                className="dw-door"
                onClick={() => setWay("street")}
              >
                <span className="f-label">[ two ]</span>
                <b className="f-h1">I&rsquo;ll look around myself</b>
                <span className="f-small">
                  Walk the street. Five homes with the doors off, every design
                  standing in the room it was drawn for, at the size it really
                  is.
                </span>
                <span className="f-link dw-go">Open the street →</span>
              </button>
            </div>
            <p className="f-small f-muted dw-under">
              Or go straight to{" "}
              <Link href="/pieces" className="f-link">
                the shop, where all sixty stand in one line
              </Link>
              .
            </p>
          </section>
        ) : (
          <>
            <Plan days={days} rooms={rooms} designs={designs} />
            <div className="dw-back">
              <button
                type="button"
                className="f-link f-small"
                onClick={() => setWay("street")}
              >
                Or look around the street yourself →
              </button>
              <button
                type="button"
                className="f-link f-small"
                onClick={() => setWay("ask")}
              >
                ← Both ways in
              </button>
            </div>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
