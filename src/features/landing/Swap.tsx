"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Swap } from "./cases";

/* The spot as it is, and the spot with the piece in it, in one picture with a
   line the visitor drags. It shows itself once, slowly, the first time it is
   seen, and then holds: nothing here plays on a loop. */

const SHOWN = 0.62;
const OPEN = 0.3;

export function Swaps({ swaps }: { swaps: Swap[] }) {
  const [at, setAt] = useState(0);
  const [cut, setCut] = useState(SHOWN);
  const [held, setHeld] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const now = swaps[at];

  /* the one move the page makes: it draws its own line back, once, so that
     what the two halves are needs no explaining */
  const shown = useRef(false);
  useEffect(() => {
    if (shown.current || held) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now() + (still ? 0 : 900);
    const step = (t: number) => {
      const u = still ? 1 : Math.min(1, Math.max(0, (t - start) / 1400));
      const ease = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
      setCut(SHOWN + (OPEN - SHOWN) * ease);
      if (u < 1) raf = requestAnimationFrame(step);
      else shown.current = true;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [held, at]);

  const drag = useCallback((e: React.PointerEvent) => {
    const el = box.current;
    if (!el || (e.pointerType === "mouse" && e.buttons === 0)) return;
    const r = el.getBoundingClientRect();
    setHeld(true);
    shown.current = true;
    setCut(Math.min(0.97, Math.max(0.03, (e.clientX - r.left) / r.width)));
  }, []);

  const go = (d: number) => {
    setAt((i) => (i + d + swaps.length) % swaps.length);
    setCut(SHOWN);
    shown.current = false;
    setHeld(false);
  };

  if (!now) return null;
  return (
    <section className="ld-swap">
      <div className="ld-head">
        <p className="f-label">
          [ {String(at + 1).padStart(2, "0")} /{" "}
          {String(swaps.length).padStart(2, "0")} · {now.where} ]
        </p>
        <h1 className="f-display ld-say">{now.say}</h1>
        <p className="f-small f-muted ld-what">
          18 mm birch plywood on one panel system. One L-key builds all sixty
          designs, and the same panels make the next one.
        </p>
      </div>

      <div
        ref={box}
        className="ld-pair"
        onPointerDown={(e) => {
          e.preventDefault();
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            /* the pointer has already gone */
          }
          drag(e);
        }}
        onPointerMove={drag}
        style={{ ["--cut" as string]: `${(cut * 100).toFixed(2)}%` }}
      >
        <Image
          src={now.after}
          alt={`${now.name} standing in ${now.where}`}
          width={960}
          height={600}
          unoptimized
          draggable={false}
          priority={at === 0}
        />
        <div className="ld-before">
          <Image
            src={now.before}
            alt={`The same spot without it: ${now.say}`}
            width={960}
            height={600}
            unoptimized
            draggable={false}
            priority={at === 0}
          />
        </div>
        <span className="ld-mark ld-mark--left">As it is</span>
        <span className="ld-mark ld-mark--right">
          With the {now.name.toLowerCase()}
        </span>
        <span className="ld-line" aria-hidden="true">
          <b>↔</b>
        </span>
      </div>

      <div className="ld-answer">
        <div>
          <p className="f-label">[ what we would put there ]</p>
          <h2 className="f-h2">{now.name}</h2>
          <p className="f-lede">{now.line}</p>
          <p className="f-small f-muted f-num ld-build">{now.build}</p>
          <div className="ld-acts">
            {now.href && (
              <Link href={now.href} className="f-btn f-btn--primary">
                See this design
              </Link>
            )}
            <Link href={now.street} className="f-link">
              Walk around it →
            </Link>
          </div>
        </div>
        <nav className="ld-nav" aria-label="The other spots">
          <button
            type="button"
            className="f-btn f-btn--sm"
            onClick={() => go(-1)}
          >
            ← Back
          </button>
          <ol className="ld-dots">
            {swaps.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  aria-label={s.say}
                  aria-current={i === at}
                  onClick={() => {
                    setAt(i);
                    setCut(SHOWN);
                    shown.current = false;
                    setHeld(false);
                  }}
                />
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="f-btn f-btn--sm"
            onClick={() => go(1)}
          >
            Next spot →
          </button>
        </nav>
      </div>
    </section>
  );
}
