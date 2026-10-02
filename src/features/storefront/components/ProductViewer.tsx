"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { billOfParts, difference } from "../lib/assembly";
import {
  defaultConfig,
  getProduct,
  relationships,
  type Configuration,
  type Product,
} from "../lib/catalog";
import { getMoment, moments } from "../lib/moments";
import { propsForPiece } from "../lib/props";
import { fitVerdict, layoutSpot } from "../lib/scene";
import { keepsFor, useSpot } from "../lib/spot";
import { buildSteps, counts, groupSequence, stepForPart } from "../lib/steps";
import { easeInOut, window01 } from "../lib/three/anim";
import { useClock } from "../lib/three/useClock";
import { RoomPicker } from "./RoomPicker";
import { Stage } from "./three/Stage";

export type ViewerMode =
  | "story"
  | "built"
  | "room"
  | "parts"
  | "steps"
  | "becomes";
const layerGroups = [
  "Base",
  "Body panels",
  "Shelves",
  "Top",
  "Doors",
  "Accessories",
];

/** The room a piece is drawn in: yours if you set one, otherwise where it usually goes. */
export function roomFor(p: Product, momentId: string | null) {
  return (
    (momentId ? getMoment(momentId) : undefined) ??
    moments.find((m) => m.pieces[0] === p.id) ??
    moments.find((m) => m.pieces.includes(p.id)) ??
    moments[0]!
  );
}

/**
 * One life of a piece, everywhere. Story: parts fly together, add-ons hang
 * on, the things it holds appear, the room appears around it. Then the
 * controls: turn it, put it in your room, open it up, step through the
 * build, see what it can become.
 */
export function ProductViewer({
  product: p,
  config,
  mode,
  onMode,
  storyOnly = false,
  autoplay = false,
  loop = false,
  cta = false,
  onHover,
  pins,
  renderPin,
}: {
  product: Product;
  config: Configuration;
  mode: ViewerMode;
  onMode: (m: ViewerMode) => void;
  storyOnly?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  cta?: boolean;
  /** the pointer is over a part of the piece, or has left it */
  onHover?: ((partId: string | null) => void) | undefined;
  /** parts to hang a callout off, and what each callout says */
  pins?: string[] | undefined;
  renderPin?: ((partId: string) => ReactNode) | undefined;
}) {
  const [explode, setExplode] = useState(0.85);
  const [layers, setLayers] = useState<string[]>(layerGroups);
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [relationId, setRelationId] = useState<string | null>(null);
  const [morph, setMorph] = useState(0);
  const [turn, setTurn] = useState(0);
  const [inUse, setInUse] = useState(true);
  const { spot, set, pickMoment } = useSpot();

  const parts = useMemo(() => billOfParts(p, config), [p, config]);
  const steps = useMemo(() => buildSteps(p, config), [p, config]);
  const c = useMemo(() => counts(p, config), [p, config]);
  const rels = relationships.filter((r) => r.from === p.id);
  const relation = rels.find((r) => r.id === relationId) ?? rels[0];
  const target = relation ? getProduct(relation.to) : undefined;
  const moment = roomFor(p, spot.momentId);
  const mine = spot.momentId === moment.id;
  const keeps = mine ? spot.keeps : keepsFor(moment.id, null);
  const layout = layoutSpot(moment.layout, keeps, p.width);
  const wallMm = mine ? spot.wallMm : moment.wall;
  const fit = fitVerdict(wallMm, layout.total, p.height, p.bays);
  const propList = useMemo(
    () => propsForPiece(p.id, p.height),
    [p.id, p.height],
  );

  /* ---- step-by-step clock ---- */
  const clock = useClock(steps.length * 1100);
  const stepIdx = Math.min(
    steps.length - 1,
    Math.floor(Math.min(0.9999, clock.value / 0.82) * steps.length),
  );
  const stepNow = steps[Math.max(0, stepIdx)];
  const assembly = useMemo(
    () => ({
      progress: clock.ref,
      steps: steps.length,
      stepOf: (id: string) => stepForPart(steps, id),
    }),
    [clock.ref, steps],
  );
  useEffect(() => {
    if (mode === "steps") {
      clock.seek(0);
      clock.play();
    } else clock.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  /* ---- props bounce in when the piece is in use ---- */
  const propsClock = useClock(1400);
  const propsWanted =
    (mode === "room" || (mode === "built" && inUse)) && propList.length > 0;
  useEffect(() => {
    if (propsWanted) propsClock.replay();
    else propsClock.seek(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsWanted, p.id, moment.id]);

  /* ---- the story: one master clock drives parts, props, room, camera ---- */
  const story = useClock(9000, {
    autoplay: autoplay && mode === "story",
    loop,
  });
  const storyAssembly = useRef(0);
  const storyProps = useRef(0);
  const storyRoom = useRef(0);
  const drift = useRef({ turn: 0, zoom: 1, lift: 0 });
  const storyTiming = useMemo(
    () => ({
      progress: storyAssembly,
      steps: steps.length + 1,
      stepOf: (id: string) =>
        id === "functional-panel" ? 0 : stepForPart(steps, id) + 1,
    }),
    [steps],
  );
  useEffect(() => {
    if (mode !== "story") return;
    let raf = 0;
    const tick = () => {
      const t = story.ref.current;
      // finished and in use → pulled apart to one panel → back together → in use → the room
      const apart = window01(t, 0.1, 0.3);
      const together = window01(t, 0.34, 0.7);
      storyAssembly.current = t < 0.34 ? 1 - apart : together;
      storyProps.current =
        t < 0.34 ? 1 - window01(t, 0.08, 0.16) : window01(t, 0.7, 0.84);
      storyRoom.current =
        t < 0.34
          ? 1 - easeInOut(window01(t, 0.1, 0.22))
          : easeInOut(window01(t, 0.82, 0.96));
      const near =
        t < 0.34
          ? easeInOut(window01(t, 0.1, 0.3))
          : 1 - easeInOut(window01(t, 0.78, 0.96));
      drift.current = {
        turn: -8 + 26 * easeInOut(window01(t, 0, 1)),
        zoom: 1 - 0.36 * near,
        lift: 0.1 * near,
      };
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mode, story.ref]);
  useEffect(() => {
    if (mode === "story") {
      if (!autoplay) story.replay();
    } else story.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, p.id]);
  const beats = useMemo(
    () => [
      {
        at: 0.0,
        title: `${moment.spot}. ${p.use}`,
        sub: propList.length ? "In use, to scale." : "To scale.",
      },
      {
        at: 0.1,
        title: "Under it all, one panel.",
        sub: "18 mm birch. Holes where you use it, none where you look.",
      },
      {
        at: 0.34,
        title: `${c.parts} parts, one key.`,
        sub: `${c.people === 1 ? "One person" : "Two people"}, about ${c.minutes} minutes.`,
      },
      {
        at: 0.62,
        title: config.accessories.length
          ? "Add-ons hang on the holes."
          : "Nothing hangs on it yet.",
        sub: config.accessories.length
          ? "No tools. Add more next year."
          : "Hooks, trays and rails can be added later.",
      },
      {
        at: 0.7,
        title: propList.length
          ? "Then it does its job."
          : "Then it stands where you put it.",
        sub: p.use,
      },
      {
        at: 0.84,
        title: `${p.width / 10} cm on a ${wallMm / 10} cm wall.`,
        sub: fit.title,
      },
    ],
    [
      c,
      p,
      config.accessories.length,
      propList.length,
      moment.spot,
      wallMm,
      fit.title,
    ],
  );
  const beat =
    [...beats].reverse().find((b) => story.value >= b.at) ?? beats[0]!;

  const modes: { id: ViewerMode; label: string; off?: boolean }[] = [
    { id: "story", label: "Story" },
    { id: "built", label: "Turn it" },
    { id: "room", label: "On my wall" },
    { id: "parts", label: "Open it up" },
    { id: "steps", label: "Step by step" },
    { id: "becomes", label: "What it can become", off: rels.length === 0 },
  ];

  const roomStage = {
    keeps: layout.keeps,
    wallMm,
    depthMm: moment.depth,
    onWall: (v: number) => {
      if (!mine) pickMoment(moment.id);
      set({ wallMm: v });
    },
  };
  const stageProps =
    mode === "story"
      ? {
          placements: [
            {
              key: "piece",
              product: p,
              config,
              x: layout.pieceX,
              label: p.name,
            },
          ],
          keeps: layout.keeps,
          wallMm,
          depthMm: moment.depth,
          assembly: storyTiming,
          props: propList,
          propsProgress: storyProps,
          roomFade: storyRoom,
          drift,
          labels: story.value < 0.08 || story.value > 0.9,
          orbit: false,
        }
      : mode === "room"
        ? {
            placements: [
              {
                key: "piece",
                product: p,
                config,
                x: layout.pieceX,
                label: p.name,
                ghost: fit.tone === "no",
              },
            ],
            ...roomStage,
            props: propList,
            propsProgress: propsClock.ref,
          }
        : mode === "parts"
          ? {
              placements: [{ key: "piece", product: p, config, x: 0 }],
              explode,
              hideGroups: layerGroups.filter((g) => !layers.includes(g)),
              selected,
              onSelect: (id: string) =>
                setSelected((s) => (s === id ? undefined : id)),
              turn,
            }
          : mode === "steps"
            ? {
                placements: [{ key: "piece", product: p, config, x: 0 }],
                assembly,
                onSelect: (id: string) => {
                  const i = stepForPart(steps, id);
                  if (i >= 0) {
                    clock.pause();
                    clock.seek((i / steps.length) * 0.82 + 0.2);
                  }
                },
                turn,
              }
            : mode === "becomes" && relation && target
              ? {
                  placements: [{ key: "piece", product: p, config, x: 0 }],
                  morphTo: { product: target, config: defaultConfig(target) },
                  morphProgress: morph,
                  turn,
                }
              : {
                  placements: [{ key: "piece", product: p, config, x: 0 }],
                  turn,
                  props: inUse ? propList : undefined,
                  propsProgress: propsClock.ref,
                };

  return (
    <div className={`sf-viewer${storyOnly ? " sf-viewer-story" : ""}`}>
      <div className="sf-stage sf-stage--3d">
        <Stage
          {...stageProps}
          onHover={onHover}
          pins={pins}
          renderPin={renderPin}
        />
        {mode === "story" ? (
          <div className="sf-story-caption" aria-live="polite">
            <b key={beat.at} className="sf-display">
              {beat.title}
            </b>
            <span key={`s${beat.at}`}>{beat.sub}</span>
          </div>
        ) : (
          <span className="sf-hint">
            {mode === "built" && "Drag to turn"}
            {mode === "room" &&
              `${moment.spot}${mine ? "" : " (usual spot)"} · drag the ⟷ handle to your wall width`}
            {mode === "parts" &&
              (selected
                ? `${parts.find((r) => r.id === selected)?.name ?? ""} · ${parts.find((r) => r.id === selected)?.spec ?? ""}`
                : "Click a part · slide to open it up")}
            {mode === "steps" &&
              stepNow &&
              `Step ${stepNow.n} of ${steps.length} · ${stepNow.title} · click a part to jump to its step`}
            {mode === "becomes" && relation && `${p.name} → ${target?.name}`}
          </span>
        )}
      </div>

      {mode === "story" && (
        <div className="sf-story-controls">
          <button
            type="button"
            className="sf-btn sf-btn-ghost sf-btn-sm"
            onClick={() =>
              story.playing
                ? story.pause()
                : story.value >= 1
                  ? story.replay()
                  : story.play()
            }
          >
            {story.playing ? "Pause" : story.value >= 1 ? "Replay" : "Play"}
          </button>
          <input
            id={`story-range-${p.id}`}
            className="sf-range"
            type="range"
            min={0}
            max={1000}
            value={Math.round(story.value * 1000)}
            onChange={(e) => {
              story.pause();
              story.seek(Number(e.target.value) / 1000);
            }}
            aria-label="Scrub the story"
          />
          <div className="sf-story-beats" aria-hidden="true">
            {beats.map((b) => (
              <button
                key={b.at}
                type="button"
                data-on={story.value >= b.at}
                onClick={() => {
                  story.pause();
                  story.seek(b.at + 0.01);
                }}
                title={b.title}
              />
            ))}
          </div>
          {cta && (
            <Link
              href={`/shop/${p.id}`}
              className="sf-btn sf-btn-primary sf-btn-sm"
            >
              See the {p.name.toLowerCase()}
            </Link>
          )}
          {storyOnly && !cta && (
            <RoomPicker
              variant="link"
              label={mine ? "Change my wall" : "Show it on my wall"}
            />
          )}
        </div>
      )}

      {/* The views, and beside them the one switch this view allows. The
          switch is not a view, so it sits outside the tablist — and it is
          written in the same hand as the tabs rather than as a filled chip
          that shouts over them. */}
      {!storyOnly && (
        <div className="sf-views">
          <div className="sf-viewtabs" role="tablist" aria-label="View">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={mode === m.id}
                className="sf-mode"
                onClick={() => onMode(m.id)}
                disabled={m.off}
              >
                {m.label}
              </button>
            ))}
          </div>
          {mode === "built" && propList.length > 0 && (
            <button
              type="button"
              className="sf-switch"
              aria-pressed={inUse}
              onClick={() => setInUse((v) => !v)}
            >
              In use
            </button>
          )}
          {(mode === "parts" || mode === "steps" || mode === "becomes") && (
            <button
              type="button"
              className="sf-switch"
              aria-pressed={turn === 180}
              onClick={() => setTurn((t) => (t === 180 ? 0 : 180))}
            >
              Back
            </button>
          )}
        </div>
      )}

      {!storyOnly && (
        <div className="sf-mode-row">
          {mode === "room" && (
            <>
              <div className="sf-chips">
                <RoomPicker
                  variant="button"
                  label={
                    mine
                      ? `Change my wall · ${moment.spot}`
                      : `Set my wall (showing ${moment.spot.toLowerCase()})`
                  }
                />
                <span className="sf-mono sf-muted sf-num">
                  {wallMm / 10} cm wall · drag the handle or set it in the room
                  picker
                </span>
              </div>
              <div className={`sf-verdict ${fit.tone}`} aria-live="polite">
                <b>{fit.title}</b>
                <span className="sf-small">{fit.body}</span>
              </div>
            </>
          )}

          {mode === "parts" && (
            <>
              <div className="sf-sliderrow">
                <span className="sf-mono sf-faint">Open</span>
                <input
                  id="explode-range"
                  className="sf-range"
                  type="range"
                  min={0}
                  max={100}
                  value={Math.round(explode * 100)}
                  onChange={(e) => setExplode(Number(e.target.value) / 100)}
                  aria-label="Open the piece up"
                />
                <div className="sf-chips">
                  {layerGroups
                    .filter((g) => parts.some((r) => r.group === g))
                    .map((g) => (
                      <button
                        key={g}
                        type="button"
                        className="sf-chip"
                        aria-pressed={layers.includes(g)}
                        onClick={() =>
                          setLayers((l) =>
                            l.includes(g)
                              ? l.filter((x) => x !== g)
                              : [...l, g],
                          )
                        }
                      >
                        {g === "Accessories" ? "Add-ons" : g}
                      </button>
                    ))}
                </div>
              </div>
              <div className="sf-partgrid">
                {groupSequence
                  .map((g) => ({ g, rows: parts.filter((r) => r.group === g) }))
                  .filter((x) => x.rows.length)
                  .map(({ g, rows }) => (
                    <div key={g}>
                      <p className="sf-part-group">{g}</p>
                      {rows.map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          className="sf-part"
                          aria-pressed={selected === r.id}
                          onClick={() =>
                            setSelected(selected === r.id ? undefined : r.id)
                          }
                        >
                          <span className="qty sf-num">{r.quantity}×</span>
                          <span>{r.name}</span>
                          <span className="spec">{r.spec}</span>
                        </button>
                      ))}
                    </div>
                  ))}
              </div>
            </>
          )}

          {mode === "steps" && stepNow && (
            <>
              <div className="sf-transport">
                <button
                  type="button"
                  className="sf-btn sf-btn-primary sf-btn-sm"
                  onClick={() =>
                    clock.playing
                      ? clock.pause()
                      : clock.value >= 1
                        ? clock.replay()
                        : clock.play()
                  }
                >
                  {clock.playing
                    ? "Pause"
                    : clock.value >= 1
                      ? "Replay"
                      : "Play"}
                </button>
                <input
                  id="assembly-range"
                  className="sf-range"
                  type="range"
                  min={0}
                  max={1000}
                  value={Math.round(clock.value * 1000)}
                  onChange={(e) => {
                    clock.pause();
                    clock.seek(Number(e.target.value) / 1000);
                  }}
                  aria-label="Scrub the assembly"
                />
                <span className="sf-mono sf-muted sf-num">
                  {Math.round(clock.value * 100)}%
                </span>
              </div>
              <div className="sf-stepstrip">
                {steps.map((s, i) => (
                  <button
                    key={s.n}
                    type="button"
                    className="sf-stepchip"
                    aria-current={i === stepIdx ? "step" : undefined}
                    data-done={i < stepIdx}
                    onClick={() => {
                      clock.pause();
                      clock.seek((i / steps.length) * 0.82 + 0.2);
                    }}
                  >
                    <b className="sf-num">{s.n}</b>
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>
              <div className="sf-stepnow">
                <div>
                  <p className="sf-h4">{stepNow.title}</p>
                  <p className="sf-body sf-small">{stepNow.detail}</p>
                  <p className="sf-step-meta">
                    <span>
                      {stepNow.parts
                        .map((pt) => `${pt.quantity}× ${pt.name}`)
                        .join(", ")}
                    </span>
                  </p>
                  <p className="sf-step-meta">
                    <span>
                      {stepNow.bolts ? `${stepNow.bolts} bolts~` : "no bolts"}
                    </span>
                    <span>
                      {stepNow.tool === "none" ? "no tool" : stepNow.tool}
                    </span>
                    <span>
                      {stepNow.people === 1 ? "1 person" : "2 people"}
                    </span>
                    <span>~{stepNow.minutes} min</span>
                  </p>
                </div>
              </div>
            </>
          )}

          {mode === "becomes" && relation && target && (
            <>
              <div className="sf-sliderrow">
                <div className="sf-chips">
                  {rels.map((r) => {
                    const t = getProduct(r.to);
                    return t ? (
                      <button
                        key={r.id}
                        type="button"
                        className="sf-chip"
                        aria-pressed={relation.id === r.id}
                        onClick={() => {
                          setRelationId(r.id);
                          setMorph(0);
                        }}
                      >
                        {r.kind === "combine"
                          ? `Two make ${t.name.toLowerCase()}`
                          : `→ ${t.name}`}
                      </button>
                    ) : null;
                  })}
                </div>
                <input
                  id="morph-range"
                  className="sf-range"
                  type="range"
                  min={0}
                  max={100}
                  value={Math.round(morph * 100)}
                  onChange={(e) => setMorph(Number(e.target.value) / 100)}
                  aria-label={`Change from ${p.name} to ${target.name}`}
                />
              </div>
              <Diff
                source={p}
                sourceConfig={config}
                target={target}
                quantity={relation.quantity}
                note={relation.note}
                summary={relation.summary}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Diff({
  source,
  sourceConfig,
  target,
  quantity,
  note,
  summary,
}: {
  source: Product;
  sourceConfig: Configuration;
  target: Product;
  quantity: number;
  note: string;
  summary: string;
}) {
  const diff = difference(
    billOfParts(source, sourceConfig),
    billOfParts(target, defaultConfig(target)),
    quantity,
  );
  const kept = diff.filter((d) => d.kept);
  const added = diff.filter((d) => d.added);
  const removed = diff.filter((d) => d.removed);
  return (
    <div className="sf-diffwrap">
      <p className="sf-small" style={{ fontStretch: "84%" }}>
        {summary}
      </p>
      <div className="sf-diff">
        <div className="keep">
          <b>Keep</b>
          {kept.map((d) => `${d.kept}× ${d.name}`).join(", ") || "—"}
        </div>
        <div className="add">
          <b>Add</b>
          {added.map((d) => `${d.added}× ${d.name}`).join(", ") || "—"}
        </div>
        <div className="aside">
          <b>Set aside</b>
          {removed.map((d) => `${d.removed}× ${d.name}`).join(", ") || "—"}
        </div>
      </div>
      <p className="sf-mono sf-muted">{note}</p>
    </div>
  );
}
