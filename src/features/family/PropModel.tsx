"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { mm, type Block3D } from "../storefront/lib/three/blocks";
import { DRACO, modelUrl, type PropBlock } from "./prop-models";
import type { ModelId } from "./town";

/** where a block's middle is in its body's own frame (metres): x along, y up,
    z towards the room; the back of the body is at z = 0 */
export const localPoint = (
  bl: Block3D,
  strip: number,
): [number, number, number] => [
  mm(bl.x + bl.w / 2),
  mm(bl.z + bl.h / 2),
  mm(strip - bl.y - bl.d / 2),
];

/**
 * The scanned thing that stands where a stand-in block stood: sized to the
 * block, standing on its bottom, its middle on the block's middle.
 */
export function PropModel({ block: bl }: { block: PropBlock }) {
  const id: ModelId = bl.model ?? "potted_plant_04";
  const { scene } = useGLTF(modelUrl(id), DRACO);
  const obj = useMemo(() => {
    const c = scene.clone(true);
    c.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      m.receiveShadow = true;
    });
    const box = new THREE.Box3().setFromObject(c);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    // fitted inside the block it replaces, whichever way it is turned
    const flat = Math.max(size.x, size.z, 0.001);
    const k = Math.min(
      mm(bl.h) / Math.max(size.y, 0.001),
      mm(Math.max(bl.w, bl.d)) / flat,
      (mm(Math.min(bl.w, bl.d)) * 1.25) / Math.min(size.x, size.z, flat),
    );
    c.position.set(-centre.x, -box.min.y, -centre.z);
    const turned = new THREE.Group();
    turned.add(c);
    turned.scale.setScalar(k);
    turned.rotation.y = bl.turn ?? 0;
    turned.position.y = -mm(bl.h) / 2;
    const holder = new THREE.Group();
    holder.add(turned);
    return holder;
  }, [scene, bl.w, bl.d, bl.h, bl.turn]);
  return <primitive object={obj} />;
}

// the handful of scanned things designs hold: fetched once, before they are asked for
for (const id of [
  "potted_plant_04",
  "ceramic_vase_01",
  "classic_laptop",
  "wicker_basket_01",
] as const)
  useGLTF.preload(modelUrl(id), DRACO);
