(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$bag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/bag.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const NAV = [
    {
        href: "/family/pieces",
        label: "Explore",
        match: (p)=>p.startsWith("/family")
    },
    {
        href: "/pieces",
        label: "Shop",
        match: (p)=>p.startsWith("/pieces")
    },
    {
        href: "/build",
        label: "Build your own",
        match: (p)=>p.startsWith("/build")
    },
    {
        href: "/help",
        label: "Help",
        match: (p)=>p.startsWith("/help")
    }
];
function SiteHeader({ over = false }) {
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    const { count } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$bag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBag"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "f-header",
        "data-over": over,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "f-brand",
                children: "Furnishes"
            }, void 0, false, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "f-nav",
                "aria-label": "Furnishes",
                children: NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: n.href,
                        className: "f-tab",
                        "aria-current": n.match(path) ? "page" : undefined,
                        children: n.label
                    }, n.href, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/bag",
                className: "f-btn f-btn--sm f-bag",
                "data-empty": count === 0,
                "aria-current": path.startsWith("/bag") ? "page" : undefined,
                children: [
                    "Bag",
                    count > 0 ? ` · ${count}` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "PPIf7Q3Q7zPq3cSO8BdW4RYuhS4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$bag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBag"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/landing/Swap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Swaps",
    ()=>Swaps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* The spot as it is, and the spot with the piece in it, in one picture with a
   line the visitor drags. It shows itself once, slowly, the first time it is
   seen, and then holds: nothing here plays on a loop. */ const SHOWN = 0.62;
const OPEN = 0.3;
function Swaps({ swaps }) {
    _s();
    const [at, setAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cut, setCut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SHOWN);
    const [held, setHeld] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const now = swaps[at];
    /* the one move the page makes: it draws its own line back, once, so that
     what the two halves are needs no explaining */ const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Swaps.useEffect": ()=>{
            if (shown.current || held) return;
            const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            let raf = 0;
            const start = performance.now() + (still ? 0 : 900);
            const step = {
                "Swaps.useEffect.step": (t)=>{
                    const u = still ? 1 : Math.min(1, Math.max(0, (t - start) / 1400));
                    const ease = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
                    setCut(SHOWN + (OPEN - SHOWN) * ease);
                    if (u < 1) raf = requestAnimationFrame(step);
                    else shown.current = true;
                }
            }["Swaps.useEffect.step"];
            raf = requestAnimationFrame(step);
            return ({
                "Swaps.useEffect": ()=>cancelAnimationFrame(raf)
            })["Swaps.useEffect"];
        }
    }["Swaps.useEffect"], [
        held,
        at
    ]);
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Swaps.useCallback[drag]": (e)=>{
            const el = box.current;
            if (!el || e.pointerType === "mouse" && e.buttons === 0) return;
            const r = el.getBoundingClientRect();
            setHeld(true);
            shown.current = true;
            setCut(Math.min(0.97, Math.max(0.03, (e.clientX - r.left) / r.width)));
        }
    }["Swaps.useCallback[drag]"], []);
    const go = (d)=>{
        setAt((i)=>(i + d + swaps.length) % swaps.length);
        setCut(SHOWN);
        shown.current = false;
        setHeld(false);
    };
    if (!now) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "ld-swap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ld-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "f-label",
                        children: [
                            "[ ",
                            String(at + 1).padStart(2, "0"),
                            " /",
                            " ",
                            String(swaps.length).padStart(2, "0"),
                            " · ",
                            now.where,
                            " ]"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "f-display ld-say",
                        children: now.say
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "f-small f-muted ld-what",
                        children: "18 mm birch plywood on one panel system. One L-key builds all sixty designs, and the same panels make the next one."
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/Swap.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: box,
                className: "ld-pair",
                onPointerDown: (e)=>{
                    e.preventDefault();
                    try {
                        e.currentTarget.setPointerCapture(e.pointerId);
                    } catch  {
                    /* the pointer has already gone */ }
                    drag(e);
                },
                onPointerMove: drag,
                style: {
                    ["--cut"]: `${(cut * 100).toFixed(2)}%`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: now.after,
                        alt: `${now.name} standing in ${now.where}`,
                        width: 960,
                        height: 600,
                        unoptimized: true,
                        draggable: false,
                        priority: at === 0
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ld-before",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: now.before,
                            alt: `The same spot without it: ${now.say}`,
                            width: 960,
                            height: 600,
                            unoptimized: true,
                            draggable: false,
                            priority: at === 0
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/Swap.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ld-mark ld-mark--left",
                        children: "As it is"
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ld-mark ld-mark--right",
                        children: [
                            "With the ",
                            now.name.toLowerCase()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ld-line",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "↔"
                        }, void 0, false, {
                            fileName: "[project]/src/features/landing/Swap.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/Swap.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ld-answer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-label",
                                children: "[ what we would put there ]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "f-h2",
                                children: now.name
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-lede",
                                children: now.line
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-small f-muted f-num ld-build",
                                children: now.build
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ld-acts",
                                children: [
                                    now.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: now.href,
                                        className: "f-btn f-btn--primary",
                                        children: "See this design"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/Swap.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: now.street,
                                        className: "f-link",
                                        children: "Walk around it →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/landing/Swap.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "ld-nav",
                        "aria-label": "The other spots",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "f-btn f-btn--sm",
                                onClick: ()=>go(-1),
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "ld-dots",
                                children: swaps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": s.say,
                                            "aria-current": i === at,
                                            onClick: ()=>{
                                                setAt(i);
                                                setCut(SHOWN);
                                                shown.current = false;
                                                setHeld(false);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/landing/Swap.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    }, s.id, false, {
                                        fileName: "[project]/src/features/landing/Swap.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "f-btn f-btn--sm",
                                onClick: ()=>go(1),
                                children: "Next spot →"
                            }, void 0, false, {
                                fileName: "[project]/src/features/landing/Swap.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/landing/Swap.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/landing/Swap.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/landing/Swap.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Swaps, "RJWZ8cDaXuD4+h8pNEYO7hBmNss=");
_c = Swaps;
var _c;
__turbopack_context__.k.register(_c, "Swaps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/storefront/lib/bag.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBag",
    ()=>useBag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const KEY = "furnishes-bag-v1";
let cache = null;
const listeners = new Set();
const empty = [];
function read() {
    if (cache) return cache;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        cache = Array.isArray(parsed) ? parsed.flatMap((v)=>{
            if (!v || typeof v !== "object") return [];
            const o = v;
            const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validConfig"])(o.config);
            if (!config || typeof o.id !== "string") return [];
            return [
                {
                    id: o.id,
                    config,
                    qty: typeof o.qty === "number" && o.qty > 0 ? Math.min(9, Math.round(o.qty)) : 1,
                    at: typeof o.at === "number" ? o.at : 0
                }
            ];
        }) : [];
    } catch  {
        cache = [];
    }
    return cache;
}
function write(items) {
    cache = items;
    try {
        window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch  {
    // memory only
    }
    for (const l of listeners)l();
}
function subscribe(l) {
    listeners.add(l);
    return ()=>listeners.delete(l);
}
function useBag() {
    _s();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, read, {
        "useBag.useSyncExternalStore[items]": ()=>empty
    }["useBag.useSyncExternalStore[items]"]);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBag.useCallback[add]": (config)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configKeyOf"])(config);
            const cur = read();
            const hit = cur.find({
                "useBag.useCallback[add].hit": (i)=>i.id === id
            }["useBag.useCallback[add].hit"]);
            write(hit ? cur.map({
                "useBag.useCallback[add]": (i)=>i.id === id ? {
                        ...i,
                        qty: Math.min(9, i.qty + 1)
                    } : i
            }["useBag.useCallback[add]"]) : [
                ...cur,
                {
                    id,
                    config,
                    qty: 1,
                    at: Date.now()
                }
            ]);
        }
    }["useBag.useCallback[add]"], []);
    const setQty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBag.useCallback[setQty]": (id, qty)=>{
            write(read().map({
                "useBag.useCallback[setQty]": (i)=>i.id === id ? {
                        ...i,
                        qty: Math.max(1, Math.min(9, qty))
                    } : i
            }["useBag.useCallback[setQty]"]));
        }
    }["useBag.useCallback[setQty]"], []);
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBag.useCallback[remove]": (id)=>write(read().filter({
                "useBag.useCallback[remove]": (i)=>i.id !== id
            }["useBag.useCallback[remove]"]))
    }["useBag.useCallback[remove]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBag.useCallback[clear]": ()=>write([])
    }["useBag.useCallback[clear]"], []);
    const count = items.reduce((s, i)=>s + i.qty, 0);
    return {
        items,
        count,
        add,
        setQty,
        remove,
        clear
    };
}
_s(useBag, "MShLFBo5zenqLADM1Dz4kA36HQo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/storefront/lib/catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accessories",
    ()=>accessories,
    "categories",
    ()=>categories,
    "configHref",
    ()=>configHref,
    "configKeyOf",
    ()=>configKeyOf,
    "configQuery",
    ()=>configQuery,
    "configSummary",
    ()=>configSummary,
    "customConfig",
    ()=>customConfig,
    "defaultConfig",
    ()=>defaultConfig,
    "dimensionSummary",
    ()=>dimensionSummary,
    "doesList",
    ()=>doesList,
    "families",
    ()=>families,
    "familyOf",
    ()=>familyOf,
    "filterProducts",
    ()=>filterProducts,
    "getProduct",
    ()=>getProduct,
    "lenses",
    ()=>lenses,
    "products",
    ()=>products,
    "recommendationLabel",
    ()=>recommendationLabel,
    "recommendations",
    ()=>recommendations,
    "relationMarks",
    ()=>relationMarks,
    "relationships",
    ()=>relationships,
    "resolveProduct",
    ()=>resolveProduct,
    "statusBlurb",
    ()=>statusBlurb,
    "statusLabel",
    ()=>statusLabel,
    "subcategoriesWithPieces",
    ()=>subcategoriesWithPieces,
    "subcategoryFor",
    ()=>subcategoryFor,
    "validConfig",
    ()=>validConfig
]);
/**
 * Storefront catalogue — the 13 preliminary recipes carried over from the
 * `/Documents/Furnishes` prototype, with the additions the site plan needs:
 * status tier, "what happens here" tags and the three life lenses.
 *
 * Dimensions and parts are design studies drawn from the assembly record.
 * Nothing here is a released SKU, price or load rating.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/custom.ts [app-client] (ecmascript)");
;
const categories = [
    {
        id: "storage",
        name: "Storage",
        intro: "For the things beside your bed, and a whole wall of books.",
        sub: [
            "Bedside storage",
            "Shelving & bookcases",
            "Cabinets & sideboards",
            "Storage trolleys"
        ]
    },
    {
        id: "organisers",
        name: "Organisers & racks",
        intro: "For the things you drop when you come in and reach for all day.",
        sub: [
            "Freestanding organisers",
            "Clothes & entry racks"
        ]
    },
    {
        id: "tables",
        name: "Tables & desks",
        intro: "A surface to work, make, prepare and gather around.",
        sub: [
            "Desks & workstations",
            "Prep tables & islands",
            "Side & bedside tables",
            "Work trolleys"
        ]
    },
    {
        id: "screens",
        name: "Screens & dividers",
        intro: "Make room for two different things in the same space.",
        sub: [
            "Mobile screens",
            "Folding screens",
            "Shelving as dividers"
        ]
    },
    {
        id: "seating",
        name: "Seating",
        intro: "A place to pause, with room underneath.",
        sub: [
            "Benches"
        ]
    }
];
const doesList = [
    "hang",
    "put down",
    "sit",
    "hide",
    "divide",
    "work",
    "charge",
    "display"
];
const lenses = [
    {
        id: "nothing-yet",
        label: "Nothing here yet",
        blurb: "A new room. Start from an empty wall and stack a setup."
    },
    {
        id: "everything-stays",
        label: "Everything stays",
        blurb: "A home you've lived in for years. One piece next to what you keep."
    },
    {
        id: "moves-with-you",
        label: "Moves with you",
        blurb: "Renting. No drilling, on wheels, comes apart and leaves no trace."
    }
];
const statusLabel = {
    buyable: "Buyable",
    adjustable: "Adjustable",
    concept: "Concept"
};
const statusBlurb = {
    buyable: "Costed and validated on samples. Can be ordered.",
    adjustable: "A configurable design preview. Parts and drawings are real; price and load rating are not yet released.",
    concept: "A direction we are still checking. Save it, compare it, ask us."
};
const base = {
    door: false,
    defaultAccessories: [],
    optionalAccessories: [],
    lenses: [
        "nothing-yet",
        "everything-stays"
    ],
    status: "adjustable",
    line: "small"
};
const products = [
    {
        ...base,
        id: "entry",
        name: "Entry organiser",
        category: "organisers",
        subcategory: "Freestanding organisers",
        family: "full-height",
        familyName: "Full-height organisers",
        shape: "organiser",
        width: 600,
        height: 1200,
        depth: 400,
        tiers: 3,
        bays: 1,
        room: [
            "Entryway"
        ],
        use: "Hang, set down, head out.",
        benefit: "Coats, keys and shoes in one place.",
        fit: "Freestanding entry storage",
        space: "Measure the full base and leave access in front for coats and shoes.",
        description: "A freestanding landing place for bags, keys and everyday shoes. Hanging space above, a shoe shelf below, and a small tray for the things that travel with you.",
        source: "1.1",
        defaultAccessories: [
            "coat-hook",
            "key-tray"
        ],
        optionalAccessories: [
            "headphone-hook"
        ],
        does: [
            "hang",
            "put down"
        ],
        lenses: [
            "nothing-yet",
            "everything-stays",
            "moves-with-you"
        ]
    },
    {
        ...base,
        id: "desk",
        name: "Desk-side organiser",
        category: "organisers",
        subcategory: "Freestanding organisers",
        family: "full-height",
        familyName: "Full-height organisers",
        shape: "organiser",
        width: 600,
        height: 1200,
        depth: 400,
        tiers: 3,
        bays: 1,
        room: [
            "Workspace"
        ],
        use: "Your tools, an arm’s reach away.",
        benefit: "More storage. Keep your desk.",
        fit: "Added storage · desk not included",
        space: "Allow for your chair and reaching the shelves. Your desk stands independently.",
        description: "An independent organising surface beside the desk you already like. Open shelves and a functional panel keep the everyday visible without using your desktop.",
        source: "1.2",
        defaultAccessories: [
            "headphone-hook"
        ],
        optionalAccessories: [
            "key-tray",
            "coat-hook"
        ],
        does: [
            "hang",
            "put down",
            "work",
            "charge"
        ],
        lenses: [
            "everything-stays",
            "moves-with-you"
        ]
    },
    {
        ...base,
        id: "bedside",
        name: "Bedside cabinet",
        category: "storage",
        subcategory: "Bedside storage",
        secondary: [
            "tables"
        ],
        family: "stacked",
        familyName: "Stacked storage",
        shape: "cabinet",
        width: 600,
        height: 400,
        depth: 400,
        tiers: 1,
        bays: 1,
        room: [
            "Bedroom",
            "Living room"
        ],
        use: "Last thing at night. First thing in the morning.",
        benefit: "The little things, close at hand.",
        fit: "Low storage · open or with a door",
        space: "Compare the final top height with your mattress. Allow space for an optional door.",
        description: "One tabletop and an open compartment for the things you keep close. Explore an open front or a door, then compare the preliminary body height with your bedside space.",
        source: "1.3",
        door: true,
        optionalAccessories: [
            "key-tray"
        ],
        does: [
            "put down",
            "hide",
            "charge"
        ],
        lenses: [
            "nothing-yet",
            "everything-stays",
            "moves-with-you"
        ]
    },
    {
        ...base,
        id: "kitchen",
        name: "Kitchen trolley",
        category: "storage",
        subcategory: "Storage trolleys",
        secondary: [
            "tables"
        ],
        family: "stacked",
        familyName: "Stacked storage",
        shape: "trolley",
        width: 600,
        height: 800,
        depth: 400,
        tiers: 2,
        bays: 1,
        room: [
            "Kitchen & dining"
        ],
        use: "A little extra room for preparation.",
        benefit: "A surface that comes to you.",
        fit: "Mobile storage with a worktop",
        space: "Check final worktop height and allow a clear path around the caster base.",
        description: "A two-tier storage body with a worktop and a caster base. Keep everyday supplies nearby and see how two units could form an island.",
        source: "1.4",
        defaultAccessories: [
            "kitchen-rail"
        ],
        optionalAccessories: [
            "key-tray"
        ],
        does: [
            "put down",
            "work"
        ],
        lenses: [
            "everything-stays",
            "moves-with-you"
        ]
    },
    {
        ...base,
        id: "work-cart",
        secondary: [
            "tables"
        ],
        name: "Work trolley",
        category: "storage",
        subcategory: "Storage trolleys",
        family: "stacked",
        familyName: "Stacked storage",
        shape: "trolley",
        width: 600,
        height: 800,
        depth: 400,
        tiers: 2,
        bays: 1,
        room: [
            "Workspace"
        ],
        use: "Bring the useful things closer.",
        benefit: "Keep supplies close. Roll them away.",
        fit: "Added storage · desk not included",
        space: "Allow room to move the trolley and open any doors, separate from your chair.",
        description: "Open storage for tools and materials beside your work area. Compare it with an upright organiser when you want to keep your existing desk.",
        source: "1.6",
        door: true,
        defaultAccessories: [
            "headphone-hook"
        ],
        optionalAccessories: [
            "key-tray"
        ],
        does: [
            "put down",
            "hide",
            "work"
        ],
        lenses: [
            "everything-stays",
            "moves-with-you"
        ]
    },
    {
        ...base,
        id: "sideboard",
        name: "Three-bay sideboard",
        category: "storage",
        subcategory: "Cabinets & sideboards",
        family: "stacked",
        familyName: "Stacked storage",
        shape: "cabinet",
        width: 1800,
        height: 800,
        depth: 400,
        tiers: 2,
        bays: 3,
        room: [
            "Living room",
            "Entryway",
            "Workspace"
        ],
        use: "One continuous place for everyday things.",
        benefit: "A longer home for everyday things.",
        fit: "Three connected storage bays",
        space: "Check the full 180 cm body width, final base footprint and access to the front.",
        description: "Three storage bays form a longer piece for a living room, hallway or workspace. Explore open compartments or doors across the front.",
        source: "1.10",
        door: true,
        does: [
            "put down",
            "hide",
            "display"
        ]
    },
    {
        ...base,
        id: "bookcase",
        name: "Double-sided bookcase",
        category: "storage",
        subcategory: "Shelving & bookcases",
        secondary: [
            "screens"
        ],
        family: "stacked",
        familyName: "Stacked storage",
        shape: "shelf",
        width: 1200,
        height: 1600,
        depth: 400,
        tiers: 4,
        bays: 2,
        room: [
            "Living room",
            "Workspace",
            "Shared spaces"
        ],
        use: "A place for books. A boundary between spaces.",
        benefit: "A boundary you can use on both sides.",
        fit: "Double-sided shelving",
        space: "Shelves on either side are shallower than the full body depth. Keep both sides accessible.",
        description: "Shallower shelves on either side of a central panel let this piece work between two areas. Compare it with a screen if storage on both sides matters.",
        source: "2.9",
        does: [
            "divide",
            "display",
            "put down"
        ],
        line: "wall"
    },
    {
        ...base,
        id: "workstation",
        name: "Organiser workstation",
        category: "tables",
        subcategory: "Desks & workstations",
        family: "full-height",
        familyName: "Full-height organisers",
        shape: "desk",
        width: 1200,
        height: 1600,
        depth: 1000,
        tiers: 4,
        bays: 1,
        room: [
            "Workspace",
            "Shared spaces"
        ],
        use: "A place to work, with everything around it.",
        benefit: "A desk and storage, together.",
        fit: "Desk surface and support included",
        space: "Allow chair and legroom in front of the desk, plus access to the organiser.",
        description: "A desk surface, independent supports and an upright organising body form one workspace. Unlike a desk-side organiser, this design includes the desk.",
        source: "2.11",
        defaultAccessories: [
            "headphone-hook"
        ],
        optionalAccessories: [
            "key-tray"
        ],
        does: [
            "work",
            "hang",
            "charge"
        ],
        lenses: [
            "nothing-yet"
        ]
    },
    {
        ...base,
        id: "mobile-screen",
        name: "Mobile functional screen",
        category: "screens",
        subcategory: "Mobile screens",
        family: "full-height",
        familyName: "Full-height screens",
        shape: "screen",
        width: 600,
        height: 1200,
        depth: 400,
        tiers: 3,
        bays: 1,
        room: [
            "Shared spaces",
            "Workspace",
            "Bedroom"
        ],
        use: "One piece. Two sides to your day.",
        benefit: "A little separation, wherever it helps.",
        fit: "Mobile divider with storage",
        space: "Check the base footprint and allow access to the storage side. This screen does not fold.",
        description: "A full-height panel body with storage on one side and a quieter face on the other. Use it as a background or a temporary visual boundary.",
        source: "3.1",
        optionalAccessories: [
            "coat-hook",
            "headphone-hook"
        ],
        does: [
            "divide",
            "hang",
            "work"
        ],
        lenses: [
            "everything-stays",
            "moves-with-you"
        ],
        line: "wall"
    },
    {
        ...base,
        id: "folding-screen",
        name: "Three-panel folding screen",
        category: "screens",
        subcategory: "Folding screens",
        family: "folding",
        familyName: "Folding screens",
        shape: "folding",
        width: 1800,
        height: 1200,
        depth: null,
        tiers: 3,
        bays: 3,
        room: [
            "Shared spaces",
            "Bedroom",
            "Workspace"
        ],
        use: "A little separation, when you want it.",
        benefit: "Open up. Make a little room.",
        fit: "Three folding leaves · no storage",
        space: "The 180 cm span is fully unfolded. Fold angle changes both width and depth.",
        description: "Three framed leaves connected by hinges. Its construction is separate from the storage and mobile-screen families.",
        source: "3.3",
        does: [
            "divide"
        ],
        lenses: [
            "moves-with-you",
            "everything-stays"
        ],
        line: "wall"
    },
    {
        ...base,
        id: "island",
        name: "Two-unit preparation island",
        category: "tables",
        subcategory: "Prep tables & islands",
        family: "stacked",
        familyName: "Stacked storage",
        shape: "island",
        width: 1200,
        height: 800,
        depth: 400,
        tiers: 2,
        bays: 2,
        room: [
            "Kitchen & dining"
        ],
        use: "Two pieces. A shared surface.",
        benefit: "Two bodies. One generous surface.",
        fit: "Complete two-unit arrangement",
        space: "Check the shared top, final worktop height and access around both caster bases.",
        description: "Two trolley bodies sit beneath a longer worktop. The short worktops are set aside; a connecting assembly is also needed.",
        source: "1.11",
        does: [
            "work",
            "put down"
        ],
        status: "concept"
    },
    {
        ...base,
        id: "bench",
        name: "Storage bench",
        category: "seating",
        subcategory: "Benches",
        family: "seating",
        familyName: "Bench studies",
        shape: "bench",
        width: 1200,
        height: 450,
        depth: 400,
        tiers: 1,
        bays: 2,
        room: [
            "Entryway",
            "Living room"
        ],
        use: "A place to pause on your way out.",
        benefit: "Sit down. Put things away.",
        fit: "Dedicated seat and storage",
        space: "Final seat height and seating load are still being validated. Ordinary cabinet tops are not seats.",
        description: "A storage-and-seating study with a dedicated seat surface. Seat support and load testing are separate from the storage system.",
        source: "1.12",
        does: [
            "sit",
            "hide"
        ],
        status: "concept"
    },
    {
        ...base,
        id: "coat-rack",
        name: "Clothes organiser",
        category: "organisers",
        subcategory: "Clothes & entry racks",
        family: "full-height",
        familyName: "Full-height organisers",
        shape: "organiser",
        width: 600,
        height: 1600,
        depth: 400,
        tiers: 4,
        bays: 1,
        room: [
            "Entryway",
            "Bedroom"
        ],
        use: "Make room for what you wear.",
        benefit: "Make space for what you wear.",
        fit: "Taller hanging storage",
        space: "Compare the available hanging height with your clothes, and check the final base footprint.",
        description: "A taller organising piece for clothes and bags, with a hanging rail and a lower storage shelf.",
        source: "1.17",
        defaultAccessories: [
            "clothes-rail"
        ],
        optionalAccessories: [
            "coat-hook"
        ],
        does: [
            "hang",
            "put down"
        ],
        status: "concept"
    }
];
const accessories = {
    "coat-hook": {
        name: "Coat hook set",
        description: "Three hooks on the working face.",
        category: "Hooks & trays"
    },
    "key-tray": {
        name: "Small tray",
        description: "A shallow resting place for everyday small items.",
        category: "Hooks & trays"
    },
    "headphone-hook": {
        name: "Utility hook",
        description: "A place for headphones or a small everyday item.",
        category: "Hooks & trays"
    },
    "kitchen-rail": {
        name: "Side rail",
        description: "A rail beside the kitchen worktop.",
        category: "Rails"
    },
    "clothes-rail": {
        name: "Clothes rail assembly",
        description: "A hanging rail and its supports.",
        category: "Rails"
    }
};
const getProduct = (id)=>products.find((p)=>p.id === id);
function resolveProduct(c) {
    if (c.productId === "custom") return c.custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customProduct"])(c.custom) : undefined;
    return getProduct(c.productId);
}
function defaultConfig(p) {
    return {
        productId: p.id,
        finish: "natural",
        storage: "open",
        accessories: [
            ...p.defaultAccessories
        ]
    };
}
function customConfig(spec) {
    return {
        ...defaultConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customProduct"])(spec)),
        custom: spec
    };
}
function validConfig(input) {
    if (!input || typeof input !== "object") return null;
    const c = input;
    const custom = String(c.productId) === "custom" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validCustom"])(c.custom) : null;
    const p = custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customProduct"])(custom) : getProduct(String(c.productId));
    if (!p) return null;
    if (typeof c.finish !== "string" || ![
        "natural",
        "orange"
    ].includes(c.finish) || typeof c.storage !== "string" || ![
        "open",
        "doors"
    ].includes(c.storage) || c.storage === "doors" && !p.door || !Array.isArray(c.accessories)) return null;
    const allowed = [
        ...p.defaultAccessories,
        ...p.optionalAccessories
    ];
    if (c.accessories.some((x)=>typeof x !== "string" || !allowed.includes(x))) return null;
    return {
        productId: p.id,
        finish: c.finish,
        storage: c.storage,
        accessories: [
            ...new Set(c.accessories)
        ].sort(),
        ...custom ? {
            custom
        } : {}
    };
}
function configKeyOf(c) {
    return `${c.productId}:${c.finish}:${c.storage}:${[
        ...c.accessories
    ].sort().join(",")}${c.custom ? `:${c.custom.height}x${c.custom.segments}${c.custom.mobile ? "m" : ""}` : ""}`;
}
function configQuery(c, extra) {
    const q = new URLSearchParams(extra);
    q.set("finish", c.finish);
    if (c.storage === "doors") q.set("storage", "doors");
    if (c.accessories.length) q.set("acc", c.accessories.join(","));
    if (c.custom) {
        q.set("h", String(c.custom.height));
        q.set("w", String(c.custom.segments));
        if (c.custom.mobile) q.set("mobile", "1");
    }
    return q.toString();
}
const configHref = (c, extra)=>`/shop/${c.productId}?${configQuery(c, extra)}`;
function configSummary(c) {
    const p = resolveProduct(c);
    if (!p) return "";
    return [
        c.custom ? `${c.custom.segments * 60} × ${c.custom.height / 10} cm${c.custom.mobile ? " on casters" : ""}` : null,
        c.finish === "orange" ? "Orange panels" : "Natural panels",
        p.door ? c.storage === "doors" ? "With doors" : "Open front" : null,
        c.accessories.length ? c.accessories.map((a)=>accessories[a]?.name).join(", ") : "No accessories"
    ].filter(Boolean).join(" · ");
}
/**
 * Everyday words people actually type, mapped to what a piece does or to a
 * piece. "something for cables" should find the desk-side organiser.
 */ const everyday = {
    cable: "charge",
    cables: "charge",
    charger: "charge",
    phone: "charge",
    coat: "hang",
    coats: "hang",
    jacket: "hang",
    bag: "hang",
    bags: "hang",
    keys: "put down",
    shoes: "entry",
    shoe: "entry",
    books: "display",
    book: "display",
    privacy: "divide",
    roommate: "divide",
    flatmate: "divide",
    camera: "divide",
    zoom: "divide",
    call: "divide",
    calls: "divide",
    laundry: "hide",
    clutter: "hide",
    mess: "hide",
    cook: "work",
    cooking: "kitchen",
    prep: "kitchen",
    counter: "kitchen",
    nightstand: "bedside",
    lamp: "bedside",
    hallway: "entry",
    door: "entry",
    cart: "trolley",
    tools: "work",
    shelves: "shelf",
    wardrobe: "clothes",
    wall: "divider",
    partition: "divider",
    seat: "sit",
    bench: "sit"
};
const stop = new Set([
    "a",
    "for",
    "the",
    "my",
    "something",
    "to",
    "and",
    "of",
    "in",
    "on",
    "with"
]);
function filterProducts(filters) {
    const term = (filters.q || "").trim().toLowerCase();
    const words = term.split(/[\s,]+/).filter((w)=>w && !stop.has(w)).map((w)=>everyday[w] ?? w);
    return products.filter((p)=>(!filters.line || p.line === filters.line) && (!filters.family || p.family === filters.family) && (!filters.category || filters.category === "all" || p.category === filters.category || p.secondary?.includes(filters.category)) && (!filters.sub || subcategoryFor(p, filters.category) === filters.sub) && (!filters.room || p.room.includes(filters.room)) && (!filters.mobile || [
            "trolley",
            "screen",
            "island"
        ].includes(p.shape)) && (!filters.does || p.does.includes(filters.does)) && (!filters.lens || p.lenses.includes(filters.lens)) && (!words.length || words.some((w)=>w === "divider" ? p.category === "screens" || p.secondary?.includes("screens") : `${p.id} ${p.name} ${p.subcategory} ${p.room.join(" ")} ${p.use} ${p.description} ${p.does.join(" ")}`.toLowerCase().includes(w))));
}
function subcategoryFor(p, category) {
    if (category === "tables" && p.id === "bedside") return "Side & bedside tables";
    if (category === "tables" && [
        "kitchen",
        "work-cart"
    ].includes(p.id)) return "Work trolleys";
    if (category === "screens" && p.id === "bookcase") return "Shelving as dividers";
    return p.subcategory;
}
function dimensionSummary(p) {
    return p.shape === "folding" ? `${p.width / 10} W × ${p.height / 10} H cm unfolded · depth varies` : `${p.width / 10} W × ${p.height / 10} H × ${(p.depth ?? 0) / 10} D cm`;
}
const relationships = [
    {
        id: "entry-to-desk",
        from: "entry",
        to: "desk",
        quantity: 1,
        kind: "same-body",
        title: "From hallway to workday",
        summary: "The full-height body is the common starting point. The shoe shelf, shelves and accessories differ.",
        note: "Panel revisions, mounting points and the condition of existing parts need checking before reuse."
    },
    {
        id: "kitchen-to-work",
        from: "kitchen",
        to: "work-cart",
        quantity: 1,
        kind: "same-body",
        title: "From preparation to making",
        summary: "The two-tier body stays; the everyday accessories change.",
        note: "Kitchen and workspace use have different surface, loading and movement requirements."
    },
    {
        id: "two-trolleys-to-island",
        from: "kitchen",
        to: "island",
        quantity: 2,
        kind: "combine",
        title: "Two trolleys. One shared surface.",
        summary: "Keep two bodies and bases, set aside the two short worktops, add a long worktop and a connecting assembly.",
        note: "This combination needs its own stability, connector and worktop verification."
    }
];
const recommendations = {
    entry: [
        {
            id: "coat-rack",
            type: "family",
            reason: "More hanging height and a clothes rail. The taller uprights are different parts."
        },
        {
            id: "bench",
            type: "companion",
            reason: "A separate place to sit in the entryway. The two pieces are not joined."
        }
    ],
    desk: [
        {
            id: "work-cart",
            type: "alternative",
            reason: "Keep the existing desk, but put your supplies in a lower mobile unit instead."
        },
        {
            id: "workstation",
            type: "alternative",
            reason: "A complete desk arrangement if you need a new work surface as well as storage."
        }
    ],
    bedside: [
        {
            id: "work-cart",
            type: "family",
            reason: "A taller two-tier body with a mobile base. A different piece."
        }
    ],
    kitchen: [],
    "work-cart": [
        {
            id: "desk",
            type: "alternative",
            reason: "An upright, visible place for your tools beside the same desk."
        },
        {
            id: "sideboard",
            type: "alternative",
            reason: "More storage across a longer fixed piece, when floor space matters less."
        }
    ],
    sideboard: [
        {
            id: "bookcase",
            type: "alternative",
            reason: "Height and access from two sides instead of a long, low surface."
        }
    ],
    bookcase: [
        {
            id: "mobile-screen",
            type: "alternative",
            reason: "A movable visual boundary over shelves on both sides."
        },
        {
            id: "folding-screen",
            type: "alternative",
            reason: "Folding leaves with no storage, when the boundary is temporary."
        }
    ],
    workstation: [
        {
            id: "desk",
            type: "alternative",
            reason: "Keep your own desk and add an independent organiser."
        },
        {
            id: "bookcase",
            type: "companion",
            reason: "Separate storage beside your work area. Not connected."
        }
    ],
    "mobile-screen": [
        {
            id: "folding-screen",
            type: "alternative",
            reason: "Folding leaves for a visual boundary, with no storage body."
        },
        {
            id: "bookcase",
            type: "alternative",
            reason: "A taller boundary that holds books on both sides."
        }
    ],
    "folding-screen": [
        {
            id: "mobile-screen",
            type: "alternative",
            reason: "A movable body with storage, instead of folding leaves."
        }
    ],
    island: [],
    bench: [
        {
            id: "entry",
            type: "companion",
            reason: "Coats and keys get their own upright place beside a seat."
        }
    ],
    "coat-rack": [
        {
            id: "entry",
            type: "family",
            reason: "A lower body for hooks, shoes and keys."
        }
    ]
};
const recommendationLabel = {
    alternative: "Another way to solve this",
    family: "Same family, another size",
    companion: "Goes beside it, not joined"
};
function relationMarks(id) {
    const out = [];
    for (const r of relationships){
        if (r.from === id) {
            const to = getProduct(r.to);
            if (!to) continue;
            out.push(r.kind === "combine" ? {
                kind: "combine",
                text: `Two make ${to.name.toLowerCase()}`,
                to: r.to
            } : {
                kind: "body",
                text: `Same body as ${to.name.toLowerCase()}`,
                to: r.to
            });
        } else if (r.to === id && r.kind === "same-body") {
            const from = getProduct(r.from);
            if (from) out.push({
                kind: "body",
                text: `Same body as ${from.name.toLowerCase()}`,
                to: r.from
            });
        }
    }
    const alt = (recommendations[id] ?? []).find((x)=>x.type === "alternative");
    if (alt) {
        const p = getProduct(alt.id);
        if (p) out.push({
            kind: "alternative",
            text: `Another way: ${p.name.toLowerCase()}`,
            to: alt.id
        });
    }
    return out.slice(0, 2);
}
const families = [
    {
        id: "full-height",
        name: "Full-height organisers",
        blurb: "One upright body: by the door, beside the desk, or as a screen."
    },
    {
        id: "stacked",
        name: "Stacked storage",
        blurb: "40 cm tiers that stack: bedside, trolley, sideboard, bookcase."
    },
    {
        id: "folding",
        name: "Folding screens",
        blurb: "Framed leaves on hinges. No storage, quick to move."
    },
    {
        id: "seating",
        name: "Seating",
        blurb: "A dedicated seat over storage. Load-tested separately."
    }
];
function familyOf(id) {
    return families.find((f)=>f.id === id);
}
function subcategoriesWithPieces(categoryId) {
    const cat = categories.find((c)=>c.id === categoryId);
    if (!cat) return [];
    return cat.sub.map((name)=>({
            name,
            count: products.filter((p)=>subcategoryFor(p, categoryId) === name && (p.category === categoryId || p.secondary?.includes(categoryId))).length
        })).filter((x)=>x.count > 0);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/storefront/lib/custom.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customHeights",
    ()=>customHeights,
    "customProduct",
    ()=>customProduct,
    "defaultCustom",
    ()=>defaultCustom,
    "envelope",
    ()=>envelope,
    "validCustom",
    ()=>validCustom
]);
const customHeights = [
    400,
    800,
    1200,
    1600
];
const defaultCustom = {
    height: 800,
    segments: 1,
    mobile: false
};
function envelope(s) {
    if (s.mobile && s.height > 1200) return {
        ok: false,
        reason: "A body on casters stops at 120 cm. Taller than that we'd want to look at with you."
    };
    if (s.segments > 1 && s.height >= 1600) return {
        ok: false,
        reason: "A 160 cm body wider than one segment needs anti-tip fixing, which we check case by case."
    };
    const notes = [];
    if (s.height >= 1600) notes.push("Fixed against tipping at this height.");
    if (s.segments > 1) notes.push(`${s.segments - 1} connector${s.segments > 2 ? "s" : ""} join the segments.`);
    if (s.mobile) notes.push("Casters add about 55 mm under the body.");
    return {
        ok: true,
        notes
    };
}
function validCustom(input) {
    if (!input || typeof input !== "object") return null;
    const o = input;
    const height = Number(o.height);
    const segments = Number(o.segments);
    if (!customHeights.some((h)=>h === height)) return null;
    if (![
        1,
        2,
        3
    ].includes(segments)) return null;
    return {
        height: height,
        segments: segments,
        mobile: o.mobile === true || o.mobile === "1" || o.mobile === "true"
    };
}
function customProduct(s) {
    const full = s.height >= 1200;
    return {
        id: "custom",
        name: "Your panel body",
        category: "storage",
        subcategory: "From scratch",
        family: full ? "full-height" : "stacked",
        familyName: full ? "Full-height organisers" : "Stacked storage",
        shape: s.mobile ? "trolley" : full ? "organiser" : "cabinet",
        width: s.segments * 600,
        height: s.height,
        depth: 400,
        tiers: Math.max(1, s.height / 400),
        bays: s.segments,
        room: [],
        use: "Whatever this spot needs.",
        benefit: "A body sized to the spot, from the same panels.",
        fit: "Sized by you",
        space: "Check the full width and the final height against the spot.",
        description: "Made from the same panels, bases and connectors as everything else here. It is yours from the first panel: it goes in a spot, opens up, builds step by step and takes add-ons later.",
        source: "custom",
        door: !full,
        defaultAccessories: [],
        optionalAccessories: [
            "coat-hook",
            "key-tray",
            "headphone-hook"
        ],
        does: [
            "put down"
        ],
        lenses: [
            "nothing-yet",
            "everything-stays",
            "moves-with-you"
        ],
        status: "adjustable",
        line: "small"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1fnrek6._.js.map