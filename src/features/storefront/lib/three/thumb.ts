"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { blockBounds, colors3d, mm, type Block3D } from "./blocks";

/**
 * One hidden renderer draws every card image once and caches it. A grid of
 * thirteen pieces costs thirteen quick renders, not thirteen WebGL contexts.
 */
/** A world point (mm) the caller wants back as a position on the image. */
export type ThumbMark = { key: string; x: number; y: number; z: number };

type ThumbScene = {
  blocks: Block3D[];
  depthMm: number;
  wallMm?: number;
  showWall?: boolean;
  width?: number;
  height?: number;
  turn?: number;
  marks?: ThumbMark[];
};

/** The image, plus each mark as a fraction of the image width and height. */
export type ThumbResult = {
  url: string;
  marks: { key: string; px: number; py: number }[];
};

const cache = new Map<string, ThumbResult>();
const waiters = new Map<string, Promise<ThumbResult>>();
let renderer: THREE.WebGLRenderer | null = null;
let envTex: THREE.Texture | null = null;
let queue: Promise<void> = Promise.resolve();

function getRenderer() {
  if (renderer) return renderer;
  const canvas = document.createElement("canvas");
  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const pmrem = new THREE.PMREMGenerator(renderer);
  envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  return renderer;
}

function draw(s: ThumbScene): ThumbResult {
  const r = getRenderer();
  const w = s.width ?? 640;
  const h = s.height ?? 520;
  r.setSize(w, h, false);
  const scene = new THREE.Scene();
  scene.environment = envTex;
  scene.environmentIntensity = 0.45;
  const spot = s.wallMm !== undefined;
  const depth = s.depthMm;
  const b = blockBounds(s.blocks);
  const W = s.wallMm ?? b.xmax - b.xmin;
  const bounds = spot
    ? { xmin: 0, xmax: W, ymin: 0, ymax: depth, zmax: Math.max(b.zmax, 1200) }
    : b;

  scene.add(new THREE.HemisphereLight("#fff4e6", "#c9a98a", 0.35));
  const sun = new THREE.DirectionalLight("#ffffff", 1.5);
  sun.position.set(2.6, 4.2, 3.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  const ext = mm(Math.max(W, depth)) * 0.9;
  sun.shadow.camera.left = -ext;
  sun.shadow.camera.right = ext;
  sun.shadow.camera.top = ext;
  sun.shadow.camera.bottom = -ext;
  sun.shadow.camera.near = 0.1;
  sun.shadow.camera.far = 20;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);
  const fill = new THREE.DirectionalLight("#ffffff", 0.45);
  fill.position.set(-3, 2.5, -1.5);
  scene.add(fill);

  const disposables: { dispose: () => void }[] = [];
  const box = (bw: number, bh: number, bd: number) => {
    const g = new THREE.BoxGeometry(bw, bh, bd);
    disposables.push(g);
    return g;
  };
  const material = (color: string, roughness: number, opacity: number) => {
    const m = new THREE.MeshStandardMaterial({
      color,
      roughness,
      metalness: 0,
      transparent: opacity < 0.999,
      opacity,
    });
    disposables.push(m);
    return m;
  };

  // floor: a soft ground either way, so the piece has a shadow to stand on
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(spot ? mm(W) + 0.4 : 6, spot ? mm(depth) + 0.4 : 6),
    new THREE.ShadowMaterial({ opacity: spot ? 0.18 : 0.28 }),
  );
  disposables.push(floor.geometry, floor.material as THREE.Material);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(
    spot ? mm(W) / 2 : mm(b.xmin + b.xmax) / 2,
    -0.0005,
    spot ? mm(depth) / 2 : mm(depth - (b.ymin + b.ymax) / 2),
  );
  floor.receiveShadow = true;
  scene.add(floor);
  if (spot) {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(mm(W) + 0.4, mm(depth) + 0.4),
      material(colors3d.floor, 0.95, 1),
    );
    disposables.push(ground.geometry);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(mm(W) / 2, -0.002, mm(depth) / 2);
    ground.receiveShadow = true;
    scene.add(ground);
    if (s.showWall !== false) {
      const wall = new THREE.Mesh(
        box(mm(W) + 0.4, mm(bounds.zmax + 500), 0.024),
        material(colors3d.wall, 0.98, 1),
      );
      wall.position.set(mm(W) / 2, mm(bounds.zmax + 500) / 2, -0.012);
      wall.receiveShadow = true;
      scene.add(wall);
    }
  }
  for (const bl of s.blocks) {
    if (bl.opacity <= 0) continue;
    const geom =
      bl.geo === "cylinder"
        ? new THREE.CylinderGeometry(mm(bl.w) / 2, mm(bl.w) / 2, mm(bl.h), 28)
        : bl.geo === "sphere"
          ? new THREE.SphereGeometry(mm(bl.w) / 2, 24, 18)
          : box(mm(bl.w), mm(bl.h), mm(bl.d));
    if (bl.geo) disposables.push(geom);
    const mesh = new THREE.Mesh(
      geom,
      material(
        bl.color,
        bl.kind === "keep" ? 0.9 : bl.kind === "prop" ? 0.8 : 0.72,
        bl.opacity,
      ),
    );
    mesh.position.set(
      mm(bl.x + bl.w / 2),
      mm(bl.z + bl.h / 2),
      mm(depth - bl.y - bl.d / 2),
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    if (bl.holes) {
      const hg = new THREE.CircleGeometry(0.0055, 14);
      const hm = material("#5a3e2c", 1, 1);
      disposables.push(hg);
      for (const [hx, , hz] of bl.holes) {
        const hole = new THREE.Mesh(hg, hm);
        hole.position.set(
          mm(hx - (bl.x + bl.w / 2)),
          mm(hz - (bl.z + bl.h / 2)),
          mm(bl.d) / 2 + 0.0008,
        );
        mesh.add(hole);
      }
    }
  }

  const camera = new THREE.PerspectiveCamera(30, w / h, 0.05, 60);
  const cx = mm(bounds.xmin + bounds.xmax) / 2;
  const cy = mm(bounds.zmax) * (spot ? 0.42 : 0.5);
  const cz = mm(depth - (bounds.ymin + bounds.ymax) / 2);
  const tanV = Math.tan((30 * Math.PI) / 360);
  const dist = spot
    ? // a room: fit the wall across the frame and the wall height down it
      Math.max(
        ((mm(W) * 1.12) / 2 / (tanV * (w / h))) * 1.02,
        ((mm(bounds.zmax + 500) + mm(depth) * 0.45) / 2 / tanV) * 1.05,
      )
    : (Math.max(
        mm(bounds.xmax - bounds.xmin),
        mm(bounds.zmax) * 1.1,
        mm(bounds.ymax - bounds.ymin) * 0.8,
      ) /
        2 /
        tanV) *
      1.25;
  const a = (((s.turn ?? 0) + (spot ? 22 : 34)) * Math.PI) / 180;
  const dir = new THREE.Vector3(
    Math.sin(a),
    spot ? 0.42 : 0.5,
    Math.cos(a),
  ).normalize();
  camera.position.set(cx, cy, cz).addScaledVector(dir, dist);
  camera.lookAt(cx, cy, cz);
  r.render(scene, camera);
  const url = r.domElement.toDataURL("image/png");
  const marks = (s.marks ?? []).map((m) => {
    const v = new THREE.Vector3(mm(m.x), mm(m.z), mm(depth - m.y)).project(
      camera,
    );
    return { key: m.key, px: (v.x + 1) / 2, py: (1 - v.y) / 2 };
  });
  for (const d of disposables) d.dispose();
  return { url, marks };
}

const nothing: ThumbResult = { url: "", marks: [] };

function renderThumb(key: string, scene: ThumbScene): Promise<ThumbResult> {
  const hit = cache.get(key);
  if (hit) return Promise.resolve(hit);
  const pending = waiters.get(key);
  if (pending) return pending;
  const p = new Promise<ThumbResult>((resolve) => {
    queue = queue.then(
      () =>
        new Promise<void>((done) => {
          const run = () => {
            try {
              const out = draw(scene);
              cache.set(key, out);
              resolve(out);
            } catch {
              resolve(nothing);
            }
            done();
          };
          if (typeof window.requestIdleCallback === "function")
            window.requestIdleCallback(run, { timeout: 400 });
          else window.setTimeout(run, 0);
        }),
    );
  });
  waiters.set(key, p);
  return p;
}

export function useThumbResult(
  key: string,
  make: () => ThumbScene,
): ThumbResult | null {
  const [done, setDone] = useState<{ key: string; out: ThumbResult }>({
    key: "",
    out: nothing,
  });
  const makeRef = useRef(make);
  useEffect(() => {
    makeRef.current = make;
  });
  useEffect(() => {
    if (cache.has(key)) return;
    let alive = true;
    void renderThumb(key, makeRef.current()).then((out) => {
      if (alive && out.url) setDone({ key, out });
    });
    return () => {
      alive = false;
    };
  }, [key]);
  const cached = cache.get(key);
  if (cached) return cached;
  return done.key === key ? done.out : null;
}

export function useThumb(key: string, make: () => ThumbScene): string | null {
  return useThumbResult(key, make)?.url ?? null;
}
