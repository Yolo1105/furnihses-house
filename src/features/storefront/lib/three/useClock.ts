"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { clamp01 } from "./anim";

/**
 * A timeline clock. The frame loop writes `ref` every frame (the stage reads
 * it without re-rendering); `value` is a throttled copy for the controls.
 */
export function useClock(
  durationMs: number,
  opts?: { autoplay?: boolean; loop?: boolean },
) {
  const ref = useRef(0);
  const [value, setValue] = useState(0);
  const [playing, setPlaying] = useState(false);
  const loop = opts?.loop ?? false;
  const duration = Math.max(200, durationMs);

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = 0;
    let lastUi = 0;
    let holdUntil = 0;
    const step = (now: number) => {
      const dt = last ? now - last : 0;
      last = now;
      if (holdUntil) {
        // finished: hold the last frame, then start again
        if (now < holdUntil) {
          raf = requestAnimationFrame(step);
          return;
        }
        holdUntil = 0;
        ref.current = 0;
        setValue(0);
        raf = requestAnimationFrame(step);
        return;
      }
      const raw = ref.current + dt / duration;
      const finished = raw >= 1;
      const next = finished ? 1 : raw;
      ref.current = next;
      if (now - lastUi > 80 || finished) {
        lastUi = now;
        setValue(next);
      }
      if (finished) {
        if (!loop) {
          setPlaying(false);
          return;
        }
        holdUntil = now + 1800;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [playing, duration, loop]);

  const play = useCallback(() => {
    if (ref.current >= 1) ref.current = 0;
    setPlaying(true);
  }, []);
  const pause = useCallback(() => setPlaying(false), []);
  const seek = useCallback((v: number) => {
    ref.current = clamp01(v);
    setValue(ref.current);
  }, []);
  const replay = useCallback(() => {
    ref.current = 0;
    setValue(0);
    setPlaying(true);
  }, []);

  const autoplay = opts?.autoplay ?? false;
  useEffect(() => {
    if (!autoplay) return;
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const t = window.setTimeout(() => {
      if (reduce) {
        ref.current = 1;
        setValue(1);
      } else setPlaying(true);
    }, 350);
    return () => window.clearTimeout(t);
  }, [autoplay]);

  return { ref, value, playing, play, pause, seek, replay };
}
