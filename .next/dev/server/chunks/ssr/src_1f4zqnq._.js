module.exports = [
"[project]/src/components/SiteHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$bag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/bag.ts [app-ssr] (ecmascript)");
"use client";
;
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
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    const { count } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$bag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBag"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "f-header",
        "data-over": over,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "f-brand",
                children: "Furnishes"
            }, void 0, false, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "f-nav",
                "aria-label": "Furnishes",
                children: NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/src/features/house/orders.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrder",
    ()=>getOrder,
    "readOrders",
    ()=>readOrders,
    "saveOrder",
    ()=>saveOrder
]);
"use client";
const KEY = "furnishes-orders-v1";
function readOrders() {
    try {
        const raw = window.localStorage.getItem(KEY);
        const o = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(o)) return [];
        return o.filter((r)=>!!r && typeof r === "object" && typeof r.id === "string" && Array.isArray(r.items));
    } catch  {
        return [];
    }
}
function getOrder(id) {
    return readOrders().find((r)=>r.id === id);
}
function saveOrder(items) {
    const all = readOrders();
    const d = new Date();
    const stamp = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}`;
    const seq = all.filter((r)=>r.id.includes(`-${stamp}-`)).length + 1;
    const rec = {
        id: `F-${stamp}-${String(seq).padStart(2, "0")}`,
        at: Date.now(),
        items: items.map((i)=>({
                config: i.config,
                qty: i.qty
            }))
    };
    try {
        window.localStorage.setItem(KEY, JSON.stringify([
            rec,
            ...all
        ]));
    } catch  {
    // memory only
    }
    return rec;
}
}),
"[project]/src/features/house/record/RecordBits.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderRecordView",
    ()=>OrderRecordView,
    "RecordViewer",
    ()=>RecordViewer,
    "TakeIt",
    ()=>TakeIt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$bag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/bag.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/steps.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$ProductViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/components/ProductViewer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$house$2f$orders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/house/orders.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function TakeIt({ config }) {
    const bag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$bag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBag"])();
    const [took, setTook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "f-btn f-btn--primary",
                onClick: ()=>{
                    bag.add(config);
                    setTook(true);
                },
                children: took ? "Added to your bag" : "Add to bag"
            }, void 0, false, {
                fileName: "[project]/src/features/house/record/RecordBits.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            (took || bag.count > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/bag",
                className: "f-link",
                children: [
                    "Bag · ",
                    bag.count,
                    " →"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/house/record/RecordBits.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/house/record/RecordBits.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function RecordViewer({ product, config, mode: initial = "steps", onHover, pins, renderPin }) {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$ProductViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductViewer"], {
        product: product,
        config: config,
        mode: mode,
        onMode: setMode,
        onHover: onHover,
        pins: pins,
        renderPin: renderPin
    }, void 0, false, {
        fileName: "[project]/src/features/house/record/RecordBits.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function OrderRecordView({ id }) {
    const [rec, setRec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // read after mount, off the render path
        const t = window.setTimeout(()=>setRec((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$house$2f$orders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrder"])(id) ?? null), 0);
        return ()=>window.clearTimeout(t);
    }, [
        id
    ]);
    if (rec === undefined) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "f-muted",
        children: "Looking for the quote…"
    }, void 0, false, {
        fileName: "[project]/src/features/house/record/RecordBits.tsx",
        lineNumber: 85,
        columnNumber: 12
    }, this);
    if (rec === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-empty",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No quote with that number in this browser. Quotes are kept where they were made until accounts exist."
            }, void 0, false, {
                fileName: "[project]/src/features/house/record/RecordBits.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/pieces",
                className: "f-btn f-btn--sm",
                children: "Shop all designs"
            }, void 0, false, {
                fileName: "[project]/src/features/house/record/RecordBits.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/house/record/RecordBits.tsx",
        lineNumber: 88,
        columnNumber: 7
    }, this);
    const when = new Date(rec.at).toLocaleDateString("en-SG", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-doc",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "f-label",
                        children: [
                            "[ quote request · ",
                            when,
                            " ]"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/house/record/RecordBits.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "f-h1",
                        children: rec.id
                    }, void 0, false, {
                        fileName: "[project]/src/features/house/record/RecordBits.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/house/record/RecordBits.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "f-lede",
                children: "The exact configuration of every piece, so the animation you get with the boxes is for this order, not a generic one. Kept in this browser until accounts exist."
            }, void 0, false, {
                fileName: "[project]/src/features/house/record/RecordBits.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            rec.items.map((it, i)=>{
                const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveProduct"])(it.config);
                if (!p) return null;
                const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["counts"])(p, it.config);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "d-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-total",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "f-h2",
                                            children: [
                                                it.qty > 1 ? `${it.qty} × ` : "",
                                                p.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/house/record/RecordBits.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "f-small f-muted",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configSummary"])(it.config)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/house/record/RecordBits.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "f-small f-muted",
                                            children: [
                                                c.parts,
                                                " parts · ",
                                                c.bolts,
                                                " bolts · 1 key · ~",
                                                c.minutes,
                                                " min ·",
                                                " ",
                                                c.people === 1 ? "one person" : "two people",
                                                " · ",
                                                c.boxes,
                                                " ",
                                                c.boxes === 1 ? "box" : "boxes",
                                                ", heaviest ",
                                                c.heaviestKg,
                                                " kg"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/house/record/RecordBits.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/house/record/RecordBits.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/pieces/${p.id}`,
                                    className: "f-link",
                                    children: "Full details →"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/house/record/RecordBits.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/house/record/RecordBits.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-frame sf sf-embed",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordViewer, {
                                product: p,
                                config: it.config,
                                mode: "steps"
                            }, void 0, false, {
                                fileName: "[project]/src/features/house/record/RecordBits.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/house/record/RecordBits.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/features/house/record/RecordBits.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/house/record/RecordBits.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/storefront/components/FurnitureModel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FurnitureModel",
    ()=>FurnitureModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/draw.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$exploration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/exploration.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/steps.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function FurnitureModel({ product: p, config: configIn, explode = 0, selected, selectedIds, placedIds, justPlacedIds, onSelect, dimensions = false, back = false, folded = false, morphTo, morphProgress = 0, turn, hideGroups, className }) {
    const config = configIn ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"])(p);
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assembly"])(p, config);
    const targetNodes = morphTo ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assembly"])(morphTo.product, morphTo.config) : null;
    const nodes = targetNodes ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$exploration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionParts"])(source, targetNodes, morphProgress) : source;
    const rotation = (turn ?? (back ? 180 : 0)) * Math.PI / 180;
    const cx = p.width / 2;
    const cy = (p.depth ?? 400) / 2;
    const rotate = (x, y)=>[
            cx + (x - cx) * Math.cos(rotation) - (y - cy) * Math.sin(rotation),
            cy + (x - cx) * Math.sin(rotation) + (y - cy) * Math.cos(rotation)
        ];
    const proj = (x, y, z)=>{
        if (p.shape === "folding" && folded) {
            const leaf = Math.min(2, Math.floor(x / 600));
            const theta = Math.PI / 3;
            const localX = x - leaf * 600;
            const a = leaf === 1 ? theta : leaf === 2 ? -theta : 0;
            const startX = leaf === 2 ? 600 + 600 * Math.cos(theta) : leaf * 600;
            const startY = leaf === 2 ? 600 * Math.sin(theta) : 0;
            const nextX = startX + localX * Math.cos(a) - y * Math.sin(a);
            y = startY + localX * Math.sin(a) + y * Math.cos(a);
            x = nextX;
        }
        if (rotation) [x, y] = rotate(x, y);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso"])(x, y, z);
    };
    const all = targetNodes ? [
        ...source,
        ...targetNodes
    ] : nodes;
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bounds"])(all.flatMap((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boxCorners"])(n, proj)));
    const scale = Math.min(480 / (b.xmax - b.xmin + 170), 400 / (b.ymax - b.ymin + 160));
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paintSort"])(nodes.map((n)=>{
        const [rx, ry] = rotate(n.x, n.y);
        return {
            ...n,
            sortBox: {
                x: rx,
                y: ry
            }
        };
    })).sort((a, c)=>{
        const ay = a.sortBox.y + a.d / 2;
        const cy2 = c.sortBox.y + c.d / 2;
        return cy2 - ay || a.z - c.z || a.sortBox.x - c.sortBox.x;
    });
    const justIndex = new Map();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `sf-model${className ? ` ${className}` : ""}`,
        viewBox: "0 0 600 520",
        role: "img",
        "aria-label": `${p.name}, ${config.storage === "doors" ? "with doors" : "open front"}, ${config.finish} panels. Design drawing.`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                    id: `shadow${uid}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#6e1810",
                            stopOpacity: ".16"
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#6e1810",
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "300",
                cy: 260 + (b.ymax - b.ymin) / 2 * scale + 3,
                rx: "215",
                ry: "25",
                fill: `url(#shadow${uid})`
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `translate(${300 - (b.xmin + b.xmax) / 2 * scale} ${260 - (b.ymin + b.ymax) / 2 * scale}) scale(${scale})`,
                children: sorted.map((n)=>{
                    const motion = "motion" in n ? n.motion : undefined;
                    const visibility = "visibility" in n ? n.visibility : 1;
                    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partColors"])(n, config.finish);
                    const [from, to] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["explodeStage"][n.group] ?? [
                        0,
                        1
                    ];
                    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stage"])(explode, from, to);
                    const dx = e * ((n.x < p.width / 2 ? -1 : 1) * (n.group === "Body panels" ? 90 : 35));
                    const dy = e * (n.group === "Top" ? -100 : n.group === "Base" ? 65 : n.group === "Accessories" ? -40 : n.group === "Doors" ? 50 : 0);
                    const hidden = hideGroups?.includes(n.group) ?? false;
                    const dim = selectedIds ? selectedIds.includes(n.partId) ? 1 : 0.14 : !selected || selected === n.partId ? 1 : 0.14;
                    const waiting = placedIds ? !placedIds.includes(n.partId) : false;
                    let delay = 0;
                    if (justPlacedIds?.includes(n.partId)) {
                        const i = justIndex.get(n.partId) ?? 0;
                        justIndex.set(n.partId, i + 1);
                        delay = i * 70;
                    }
                    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faces"])(n, proj);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: onSelect ? "model-part interactive" : "model-part",
                        "data-part": n.partId,
                        "data-motion": motion,
                        style: {
                            transform: waiting ? "translate(0px,-170px)" : `translate(${dx}px,${dy}px)`,
                            opacity: hidden || waiting ? 0 : visibility * dim,
                            pointerEvents: hidden || waiting ? "none" : undefined,
                            transitionDelay: delay ? `${delay}ms` : undefined
                        },
                        onClick: onSelect ? ()=>onSelect(n.partId) : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: f.front,
                                fill: colors[0],
                                stroke: "#6e181033",
                                strokeWidth: "1.1"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: f.side,
                                fill: colors[1],
                                stroke: "#6e181044",
                                strokeWidth: "1.1"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: f.top,
                                fill: colors[2],
                                stroke: "#6e181033",
                                strokeWidth: "1.1"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this),
                            n.partId === "functional-panel" && [
                                "organiser",
                                "screen",
                                "desk"
                            ].includes(p.shape) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["holeGrid"])(n).map(([hx, hy, hz], i)=>{
                                const [px, py] = proj(hx, hy, hz);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: px,
                                    cy: py,
                                    r: 2.8,
                                    fill: "#6e18104a"
                                }, i, false, {
                                    fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                                    lineNumber: 215,
                                    columnNumber: 21
                                }, this);
                            })
                        ]
                    }, n.id, true, {
                        fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            dimensions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#6b2c12",
                fontSize: "12",
                fontFamily: "ui-monospace, monospace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M85 474h430m-430-5v10m430-10v10",
                        stroke: "#6b2c12",
                        strokeOpacity: ".5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "300",
                        y: "498",
                        textAnchor: "middle",
                        children: [
                            p.width / 10,
                            " cm ",
                            p.shape === "folding" ? "unfolded" : "wide"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "22",
                        y: "255",
                        transform: "rotate(-90 22 255)",
                        textAnchor: "middle",
                        children: [
                            p.height / 10,
                            " cm high"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "580",
                        y: "255",
                        transform: "rotate(-90 580 255)",
                        textAnchor: "middle",
                        children: p.depth === null ? "depth varies with fold" : `${p.depth / 10} cm deep`
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/FurnitureModel.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/storefront/components/ProductViewer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductViewer",
    ()=>ProductViewer,
    "roomFor",
    ()=>roomFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/moments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/props.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/scene.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$spot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/spot.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/steps.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/anim.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$useClock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/useClock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$RoomPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/components/RoomPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$three$2f$Stage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/components/three/Stage.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
;
const layerGroups = [
    "Base",
    "Body panels",
    "Shelves",
    "Top",
    "Doors",
    "Accessories"
];
function roomFor(p, momentId) {
    return (momentId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoment"])(momentId) : undefined) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moments"].find((m)=>m.pieces[0] === p.id) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moments"].find((m)=>m.pieces.includes(p.id)) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moments"][0];
}
function ProductViewer({ product: p, config, mode, onMode, storyOnly = false, autoplay = false, loop = false, cta = false, onHover, pins, renderPin }) {
    const [explode, setExplode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.85);
    const [layers, setLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(layerGroups);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [relationId, setRelationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [morph, setMorph] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [turn, setTurn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [inUse, setInUse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { spot, set, pickMoment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$spot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSpot"])();
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billOfParts"])(p, config), [
        p,
        config
    ]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSteps"])(p, config), [
        p,
        config
    ]);
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["counts"])(p, config), [
        p,
        config
    ]);
    const rels = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relationships"].filter((r)=>r.from === p.id);
    const relation = rels.find((r)=>r.id === relationId) ?? rels[0];
    const target = relation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProduct"])(relation.to) : undefined;
    const moment = roomFor(p, spot.momentId);
    const mine = spot.momentId === moment.id;
    const keeps = mine ? spot.keeps : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$spot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keepsFor"])(moment.id, null);
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutSpot"])(moment.layout, keeps, p.width);
    const wallMm = mine ? spot.wallMm : moment.wall;
    const fit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fitVerdict"])(wallMm, layout.total, p.height, p.bays);
    const propList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propsForPiece"])(p.id, p.height), [
        p.id,
        p.height
    ]);
    /* ---- step-by-step clock ---- */ const clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$useClock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClock"])(steps.length * 1100);
    const stepIdx = Math.min(steps.length - 1, Math.floor(Math.min(0.9999, clock.value / 0.82) * steps.length));
    const stepNow = steps[Math.max(0, stepIdx)];
    const assembly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            progress: clock.ref,
            steps: steps.length,
            stepOf: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stepForPart"])(steps, id)
        }), [
        clock.ref,
        steps
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === "steps") {
            clock.seek(0);
            clock.play();
        } else clock.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mode
    ]);
    /* ---- props bounce in when the piece is in use ---- */ const propsClock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$useClock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClock"])(1400);
    const propsWanted = (mode === "room" || mode === "built" && inUse) && propList.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (propsWanted) propsClock.replay();
        else propsClock.seek(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        propsWanted,
        p.id,
        moment.id
    ]);
    /* ---- the story: one master clock drives parts, props, room, camera ---- */ const story = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$useClock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClock"])(9000, {
        autoplay: autoplay && mode === "story",
        loop
    });
    const storyAssembly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const storyProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const storyRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const drift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        turn: 0,
        zoom: 1,
        lift: 0
    });
    const storyTiming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            progress: storyAssembly,
            steps: steps.length + 1,
            stepOf: (id)=>id === "functional-panel" ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stepForPart"])(steps, id) + 1
        }), [
        steps
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode !== "story") return;
        let raf = 0;
        const tick = ()=>{
            const t = story.ref.current;
            // finished and in use → pulled apart to one panel → back together → in use → the room
            const apart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.1, 0.3);
            const together = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.34, 0.7);
            storyAssembly.current = t < 0.34 ? 1 - apart : together;
            storyProps.current = t < 0.34 ? 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.08, 0.16) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.7, 0.84);
            storyRoom.current = t < 0.34 ? 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.1, 0.22)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.82, 0.96));
            const near = t < 0.34 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.1, 0.3)) : 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0.78, 0.96));
            drift.current = {
                turn: -8 + 26 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["window01"])(t, 0, 1)),
                zoom: 1 - 0.36 * near,
                lift: 0.1 * near
            };
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(raf);
    }, [
        mode,
        story.ref
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === "story") {
            if (!autoplay) story.replay();
        } else story.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mode,
        p.id
    ]);
    const beats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                at: 0.0,
                title: `${moment.spot}. ${p.use}`,
                sub: propList.length ? "In use, to scale." : "To scale."
            },
            {
                at: 0.1,
                title: "Under it all, one panel.",
                sub: "18 mm birch. Holes where you use it, none where you look."
            },
            {
                at: 0.34,
                title: `${c.parts} parts, one key.`,
                sub: `${c.people === 1 ? "One person" : "Two people"}, about ${c.minutes} minutes.`
            },
            {
                at: 0.62,
                title: config.accessories.length ? "Add-ons hang on the holes." : "Nothing hangs on it yet.",
                sub: config.accessories.length ? "No tools. Add more next year." : "Hooks, trays and rails can be added later."
            },
            {
                at: 0.7,
                title: propList.length ? "Then it does its job." : "Then it stands where you put it.",
                sub: p.use
            },
            {
                at: 0.84,
                title: `${p.width / 10} cm on a ${wallMm / 10} cm wall.`,
                sub: fit.title
            }
        ], [
        c,
        p,
        config.accessories.length,
        propList.length,
        moment.spot,
        wallMm,
        fit.title
    ]);
    const beat = [
        ...beats
    ].reverse().find((b)=>story.value >= b.at) ?? beats[0];
    const modes = [
        {
            id: "story",
            label: "Story"
        },
        {
            id: "built",
            label: "Turn it"
        },
        {
            id: "room",
            label: "On my wall"
        },
        {
            id: "parts",
            label: "Open it up"
        },
        {
            id: "steps",
            label: "Step by step"
        },
        {
            id: "becomes",
            label: "What it can become",
            off: rels.length === 0
        }
    ];
    const roomStage = {
        keeps: layout.keeps,
        wallMm,
        depthMm: moment.depth,
        onWall: (v)=>{
            if (!mine) pickMoment(moment.id);
            set({
                wallMm: v
            });
        }
    };
    const stageProps = mode === "story" ? {
        placements: [
            {
                key: "piece",
                product: p,
                config,
                x: layout.pieceX,
                label: p.name
            }
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
        orbit: false
    } : mode === "room" ? {
        placements: [
            {
                key: "piece",
                product: p,
                config,
                x: layout.pieceX,
                label: p.name,
                ghost: fit.tone === "no"
            }
        ],
        ...roomStage,
        props: propList,
        propsProgress: propsClock.ref
    } : mode === "parts" ? {
        placements: [
            {
                key: "piece",
                product: p,
                config,
                x: 0
            }
        ],
        explode,
        hideGroups: layerGroups.filter((g)=>!layers.includes(g)),
        selected,
        onSelect: (id)=>setSelected((s)=>s === id ? undefined : id),
        turn
    } : mode === "steps" ? {
        placements: [
            {
                key: "piece",
                product: p,
                config,
                x: 0
            }
        ],
        assembly,
        onSelect: (id)=>{
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stepForPart"])(steps, id);
            if (i >= 0) {
                clock.pause();
                clock.seek(i / steps.length * 0.82 + 0.2);
            }
        },
        turn
    } : mode === "becomes" && relation && target ? {
        placements: [
            {
                key: "piece",
                product: p,
                config,
                x: 0
            }
        ],
        morphTo: {
            product: target,
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"])(target)
        },
        morphProgress: morph,
        turn
    } : {
        placements: [
            {
                key: "piece",
                product: p,
                config,
                x: 0
            }
        ],
        turn,
        props: inUse ? propList : undefined,
        propsProgress: propsClock.ref
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `sf-viewer${storyOnly ? " sf-viewer-story" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-stage sf-stage--3d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$three$2f$Stage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stage"], {
                        ...stageProps,
                        onHover: onHover,
                        pins: pins,
                        renderPin: renderPin
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    mode === "story" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sf-story-caption",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "sf-display",
                                children: beat.title
                            }, beat.at, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: beat.sub
                            }, `s${beat.at}`, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sf-hint",
                        children: [
                            mode === "built" && "Drag to turn",
                            mode === "room" && `${moment.spot}${mine ? "" : " (usual spot)"} · drag the ⟷ handle to your wall width`,
                            mode === "parts" && (selected ? `${parts.find((r)=>r.id === selected)?.name ?? ""} · ${parts.find((r)=>r.id === selected)?.spec ?? ""}` : "Click a part · slide to open it up"),
                            mode === "steps" && stepNow && `Step ${stepNow.n} of ${steps.length} · ${stepNow.title} · click a part to jump to its step`,
                            mode === "becomes" && relation && `${p.name} → ${target?.name}`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 357,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            mode === "story" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-story-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "sf-btn sf-btn-ghost sf-btn-sm",
                        onClick: ()=>story.playing ? story.pause() : story.value >= 1 ? story.replay() : story.play(),
                        children: story.playing ? "Pause" : story.value >= 1 ? "Replay" : "Play"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `story-range-${p.id}`,
                        className: "sf-range",
                        type: "range",
                        min: 0,
                        max: 1000,
                        value: Math.round(story.value * 1000),
                        onChange: (e)=>{
                            story.pause();
                            story.seek(Number(e.target.value) / 1000);
                        },
                        "aria-label": "Scrub the story"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sf-story-beats",
                        "aria-hidden": "true",
                        children: beats.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "data-on": story.value >= b.at,
                                onClick: ()=>{
                                    story.pause();
                                    story.seek(b.at + 0.01);
                                },
                                title: b.title
                            }, b.at, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 401,
                        columnNumber: 11
                    }, this),
                    cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/shop/${p.id}`,
                        className: "sf-btn sf-btn-primary sf-btn-sm",
                        children: [
                            "See the ",
                            p.name.toLowerCase()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 416,
                        columnNumber: 13
                    }, this),
                    storyOnly && !cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$RoomPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomPicker"], {
                        variant: "link",
                        label: mine ? "Change my wall" : "Show it on my wall"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 424,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                lineNumber: 374,
                columnNumber: 9
            }, this),
            !storyOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-views",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sf-viewtabs",
                        role: "tablist",
                        "aria-label": "View",
                        children: modes.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": mode === m.id,
                                className: "sf-mode",
                                onClick: ()=>onMode(m.id),
                                disabled: m.off,
                                children: m.label
                            }, m.id, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 440,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this),
                    mode === "built" && propList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "sf-switch",
                        "aria-pressed": inUse,
                        onClick: ()=>setInUse((v)=>!v),
                        children: "In use"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 454,
                        columnNumber: 13
                    }, this),
                    (mode === "parts" || mode === "steps" || mode === "becomes") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "sf-switch",
                        "aria-pressed": turn === 180,
                        onClick: ()=>setTurn((t)=>t === 180 ? 0 : 180),
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 464,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                lineNumber: 437,
                columnNumber: 9
            }, this),
            !storyOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-mode-row",
                children: [
                    mode === "room" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-chips",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$RoomPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomPicker"], {
                                        variant: "button",
                                        label: mine ? `Change my wall · ${moment.spot}` : `Set my wall (showing ${moment.spot.toLowerCase()})`
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 481,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sf-mono sf-muted sf-num",
                                        children: [
                                            wallMm / 10,
                                            " cm wall · drag the handle or set it in the room picker"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 489,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 480,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `sf-verdict ${fit.tone}`,
                                "aria-live": "polite",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: fit.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 495,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sf-small",
                                        children: fit.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 496,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 494,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 479,
                        columnNumber: 13
                    }, this),
                    mode === "parts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-sliderrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sf-mono sf-faint",
                                        children: "Open"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 504,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "explode-range",
                                        className: "sf-range",
                                        type: "range",
                                        min: 0,
                                        max: 100,
                                        value: Math.round(explode * 100),
                                        onChange: (e)=>setExplode(Number(e.target.value) / 100),
                                        "aria-label": "Open the piece up"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 505,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sf-chips",
                                        children: layerGroups.filter((g)=>parts.some((r)=>r.group === g)).map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "sf-chip",
                                                "aria-pressed": layers.includes(g),
                                                onClick: ()=>setLayers((l)=>l.includes(g) ? l.filter((x)=>x !== g) : [
                                                            ...l,
                                                            g
                                                        ]),
                                                children: g === "Accessories" ? "Add-ons" : g
                                            }, g, false, {
                                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                lineNumber: 519,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 503,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-partgrid",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupSequence"].map((g)=>({
                                        g,
                                        rows: parts.filter((r)=>r.group === g)
                                    })).filter((x)=>x.rows.length).map(({ g, rows })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "sf-part-group",
                                                children: g
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                lineNumber: 543,
                                                columnNumber: 23
                                            }, this),
                                            rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "sf-part",
                                                    "aria-pressed": selected === r.id,
                                                    onClick: ()=>setSelected(selected === r.id ? undefined : r.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "qty sf-num",
                                                            children: [
                                                                r.quantity,
                                                                "×"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: r.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "spec",
                                                            children: r.spec
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                            lineNumber: 556,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 25
                                                }, this))
                                        ]
                                    }, g, true, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 542,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 537,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 502,
                        columnNumber: 13
                    }, this),
                    mode === "steps" && stepNow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-transport",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "sf-btn sf-btn-primary sf-btn-sm",
                                        onClick: ()=>clock.playing ? clock.pause() : clock.value >= 1 ? clock.replay() : clock.play(),
                                        children: clock.playing ? "Pause" : clock.value >= 1 ? "Replay" : "Play"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 568,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "assembly-range",
                                        className: "sf-range",
                                        type: "range",
                                        min: 0,
                                        max: 1000,
                                        value: Math.round(clock.value * 1000),
                                        onChange: (e)=>{
                                            clock.pause();
                                            clock.seek(Number(e.target.value) / 1000);
                                        },
                                        "aria-label": "Scrub the assembly"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sf-mono sf-muted sf-num",
                                        children: [
                                            Math.round(clock.value * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 598,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 567,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-stepstrip",
                                children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "sf-stepchip",
                                        "aria-current": i === stepIdx ? "step" : undefined,
                                        "data-done": i < stepIdx,
                                        onClick: ()=>{
                                            clock.pause();
                                            clock.seek(i / steps.length * 0.82 + 0.2);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "sf-num",
                                                children: s.n
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                lineNumber: 615,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: s.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                lineNumber: 616,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, s.n, true, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 604,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 602,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-stepnow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sf-h4",
                                            children: stepNow.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                            lineNumber: 622,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sf-body sf-small",
                                            children: stepNow.detail
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                            lineNumber: 623,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sf-step-meta",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: stepNow.parts.map((pt)=>`${pt.quantity}× ${pt.name}`).join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                lineNumber: 625,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                            lineNumber: 624,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sf-step-meta",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: stepNow.bolts ? `${stepNow.bolts} bolts~` : "no bolts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: stepNow.tool === "none" ? "no tool" : stepNow.tool
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: stepNow.people === 1 ? "1 person" : "2 people"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "~",
                                                        stepNow.minutes,
                                                        " min"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                            lineNumber: 631,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                    lineNumber: 621,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 620,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 566,
                        columnNumber: 13
                    }, this),
                    mode === "becomes" && relation && target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-sliderrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sf-chips",
                                        children: rels.map((r)=>{
                                            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProduct"])(r.to);
                                            return t ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "sf-chip",
                                                "aria-pressed": relation.id === r.id,
                                                onClick: ()=>{
                                                    setRelationId(r.id);
                                                    setMorph(0);
                                                },
                                                children: r.kind === "combine" ? `Two make ${t.name.toLowerCase()}` : `→ ${t.name}`
                                            }, r.id, false, {
                                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                                lineNumber: 655,
                                                columnNumber: 23
                                            }, this) : null;
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 651,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "morph-range",
                                        className: "sf-range",
                                        type: "range",
                                        min: 0,
                                        max: 100,
                                        value: Math.round(morph * 100),
                                        onChange: (e)=>setMorph(Number(e.target.value) / 100),
                                        "aria-label": `Change from ${p.name} to ${target.name}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 650,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Diff, {
                                source: p,
                                sourceConfig: config,
                                target: target,
                                quantity: relation.quantity,
                                note: relation.note,
                                summary: relation.summary
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 683,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 649,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                lineNumber: 477,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
        lineNumber: 341,
        columnNumber: 5
    }, this);
}
function Diff({ source, sourceConfig, target, quantity, note, summary }) {
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["difference"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billOfParts"])(source, sourceConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billOfParts"])(target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"])(target)), quantity);
    const kept = diff.filter((d)=>d.kept);
    const added = diff.filter((d)=>d.added);
    const removed = diff.filter((d)=>d.removed);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sf-diffwrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sf-small",
                style: {
                    fontStretch: "84%"
                },
                children: summary
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                lineNumber: 724,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-diff",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "keep",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Keep"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 729,
                                columnNumber: 11
                            }, this),
                            kept.map((d)=>`${d.kept}× ${d.name}`).join(", ") || "—"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "add",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 733,
                                columnNumber: 11
                            }, this),
                            added.map((d)=>`${d.added}× ${d.name}`).join(", ") || "—"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aside",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Set aside"
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                                lineNumber: 737,
                                columnNumber: 11
                            }, this),
                            removed.map((d)=>`${d.removed}× ${d.name}`).join(", ") || "—"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                        lineNumber: 736,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sf-mono sf-muted",
                children: note
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
                lineNumber: 741,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/ProductViewer.tsx",
        lineNumber: 723,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/storefront/components/RoomPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoomPicker",
    ()=>RoomPicker,
    "UseThisRoom",
    ()=>UseThisRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/moments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/scene.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$spot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/spot.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$rooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/rooms.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$three$2f$Thumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/components/three/Thumb.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function RoomPicker({ variant = "chip", label }) {
    const { spot, pickMoment, set, toggleKeep, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$spot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSpot"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const moment = spot.momentId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoment"])(spot.momentId) : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onKey = (e)=>e.key === "Escape" && setOpen(false);
        const onDown = (e)=>{
            if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        window.addEventListener("pointerdown", onDown);
        return ()=>{
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("pointerdown", onDown);
        };
    }, [
        open
    ]);
    const layout = moment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutSpot"])(moment.layout.filter((k)=>k !== "piece"), spot.keeps, 0) : null;
    const text = label ?? (moment ? `${spot.wallMm / 10} cm · ${moment.spot.toLowerCase()}` : "Set it");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: wrap,
        className: `sf-wallpick sf-wallpick-${variant}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: variant === "chip" ? "sf-roomchip" : variant === "button" ? "sf-btn sf-btn-ghost sf-btn-sm" : "sf-linkbtn",
                "data-set": Boolean(moment),
                "aria-expanded": open,
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    variant === "chip" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RulerIcon, {}, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                        lineNumber: 67,
                        columnNumber: 32
                    }, this),
                    variant === "chip" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sf-roomchip-k",
                        children: "Your wall"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                        lineNumber: 68,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sf-roomchip-v",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sf-popover",
                role: "dialog",
                "aria-label": "My wall",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sf-popover-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-popover-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Your wall"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sf-small sf-muted",
                                        children: "Every fit check and every picture in a room uses this."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-popover-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "sf-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Where"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "wall-spot",
                                                className: "sf-select",
                                                value: spot.momentId ?? "",
                                                onChange: (e)=>e.target.value ? pickMoment(e.target.value) : clear(),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Not set"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$rooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomOrder"].map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                            label: room,
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moments"].filter((m)=>m.room === room).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: m.id,
                                                                    children: m.spot
                                                                }, m.id, false, {
                                                                    fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, room, false, {
                                                            fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sf-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Wall width ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: "sf-num",
                                                        children: [
                                                            spot.wallMm / 10,
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "wall-width",
                                                className: "sf-range",
                                                type: "range",
                                                min: 60,
                                                max: 600,
                                                value: spot.wallMm / 10,
                                                disabled: !moment,
                                                onChange: (e)=>set({
                                                        wallMm: Number(e.target.value) * 10
                                                    }),
                                                "aria-label": "Wall width in centimetres"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sf-refs",
                                                "aria-hidden": "true",
                                                children: "door 80 · bed 90 · double 150 · sofa 180"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Already standing there"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sf-chips sf-chips-sm",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$spot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["allKeeps"].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "sf-chip",
                                                "aria-pressed": spot.keeps.includes(k),
                                                disabled: !moment,
                                                onClick: ()=>toggleKeep(k),
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepNames"][k]
                                            }, k, false, {
                                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sf-popover-side",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-popover-pic",
                                children: moment && layout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$three$2f$Thumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotThumb"], {
                                    placements: [],
                                    keeps: layout.keeps,
                                    wallMm: spot.wallMm,
                                    depthMm: moment.depth,
                                    alt: `${moment.spot}, ${spot.wallMm / 10} cm wide`
                                }, void 0, false, {
                                    fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sf-small sf-muted",
                                    children: "Pick a spot to see it."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sf-popover-foot",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "sf-btn sf-btn-primary sf-btn-sm",
                                        onClick: ()=>setOpen(false),
                                        children: "Done"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "sf-linkbtn",
                                        disabled: !moment,
                                        onClick: ()=>clear(),
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function RulerIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1.5",
                y: "5.5",
                width: "13",
                height: "5",
                rx: "1",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 5.5v2M6.5 5.5v3M9 5.5v2M11.5 5.5v3",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
function UseThisRoom({ momentId }) {
    const { spot, pickMoment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$spot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSpot"])();
    const mine = spot.momentId === momentId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "sf-chip",
        "aria-pressed": mine,
        onClick: ()=>pickMoment(momentId),
        children: mine ? "This is my wall" : "Use as my wall"
    }, void 0, false, {
        fileName: "[project]/src/features/storefront/components/RoomPicker.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/storefront/components/Scene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scene",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/draw.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/moments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/scene.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const VB_W = 800;
const VB_H = 480;
function Scene({ wallMm, depthMm, keeps = [], placements, onWall, showWall = true, dimension = true, enterKey, caption, className }) {
    const W = wallMm;
    const D = depthMm;
    // Motion only for things the visitor adds after the drawing is on screen.
    // A drawing that arrives with a page is complete at first paint.
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = window.setTimeout(()=>setAnimate(true), 150);
        return ()=>window.clearTimeout(t);
    }, []);
    const tallest = keeps.reduce((m, k)=>Math.max(m, ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepBoxes"])(k.id, k.x, 0).map((b)=>b.z + b.h)), 0);
    const H = showWall ? Math.max(1500, tallest + 120) : 0;
    const drawn = [];
    let order = 0;
    for (const k of keeps)for (const b of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepBoxes"])(k.id, k.x, D))drawn.push({
        ...b,
        key: `${k.id}-${k.x}-${order}`,
        ghost: false,
        enter: false,
        holes: null,
        order: order++
    });
    for (const pl of placements){
        const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assembly"])(pl.product, pl.config);
        const depth = pl.product.depth ?? 400;
        const py = pl.y ?? D - depth;
        for (const n of nodes){
            if (n.kind === "wheel") continue;
            const box = pl.rot === 90 ? {
                x: pl.x + n.y,
                y: py - n.x - n.w,
                z: n.z,
                w: n.d,
                d: n.w,
                h: n.h
            } : {
                x: pl.x + n.x,
                y: py + n.y,
                z: n.z,
                w: n.w,
                d: n.d,
                h: n.h
            };
            const holes = n.partId === "functional-panel" && pl.rot !== 90 && [
                "organiser",
                "screen",
                "desk"
            ].includes(pl.product.shape) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["holeGrid"])({
                ...n,
                x: box.x,
                y: box.y,
                z: box.z
            }) : null;
            drawn.push({
                ...box,
                key: `${pl.key}-${n.id}`,
                colors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partColors"])(n, pl.config.finish),
                ghost: pl.ghost ?? false,
                enter: animate && (pl.enter ?? false),
                holes,
                order: order++
            });
        }
    }
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paintSort"])(drawn);
    const corners = [
        [
            0,
            0,
            0
        ],
        [
            W,
            0,
            0
        ],
        [
            W,
            D,
            0
        ],
        [
            0,
            D,
            0
        ],
        [
            0,
            D,
            H
        ],
        [
            W,
            D,
            H
        ],
        [
            0,
            -160,
            0
        ]
    ];
    const pts = [
        ...corners.map(([x, y, z])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso"])(x, y, z)),
        ...drawn.flatMap((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boxCorners"])(b, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso"]))
    ];
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bounds"])(pts);
    const pad = 36;
    const scale = Math.min((VB_W - 2 * pad) / (b.xmax - b.xmin), (VB_H - 2 * pad) / (b.ymax - b.ymin));
    const tx = VB_W / 2 - (b.xmin + b.xmax) / 2 * scale;
    const ty = VB_H / 2 - (b.ymin + b.ymax) / 2 * scale;
    const P = (x, y, z)=>{
        const [px, py] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso"])(x, y, z);
        return [
            px * scale + tx,
            py * scale + ty
        ];
    };
    const poly = (c)=>c.map((v)=>P(...v).join(",")).join(" ");
    // wall handle drag
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onDown = (e)=>{
        if (!onWall) return;
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = {
            x0: e.clientX,
            w0: W,
            k: VB_W / rect.width / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ISO_X"] * scale)
        };
        e.preventDefault();
    };
    const onMove = (e)=>{
        if (!drag.current || !onWall) return;
        const next = drag.current.w0 + (e.clientX - drag.current.x0) * drag.current.k;
        onWall((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(Math.round(next / 50) * 50, 600, 8000));
    };
    const onUp = ()=>{
        drag.current = null;
    };
    const handle = P(W, D, 0);
    const handleTop = P(W, D, showWall ? 700 : 300);
    const dimA = P(0, -140, 0);
    const dimB = P(W, -140, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        className: `sf-scene${className ? ` ${className}` : ""}`,
        viewBox: `0 0 ${VB_W} ${VB_H}`,
        role: "img",
        "aria-label": `A spot ${W / 10} cm wide with ${placements.map((p)=>p.product.name).join(", ")}${keeps.length ? ` beside ${keeps.map((k)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepNames"][k.id]).join(", ")}` : ""}.`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: poly([
                    [
                        0,
                        0,
                        0
                    ],
                    [
                        W,
                        0,
                        0
                    ],
                    [
                        W,
                        D,
                        0
                    ],
                    [
                        0,
                        D,
                        0
                    ]
                ]),
                fill: "#f3dfcb",
                stroke: "#6e1810",
                strokeOpacity: ".25"
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/Scene.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            showWall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: poly([
                    [
                        0,
                        D,
                        0
                    ],
                    [
                        W,
                        D,
                        0
                    ],
                    [
                        W,
                        D,
                        H
                    ],
                    [
                        0,
                        D,
                        H
                    ]
                ]),
                fill: "#fbeee0",
                stroke: "#6e1810",
                strokeOpacity: ".25"
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/Scene.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this),
            sorted.map((d)=>{
                const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faces"])(d, (x, y, z)=>P(x, y, z));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: d.enter ? "sf-drop" : undefined,
                    style: {
                        opacity: d.ghost ? 0.38 : 1,
                        animationDelay: d.enter ? `${Math.min(d.order % 40, 12) * 22}ms` : undefined
                    },
                    "data-enter": enterKey,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: f.front,
                            fill: d.colors[0],
                            stroke: "#6e181033",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/Scene.tsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: f.side,
                            fill: d.colors[1],
                            stroke: "#6e181044",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/Scene.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: f.top,
                            fill: d.colors[2],
                            stroke: "#6e181033",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/features/storefront/components/Scene.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        d.holes?.map(([hx, hy, hz], i)=>{
                            const [px, py] = P(hx, hy, hz);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: px,
                                cy: py,
                                r: 2.4 * Math.min(1, scale * 6),
                                fill: "#6e18104a"
                            }, i, false, {
                                fileName: "[project]/src/features/storefront/components/Scene.tsx",
                                lineNumber: 264,
                                columnNumber: 17
                            }, this);
                        })
                    ]
                }, d.key, true, {
                    fileName: "[project]/src/features/storefront/components/Scene.tsx",
                    lineNumber: 232,
                    columnNumber: 11
                }, this);
            }),
            keeps.map((k)=>{
                const [lx, ly] = P(k.x + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepWidth"][k.id] / 2, D - (k.id === "bed" ? 2000 : k.id === "sofa" ? 850 : k.id === "desk" || k.id === "counter" ? 600 : 450), 0);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: lx,
                    y: ly + 16,
                    textAnchor: "middle",
                    fontFamily: "ui-monospace, monospace",
                    fontSize: "10.5",
                    fill: "#6b2c12",
                    fillOpacity: ".7",
                    letterSpacing: ".5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepNames"][k.id].toUpperCase()
                }, `${k.id}-${k.x}`, false, {
                    fileName: "[project]/src/features/storefront/components/Scene.tsx",
                    lineNumber: 291,
                    columnNumber: 11
                }, this);
            }),
            placements.filter((p)=>p.label).map((p)=>{
                const [lx, ly] = P(p.x + p.product.width / 2, D - (p.product.depth ?? 400), 0);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: lx,
                    y: ly + 16,
                    textAnchor: "middle",
                    fontFamily: "ui-monospace, monospace",
                    fontSize: "10.5",
                    fill: "#e7551a",
                    letterSpacing: ".5",
                    children: p.label?.toUpperCase()
                }, p.key + "-label", false, {
                    fileName: "[project]/src/features/storefront/components/Scene.tsx",
                    lineNumber: 315,
                    columnNumber: 13
                }, this);
            }),
            dimension && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fontFamily: "ui-monospace, monospace",
                fontSize: "11",
                fill: "#6b2c12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: dimA[0],
                        y1: dimA[1],
                        x2: dimB[0],
                        y2: dimB[1],
                        stroke: "#6b2c12",
                        strokeOpacity: ".55"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/Scene.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: (dimA[0] + dimB[0]) / 2,
                        y: (dimA[1] + dimB[1]) / 2 + 16,
                        textAnchor: "middle",
                        children: [
                            W / 10,
                            " cm ",
                            showWall ? "of wall" : "of floor"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/storefront/components/Scene.tsx",
                        lineNumber: 340,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/Scene.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, this),
            onWall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "sf-wall-handle",
                onPointerDown: onDown,
                onPointerMove: onMove,
                onPointerUp: onUp,
                onPointerCancel: onUp,
                role: "slider",
                "aria-label": "Wall width",
                "aria-valuenow": W / 10,
                "aria-valuemin": 60,
                "aria-valuemax": 800,
                tabIndex: 0,
                onKeyDown: (e)=>{
                    if (e.key === "ArrowRight") onWall((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(W + 100, 600, 8000));
                    if (e.key === "ArrowLeft") onWall((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(W - 100, 600, 8000));
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: handle[0],
                        y1: handle[1],
                        x2: handleTop[0],
                        y2: handleTop[1],
                        stroke: "#e7551a",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/Scene.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: handle[0],
                        cy: handle[1],
                        r: "11",
                        fill: "#e7551a"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/Scene.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M${handle[0] - 5} ${handle[1]}h10M${handle[0] - 3} ${handle[1] - 3}l-2 3 2 3M${handle[0] + 3} ${handle[1] - 3}l2 3-2 3`,
                        stroke: "#fbf0dc",
                        strokeWidth: "1.4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/features/storefront/components/Scene.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/storefront/components/Scene.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "16",
                y: "24",
                fontFamily: "ui-monospace, monospace",
                fontSize: "10.5",
                fill: "#6b2c12",
                fillOpacity: ".7",
                letterSpacing: ".8",
                children: caption.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/Scene.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/Scene.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/storefront/components/three/Stage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage",
    ()=>Stage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
const Stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/features/storefront/components/three/Stage3D.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sf-stage3d sf-stage3d-loading",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/features/storefront/components/three/Stage.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
}),
"[project]/src/features/storefront/components/three/Thumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PieceThumb",
    ()=>PieceThumb,
    "SpotThumb",
    ()=>SpotThumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/blocks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/props.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$thumb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/thumb.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$FurnitureModel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/components/FurnitureModel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/components/Scene.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function PieceThumb({ product, config, turn = 0, explode = 0, alt }) {
    const cfg = config ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"])(product);
    const key = `piece:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configKeyOf"])(cfg)}:${turn}:${explode}`;
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$thumb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThumb"])(key, ()=>({
            blocks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placementBlocks"])({
                key: "p",
                product,
                config: cfg,
                x: 0
            }, {
                depthMm: product.depth ?? 400,
                explode
            }),
            depthMm: product.depth ?? 400,
            turn
        }));
    return url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        className: "sf-thumb",
        src: url,
        alt: alt ?? `${product.name}, design drawing`,
        draggable: false
    }, void 0, false, {
        fileName: "[project]/src/features/storefront/components/three/Thumb.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$FurnitureModel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FurnitureModel"], {
        product: product,
        config: cfg
    }, void 0, false, {
        fileName: "[project]/src/features/storefront/components/three/Thumb.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function SpotThumb({ placements, keeps, wallMm, depthMm, showWall = true, inUse = false, labels, size, alt }) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>`spot:${wallMm}:${depthMm}:${showWall}:${inUse ? "u" : ""}:${keeps.map((k)=>`${k.id}@${k.x}/${k.y ?? ""}`).join(",")}:${placements.map((p)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configKeyOf"])(p.config)}@${p.x}/${p.y ?? ""}/${p.rot ?? 0}/${p.ghost ? "g" : ""}`).join(",")}:${(labels ?? []).map((l)=>`${l.key}@${l.x}/${l.y}/${l.z}`).join(",")}:${size ? size.join("x") : ""}`, [
        placements,
        keeps,
        wallMm,
        depthMm,
        showWall,
        inUse,
        labels,
        size
    ]);
    const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$thumb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThumbResult"])(key, ()=>{
        const first = placements[0];
        return {
            blocks: [
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepBlocks"])(keeps, depthMm),
                ...placements.flatMap((pl)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placementBlocks"])(pl, {
                        depthMm
                    })),
                ...inUse && first ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propBlocks"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propsForPiece"])(first.product.id, first.product.height), {
                    x: first.x,
                    y: first.y ?? depthMm - (first.product.depth ?? 400)
                }) : []
            ],
            depthMm,
            wallMm,
            showWall,
            width: size?.[0] ?? 800,
            height: size?.[1] ?? 480,
            marks: (labels ?? []).map((l)=>({
                    key: l.key,
                    x: l.x,
                    y: l.y,
                    z: l.z
                }))
        };
    });
    if (out && labels) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sf-thumbwrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "sf-thumb",
                src: out.url,
                alt: alt,
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/features/storefront/components/three/Thumb.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            out.marks.map((mk)=>{
                const l = labels.find((x)=>x.key === mk.key);
                if (!l || mk.px < 0 || mk.px > 1 || mk.py < 0 || mk.py > 1) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `sf-thumblabel ${l.tone ?? "keep"}`,
                    style: {
                        left: `${mk.px * 100}%`,
                        top: `${mk.py * 100}%`
                    },
                    children: l.text
                }, mk.key, false, {
                    fileName: "[project]/src/features/storefront/components/three/Thumb.tsx",
                    lineNumber: 141,
                    columnNumber: 13
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/storefront/components/three/Thumb.tsx",
        lineNumber: 134,
        columnNumber: 7
    }, this);
    return out ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        className: "sf-thumb",
        src: out.url,
        alt: alt,
        draggable: false
    }, void 0, false, {
        fileName: "[project]/src/features/storefront/components/three/Thumb.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$components$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"], {
        wallMm: wallMm,
        depthMm: depthMm,
        keeps: keeps,
        placements: placements.map((p)=>({
                key: p.key,
                product: p.product,
                config: p.config,
                x: p.x,
                ...p.y !== undefined ? {
                    y: p.y
                } : {},
                ...p.rot !== undefined ? {
                    rot: p.rot
                } : {},
                ...p.ghost !== undefined ? {
                    ghost: p.ghost
                } : {}
            })),
        showWall: showWall,
        dimension: false
    }, void 0, false, {
        fileName: "[project]/src/features/storefront/components/three/Thumb.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/storefront/lib/assembly.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assembly",
    ()=>assembly,
    "billOfParts",
    ()=>billOfParts,
    "difference",
    ()=>difference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-ssr] (ecmascript)");
;
const accessoryName = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accessories"][id]?.name ?? id;
const accessoryBlurb = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accessories"][id]?.description ?? "";
function assembly(p, c) {
    const nodes = [];
    let serial = 0;
    const add = (partId, name, x, y, z, w, d, h, group = "Body panels", kind = "panel", spec)=>nodes.push({
            id: `${p.id}-${partId}-${serial++}`,
            partId,
            name,
            x,
            y,
            z,
            w,
            d,
            h,
            group,
            kind,
            spec: spec ?? `${Math.round(w)} × ${Math.round(d)} × ${Math.round(h)} mm · nominal`
        });
    const T = 18;
    const D = 400;
    const segment = 600;
    const mobile = [
        "trolley",
        "screen",
        "island"
    ].includes(p.shape);
    const baseZ = mobile ? 85 : 30;
    const H = p.height;
    if (p.shape === "folding") {
        for(let leaf = 0; leaf < 3; leaf++){
            for(let side = 0; side < 2; side++)add("fold-frame", "Leaf frame upright", leaf * 600 + side * 582, 0, 0, 18, 40, H, "Screen frames", "panel", "Frame section, grooves and hinge gaps pending");
            for(let tier = 0; tier < 3; tier++)add("fold-panel", "Screen panel", leaf * 600 + 18, 8, tier * 400, 564, 18, 400, "Screen panels");
            if (leaf < 2) add("hinge-assembly", "Continuous hinge", (leaf + 1) * 600 - 10, 0, 20, 12, 25, H - 40, "Connections", "hardware", "Hinge specification to be confirmed");
        }
        return nodes;
    }
    const bodyHeight = p.shape === "bench" ? 400 : H;
    for(let bay = 0; bay < p.bays; bay++){
        const x = bay * segment;
        add(mobile ? "caster-base" : "foot-base", mobile ? "Caster base" : "Foot base", x - 12, -12, baseZ - 28, 624, 424, 28, "Base", "base", mobile ? "Base tier B2 · casters · the L-key parks in here" : "Base tier B1 · adjustable pads · the L-key parks in here");
        if (mobile) for (const [dx, dy] of [
            [
                38,
                26
            ],
            [
                530,
                26
            ],
            [
                38,
                340
            ],
            [
                530,
                340
            ]
        ])add("caster-display", "Caster", x + dx, dy, 0, 32, 30, 60, "Base", "wheel", "Caster count and installed height not final");
        const full = p.family === "full-height";
        for(let side = 0; side < 2; side++)for(let t = 0; t < (full ? 1 : p.tiers); t++){
            const ph = full ? bodyHeight : bodyHeight / p.tiers;
            add(full ? `side-f${bodyHeight}` : "side-s400", full ? "Full-height side panel" : "Stacking side panel", x + side * (600 - T), 0, baseZ + t * ph, T, D, ph, "Body panels");
        }
        for(let t = 0; t < p.tiers; t++)add("functional-panel", "Functional panel", x + T, p.shape === "shelf" ? 191 : D - T, baseZ + t * (bodyHeight / p.tiers), 600 - 2 * T, T, bodyHeight / p.tiers, "Body panels");
        add("structural-bottom", "Bottom panel", x + T, 0, baseZ, 564, 380, T, "Body panels");
        if (p.shape === "organiser") {
            if (p.id === "entry") {
                add("shoe-shelf", "Shoe shelf", x + T, 0, baseZ + 240, 564, 330, T, "Shelves");
                add("narrow-shelf", "Narrow shelf", x + T, 180, baseZ + 780, 564, 190, T, "Shelves");
            } else if (p.id === "coat-rack") add("shelf-full", "Shelf", x + T, 0, baseZ + 300, 564, 380, T, "Shelves");
            else {
                const zs = bodyHeight >= 1200 ? [
                    430,
                    770
                ] : bodyHeight >= 800 ? [
                    400
                ] : [];
                for (const z of zs)add("shelf-full", "Shelf", x + T, 0, baseZ + z, 564, 380, T, "Shelves");
            }
        } else if (p.shape === "shelf") {
            for(let t = 1; t < p.tiers; t++)for (const y of [
                0,
                209
            ])add("narrow-shelf", "Narrow shelf", x + T, y, baseZ + t * 400, 564, 190, T, "Shelves");
        } else for(let t = 1; t < p.tiers; t++)add("shelf-full", "Shelf", x + T, 0, baseZ + t * (bodyHeight / p.tiers), 564, 380, T, "Shelves");
        if (![
            "island",
            "bench"
        ].includes(p.shape) && !(p.shape === "cabinet" && p.bays > 1)) add(p.id === "kitchen" ? "worktop-short" : "top-short", p.id === "kitchen" ? "Short worktop" : "Top panel", x, 0, baseZ + bodyHeight, 600, 400, T, "Top");
        if (c.storage === "doors") add(`door-assembly-${bodyHeight}`, "Door", x + T, -20, baseZ + T, 564, 18, bodyHeight - 30, "Doors", "door", "Door leaf with hinges; final specification pending");
    }
    if (p.shape === "island" || p.shape === "cabinet" && p.bays > 1) {
        add(`long-top-${p.width}`, "Shared long top", 0, 0, baseZ + bodyHeight, p.width, 400, 18, "Top", "panel", `${p.width} × 400 mm · preliminary top`);
    }
    if (p.shape === "bench") for(let bay = 0; bay < p.bays; bay++)add("seat-assembly", "Seat panel", bay * 600, 0, baseZ + bodyHeight, 600, 380, 25, "Top", "panel", "600 × 380 × 25 mm candidate; seating validation pending");
    if (p.bays > 1) for(let i = 1; i < p.bays; i++)add("bay-connector", "Bay connector", i * 600 - 12, 360, baseZ + 150, 24, 20, 45, "Connections", "hardware", "Connector geometry and fasteners to be confirmed");
    if (p.shape === "desk") {
        add("desktop", "Desk surface", 0, -600, baseZ + 720, 1200, 600, 18, "Desk");
        add("desk-support", "Desk support", 1164, -600, baseZ, 36, 580, 720, "Desk", "panel", "Support construction pending");
        for (const bracketX of [
            50,
            500
        ])add("desk-bracket", "Desk bracket", bracketX, -70, baseZ + 660, 50, 80, 60, "Connections", "hardware", "Bracket and fixing specification pending");
    }
    c.accessories.forEach((id, i)=>{
        const z = baseZ + bodyHeight * 0.65 - i * 150;
        if (id === "coat-hook") for(let k = 0; k < 3; k++)add("coat-hook", "Coat hook", 135 + k * 125, 300, z, 18, 70, 40, "Accessories", "accessory", "Hangs on the functional panel's exposed holes");
        else if (id === "clothes-rail") add(id, accessoryName(id), 80, 170, baseZ + bodyHeight - 200, 440, 25, 25, "Accessories", "accessory", "Rail and supports; final specification pending");
        else if (id === "kitchen-rail") add(id, accessoryName(id), -32, 60, baseZ + bodyHeight - 70, 20, 270, 20, "Accessories", "accessory", "Side rail; final specification pending");
        else add(id, accessoryName(id), 180, id === "key-tray" ? 190 : 300, z, id === "key-tray" ? 210 : 20, id === "key-tray" ? 170 : 70, id === "key-tray" ? 30 : 50, "Accessories", "accessory", accessoryBlurb(id));
    });
    return nodes;
}
function billOfParts(p, c) {
    const map = new Map();
    for (const n of assembly(p, c)){
        if (n.kind === "wheel") continue;
        const old = map.get(n.partId);
        if (old) old.quantity++;
        else map.set(n.partId, {
            id: n.partId,
            name: n.name,
            quantity: 1,
            spec: n.spec,
            group: n.group,
            kind: n.kind
        });
    }
    return [
        ...map.values()
    ];
}
function difference(source, target, quantity = 1) {
    const all = new Set([
        ...source.map((p)=>p.id),
        ...target.map((p)=>p.id)
    ]);
    const out = [];
    for (const id of all){
        const a = source.find((p)=>p.id === id);
        const b = target.find((p)=>p.id === id);
        const name = b?.name ?? a?.name;
        if (!name) continue;
        const start = (a?.quantity ?? 0) * quantity;
        const end = b?.quantity ?? 0;
        out.push({
            id,
            name,
            kept: Math.min(start, end),
            added: Math.max(0, end - start),
            removed: Math.max(0, start - end)
        });
    }
    return out;
}
}),
"[project]/src/features/storefront/lib/bag.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBag",
    ()=>useBag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-ssr] (ecmascript)");
"use client";
;
;
const KEY = "furnishes-bag-v1";
let cache = null;
const listeners = new Set();
const empty = [];
function read() {
    if (cache) return cache;
    if ("TURBOPACK compile-time truthy", 1) return empty;
    //TURBOPACK unreachable
    ;
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
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, read, ()=>empty);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((config)=>{
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configKeyOf"])(config);
        const cur = read();
        const hit = cur.find((i)=>i.id === id);
        write(hit ? cur.map((i)=>i.id === id ? {
                ...i,
                qty: Math.min(9, i.qty + 1)
            } : i) : [
            ...cur,
            {
                id,
                config,
                qty: 1,
                at: Date.now()
            }
        ]);
    }, []);
    const setQty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, qty)=>{
        write(read().map((i)=>i.id === id ? {
                ...i,
                qty: Math.max(1, Math.min(9, qty))
            } : i));
    }, []);
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>write(read().filter((i)=>i.id !== id)), []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>write([]), []);
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
}),
"[project]/src/features/storefront/lib/catalog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/custom.ts [app-ssr] (ecmascript)");
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
    if (c.productId === "custom") return c.custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customProduct"])(c.custom) : undefined;
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
        ...defaultConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customProduct"])(spec)),
        custom: spec
    };
}
function validConfig(input) {
    if (!input || typeof input !== "object") return null;
    const c = input;
    const custom = String(c.productId) === "custom" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validCustom"])(c.custom) : null;
    const p = custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customProduct"])(custom) : getProduct(String(c.productId));
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
}),
"[project]/src/features/storefront/lib/custom.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/features/storefront/lib/draw.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "holeGrid",
    ()=>holeGrid,
    "partColors",
    ()=>partColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-ssr] (ecmascript)");
;
function partColors(n, finish) {
    const accent = n.kind === "accessory" || n.kind === "hardware" || finish === "orange" && (n.kind === "door" || n.partId === "functional-panel" || n.partId === "fold-panel");
    if (accent) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].accent;
    if (n.kind === "wheel") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].wheel;
    if (n.kind === "base") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].base;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].wood;
}
function holeGrid(n) {
    const out = [];
    for(let i = 0; i < 12; i++)out.push([
        n.x + 60 + i % 4 * 125,
        n.y - 1,
        n.z + 70 + Math.floor(i / 4) * 115
    ]);
    return out;
}
}),
"[project]/src/features/storefront/lib/exploration.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transitionParts",
    ()=>transitionParts
]);
function transitionParts(source, target, progress) {
    const t = Math.max(0, Math.min(1, progress));
    const available = [
        ...target
    ];
    const result = source.map((a)=>{
        const i = available.findIndex((b)=>b.partId === a.partId && b.spec === a.spec && b.w === a.w && b.d === a.d && b.h === a.h);
        const b = i >= 0 ? available[i] : undefined;
        if (!b) return {
            ...a,
            x: a.x - 420 * t,
            y: a.y + 70 * t,
            visibility: 1 - 0.7 * t,
            motion: "removed"
        };
        available.splice(i, 1);
        return {
            ...a,
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t,
            z: a.z + (b.z - a.z) * t,
            visibility: 1,
            motion: "kept"
        };
    });
    return [
        ...result,
        ...available.map((b)=>({
                ...b,
                id: "new-" + b.id,
                x: b.x + 420 * (1 - t),
                y: b.y + 70 * (1 - t),
                visibility: t,
                motion: "added"
            }))
    ];
}
}),
"[project]/src/features/storefront/lib/iso.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * One isometric projection for every drawing on the site, so a piece in a
 * catalogue card, a piece in a spot and a divider run all read the same.
 * World units are millimetres: x along the wall, y into the room (larger y
 * is further back, against the wall), z up.
 */ __turbopack_context__.s([
    "ISO_X",
    ()=>ISO_X,
    "bounds",
    ()=>bounds,
    "boxCorners",
    ()=>boxCorners,
    "clamp",
    ()=>clamp,
    "faces",
    ()=>faces,
    "iso",
    ()=>iso,
    "paintSort",
    ()=>paintSort,
    "palette",
    ()=>palette,
    "stage",
    ()=>stage
]);
const iso = (x, y, z)=>[
        (x + 0.45 * y) * 0.75,
        x * 0.15 - y * 0.33 - z * 0.75
    ];
const ISO_X = 0.75;
const palette = {
    wood: [
        "#dcbd8f",
        "#bb9867",
        "#efd8b4"
    ],
    base: [
        "#9a8065",
        "#806953",
        "#c1a787"
    ],
    wheel: [
        "#3b3530",
        "#2c2824",
        "#5a524a"
    ],
    accent: [
        "#e7551a",
        "#c9430f",
        "#f0834f"
    ],
    keep: [
        "#e9d6c2",
        "#d3bba1",
        "#f4e6d4"
    ],
    keepSoft: [
        "#f1e2d0",
        "#dcc7ae",
        "#f8ecdc"
    ],
    door: [
        "#f6e9d8",
        "#e2cfb8",
        "#fbf3e8"
    ]
};
function boxCorners(b, proj) {
    const pts = [];
    for (const dx of [
        0,
        b.w
    ])for (const dy of [
        0,
        b.d
    ])for (const dz of [
        0,
        b.h
    ])pts.push(proj(b.x + dx, b.y + dy, b.z + dz));
    return pts;
}
function bounds(points) {
    let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
    for (const [x, y] of points){
        if (x < xmin) xmin = x;
        if (x > xmax) xmax = x;
        if (y < ymin) ymin = y;
        if (y > ymax) ymax = y;
    }
    return {
        xmin,
        xmax,
        ymin,
        ymax
    };
}
/** Painter's order: back to front, then bottom to top, then left to right. */ function painterKey(b) {
    return [
        -(b.y + b.d / 2),
        b.z,
        b.x
    ];
}
function paintSort(items) {
    return [
        ...items
    ].sort((a, b)=>{
        const ka = painterKey(a);
        const kb = painterKey(b);
        return ka[0] - kb[0] || ka[1] - kb[1] || ka[2] - kb[2];
    });
}
const pointsAttr = (pts)=>pts.map((p)=>`${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
function faces(b, proj) {
    const { x, y, z, w, d, h } = b;
    return {
        front: pointsAttr([
            proj(x, y, z),
            proj(x + w, y, z),
            proj(x + w, y, z + h),
            proj(x, y, z + h)
        ]),
        side: pointsAttr([
            proj(x + w, y, z),
            proj(x + w, y + d, z),
            proj(x + w, y + d, z + h),
            proj(x + w, y, z + h)
        ]),
        top: pointsAttr([
            proj(x, y, z + h),
            proj(x + w, y, z + h),
            proj(x + w, y + d, z + h),
            proj(x, y + d, z + h)
        ])
    };
}
const clamp = (v, lo, hi)=>Math.max(lo, Math.min(hi, v));
function stage(t, from, to) {
    const u = clamp((t - from) / (to - from), 0, 1);
    return u * u * (3 - 2 * u);
}
}),
"[project]/src/features/storefront/lib/moments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMoment",
    ()=>getMoment,
    "heroMoments",
    ()=>heroMoments,
    "keepNames",
    ()=>keepNames,
    "moments",
    ()=>moments
]);
const keepNames = {
    door: "the door",
    chair: "a chair",
    desk: "my desk",
    bed: "the bed",
    sofa: "the sofa",
    counter: "the counter",
    tv: "the TV"
};
const moments = [
    {
        id: "chair-by-the-door",
        spot: "The chair by the door",
        room: "Entryway",
        title: "That chair by the door",
        now: "A chair nobody sits on, wearing a coat and holding a bag.",
        could: "One panel with hooks and a shoe shelf beside it. The chair goes back to being a chair.",
        pieces: [
            "entry",
            "bench"
        ],
        couldFor: {
            bench: "A bench with storage under the seat. Sit to put your shoes on; the chair goes back to being a chair."
        },
        lenses: [
            "nothing-yet",
            "everything-stays",
            "moves-with-you"
        ],
        does: [
            "hang",
            "put down"
        ],
        map: {
            x: 12,
            y: 78
        },
        line: "small",
        wall: 2600,
        depth: 1200,
        layout: [
            "door",
            "piece",
            "chair"
        ]
    },
    {
        id: "desk-side",
        spot: "Beside the desk",
        room: "Workspace",
        title: "The desk you already like",
        now: "The desk is fine. The desk is also under a monitor, a charger, headphones and three cables.",
        could: "An organiser stands beside it. Nothing attaches to the desk. The desktop comes back.",
        pieces: [
            "desk",
            "work-cart"
        ],
        couldFor: {
            "work-cart": "A trolley on casters parks beside the desk and rolls away when you need the floor."
        },
        lenses: [
            "everything-stays",
            "moves-with-you"
        ],
        does: [
            "hang",
            "put down",
            "charge",
            "work"
        ],
        map: {
            x: 74,
            y: 30
        },
        line: "small",
        wall: 2400,
        depth: 1400,
        layout: [
            "desk",
            "piece"
        ]
    },
    {
        id: "bedside",
        spot: "Beside the bed",
        room: "Bedroom",
        title: "The last thing at night",
        now: "A phone on the floor. A glass on a book. A lamp on a box.",
        could: "A 40 cm block with a top and one open compartment. Or a door, if you'd rather not see inside.",
        pieces: [
            "bedside"
        ],
        lenses: [
            "nothing-yet",
            "everything-stays",
            "moves-with-you"
        ],
        does: [
            "put down",
            "hide",
            "charge"
        ],
        map: {
            x: 30,
            y: 26
        },
        line: "small",
        wall: 2400,
        depth: 2300,
        layout: [
            "bed",
            "piece"
        ]
    },
    {
        id: "kitchen-counter",
        spot: "The kitchen counter",
        room: "Kitchen & dining",
        title: "Thirty centimetres of counter",
        now: "The rice cooker, the kettle and the chopping board share the only free stretch.",
        could: "A trolley with a worktop rolls in when you cook and out when you don't.",
        pieces: [
            "kitchen",
            "island"
        ],
        couldFor: {
            island: "Two bays under one worktop. More counter, on casters, where the cooking happens."
        },
        lenses: [
            "everything-stays",
            "moves-with-you"
        ],
        does: [
            "put down",
            "work"
        ],
        map: {
            x: 52,
            y: 80
        },
        line: "small",
        wall: 2400,
        depth: 1300,
        layout: [
            "counter",
            "piece"
        ]
    },
    {
        id: "shared-bedroom",
        spot: "The shared room",
        room: "Shared spaces",
        title: "One room, two people",
        now: "A bed on each side and a line down the middle nobody can see.",
        could: "A double-sided bookcase makes the line real. Books on both sides, no drilling, no contractor.",
        pieces: [
            "bookcase",
            "mobile-screen",
            "folding-screen"
        ],
        couldFor: {
            "mobile-screen": "A screen on casters. A quiet face on one side, storage on the other, moved by hand.",
            "folding-screen": "Three framed leaves on hinges. A soft line across the room that folds flat when guests come."
        },
        lenses: [
            "nothing-yet",
            "everything-stays",
            "moves-with-you"
        ],
        does: [
            "divide",
            "display"
        ],
        map: {
            x: 52,
            y: 40
        },
        line: "wall",
        wall: 4600,
        depth: 2300,
        layout: [
            "bed",
            "piece",
            "bed"
        ]
    },
    {
        id: "video-call-corner",
        spot: "Behind the camera",
        room: "Workspace",
        title: "What the camera sees",
        now: "The call sees the laundry rack, the bed, the door.",
        could: "A mobile screen with a quiet face rolls behind your chair. Storage on your side.",
        pieces: [
            "mobile-screen"
        ],
        lenses: [
            "moves-with-you",
            "everything-stays"
        ],
        does: [
            "divide",
            "hang"
        ],
        map: {
            x: 88,
            y: 56
        },
        line: "wall",
        wall: 2400,
        depth: 1600,
        layout: [
            "desk",
            "piece"
        ]
    },
    {
        id: "living-wall",
        spot: "The long wall",
        room: "Living room",
        title: "The long empty wall",
        now: "A TV and a lot of nothing. Things pile on the floor beside it.",
        could: "Three bays low along the wall. Open, doors, or both.",
        pieces: [
            "sideboard",
            "bookcase"
        ],
        couldFor: {
            bookcase: "A double-sided bookcase stands against the wall now and steps out to divide the room later."
        },
        lenses: [
            "nothing-yet",
            "everything-stays"
        ],
        does: [
            "hide",
            "display",
            "put down"
        ],
        map: {
            x: 24,
            y: 55
        },
        line: "small",
        wall: 3400,
        depth: 1400,
        layout: [
            "tv",
            "piece"
        ]
    },
    {
        id: "new-workspace",
        spot: "The empty corner",
        room: "Workspace",
        title: "A corner with nothing in it yet",
        now: "You've just moved in. The corner is waiting for a desk.",
        could: "A desk and an organiser body that arrive as one flat delivery and go up in an evening.",
        pieces: [
            "workstation"
        ],
        lenses: [
            "nothing-yet"
        ],
        does: [
            "work",
            "hang",
            "charge"
        ],
        map: {
            x: 88,
            y: 12
        },
        line: "small",
        wall: 2400,
        depth: 1600,
        layout: [
            "piece"
        ]
    }
];
const getMoment = (id)=>moments.find((m)=>m.id === id);
const heroMoments = moments.slice(0, 5);
}),
"[project]/src/features/storefront/lib/props.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * What a piece holds once it is in use. Small stand-ins, drawn with the same
 * light as the furniture: a coat on the hook, keys in the tray, books on both
 * sides. Coordinates are local to the piece (mm): x across, y from front (0)
 * to back, z up. They appear after the piece is placed, in order.
 */ __turbopack_context__.s([
    "propsFor",
    ()=>propsFor,
    "propsForPiece",
    ()=>propsForPiece
]);
const coat = (x, z, color)=>({
        name: "coat",
        geo: "box",
        x,
        y: 180,
        z: z - 640,
        w: 210,
        d: 110,
        h: 640,
        color
    });
const book = (x, y, z, h, color, w = 34)=>({
        name: "book",
        geo: "box",
        x,
        y,
        z,
        w,
        d: 190,
        h,
        color
    });
const shoe = (x, y, z, color)=>({
        name: "shoe",
        geo: "box",
        x,
        y,
        z,
        w: 95,
        d: 250,
        h: 70,
        color
    });
const ink = "#4a3a33";
const textile = "#8a7f77";
const textile2 = "#5f6f7a";
const leather = "#b8865a";
const cream = "#efe6d8";
const orange = "#e7551a";
const green = "#6d8b5a";
const steel = "#9aa3a6";
const clay = "#c07a4e";
/* The rest of the vocabulary. Two designs may share a frame — the panel system
   is built on exactly that — so what tells them apart is what they are
   holding. These are the things, written once and stood in different places. */ const jar = (x, y, z, h, color)=>({
        name: "jar",
        geo: "cylinder",
        x,
        y,
        z,
        w: 80,
        d: 80,
        h,
        color
    });
const bottle = (x, y, z, h, color)=>({
        name: "bottle",
        geo: "cylinder",
        x,
        y,
        z,
        w: 70,
        d: 70,
        h,
        color
    });
const crate = (x, y, z, w, h, color, name = "box", d = 300)=>({
        name,
        geo: "box",
        x,
        y,
        z,
        w,
        d,
        h,
        color
    });
/** a stack of folded cloth: laundry, towels, a child's jumpers */ const folded = (x, y, z, n, color)=>Array.from({
        length: n
    }, (_, i)=>crate(x, y, z + i * 46, 250, 42, color, "folded", 280));
const basket = (x, y, z, w, h)=>({
        name: "basket",
        geo: "box",
        x,
        y,
        z,
        w,
        d: 300,
        h,
        color: "#c9b59b"
    });
const ball = (x, y, z, d, color)=>({
        name: "ball",
        geo: "sphere",
        x,
        y,
        z,
        w: d,
        d,
        h: d,
        color
    });
/** a lamp in three pieces: the tall one for a bedside, a short one for a child */ const lamp = (x, z, stem, shade)=>[
        {
            name: "lamp base",
            geo: "cylinder",
            x: x + 30,
            y: 140,
            z,
            w: 120,
            d: 120,
            h: 20,
            color: ink
        },
        {
            name: "lamp stem",
            geo: "cylinder",
            x: x + 80,
            y: 190,
            z: z + 20,
            w: 20,
            d: 20,
            h: stem,
            color: ink
        },
        {
            name: "lamp shade",
            geo: "cylinder",
            x: x + 90 - shade / 2,
            y: 200 - shade / 2,
            z: z + 20 + stem,
            w: shade,
            d: shade,
            h: Math.round(shade * 0.72),
            color: cream
        }
    ];
/** a row of books standing up along a shelf */ const bookrow = (x, y, z, n, seed = 0, tall = 190)=>Array.from({
        length: n
    }, (_, i)=>book(x + i * 44, y, z, tall + (i * 37 + seed * 13) % 80, [
            ink,
            orange,
            cream,
            textile2,
            green,
            textile
        ][(i + seed) % 6] ?? ink, 36));
const propsFor = {
    entry: [
        coat(150, 815, textile2),
        coat(420, 815, textile),
        {
            name: "bag",
            geo: "box",
            x: 330,
            y: 200,
            z: 815 - 380,
            w: 260,
            d: 120,
            h: 300,
            color: leather
        },
        {
            name: "keys",
            geo: "box",
            x: 240,
            y: 240,
            z: 815 - 150 + 30,
            w: 60,
            d: 40,
            h: 12,
            color: ink
        },
        shoe(80, 60, 270, ink),
        shoe(190, 60, 270, ink),
        shoe(330, 60, 270, "#c9c0b3"),
        shoe(440, 60, 270, "#c9c0b3")
    ],
    desk: [
        {
            name: "headphones",
            geo: "cylinder",
            x: 188,
            y: 300,
            z: 815 - 20,
            w: 170,
            d: 170,
            h: 40,
            color: ink
        },
        book(60, 60, 460, 250, orange),
        book(100, 60, 460, 230, cream),
        book(140, 60, 460, 260, textile2),
        {
            name: "plant",
            geo: "cylinder",
            x: 420,
            y: 120,
            z: 460,
            w: 120,
            d: 120,
            h: 110,
            color: "#c9b59b"
        },
        {
            name: "leaves",
            geo: "sphere",
            x: 400,
            y: 100,
            z: 560,
            w: 170,
            d: 170,
            h: 170,
            color: green
        },
        {
            name: "notebook",
            geo: "box",
            x: 260,
            y: 90,
            z: 800,
            w: 210,
            d: 150,
            h: 18,
            color: cream
        }
    ],
    bedside: [
        {
            name: "lamp base",
            geo: "cylinder",
            x: 380,
            y: 140,
            z: 430,
            w: 120,
            d: 120,
            h: 20,
            color: ink
        },
        {
            name: "lamp stem",
            geo: "cylinder",
            x: 425,
            y: 185,
            z: 450,
            w: 20,
            d: 20,
            h: 220,
            color: ink
        },
        {
            name: "lamp shade",
            geo: "cylinder",
            x: 350,
            y: 110,
            z: 660,
            w: 180,
            d: 180,
            h: 130,
            color: cream
        },
        book(120, 80, 430, 22, orange, 150),
        {
            name: "glass",
            geo: "cylinder",
            x: 200,
            y: 200,
            z: 430,
            w: 70,
            d: 70,
            h: 100,
            color: "#d8e6ea"
        },
        {
            name: "phone",
            geo: "box",
            x: 60,
            y: 60,
            z: 30 + 30,
            w: 70,
            d: 150,
            h: 8,
            color: ink
        }
    ],
    kitchen: [
        {
            name: "board",
            geo: "box",
            x: 80,
            y: 60,
            z: 903,
            w: 300,
            d: 220,
            h: 18,
            color: "#c9a97d"
        },
        {
            name: "bowl",
            geo: "cylinder",
            x: 420,
            y: 120,
            z: 903,
            w: 150,
            d: 150,
            h: 70,
            color: cream
        },
        {
            name: "jar",
            geo: "cylinder",
            x: 120,
            y: 200,
            z: 485,
            w: 100,
            d: 100,
            h: 140,
            color: "#d8e6ea"
        },
        {
            name: "jar",
            geo: "cylinder",
            x: 260,
            y: 200,
            z: 485,
            w: 100,
            d: 100,
            h: 140,
            color: cream
        },
        {
            name: "pot",
            geo: "cylinder",
            x: 380,
            y: 160,
            z: 485,
            w: 180,
            d: 180,
            h: 110,
            color: "#3b3530"
        },
        {
            name: "towel",
            geo: "box",
            x: -30,
            y: 90,
            z: 620,
            w: 12,
            d: 200,
            h: 180,
            color: textile2
        }
    ],
    "work-cart": [
        {
            name: "toolbox",
            geo: "box",
            x: 60,
            y: 80,
            z: 485,
            w: 280,
            d: 200,
            h: 120,
            color: orange
        },
        {
            name: "roll",
            geo: "cylinder",
            x: 400,
            y: 120,
            z: 485,
            w: 120,
            d: 120,
            h: 300,
            color: cream
        },
        {
            name: "jar",
            geo: "cylinder",
            x: 100,
            y: 200,
            z: 85,
            w: 100,
            d: 100,
            h: 140,
            color: "#d8e6ea"
        },
        {
            name: "headphones",
            geo: "cylinder",
            x: 188,
            y: 300,
            z: 600,
            w: 170,
            d: 170,
            h: 40,
            color: ink
        }
    ],
    sideboard: [
        {
            name: "vase",
            geo: "cylinder",
            x: 300,
            y: 150,
            z: 848,
            w: 140,
            d: 140,
            h: 260,
            color: "#c9b59b"
        },
        {
            name: "stems",
            geo: "sphere",
            x: 290,
            y: 140,
            z: 1080,
            w: 200,
            d: 200,
            h: 200,
            color: green
        },
        book(700, 60, 848, 220, ink),
        book(740, 60, 848, 240, orange),
        book(780, 60, 848, 200, cream),
        {
            name: "bowl",
            geo: "cylinder",
            x: 1350,
            y: 130,
            z: 848,
            w: 220,
            d: 220,
            h: 60,
            color: cream
        },
        book(650, 40, 448, 300, textile2, 40),
        book(700, 40, 448, 280, cream, 40)
    ],
    bookcase: [
        ...[
            0,
            1,
            2,
            3
        ].flatMap((t)=>[
                0,
                1
            ].flatMap((bay)=>[
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((i)=>book(bay * 600 + 40 + i * 44, 8, 30 + t * 400 + 18, 180 + i * 37 % 90, [
                        ink,
                        orange,
                        cream,
                        textile2,
                        green,
                        textile
                    ][(i + t + bay) % 6] ?? ink, 36))))
    ],
    workstation: [
        {
            name: "laptop",
            geo: "box",
            x: 350,
            y: -420,
            z: 768,
            w: 320,
            d: 220,
            h: 14,
            color: "#c9c0b3"
        },
        {
            name: "screen",
            geo: "box",
            x: 350,
            y: -215,
            z: 782,
            w: 320,
            d: 10,
            h: 210,
            color: ink
        },
        {
            name: "mug",
            geo: "cylinder",
            x: 800,
            y: -380,
            z: 768,
            w: 90,
            d: 90,
            h: 100,
            color: orange
        },
        book(80, 60, 830, 240, cream),
        book(120, 60, 830, 260, textile2),
        {
            name: "headphones",
            geo: "cylinder",
            x: 188,
            y: 300,
            z: 1215,
            w: 170,
            d: 170,
            h: 40,
            color: ink
        }
    ],
    "mobile-screen": [
        coat(300, 900, textile),
        {
            name: "bag",
            geo: "box",
            x: 100,
            y: 200,
            z: 445,
            w: 260,
            d: 120,
            h: 300,
            color: leather
        }
    ],
    "folding-screen": [],
    island: [
        {
            name: "board",
            geo: "box",
            x: 200,
            y: 60,
            z: 903,
            w: 360,
            d: 240,
            h: 18,
            color: "#c9a97d"
        },
        {
            name: "bowl",
            geo: "cylinder",
            x: 700,
            y: 110,
            z: 903,
            w: 200,
            d: 200,
            h: 80,
            color: cream
        },
        {
            name: "bottle",
            geo: "cylinder",
            x: 980,
            y: 200,
            z: 903,
            w: 70,
            d: 70,
            h: 260,
            color: green
        },
        {
            name: "pot",
            geo: "cylinder",
            x: 200,
            y: 160,
            z: 485,
            w: 180,
            d: 180,
            h: 110,
            color: "#3b3530"
        }
    ],
    bench: [
        {
            name: "cushion",
            geo: "box",
            x: 40,
            y: 20,
            z: 455,
            w: 520,
            d: 340,
            h: 50,
            color: textile2
        },
        shoe(650, 60, 30, ink),
        shoe(760, 60, 30, ink),
        {
            name: "basket",
            geo: "box",
            x: 900,
            y: 40,
            z: 30,
            w: 260,
            d: 300,
            h: 200,
            color: "#c9b59b"
        }
    ],
    "coat-rack": [
        coat(120, 1440, textile),
        coat(300, 1440, textile2),
        coat(480, 1440, ink),
        {
            name: "bag",
            geo: "box",
            x: 320,
            y: 60,
            z: 348,
            w: 240,
            d: 300,
            h: 260,
            color: leather
        }
    ],
    custom: [
        book(60, 60, 460, 220, orange),
        book(100, 60, 460, 250, cream),
        {
            name: "plant",
            geo: "cylinder",
            x: 380,
            y: 120,
            z: 460,
            w: 120,
            d: 120,
            h: 110,
            color: "#c9b59b"
        },
        {
            name: "leaves",
            geo: "sphere",
            x: 360,
            y: 100,
            z: 560,
            w: 170,
            d: 170,
            h: 170,
            color: green
        }
    ],
    /* ---- one set per design that needs its own ----------------------------
     Below this line nothing is shared. Each of these belongs to one life and
     is named by what that life is for, not by the frame it is built on: a
     child's bedside and a spice station stand on the same 600 × 400 × 400
     block and are not holding one thing in common. */ // family.kids — lower, softer, nothing sharp on the face
    "kids-bedside": [
        ...lamp(320, 400, 130, 150),
        {
            ...book(90, 90, 400, 26, orange, 190),
            name: "picture book"
        },
        {
            ...book(96, 96, 426, 24, green, 180),
            name: "picture book"
        },
        jar(230, 200, 400, 90, "#d8e6ea"),
        ball(120, 150, 60, 130, orange),
        ...bookrow(60, 40, 30, 3, 2, 150)
    ],
    "kids-toys": [
        ball(110, 140, 470, 150, orange),
        crate(260, 60, 455, 220, 130, textile2, "toy box", 260),
        {
            ...crate(120, 90, 30, 120, 120, green, "block", 120)
        },
        {
            ...crate(250, 120, 30, 120, 120, clay, "block", 120)
        },
        {
            ...crate(380, 90, 30, 120, 120, cream, "block", 120)
        }
    ],
    "kids-divider": [
        ...bookrow(40, 30, 48, 5, 1, 150),
        ...bookrow(640, 30, 48, 4, 4, 150),
        basket(300, 40, 30, 260, 200),
        crate(40, 60, 448, 240, 150, orange, "toy box", 280),
        ball(700, 150, 448, 140, green),
        ...bookrow(880, 30, 448, 4, 3, 160)
    ],
    "kids-grille": [
        ball(90, 150, 448, 150, clay),
        crate(600, 60, 30, 260, 180, textile2, "toy box", 280),
        ...bookrow(240, 30, 848, 4, 5, 150),
        basket(880, 40, 30, 260, 190)
    ],
    // flat.kitchen — a face standing up from the counter
    "spice-shelf": [
        jar(60, 180, 400, 120, cream),
        jar(150, 180, 400, 100, clay),
        jar(240, 180, 400, 130, green),
        jar(330, 180, 400, 110, "#d8e6ea"),
        jar(420, 180, 400, 120, ink),
        bottle(510, 190, 400, 260, green),
        {
            name: "pot",
            geo: "cylinder",
            x: 180,
            y: 140,
            z: 803,
            w: 190,
            d: 190,
            h: 120,
            color: "#3b3530"
        }
    ],
    // loft.main — what lives behind a door in a living room
    devices: [
        crate(70, 150, 400, 300, 60, ink, "router", 220),
        crate(70, 150, 460, 240, 44, steel, "box", 200),
        {
            name: "speaker",
            geo: "box",
            x: 420,
            y: 150,
            z: 400,
            w: 130,
            d: 130,
            h: 250,
            color: textile
        },
        {
            name: "spool",
            geo: "cylinder",
            x: 420,
            y: 160,
            z: 60,
            w: 150,
            d: 150,
            h: 90,
            color: cream
        },
        {
            ...crate(80, 120, 820, 180, 20, ink, "remote", 60)
        }
    ],
    // family.hall — what lands by the door of a house with children in it
    console: [
        {
            name: "tray",
            geo: "box",
            x: 80,
            y: 130,
            z: 803,
            w: 280,
            d: 200,
            h: 40,
            color: clay
        },
        {
            name: "keys",
            geo: "box",
            x: 160,
            y: 180,
            z: 843,
            w: 60,
            d: 40,
            h: 12,
            color: ink
        },
        ...lamp(780, 803, 260, 200),
        basket(420, 50, 30, 300, 220),
        shoe(760, 60, 30, ink),
        shoe(870, 60, 30, "#c9c0b3"),
        ...folded(80, 50, 430, 2, textile2)
    ],
    "hall-strip": [
        coat(90, 1180, orange),
        coat(250, 1180, green),
        coat(410, 1240, textile2),
        {
            name: "bag",
            geo: "box",
            x: 300,
            y: 60,
            z: 348,
            w: 230,
            d: 280,
            h: 300,
            color: clay
        },
        {
            name: "scarf",
            geo: "box",
            x: 520,
            y: 170,
            z: 900,
            w: 90,
            d: 120,
            h: 420,
            color: cream
        },
        shoe(70, 60, 30, "#3b3530"),
        shoe(180, 60, 30, "#3b3530")
    ],
    // family.parents — the table you stand at, not sit at
    changing: [
        ...folded(60, 60, 803, 3, cream),
        ...folded(340, 60, 803, 2, textile2),
        crate(640, 130, 803, 220, 120, "#d8e6ea", "wipes", 200),
        basket(60, 50, 430, 300, 230),
        bottle(920, 190, 803, 180, cream),
        ...folded(420, 60, 430, 2, orange)
    ],
    "walk-in": [
        coat(80, 1500, textile),
        coat(240, 1500, ink),
        coat(400, 1500, cream),
        ...folded(620, 60, 830, 3, textile2),
        ...folded(620, 60, 430, 3, clay),
        shoe(80, 60, 30, leather),
        shoe(190, 60, 30, leather),
        basket(340, 50, 30, 260, 200)
    ],
    // flat.living
    "tv-front": [
        {
            name: "soundbar",
            geo: "box",
            x: 300,
            y: 140,
            z: 803,
            w: 900,
            d: 110,
            h: 80,
            color: ink
        },
        crate(80, 60, 430, 260, 200, clay, "box", 300),
        crate(380, 60, 430, 260, 200, textile2, "box", 300),
        {
            name: "plant",
            geo: "cylinder",
            x: 1420,
            y: 130,
            z: 803,
            w: 150,
            d: 150,
            h: 130,
            color: "#c9b59b"
        },
        {
            name: "leaves",
            geo: "sphere",
            x: 1400,
            y: 110,
            z: 923,
            w: 200,
            d: 200,
            h: 200,
            color: green
        },
        ...bookrow(760, 40, 430, 6, 2, 180)
    ],
    "drop-leaf": [
        {
            name: "laptop",
            geo: "box",
            x: 520,
            y: -380,
            z: 803,
            w: 320,
            d: 220,
            h: 14,
            color: "#c9c0b3"
        },
        {
            name: "screen",
            geo: "box",
            x: 520,
            y: -180,
            z: 817,
            w: 320,
            d: 10,
            h: 210,
            color: ink
        },
        {
            name: "mug",
            geo: "cylinder",
            x: 960,
            y: -330,
            z: 803,
            w: 90,
            d: 90,
            h: 100,
            color: orange
        },
        ...folded(80, 60, 430, 2, cream),
        ...bookrow(1180, 40, 430, 5, 1, 190)
    ],
    // flat.bath — the one that goes beside the bath and comes back out
    "bath-cart": [
        ...folded(60, 60, 455, 3, cream),
        bottle(360, 180, 455, 200, "#d8e6ea"),
        bottle(440, 180, 455, 160, green),
        bottle(510, 190, 455, 230, clay),
        jar(120, 200, 85, 110, cream),
        ...folded(260, 60, 85, 2, textile2)
    ],
    // flat.balcony — the one that lives outside
    "balcony-cart": [
        {
            name: "planter",
            geo: "box",
            x: 60,
            y: 110,
            z: 903,
            w: 420,
            d: 200,
            h: 160,
            color: clay
        },
        {
            // sitting on the rim of the trough, not down inside it
            name: "leaves",
            geo: "sphere",
            x: 110,
            y: 120,
            z: 1055,
            w: 270,
            d: 190,
            h: 210,
            color: green
        },
        {
            name: "can",
            geo: "cylinder",
            x: 520,
            y: 160,
            z: 903,
            w: 160,
            d: 160,
            h: 190,
            color: steel
        },
        {
            name: "pot",
            geo: "cylinder",
            x: 120,
            y: 170,
            z: 485,
            w: 150,
            d: 150,
            h: 130,
            color: clay
        },
        {
            name: "pot",
            geo: "cylinder",
            x: 320,
            y: 170,
            z: 485,
            w: 120,
            d: 120,
            h: 110,
            color: "#c9b59b"
        }
    ],
    // flat.bed — the one that holds the clothes, not the coats
    wardrobe: [
        coat(90, 1460, cream),
        coat(250, 1460, textile2),
        coat(410, 1460, clay),
        ...folded(80, 60, 348, 4, textile),
        shoe(360, 60, 30, leather),
        shoe(470, 60, 30, leather)
    ],
    // studio.room — one room that is a whole home
    "coat-stand": [
        coat(240, 1440, ink),
        {
            name: "bag",
            geo: "box",
            x: 300,
            y: 60,
            z: 348,
            w: 240,
            d: 300,
            h: 260,
            color: leather
        },
        {
            name: "hat",
            geo: "cylinder",
            x: 90,
            y: 150,
            z: 1480,
            w: 200,
            d: 200,
            h: 110,
            color: textile
        }
    ],
    coffee: [
        {
            name: "kettle",
            geo: "cylinder",
            x: 70,
            y: 150,
            z: 803,
            w: 180,
            d: 180,
            h: 230,
            color: "#3b3530"
        },
        jar(300, 180, 803, 150, cream),
        jar(390, 180, 803, 120, clay),
        {
            ...crate(70, 150, 430, 140, 110, cream, "cup", 140)
        },
        {
            ...crate(230, 150, 430, 140, 110, clay, "cup", 140)
        },
        {
            ...crate(390, 150, 430, 140, 110, green, "cup", 140)
        },
        {
            name: "grinder",
            geo: "cylinder",
            x: 380,
            y: 160,
            z: 30,
            w: 170,
            d: 170,
            h: 240,
            color: steel
        }
    ],
    /* ---- walls: four of them come back as the same two segments -------------
     `line(2, 1600)` builds grille, record-wall, against-wall and opening from
     the same panels in the same places. The wall is the same; the room it
     divides is not. */ records: [
        ...[
            0,
            1
        ].flatMap((bay)=>[
                0,
                1,
                2
            ].map((i)=>crate(bay * 600 + 50 + i * 170, 40, 848, 160, 330, [
                    ink,
                    clay,
                    textile2
                ][i] ?? ink, "records", 320))),
        {
            name: "turntable",
            geo: "box",
            x: 120,
            y: 60,
            z: 1248,
            w: 420,
            d: 330,
            h: 110,
            color: "#3b3530"
        },
        ...[
            0,
            1,
            2
        ].map((i)=>crate(700 + i * 170, 40, 1248, 160, 330, cream, "records", 320)),
        ...[
            0,
            1
        ].map((i)=>crate(60 + i * 170, 40, 448, 160, 330, green, "records", 320))
    ],
    "living-wall": [
        ...bookrow(60, 30, 848, 6, 0),
        {
            name: "vase",
            geo: "cylinder",
            x: 400,
            y: 150,
            z: 1248,
            w: 140,
            d: 140,
            h: 260,
            color: "#c9b59b"
        },
        {
            name: "stems",
            geo: "sphere",
            x: 390,
            y: 140,
            z: 1480,
            w: 200,
            d: 200,
            h: 200,
            color: green
        },
        {
            ...crate(700, 120, 1248, 240, 180, ink, "frame", 40)
        },
        {
            ...crate(880, 120, 1248, 190, 150, clay, "frame", 40)
        },
        ...bookrow(660, 30, 848, 5, 3),
        basket(60, 40, 30, 300, 220),
        ...folded(700, 50, 448, 2, textile2)
    ],
    opening: [
        {
            name: "plant",
            geo: "cylinder",
            x: 480,
            y: 130,
            z: 848,
            w: 150,
            d: 150,
            h: 130,
            color: "#c9b59b"
        },
        {
            name: "leaves",
            geo: "sphere",
            x: 460,
            y: 110,
            z: 968,
            w: 210,
            d: 210,
            h: 210,
            color: green
        },
        ...bookrow(70, 30, 448, 3, 4),
        basket(760, 40, 30, 290, 210)
    ],
    offset: [
        ...bookrow(60, 30, 1248, 4, 2),
        ...lamp(700, 848, 250, 190),
        ...bookrow(60, 30, 448, 3, 5),
        {
            ...crate(700, 120, 448, 230, 170, clay, "box", 280)
        }
    ],
    "wardrobe-wall": [
        ...folded(60, 60, 30, 4, cream),
        shoe(360, 60, 30, leather),
        shoe(470, 60, 30, leather),
        ...folded(660, 60, 30, 3, textile2)
    ],
    "bed-head": [
        ...lamp(60, 830, 230, 190),
        jar(330, 200, 830, 100, "#d8e6ea"),
        {
            ...book(430, 90, 830, 26, orange, 180),
            name: "book"
        },
        ...bookrow(700, 30, 430, 5, 1, 170),
        {
            ...crate(700, 120, 830, 190, 30, ink, "phone", 90)
        }
    ],
    "work-wall": [
        {
            name: "laptop",
            geo: "box",
            x: 300,
            y: -400,
            z: 768,
            w: 320,
            d: 220,
            h: 14,
            color: "#c9c0b3"
        },
        {
            name: "screen",
            geo: "box",
            x: 300,
            y: -200,
            z: 782,
            w: 320,
            d: 10,
            h: 210,
            color: ink
        },
        {
            name: "mug",
            geo: "cylinder",
            x: 760,
            y: -360,
            z: 768,
            w: 90,
            d: 90,
            h: 100,
            color: orange
        },
        ...bookrow(60, 30, 1248, 5, 2),
        {
            ...crate(700, 120, 1248, 230, 170, steel, "box", 280)
        }
    ],
    // three turned segments: the same corner, four different rooms
    reading: [
        {
            name: "cushion",
            geo: "box",
            x: 60,
            y: 40,
            z: 455,
            w: 480,
            d: 330,
            h: 60,
            color: textile2
        },
        ...lamp(60, 848, 260, 200),
        ...bookrow(240, 30, 848, 5, 3),
        ...bookrow(60, 30, 1248, 4, 1)
    ],
    "two-bedsides": [
        ...lamp(40, 430, 220, 180),
        ...lamp(640, 430, 220, 180),
        {
            ...book(260, 90, 430, 26, orange, 170),
            name: "book"
        },
        jar(880, 200, 430, 100, "#d8e6ea"),
        ...folded(60, 60, 30, 2, cream)
    ],
    "plain-wall": [
        ...bookrow(80, 30, 848, 4, 6),
        basket(640, 40, 30, 290, 210)
    ],
    "show-wall": [
        {
            name: "vase",
            geo: "cylinder",
            x: 120,
            y: 150,
            z: 1248,
            w: 150,
            d: 150,
            h: 280,
            color: clay
        },
        {
            name: "bowl",
            geo: "cylinder",
            x: 420,
            y: 140,
            z: 848,
            w: 220,
            d: 220,
            h: 70,
            color: cream
        },
        {
            name: "plant",
            geo: "cylinder",
            x: 760,
            y: 130,
            z: 848,
            w: 150,
            d: 150,
            h: 130,
            color: "#c9b59b"
        },
        {
            name: "leaves",
            geo: "sphere",
            x: 740,
            y: 110,
            z: 968,
            w: 210,
            d: 210,
            h: 210,
            color: green
        },
        ...bookrow(120, 30, 448, 4, 2)
    ],
    booth: [
        {
            name: "laptop",
            geo: "box",
            x: 200,
            y: -380,
            z: 768,
            w: 320,
            d: 220,
            h: 14,
            color: "#c9c0b3"
        },
        {
            name: "notebook",
            geo: "box",
            x: 600,
            y: -330,
            z: 768,
            w: 210,
            d: 150,
            h: 18,
            color: cream
        },
        {
            name: "mug",
            geo: "cylinder",
            x: 860,
            y: -340,
            z: 768,
            w: 90,
            d: 90,
            h: 100,
            color: orange
        }
    ],
    // the bridge: one envelope, five doorways
    passage: [
        coat(120, 1420, textile2),
        coat(300, 1420, textile),
        shoe(90, 60, 30, ink),
        shoe(200, 60, 30, ink),
        basket(1900, 40, 30, 300, 220),
        {
            ...crate(1960, 120, 830, 240, 60, clay, "post tray", 200)
        }
    ],
    "pet-door": [
        {
            name: "bowl",
            geo: "cylinder",
            x: 1000,
            y: 150,
            z: 30,
            w: 180,
            d: 180,
            h: 70,
            color: steel
        },
        {
            name: "bowl",
            geo: "cylinder",
            x: 1220,
            y: 150,
            z: 30,
            w: 180,
            d: 180,
            h: 70,
            color: cream
        },
        basket(1700, 40, 30, 320, 200),
        {
            name: "lead",
            geo: "box",
            x: 120,
            y: 170,
            z: 1000,
            w: 60,
            d: 90,
            h: 380,
            color: leather
        },
        ...folded(1900, 50, 430, 2, textile2)
    ],
    "half-door": [
        ...bookrow(120, 30, 430, 5, 2, 150),
        crate(1800, 60, 30, 280, 190, orange, "toy box", 300),
        ball(1650, 150, 830, 140, green),
        ...bookrow(1900, 30, 830, 3, 5, 150)
    ],
    // screens: the same two panels, four rooms
    fitting: [
        coat(240, 1120, cream),
        {
            name: "mirror",
            geo: "box",
            x: 60,
            y: 30,
            z: 200,
            w: 480,
            d: 12,
            h: 900,
            color: "#d8e6ea"
        }
    ],
    "bed-screen": [
        {
            name: "throw",
            geo: "box",
            x: 80,
            y: 120,
            z: 900,
            w: 440,
            d: 130,
            h: 330,
            color: textile2
        },
        {
            ...book(120, 90, 430, 26, orange, 180),
            name: "book"
        }
    ],
    "two-coats": [
        coat(180, 1120, textile),
        coat(760, 1120, ink)
    ],
    "play-boundary": [
        ball(140, 150, 430, 150, orange),
        crate(600, 60, 30, 280, 190, green, "toy box", 300),
        ...bookrow(180, 30, 30, 4, 3, 150)
    ]
};
function propsForPiece(id, height) {
    const list = propsFor[id] ?? propsFor.custom ?? [];
    // Nothing floats: a list written for a tall body is also used for its low
    // versions, so what stood on a shelf that is no longer there is left out.
    // (+300 keeps what stands on the top: a lamp, a vase, a row of books.)
    return list.filter((p)=>p.z <= height + 300);
}
}),
"[project]/src/features/storefront/lib/rooms.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** The rooms the site shows, in order, and their URL slugs. Server-safe. */ __turbopack_context__.s([
    "roomFromSlug",
    ()=>roomFromSlug,
    "roomNoun",
    ()=>roomNoun,
    "roomOrder",
    ()=>roomOrder,
    "roomSlug",
    ()=>roomSlug
]);
const roomOrder = [
    "Entryway",
    "Bedroom",
    "Workspace",
    "Kitchen & dining",
    "Living room",
    "Shared spaces"
];
const roomSlug = (room)=>room.toLowerCase().replace(/[^a-z]+/g, "-");
const roomFromSlug = (slug)=>roomOrder.find((r)=>roomSlug(r) === slug);
const roomNoun = {
    Entryway: {
        plural: "entryways",
        the: "the entryway"
    },
    Bedroom: {
        plural: "bedrooms",
        the: "the bedroom"
    },
    Workspace: {
        plural: "workspaces",
        the: "a workspace"
    },
    "Kitchen & dining": {
        plural: "kitchens",
        the: "the kitchen"
    },
    "Living room": {
        plural: "living rooms",
        the: "the living room"
    },
    "Shared spaces": {
        plural: "shared rooms",
        the: "a shared room"
    }
};
}),
"[project]/src/features/storefront/lib/scene.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fitVerdict",
    ()=>fitVerdict,
    "keepBoxes",
    ()=>keepBoxes,
    "keepWidth",
    ()=>keepWidth,
    "layoutSpot",
    ()=>layoutSpot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-ssr] (ecmascript)");
;
const keepWidth = {
    door: 900,
    chair: 450,
    desk: 1200,
    bed: 1500,
    sofa: 1800,
    counter: 1500,
    tv: 1100
};
function keepBoxes(id, x, D) {
    const k = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].keep;
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].keepSoft;
    switch(id){
        case "door":
            return [
                {
                    x,
                    y: D - 12,
                    z: 0,
                    w: 900,
                    d: 12,
                    h: 2050,
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].door
                },
                {
                    x: x + 790,
                    y: D - 40,
                    z: 1000,
                    w: 30,
                    d: 28,
                    h: 30,
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].wheel
                }
            ];
        case "chair":
            return [
                {
                    x: x + 20,
                    y: D - 430,
                    z: 0,
                    w: 40,
                    d: 40,
                    h: 430,
                    colors: k
                },
                {
                    x: x + 390,
                    y: D - 430,
                    z: 0,
                    w: 40,
                    d: 40,
                    h: 430,
                    colors: k
                },
                {
                    x: x + 20,
                    y: D - 60,
                    z: 0,
                    w: 40,
                    d: 40,
                    h: 430,
                    colors: k
                },
                {
                    x: x + 390,
                    y: D - 60,
                    z: 0,
                    w: 40,
                    d: 40,
                    h: 430,
                    colors: k
                },
                {
                    x,
                    y: D - 450,
                    z: 430,
                    w: 450,
                    d: 450,
                    h: 30,
                    colors: s
                },
                {
                    x,
                    y: D - 40,
                    z: 460,
                    w: 450,
                    d: 40,
                    h: 400,
                    colors: k
                }
            ];
        case "desk":
            return [
                {
                    x: x + 10,
                    y: D - 560,
                    z: 0,
                    w: 30,
                    d: 520,
                    h: 700,
                    colors: k
                },
                {
                    x: x + 1160,
                    y: D - 560,
                    z: 0,
                    w: 30,
                    d: 520,
                    h: 700,
                    colors: k
                },
                {
                    x,
                    y: D - 600,
                    z: 700,
                    w: 1200,
                    d: 600,
                    h: 25,
                    colors: s
                },
                {
                    x: x + 350,
                    y: D - 120,
                    z: 725,
                    w: 520,
                    d: 40,
                    h: 340,
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].wheel
                }
            ];
        case "bed":
            return [
                {
                    x,
                    y: D - 2000,
                    z: 0,
                    w: 1500,
                    d: 2000,
                    h: 280,
                    colors: k
                },
                {
                    x: x + 30,
                    y: D - 1970,
                    z: 280,
                    w: 1440,
                    d: 1940,
                    h: 180,
                    colors: s
                },
                {
                    x,
                    y: D - 60,
                    z: 0,
                    w: 1500,
                    d: 60,
                    h: 900,
                    colors: k
                }
            ];
        case "sofa":
            return [
                {
                    x,
                    y: D - 850,
                    z: 0,
                    w: 1800,
                    d: 850,
                    h: 400,
                    colors: k
                },
                {
                    x,
                    y: D - 250,
                    z: 400,
                    w: 1800,
                    d: 250,
                    h: 380,
                    colors: s
                },
                {
                    x,
                    y: D - 850,
                    z: 400,
                    w: 180,
                    d: 600,
                    h: 180,
                    colors: s
                },
                {
                    x: x + 1620,
                    y: D - 850,
                    z: 400,
                    w: 180,
                    d: 600,
                    h: 180,
                    colors: s
                }
            ];
        case "counter":
            return [
                {
                    x,
                    y: D - 600,
                    z: 0,
                    w: 1500,
                    d: 600,
                    h: 860,
                    colors: k
                },
                {
                    x: x - 15,
                    y: D - 615,
                    z: 860,
                    w: 1530,
                    d: 630,
                    h: 40,
                    colors: s
                }
            ];
        case "tv":
            return [
                {
                    x,
                    y: D - 30,
                    z: 900,
                    w: 1100,
                    d: 30,
                    h: 650,
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].wheel
                }
            ];
    }
}
function layoutSpot(layout, enabled, pieceWidth, gap = 100) {
    let x = gap;
    let pieceX = gap;
    const keeps = [];
    let placedPiece = false;
    for (const item of layout){
        if (item === "piece") {
            pieceX = x;
            x += pieceWidth + gap;
            placedPiece = true;
        } else if (enabled.includes(item)) {
            keeps.push({
                id: item,
                x
            });
            x += keepWidth[item] + gap;
        }
    }
    if (!placedPiece) {
        pieceX = x;
        x += pieceWidth + gap;
    }
    return {
        keeps,
        pieceX,
        total: x
    };
}
function fitVerdict(wallMm, total, pieceHeight, bays) {
    const spare = wallMm - total;
    const cm = Math.round(Math.abs(spare) / 10);
    if (spare < 0) return {
        tone: "no",
        spare,
        title: `About ${cm} cm short.`,
        body: "Drag the wall wider if it really is, take something out of the line, or try a narrower piece. Nothing wrong with any of those."
    };
    if (spare < 150 || pieceHeight >= 1600 || bays > 2) return {
        tone: "tight",
        spare,
        title: spare < 150 ? `Fits, with ${cm} cm to spare. That is tight.` : `Fits on paper.`,
        body: spare < 150 ? "Before an order we would check the skirting and what opens nearby. Not now." : pieceHeight >= 1600 ? "At 160 cm the piece is fixed against tipping, so the wall behind it matters. A photo is enough, later." : "A run this long has connectors and a shared top. We confirm the floor is level before it ships."
    };
    return {
        tone: "ok",
        spare,
        title: `Fits, with ${cm} cm to spare.`,
        body: "From your rough number. It becomes exact only when you order."
    };
}
}),
"[project]/src/features/storefront/lib/spot.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allKeeps",
    ()=>allKeeps,
    "keepsFor",
    ()=>keepsFor,
    "momentsIn",
    ()=>momentsIn,
    "roomOfMoment",
    ()=>roomOfMoment,
    "useSpot",
    ()=>useSpot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/moments.ts [app-ssr] (ecmascript)");
"use client";
;
;
const KEY = "furnishes-spot-v1";
const empty = {
    momentId: null,
    wallMm: 2400,
    keeps: [],
    lens: null
};
let cache = null;
const listeners = new Set();
const keepIds = [
    "door",
    "chair",
    "desk",
    "bed",
    "sofa",
    "counter",
    "tv"
];
const lensIds = [
    "nothing-yet",
    "everything-stays",
    "moves-with-you"
];
function read() {
    if (cache) return cache;
    if ("TURBOPACK compile-time truthy", 1) return empty;
    //TURBOPACK unreachable
    ;
}
function write(next) {
    cache = next;
    try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch  {
    // memory only
    }
    for (const l of listeners)l();
}
function subscribe(l) {
    listeners.add(l);
    return ()=>listeners.delete(l);
}
function keepsFor(momentId, lens) {
    const m = momentId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoment"])(momentId) : undefined;
    if (!m) return [];
    const all = m.layout.filter((k)=>k !== "piece");
    if (lens === "nothing-yet") return all.filter((k)=>k === "door");
    return all;
}
function useSpot() {
    const spot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, read, ()=>empty);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((patch)=>write({
            ...read(),
            ...patch
        }), []);
    const pickMoment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((momentId)=>{
        const cur = read();
        const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoment"])(momentId);
        write({
            ...cur,
            momentId,
            wallMm: m?.wall ?? cur.wallMm,
            keeps: keepsFor(momentId, cur.lens)
        });
    }, []);
    const setLens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lens)=>{
        const cur = read();
        write({
            ...cur,
            lens,
            keeps: cur.momentId ? keepsFor(cur.momentId, lens) : cur.keeps
        });
    }, []);
    const toggleKeep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((k)=>{
        const cur = read();
        write({
            ...cur,
            keeps: cur.keeps.includes(k) ? cur.keeps.filter((x)=>x !== k) : [
                ...cur.keeps,
                k
            ]
        });
    }, []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>write(empty), []);
    return {
        spot,
        set,
        pickMoment,
        setLens,
        toggleKeep,
        clear
    };
}
const allKeeps = keepIds;
;
function momentsIn(room) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moments"].filter((m)=>m.room === room);
}
function roomOfMoment(momentId) {
    return momentId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$moments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoment"])(momentId)?.room ?? null : null;
}
}),
"[project]/src/features/storefront/lib/steps.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boxes",
    ()=>boxes,
    "buildSteps",
    ()=>buildSteps,
    "counts",
    ()=>counts,
    "explodeStage",
    ()=>explodeStage,
    "groupSequence",
    ()=>groupSequence,
    "stepForPart",
    ()=>stepForPart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-ssr] (ecmascript)");
;
const groupOrder = [
    "Base",
    "Body panels",
    "Shelves",
    "Top",
    "Connections",
    "Desk",
    "Doors",
    "Screen frames",
    "Screen panels",
    "Accessories"
];
function tally(nodes) {
    const m = new Map();
    for (const n of nodes){
        const e = m.get(n.partId);
        if (e) e.quantity++;
        else m.set(n.partId, {
            name: n.name,
            quantity: 1
        });
    }
    return [
        ...m.values()
    ];
}
function buildSteps(p, c) {
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assembly"])(p, c);
    const heavy = p.height >= 1600 || p.width >= 1200;
    const steps = [];
    let n = 0;
    const push = (action, title, detail, group, filter, boltsPer, tool, people, minutes, stands)=>{
        const groups = Array.isArray(group) ? group : [
            group
        ];
        const picked = nodes.filter((x)=>groups.includes(x.group) && x.kind !== "wheel" && filter(x));
        if (!picked.length) return;
        n++;
        steps.push({
            n,
            action,
            title,
            detail,
            parts: tally(picked),
            partIds: [
                ...new Set(picked.map((x)=>x.partId))
            ],
            bolts: boltsPer * picked.length,
            tool,
            people,
            minutes,
            stands,
            clip: null
        });
    };
    if (p.shape === "folding") {
        push("A0", "Lay out the leaves", "Three frames, three panels each. Nothing is fixed yet.", "Screen frames", ()=>true, 0, "none", 1, 3, "On the floor, on the box");
        push("A11", "Slide the panels into the frames", "Each leaf takes three panels in its grooves.", "Screen panels", ()=>true, 2, "L-key", 1, 6, "Kneeling beside each leaf");
        push("A15", "Join the leaves", "Continuous hinges connect neighbouring frames.", "Connections", ()=>true, 6, "L-key", 2, 6, "One person holds, one drives");
        return steps;
    }
    push("A0", "Set the base where the piece will stand", "Pads or casters go on first. The L-key lives in the base.", "Base", ()=>true, p.bays > 1 ? 0 : 0, "none", 1, 2, "Where it will live");
    push("A2", "Stand the side panels on the base", "Holes face inward on the sides you look at, outward where you use them.", "Body panels", (x)=>x.partId.startsWith("side-"), 4, "L-key", heavy ? 2 : 1, heavy ? 6 : 4, "Beside the piece, panel leaning on you");
    push("A3", "Drop in the bottom panel", "It squares the two sides. Bolt from underneath, through the base.", "Body panels", (x)=>x.partId === "structural-bottom", 4, "L-key", 1, 3, "Crouched at the front");
    push("A4", "Fit the functional panel", "The working face with the exposed holes. Check it sits flush before tightening.", "Body panels", (x)=>x.partId === "functional-panel", 4, "L-key", 1, p.tiers > 1 ? 5 : 3, "At the back");
    push("A6", "Slide in the shelves", "Shelves rest on the side-panel holes and bolt through. Any height that lines up.", "Shelves", ()=>true, 4, "L-key", 1, 3, "At the front");
    push("A15", "Connect the bays", "Bay connectors bolt through neighbouring side panels.", "Connections", (x)=>x.partId === "bay-connector", 4, "L-key", 2, 5, "One person each side");
    push("A8", "Cap it with the top", "The top closes the body. Once it is on, the piece stands on its own.", "Top", ()=>true, 4, "L-key", p.width >= 1200 ? 2 : 1, 3, "Standing, above the piece");
    push("A12", "Attach the desk", "The desk surface bolts to the organiser and to its own support.", [
        "Desk",
        "Connections"
    ], (x)=>x.group === "Desk" || x.partId === "desk-bracket", 4, "L-key", 2, 10, "One person holds the surface level");
    push("A13", "Hang the doors", "Hinges bolt to the side panels. Adjust until the gap is even.", "Doors", ()=>true, 4, "L-key", 1, 4, "At the front");
    push("A17", "Add the accessories", "Hooks, trays and rails hang on the exposed holes. No bolts for hooks; rails take two.", "Accessories", ()=>true, 0, "none", 1, 2, "Wherever you'll use them");
    return steps;
}
function boxes(p, c) {
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billOfParts"])(p, c);
    const out = [];
    if (p.shape === "folding") {
        out.push({
            id: "leaves",
            label: "Box 1",
            contents: "3 leaf frames, 9 screen panels",
            weightKg: 17
        });
        out.push({
            id: "tray",
            label: "Tray",
            contents: "2 hinges, bolts by step, 1 L-key",
            weightKg: 1
        });
        return out;
    }
    const panelsPerBay = parts.filter((r)=>r.kind === "panel" && r.group !== "Desk").reduce((s, r)=>s + r.quantity, 0);
    const perBay = Math.ceil(panelsPerBay / p.bays);
    const bayWeight = Math.min(20, Math.round(perBay * (p.height >= 1600 ? 3.2 : 2.6)));
    for(let i = 0; i < p.bays; i++)out.push({
        id: `bay-${i}`,
        label: `Box ${i + 1}`,
        contents: p.bays > 1 ? `Body panels and shelves for bay ${i + 1}` : "All body panels, shelves and top",
        weightKg: bayWeight
    });
    if (p.shape === "desk") out.push({
        id: "desk",
        label: `Box ${out.length + 1}`,
        contents: "Desk surface and support",
        weightKg: 16
    });
    const doors = parts.find((r)=>r.group === "Doors");
    if (doors) out.push({
        id: "doors",
        label: `Box ${out.length + 1}`,
        contents: `${doors.quantity} door${doors.quantity > 1 ? "s" : ""} with hinges`,
        weightKg: Math.round(doors.quantity * (p.height >= 800 ? 5 : 3))
    });
    const bases = parts.find((r)=>r.group === "Base");
    out.push({
        id: "base",
        label: `Box ${out.length + 1}`,
        contents: `${bases?.quantity ?? 1} base${(bases?.quantity ?? 1) > 1 ? "s" : ""}, L-key parked inside`,
        weightKg: (bases?.quantity ?? 1) * 4
    });
    const acc = parts.filter((r)=>r.group === "Accessories");
    out.push({
        id: "tray",
        label: "Tray",
        contents: "Bolts grouped by step" + (acc.length ? ", " + acc.map((r)=>`${r.quantity} ${r.name.toLowerCase()}${r.quantity > 1 ? "s" : ""}`).join(", ") : ""),
        weightKg: 1
    });
    return out;
}
function counts(p, c) {
    const steps = buildSteps(p, c);
    const bx = boxes(p, c);
    return {
        parts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billOfParts"])(p, c).reduce((s, r)=>s + r.quantity, 0),
        bolts: steps.reduce((s, st)=>s + st.bolts, 0),
        people: steps.some((s)=>s.people === 2) ? 2 : 1,
        minutes: steps.reduce((s, st)=>s + st.minutes, 0),
        boxes: bx.length,
        heaviestKg: Math.max(...bx.map((b)=>b.weightKg))
    };
}
const groupSequence = groupOrder;
function stepForPart(steps, partId) {
    return steps.findIndex((s)=>s.partIds.includes(partId));
}
const explodeStage = {
    Base: [
        0,
        0.35
    ],
    "Body panels": [
        0.15,
        0.6
    ],
    Shelves: [
        0.3,
        0.75
    ],
    Top: [
        0.45,
        0.9
    ],
    Doors: [
        0.4,
        0.8
    ],
    Connections: [
        0.3,
        0.7
    ],
    Desk: [
        0.5,
        0.9
    ],
    Accessories: [
        0.6,
        1
    ],
    "Screen frames": [
        0.2,
        0.7
    ],
    "Screen panels": [
        0.4,
        0.9
    ]
};
}),
"[project]/src/features/storefront/lib/three/anim.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Easings and a deterministic jitter, so every part has its own arc and the same arc every time. */ __turbopack_context__.s([
    "clamp01",
    ()=>clamp01,
    "easeInOut",
    ()=>easeInOut,
    "easeOutBack",
    ()=>easeOutBack,
    "easeOutBounce",
    ()=>easeOutBounce,
    "easeOutCubic",
    ()=>easeOutCubic,
    "easeOutQuint",
    ()=>easeOutQuint,
    "hashUnit",
    ()=>hashUnit,
    "window01",
    ()=>window01
]);
const clamp01 = (v)=>v < 0 ? 0 : v > 1 ? 1 : v;
const easeOutCubic = (t)=>1 - Math.pow(1 - clamp01(t), 3);
const easeOutQuint = (t)=>1 - Math.pow(1 - clamp01(t), 5);
const easeInOut = (t)=>{
    const u = clamp01(t);
    return u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
};
const easeOutBack = (t)=>{
    const u = clamp01(t);
    const c1 = 1.25;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2);
};
const easeOutBounce = (t)=>{
    let u = clamp01(t);
    const n1 = 7.5625;
    const d1 = 2.75;
    if (u < 1 / d1) return n1 * u * u;
    if (u < 2 / d1) return n1 * (u -= 1.5 / d1) * u + 0.75;
    if (u < 2.5 / d1) return n1 * (u -= 2.25 / d1) * u + 0.9375;
    return n1 * (u -= 2.625 / d1) * u + 0.984375;
};
function hashUnit(key, salt = 0) {
    let h = 2166136261 ^ salt;
    for(let i = 0; i < key.length; i++){
        h ^= key.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return (h >>> 0) % 10000 / 10000;
}
const window01 = (t, from, to)=>clamp01((t - from) / Math.max(1e-6, to - from));
}),
"[project]/src/features/storefront/lib/three/blocks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blockBounds",
    ()=>blockBounds,
    "colors3d",
    ()=>colors3d,
    "keepBlocks",
    ()=>keepBlocks,
    "mm",
    ()=>mm,
    "placementBlocks",
    ()=>placementBlocks,
    "propBlocks",
    ()=>propBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/draw.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$exploration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/exploration.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/scene.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/steps.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const colors3d = {
    wood: "#d9b98c",
    woodDark: "#c9a97d",
    base: "#8b7052",
    wheel: "#2f2a26",
    accent: "#e7551a",
    keep: "#e6d5c1",
    keepSoft: "#f1e4d3",
    door: "#f6ede1",
    floor: "#efd9c1",
    wall: "#fbeee0"
};
function partColor3d(n, finish) {
    const accent = n.kind === "accessory" || n.kind === "hardware" || finish === "orange" && (n.kind === "door" || n.partId === "functional-panel" || n.partId === "fold-panel");
    if (accent) return colors3d.accent;
    if (n.kind === "wheel") return colors3d.wheel;
    if (n.kind === "base") return colors3d.base;
    return colors3d.wood;
}
/** Explode offsets by group, mm, in world axes (x along wall, y toward wall, z up). */ function explodeOffset(n, width) {
    const left = n.x + n.w / 2 < width / 2;
    switch(n.group){
        case "Base":
            return [
                0,
                0,
                -170
            ];
        case "Body panels":
            if (n.partId.startsWith("side-")) return [
                left ? -140 : 140,
                0,
                0
            ];
            if (n.partId === "functional-panel") return [
                0,
                160,
                0
            ];
            return [
                0,
                0,
                -80
            ];
        case "Shelves":
            return [
                0,
                -170,
                0
            ];
        case "Top":
            return [
                0,
                0,
                220
            ];
        case "Doors":
            return [
                0,
                -300,
                0
            ];
        case "Accessories":
            return [
                0,
                -200,
                40
            ];
        case "Connections":
            return [
                0,
                0,
                120
            ];
        case "Desk":
            return [
                0,
                -160,
                90
            ];
        case "Screen frames":
            return [
                0,
                0,
                -70
            ];
        case "Screen panels":
            return [
                0,
                -140,
                0
            ];
        default:
            return [
                0,
                0,
                0
            ];
    }
}
let serial = 0;
function placementBlocks(pl, o) {
    const p = pl.product;
    const depth = p.depth ?? 400;
    const py = pl.y ?? o.depthMm - depth;
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assembly"])(p, pl.config);
    const nodes = o.morphTo ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$exploration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionParts"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assembly"])(o.morphTo.product, o.morphTo.config), o.morphProgress ?? 0) : source;
    const out = [];
    for (const n of nodes){
        if (o.hideGroups?.includes(n.group)) continue;
        const [from, to] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["explodeStage"][n.group] ?? [
            0,
            1
        ];
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stage"])(o.explode ?? 0, from, to);
        const [ex, ey, ez] = explodeOffset(n, p.width);
        const lx = n.x + e * ex;
        const ly = n.y + e * ey;
        const lz = n.z + e * ez;
        const box = pl.rot === 90 ? {
            x: pl.x + ly,
            y: py - lx - n.w,
            w: n.d,
            d: n.w
        } : {
            x: pl.x + lx,
            y: py + ly,
            w: n.w,
            d: n.d
        };
        const visibility = "visibility" in n ? n.visibility : 1;
        const dim = o.selectedIds ? o.selectedIds.includes(n.partId) ? 1 : 0.14 : !o.selected || o.selected === n.partId ? 1 : 0.14;
        const waiting = o.placedIds ? !o.placedIds.includes(n.partId) : false;
        const holes = n.partId === "functional-panel" && pl.rot !== 90 && [
            "organiser",
            "screen",
            "desk"
        ].includes(p.shape) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["holeGrid"])({
            ...n,
            x: box.x,
            y: box.y,
            z: lz
        }) : null;
        out.push({
            key: `${pl.key}:${n.id}`,
            kind: "part",
            partId: n.partId,
            group: n.group,
            x: box.x,
            y: box.y,
            z: lz,
            w: box.w,
            d: box.d,
            h: n.h,
            color: partColor3d(n, pl.config.finish),
            opacity: waiting ? 0 : (pl.ghost ? 0.4 : 1) * visibility * dim,
            lift: waiting ? 260 : 0,
            holes,
            order: serial++
        });
    }
    // the L-key, parked on the front of the base: the assembly promise in every image
    if (p.shape !== "folding" && !o.morphTo) {
        const mobile = [
            "trolley",
            "screen",
            "island"
        ].includes(p.shape);
        const baseZ = mobile ? 85 : 30;
        const kx = pl.x + p.width - 140;
        const ky = py - 14;
        const [from, to] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["explodeStage"].Base ?? [
            0,
            0.35
        ];
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stage"])(o.explode ?? 0, from, to);
        const kz = baseZ - 24 - e * 170;
        const waiting = o.placedIds ? !o.placedIds.includes("foot-base") && !o.placedIds.includes("caster-base") : false;
        for (const [i, box] of [
            {
                x: kx,
                y: ky,
                z: kz,
                w: 70,
                d: 8,
                h: 8
            },
            {
                x: kx + 62,
                y: ky,
                z: kz,
                w: 8,
                d: 8,
                h: 16
            }
        ].entries())out.push({
            key: `${pl.key}:lkey${i}`,
            kind: "part",
            partId: i === 0 ? "foot-base" : "caster-base",
            group: "Base",
            // turned: the key keeps its place on the base, not the room's depth
            x: pl.rot === 90 ? pl.x + (box.y - py) : box.x,
            y: pl.rot === 90 ? py - (box.x - pl.x) - box.w : box.y,
            z: box.z,
            w: pl.rot === 90 ? box.d : box.w,
            d: pl.rot === 90 ? box.w : box.d,
            h: box.h,
            color: "#e7551a",
            opacity: waiting ? 0 : pl.ghost ? 0.4 : 1,
            lift: waiting ? 260 : 0,
            holes: null,
            order: serial++
        });
    }
    return out;
}
function keepBlocks(keeps, depthMm) {
    const out = [];
    for (const k of keeps){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keepBoxes"])(k.id, k.x, k.y ?? depthMm).forEach((b, i)=>{
            out.push({
                key: `keep:${k.id}:${k.x}:${k.y ?? "w"}:${i}`,
                kind: "keep",
                partId: null,
                group: null,
                x: b.x,
                y: b.y,
                z: b.z,
                w: b.w,
                d: b.d,
                h: b.h,
                color: b.colors[0] === "#f6e9d8" ? colors3d.door : b.colors[0] === "#3b3530" ? colors3d.wheel : b.colors[0] === "#f1e2d0" ? colors3d.keepSoft : colors3d.keep,
                opacity: 1,
                lift: 0,
                holes: null,
                order: serial++
            });
        });
    }
    return out;
}
function blockBounds(blocks, extra) {
    let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity, zmax = 0;
    for (const b of [
        ...blocks,
        ...extra ?? []
    ]){
        xmin = Math.min(xmin, b.x);
        xmax = Math.max(xmax, b.x + b.w);
        ymin = Math.min(ymin, b.y);
        ymax = Math.max(ymax, b.y + b.d);
        zmax = Math.max(zmax, b.z + b.h);
    }
    if (!Number.isFinite(xmin)) return {
        xmin: 0,
        xmax: 600,
        ymin: 0,
        ymax: 400,
        zmax: 400
    };
    return {
        xmin,
        xmax,
        ymin,
        ymax,
        zmax
    };
}
const mm = (v)=>v / 1000;
function propBlocks(props, origin, keyPrefix = "prop") {
    return props.map((pr, i)=>({
            key: `${keyPrefix}:${i}:${pr.name}`,
            kind: "prop",
            geo: pr.geo,
            partId: null,
            group: null,
            x: origin.x + pr.x,
            y: origin.y + pr.y,
            z: pr.z,
            w: pr.w,
            d: pr.d,
            h: pr.h,
            color: pr.color,
            opacity: 1,
            lift: 0,
            holes: null,
            order: serial++
        }));
}
}),
"[project]/src/features/storefront/lib/three/thumb.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThumb",
    ()=>useThumb,
    "useThumbResult",
    ()=>useThumbResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/three@0.185.0/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/three@0.185.0/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/three@0.185.0/node_modules/three/examples/jsm/environments/RoomEnvironment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/blocks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const cache = new Map();
const waiters = new Map();
let renderer = null;
let envTex = null;
let queue = Promise.resolve();
function getRenderer() {
    if (renderer) return renderer;
    const canvas = document.createElement("canvas");
    renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
        canvas,
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFShadowMap"];
    renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
    const pmrem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PMREMGenerator"](renderer);
    envTex = pmrem.fromScene(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomEnvironment"](), 0.04).texture;
    return renderer;
}
function draw(s) {
    const r = getRenderer();
    const w = s.width ?? 640;
    const h = s.height ?? 520;
    r.setSize(w, h, false);
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
    scene.environment = envTex;
    scene.environmentIntensity = 0.45;
    const spot = s.wallMm !== undefined;
    const depth = s.depthMm;
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockBounds"])(s.blocks);
    const W = s.wallMm ?? b.xmax - b.xmin;
    const bounds = spot ? {
        xmin: 0,
        xmax: W,
        ymin: 0,
        ymax: depth,
        zmax: Math.max(b.zmax, 1200)
    } : b;
    scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HemisphereLight"]("#fff4e6", "#c9a98a", 0.35));
    const sun = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#ffffff", 1.5);
    sun.position.set(2.6, 4.2, 3.4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    const ext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(Math.max(W, depth)) * 0.9;
    sun.shadow.camera.left = -ext;
    sun.shadow.camera.right = ext;
    sun.shadow.camera.top = ext;
    sun.shadow.camera.bottom = -ext;
    sun.shadow.camera.near = 0.1;
    sun.shadow.camera.far = 20;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    scene.add(sun);
    const fill = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#ffffff", 0.45);
    fill.position.set(-3, 2.5, -1.5);
    scene.add(fill);
    const disposables = [];
    const box = (bw, bh, bd)=>{
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](bw, bh, bd);
        disposables.push(g);
        return g;
    };
    const material = (color, roughness, opacity)=>{
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color,
            roughness,
            metalness: 0,
            transparent: opacity < 0.999,
            opacity
        });
        disposables.push(m);
        return m;
    };
    // floor: a soft ground either way, so the piece has a shadow to stand on
    const floor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](spot ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(W) + 0.4 : 6, spot ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth) + 0.4 : 6), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
        opacity: spot ? 0.18 : 0.28
    }));
    disposables.push(floor.geometry, floor.material);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(spot ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(W) / 2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(b.xmin + b.xmax) / 2, -0.0005, spot ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth) / 2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth - (b.ymin + b.ymax) / 2));
    floor.receiveShadow = true;
    scene.add(floor);
    if (spot) {
        const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(W) + 0.4, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth) + 0.4), material(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors3d"].floor, 0.95, 1));
        disposables.push(ground.geometry);
        ground.rotation.x = -Math.PI / 2;
        ground.position.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(W) / 2, -0.002, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth) / 2);
        ground.receiveShadow = true;
        scene.add(ground);
        if (s.showWall !== false) {
            const wall = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](box((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(W) + 0.4, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.zmax + 500), 0.024), material(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors3d"].wall, 0.98, 1));
            wall.position.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(W) / 2, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.zmax + 500) / 2, -0.012);
            wall.receiveShadow = true;
            scene.add(wall);
        }
    }
    for (const bl of s.blocks){
        if (bl.opacity <= 0) continue;
        const geom = bl.geo === "cylinder" ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.w) / 2, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.w) / 2, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.h), 28) : bl.geo === "sphere" ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.w) / 2, 24, 18) : box((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.w), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.h), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.d));
        if (bl.geo) disposables.push(geom);
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geom, material(bl.color, bl.kind === "keep" ? 0.9 : bl.kind === "prop" ? 0.8 : 0.72, bl.opacity));
        mesh.position.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.x + bl.w / 2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.z + bl.h / 2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth - bl.y - bl.d / 2));
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        if (bl.holes) {
            const hg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.0055, 14);
            const hm = material("#5a3e2c", 1, 1);
            disposables.push(hg);
            for (const [hx, , hz] of bl.holes){
                const hole = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](hg, hm);
                hole.position.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(hx - (bl.x + bl.w / 2)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(hz - (bl.z + bl.h / 2)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bl.d) / 2 + 0.0008);
                mesh.add(hole);
            }
        }
    }
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](30, w / h, 0.05, 60);
    const cx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.xmin + bounds.xmax) / 2;
    const cy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.zmax) * (spot ? 0.42 : 0.5);
    const cz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth - (bounds.ymin + bounds.ymax) / 2);
    const tanV = Math.tan(30 * Math.PI / 360);
    const dist = spot ? Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(W) * 1.12 / 2 / (tanV * (w / h)) * 1.02, ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.zmax + 500) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth) * 0.45) / 2 / tanV * 1.05) : Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.xmax - bounds.xmin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.zmax) * 1.1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(bounds.ymax - bounds.ymin) * 0.8) / 2 / tanV * 1.25;
    const a = ((s.turn ?? 0) + (spot ? 22 : 34)) * Math.PI / 180;
    const dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Math.sin(a), spot ? 0.42 : 0.5, Math.cos(a)).normalize();
    camera.position.set(cx, cy, cz).addScaledVector(dir, dist);
    camera.lookAt(cx, cy, cz);
    r.render(scene, camera);
    const url = r.domElement.toDataURL("image/png");
    const marks = (s.marks ?? []).map((m)=>{
        const v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$185$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(m.x), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(m.z), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mm"])(depth - m.y)).project(camera);
        return {
            key: m.key,
            px: (v.x + 1) / 2,
            py: (1 - v.y) / 2
        };
    });
    for (const d of disposables)d.dispose();
    return {
        url,
        marks
    };
}
const nothing = {
    url: "",
    marks: []
};
function renderThumb(key, scene) {
    const hit = cache.get(key);
    if (hit) return Promise.resolve(hit);
    const pending = waiters.get(key);
    if (pending) return pending;
    const p = new Promise((resolve)=>{
        queue = queue.then(()=>new Promise((done)=>{
                const run = ()=>{
                    try {
                        const out = draw(scene);
                        cache.set(key, out);
                        resolve(out);
                    } catch  {
                        resolve(nothing);
                    }
                    done();
                };
                if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(run, {
                    timeout: 400
                });
                else window.setTimeout(run, 0);
            }));
    });
    waiters.set(key, p);
    return p;
}
function useThumbResult(key, make) {
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        key: "",
        out: nothing
    });
    const makeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(make);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        makeRef.current = make;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cache.has(key)) return;
        let alive = true;
        void renderThumb(key, makeRef.current()).then((out)=>{
            if (alive && out.url) setDone({
                key,
                out
            });
        });
        return ()=>{
            alive = false;
        };
    }, [
        key
    ]);
    const cached = cache.get(key);
    if (cached) return cached;
    return done.key === key ? done.out : null;
}
function useThumb(key, make) {
    return useThumbResult(key, make)?.url ?? null;
}
}),
"[project]/src/features/storefront/lib/three/useClock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClock",
    ()=>useClock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/anim.ts [app-ssr] (ecmascript)");
"use client";
;
;
function useClock(durationMs, opts) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const loop = opts?.loop ?? false;
    const duration = Math.max(200, durationMs);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!playing) return;
        let raf = 0;
        let last = 0;
        let lastUi = 0;
        let holdUntil = 0;
        const step = (now)=>{
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
        return ()=>cancelAnimationFrame(raf);
    }, [
        playing,
        duration,
        loop
    ]);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (ref.current >= 1) ref.current = 0;
        setPlaying(true);
    }, []);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setPlaying(false), []);
    const seek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((v)=>{
        ref.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$anim$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp01"])(v);
        setValue(ref.current);
    }, []);
    const replay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        ref.current = 0;
        setValue(0);
        setPlaying(true);
    }, []);
    const autoplay = opts?.autoplay ?? false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoplay) return;
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
        const t = window.setTimeout(()=>{
            if (reduce) {
                ref.current = 1;
                setValue(1);
            } else setPlaying(true);
        }, 350);
        return ()=>window.clearTimeout(t);
    }, [
        autoplay
    ]);
    return {
        ref,
        value,
        playing,
        play,
        pause,
        seek,
        replay
    };
}
}),
];

//# sourceMappingURL=src_1f4zqnq._.js.map