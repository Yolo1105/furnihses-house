"use client";

import { useMemo, useState } from "react";
import { useBoard } from "../lib/board";
import { configSummary, resolveProduct, validConfig } from "../lib/catalog";
import { keepNames, moments } from "../lib/moments";
import { useSpot } from "../lib/spot";
import { RoomPicker } from "./RoomPicker";

/**
 * The planning path. Four steps, three answers, no commitment. Two of the
 * answers are already on the site if the visitor picked a spot. There is
 * no upload service yet, so the message goes by email with the photos
 * attached by the visitor; the site writes the message for them.
 */
export function AskStudio({
  email,
  pieceId,
  configQuery,
}: {
  email: string;
  pieceId: string | null;
  configQuery: string | null;
}) {
  const { spot, set } = useSpot();
  const { add } = useBoard();
  const moment = spot.momentId
    ? moments.find((m) => m.id === spot.momentId)
    : undefined;
  const config = useMemo(() => {
    if (!pieceId) return null;
    const q = new URLSearchParams(configQuery ?? "");
    return validConfig({
      productId: pieceId,
      finish: q.get("finish") ?? "natural",
      storage: q.get("storage") ?? "open",
      accessories: (q.get("acc") ?? "").split(",").filter(Boolean),
      ...(pieceId === "custom"
        ? {
            custom: {
              height: Number(q.get("h")),
              segments: Number(q.get("w")),
              mobile: q.get("mobile") === "1",
            },
          }
        : {}),
    });
  }, [pieceId, configQuery]);
  const piece = config ? resolveProduct(config) : undefined;
  const [use, setUse] = useState("");
  const [height, setHeight] = useState("");
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const body = [
    `Hello Furnishes,`,
    ``,
    `The spot: ${moment ? moment.spot : "not picked yet"}${moment ? ` (${moment.room})` : ""}.`,
    `Wall width: about ${spot.wallMm / 10} cm.${height ? ` Floor to ceiling: about ${height} cm.` : ""}`,
    `What stays there: ${spot.keeps.length ? spot.keeps.map((k) => keepNames[k]).join(", ") : "nothing"}.`,
    piece
      ? `The piece I was looking at: ${piece.name} · ${configSummary(config!)}.`
      : `I haven't picked a piece.`,
    `What I want to put there: ${use || "(tell us in a sentence)"}`,
    ``,
    `Photos of the spot are attached.`,
    ``,
    name ? `— ${name}` : ``,
  ].join("\n");
  const subject = `Plan a spot: ${moment ? moment.spot : "my wall"}${piece ? ` · ${piece.name}` : ""}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="sf-askgrid">
      <div className="sf-asksteps">
        <ol>
          <li>
            <b>Measure and photograph the spot.</b>
            <span>
              Wall width, floor to ceiling, and two photos: straight on and from
              the door.
            </span>
          </li>
          <li>
            <b>Tell us how you use it.</b>
            <span>What goes there, who uses it, what stays.</span>
          </li>
          <li>
            <b>We draw the piece into your wall.</b>
            <span>
              To scale, with the parts and the steps, within a few days.
            </span>
          </li>
          <li>
            <b>You decide. Or don’t.</b>
            <span>
              Order now, later, or never. Nobody here is on commission.
            </span>
          </li>
        </ol>
        <p className="sf-small sf-muted">
          Sending this commits you to nothing. We don’t ask for a budget. We
          don’t sell your address.
        </p>
      </div>

      <div className="sf-askform">
        <div className="sf-field">
          <span>My wall</span>
          <div className="sf-chips">
            <span className="sf-small">
              {moment
                ? `${moment.spot} (${moment.room}) · ${spot.wallMm / 10} cm`
                : "Not set yet"}
            </span>
            <RoomPicker
              variant="button"
              label={moment ? "Change" : "Set my wall"}
            />
          </div>
        </div>
        <div className="sf-field">
          <span>Wall width and height</span>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <label className="sf-chip sf-chip-input">
              wall
              <input
                id="ask-wall"
                className="sf-num"
                inputMode="numeric"
                value={spot.wallMm / 10}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (Number.isFinite(v) && v > 0)
                    set({
                      wallMm: Math.min(8000, Math.max(600, Math.round(v) * 10)),
                    });
                }}
                aria-label="Wall width in centimetres"
              />
              cm
            </label>
            <label className="sf-chip sf-chip-input">
              ceiling
              <input
                id="ask-height"
                className="sf-num"
                inputMode="numeric"
                placeholder="260"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                aria-label="Floor to ceiling in centimetres"
              />
              cm
            </label>
          </div>
        </div>
        <label className="sf-field">
          <span>What do you want to put there?</span>
          <textarea
            id="ask-use"
            className="sf-textarea"
            placeholder="coats and school bags for two kids, and somewhere for the post…"
            value={use}
            onChange={(e) => setUse(e.target.value)}
          />
        </label>
        <label className="sf-field">
          <span>Your name</span>
          <input
            id="ask-name"
            className="sf-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="so we know who to write to"
          />
        </label>
        {piece && (
          <p className="sf-small sf-muted">
            Attached to the message: {piece.name}, {configSummary(config!)}.
          </p>
        )}
        <div className="sf-askpreview">
          <p className="sf-label">The message we wrote for you</p>
          <pre>{body}</pre>
        </div>
        <div className="sf-chips">
          <a
            href={mailto}
            className="sf-btn sf-btn-primary sf-btn-sm"
            onClick={() => {
              if (!saved) {
                add({
                  kind: "note",
                  text: `Asked for planning help · ${moment ? moment.spot : "my wall"} · ${spot.wallMm / 10} cm${piece ? ` · ${piece.name}` : ""}`,
                });
                setSaved(true);
              }
            }}
          >
            Open in your mail app, attach the photos, send
          </a>
          <button
            type="button"
            className="sf-btn sf-btn-ghost sf-btn-sm"
            onClick={() => {
              void navigator.clipboard
                ?.writeText(`${subject}\n\n${body}`)
                .then(() => {
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1600);
                });
            }}
          >
            {copied ? "Copied" : "Copy the message"}
          </button>
          <span className="sf-mono sf-muted">to {email}</span>
        </div>
      </div>
    </div>
  );
}
