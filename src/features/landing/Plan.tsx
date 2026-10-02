"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { asked } from "@/features/family/ask";
import type { DayCard, Design } from "./plan-data";

/* Three questions, none of them compulsory: which rooms, what a day looks
   like, and anything the visitor wants to say. Each card is a sentence, so all
   three go through the one matcher and the answer changes as they pick. The
   answers are always on the screen: nothing is submitted, nothing is waited
   for. */

export function Plan({
  days,
  rooms,
  designs,
}: {
  days: (DayCard & { pic: string | null })[];
  rooms: string[];
  designs: Record<string, Design>;
}) {
  const [picked, setPicked] = useState<string[]>([]);
  const [where, setWhere] = useState<string[]>([]);
  const [text, setText] = useState("");

  const said = useMemo(
    () =>
      [...days.filter((d) => picked.includes(d.id)).map((d) => d.say), text]
        .filter(Boolean)
        .join(". "),
    [days, picked, text],
  );
  const out = useMemo(
    () =>
      said.trim().length > 1 ? asked(said, null, { rooms: where }, 6) : null,
    [said, where],
  );

  const toggle = (list: string[], id: string) =>
    list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

  const count = (room: string) => out?.rooms.find((r) => r.id === room)?.n ?? 0;

  return (
    <section className="pl-plan">
      <div className="pl-head">
        <p className="f-label">[ one · your place ]</p>
        <h2 className="f-h1">Tell us about your place.</h2>
        <p className="f-lede">
          Nothing is sent. Pick what sounds like you and the answers change as
          you go.
        </p>
      </div>

      <fieldset className="pl-q">
        <legend className="f-small f-muted">What is your day like?</legend>
        <ul className="pl-cards">
          {days.map((d) => {
            const pic = d.pic;
            return (
              <li key={d.id}>
                <button
                  type="button"
                  className="pl-card"
                  aria-pressed={picked.includes(d.id)}
                  onClick={() => setPicked((p) => toggle(p, d.id))}
                >
                  {pic && (
                    <Image
                      src={pic}
                      alt=""
                      width={960}
                      height={600}
                      unoptimized
                      loading="lazy"
                    />
                  )}
                  <span>{d.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <fieldset className="pl-q">
        <legend className="f-small f-muted">Which rooms?</legend>
        <div className="f-chips">
          {rooms.map((r) => (
            <button
              key={r}
              type="button"
              className="f-chip"
              aria-pressed={where.includes(r)}
              data-none={out !== null && count(r) === 0}
              onClick={() => setWhere((w) => toggle(w, r))}
            >
              {r}
              {out && count(r) > 0 && (
                <span className="f-num pl-n">{count(r)}</span>
              )}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="pl-q">
        <legend className="f-small f-muted">
          Anything else, in your own words
        </legend>
        <input
          className="f-input"
          type="text"
          autoComplete="off"
          placeholder="The cat wants in and out all night"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </fieldset>

      <div className="pl-out" aria-live="polite">
        {!out && (
          <p className="f-small f-muted">
            Pick a card above, or say it yourself, and we answer here.
          </p>
        )}
        {out && out.answers.length === 0 && (
          <p className="f-small f-muted">
            Nothing of ours answers that yet.{" "}
            <Link href="/help" className="f-link">
              Tell us about it and we plan it with you →
            </Link>
          </p>
        )}
        {out && out.answers.length > 0 && (
          <>
            <p className="f-label">
              [ {out.answers.length}{" "}
              {out.answers.length === 1 ? "design" : "designs"} for you ]
            </p>
            <ul className="pl-list">
              {out.answers.map((a) => {
                const d = designs[a.job.life];
                if (!d) return null;
                return (
                  <li key={`${a.job.id}`}>
                    <Link href={d.href} className="pl-hit">
                      {d.still && (
                        <Image
                          src={d.still}
                          alt=""
                          width={960}
                          height={600}
                          unoptimized
                          loading="lazy"
                        />
                      )}
                      <span className="pl-what">
                        <b className="f-h3">{d.name}</b>
                        <span className="f-small f-muted">{a.job.say}</span>
                        <span className="f-small f-num pl-eur">{d.price}</span>
                        <span className="f-small f-muted f-num">{d.build}</span>
                        <span className="f-status" data-made={d.made}>
                          {d.status}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
