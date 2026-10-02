"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import {
  Canvas,
  useFrame,
  useThree,
  type ThreeEvent,
} from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  N8AO,
  Outline,
  SMAA,
  Select,
  Selection,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import * as THREE from "three";
import {
  clamp01,
  easeInOut,
  easeOutBack,
  easeOutBounce,
  easeOutCubic,
  hashUnit,
} from "../storefront/lib/three/anim";
import { mm, type Block3D } from "../storefront/lib/three/blocks";
import {
  axisRotation,
  matProps,
  mergeBlocks,
  roundedBox,
  softness,
  scaled,
  specsWith,
  usePalette,
  type Spec,
} from "./pbr";
import {
  isConcept,
  lifeOf,
  productOf,
  type Body,
  type Family,
  type Look,
  type PlaceId,
  type VerbId,
} from "./data";
import {
  CUT_H,
  KEEP_D,
  NORTH_H,
  BOUNDS,
  WALL_T,
  homeFrame,
  homeKeeps,
  homeModels,
  homeOf,
  homes,
  roomFrame,
  roomOf,
  SKINS,
  art,
  floorLines,
  floorWords,
  rugs,
  thresholds,
  worldPoint,
  type Art,
  type FloorWord,
  type Home,
  type HomeId,
  type ModelId,
  type Stand,
} from "./town";
import { changeBetween, outfitFor } from "./outfit";
import { PaletteCtx, usePal } from "./palette-ctx";
import { Ground, Roads, Scenery as StreetScenery, Slab } from "./Street";
import { PropModel, localPoint } from "./PropModel";
import { DRACO, type PropBlock } from "./prop-models";
import type { StaticBody as StaticSpec } from "./place";

const HDRI_PATH = "/studio/hdri/";
const HDRI_FILE = "brown_photostudio_02_1k.hdr";

/** seconds: parts change first, then the things in use land */
const PARTS_S = 1.15;
const PROPS_AT = 1.0;
const PROPS_S = 0.9;
/** seconds: a body carried from one room to another */
const WALK_S = 1.2;

export type LookState = {
  from: Look | null;
  to: Look;
  n: number;
  /** seconds to wait, so a change runs across the family as a wave */
  delay: number;
  /** parts that come off stay on the floor, counted */
  leftover: boolean;
};

export type Perform = { verb: VerbId; n: number } | null;

export type Track = {
  id: string;
  x: number;
  y: number;
  z: number;
  align?: "above" | "card" | "axis" | "pile";
};

type Props = {
  family: Family;
  homeId: HomeId;
  /** the other families, standing still in their own homes */
  statics: StaticSpec[];
  looks: Record<string, LookState>;
  stands: Record<string, Stand>;
  caseId: PlaceId | null;
  washed: Record<string, boolean>;
  hinted: Record<string, boolean>;
  /** what the visitor asked for: these wear an outline and their label bounces */
  marked: Record<string, boolean>;
  /** body id → place in the wave, for the verb being played */
  performers: Record<string, number>;
  perform: Perform;
  focus: string | null;
  hover: string | null;
  tracks: Track[];
  els: MutableRefObject<Map<string, HTMLElement>>;
  /** px kept free for the menus: left, top, right, bottom */
  inset: [number, number, number, number];
  /** bumps when the page wants the showing view back */
  resetKey: number;
  /** the visitor holds the view: offer the showing view back */
  free: boolean;
  /** say once how the street moves */
  hint: boolean;
  /** a clean still is being taken: no easing */
  still: boolean;
  /** take the picture without the answer in it, for a before-and-after */
  before: boolean;
  onHover: (id: string | null) => void;
  onTouch: (id: string) => void;
  /** the floor of a room was touched */
  onRoom: (id: PlaceId) => void;
  onMiss: () => void;
  onReady: () => void;
  /** the visitor has taken the angle (true) or given it back (false) */
  onFree: (free: boolean) => void;
  /** the visitor has carried the street well away from what was being shown */
  onAway: (away: boolean) => void;
};

/** where the visitor is looking from; the page keeps deciding what to look at */
export type Orbit = {
  tAz: number;
  tEl: number;
  tZoom: number;
  /** how far the visitor has dragged the street, metres on the ground */
  panX: number;
  panZ: number;
  free: boolean;
  /** a drag is in progress; the next click is not a touch */
  dragging: boolean;
  moved: number;
};

const AZ = (-28 * Math.PI) / 180;
const EL = (38 * Math.PI) / 180;
const EL_MIN = (8 * Math.PI) / 180;
const EL_MAX = (70 * Math.PI) / 180;

/** A still is being taken (?still in the address): nothing eases, the camera
    and everything that gets out of its way are at once where they end up.
    A hidden tab draws a frame only now and then, so easing would never arrive. */
const stillMode = { on: false };

/* ?before: the same picture without the answer in it. The piece the address
   points at is not built, and the things it would hold are left where they
   end up instead — on the floor in front of the spot. It is only ever used to
   take the "before" of a pair; the site itself never turns it on. */
const beforeMode = { on: false };

/** the same numbers every time, so the mess is the same mess */
function dice(seed: number) {
  let a = (seed * 2654435761) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** what a piece holds, left where it lands without the piece: a heap on the
    floor in front of the spot, things on top of things */
function strewn(o: ReturnType<typeof outfitFor>): PropBlock[] {
  const rnd = dice(o.left + o.width);
  const cx = o.left + o.width / 2;
  const cy = o.depth + 420;
  let heap = 0;
  return o.props.map((b) => {
    // a coat or a towel falls into a heap and spreads; a plant, a laptop or a
    // basket stands where it was put down
    const flat = !b.model;
    const w = flat ? b.w * 1.35 : b.w;
    const d = flat ? Math.max(b.d, b.h * 0.8) * 1.2 : b.d;
    const h = flat ? Math.min(b.h * 0.42, 130) : b.h;
    const near = flat && heap > 0 && rnd() < 0.7;
    const z = near ? heap : 0;
    if (flat) heap = z + h * 0.8;
    return {
      ...b,
      key: `strewn:${b.key}`,
      hangs: false,
      w,
      d,
      h,
      x: cx - w / 2 + (rnd() - 0.5) * (near ? 240 : o.width * 0.9),
      y: cy - d / 2 + (rnd() - 0.5) * (near ? 200 : 520),
      z,
      ...(flat ? {} : { turn: rnd() * Math.PI * 2 }),
    };
  });
}

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 1.9;
/** one press of a turn button, or of Q and E */
const TURN_STEP = Math.PI / 6;
const ZOOM_STEP = 1.25;
/** shorter than this a press is a step; longer, the view keeps moving */
const HOLD_MS = 260;
const zoomed = (z: number) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));

/** a view button held down: which way it pulls, and where the view was */
type Hold = {
  az: number;
  zoom: number;
  t0: number;
  fromAz: number;
  fromZoom: number;
};

export default function FamilyCanvas(p: Props) {
  const orbit = useRef<Orbit>({
    tAz: AZ,
    tEl: EL,
    tZoom: 1,
    panX: 0,
    panZ: 0,
    free: false,
    dragging: false,
    moved: 0,
  });
  const last = useRef<{
    x: number;
    y: number;
    id: number;
    turn: boolean;
  } | null>(null);
  /** fingers on the glass: two of them turn the street and pinch it */
  const pts = useRef(new Map<number, { x: number; y: number }>());
  const twist = useRef<{ d: number; a: number } | null>(null);
  const hold = useRef<Hold | null>(null);
  /** what the camera looks at (before the visitor's drag) and from which side,
      as the rig last reported it: a drag follows the view, and stops at the
      edge of the neighbourhood */
  const sight = useRef({ x: 0, z: 0, az: AZ });
  const gone = useRef(false);
  const onAway = p.onAway;
  const onSight = (x: number, z: number, az: number) => {
    // carried well away from what the page was showing: the page's words about
    // that place no longer describe the picture (a little give, so it does not
    // flicker at the edge)
    const o = orbit.current;
    const far = Math.hypot(o.panX, o.panZ) > (gone.current ? 6 : 9);
    if (far !== gone.current) {
      gone.current = far;
      onAway(far);
    }
    sight.current.x = x;
    sight.current.z = z;
    sight.current.az = az;
  };
  const raf = useRef(0);
  const box = useRef<HTMLDivElement>(null);
  /** what a plain drag does: carry the street along, or turn it */
  const [mode, setMode] = useState<"move" | "turn">("move");
  const onFree = p.onFree;

  const take = () => {
    const o = orbit.current;
    if (o.free) return;
    o.free = true;
    onFree(true);
  };
  const spread = () => {
    const [a, b] = [...pts.current.values()];
    if (!a || !b) return null;
    return {
      d: Math.hypot(b.x - a.x, b.y - a.y),
      a: Math.atan2(b.y - a.y, b.x - a.x),
    };
  };

  const down = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0 && e.button !== 2) return;
    const o = orbit.current;
    if (e.pointerType === "touch") {
      pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.current.size === 2) {
        twist.current = spread();
        last.current = null;
        o.dragging = true;
        return;
      }
    }
    // the right button, alt or shift does the other thing
    const other = e.button === 2 || e.altKey || e.shiftKey;
    last.current = {
      x: e.clientX,
      y: e.clientY,
      id: e.pointerId,
      turn: (mode === "turn") !== other,
    };
    o.moved = 0;
    o.dragging = false;
  };
  const move = (e: React.PointerEvent) => {
    const o = orbit.current;
    if (e.pointerType === "touch" && pts.current.has(e.pointerId)) {
      pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const was = twist.current;
      const now = pts.current.size === 2 ? spread() : null;
      if (was && now) {
        let da = now.a - was.a;
        if (da > Math.PI) da -= 2 * Math.PI;
        if (da < -Math.PI) da += 2 * Math.PI;
        o.tAz += da;
        if (now.d > 1) o.tZoom = zoomed((o.tZoom * was.d) / now.d);
        twist.current = now;
        take();
        return;
      }
    }
    const l = last.current;
    if (!l || l.id !== e.pointerId) return;
    const dx = e.clientX - l.x;
    const dy = e.clientY - l.y;
    l.x = e.clientX;
    l.y = e.clientY;
    o.moved += Math.abs(dx) + Math.abs(dy);
    if (o.moved < 6) return;
    if (!o.dragging) {
      o.dragging = true;
      take();
      // the drag keeps going over the words at the side
      try {
        box.current?.setPointerCapture(e.pointerId);
      } catch {
        /* the pointer is already gone */
      }
    }
    if (l.turn) {
      o.tAz -= dx * 0.0062;
      o.tEl = Math.min(EL_MAX, Math.max(EL_MIN, o.tEl + dy * 0.0048));
      return;
    }
    // drag the street under the camera: the scene follows the finger
    const k = 0.0016 * o.tZoom * 14;
    const az = sight.current.az;
    const rx = Math.cos(az);
    const rz = -Math.sin(az);
    const fx = -Math.sin(az);
    const fz = -Math.cos(az);
    o.panX += -dx * k * rx + dy * k * fx;
    o.panZ += -dx * k * rz + dy * k * fz;
    // the street ends where the neighbourhood does: no walking out onto bare table
    const sx = sight.current.x;
    const sz = sight.current.z;
    o.panX = Math.min(BOUNDS.x1 - sx, Math.max(BOUNDS.x0 - sx, o.panX));
    o.panZ = Math.min(BOUNDS.z1 - sz, Math.max(BOUNDS.z0 - sz, o.panZ));
  };
  const up = (e: React.PointerEvent) => {
    pts.current.delete(e.pointerId);
    twist.current = null;
    last.current = null;
    // one finger stays down: it carries on from where it is
    const rest = [...pts.current.entries()][0];
    if (rest)
      last.current = {
        x: rest[1].x,
        y: rest[1].y,
        id: rest[0],
        turn: mode === "turn",
      };
    // let the click that ends a drag pass first, then forget the drag
    window.setTimeout(() => {
      if (pts.current.size === 0) orbit.current.dragging = false;
    }, 0);
  };

  const showing = () => {
    const o = orbit.current;
    o.tAz = AZ + Math.round((o.tAz - AZ) / (2 * Math.PI)) * 2 * Math.PI;
    o.tEl = EL;
    o.tZoom = 1;
    o.free = false;
    o.panX = 0;
    o.panZ = 0;
    onFree(false);
  };
  const resetKey = p.resetKey;
  useEffect(() => {
    if (resetKey === 0) return;
    const o = orbit.current;
    o.tAz = AZ + Math.round((o.tAz - AZ) / (2 * Math.PI)) * 2 * Math.PI;
    o.tEl = EL;
    o.tZoom = 1;
    o.free = false;
    o.panX = 0;
    o.panZ = 0;
    onFree(false);
  }, [resetKey, onFree]);
  // choosing a room or a piece takes the camera there: the drag is forgotten
  const caseId = p.caseId;
  const focus = p.focus;
  useEffect(() => {
    orbit.current.panX = 0;
    orbit.current.panZ = 0;
  }, [caseId, focus]);

  // two fingers sideways turn the street, up and down come closer, a pinch too
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      const o = orbit.current;
      const unit = e.deltaMode === 1 ? 32 : 1;
      const dy = e.deltaY * unit;
      const side = (e.shiftKey && e.deltaX === 0 ? e.deltaY : e.deltaX) * unit;
      if (e.ctrlKey) o.tZoom = zoomed(o.tZoom * Math.exp(dy * 0.01));
      else if (e.shiftKey || Math.abs(side) > Math.abs(dy))
        o.tAz += side * 0.0035;
      else o.tZoom = zoomed(o.tZoom * Math.exp(dy * 0.0012));
      if (!o.free) {
        o.free = true;
        onFree(true);
      }
    };
    el.addEventListener("wheel", wheel, { passive: false });
    return () => el.removeEventListener("wheel", wheel);
  }, [onFree]);

  // Q and E turn, plus and minus come closer
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const at = e.target;
      if (at instanceof Element && at.closest("input, textarea, select"))
        return;
      const o = orbit.current;
      const k = e.key.toLowerCase();
      if (k === "q") o.tAz -= TURN_STEP;
      else if (k === "e") o.tAz += TURN_STEP;
      else if (k === "+" || k === "=") o.tZoom = zoomed(o.tZoom / ZOOM_STEP);
      else if (k === "-" || k === "_") o.tZoom = zoomed(o.tZoom * ZOOM_STEP);
      else return;
      if (!o.free) {
        o.free = true;
        onFree(true);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onFree]);
  useEffect(() => () => window.cancelAnimationFrame(raf.current), []);
  const still = p.still;
  const before = p.before;
  useEffect(() => {
    stillMode.on = still;
    beforeMode.on = before;
    return () => {
      stillMode.on = false;
      beforeMode.on = false;
    };
  }, [still, before]);

  /* the view buttons: a press is one step, holding keeps it going */
  const step = (az: number, zoom: number, from?: Hold) => {
    const o = orbit.current;
    o.tAz = (from?.fromAz ?? o.tAz) + az * TURN_STEP;
    o.tZoom = zoomed((from?.fromZoom ?? o.tZoom) * Math.pow(ZOOM_STEP, zoom));
    take();
  };
  const press = (e: React.PointerEvent, az: number, zoom: number) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const o = orbit.current;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* the pointer is already gone */
    }
    hold.current = {
      az,
      zoom,
      t0: e.timeStamp,
      fromAz: o.tAz,
      fromZoom: o.tZoom,
    };
    take();
    let prev = 0;
    const loop = (now: number) => {
      const h = hold.current;
      if (!h) return;
      const dt = prev === 0 ? 0 : Math.min(0.05, (now - prev) / 1000);
      prev = now;
      if (now - h.t0 > HOLD_MS) {
        orbit.current.tAz += h.az * dt * 1.5;
        orbit.current.tZoom = zoomed(
          orbit.current.tZoom * Math.exp(h.zoom * dt * 0.9),
        );
      }
      raf.current = window.requestAnimationFrame(loop);
    };
    window.cancelAnimationFrame(raf.current);
    raf.current = window.requestAnimationFrame(loop);
  };
  const release = (e: React.PointerEvent) => {
    const h = hold.current;
    hold.current = null;
    window.cancelAnimationFrame(raf.current);
    if (h && e.timeStamp - h.t0 <= HOLD_MS) step(h.az, h.zoom, h);
  };

  const dof = useMemo(() => new THREE.Vector3(7, 0.5, 2.5), []);
  return (
    <>
      <div
        ref={box}
        className="fm-canvas"
        data-mode={mode}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Canvas
          shadows="percentage"
          dpr={[1, 1.5]}
          gl={{
            alpha: false,
            antialias: false,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.1,
            preserveDrawingBuffer: true,
          }}
          camera={{ fov: 24, near: 0.05, far: 160, position: [7, 12, 24] }}
          style={{ background: "transparent" }}
          onPointerMissed={() => {
            if (!orbit.current.dragging) p.onMiss();
          }}
        >
          <color attach="background" args={["#f1e4d3"]} />
          {/* far away the model fades into the paper, so there is no edge to find */}
          <fog attach="fog" args={["#f1e4d3", 78, 160]} />
          <Suspense fallback={null}>
            <Environment
              files={HDRI_FILE}
              path={HDRI_PATH}
              environmentIntensity={0.5}
            />
            <hemisphereLight args={["#fff0da", "#d9bf9c", 0.62]} />
            {/* a fill from where the visitor stands: no shadows, it only lifts
                the faces turned towards them */}
            <directionalLight
              position={[-9, 8, 16]}
              intensity={0.7}
              color="#fff2e2"
            />
            <Sun orbit={orbit} sight={sight} />
            <Selection>
              <Scene {...p} dof={dof} orbit={orbit} onSight={onSight} />
              <EffectComposer multisampling={0} autoClear={false}>
                <N8AO
                  aoRadius={0.55}
                  intensity={2.2}
                  distanceFalloff={0.9}
                  quality="medium"
                  halfRes
                />
                <SMAA />
                <Vignette offset={0.3} darkness={0.14} />
                <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
                {/* what the visitor asked for stands out: one orange line round
                    it, drawn after the tone mapping so the orange stays the brand's */}
                <Outline
                  blur
                  edgeStrength={9}
                  pulseSpeed={0.35}
                  visibleEdgeColor={0xe7551a}
                  hiddenEdgeColor={0xe7551a}
                  xRay
                />
              </EffectComposer>
            </Selection>
          </Suspense>
        </Canvas>
      </div>

      <div className="fm-cam" role="group" aria-label="The view">
        <button
          type="button"
          className="fm-view f-btn f-btn--sm"
          data-show={p.free}
          tabIndex={p.free ? 0 : -1}
          onClick={showing}
        >
          Reset the view
        </button>
        <div className="fm-cam-row">
          <div className="fm-seg" role="group" aria-label="What a drag does">
            <button
              type="button"
              aria-pressed={mode === "move"}
              onClick={() => setMode("move")}
            >
              move
            </button>
            <button
              type="button"
              aria-pressed={mode === "turn"}
              onClick={() => setMode("turn")}
            >
              turn
            </button>
          </div>
          <div className="fm-cam-pair">
            <ViewButton
              label="Turn the street to the left (Q)"
              onPress={(e) => press(e, -1, 0)}
              onRelease={release}
              onStep={() => step(-1, 0)}
            >
              <path d="M6.2 8.2A7.5 7.5 0 1 1 4.5 13" />
              <path d="M5.6 3.6v5h5" />
            </ViewButton>
            <ViewButton
              label="Turn the street to the right (E)"
              onPress={(e) => press(e, 1, 0)}
              onRelease={release}
              onStep={() => step(1, 0)}
            >
              <path d="M17.8 8.2A7.5 7.5 0 1 0 19.5 13" />
              <path d="M18.4 3.6v5h-5" />
            </ViewButton>
          </div>
          <div className="fm-cam-pair">
            <ViewButton
              label="Step back (−)"
              onPress={(e) => press(e, 0, 1)}
              onRelease={release}
              onStep={() => step(0, 1)}
            >
              <path d="M6 12h12" />
            </ViewButton>
            <ViewButton
              label="Come closer (+)"
              onPress={(e) => press(e, 0, -1)}
              onRelease={release}
              onStep={() => step(0, -1)}
            >
              <path d="M6 12h12M12 6v12" />
            </ViewButton>
          </div>
        </div>
      </div>
    </>
  );
}

/** one of the view buttons: the pointer holds it, the keyboard steps it */
function ViewButton({
  label,
  children,
  onPress,
  onRelease,
  onStep,
}: {
  label: string;
  children: React.ReactNode;
  onPress: (e: React.PointerEvent) => void;
  onRelease: (e: React.PointerEvent) => void;
  onStep: () => void;
}) {
  return (
    <button
      type="button"
      className="fm-cam-b"
      aria-label={label}
      title={label}
      onPointerDown={onPress}
      onPointerUp={onRelease}
      onPointerCancel={onRelease}
      onClick={(e) => {
        if (e.detail === 0) onStep();
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </button>
  );
}

/** everything that needs the scanned textures, once they are in */
function Scene(
  p: Props & {
    dof: THREE.Vector3;
    orbit: MutableRefObject<Orbit>;
    onSight: (x: number, z: number, az: number) => void;
  },
) {
  const palette = usePalette();
  const orbit = p.orbit;
  return (
    <PaletteCtx.Provider value={palette}>
      <Town
        homeId={p.homeId}
        caseId={p.caseId}
        onRoom={(id) => {
          if (!orbit.current.dragging) p.onRoom(id);
        }}
      />
      {p.statics.map((st) => (
        <StaticBody
          key={`${st.family.id}:${st.body.id}`}
          family={st.family}
          body={st.body}
          look={st.placed.look}
          stand={st.placed.stand}
        />
      ))}
      {p.family.bodies.map((b) => {
        const look = p.looks[b.id];
        const stand = p.stands[b.id];
        if (!look || !stand) return null;
        return (
          <BodyGroup
            key={`${p.family.id}:${b.id}`}
            family={p.family}
            body={b}
            look={look}
            stand={stand}
            washed={p.washed[b.id] ?? false}
            hinted={p.hinted[b.id] ?? false}
            marked={p.marked[b.id] ?? false}
            hovered={p.hover === b.id}
            focused={p.focus === b.id}
            perform={p.perform}
            wave={p.performers[b.id]}
            onHover={p.onHover}
            onTouch={p.onTouch}
            orbit={orbit}
          />
        );
      })}
      <Rig
        family={p.family}
        homeId={p.homeId}
        focus={p.focus}
        caseId={p.caseId}
        looks={p.looks}
        stands={p.stands}
        inset={p.inset}
        orbit={orbit}
        dof={p.dof}
        onSight={p.onSight}
      />
      <Tracker tracks={p.tracks} els={p.els} inset={p.inset} />
      <Ready onReady={p.onReady} />
    </PaletteCtx.Provider>
  );
}

function Ready({ onReady }: { onReady: () => void }) {
  const done = useRef(false);
  useFrame(() => {
    if (done.current) return;
    done.current = true;
    onReady();
  });
  return null;
}

/* ---------- the street: homes, road, gardens, neighbours ---------- */

function Town({
  homeId,
  caseId,
  onRoom,
}: {
  homeId: HomeId;
  caseId: PlaceId | null;
  onRoom: (id: PlaceId) => void;
}) {
  return (
    <group>
      <Ground />
      <Roads />
      <StreetScenery />
      {homes.map((h) => (
        <HomeSet
          key={h.id}
          home={h}
          current={h.id === homeId}
          caseId={caseId}
          onRoom={onRoom}
        />
      ))}
    </group>
  );
}

/* ---------- one home: floors, walls and what it already owns ---------- */

function HomeSet({
  home: h,
  current,
  caseId,
  onRoom,
}: {
  home: Home;
  current: boolean;
  caseId: PlaceId | null;
  onRoom: (id: PlaceId) => void;
}) {
  const palette = usePal();
  const keeps = useMemo(() => homeKeeps(h), [h]);
  const models = useMemo(() => homeModels(h), [h]);
  const plaster = useMemo(
    () => scaled(palette.plastered_wall, 3, 2.5),
    [palette],
  );
  const plasterLow = useMemo(
    () => scaled(palette.plastered_wall, 2, 0.85),
    [palette],
  );
  const linen = useMemo(() => scaled(palette.rough_linen, 1.2, 1.2), [palette]);
  const doors = useMemo(() => thresholds(h), [h]);
  const W = mm(h.w);
  const D = mm(h.d);
  return (
    <group
      position={[h.origin.x, 0, h.origin.z]}
      rotation={[0, (h.rot * Math.PI) / 180, 0]}
    >
      <Slab home={h} />
      {h.rooms.map((r) => {
        const w = mm(r.x1 - r.x0);
        const d = mm(r.z1 - r.z0);
        const lit = current && (caseId === null || caseId === r.id);
        return (
          <mesh
            key={r.id}
            position={[mm(r.x0) + w / 2, 0.005, mm(r.z0) + d / 2]}
            receiveShadow
            onClick={(e) => {
              e.stopPropagation();
              onRoom(r.id);
            }}
          >
            <boxGeometry args={[w, 0.01, d]} />
            <RoomFloor kind={r.floor} w={w} d={d} lit={lit} dim={!current} />
          </mesh>
        );
      })}
      {h.walls.map((wl, i) => (
        <WallMesh
          key={i}
          wall={wl}
          midX={W / 2}
          midZ={D / 2}
          color={wl.kind === "full" ? h.tone.wall : h.tone.cut}
          set={wl.kind === "full" ? plaster : plasterLow}
        />
      ))}
      {doors.map((t, i) => (
        <mesh
          key={`sill${i}`}
          position={[mm(t.x), 0.006, mm(t.z)]}
          receiveShadow
        >
          <boxGeometry args={[mm(t.w), 0.014, mm(t.d)]} />
          <meshPhysicalMaterial color="#c9a878" roughness={0.6} />
        </mesh>
      ))}
      {rugs.map((r, i) => {
        const room = h.rooms.find((x) => x.id === r.room);
        if (!room) return null;
        return (
          <mesh
            key={`rug${i}`}
            position={[mm(r.x), 0.014, mm(room.z0 + r.z)]}
            receiveShadow
          >
            <boxGeometry args={[mm(r.w), 0.016, mm(r.d)]} />
            <meshPhysicalMaterial
              color={r.tone}
              roughness={1}
              normalMap={linen.normal}
              normalScale={[0.9, 0.9]}
            />
          </mesh>
        );
      })}
      {floorLines.map((l, i) => {
        const room = h.rooms.find((x) => x.id === l.room);
        if (!room) return null;
        return (
          <mesh
            key={`line${i}`}
            position={[mm(l.x + l.w / 2), 0.0125, mm(room.z0 + l.z + l.d / 2)]}
            receiveShadow
          >
            <boxGeometry args={[mm(l.w), 0.003, mm(l.d)]} />
            <meshStandardMaterial color="#e7551a" roughness={0.75} />
          </mesh>
        );
      })}
      {floorWords.map((w, i) => {
        const room = h.rooms.find((x) => x.id === w.room);
        if (!room) return null;
        return <FloorWordMesh key={`word${i}`} word={w} z={mm(room.z0)} />;
      })}
      {art.map((a, i) => {
        const room = h.rooms.find((x) => x.id === a.room);
        if (!room) return null;
        return <Picture key={`art${i}`} art={a} z={mm(room.z0)} />;
      })}
      {keeps.map((k) => (
        <KeepBlock key={k.block.key} block={k.block} zBack={k.zBack} />
      ))}
      {models.map(({ key, ...m }) => (
        <Model key={key} {...m} />
      ))}
    </group>
  );
}

/* ---------- a word painted on a workshop floor ---------- */

function FloorWordMesh({ word: w, z }: { word: FloorWord; z: number }) {
  const [tex, setTex] = useState<THREE.CanvasTexture | null>(null);
  const long = w.text.length * 0.62;
  useEffect(() => {
    let live = true;
    // stencilled in the label face, once that face has arrived
    void document.fonts.ready.then(() => {
      if (!live) return;
      const c = document.createElement("canvas");
      c.width = Math.ceil(long * 128);
      c.height = 150;
      const g = c.getContext("2d");
      if (!g) return;
      const face = getComputedStyle(document.documentElement)
        .getPropertyValue("--font-space-mono")
        .trim();
      g.font = `700 118px ${face || "monospace"}, monospace`;
      g.textBaseline = "middle";
      g.fillStyle = "#e7551a";
      g.fillText(w.text, 4, 78);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      setTex(t);
    });
    return () => {
      live = false;
    };
  }, [w.text, long]);
  if (!tex) return null;
  const h = mm(w.size) * 1.17;
  const wide = mm(w.size) * long;
  return (
    <mesh
      position={[mm(w.x) + wide / 2, 0.0135, z + mm(w.z) - h / 2]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[wide, h]} />
      <meshStandardMaterial map={tex} transparent roughness={0.8} />
    </mesh>
  );
}

/* ---------- something framed on a tall wall ---------- */

const INK = "#5a2a1c";
const pictures = new Map<string, THREE.CanvasTexture>();

/** Four quiet pictures in the homes' own colours, drawn once per shape. */
function pictureTex(pic: Art["pic"], w: number, h: number) {
  const key = `${pic}|${w}|${h}`;
  const hit = pictures.get(key);
  if (hit) return hit;
  const c = document.createElement("canvas");
  c.width = Math.round((512 * w) / Math.max(w, h));
  c.height = Math.round((512 * h) / Math.max(w, h));
  const g = c.getContext("2d");
  if (g) {
    const W = c.width;
    const H = c.height;
    const m = Math.round(Math.min(W, H) * 0.11);
    g.fillStyle = "#f7efe2";
    g.fillRect(0, 0, W, H);
    const iw = W - 2 * m;
    const ih = H - 2 * m;
    g.save();
    g.beginPath();
    g.rect(m, m, iw, ih);
    g.clip();
    g.fillStyle = "#efe2cf";
    g.fillRect(m, m, iw, ih);
    if (pic === 0) {
      // a low sun over two hills
      g.fillStyle = "#d9956b";
      g.beginPath();
      g.arc(m + iw * 0.68, m + ih * 0.42, ih * 0.2, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = "#b9bf9f";
      g.beginPath();
      g.ellipse(m + iw * 0.3, m + ih * 1.05, iw * 0.5, ih * 0.55, 0, 0, 7);
      g.fill();
      g.fillStyle = "#cdb690";
      g.beginPath();
      g.ellipse(m + iw * 0.85, m + ih * 1.1, iw * 0.5, ih * 0.45, 0, 0, 7);
      g.fill();
    } else if (pic === 1) {
      // an arch
      g.fillStyle = "#d3a27f";
      const aw = iw * 0.56;
      const ax = m + (iw - aw) / 2;
      g.beginPath();
      g.moveTo(ax, m + ih);
      g.lineTo(ax, m + ih * 0.5);
      g.arc(ax + aw / 2, m + ih * 0.5, aw / 2, Math.PI, 0);
      g.lineTo(ax + aw, m + ih);
      g.fill();
      g.fillStyle = INK;
      g.beginPath();
      g.arc(ax + aw / 2, m + ih * 0.2, iw * 0.05, 0, 7);
      g.fill();
    } else if (pic === 2) {
      // three bands and a moon
      g.fillStyle = "#c3c7a8";
      g.fillRect(m, m + ih * 0.58, iw, ih * 0.2);
      g.fillStyle = "#d9b08c";
      g.fillRect(m, m + ih * 0.78, iw, ih * 0.22);
      g.fillStyle = "#fbf5ea";
      g.beginPath();
      g.arc(m + iw * 0.3, m + ih * 0.3, Math.min(iw, ih) * 0.13, 0, 7);
      g.fill();
    } else if (pic === 4) {
      // a working drawing: a cabinet in line, with its measures
      g.fillStyle = "#f4f0e6";
      g.fillRect(m, m, iw, ih);
      g.strokeStyle = INK;
      g.lineWidth = Math.max(1.5, iw * 0.006);
      const bx = m + iw * 0.2;
      const by = m + ih * 0.16;
      const bw = iw * 0.42;
      const bh = ih * 0.66;
      g.strokeRect(bx, by, bw, bh);
      for (const t of [0.33, 0.66]) {
        g.beginPath();
        g.moveTo(bx, by + bh * t);
        g.lineTo(bx + bw, by + bh * t);
        g.stroke();
      }
      g.beginPath();
      g.moveTo(bx + bw / 2, by);
      g.lineTo(bx + bw / 2, by + bh);
      g.stroke();
      // measure lines
      g.lineWidth = Math.max(1, iw * 0.003);
      g.beginPath();
      g.moveTo(bx, by + bh + ih * 0.07);
      g.lineTo(bx + bw, by + bh + ih * 0.07);
      g.moveTo(bx + bw + iw * 0.07, by);
      g.lineTo(bx + bw + iw * 0.07, by + bh);
      g.stroke();
      g.fillStyle = "#e7551a";
      g.fillRect(bx + bw + iw * 0.16, by, iw * 0.12, ih * 0.05);
      g.fillStyle = INK;
      for (let i = 0; i < 5; i++)
        g.fillRect(
          bx + bw + iw * 0.16,
          by + ih * (0.12 + i * 0.07),
          iw * (0.2 - (i % 2) * 0.06),
          ih * 0.015,
        );
    } else {
      // cut-out leaves
      g.fillStyle = "#9aa583";
      for (const [x, y, r] of [
        [0.34, 0.36, -0.5],
        [0.62, 0.52, 0.4],
        [0.42, 0.72, 0.1],
      ] as const) {
        g.save();
        g.translate(m + iw * x, m + ih * y);
        g.rotate(r);
        g.beginPath();
        g.ellipse(0, 0, iw * 0.11, ih * 0.2, 0, 0, 7);
        g.fill();
        g.restore();
      }
      g.strokeStyle = INK;
      g.lineWidth = Math.max(2, iw * 0.012);
      g.beginPath();
      g.moveTo(m + iw * 0.5, m + ih * 0.95);
      g.quadraticCurveTo(
        m + iw * 0.44,
        m + ih * 0.6,
        m + iw * 0.5,
        m + ih * 0.2,
      );
      g.stroke();
    }
    g.restore();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  pictures.set(key, t);
  return t;
}

/** A framed picture hung flat on a room's back wall (z: the wall's face, metres). */
function Picture({ art: a, z }: { art: Art; z: number }) {
  const tex = useMemo(() => pictureTex(a.pic, a.w, a.h), [a.pic, a.w, a.h]);
  const w = mm(a.w);
  const h = mm(a.h);
  return (
    <group position={[mm(a.x), mm(a.y), z]}>
      <mesh position={[0, 0, 0.016]} castShadow receiveShadow>
        <boxGeometry args={[w + 0.04, h + 0.04, 0.03]} />
        <meshPhysicalMaterial color="#d9bd93" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 0.0325]}>
        <planeGeometry args={[w, h]} />
        <meshPhysicalMaterial map={tex} roughness={0.9} />
      </mesh>
    </group>
  );
}

/** One wall of a home. A tall one stands behind the rooms; when the visitor
    walks round and looks from behind it, it drops to the cut so the rooms stay
    open from every side. */
/* ---------- the sun ---------- */

const SUN = new THREE.Vector3(9, 15, 7);
const SUN_REACH = 26;
const SUN_MAP = 4096;

/** The one light that casts shadows. Its shadow map is a square of ground, and
    the street is far bigger than one square: so the square goes with what the
    visitor looks at. It moves a whole texel at a time, in the light's own
    frame, which is what keeps the shadows' edges from shimmering while the
    street is carried along. */
function Sun({
  orbit,
  sight,
}: {
  orbit: MutableRefObject<Orbit>;
  sight: MutableRefObject<{ x: number; z: number; az: number }>;
}) {
  const ref = useRef<THREE.DirectionalLight>(null);
  const basis = useMemo(() => {
    const dir = SUN.clone().normalize();
    const right = new THREE.Vector3(0, 1, 0).cross(dir).normalize();
    const up = dir.clone().cross(right).normalize();
    return { right, up, at: new THREE.Vector3() };
  }, []);
  useFrame(() => {
    const l = ref.current;
    if (!l) return;
    const { right, up, at } = basis;
    at.set(
      sight.current.x + orbit.current.panX,
      0,
      sight.current.z + orbit.current.panZ,
    );
    const texel = (SUN_REACH * 2) / SUN_MAP;
    const x = at.dot(right);
    const y = at.dot(up);
    at.addScaledVector(right, Math.round(x / texel) * texel - x);
    at.addScaledVector(up, Math.round(y / texel) * texel - y);
    l.target.position.copy(at);
    l.target.updateMatrixWorld();
    // far enough back that a tree top at the edge of the square is still in front of it
    l.position.copy(at).addScaledVector(SUN, 2);
  });
  return (
    <directionalLight
      ref={ref}
      position={[SUN.x, SUN.y, SUN.z]}
      intensity={2.5}
      color="#ffe0b8"
      castShadow
      shadow-mapSize-width={SUN_MAP}
      shadow-mapSize-height={SUN_MAP}
      shadow-radius={4}
      shadow-bias={-0.00015}
      shadow-normalBias={0.02}
      shadow-camera-left={-SUN_REACH}
      shadow-camera-right={SUN_REACH}
      shadow-camera-top={SUN_REACH}
      shadow-camera-bottom={-SUN_REACH}
      shadow-camera-near={0.5}
      shadow-camera-far={120}
    />
  );
}

function WallMesh({
  wall: wl,
  midX,
  midZ,
  color,
  set,
}: {
  wall: Home["walls"][number];
  /** the middle of the home, metres, in its own frame */
  midX: number;
  midZ: number;
  color: string;
  set: ReturnType<typeof scaled>;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const k = useRef(1);
  const down = useRef(false);
  const v = useMemo(() => new THREE.Vector3(), []);
  const q = useMemo(() => new THREE.Quaternion(), []);
  const tall = wl.kind === "full";
  const along = wl.z0 === wl.z1;
  const len = mm(Math.abs(along ? wl.x1 - wl.x0 : wl.z1 - wl.z0));
  const hgt = mm(tall ? NORTH_H : CUT_H);
  const cx = mm(wl.x0 + wl.x1) / 2;
  const cz = mm(wl.z0 + wl.z1) / 2;
  // which way is out: away from the middle of the home
  const outX = along ? 0 : cx < midX ? -1 : 1;
  const outZ = along ? (cz < midZ ? -1 : 1) : 0;
  useFrame((state, dtRaw) => {
    const m = ref.current;
    if (!m || !tall || !m.parent) return;
    // A tall wall steps down when the room is looked at through it, that is
    // when the visitor has turned the street round. It goes by the way the eye
    // looks, not by where the eye is: carrying the street along moves the eye
    // past every back wall in turn, and they must not rise and fall for that.
    state.camera.getWorldDirection(v);
    v.applyQuaternion(m.parent.getWorldQuaternion(q).invert());
    const flat = Math.hypot(v.x, v.z) || 1;
    const through = -((v.x / flat) * outX + (v.z / flat) * outZ);
    // a little give either side of edge-on, so it does not flutter there
    if (through > 0.14) down.current = true;
    else if (through < 0.02) down.current = false;
    const goal = down.current ? CUT_H / NORTH_H : 1;
    const dt = Math.min(dtRaw, 0.05);
    k.current +=
      (goal - k.current) * (stillMode.on ? 1 : 1 - Math.exp(-dt * 6));
    m.scale.y = k.current;
    m.position.y = (hgt * k.current) / 2;
  });
  return (
    <mesh ref={ref} position={[cx, hgt / 2, cz]} receiveShadow castShadow>
      <boxGeometry
        args={along ? [len, hgt, mm(WALL_T)] : [mm(WALL_T), hgt, len]}
      />
      {/* Painted plaster, the same the neighbours' houses wear: the scan's
          grain, none of its grey. The top, where the wall is cut through, is a
          tone darker, the way a section is drawn. Box faces: +x -x +y -y +z -z. */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <meshPhysicalMaterial
          key={i}
          attach={`material-${i}`}
          color={i === 2 ? "#e2d6c4" : color}
          roughness={0.92}
          roughnessMap={set.rough}
          normalMap={set.normal}
          normalScale={[0.22, 0.22]}
        />
      ))}
    </mesh>
  );
}

function RoomFloor({
  kind,
  w,
  d,
  lit,
  dim,
}: {
  kind: "plank" | "plaster" | "concrete";
  w: number;
  d: number;
  lit: boolean;
  dim: boolean;
}) {
  const palette = usePal();
  const set = useMemo(
    () =>
      scaled(
        kind === "plank" ? palette.laminate_floor_02 : palette.plastered_wall,
        w,
        d,
      ),
    [palette, kind, w, d],
  );
  const base = kind === "plank" ? "#fbefdc" : "#ece2d2";
  return (
    <meshPhysicalMaterial
      map={set.map}
      roughnessMap={set.rough}
      normalMap={set.normal}
      normalScale={[0.45, 0.45]}
      color={dim ? "#e3d6c2" : lit ? base : "#eadcc8"}
      roughness={kind === "plank" ? 0.55 : 0.62}
    />
  );
}

function KeepBlock({ block: bl, zBack }: { block: Block3D; zBack: number }) {
  const palette = usePal();
  const specs = useMemo(() => specsWith(palette, bl, "keep"), [palette, bl]);
  const pos = useMemo<[number, number, number]>(
    () => [
      mm(bl.x + bl.w / 2),
      mm(bl.z + bl.h / 2),
      mm(zBack) + mm(KEEP_D - bl.y - bl.d / 2),
    ],
    [bl, zBack],
  );
  const mats = useMats();
  return (
    <mesh position={pos} rotation={axisRotation(bl)} castShadow receiveShadow>
      <Geometry block={bl} />
      <Materials specs={specs} bind={mats.bind} />
    </mesh>
  );
}

/** a real piece of furniture from the model library, standing on the floor (local mm) */
function Model({
  id,
  url,
  x,
  z,
  h,
  rot,
  scale,
}: {
  id?: ModelId;
  url: string;
  x: number;
  z: number;
  h: number;
  rot: number;
  scale: number;
}) {
  const { scene } = useGLTF(url, DRACO);
  const obj = useMemo(() => {
    const c = scene.clone(true);
    // some scans ship a second, dressed-up copy beside the plain one (the roller
    // door comes with a graffiti twin two metres along): only the plain one stays
    const extra: THREE.Object3D[] = [];
    c.traverse((o) => {
      if (/graffiti/i.test(o.name)) extra.push(o);
    });
    for (const o of extra) o.removeFromParent();
    const skins = id ? (SKINS[id] ?? []) : [];
    c.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      m.receiveShadow = true;
      const mat = m.material as THREE.MeshStandardMaterial;
      const skin = skins.find(
        (k) => m.name.includes(k.match) || mat.name.includes(k.match),
      );
      if (!skin) return;
      // keep the scanned surface, change the colour
      const warm = mat.clone();
      warm.map = null;
      warm.color.set(skin.color);
      warm.metalnessMap = null;
      warm.metalness = 0;
      if (skin.roughness !== undefined) {
        warm.roughnessMap = null;
        warm.roughness = skin.roughness;
      }
      m.material = warm;
    });
    const box = new THREE.Box3().setFromObject(c);
    const centre = box.getCenter(new THREE.Vector3());
    c.position.set(-centre.x, -box.min.y, -centre.z);
    const g = new THREE.Group();
    g.add(c);
    return g;
  }, [scene, id]);
  return (
    <primitive
      object={obj}
      position={[mm(x), mm(h), mm(z)]}
      rotation={[0, rot, 0]}
      scale={scale}
    />
  );
}

/* ---------- one body, where it stands, and the change it is going through ---------- */

type BodyAnim = {
  n: number;
  time: number;
  wash: number;
  hover: number;
  pulse: number;
  perfN: number;
  perfT: number;
  verb: VerbId | null;
  roll: number;
  press: number;
  lid: number;
  kickHang: number;
  kickPut: number;
};

type Pose = { pos: THREE.Vector3; rot: [number, number, number] };

/** leftover parts, laid flat in front of the body (local metres) */
function pilePoses(off: Block3D[], left: number, width: number, depth: number) {
  const out = new Map<string, Pose>();
  const cx = mm(left) + mm(width) / 2;
  const cz = mm(depth) + 0.42;
  let y = 0;
  let small = 0;
  const big = off
    .filter((b) => Math.max(b.w, b.h, b.d) >= 120)
    .sort((a, b) => b.w * b.h * b.d - a.w * a.h * a.d);
  for (const b of big) {
    const thin = Math.min(b.w, b.h, b.d);
    const rot: [number, number, number] =
      thin === b.h
        ? [0, 0, 0]
        : thin === b.w
          ? [0, 0, Math.PI / 2]
          : [Math.PI / 2, 0, 0];
    out.set(b.key, {
      pos: new THREE.Vector3(
        cx + (hashUnit(b.key, 5) - 0.5) * 0.05,
        y + mm(thin) / 2,
        cz + (hashUnit(b.key, 6) - 0.5) * 0.05,
      ),
      rot,
    });
    y += mm(thin) + 0.002;
  }
  for (const b of off) {
    if (out.has(b.key)) continue;
    out.set(b.key, {
      pos: new THREE.Vector3(
        cx - 0.42 - (small % 5) * 0.075,
        mm(b.h) / 2,
        cz - 0.12 + Math.floor(small / 5) * 0.09,
      ),
      rot: [0, 0, 0],
    });
    small++;
  }
  return out;
}

function BodyGroup({
  family,
  body,
  look,
  stand,
  washed,
  hinted,
  marked,
  hovered,
  focused,
  perform,
  wave,
  onHover,
  onTouch,
  orbit,
}: {
  family: Family;
  body: Body;
  look: LookState;
  stand: Stand;
  washed: boolean;
  hinted: boolean;
  marked: boolean;
  hovered: boolean;
  focused: boolean;
  perform: Perform;
  wave: number | undefined;
  onHover: (id: string | null) => void;
  onTouch: (id: string) => void;
  orbit: MutableRefObject<Orbit>;
}) {
  const strip = family.strip;
  const to = useMemo(
    () => outfitFor(family, body, look.to),
    [family, body, look.to],
  );
  const from = useMemo(
    () => (look.from ? outfitFor(family, body, look.from) : null),
    [family, body, look.from],
  );
  const change = useMemo(() => changeBetween(from, to), [from, to]);
  const onSorted = useMemo(
    () => [...change.on].sort((a, b) => a.z - b.z || a.x - b.x),
    [change.on],
  );
  const piles = useMemo(
    () =>
      look.leftover ? pilePoses(change.off, to.left, to.width, to.depth) : null,
    [look.leftover, change.off, to.left, to.width, to.depth],
  );
  const life = lifeOf(body, look.to.lifeId);
  const concept = life
    ? isConcept(life)
    : body.lives.every((l) => isConcept(l));
  const topZ = to.height - 40;
  const lifts = life ? !(productOf(life)?.door ?? false) : false;
  const sameLife = look.n > 0 && look.from?.lifeId === look.to.lifeId;

  // the answer is not there yet: what it holds lies about instead
  const mess = useMemo(
    () => (beforeMode.on && focused ? strewn(to) : null),
    [focused, to],
  );

  const group = useRef<THREE.Group>(null);
  const anim = useRef<BodyAnim>({
    n: look.n,
    time: look.n === 0 ? PROPS_AT - 0.9 - look.delay : 9,
    wash: washed ? 1 : 0,
    hover: 0,
    pulse: 0,
    perfN: perform?.n ?? 0,
    perfT: 9,
    verb: null,
    roll: 0,
    press: 0,
    lid: 0,
    kickHang: 1,
    kickPut: 1,
  });
  // where it stands now, and where it is going
  const walk = useRef({
    x: stand.x,
    z: stand.z,
    rot: stand.rot,
    fromX: stand.x,
    fromZ: stand.z,
    fromRot: stand.rot,
    t: 9,
    delay: 0,
  });
  const plate = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state, dtRaw) => {
    const a = anim.current;
    const w = walk.current;
    const dt = Math.min(dtRaw, 0.25);
    if (a.n !== look.n) {
      a.n = look.n;
      a.time = -look.delay;
    }
    a.time += dt;
    // carried to a new spot: a slow walk with a little lift
    if (
      Math.abs(w.x - stand.x) > 1e-4 ||
      Math.abs(w.z - stand.z) > 1e-4 ||
      Math.abs(w.rot - stand.rot) > 1e-4
    ) {
      if (w.t >= 1) {
        w.fromX = w.x;
        w.fromZ = w.z;
        w.fromRot = w.rot;
        w.t = 0;
        w.delay = look.delay;
      }
    }
    let lift = 0;
    if (w.t < 1) {
      w.delay -= dt;
      if (w.delay <= 0) w.t = Math.min(1, w.t + dt / WALK_S);
      const e = easeInOut(w.t);
      w.x = w.fromX + (stand.x - w.fromX) * e;
      w.z = w.fromZ + (stand.z - w.fromZ) * e;
      let dr = stand.rot - w.fromRot;
      dr = Math.atan2(Math.sin(dr), Math.cos(dr));
      w.rot = w.fromRot + dr * e;
      lift = Math.sin(w.t * Math.PI) * 0.16;
      if (w.t >= 1) {
        w.x = stand.x;
        w.z = stand.z;
        w.rot = stand.rot;
      }
    }
    if (group.current) {
      group.current.position.set(
        w.x + a.roll * Math.cos(w.rot),
        lift,
        w.z - a.roll * Math.sin(w.rot),
      );
      group.current.rotation.y = w.rot;
    }
    const k = 1 - Math.exp(-dt * 5);
    a.wash += ((washed ? 1 : 0) - a.wash) * k;
    a.hover +=
      ((hovered || focused ? 1 : 0) - a.hover) * (1 - Math.exp(-dt * 9));
    if (perform && a.perfN !== perform.n) {
      a.perfN = perform.n;
      if (wave !== undefined) {
        a.perfT = -wave * 0.16;
        a.verb = perform.verb;
      }
    }
    a.perfT += dt;
    const t = a.perfT;
    a.roll =
      a.verb === "roll"
        ? 0.34 * Math.sin(Math.PI * easeInOut(clamp01(t / 1.9)))
        : 0;
    a.press =
      a.verb === "sit" ? -0.014 * Math.sin(Math.PI * clamp01(t / 0.7)) : 0;
    a.lid =
      a.verb === "hide"
        ? 0.15 * Math.sin(Math.PI * easeInOut(clamp01(t / 1.5)))
        : 0;
    a.kickHang = a.verb === "hang" ? clamp01(t / 0.9) : 1;
    // every other verb: what it holds lands again, and the floor under it lights
    a.kickPut =
      a.verb && !["hang", "roll", "hide"].includes(a.verb)
        ? clamp01(t / 0.9)
        : 1;
    a.pulse = hinted ? 0.5 + 0.5 * Math.sin(state.clock.elapsedTime * 3.2) : 0;
    if (plate.current) {
      plate.current.opacity = Math.max(
        0.13 * a.hover,
        hinted ? 0.1 + 0.2 * a.pulse : 0,
        marked ? 0.16 + 0.06 * Math.sin(state.clock.elapsedTime * 2.6) : 0,
      );
    }
  });

  const over = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      onHover(body.id);
    },
    [onHover, body.id],
  );
  const out = useCallback(() => onHover(null), [onHover]);
  const click = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    // the click that ends a drag is not a touch
    if (orbit.current.dragging) return;
    onTouch(body.id);
  };

  const w = mm(to.width);
  const h = mm(to.height);
  const d = mm(to.depth);
  const left = mm(to.left);
  const home = useMemo(() => ({ strip }), [strip]);
  if (mess)
    return (
      <group position={[stand.x, 0, stand.z]} rotation={[0, stand.rot, 0]}>
        {mess.map((b, i) => (
          <FBlock
            key={b.key}
            block={b}
            role="prop"
            n={0}
            home={home}
            anim={anim}
            concept={false}
            index={i}
            count={mess.length}
            hangs={false}
            settled
            top={false}
          />
        ))}
      </group>
    );
  return (
    <group
      ref={group}
      position={[stand.x, 0, stand.z]}
      rotation={[0, stand.rot, 0]}
    >
      <mesh
        position={[left + w / 2, 0.004, d / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[w + 0.26, d + 0.26]} />
        <meshBasicMaterial
          ref={plate}
          color="#e7551a"
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>
      <mesh
        position={[left + w / 2, h / 2 + 0.02, d / 2]}
        onPointerOver={over}
        onPointerOut={out}
        onClick={click}
      >
        <boxGeometry args={[w + 0.06, h + 0.04, d + 0.06]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      {/* only what is furniture wears the outline: not the floor plate, not the
          volume that catches the pointer */}
      <Select enabled={marked}>
        {change.kept.map((b) => (
          <FBlock
            key={`k:${b.key}:${b.z}:${b.x}`}
            block={b}
            role="kept"
            n={look.n}
            home={home}
            anim={anim}
            concept={concept}
            top={lifts && b.z >= topZ && b.kind === "part"}
          />
        ))}
        {onSorted.map((b, i) => (
          <FBlock
            key={`on:${look.n}:${b.key}`}
            block={b}
            role="on"
            n={look.n}
            home={home}
            anim={anim}
            concept={concept}
            index={i}
            count={onSorted.length}
            top={false}
          />
        ))}
        {change.off.map((b, i) => (
          <FBlock
            key={`off:${look.n}:${b.key}`}
            block={b}
            role="off"
            n={look.n}
            home={home}
            anim={anim}
            concept={concept}
            index={i}
            count={change.off.length}
            pile={piles?.get(b.key)}
            top={false}
          />
        ))}
        {to.props.map((b, i) => (
          <FBlock
            key={`p:${b.key}`}
            block={b}
            role="prop"
            n={look.n}
            home={home}
            anim={anim}
            concept={false}
            index={i}
            count={to.props.length}
            hangs={b.hangs}
            settled={sameLife}
            top={false}
          />
        ))}
        {from && from !== to && !sameLife
          ? from.props.map((b) => (
              <FBlock
                key={`po:${look.n}:${b.key}`}
                block={b}
                role="propOut"
                n={look.n}
                home={home}
                anim={anim}
                concept={false}
                top={false}
              />
            ))
          : null}
      </Select>
    </group>
  );
}

/* ---------- a body from another family, standing still at home ---------- */

function StaticBody({
  family,
  body,
  look,
  stand,
}: {
  family: Family;
  body: Body;
  look: Look;
  stand: Stand;
}) {
  const palette = usePal();
  const merged = useMemo(() => {
    const o = outfitFor(family, body, look);
    const life = lifeOf(body, look.lifeId);
    const state = life && isConcept(life) ? "concept" : "made";
    return mergeBlocks(
      [
        ...o.parts.map((b) => ({
          block: b,
          specs: specsWith(palette, b, "part", state),
        })),
        ...o.props
          .filter((b) => !b.model)
          .map((b) => ({
            block: b,
            specs: specsWith(palette, b, "prop"),
          })),
      ],
      family.strip,
    );
  }, [palette, family, body, look]);
  const real = useMemo(
    () => outfitFor(family, body, look).props.filter((b) => b.model),
    [family, body, look],
  );
  return (
    <group position={[stand.x, 0, stand.z]} rotation={[0, stand.rot, 0]}>
      {merged.map((m, i) => (
        <mesh key={i} geometry={m.geometry} castShadow receiveShadow>
          <meshPhysicalMaterial {...matProps(m.spec)} />
        </mesh>
      ))}
      {real.map((b) => (
        <group key={b.key} position={localPoint(b, family.strip)}>
          <PropModel block={b} />
        </group>
      ))}
    </group>
  );
}

/* ---------- one box of plywood, a hook, a coat ---------- */

function useMats() {
  const current = useRef(new Map<number, THREE.MeshStandardMaterial>());
  const bind = useCallback(
    (i: number) => (m: THREE.MeshStandardMaterial | null) => {
      if (m) current.current.set(i, m);
      else current.current.delete(i);
    },
    [],
  );
  return useMemo(() => ({ ref: current, bind }), [bind]);
}

const WASH = new THREE.Color("#f6e8d8");

function paint(
  mats: Map<number, THREE.MeshStandardMaterial>,
  opacity: number,
  wash: number,
) {
  // A body in another room, or one not asked for, steps back a touch. It stays
  // solid furniture: a see-through, glowing piece reads as a placeholder.
  for (const mt of mats.values()) {
    mt.opacity = opacity;
    mt.transparent = opacity < 0.999;
    mt.depthWrite = opacity > 0.5;
    mt.emissive.copy(WASH);
    mt.emissiveIntensity = wash * 0.12;
  }
}

function Geometry({ block: bl }: { block: Block3D }) {
  const geo = bl.geo ?? "box";
  const box = useMemo(
    () =>
      geo === "box"
        ? roundedBox(mm(bl.w), mm(bl.h), mm(bl.d), 1.25, softness(bl))
        : null,
    [geo, bl],
  );
  if (geo === "cylinder")
    return (
      <cylinderGeometry
        args={
          bl.axis === "x"
            ? [mm(bl.h) / 2, mm(bl.h) / 2, mm(bl.w), 24]
            : bl.axis === "y"
              ? [mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.d), 24]
              : [mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.h), 24]
        }
      />
    );
  if (geo === "sphere") return <sphereGeometry args={[mm(bl.w) / 2, 22, 16]} />;
  if (box) return <primitive object={box} attach="geometry" />;
  return <boxGeometry args={[mm(bl.w), mm(bl.h), mm(bl.d)]} />;
}

function Materials({
  specs,
  bind,
}: {
  specs: Spec[];
  bind: (i: number) => (m: THREE.MeshStandardMaterial | null) => void;
}) {
  if (specs.length === 6)
    return (
      <>
        {specs.map((sp, i) => (
          <meshPhysicalMaterial
            key={i}
            attach={`material-${i}`}
            ref={bind(i)}
            {...matProps(sp)}
            transparent
          />
        ))}
      </>
    );
  const sp = specs[0] ?? { color: "#d9b98c", roughness: 0.8 };
  return <meshPhysicalMaterial ref={bind(0)} {...matProps(sp)} transparent />;
}

function FBlock({
  block: bl,
  role,
  n,
  home,
  anim,
  concept,
  index = 0,
  count = 1,
  pile,
  hangs = false,
  settled = false,
  top,
}: {
  block: Block3D;
  role: "kept" | "on" | "off" | "prop" | "propOut";
  n: number;
  home: { strip: number };
  anim: MutableRefObject<BodyAnim>;
  concept: boolean;
  index?: number;
  count?: number;
  pile?: Pose | undefined;
  hangs?: boolean;
  /** the same life as before (only a door went on): what it holds stays put */
  settled?: boolean;
  top: boolean;
}) {
  const ref = useRef<THREE.Object3D | null>(null);
  const real = (bl as PropBlock).model ? (bl as PropBlock) : null;
  const mats = useMats();
  const palette = usePal();
  const specs = useMemo<Spec[]>(
    () =>
      role === "prop" || role === "propOut"
        ? specsWith(palette, bl, "prop")
        : specsWith(palette, bl, "part", concept ? "concept" : "made"),
    [palette, bl, role, concept],
  );
  // local: x right, y up, z toward you; the back of the body is at z = 0
  const target = useMemo(
    () =>
      new THREE.Vector3(
        mm(bl.x + bl.w / 2),
        mm(bl.z + bl.h / 2),
        mm(home.strip - bl.y - bl.d / 2),
      ),
    [bl, home],
  );
  const fly = useMemo(() => {
    const a = hashUnit(bl.key, 1);
    const c = hashUnit(bl.key, 2);
    const d = hashUnit(bl.key, 3);
    return {
      offset: new THREE.Vector3((a - 0.5) * 0.7, 0.75 + c * 0.5, 0.2 + d * 0.3),
      spin: [(c - 0.5) * 0.7, (a - 0.5) * 0.5, (d - 0.5) * 0.7] as const,
    };
  }, [bl.key]);
  const base = useMemo(() => axisRotation(bl), [bl]);
  const scratch = useRef(new THREE.Vector3());

  useFrame(() => {
    const m = ref.current;
    if (!m) return;
    const a = anim.current;
    const time = a.n === n ? a.time : -1;
    const partsU = clamp01(time / PARTS_S);
    const out = scratch.current.copy(target);
    let opacity = bl.opacity;
    let rx = 0;
    let ry = 0;
    let rz = 0;
    if (role === "on") {
      const t0 = 0.22 + 0.45 * (index / Math.max(1, count));
      const u = clamp01((partsU - t0) / 0.33);
      const e = easeOutBack(u);
      const eo = easeOutCubic(u);
      out.addScaledVector(fly.offset, 1 - e);
      rx = fly.spin[0] * (1 - eo);
      ry = fly.spin[1] * (1 - eo);
      rz = fly.spin[2] * (1 - eo);
      opacity = bl.opacity * clamp01(u * 4);
    } else if (role === "off") {
      const t0 = 0.3 * (index / Math.max(1, count));
      if (pile) {
        const u = clamp01((partsU - t0) / 0.6);
        const e = easeInOut(u);
        out.lerp(pile.pos, e);
        out.y += Math.sin(u * Math.PI) * 0.3;
        rx = pile.rot[0] * e;
        ry = pile.rot[1] * e;
        rz = pile.rot[2] * e;
      } else {
        const u = clamp01((partsU - t0) / 0.4);
        out.y += 0.55 * easeOutCubic(u);
        out.z += 0.12 * easeOutCubic(u);
        rx = fly.spin[0] * u * 0.6;
        rz = fly.spin[2] * u * 0.6;
        opacity = bl.opacity * (1 - clamp01((u - 0.35) / 0.65));
      }
    } else if (role === "prop") {
      const t0 = (index / Math.max(1, count)) * 0.6;
      const u =
        settled || (n === 0 && !hangs)
          ? 1
          : clamp01(((time - PROPS_AT) / PROPS_S - t0) / 0.4);
      const kick = hangs ? a.kickHang : a.kickPut;
      const ku = clamp01((kick - t0 * 0.5) / 0.6);
      out.y += 0.35 * (1 - easeOutBounce(u)) + 0.3 * (1 - easeOutBounce(ku));
      opacity = clamp01(u * 5);
    } else if (role === "propOut") {
      opacity = 1 - clamp01(Math.max(0, time) / 0.22);
      if (time < 0) opacity = 1;
    }
    if (top && (role !== "off" || !pile)) out.y += a.press + a.lid;
    if (role !== "off") out.y += 0.012 * a.hover;
    m.position.copy(out);
    m.rotation.set(base[0] + rx, base[1] + ry, base[2] + rz);
    paint(mats.ref.current, opacity, role === "off" && pile ? 0 : a.wash);
    m.visible = opacity > 0.01;
  });

  if (real)
    return (
      <group
        ref={(o) => {
          ref.current = o;
        }}
      >
        <PropModel block={real} />
      </group>
    );
  return (
    <mesh
      ref={(o) => {
        ref.current = o;
      }}
      castShadow
      receiveShadow
    >
      <Geometry block={bl} />
      <Materials specs={specs} bind={mats.bind} />
      {!concept &&
        bl.holes?.map(([hx, , hz], i) => (
          <mesh
            key={i}
            position={[
              mm(hx - (bl.x + bl.w / 2)),
              mm(hz - (bl.z + bl.h / 2)),
              mm(bl.d) / 2 + 0.0008,
            ]}
          >
            <circleGeometry args={[0.0055, 12]} />
            <meshStandardMaterial color="#4a3222" roughness={1} />
          </mesh>
        ))}
    </mesh>
  );
}

/* ---------- camera: the whole house, one room, or one body ---------- */

function Rig({
  family,
  homeId,
  focus,
  caseId,
  looks,
  stands,
  inset,
  orbit,
  dof,
  onSight,
}: {
  family: Family;
  homeId: HomeId;
  focus: string | null;
  caseId: PlaceId | null;
  looks: Record<string, LookState>;
  stands: Record<string, Stand>;
  inset: [number, number, number, number];
  /** read here; only the canvas wrapper writes it */
  orbit: MutableRefObject<Orbit>;
  /** where the lens focuses: it follows what the camera looks at */
  dof: THREE.Vector3;
  /** tells the wrapper what is looked at, and from which side */
  onSight: (x: number, z: number, az: number) => void;
}) {
  const size = useThree((s) => s.size);
  const goal = useMemo(() => {
    const fov = (24 * Math.PI) / 180;
    const freeW = Math.max(240, size.width - inset[0] - inset[2]);
    const freeH = Math.max(240, size.height - inset[1] - inset[3]);
    // the street view: the home fills the screen and the neighbours show at the edges
    const home = homeOf(homeId) ?? homes[0]!;
    const hf = homeFrame(home);
    // What a floor plan takes up on the screen, seen from the corner the eye
    // stands at: its width and depth both show across, and its depth and its
    // walls both show upward. The columns beside the window are solid, so a
    // home has to fit between them whole.
    const seen = (w: number, d: number, e: number) => ({
      wide: w * Math.abs(Math.cos(AZ)) + d * Math.abs(Math.sin(AZ)),
      tall:
        (w * Math.abs(Math.sin(AZ)) + d * Math.abs(Math.cos(AZ))) *
          Math.sin(e) +
        2.6 * Math.cos(e),
    });
    let target = new THREE.Vector3(hf.x, 0.4, hf.z + 0.4);
    let { wide, tall } = seen(hf.wide, hf.deep, EL);
    wide += 1.6;
    tall += 1.2;
    // a home is seen from above, a room from a step ladder; a piece from a
    // little higher again, so nothing in front of it stands in the way
    let el = EL;
    // every home stands at its own angle, and is looked at from its open side
    let az = AZ + (home.rot * Math.PI) / 180;
    const room = roomOf(caseId);
    if (room) {
      const rf = roomFrame(room);
      target = new THREE.Vector3(rf.x, 0.55, rf.z + 0.3);
      el = (32 * Math.PI) / 180;
      const rs = seen(rf.wide, rf.deep, el);
      wide = rs.wide + 1.8;
      tall = rs.tall + 1.0;
      az = AZ + ((homeOf(room.home)?.rot ?? 0) * Math.PI) / 180;
    }
    const body = family.bodies.find((b) => b.id === focus);
    const look = body ? looks[body.id] : undefined;
    const stand = body ? stands[body.id] : undefined;
    if (body && look && stand) {
      const o = outfitFor(family, body, look.to);
      const c = worldPoint(
        stand,
        mm(o.left) + mm(o.width) / 2,
        mm(o.height) * 0.5,
        mm(o.depth) / 2,
      );
      target = new THREE.Vector3(c[0], c[1], c[2]);
      // the piece is what is being looked at: it takes about a third of the
      // window, with its wall and its neighbours round it. The eye stays high
      // enough that a bed or a low wall in front does not stand in the way.
      wide = mm(o.width) * 1.25 + 1.7;
      tall = mm(o.height) * 1.15 + 1.25;
      el = (35 * Math.PI) / 180;
    }
    const dist =
      (Math.max(tall / freeH, wide / freeW) * size.height) /
      (2 * Math.tan(fov / 2));
    // a piece is looked at from the open side of the home it lives in
    const life = body && look ? lifeOf(body, look.to.lifeId) : undefined;
    const lived = homeOf(roomOf(life?.caseId ?? null)?.home);
    if (body && look && stand && lived) {
      // ... and from the side it faces. Most pieces stand against the back wall
      // and are seen as the home is. A flat one that faces along the room (a
      // screen, a dividing wall) would be seen edge-on, so the eye walks round
      // to its front, as far as the open side lets it; a boxy one reads from
      // its side too, so the eye only leans that way.
      const open = (lived.rot * Math.PI) / 180;
      const d = stand.rot - open;
      const faces = Math.atan2(Math.sin(d), Math.cos(d));
      const quarter = Math.PI / 2;
      const o = outfitFor(family, body, look.to);
      const gain = o.depth <= o.width * 0.45 ? 1 : 0.35;
      let swing = AZ;
      if (Math.abs(faces) < quarter * 1.5)
        swing =
          AZ +
          gain *
            (faces > 0
              ? (Math.min(faces, quarter) / quarter) * ((78 * Math.PI) / 180)
              : (Math.max(faces, -quarter) / quarter) * ((24 * Math.PI) / 180));
      az = open + swing;
    }
    return { target, dist, el, az };
  }, [
    family,
    homeId,
    focus,
    caseId,
    looks,
    stands,
    inset,
    size.width,
    size.height,
  ]);
  const aim = useRef(new THREE.Vector3(3, 0.4, 13));
  const dist = useRef(0);
  const first = useRef(true);
  const offset = useRef("");
  const smooth = useRef({
    az: AZ,
    side: AZ,
    turn: 0,
    el: EL,
    base: EL,
    tilt: 0,
    zoom: 1,
  });
  /* Going somewhere else is a journey, not a cut: the camera leaves where it
     was, rises a little so the streets between are seen, and comes down on the
     new place. The further it is, the longer it takes and the higher it goes. */
  const flight = useRef<{
    t: number;
    T: number;
    lift: number;
    x: number;
    y: number;
    z: number;
    dist: number;
    side: number;
    base: number;
  } | null>(null);
  const seen = useRef<THREE.Vector3 | null>(null);
  /** where the visitor had carried the view: a journey starts from there */
  const carried = useRef({ x: 0, z: 0 });
  useFrame((state, dtRaw) => {
    const cam = state.camera as THREE.PerspectiveCamera;
    const o = orbit.current;
    const sm = smooth.current;
    const dt = Math.min(dtRaw, 0.05);
    const snap = first.current || stillMode.on;
    const k = snap ? 1 : 1 - Math.exp(-dt * 3.4);
    const ko = snap ? 1 : 1 - Math.exp(-dt * 9);
    first.current = false;
    // a new place to look at, far enough to be a journey
    if (!seen.current || !seen.current.equals(goal.target)) {
      const far = seen.current ? aim.current.distanceTo(goal.target) : 0;
      seen.current = goal.target.clone();
      flight.current =
        !snap && far > 1.5
          ? {
              t: 0,
              T: Math.min(3.4, Math.max(1.1, 0.9 + far * 0.075)),
              lift: Math.min(0.6, far * 0.02),
              // from where the visitor was actually looking: the drag they had
              // made is given back the moment another place is chosen
              x: aim.current.x + carried.current.x - o.panX,
              y: aim.current.y,
              z: aim.current.z + carried.current.z - o.panZ,
              dist: dist.current,
              side: sm.side,
              base: sm.base,
            }
          : null;
    }
    const f = snap ? null : flight.current;
    let lift = 1;
    if (f) {
      f.t += dt;
      const u = easeInOut(clamp01(f.t / f.T));
      aim.current.set(
        f.x + (goal.target.x - f.x) * u,
        f.y + (goal.target.y - f.y) * u,
        f.z + (goal.target.z - f.z) * u,
      );
      dist.current = f.dist + (goal.dist - f.dist) * u;
      sm.side = f.side + (goal.az - f.side) * u;
      sm.base = f.base + (goal.el - f.base) * u;
      lift = 1 + f.lift * Math.sin(Math.PI * u);
      if (f.t >= f.T) flight.current = null;
    } else {
      // the side the page looks from; what it looks at sets the height of the eye
      sm.side += (goal.az - sm.side) * k;
      sm.base += (goal.el - sm.base) * k;
      aim.current.lerp(goal.target, k);
      dist.current += (goal.dist - dist.current) * k;
    }
    // however far the visitor has turned and tilted it is added on top
    sm.turn += (o.tAz - AZ - sm.turn) * ko;
    sm.az = sm.side + sm.turn;
    sm.tilt += (o.tEl - EL - sm.tilt) * ko;
    sm.el = Math.min(EL_MAX, Math.max(EL_MIN, sm.base + sm.tilt));
    sm.zoom += (o.tZoom - sm.zoom) * ko;
    dof.set(aim.current.x + o.panX, aim.current.y, aim.current.z + o.panZ);
    const d = dist.current * sm.zoom * lift;
    const ax = aim.current.x + o.panX;
    const az = aim.current.z + o.panZ;
    cam.position.set(
      ax + d * Math.sin(sm.az) * Math.cos(sm.el),
      aim.current.y + d * Math.sin(sm.el),
      az + d * Math.cos(sm.az) * Math.cos(sm.el),
    );
    cam.lookAt(ax, aim.current.y, az);
    onSight(aim.current.x, aim.current.z, sm.az);
    carried.current.x = o.panX;
    carried.current.z = o.panZ;
    // keep the scene in the part of the screen the menus leave free
    const ox = -(inset[0] - inset[2]) / 2;
    const oy = -(inset[1] - inset[3]) / 2;
    const key = `${size.width}|${size.height}|${ox}|${oy}`;
    if (offset.current !== key) {
      offset.current = key;
      cam.setViewOffset(
        size.width,
        size.height,
        ox,
        oy,
        size.width,
        size.height,
      );
    }
  });
  return null;
}

/* ---------- words pinned to points in the house ---------- */

function Tracker({
  tracks,
  els,
  inset,
}: {
  tracks: Track[];
  els: MutableRefObject<Map<string, HTMLElement>>;
  inset: [number, number, number, number];
}) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const v = useMemo(() => new THREE.Vector3(), []);
  useFrame(() => {
    for (const t of tracks) {
      const el = els.current.get(t.id);
      if (!el) continue;
      v.set(t.x, t.y, t.z).project(camera);
      const al = t.align ?? "above";
      let px = ((v.x + 1) / 2) * size.width;
      let py = ((1 - v.y) / 2) * size.height;
      if (al === "card") {
        const h = el.offsetHeight || 400;
        px = Math.min(size.width - 356, px);
        // clear of the top line, and of the view buttons in the corner
        py = Math.max(
          h / 2 + inset[1] + 8,
          Math.min(size.height - h / 2 - 112, py),
        );
      }
      const shift =
        al === "card"
          ? "translate(28px, -50%)"
          : al === "axis"
            ? "translate(-50%, -50%)"
            : al === "pile"
              ? "translate(-50%, 8px)"
              : "translate(-50%, -100%)";
      el.style.transform = `translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) ${shift}`;
      // a word never shows through the column of text at the side
      const clear = al === "card" || px > inset[0] - 36;
      el.style.opacity = v.z < 1 && clear ? "1" : "0";
    }
  });
  return null;
}
