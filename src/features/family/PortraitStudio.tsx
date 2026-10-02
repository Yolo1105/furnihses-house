"use client";

/* Development only. Every life of every body, alone on nothing, in the street's
   own materials and light, at one scale per family. Each frame is cut to what
   is in it and saved with its alpha, so the index page can stand all sixty in
   a line on the paper itself. */

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, type RootState } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
  EffectComposer,
  N8AO,
  SMAA,
  ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import * as THREE from "three";
import { matProps, mergeBlocks, specsWith, usePalette } from "./pbr";
import { outfitFor } from "./outfit";
import { PropModel, localPoint } from "./PropModel";
import {
  families,
  isConcept,
  type Body,
  type Family,
  type FamilyId,
  type Life,
} from "./data";
import {
  PORTRAIT_AZ,
  PORTRAIT_EL,
  PORTRAIT_FLOOR,
  PORTRAIT_SCALE,
} from "./portrait-spec";

const W = 1800;
const H = 1500;
const AZ = PORTRAIT_AZ;
const EL = PORTRAIT_EL;
/** px kept clear around what is in the picture */
const PAD = 14;
const FLOOR = PORTRAIT_FLOOR;

type Subject = { family: Family; body: Body; life: Life };

const subjects: Subject[] = families.flatMap((family) =>
  family.bodies.flatMap((body) =>
    body.lives.map((life) => ({ family, body, life })),
  ),
);

type Frame = {
  /** metres: the middle of the footprint, and how tall */
  cx: number;
  cz: number;
  box: THREE.Box3;
};

function SubjectMesh({
  subject,
  onFrame,
}: {
  subject: Subject;
  onFrame: (f: Frame) => void;
}) {
  const palette = usePalette();
  const merged = useMemo(() => {
    const o = outfitFor(subject.family, subject.body, {
      lifeId: subject.life.id,
      doors: false,
    });
    const state = isConcept(subject.life) ? "concept" : "made";
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
      subject.family.strip,
    );
  }, [palette, subject]);
  const frame = useMemo(() => {
    const box = new THREE.Box3();
    for (const m of merged) {
      m.geometry.computeBoundingBox();
      if (m.geometry.boundingBox) box.union(m.geometry.boundingBox);
    }
    return {
      cx: (box.min.x + box.max.x) / 2,
      cz: (box.min.z + box.max.z) / 2,
      box,
    };
  }, [merged]);
  useEffect(() => onFrame(frame), [frame, onFrame]);
  const real = useMemo(
    () =>
      outfitFor(subject.family, subject.body, {
        lifeId: subject.life.id,
        doors: false,
      }).props.filter((b) => b.model),
    [subject],
  );
  return (
    <group position={[-frame.cx, 0, -frame.cz]}>
      {merged.map((m, i) => (
        <mesh key={i} geometry={m.geometry} castShadow receiveShadow>
          <meshPhysicalMaterial {...matProps(m.spec)} />
        </mesh>
      ))}
      {real.map((b) => (
        <group key={b.key} position={localPoint(b, subject.family.strip)}>
          <PropModel block={b} />
        </group>
      ))}
    </group>
  );
}

/** one turn of the event loop; a hidden tab does not slow this one down */
const turn = () =>
  new Promise<void>((r) => {
    const c = new MessageChannel();
    c.port1.onmessage = () => r();
    c.port2.postMessage(0);
  });
/** timers crawl at one a second in a hidden tab, so there it counts turns instead */
const wait = async (ms: number) => {
  if (document.visibilityState === "visible")
    return new Promise<void>((r) => window.setTimeout(r, ms));
  for (let i = 0; i < 12; i++) await turn();
};

export default function PortraitStudio() {
  const [index, setIndex] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const root = useRef<RootState | null>(null);
  const frame = useRef<{ id: string; frame: Frame } | null>(null);
  const subject = subjects[index] ?? subjects[0]!;

  // the camera is the same for everybody of a family: only the scale changes
  const place = (f: Frame, family: FamilyId) => {
    const st = root.current;
    if (!st) return;
    const cam = st.camera as THREE.OrthographicCamera;
    const h = f.box.max.y;
    const d = 30;
    cam.position.set(
      d * Math.sin(AZ) * Math.cos(EL),
      h / 2 + d * Math.sin(EL),
      d * Math.cos(AZ) * Math.cos(EL),
    );
    cam.lookAt(0, h / 2, 0);
    cam.zoom = PORTRAIT_SCALE[family] * 1000;
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld();
  };

  const shoot = async (s: Subject) => {
    const st = root.current;
    const f = frame.current?.id === s.life.id ? frame.current.frame : null;
    if (!st || !f) throw new Error("The studio is not up yet");
    place(f, s.family.id);
    for (let k = 0; k < 3; k++) {
      st.advance(performance.now());
      await wait(30);
    }
    const src = st.gl.domElement;
    const flat = document.createElement("canvas");
    flat.width = src.width;
    flat.height = src.height;
    const ctx = flat.getContext("2d", { willReadFrequently: true });
    if (!ctx) throw new Error("No 2D context");
    ctx.drawImage(src, 0, 0);
    const px = ctx.getImageData(0, 0, flat.width, flat.height).data;
    let x0 = flat.width;
    let y0 = flat.height;
    let x1 = 0;
    let y1 = 0;
    for (let y = 0; y < flat.height; y++)
      for (let x = 0; x < flat.width; x++)
        if ((px[(y * flat.width + x) * 4 + 3] ?? 0) > 8) {
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
    if (x1 <= x0 || y1 <= y0) throw new Error(`${s.life.id}: nothing drawn`);
    // the corner of the footprint nearest the eye: everybody stands on it
    const cam = st.camera;
    const hx = (f.box.max.x - f.box.min.x) / 2;
    const hz = (f.box.max.z - f.box.min.z) / 2;
    let floor = 0;
    for (const [sx, sz] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ] as const) {
      const v = new THREE.Vector3(sx * hx, 0, sz * hz).project(cam);
      floor = Math.max(floor, ((1 - v.y) / 2) * flat.height);
    }
    const left = Math.max(0, x0 - PAD);
    const top = Math.max(0, y0 - PAD);
    const right = Math.min(flat.width, x1 + PAD);
    const bottom = Math.min(
      flat.height,
      Math.max(Math.round(floor) + FLOOR, y1 + 2),
    );
    const out = document.createElement("canvas");
    out.width = right - left;
    out.height = bottom - top;
    out
      .getContext("2d")
      ?.drawImage(
        flat,
        left,
        top,
        out.width,
        out.height,
        0,
        0,
        out.width,
        out.height,
      );
    const blob = await new Promise<Blob | null>((r) =>
      out.toBlob(r, "image/webp", 0.92),
    );
    if (!blob) throw new Error("No picture");
    const corner = px[3] ?? 255;
    const res = await fetch(
      `/api/dev-portrait?id=${s.life.id}&w=${out.width}&h=${out.height}&family=${s.family.id}&scale=${PORTRAIT_SCALE[s.family.id]}`,
      { method: "POST", body: blob },
    );
    return `${s.life.id} ${out.width}×${out.height} ${Math.round(blob.size / 1024)} kB · corner alpha ${corner} · ${res.status}`;
  };

  const runRef = useRef<(only?: string) => Promise<void>>(async () => {});
  useEffect(() => {
    runRef.current = async (only) => {
      setRunning(true);
      const list = only ? subjects.filter((s) => s.life.id === only) : subjects;
      for (const s of list) {
        setIndex(subjects.indexOf(s));
        for (let k = 0; k < 120 && frame.current?.id !== s.life.id; k++)
          await wait(25);
        await wait(60);
        try {
          const line = await shoot(s);
          setLog((l) => [...l, line]);
        } catch (e) {
          setLog((l) => [...l, `FAILED ${s.life.id}: ${String(e)}`]);
        }
      }
      setRunning(false);
      setLog((l) => [...l, "done"]);
    };
  });
  useEffect(() => {
    // the page is driven from the console: window.__portraits("island")
    (
      window as unknown as { __portraits?: (only?: string) => Promise<void> }
    ).__portraits = (only) => runRef.current(only);
  }, []);

  return (
    <div style={{ padding: 16, fontFamily: "monospace", fontSize: 12 }}>
      <p>
        {subjects.length} lives ·{" "}
        <button
          type="button"
          disabled={running}
          onClick={() => runRef.current()}
        >
          shoot all
        </button>{" "}
        <button
          type="button"
          disabled={running}
          onClick={() => runRef.current(subject.life.id)}
        >
          shoot {subject.life.id}
        </button>{" "}
        <button
          type="button"
          disabled={running}
          onClick={() => setIndex((i) => (i + 1) % subjects.length)}
        >
          next
        </button>
      </p>
      <div
        style={{
          width: W,
          height: H,
          background:
            "repeating-conic-gradient(#fff2e5 0 25%, #f3e2d0 0 50%) 0 0 / 40px 40px",
        }}
      >
        <Canvas
          orthographic
          frameloop="never"
          shadows="percentage"
          dpr={1}
          gl={{
            alpha: true,
            antialias: false,
            preserveDrawingBuffer: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.1,
          }}
          camera={{ near: 0.1, far: 100, position: [0, 10, 30], zoom: 500 }}
          onCreated={(st) => {
            root.current = st;
            st.gl.setClearColor(0x000000, 0);
          }}
        >
          <Suspense fallback={null}>
            <Environment
              files="brown_photostudio_02_1k.hdr"
              path="/studio/hdri/"
              environmentIntensity={0.5}
            />
            <hemisphereLight args={["#fff0da", "#d2b48f", 0.4]} />
            <directionalLight
              position={[-4.5, 12, 7]}
              intensity={2.5}
              color="#ffe0b8"
              castShadow
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-radius={5}
              shadow-bias={-0.00015}
              shadow-normalBias={0.02}
              shadow-camera-left={-4}
              shadow-camera-right={4}
              shadow-camera-top={4}
              shadow-camera-bottom={-4}
              shadow-camera-near={0.5}
              shadow-camera-far={40}
            />
            <SubjectMesh
              key={subject.life.id}
              subject={subject}
              onFrame={(f) => {
                frame.current = { id: subject.life.id, frame: f };
                place(f, subject.family.id);
                root.current?.advance(performance.now());
              }}
            />
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[40, 40]} />
              <shadowMaterial color="#3d1a0e" opacity={0.3} />
            </mesh>
            <EffectComposer multisampling={0}>
              <N8AO
                aoRadius={0.4}
                intensity={2.2}
                distanceFalloff={0.9}
                quality="high"
              />
              <SMAA />
              <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
      <pre>{log.join("\n")}</pre>
    </div>
  );
}
