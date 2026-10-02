(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/storefront/components/three/Stage3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stage3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+fiber@9.7.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4_three@0.185.0/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+fiber@9.7.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4_three@0.185.0/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+fiber@9.7.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4_three@0.185.0/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react_laqdv3gcxofwpxc65wu2fixeja$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+drei@10.7.8_@react-three+fiber@9.7.0_@types+react@19.2.14_react-dom@19.2.4_react_laqdv3gcxofwpxc65wu2fixeja/node_modules/@react-three/drei/core/ContactShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react_laqdv3gcxofwpxc65wu2fixeja$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+drei@10.7.8_@react-three+fiber@9.7.0_@types+react@19.2.14_react-dom@19.2.4_react_laqdv3gcxofwpxc65wu2fixeja/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react_laqdv3gcxofwpxc65wu2fixeja$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+drei@10.7.8_@react-three+fiber@9.7.0_@types+react@19.2.14_react-dom@19.2.4_react_laqdv3gcxofwpxc65wu2fixeja/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/three@0.185.0/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/moments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/anim.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/blocks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const HDRI_PATH = "/studio/hdri/";
const HDRI_FILE = "studio_small_03_1k.hdr";
function Stage3D(props) {
    _s();
    const depth = props.depthMm ?? Math.max(...props.placements.map((p)=>p.product.depth ?? 400), 400);
    const wall = props.wallMm;
    const blocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stage3D.useMemo[blocks]": ()=>{
            const opts = {
                depthMm: depth,
                explode: props.explode ?? 0,
                placedIds: props.placedIds,
                selected: props.selected,
                selectedIds: props.selectedIds,
                hideGroups: props.hideGroups,
                morphTo: props.morphTo,
                morphProgress: props.morphProgress ?? 0
            };
            const first = props.placements[0];
            const propList = props.props && first ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propBlocks"])(props.props, {
                x: first.x,
                y: first.y ?? depth - (first.product.depth ?? 400)
            }) : [];
            return [
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepBlocks"])(props.keeps ?? [], depth),
                ...props.placements.flatMap({
                    "Stage3D.useMemo[blocks]": (pl)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placementBlocks"])(pl, opts)
                }["Stage3D.useMemo[blocks]"]),
                ...propList
            ];
        }
    }["Stage3D.useMemo[blocks]"], [
        props.placements,
        props.keeps,
        props.props,
        depth,
        props.explode,
        props.placedIds,
        props.selected,
        props.selectedIds,
        props.hideGroups,
        props.morphTo,
        props.morphProgress
    ]);
    // assembly timing per block: parts placed by the same step follow each other
    const timing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stage3D.useMemo[timing]": ()=>{
            const map = new Map();
            if (!props.assembly) return map;
            const counters = new Map();
            const n = Math.max(1, props.assembly.steps);
            for (const b of blocks){
                if (b.kind !== "part" || !b.partId) continue;
                let s = props.assembly.stepOf(b.partId);
                if (s < 0) s = n - 1;
                const k = counters.get(s) ?? 0;
                counters.set(s, k + 1);
                const t0 = s / n * 0.82 + k * 0.03;
                map.set(b.key, {
                    t0,
                    t1: Math.min(1, t0 + 0.24),
                    i: k
                });
            }
            return map;
        }
    }["Stage3D.useMemo[timing]"], [
        blocks,
        props.assembly
    ]);
    const propIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stage3D.useMemo[propIndex]": ()=>{
            const m = new Map();
            let i = 0;
            for (const b of blocks)if (b.kind === "prop") m.set(b.key, i++);
            return m;
        }
    }["Stage3D.useMemo[propIndex]"], [
        blocks
    ]);
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockBounds"])(blocks.filter((x)=>x.kind !== "prop"));
    const spot = wall !== undefined;
    const W = wall ?? b.xmax - b.xmin;
    const bounds = spot ? {
        xmin: 0,
        xmax: W,
        ymin: 0,
        ymax: depth,
        zmax: Math.max(b.zmax, 1200)
    } : b;
    // DOM overlays positioned each frame by the Tracker
    const overlays = [];
    if (spot && props.labels !== false) {
        (props.keeps ?? []).forEach((k, ki)=>{
            const front = (k.y ?? depth) - (k.id === "bed" ? 2000 : k.id === "sofa" ? 850 : k.id === "desk" || k.id === "counter" ? 600 : 450);
            overlays.push({
                id: `k${ki}`,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(k.x + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepWidth"][k.id] / 2),
                y: 0.02,
                z: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(front) + 0.12,
                text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepNames"][k.id],
                kind: "keep"
            });
        });
        props.placements.forEach((pl, pi)=>{
            if (!pl.label) return;
            overlays.push({
                id: `p${pi}`,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(pl.x + pl.product.width / 2),
                y: 0.02,
                z: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth - (pl.product.depth ?? 400)) + 0.12,
                text: pl.label,
                kind: "piece"
            });
        });
    }
    if (spot && props.labels !== false) overlays.push({
        id: "dim",
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(W) / 2,
        y: 0.01,
        z: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth) + 0.26,
        text: `${W / 10} cm of wall`,
        kind: "dim"
    });
    const handleTrack = spot && props.onWall ? {
        id: "handle",
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(W),
        y: 0.35,
        z: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth) * 0.5
    } : null;
    /* a callout hangs off the middle of the first block of its part; the line
     leaves alternately left and right so two pins near each other do not
     write over one another */ const pinned = (()=>{
        const mid = (b.xmin + b.xmax) / 2;
        const found = (props.pins ?? []).flatMap((id)=>{
            const bl = blocks.find((x)=>x.partId === id && x.kind === "part");
            return bl ? [
                {
                    id,
                    bl
                }
            ] : [];
        });
        // The line leaves towards the nearer side of the piece, so it points away
        // from the drawing. Two labels on the same side are told apart by how far
        // the line runs, given in the order they stand, so the ones that are near
        // each other never get the same length.
        const seen = {
            left: 0,
            right: 0
        };
        return found.sort((p, q)=>q.bl.z + q.bl.lift - (p.bl.z + p.bl.lift)).map(({ id, bl })=>{
            const side = bl.x + bl.w / 2 < mid ? "left" : "right";
            const rank = seen[side]++ % 5;
            return {
                id,
                side,
                rank,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.x + bl.w / 2),
                y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.z + bl.h / 2 + bl.lift),
                z: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth - bl.y - bl.d / 2)
            };
        });
    })();
    const els = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const pxPerM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(60);
    const onScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Stage3D.useCallback[onScale]": (v)=>{
            pxPerM.current = v;
        }
    }["Stage3D.useCallback[onScale]"], []);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Stage3D.useCallback[bind]": (id)=>({
                "Stage3D.useCallback[bind]": (el)=>{
                    if (el) els.current.set(id, el);
                    else els.current.delete(id);
                }
            })["Stage3D.useCallback[bind]"]
    }["Stage3D.useCallback[bind]"], []);
    const tracks = [
        ...overlays.map((o)=>({
                id: o.id,
                x: o.x,
                y: o.y,
                z: o.z
            })),
        ...pinned.map((p)=>({
                id: `pin:${p.id}`,
                x: p.x,
                y: p.y,
                z: p.z
            })),
        ...handleTrack ? [
            handleTrack
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `sf-stage3d${props.className ? ` ${props.className}` : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                shadows: "percentage",
                dpr: [
                    1,
                    1.75
                ],
                gl: {
                    alpha: true,
                    antialias: true,
                    preserveDrawingBuffer: true,
                    toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"]
                },
                camera: {
                    fov: 30,
                    near: 0.05,
                    far: 60
                },
                style: {
                    background: "transparent"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react_laqdv3gcxofwpxc65wu2fixeja$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                            files: HDRI_FILE,
                            path: HDRI_PATH,
                            environmentIntensity: 0.42
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                            args: [
                                "#fff4e6",
                                "#c9a98a",
                                0.35
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                            position: [
                                2.6,
                                4.2,
                                3.4
                            ],
                            intensity: 1.5,
                            castShadow: true,
                            "shadow-mapSize-width": 2048,
                            "shadow-mapSize-height": 2048,
                            "shadow-bias": -0.0004,
                            "shadow-normalBias": 0.02,
                            "shadow-camera-left": -(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(Math.max(W, depth)) * 0.9,
                            "shadow-camera-right": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(Math.max(W, depth)) * 0.9,
                            "shadow-camera-top": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(Math.max(W, depth)) * 0.9,
                            "shadow-camera-bottom": -(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(Math.max(W, depth)) * 0.9,
                            "shadow-camera-near": 0.1,
                            "shadow-camera-far": 20
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                            position: [
                                -3,
                                2.5,
                                -1.5
                            ],
                            intensity: 0.45
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                            children: [
                                spot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Room, {
                                    W: W,
                                    depth: depth,
                                    zmax: bounds.zmax,
                                    showWall: props.showWall !== false,
                                    fade: props.roomFade
                                }, void 0, false, {
                                    fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this),
                                !spot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react_laqdv3gcxofwpxc65wu2fixeja$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactShadows"], {
                                    position: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(b.xmin + b.xmax) / 2,
                                        0,
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth - (b.ymin + b.ymax) / 2)
                                    ],
                                    opacity: 0.42,
                                    scale: Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(b.xmax - b.xmin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(b.ymax - b.ymin)) * 2.4,
                                    blur: 2.2,
                                    far: 2,
                                    resolution: 512
                                }, void 0, false, {
                                    fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                blocks.map((bl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Block, {
                                        block: bl,
                                        depth: depth,
                                        onSelect: props.onSelect,
                                        onHover: props.onHover,
                                        assembly: props.assembly,
                                        timing: timing.get(bl.key),
                                        propsProgress: props.propsProgress,
                                        propIndex: propIndex.get(bl.key) ?? 0,
                                        propCount: propIndex.size,
                                        roomFade: props.roomFade
                                    }, bl.key, false, {
                                        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tracker, {
                                    tracks: tracks,
                                    els: els,
                                    onScale: onScale,
                                    spot: spot,
                                    wallMm: W,
                                    depthMm: depth
                                }, void 0, false, {
                                    fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraRig, {
                            bounds: bounds,
                            depth: depth,
                            turn: props.turn ?? 0,
                            spot: spot,
                            drift: props.drift
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this),
                        props.orbit !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react_laqdv3gcxofwpxc65wu2fixeja$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                            makeDefault: true,
                            enablePan: false,
                            enableZoom: false,
                            enableDamping: true,
                            dampingFactor: 0.08,
                            minPolarAngle: 0.55,
                            maxPolarAngle: 1.5,
                            minAzimuthAngle: -1.15,
                            maxAzimuthAngle: 1.15
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            pinned.length > 0 && props.renderPin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-pins",
                "aria-hidden": "true",
                children: pinned.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: bind(`pin:${p.id}`),
                        className: "sf-pin",
                        "data-side": p.side,
                        style: {
                            ["--rank"]: String(p.rank)
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "sf-pin-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "sf-pin-line"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                                lineNumber: 389,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sf-pin-what",
                                children: props.renderPin?.(p.id)
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                                lineNumber: 390,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                        lineNumber: 381,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-3dlabels",
                "aria-hidden": "true",
                children: overlays.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: bind(o.id),
                        className: `sf-3dlabel ${o.kind === "piece" ? "accent" : o.kind === "dim" ? "dim" : ""}`,
                        children: o.text
                    }, o.id, false, {
                        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            handleTrack && props.onWall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WallHandle, {
                bind: bind("handle"),
                wallMm: W,
                onWall: props.onWall,
                pxPerM: pxPerM
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 407,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
_s(Stage3D, "f/NPojtED8XWK535jUw9EnN2Yag=");
_c = Stage3D;
/* ---------- floor and wall, fadeable ---------- */ function Room({ W, depth, zmax, showWall, fade }) {
    _s1();
    const floorMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wallMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Room.useFrame": ()=>{
            const f = fade ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(fade.current) : 1;
            for (const m of [
                floorMat.current,
                wallMat.current
            ]){
                if (!m) continue;
                m.opacity = f;
                m.transparent = f < 0.999;
            }
        }
    }["Room.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                "rotation-x": -Math.PI / 2,
                position: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(W) / 2,
                    -0.001,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth) / 2
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(W) + 0.4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth) + 0.4
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        ref: floorMat,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors3d"].floor,
                        roughness: 0.95,
                        transparent: Boolean(fade)
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            showWall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(W) / 2,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(zmax + 500) / 2,
                    -0.012
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(W) + 0.4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(zmax + 500),
                            0.024
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        ref: wallMat,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors3d"].wall,
                        roughness: 0.98,
                        transparent: Boolean(fade)
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 459,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
_s1(Room, "tU7zCJy564nfeSZV38R9lQnHcvg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = Room;
/* ---------- where a block is on this frame ---------- */ function frameFor(bl, target, from, out, s) {
    if (bl.kind === "part" && s.assembly !== null && s.timing) {
        const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((s.assembly - s.timing.t0) / (s.timing.t1 - s.timing.t0));
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOutBack"])(u);
        const eo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOutCubic"])(u);
        out.copy(target).addScaledVector(from.offset, 1 - e);
        return {
            pos: out,
            rx: from.spin.x * (1 - eo),
            ry: from.spin.y * (1 - eo),
            rz: from.spin.z * (1 - eo),
            opacity: bl.opacity * (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(u * 4),
            snap: true
        };
    }
    if (bl.kind === "prop" && s.props !== null) {
        const n = Math.max(1, s.propCount);
        const t0 = s.propIndex / n * 0.7;
        const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((s.props - t0) / 0.3);
        out.copy(target);
        out.y += 0.35 * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOutBounce"])(u));
        return {
            pos: out,
            rx: 0,
            ry: 0,
            rz: 0,
            opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(u * 5),
            snap: true
        };
    }
    const roomOpacity = bl.kind === "keep" && s.room !== null ? bl.opacity * (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(s.room) : bl.opacity;
    return {
        pos: target,
        rx: 0,
        ry: 0,
        rz: 0,
        opacity: roomOpacity,
        snap: s.room !== null && bl.kind === "keep"
    };
}
/* ---------- one box (or cylinder, or sphere) ---------- */ function Block({ block: bl, depth, onSelect, onHover, assembly, timing, propsProgress, propIndex, propCount, roomFade }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Block.useMemo[target]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.x + bl.w / 2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.z + bl.h / 2 + bl.lift), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth - bl.y - bl.d / 2))
    }["Block.useMemo[target]"], [
        bl.x,
        bl.y,
        bl.z,
        bl.w,
        bl.d,
        bl.h,
        bl.lift,
        depth
    ]);
    // where this part comes from when it flies in, and how it is turned
    const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Block.useMemo[from]": ()=>{
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashUnit"])(bl.key, 1);
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashUnit"])(bl.key, 2);
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashUnit"])(bl.key, 3);
            return {
                offset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((a - 0.5) * 0.9, 0.9 + c * 0.6, 0.15 + d * 0.35),
                spin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"]((c - 0.5) * 0.7, (a - 0.5) * 0.5, (d - 0.5) * 0.7)
            };
        }
    }["Block.useMemo[from]"], [
        bl.key
    ]);
    const first = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const scratch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Block.useFrame": (_, dt)=>{
            const m = ref.current;
            const mt = mat.current;
            if (!m || !mt) return;
            const f = frameFor(bl, target, from, scratch.current, {
                assembly: assembly ? assembly.progress.current : null,
                timing,
                props: propsProgress ? propsProgress.current : null,
                propIndex,
                propCount,
                room: roomFade ? roomFade.current : null
            });
            if (f.snap) {
                m.position.copy(f.pos);
            } else if (first.current) {
                m.position.copy(f.pos);
                first.current = false;
            } else {
                m.position.lerp(f.pos, 1 - Math.exp(-dt * 9));
            }
            m.rotation.set(f.rx, f.ry, f.rz);
            const o = f.snap ? f.opacity : mt.opacity + (f.opacity - mt.opacity) * (1 - Math.exp(-dt * 10));
            mt.opacity = o;
            mt.transparent = o < 0.999;
            mt.depthWrite = o > 0.5;
            m.visible = o > 0.01;
        }
    }["Block.useFrame"]);
    const interactive = Boolean((onSelect || onHover) && bl.partId);
    const geo = bl.geo ?? "box";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        castShadow: true,
        receiveShadow: true,
        ...interactive ? {
            onClick: (e)=>{
                if (!onSelect) return;
                e.stopPropagation();
                if (bl.partId) onSelect(bl.partId);
            },
            onPointerOver: ()=>{
                if (onSelect) document.body.style.cursor = "pointer";
                if (bl.partId) onHover?.(bl.partId);
            },
            onPointerOut: ()=>{
                document.body.style.cursor = "";
                onHover?.(null);
            }
        } : {},
        children: [
            geo === "box" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.w),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.h),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.d)
                ]
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 647,
                columnNumber: 25
            }, this),
            geo === "cylinder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.w) / 2,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.w) / 2,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.h),
                    28
                ]
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 649,
                columnNumber: 9
            }, this),
            geo === "sphere" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.w) / 2,
                    24,
                    18
                ]
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 651,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                ref: mat,
                color: bl.color,
                roughness: bl.kind === "keep" ? 0.9 : bl.kind === "prop" ? 0.8 : 0.72,
                metalness: 0,
                opacity: bl.opacity,
                transparent: bl.opacity < 0.999
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            bl.holes?.map(([hx, , hz], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(hx - (bl.x + bl.w / 2)),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(hz - (bl.z + bl.h / 2)),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bl.d) / 2 + 0.0008
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                            args: [
                                0.0055,
                                14
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#5a3e2c",
                            roughness: 1
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                            lineNumber: 670,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
                    lineNumber: 661,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
        lineNumber: 625,
        columnNumber: 5
    }, this);
}
_s2(Block, "a3k48Z9RIhrY+t9Qq+6KuwP0tv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = Block;
/* ---------- projects world points onto the DOM overlays every frame ---------- */ function Tracker({ tracks, els, onScale, spot, wallMm, depthMm }) {
    _s3();
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Tracker.useThree[camera]": (s)=>s.camera
    }["Tracker.useThree[camera]"]);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Tracker.useThree[size]": (s)=>s.size
    }["Tracker.useThree[size]"]);
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Tracker.useMemo[v]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Tracker.useMemo[v]"], []);
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Tracker.useMemo[w]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Tracker.useMemo[w]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Tracker.useFrame": ()=>{
            for (const t of tracks){
                const el = els.current.get(t.id);
                if (!el) continue;
                v.set(t.x, t.y, t.z).project(camera);
                const px = (v.x + 1) / 2 * size.width;
                const py = (1 - v.y) / 2 * size.height;
                el.style.transform = `translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) translate(-50%, -50%)`;
                el.style.opacity = v.z < 1 ? "1" : "0";
            }
            if (spot) {
                v.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(wallMm), 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depthMm) / 2).project(camera);
                w.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(wallMm) - 1, 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depthMm) / 2).project(camera);
                onScale(Math.max(1, Math.abs(v.x - w.x) * (size.width / 2)));
            }
        }
    }["Tracker.useFrame"]);
    return null;
}
_s3(Tracker, "QJJVa2eIQWSs2HU8bim6ZW11EE8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Tracker;
/* ---------- camera ---------- */ function CameraRig({ bounds, depth, turn, spot, drift }) {
    _s4();
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "CameraRig.useThree[camera]": (s)=>s.camera
    }["CameraRig.useThree[camera]"]);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "CameraRig.useThree[controls]": (s)=>s.controls
    }["CameraRig.useThree[controls]"]);
    const goal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const look = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const settle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        cx: 0,
        cy: 0,
        cz: 0,
        dist: 1,
        angle: 0,
        lift: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraRig.useEffect": ()=>{
            const cx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bounds.xmin + bounds.xmax) / 2;
            const cy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bounds.zmax) * (spot ? 0.42 : 0.5);
            const cz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(depth - (bounds.ymin + bounds.ymax) / 2);
            const size = Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bounds.xmax - bounds.xmin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bounds.zmax) * 1.1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mm"])(bounds.ymax - bounds.ymin) * 0.8);
            const fov = ("fov" in camera ? camera.fov : 30) * (Math.PI / 180);
            const dist = size / 2 / Math.tan(fov / 2) * (spot ? 1.15 : 1.25);
            base.current = {
                cx,
                cy,
                cz,
                dist,
                angle: turn + (spot ? 22 : 34),
                lift: spot ? 0.42 : 0.5
            };
            settle.current = 1;
        }
    }["CameraRig.useEffect"], [
        bounds.xmin,
        bounds.xmax,
        bounds.ymin,
        bounds.ymax,
        bounds.zmax,
        depth,
        turn,
        spot,
        camera
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraRig.useFrame": (_, dt)=>{
            const d = drift?.current;
            const bcur = base.current;
            const a = (bcur.angle + (d?.turn ?? 0)) * Math.PI / 180;
            const dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.sin(a), bcur.lift + (d?.lift ?? 0), Math.cos(a)).normalize();
            look.current.set(bcur.cx, bcur.cy, bcur.cz);
            goal.current.copy(look.current).addScaledVector(dir, bcur.dist * (d?.zoom ?? 1));
            if (d) {
                // story mode: the camera follows the timeline directly
                camera.position.lerp(goal.current, 1 - Math.exp(-dt * 4));
                if (controls) {
                    controls.target.lerp(look.current, 1 - Math.exp(-dt * 4));
                    controls.update();
                } else camera.lookAt(look.current);
                return;
            }
            if (settle.current <= 0) return;
            const k = 1 - Math.exp(-dt * 6);
            camera.position.lerp(goal.current, k);
            if (controls) {
                controls.target.lerp(look.current, k);
                controls.update();
            } else camera.lookAt(look.current);
            if (camera.position.distanceTo(goal.current) < 0.003) settle.current = 0;
        }
    }["CameraRig.useFrame"]);
    return null;
}
_s4(CameraRig, "MLyspMxGh2/Mj8JMbuFW8SLMMfs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$14_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_three$40$0$2e$185$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = CameraRig;
/* ---------- the wall edge you drag ---------- */ function WallHandle({ bind, wallMm, onWall, pxPerM }) {
    _s5();
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onDown = (e)=>{
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = {
            x0: e.clientX,
            w0: wallMm,
            k: pxPerM.current
        };
        setActive(true);
        e.preventDefault();
        e.stopPropagation();
    };
    const onMove = (e)=>{
        const d = drag.current;
        if (!d) return;
        const next = d.w0 + (e.clientX - d.x0) / d.k * 1000;
        onWall((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(next / 50) * 50, 600, 8000));
    };
    const onUp = ()=>{
        drag.current = null;
        setActive(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: bind,
        type: "button",
        className: "sf-3dhandle",
        "data-active": active,
        "aria-label": "Wall width",
        title: "Drag to your wall width",
        onPointerDown: onDown,
        onPointerMove: onMove,
        onPointerUp: onUp,
        onPointerCancel: onUp,
        onKeyDown: (e)=>{
            if (e.key === "ArrowRight") onWall((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(wallMm + 100, 600, 8000));
            if (e.key === "ArrowLeft") onWall((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(wallMm - 100, 600, 8000));
        },
        children: "⟷"
    }, void 0, false, {
        fileName: "[project]/src/features/storefront/components/three/Stage3D.tsx",
        lineNumber: 849,
        columnNumber: 5
    }, this);
}
_s5(WallHandle, "HLYa0T3MjsxKu1wIeLAlfmov1r8=");
_c5 = WallHandle;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Stage3D");
__turbopack_context__.k.register(_c1, "Room");
__turbopack_context__.k.register(_c2, "Block");
__turbopack_context__.k.register(_c3, "Tracker");
__turbopack_context__.k.register(_c4, "CameraRig");
__turbopack_context__.k.register(_c5, "WallHandle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/storefront/components/three/Stage3D.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/storefront/components/three/Stage3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_features_storefront_components_three_Stage3D_tsx_1jlh4em._.js.map