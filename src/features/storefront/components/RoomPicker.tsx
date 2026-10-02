"use client";

import { useEffect, useRef, useState } from "react";
import { getMoment, keepNames, moments, type KeepId } from "../lib/moments";
import { layoutSpot } from "../lib/scene";
import { allKeeps, roomOrder, useSpot } from "../lib/spot";
import { SpotThumb } from "./three/Thumb";

/**
 * "My wall": the one small control behind every fit check and every
 * in-room image. Where the piece would go, how wide the wall is, and what
 * is already standing there. A compact dropdown, not a wizard.
 */
export function RoomPicker({
  variant = "chip",
  label,
}: {
  variant?: "chip" | "button" | "link";
  label?: string;
}) {
  const { spot, pickMoment, set, toggleKeep, clear } = useSpot();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLSpanElement>(null);
  const moment = spot.momentId ? getMoment(spot.momentId) : undefined;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node))
        setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);
  const layout = moment
    ? layoutSpot(
        moment.layout.filter((k) => k !== "piece"),
        spot.keeps,
        0,
      )
    : null;
  const text =
    label ??
    (moment
      ? `${spot.wallMm / 10} cm · ${moment.spot.toLowerCase()}`
      : "Set it");

  return (
    <span ref={wrap} className={`sf-wallpick sf-wallpick-${variant}`}>
      <button
        type="button"
        className={
          variant === "chip"
            ? "sf-roomchip"
            : variant === "button"
              ? "sf-btn sf-btn-ghost sf-btn-sm"
              : "sf-linkbtn"
        }
        data-set={Boolean(moment)}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {variant === "chip" && <RulerIcon />}
        {variant === "chip" && <span className="sf-roomchip-k">Your wall</span>}
        <span className="sf-roomchip-v">{text}</span>
      </button>
      {open && (
        <div className="sf-popover" role="dialog" aria-label="My wall">
          <div className="sf-popover-main">
            <div className="sf-popover-head">
              <b>Your wall</b>
              <span className="sf-small sf-muted">
                Every fit check and every picture in a room uses this.
              </span>
            </div>
            <div className="sf-popover-row">
              <label className="sf-field">
                <span>Where</span>
                <select
                  id="wall-spot"
                  className="sf-select"
                  value={spot.momentId ?? ""}
                  onChange={(e) =>
                    e.target.value ? pickMoment(e.target.value) : clear()
                  }
                >
                  <option value="">Not set</option>
                  {roomOrder.map((room) => (
                    <optgroup key={room} label={room}>
                      {moments
                        .filter((m) => m.room === room)
                        .map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.spot}
                          </option>
                        ))}
                    </optgroup>
                  ))}
                </select>
              </label>
              <div className="sf-field">
                <span>
                  Wall width <b className="sf-num">{spot.wallMm / 10} cm</b>
                </span>
                <input
                  id="wall-width"
                  className="sf-range"
                  type="range"
                  min={60}
                  max={600}
                  value={spot.wallMm / 10}
                  disabled={!moment}
                  onChange={(e) => set({ wallMm: Number(e.target.value) * 10 })}
                  aria-label="Wall width in centimetres"
                />
                <span className="sf-refs" aria-hidden="true">
                  door 80 · bed 90 · double 150 · sofa 180
                </span>
              </div>
            </div>
            <div className="sf-field">
              <span>Already standing there</span>
              <div className="sf-chips sf-chips-sm">
                {allKeeps.map((k: KeepId) => (
                  <button
                    key={k}
                    type="button"
                    className="sf-chip"
                    aria-pressed={spot.keeps.includes(k)}
                    disabled={!moment}
                    onClick={() => toggleKeep(k)}
                  >
                    {keepNames[k]}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="sf-popover-side">
            <div className="sf-popover-pic">
              {moment && layout ? (
                <SpotThumb
                  placements={[]}
                  keeps={layout.keeps}
                  wallMm={spot.wallMm}
                  depthMm={moment.depth}
                  alt={`${moment.spot}, ${spot.wallMm / 10} cm wide`}
                />
              ) : (
                <span className="sf-small sf-muted">
                  Pick a spot to see it.
                </span>
              )}
            </div>
            <div className="sf-popover-foot">
              <button
                type="button"
                className="sf-btn sf-btn-primary sf-btn-sm"
                onClick={() => setOpen(false)}
              >
                Done
              </button>
              <button
                type="button"
                className="sf-linkbtn"
                disabled={!moment}
                onClick={() => clear()}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}

function RulerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <rect
        x="1.5"
        y="5.5"
        width="13"
        height="5"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4 5.5v2M6.5 5.5v3M9 5.5v2M11.5 5.5v3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/** "Use this wall" on a scene: sets the wall and says so. */
export function UseThisRoom({ momentId }: { momentId: string }) {
  const { spot, pickMoment } = useSpot();
  const mine = spot.momentId === momentId;
  return (
    <button
      type="button"
      className="sf-chip"
      aria-pressed={mine}
      onClick={() => pickMoment(momentId)}
    >
      {mine ? "This is my wall" : "Use as my wall"}
    </button>
  );
}
