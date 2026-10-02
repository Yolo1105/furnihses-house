module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/src/app/family/[family]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Family$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/Family.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Doorway$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/Doorway.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$street$2d$props$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/street-props.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$plan$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/landing/plan-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shop$2f$athome$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/shop/athome.ts [app-rsc] (ecmascript)");
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
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["families"].map((f)=>({
            family: f.id
        }));
}
async function generateMetadata({ params }) {
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["familyOf"])((await params).family);
    if (!f) return {
        title: "Explore | Furnishes"
    };
    return {
        title: `${f.name} at home | Furnishes`,
        description: `${f.line} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordCount"])(f)} of our sixty designs, standing in the homes they are for.`
    };
}
async function Page({ params, searchParams }) {
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["familyOf"])((await params).family);
    if (!f) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$street$2d$props$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streetProps"])(f.id, await searchParams);
    if (!props) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    // an address that already names a room came from somewhere that chose for
    // them — the shop, an answer, a link — so it goes straight through
    if (props.given) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Family$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/family/[family]/page.tsx",
        lineNumber: 44,
        columnNumber: 27
    }, this);
    const stills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shop$2f$athome$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["athomeSrc"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Doorway$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Doorway"], {
        street: props,
        days: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$plan$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DAYS"].map((d)=>({
                ...d,
                pic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$plan$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cardPic"])(d, stills)
            })),
        rooms: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$plan$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rooms"])(),
        designs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$landing$2f$plan$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["designs"])()
    }, void 0, false, {
        fileName: "[project]/src/app/family/[family]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/family/[family]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/family/[family]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/features/family/Doorway.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Doorway",
    ()=>Doorway
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Doorway = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Doorway() from the server but Doorway is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/family/Doorway.tsx", "Doorway");
}),
"[project]/src/features/family/Doorway.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Doorway",
    ()=>Doorway
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Doorway = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Doorway() from the server but Doorway is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/family/Doorway.tsx <module evaluation>", "Doorway");
}),
"[project]/src/features/family/Doorway.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Doorway$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/family/Doorway.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Doorway$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/family/Doorway.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Doorway$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/family/Family.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/family/Family.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/family/Family.tsx", "default");
}),
"[project]/src/features/family/Family.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.5_@babel+core@7.29.7_@types+node@24.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$5_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$24$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/family/Family.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/family/Family.tsx <module evaluation>", "default");
}),
"[project]/src/features/family/Family.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Family$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/family/Family.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Family$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/family/Family.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$Family$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/family/ask.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ask",
    ()=>ask,
    "asked",
    ()=>asked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/town.ts [app-rsc] (ecmascript)");
;
;
/* The visitor says it in their own words; this finds which of the problems we
   have an answer to is closest. It runs in the page, with no model behind it:
   the site has to be whole without one. It knows the words people use for the
   things our pieces deal with, in English and in Chinese, and it prefers an
   answer in the home the visitor chose over one down the street. */ /** words that mean the same thing to us: the first one is the word we use */ const SAME = [
    [
        "shoes",
        "shoe",
        "boots",
        "sneakers",
        "trainers",
        "slippers",
        "鞋"
    ],
    [
        "coats",
        "coat",
        "jacket",
        "jackets",
        "外套",
        "大衣",
        "衣服"
    ],
    [
        "keys",
        "key",
        "wallet",
        "钥匙",
        "钱包"
    ],
    [
        "post",
        "mail",
        "letters",
        "parcels",
        "packages",
        "信",
        "快递",
        "包裹"
    ],
    [
        "bags",
        "bag",
        "backpack",
        "backpacks",
        "schoolbag",
        "书包",
        "包"
    ],
    [
        "door",
        "hallway",
        "hall",
        "entry",
        "entrance",
        "entryway",
        "玄关",
        "门口",
        "进门"
    ],
    [
        "desk",
        "work",
        "working",
        "office",
        "laptop",
        "computer",
        "study",
        "wfh",
        "办公",
        "工作",
        "书桌",
        "电脑",
        "桌"
    ],
    [
        "books",
        "book",
        "bookshelf",
        "bookcase",
        "library",
        "reading",
        "书",
        "书架"
    ],
    [
        "toys",
        "toy",
        "lego",
        "play",
        "playing",
        "玩具"
    ],
    [
        "children",
        "child",
        "kids",
        "kid",
        "son",
        "daughter",
        "siblings",
        "孩子",
        "小孩",
        "儿童",
        "宝宝"
    ],
    [
        "baby",
        "changing",
        "nappy",
        "diaper",
        "婴儿",
        "尿布"
    ],
    [
        "bed",
        "bedside",
        "sleep",
        "sleeping",
        "night",
        "nightstand",
        "床",
        "床头",
        "睡"
    ],
    [
        "tv",
        "television",
        "cables",
        "cable",
        "console",
        "router",
        "boxes",
        "电视",
        "线"
    ],
    [
        "sofa",
        "couch",
        "cup",
        "remote",
        "coffee",
        "沙发",
        "茶几",
        "遥控"
    ],
    [
        "kitchen",
        "cook",
        "cooking",
        "counter",
        "worktop",
        "厨房",
        "做饭",
        "台面"
    ],
    [
        "bottles",
        "jars",
        "spices",
        "spice",
        "pantry",
        "food",
        "瓶",
        "罐",
        "调料"
    ],
    [
        "bathroom",
        "bath",
        "towels",
        "towel",
        "laundry",
        "washing",
        "浴室",
        "卫生间",
        "毛巾",
        "洗衣"
    ],
    [
        "balcony",
        "plants",
        "plant",
        "outside",
        "terrace",
        "阳台",
        "植物",
        "花"
    ],
    [
        "wardrobe",
        "clothes",
        "closet",
        "dressing",
        "dress",
        "衣柜",
        "衣橱",
        "衣帽间"
    ],
    [
        "mirror",
        "镜子",
        "镜"
    ],
    [
        "divide",
        "divider",
        "dividing",
        "partition",
        "separate",
        "split",
        "between",
        "privacy",
        "private",
        "own",
        "隔断",
        "隔开",
        "分隔",
        "分开",
        "隐私",
        "独立"
    ],
    [
        "screen",
        "calls",
        "call",
        "video",
        "zoom",
        "meeting",
        "meetings",
        "background",
        "backdrop",
        "屏风",
        "视频",
        "会议",
        "通话",
        "背景"
    ],
    [
        "storage",
        "store",
        "clutter",
        "mess",
        "messy",
        "tidy",
        "stuff",
        "things",
        "everywhere",
        "organise",
        "organize",
        "收纳",
        "乱",
        "杂物",
        "整理",
        "东西"
    ],
    [
        "hide",
        "hidden",
        "doors",
        "behind",
        "cover",
        "藏",
        "遮"
    ],
    [
        "roll",
        "rolls",
        "wheels",
        "casters",
        "move",
        "moves",
        "movable",
        "mobile",
        "trolley",
        "cart",
        "轮",
        "移动",
        "推车"
    ],
    [
        "sit",
        "seat",
        "bench",
        "sitting",
        "坐",
        "凳"
    ],
    [
        "hang",
        "hooks",
        "hook",
        "hanging",
        "挂",
        "挂钩"
    ],
    [
        "shelves",
        "shelf",
        "shelving",
        "架",
        "层板"
    ],
    [
        "cat",
        "pet",
        "dog",
        "猫",
        "狗",
        "宠物"
    ],
    [
        "small",
        "tiny",
        "space",
        "room",
        "studio",
        "小",
        "空间"
    ],
    [
        "guests",
        "guest",
        "visitors",
        "客人"
    ],
    [
        "whiteboard",
        "write",
        "notes",
        "planning",
        "白板"
    ],
    [
        "tools",
        "workshop",
        "bench",
        "工具"
    ],
    [
        "light",
        "daylight",
        "window",
        "光",
        "采光"
    ]
];
const STOP = new Set("a an the and or but of for to in on at by with my our your his her their its is are was be been i we you it they this that these those there here have has had do does not no so too very just some any all one two need needs want wants would like can could should where when what how which who get got put keep keeps make more less from home house place somewhere something anything nowhere nothing everything really always never also about into out up down over under than then them me us".split(" "));
const concept = new Map();
for (const group of SAME)for (const w of group)concept.set(w, group[0] ?? w);
/** the ideas in a sentence: our own word for each thing it mentions */ function ideas(text) {
    const out = new Set();
    const lower = text.toLowerCase();
    // Chinese is not spaced: look for the words we know inside the sentence
    for (const [w, c] of concept)if (/[\u2e80-\u9fff]/.test(w) && lower.includes(w)) out.add(c);
    for (const raw of lower.split(/[^a-z]+/)){
        if (raw.length < 2 || STOP.has(raw)) continue;
        const forms = [
            raw,
            raw.replace(/(ing|ed|es|s)$/, "")
        ];
        const hit = forms.map((f)=>concept.get(f)).find(Boolean);
        out.add(hit ?? forms[1] ?? raw);
    }
    return out;
}
const lifeOfJob = (j)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["families"].find((f)=>f.id === j.family)?.bodies.find((b)=>b.id === j.body)?.lives.find((l)=>l.id === j.life);
/** what each problem is about, worked out once */ const about = new Map();
function aboutJob(j) {
    const hit = about.get(j.id);
    if (hit) return hit;
    const life = lifeOfJob(j);
    const made = {
        say: ideas(j.say),
        rest: ideas([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeOf"])(j.room)?.name,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["homes"].find((h)=>h.id === j.home)?.name,
            life?.name,
            life?.line,
            ...life ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verbsOf"])(life).map((v)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verbNames"][v].name) : []
        ].filter(Boolean).join(" "))
    };
    about.set(j.id, made);
    return made;
}
/** everything the words match, before it is narrowed down */ function matches(query, home) {
    const said = ideas(query);
    if (said.size === 0) return [];
    const out = [];
    for (const j of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobs"]){
        const a = aboutJob(j);
        // said in the problem itself counts double what is only true of the answer;
        // and a hair more again, so that of two equal scores the problem wins
        let score = 0;
        for (const w of said)score += a.say.has(w) ? 2.05 : a.rest.has(w) ? 1 : 0;
        if (score === 0) continue;
        const here = home !== null && j.home === home;
        out.push({
            job: j,
            name: lifeOfJob(j)?.name ?? "",
            here,
            // the same answer at home beats it down the street, but a better answer
            // down the street still beats a worse one at home
            score: score / Math.sqrt(said.size) + (here ? 0.75 : 0)
        });
    }
    return out.sort((p, q)=>q.score - p.score);
}
/** one row per design: the same piece often answers the same words twice */ function once(list, take) {
    const seen = new Set();
    return list.filter((a)=>{
        const k = `${a.job.home}|${a.job.life}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
    }).slice(0, take);
}
const tally = (list, of)=>{
    const n = new Map();
    for (const a of list){
        const k = of(a);
        if (k) n.set(k, (n.get(k) ?? 0) + 1);
    }
    return [
        ...n.entries()
    ].map(([id, count])=>({
            id,
            name: id,
            n: count
        })).sort((p, q)=>q.n - p.n || p.name.localeCompare(q.name));
};
const roomOfAnswer = (a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeOf"])(a.job.room)?.name;
function asked(query, home, narrow = {}, take = 6) {
    const all = matches(query, home);
    const kept = all.filter((a)=>(!narrow.rooms?.length || narrow.rooms.includes(roomOfAnswer(a) ?? "")) && (!narrow.kinds?.length || narrow.kinds.includes(a.job.family)));
    return {
        answers: once(kept, take),
        rooms: tally(all, roomOfAnswer),
        kinds: tally(all, (a)=>a.job.family).map((f)=>({
                ...f,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["families"].find((x)=>x.id === f.id)?.name ?? f.id
            }))
    };
}
function ask(query, home) {
    return asked(query, home).answers;
}
}),
"[project]/src/features/family/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "families",
    ()=>families,
    "familyOf",
    ()=>familyOf,
    "firstLifeIn",
    ()=>firstLifeIn,
    "isConcept",
    ()=>isConcept,
    "jobOf",
    ()=>jobOf,
    "jobs",
    ()=>jobs,
    "jobsIn",
    ()=>jobsIn,
    "lifeOf",
    ()=>lifeOf,
    "livesIn",
    ()=>livesIn,
    "lookKey",
    ()=>lookKey,
    "placeOf",
    ()=>placeOf,
    "places",
    ()=>places,
    "productOf",
    ()=>productOf,
    "recordCount",
    ()=>recordCount,
    "recordsIn",
    ()=>recordsIn,
    "resolveLife",
    ()=>resolveLife,
    "statusOf",
    ()=>statusOf,
    "verbNames",
    ()=>verbNames,
    "verbsOf",
    ()=>verbsOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/custom.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/town.ts [app-rsc] (ecmascript)");
;
;
;
const places = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allRooms"].map((r)=>({
        id: r.id,
        name: r.name,
        line: r.line
    }));
const placeOf = (id)=>places.find((p)=>p.id === id);
const verbNames = {
    hang: {
        name: "Hang",
        line: "on the holes in the working face"
    },
    "put down": {
        name: "Put down",
        line: "on a top, a tray or a shelf"
    },
    hide: {
        name: "Hide",
        line: "behind a door"
    },
    sit: {
        name: "Sit",
        line: "on the seat board"
    },
    roll: {
        name: "Roll",
        line: "on four casters"
    },
    divide: {
        name: "Divide",
        line: "one room into two, without building"
    },
    shelve: {
        name: "Shelve",
        line: "on both sides at once"
    },
    work: {
        name: "Work",
        line: "at a desk top that is part of it"
    },
    pass: {
        name: "Pass through",
        line: "under a bridge, past a half door"
    },
    show: {
        name: "Show",
        line: "covers, plants, light through a grille"
    },
    fold: {
        name: "Fold",
        line: "flat, and lean it somewhere"
    },
    write: {
        name: "Write",
        line: "on a whiteboard face"
    },
    mirror: {
        name: "Mirror",
        line: "full length, on the quiet side"
    }
};
/* ---------- building blocks for composite bodies ---------- */ const bookcase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"])("bookcase");
const mobileScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"])("mobile-screen");
if (!bookcase || !mobileScreen) throw new Error("Catalogue is missing a base");
/** one wall segment: 600 wide, two working faces, from the bookcase's construction */ const segment = (h)=>({
        ...bookcase,
        id: `segment-${h}`,
        name: "Wall segment",
        width: 600,
        height: h,
        tiers: h / 400,
        bays: 1,
        status: "concept"
    });
const screenUnit = (h)=>h === 1200 ? mobileScreen : {
        ...mobileScreen,
        id: "screen-1600",
        name: "Standing screen unit",
        height: 1600,
        tiers: 4,
        status: "concept"
    };
const lowBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customProduct"])({
    height: 400,
    segments: 1,
    mobile: false
});
const place = (product, x, o = {})=>({
        product,
        config: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultConfig"])(product),
            storage: o.doors ? "doors" : "open"
        },
        x,
        ...o.y !== undefined ? {
            y: o.y
        } : {},
        ...o.rot ? {
            rot: o.rot
        } : {},
        props: o.props ?? null
    });
const board = (id, name, x, y, z, w, d, h = 18, color)=>({
        id,
        name,
        x,
        y,
        z,
        w,
        d,
        h,
        ...color ? {
            color
        } : {}
    });
const build = (placements, boards, width, depth, height, left = 0)=>({
        placements,
        boards,
        width,
        depth,
        height,
        left
    });
/** n segments in a line against the wall side */ const line = (n, h, props = [])=>(strip)=>build(Array.from({
            length: n
        }, (_, i)=>place(segment(h), i * 600, {
                y: strip - 400,
                props: props[i] ?? null
            })), [], n * 600, 400, h);
/** two segments, one turned: an L */ const shapeL = (h)=>(strip)=>build([
            place(segment(h), 0, {
                y: strip - 400,
                props: "bookcase"
            }),
            place(segment(h), 600, {
                y: strip,
                rot: 90
            })
        ], [], 1000, 1000, h);
/** three segments: a T, a U, a Z, or steps */ const shapeT = (strip)=>build([
        place(segment(1600), 0, {
            y: strip - 400,
            props: "bookcase"
        }),
        place(segment(1600), 600, {
            y: strip - 400
        }),
        place(segment(1600), 400, {
            y: strip - 400,
            rot: 90
        })
    ], [], 1200, 1000, 1600);
const shapeU = (strip)=>build([
        place(segment(1600), 0, {
            y: strip,
            rot: 90
        }),
        place(segment(1600), 400, {
            y: strip - 400,
            props: "bookcase"
        }),
        place(segment(1600), 1000, {
            y: strip,
            rot: 90
        })
    ], [], 1400, 1000, 1600);
const shapeZ = (strip)=>build([
        place(segment(1600), 0, {
            y: strip - 400,
            props: "bookcase"
        }),
        place(segment(1600), 600, {
            y: strip,
            rot: 90
        }),
        place(segment(1600), 1000, {
            y: strip - 1000
        })
    ], [], 1600, 1000, 1600);
const shapeSteps = (strip)=>build([
        place(segment(800), 0, {
            y: strip - 400
        }),
        place(segment(1200), 600, {
            y: strip - 400
        }),
        place(segment(1600), 1200, {
            y: strip - 400,
            props: "bookcase"
        })
    ], [], 1800, 400, 1600);
/** two towers and a bridge over the gap */ const bridge = (o = {})=>(strip)=>build([
            place(segment(1600), 0, {
                y: strip - 400
            }),
            place(segment(1600), 1800, {
                y: strip - 400
            }),
            ...o.cabinet ? [
                place((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customProduct"])({
                    height: 800,
                    segments: 2,
                    mobile: false
                }), 600, {
                    y: strip - 400
                })
            ] : []
        ], [
            board("bridge-board", "Bridge board", 400, strip - 400, 1630, 1600, 400),
            ...o.door ? [
                board("half-door", "Half door", 620, strip - 30, 30, 560, 18, o.door, "#e7551a")
            ] : [],
            ...o.curtain ? [
                board("curtain-rail", "Curtain rail", 600, strip - 200, 1600, 1200, 12, 12, "#2f2a26"),
                board("curtain", "Curtain", 620, strip - 210, 200, 520, 8, 1390, "#8a7f77")
            ] : []
        ], 2400, 400, 1650);
/** low blocks with one board across them */ const platform = (o)=>(strip)=>{
        const cols = o.blocks / 2;
        const ps = [];
        for(let r = 0; r < 2; r++)for(let c = 0; c < cols; c++)ps.push(place(lowBlock, c * 600, {
            y: strip - 400 - r * 800
        }));
        return build(ps, [
            board("platform-board", "Platform board", 0, strip - 400 - 800, 430, o.w, o.d),
            ...o.sleep ? [
                board("mattress", "Mattress", 60, strip - 400 - 760, 450, o.w - 120, o.d - 120, 120, "#efe6d8")
            ] : []
        ], o.w, o.d, o.sleep ? 570 : 450);
    };
/** one, two, or a tall screen unit on casters */ const screens = (n, h, o = {})=>(strip)=>build(Array.from({
            length: n
        }, (_, i)=>place(screenUnit(h), i * 600, {
                y: strip - 400,
                props: i === 0 ? o.props === undefined ? "mobile-screen" : o.props : null
            })), o.desk ? [
            board("drop-leaf", "Drop-leaf top", 0, strip - 400 - 500, 740, 600, 500)
        ] : [], n * 600, o.desk ? 900 : 400, h);
const families = [
    {
        id: "pieces",
        noun: "a piece",
        name: "Pieces",
        line: "One frame for one spot. The same panels, set up for where they stand.",
        strip: 1000,
        verbs: [
            "hang",
            "put down",
            "hide",
            "sit",
            "roll"
        ],
        bodies: [
            {
                id: "block",
                name: "Low block",
                lives: [
                    {
                        id: "bedside",
                        caseId: "flat.bed",
                        spot: "bedside",
                        name: "Bedside cabinet",
                        line: "A top for the lamp and the phone, a door for the rest.",
                        productId: "bedside",
                        record: "1.3"
                    },
                    {
                        id: "child-bedside",
                        caseId: "family.kids",
                        spot: "kids-wall",
                        name: "Child's bedside",
                        props: "kids-bedside",
                        line: "The same block, lower things in reach, nothing sharp on the face.",
                        custom: {
                            height: 400,
                            segments: 1,
                            mobile: false
                        },
                        concept: true,
                        record: "1.20"
                    },
                    {
                        id: "toy-cart",
                        caseId: "family.kids",
                        spot: "kids-wall",
                        name: "Toy box cart",
                        props: "kids-toys",
                        line: "The block on casters with a lid: toys go in, the cart goes under the bed.",
                        custom: {
                            height: 400,
                            segments: 1,
                            mobile: true
                        },
                        concept: true,
                        does: [
                            "hide",
                            "roll",
                            "put down"
                        ],
                        record: "1.8"
                    },
                    {
                        id: "spice-face",
                        caseId: "flat.kitchen",
                        spot: "wall-end",
                        name: "Spice station",
                        props: "spice-shelf",
                        line: "A block on the counter with a working face standing up from it.",
                        custom: {
                            height: 800,
                            segments: 1,
                            mobile: false
                        },
                        concept: true,
                        does: [
                            "hang",
                            "put down"
                        ],
                        record: "1.5"
                    },
                    {
                        id: "sofa-side",
                        caseId: "flat.living",
                        spot: "sofa-side",
                        name: "Sofa-side block",
                        line: "The same block at the arm of the sofa, for the cup and the remote.",
                        custom: {
                            height: 400,
                            segments: 1,
                            mobile: false
                        },
                        concept: true,
                        record: "1.3"
                    }
                ]
            },
            {
                id: "bench",
                name: "Bench",
                lives: [
                    {
                        id: "bench",
                        caseId: "family.hall",
                        spot: "hall-side",
                        name: "Storage bench",
                        line: "Sit to tie your shoes. The shoes live underneath.",
                        productId: "bench",
                        record: "1.12"
                    }
                ]
            },
            {
                id: "cart",
                name: "Two-tier cart",
                lives: [
                    {
                        id: "kitchen",
                        caseId: "flat.kitchen",
                        spot: "end-of-counter",
                        name: "Kitchen trolley",
                        line: "Extra counter that rolls to where you are cooking.",
                        productId: "kitchen",
                        record: "1.4"
                    },
                    {
                        id: "work-cart",
                        caseId: "loft.main",
                        spot: "desk-end",
                        name: "Work cart",
                        line: "The printer and the paper, rolled under the desk when you are done.",
                        productId: "work-cart",
                        record: "1.6"
                    },
                    {
                        id: "device-cabinet",
                        caseId: "loft.main",
                        spot: "desk-end",
                        name: "Device cabinet",
                        props: "devices",
                        line: "The same two tiers on pads, for the router and the chargers.",
                        custom: {
                            height: 800,
                            segments: 1,
                            mobile: false
                        },
                        concept: true,
                        record: "1.14"
                    },
                    {
                        id: "bath-cart",
                        caseId: "flat.bath",
                        spot: "beside-washer",
                        name: "Bathroom cart",
                        props: "bath-cart",
                        line: "Towels on the rail, bottles on the tray, the basket below. Faces that take steam.",
                        custom: {
                            height: 800,
                            segments: 1,
                            mobile: true
                        },
                        concept: true,
                        does: [
                            "hang",
                            "put down",
                            "roll"
                        ],
                        record: "1.7"
                    },
                    {
                        id: "balcony-cart",
                        caseId: "flat.balcony",
                        spot: "by-the-rail",
                        name: "Balcony cart",
                        props: "balcony-cart",
                        line: "The kitchen cart in a coat that takes rain, with a rail for the tongs.",
                        custom: {
                            height: 800,
                            segments: 1,
                            mobile: true
                        },
                        concept: true,
                        does: [
                            "hang",
                            "put down",
                            "roll"
                        ],
                        record: "1.19"
                    },
                    {
                        id: "island",
                        caseId: "loft.main",
                        spot: "kitchen",
                        name: "Preparation island",
                        line: "Two carts under one long top.",
                        productId: "island",
                        grownFrom: "kitchen",
                        growLine: "a second cart and one long top",
                        quantity: 2,
                        offsetX: -600,
                        record: "1.11"
                    }
                ]
            },
            {
                id: "console",
                name: "Two-bay cabinet",
                lives: [
                    {
                        id: "console",
                        caseId: "family.hall",
                        spot: "hall-wall",
                        name: "Entry console",
                        props: "console",
                        line: "A waist-high top by the door for post, keys and a plant.",
                        custom: {
                            height: 800,
                            segments: 2,
                            mobile: false
                        },
                        concept: true,
                        record: "1.16"
                    },
                    {
                        id: "changing-table",
                        caseId: "family.parents",
                        spot: "parents-wall",
                        name: "Changing table",
                        props: "changing",
                        line: "Two bays, a pad on top and a rail; the rail comes off when it is a cabinet again.",
                        custom: {
                            height: 800,
                            segments: 2,
                            mobile: false
                        },
                        concept: true,
                        does: [
                            "put down",
                            "hide"
                        ],
                        record: "1.13"
                    }
                ]
            },
            {
                id: "sideboard",
                name: "Three-bay cabinet",
                lives: [
                    {
                        id: "sideboard",
                        caseId: "flat.living",
                        spot: "under-tv",
                        name: "Three-bay sideboard",
                        line: "Under the television: the cables and boxes go behind doors.",
                        productId: "sideboard",
                        record: "1.10"
                    },
                    {
                        id: "tv-cabinet",
                        caseId: "flat.living",
                        spot: "under-tv",
                        name: "TV cabinet",
                        props: "tv-front",
                        line: "The sideboard with a back panel standing up to carry the television and its cables.",
                        custom: {
                            height: 800,
                            segments: 3,
                            mobile: false
                        },
                        concept: true,
                        does: [
                            "put down",
                            "hide",
                            "show"
                        ],
                        record: "1.15"
                    },
                    {
                        id: "drop-leaf",
                        caseId: "flat.living",
                        spot: "under-tv",
                        name: "Drop-leaf counter",
                        props: "drop-leaf",
                        line: "The sideboard with a top that folds down to work at, and folds back up.",
                        custom: {
                            height: 800,
                            segments: 3,
                            mobile: false
                        },
                        concept: true,
                        grownFrom: "sideboard",
                        growLine: "a drop-leaf top, its hinges and two end panels",
                        does: [
                            "work",
                            "put down",
                            "hide"
                        ],
                        record: "4.1"
                    }
                ]
            },
            {
                id: "upright",
                name: "Upright",
                lives: [
                    {
                        id: "entry",
                        caseId: "flat.door",
                        spot: "beside-door",
                        name: "Entry organiser",
                        line: "Hooks at hand height, a tray for keys, a shelf for shoes.",
                        productId: "entry",
                        record: "1.1"
                    },
                    {
                        id: "desk",
                        caseId: "studio.room",
                        spot: "beside-desk",
                        name: "Desk-side organiser",
                        line: "Headphones, bag and chargers hang beside the desk, not on it.",
                        productId: "desk",
                        record: "1.2",
                        door: {
                            to: "screens",
                            caseId: "loft.main",
                            body: "one",
                            line: "On casters, the same upright is a screen"
                        }
                    },
                    {
                        id: "coffee",
                        caseId: "studio.room",
                        spot: "kitchen-end",
                        name: "Coffee corner",
                        props: "coffee",
                        line: "Cups on hooks, the machine at the right height, beans below.",
                        custom: {
                            height: 1200,
                            segments: 1,
                            mobile: false
                        },
                        concept: true,
                        record: "1.9"
                    },
                    {
                        id: "workstation",
                        caseId: "studio.room",
                        spot: "beside-desk",
                        name: "Organiser workstation",
                        line: "The organiser, with a desk top of its own.",
                        productId: "workstation",
                        grownFrom: "desk",
                        growLine: "one more tier, a desk top and its support",
                        record: "1.2"
                    }
                ]
            },
            {
                id: "stand",
                name: "Tall upright",
                lives: [
                    {
                        id: "coat-stand",
                        caseId: "studio.room",
                        spot: "by-the-door",
                        name: "Coat stand",
                        props: "coat-stand",
                        line: "Every coat in the house, off the chair and off the bannister.",
                        productId: "coat-rack",
                        record: "1.17",
                        door: {
                            to: "walls",
                            caseId: "family.kids",
                            body: "line-2",
                            line: "Two of these, back to back, are a wall"
                        }
                    },
                    {
                        id: "clothes",
                        caseId: "flat.bed",
                        spot: "stand",
                        name: "Clothes organiser",
                        props: "wardrobe",
                        line: "Tomorrow's clothes, and the ones not yet for the wash.",
                        productId: "coat-rack",
                        record: "1.17"
                    },
                    {
                        id: "strip",
                        caseId: "family.hall",
                        spot: "hall-floor",
                        name: "The long strip",
                        props: "hall-strip",
                        line: "Bench, upright, cabinet and coat stand joined along one wall. Each stands on its own first.",
                        productId: "coat-rack",
                        concept: true,
                        grownFrom: "coat-stand",
                        growLine: "a bench, an upright and a cabinet, joined in a row",
                        record: "1.18"
                    }
                ]
            }
        ]
    },
    {
        id: "walls",
        noun: "a wall",
        name: "Walls",
        line: "A room inside a room. Segments that work on both sides, joined into a shape.",
        strip: 2400,
        verbs: [
            "divide",
            "shelve",
            "hang",
            "work",
            "sit",
            "pass",
            "show"
        ],
        bodies: [
            {
                id: "line-2",
                name: "Two segments, straight",
                lives: [
                    {
                        id: "child-divider",
                        caseId: "family.kids",
                        spot: "kids-floor",
                        name: "Second bedroom",
                        props: "kids-divider",
                        line: "Two segments, four tiers: one room becomes two, each with shelves on its side.",
                        productId: "bookcase",
                        does: [
                            "divide",
                            "shelve",
                            "show"
                        ],
                        record: "2.1"
                    },
                    {
                        id: "grille",
                        caseId: "family.kids",
                        spot: "kids-floor",
                        name: "Grille wall",
                        props: "kids-grille",
                        line: "The same two segments with an open lattice above, so light and a look get through.",
                        build: line(2, 1600, [
                            "bookcase"
                        ]),
                        concept: true,
                        does: [
                            "divide",
                            "show"
                        ],
                        record: "2.16"
                    },
                    {
                        id: "bookwall",
                        caseId: "loft.main",
                        spot: "behind-sofa",
                        name: "Double-sided bookshelf wall",
                        line: "Books on the sofa side, records on the other.",
                        productId: "bookcase",
                        does: [
                            "divide",
                            "shelve",
                            "show"
                        ],
                        record: "2.9"
                    },
                    {
                        id: "record-wall",
                        caseId: "loft.main",
                        spot: "behind-sofa",
                        name: "Record wall",
                        props: "records",
                        line: "Tilted boards for covers, dividers and a light. Back to shelves whenever you like.",
                        build: line(2, 1600, [
                            "bookcase"
                        ]),
                        concept: true,
                        does: [
                            "show",
                            "shelve",
                            "divide"
                        ],
                        record: "2.24"
                    },
                    {
                        id: "against-wall",
                        caseId: "flat.living",
                        spot: "floor",
                        name: "Bookwall against the wall",
                        props: "living-wall",
                        line: "Tall and against the wall, with deeper shelves on the one side that faces the room.",
                        build: line(2, 1600, [
                            "bookcase"
                        ]),
                        concept: true,
                        does: [
                            "shelve",
                            "show"
                        ],
                        record: "2.15"
                    },
                    {
                        id: "offset",
                        caseId: "loft.main",
                        spot: "middle",
                        name: "Offset line",
                        line: "The two segments stepped past each other, so the wall has a fold in it.",
                        build: (strip)=>build([
                                place(segment(1600), 0, {
                                    y: strip - 400,
                                    props: "bookcase"
                                }),
                                place(segment(1600), 600, {
                                    y: strip - 600
                                })
                            ], [], 1200, 600, 1600),
                        concept: true,
                        does: [
                            "divide",
                            "shelve"
                        ],
                        record: "2.18"
                    },
                    {
                        id: "opening",
                        caseId: "family.living",
                        spot: "living-floor",
                        name: "Wall with an opening",
                        props: "opening",
                        line: "One face left out, for a look through or to pass a cup.",
                        build: line(2, 1600, [
                            "bookcase"
                        ]),
                        concept: true,
                        does: [
                            "divide",
                            "pass",
                            "shelve"
                        ],
                        record: "2.19"
                    },
                    {
                        id: "wardrobe-side",
                        caseId: "family.parents",
                        spot: "parents-floor",
                        name: "Wardrobe wall",
                        line: "One side deepened to 60 cm with a rail and a door; the other side stays thin shelves.",
                        build: (strip)=>build([
                                place(segment(1600), 0, {
                                    y: strip - 400,
                                    props: "coat-rack",
                                    doors: true
                                }),
                                place(segment(1600), 600, {
                                    y: strip - 400,
                                    doors: true
                                })
                            ], [], 1200, 600, 1600),
                        concept: true,
                        does: [
                            "divide",
                            "hang",
                            "hide",
                            "shelve"
                        ],
                        record: "2.10"
                    },
                    {
                        id: "bed-head",
                        caseId: "studio.room",
                        spot: "between",
                        name: "Bed-head wall",
                        props: "bed-head",
                        line: "Three tiers behind the pillows: a soft face on the bed side, storage behind.",
                        build: line(2, 1200, [
                            "bookcase"
                        ]),
                        concept: true,
                        does: [
                            "divide",
                            "shelve",
                            "put down"
                        ],
                        record: "2.12"
                    },
                    {
                        id: "workstation-wall",
                        caseId: "loft.main",
                        spot: "middle",
                        name: "Workstation wall",
                        line: "The wall with a desk top on one side and a leg at the far end.",
                        build: (strip)=>build([
                                place(segment(1600), 0, {
                                    y: strip - 400,
                                    props: "bookcase"
                                }),
                                place(segment(1600), 600, {
                                    y: strip - 400
                                })
                            ], [
                                board("desktop", "Desk top", 0, strip - 1000, 730, 1200, 600),
                                board("desk-leg", "Desk leg", 1160, strip - 990, 30, 40, 40, 700)
                            ], 1200, 1000, 1600),
                        concept: true,
                        grownFrom: "child-divider",
                        growLine: "a desk top, its brackets and one leg",
                        does: [
                            "work",
                            "divide",
                            "shelve"
                        ],
                        record: "2.11"
                    }
                ]
            },
            {
                id: "line-3-low",
                name: "Three segments, low",
                lives: [
                    {
                        id: "sofa-back",
                        caseId: "loft.main",
                        spot: "behind-sofa",
                        name: "Behind the sofa",
                        line: "Three low segments with one long top: a shelf for the sofa, a desk for the other side.",
                        build: (strip)=>build([
                                place(segment(1200), 0, {
                                    y: strip - 400,
                                    props: "bookcase"
                                }),
                                place(segment(1200), 600, {
                                    y: strip - 400
                                }),
                                place(segment(1200), 1200, {
                                    y: strip - 400
                                })
                            ], [
                                board("long-top-1800", "Long top", 0, strip - 400, 1230, 1800, 400)
                            ], 1800, 400, 1250),
                        concept: true,
                        does: [
                            "divide",
                            "shelve",
                            "put down",
                            "work"
                        ],
                        record: "2.2"
                    }
                ]
            },
            {
                id: "corner",
                name: "Two segments, one turn",
                lives: [
                    {
                        id: "shape-l",
                        caseId: "loft.main",
                        spot: "corner",
                        name: "L corner",
                        line: "One segment along, one across. A corner appears where there was none.",
                        build: shapeL(1600),
                        concept: true,
                        does: [
                            "divide",
                            "shelve"
                        ],
                        record: "2.3"
                    },
                    {
                        id: "reading-corner",
                        caseId: "loft.main",
                        spot: "corner",
                        name: "Reading corner",
                        props: "reading",
                        line: "The L with a seat board, a cushion and a light inside the corner.",
                        build: (strip)=>{
                            const b = shapeL(1600)(strip);
                            return {
                                ...b,
                                boards: [
                                    board("seat-board", "Seat board", 0, strip - 1000, 430, 600, 600),
                                    board("cushion", "Cushion", 40, strip - 960, 450, 520, 520, 70, "#5f6f7a")
                                ],
                                depth: 1000
                            };
                        },
                        concept: true,
                        grownFrom: "shape-l",
                        growLine: "a seat board, two supports and a cushion",
                        does: [
                            "sit",
                            "shelve",
                            "divide"
                        ],
                        record: "2.13"
                    },
                    {
                        id: "play-corner",
                        caseId: "family.living",
                        spot: "living-corner",
                        name: "Play corner",
                        line: "Two low segments in an L, a whiteboard face and boxes. Nothing to climb.",
                        build: shapeL(800),
                        concept: true,
                        does: [
                            "divide",
                            "write",
                            "hide"
                        ],
                        record: "2.21"
                    }
                ]
            },
            {
                id: "three-turned",
                name: "Three segments, turned",
                lives: [
                    {
                        id: "shape-u",
                        caseId: "loft.main",
                        spot: "middle",
                        name: "U nook",
                        line: "Three segments around you. A place to read, work or play, open on one side.",
                        build: shapeU,
                        concept: true,
                        does: [
                            "divide",
                            "shelve",
                            "sit"
                        ],
                        record: "2.4"
                    },
                    {
                        id: "shape-t",
                        caseId: "family.parents",
                        spot: "parents-floor",
                        name: "T with two bedsides",
                        props: "two-bedsides",
                        line: "The same three segments as a T: a bed head on each side, with a light and a socket.",
                        build: shapeT,
                        concept: true,
                        does: [
                            "divide",
                            "shelve",
                            "put down"
                        ],
                        record: "2.23"
                    },
                    {
                        id: "shape-t-plain",
                        caseId: "loft.main",
                        spot: "middle",
                        name: "T",
                        props: "plain-wall",
                        line: "One segment meets the middle of two. Both sides get a working face.",
                        build: shapeT,
                        concept: true,
                        does: [
                            "divide",
                            "shelve"
                        ],
                        record: "2.5"
                    },
                    {
                        id: "shape-z",
                        caseId: "loft.main",
                        spot: "middle",
                        name: "Z line",
                        props: "show-wall",
                        line: "Two turns the other way. Display on one side, storage on the other.",
                        build: shapeZ,
                        concept: true,
                        does: [
                            "divide",
                            "shelve",
                            "show"
                        ],
                        record: "2.17"
                    },
                    {
                        id: "steps",
                        caseId: "workshop.floor",
                        spot: "window",
                        name: "Steps",
                        line: "Two, three and four tiers in a row; the low end is a table, the high end a wall.",
                        build: shapeSteps,
                        concept: true,
                        does: [
                            "divide",
                            "shelve",
                            "put down",
                            "show"
                        ],
                        record: "2.6"
                    },
                    {
                        id: "phone-booth",
                        caseId: "loft.main",
                        spot: "middle",
                        name: "Phone-booth corner",
                        props: "booth",
                        line: "The U with a desk top across it and a curtain. Not soundproof; just yours.",
                        build: (strip)=>{
                            const b = shapeU(strip);
                            return {
                                ...b,
                                boards: [
                                    board("desktop", "Desk top", 400, strip - 900, 730, 600, 500)
                                ]
                            };
                        },
                        concept: true,
                        grownFrom: "shape-u",
                        growLine: "a desk top, its brackets and a curtain rail",
                        does: [
                            "work",
                            "divide",
                            "shelve"
                        ],
                        record: "2.29"
                    },
                    {
                        id: "two-desks",
                        caseId: "loft.main",
                        spot: "middle",
                        name: "Two-person workstation",
                        line: "The T with a desk top on each side of the stem, facing away from each other.",
                        build: (strip)=>{
                            const b = shapeT(strip);
                            return {
                                ...b,
                                boards: [
                                    board("desktop", "Desk top", -200, strip - 1000, 730, 600, 600),
                                    board("desktop", "Desk top", 800, strip - 1000, 730, 600, 600)
                                ],
                                width: 1600,
                                left: -200
                            };
                        },
                        concept: true,
                        grownFrom: "shape-t-plain",
                        growLine: "two desk tops, their brackets and two legs",
                        does: [
                            "work",
                            "divide",
                            "shelve"
                        ],
                        record: "2.22"
                    }
                ]
            },
            {
                id: "platform",
                name: "Blocks and a platform",
                lives: [
                    {
                        id: "tea-platform",
                        caseId: "loft.main",
                        spot: "window",
                        name: "Tea platform",
                        line: "Six low blocks under one board: a raised corner to sit on, storage underneath.",
                        build: platform({
                            blocks: 6,
                            w: 1800,
                            d: 1200
                        }),
                        concept: true,
                        does: [
                            "sit",
                            "hide",
                            "put down"
                        ],
                        record: "2.14"
                    },
                    {
                        id: "guest-platform",
                        caseId: "loft.main",
                        spot: "window",
                        name: "Guest sleeping platform",
                        line: "The same blocks and board with a mattress on top, for the nights someone stays.",
                        build: platform({
                            blocks: 6,
                            w: 1800,
                            d: 1200,
                            sleep: true
                        }),
                        concept: true,
                        does: [
                            "sit",
                            "hide"
                        ],
                        record: "2.28"
                    }
                ]
            },
            {
                id: "bridge",
                name: "Two towers and a bridge",
                lives: [
                    {
                        id: "passage",
                        caseId: "family.hall",
                        spot: "hall-floor",
                        name: "Bridge passage",
                        props: "passage",
                        line: "Two towers with a board across the top. You walk through the wall.",
                        build: bridge(),
                        concept: true,
                        does: [
                            "pass",
                            "divide",
                            "shelve"
                        ],
                        record: "2.7"
                    },
                    {
                        id: "pet-door",
                        caseId: "family.hall",
                        spot: "hall-floor",
                        name: "Pet door",
                        props: "pet-door",
                        line: "The passage with a low door in it. The cat decides.",
                        build: bridge({
                            door: 400
                        }),
                        concept: true,
                        does: [
                            "pass",
                            "divide",
                            "shelve"
                        ],
                        record: "2.27"
                    },
                    {
                        id: "half-door",
                        caseId: "family.kids",
                        spot: "kids-door",
                        name: "Half-door passage",
                        props: "half-door",
                        line: "A half-height door in the passage: a room that is theirs, with the top open.",
                        build: bridge({
                            door: 900
                        }),
                        concept: true,
                        does: [
                            "pass",
                            "divide",
                            "shelve"
                        ],
                        record: "2.8"
                    },
                    {
                        id: "niche",
                        caseId: "workshop.floor",
                        spot: "niche",
                        name: "Display niche",
                        line: "A low cabinet between the towers, under the bridge. Not a passage any more; a frame.",
                        build: bridge({
                            cabinet: true
                        }),
                        concept: true,
                        does: [
                            "show",
                            "shelve",
                            "hide"
                        ],
                        record: "2.25",
                        door: {
                            to: "pieces",
                            caseId: "flat.living",
                            body: "sideboard",
                            line: "The cabinet in the middle is a piece on its own"
                        }
                    },
                    {
                        id: "walk-in",
                        caseId: "family.parents",
                        spot: "parents-floor",
                        name: "Walk-in entrance",
                        props: "walk-in",
                        line: "The towers deepened for clothes, a curtain across the gap: the way into a wardrobe.",
                        build: bridge({
                            curtain: true
                        }),
                        concept: true,
                        does: [
                            "pass",
                            "hang",
                            "hide"
                        ],
                        record: "2.26"
                    }
                ]
            }
        ]
    },
    {
        id: "screens",
        noun: "a screen",
        name: "Screens",
        line: "A wall that moves. One or two units on casters, or three leaves that fold.",
        strip: 1000,
        verbs: [
            "roll",
            "fold",
            "hide",
            "hang",
            "work",
            "write",
            "mirror"
        ],
        bodies: [
            {
                id: "one",
                name: "One unit",
                lives: [
                    {
                        id: "screen",
                        caseId: "loft.main",
                        spot: "party",
                        name: "Mobile screen",
                        line: "Quiet on one side, a working face on the other, casters underneath.",
                        productId: "mobile-screen",
                        does: [
                            "roll",
                            "hide",
                            "hang"
                        ],
                        record: "3.1"
                    },
                    {
                        id: "video-background",
                        caseId: "studio.room",
                        spot: "behind-chair",
                        name: "Video background",
                        line: "The quiet side behind you on calls; the light and the tablet on the side they don't see.",
                        build: screens(1, 1200, {
                            props: null
                        }),
                        concept: true,
                        does: [
                            "roll",
                            "hide",
                            "show"
                        ],
                        record: "3.4"
                    },
                    {
                        id: "standing-desk",
                        caseId: "workshop.floor",
                        spot: "floor",
                        name: "Standing work screen",
                        line: "A drop-leaf top on the working side, a whiteboard above it.",
                        build: screens(1, 1200, {
                            desk: true,
                            props: null
                        }),
                        concept: true,
                        grownFrom: "video-background",
                        growLine: "a drop-leaf top, two supports and a whiteboard face",
                        does: [
                            "work",
                            "write",
                            "roll"
                        ],
                        record: "3.5"
                    },
                    {
                        id: "fitting",
                        caseId: "family.parents",
                        spot: "parents-corner",
                        name: "Fitting screen",
                        props: "fitting",
                        line: "A full-length mirror on the quiet side, a rail and hooks on the other.",
                        build: screens(1, 1200, {
                            props: "coat-rack"
                        }),
                        concept: true,
                        does: [
                            "mirror",
                            "hang",
                            "roll"
                        ],
                        record: "3.6"
                    },
                    {
                        id: "bed-screen",
                        caseId: "studio.room",
                        spot: "between",
                        name: "Bed screen",
                        props: "bed-screen",
                        line: "Between the bed and the rest of the room, with nothing sticking out on the bed side.",
                        build: screens(1, 1200, {
                            props: null
                        }),
                        concept: true,
                        does: [
                            "hide",
                            "roll",
                            "hang"
                        ],
                        record: "3.7"
                    },
                    {
                        id: "kitchen-screen",
                        caseId: "loft.main",
                        spot: "kitchen",
                        name: "Kitchen prep screen",
                        line: "A wipe-clean working face beside the counter: knives on the strip, roll and cloth on the rail.",
                        build: screens(1, 1200, {
                            props: "kitchen"
                        }),
                        concept: true,
                        does: [
                            "hang",
                            "roll",
                            "hide"
                        ],
                        record: "3.9"
                    }
                ]
            },
            {
                id: "two",
                name: "Two units",
                lives: [
                    {
                        id: "double",
                        caseId: "loft.main",
                        spot: "party",
                        name: "Two-unit screen",
                        props: "two-coats",
                        line: "Two units joined: a longer wall that still rolls, and can take a top across.",
                        build: screens(2, 1200),
                        concept: true,
                        does: [
                            "roll",
                            "hide",
                            "hang"
                        ],
                        record: "3.2"
                    },
                    {
                        id: "wheeled-partition",
                        caseId: "loft.main",
                        spot: "party",
                        name: "Wheeled partition",
                        line: "The two units with storage on both sides and ballast below: a partition you can move by yourself.",
                        build: screens(2, 1200, {
                            props: "bookcase"
                        }),
                        concept: true,
                        does: [
                            "roll",
                            "divide",
                            "hide"
                        ],
                        record: "2.20"
                    },
                    {
                        id: "tool-screen",
                        caseId: "workshop.floor",
                        spot: "bench-side",
                        name: "Tool and whiteboard screen",
                        line: "Samples and tools on one side, a whiteboard on the other. Our own studio uses it.",
                        build: screens(2, 1200, {
                            props: "work-cart"
                        }),
                        concept: true,
                        does: [
                            "write",
                            "hang",
                            "roll"
                        ],
                        record: "3.10"
                    },
                    {
                        id: "child-boundary",
                        caseId: "family.living",
                        spot: "living-corner",
                        name: "Play boundary",
                        props: "play-boundary",
                        line: "Two units with a whiteboard, boxes and a soft face: an edge to the play, not a fence.",
                        build: screens(2, 1200, {
                            props: null
                        }),
                        concept: true,
                        does: [
                            "write",
                            "hide",
                            "roll"
                        ],
                        record: "3.8"
                    }
                ]
            },
            {
                id: "folding",
                name: "Three leaves",
                lives: [
                    {
                        id: "folding",
                        caseId: "studio.room",
                        spot: "folded",
                        name: "Three-panel folding screen",
                        line: "Three framed leaves on a continuous hinge. Folds flat; carries little.",
                        productId: "folding-screen",
                        does: [
                            "fold",
                            "hide"
                        ],
                        record: "3.3"
                    }
                ]
            },
            {
                id: "tall",
                name: "One unit, tall",
                lives: [
                    {
                        id: "standing-background",
                        caseId: "workshop.floor",
                        spot: "stand",
                        name: "Standing video background",
                        line: "The background at 160 cm, for calls you take on your feet.",
                        build: screens(1, 1600, {
                            props: null
                        }),
                        concept: true,
                        does: [
                            "roll",
                            "hide",
                            "show"
                        ],
                        record: "3.4"
                    }
                ]
            }
        ]
    }
];
const familyOf = (id)=>families.find((f)=>f.id === id);
const lifeOf = (body, id)=>body.lives.find((l)=>l.id === id);
const firstLifeIn = (body, caseId)=>body.lives.find((l)=>l.caseId === caseId && !l.grownFrom);
function resolveLife(life, strip) {
    if (life.build) {
        const made = life.build(strip);
        if (!life.props) return made;
        /* Walls and screens are built by a shared function, so four lives can come
       back as the same segments in the same places. The life's own staging
       goes on the face that was already dressed — or on the first segment when
       the build dressed none — so those four hold four different things. */ const i = made.placements.findIndex((pl)=>pl.props != null);
        const at = i === -1 ? 0 : i;
        return {
            ...made,
            placements: made.placements.map((pl, n)=>n === at ? {
                    ...pl,
                    props: life.props ?? null
                } : pl)
        };
    }
    const product = life.custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customProduct"])(life.custom) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"])(life.productId ?? "");
    if (!product) throw new Error(`No product for life ${life.id}`);
    const config = life.custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customConfig"])(life.custom) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultConfig"])(product);
    const left = life.offsetX ?? 0;
    return build([
        {
            product,
            config,
            x: left,
            /* What stands on it is the life's own, not the frame's. Two designs
           can share a frame — that is the point of the panel system — but a
           child's bedside and a spice station are not holding the same things,
           so each life names its own staging and only falls back to the
           frame's when it has not been given one. */ props: life.props ?? (life.custom ? "custom" : product.id)
        }
    ], [], product.width, product.depth ?? 400, product.height, left);
}
const productOf = (life)=>life.productId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"])(life.productId) : undefined;
const rolls = (p)=>[
        "trolley",
        "island",
        "screen"
    ].includes(p.shape);
function verbsOf(life) {
    if (life.does) return life.does;
    const product = life.custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customProduct"])(life.custom) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"])(life.productId ?? "");
    if (!product) return [];
    const out = [];
    if (product.does.includes("hang")) out.push("hang");
    if (product.does.includes("put down")) out.push("put down");
    if (product.does.includes("hide") || product.door) out.push("hide");
    if (product.does.includes("sit")) out.push("sit");
    if (rolls(product)) out.push("roll");
    return out;
}
function isConcept(life) {
    if (life.concept) return true;
    const p = productOf(life);
    return !p || p.status === "concept";
}
function statusOf(life) {
    if (isConcept(life)) return {
        made: false,
        label: "Not made yet"
    };
    return productOf(life)?.status === "buyable" ? {
        made: true,
        label: "Ready to order"
    } : {
        made: true,
        label: "Made · price to come"
    };
}
const livesIn = (family, caseId)=>family.bodies.flatMap((b)=>b.lives.filter((l)=>l.caseId === caseId));
const recordCount = (family)=>new Set(family.bodies.flatMap((b)=>b.lives.map((l)=>l.record))).size;
const lookKey = (l)=>l ? `${l.lifeId ?? "bare"}${l.doors ? "+doors" : ""}` : "none";
const job = (home, room, say, family, body, life, verb)=>({
        id: `${home}:${life}`,
        say,
        home,
        room,
        family,
        body,
        life,
        verb
    });
const jobs = [
    // the flat
    job("flat", "flat.door", "Coats pile up on the chair by the door", "pieces", "upright", "entry", "hang"),
    job("flat", "flat.kitchen", "The counter is too short when I cook", "pieces", "cart", "kitchen", "roll"),
    job("flat", "flat.kitchen", "Bottles and jars crowd the counter", "pieces", "block", "spice-face", "hang"),
    job("flat", "flat.living", "Cables and boxes under the TV", "pieces", "sideboard", "sideboard", "hide"),
    job("flat", "flat.living", "There is no desk in the flat", "pieces", "sideboard", "drop-leaf", "work"),
    job("flat", "flat.living", "The cup and the remote at the sofa", "pieces", "block", "sofa-side", "put down"),
    job("flat", "flat.living", "A wall of books in the living room", "walls", "line-2", "against-wall", "shelve"),
    job("flat", "flat.bed", "Phone and book on the floor by the bed", "pieces", "block", "bedside", "put down"),
    job("flat", "flat.bed", "Tomorrow's clothes on the chair", "pieces", "stand", "clothes", "hang"),
    job("flat", "flat.bath", "Towels on the bathroom floor", "pieces", "cart", "bath-cart", "hang"),
    job("flat", "flat.balcony", "Evenings out on the balcony", "pieces", "cart", "balcony-cart", "roll"),
    // the studio
    job("studio", "studio.room", "No hallway: coats land on the chair by the door", "pieces", "stand", "coat-stand", "hang"),
    job("studio", "studio.room", "One table for eating and for working", "pieces", "upright", "desk", "hang"),
    job("studio", "studio.room", "The bed is behind me on every call", "screens", "one", "video-background", "hide"),
    job("studio", "studio.room", "The bed and the living room are the same room", "walls", "line-2", "bed-head", "divide"),
    job("studio", "studio.room", "Something between the bed and the rest, that rolls away", "screens", "one", "bed-screen", "roll"),
    job("studio", "studio.room", "Nowhere to put a screen when it is not needed", "screens", "folding", "folding", "fold"),
    job("studio", "studio.room", "The kitchen wall has nothing on it", "pieces", "upright", "coffee", "put down"),
    // the family house
    job("family", "family.kids", "Two children, one room, no line between them", "walls", "line-2", "child-divider", "divide"),
    job("family", "family.kids", "A room of their own, with the light still coming through", "walls", "line-2", "grille", "show"),
    job("family", "family.kids", "A door that is theirs, with the top open", "walls", "bridge", "half-door", "pass"),
    job("family", "family.kids", "Toys everywhere, every evening", "pieces", "block", "toy-cart", "hide"),
    job("family", "family.living", "A play corner where we can still see them", "walls", "corner", "play-corner", "divide"),
    job("family", "family.living", "A boundary to the play that moves", "screens", "two", "child-boundary", "roll"),
    job("family", "family.hall", "Shoes and school bags all over the hallway", "pieces", "bench", "bench", "sit"),
    job("family", "family.hall", "Post and keys need somewhere by the door", "pieces", "console", "console", "put down"),
    job("family", "family.hall", "The hallway into the living room has no door", "walls", "bridge", "passage", "pass"),
    job("family", "family.hall", "The cat wants in and out", "walls", "bridge", "pet-door", "pass"),
    job("family", "family.parents", "No wardrobe in our bedroom", "walls", "line-2", "wardrobe-side", "hang"),
    job("family", "family.parents", "A way into a wardrobe", "walls", "bridge", "walk-in", "pass"),
    job("family", "family.parents", "Two bedsides on one wall", "walls", "three-turned", "shape-t", "put down"),
    job("family", "family.parents", "A mirror to dress by", "screens", "one", "fitting", "mirror"),
    job("family", "family.parents", "The little one still needs changing", "pieces", "console", "changing-table", "put down"),
    // the loft
    job("loft", "loft.main", "The sofa has its back to the whole room", "walls", "line-3-low", "sofa-back", "divide"),
    job("loft", "loft.main", "Three desks in a row and three calls at once", "walls", "three-turned", "phone-booth", "work"),
    job("loft", "loft.main", "Two of us working back to back", "walls", "three-turned", "two-desks", "work"),
    job("loft", "loft.main", "A desk that is part of the wall", "walls", "line-2", "workstation-wall", "work"),
    job("loft", "loft.main", "One big room and no corners in it", "walls", "corner", "shape-l", "divide"),
    job("loft", "loft.main", "Somewhere to sit and read", "walls", "corner", "reading-corner", "sit"),
    job("loft", "loft.main", "Books and records with no wall to live on", "walls", "line-2", "bookwall", "shelve"),
    job("loft", "loft.main", "Friends stay the night", "walls", "platform", "guest-platform", "sit"),
    job("loft", "loft.main", "A corner to sit up on, by the window", "walls", "platform", "tea-platform", "sit"),
    job("loft", "loft.main", "Move the wall when there is a party", "screens", "two", "wheeled-partition", "roll"),
    job("loft", "loft.main", "A screen between two desks", "screens", "one", "screen", "hide"),
    job("loft", "loft.main", "The open kitchen splashes the sofa", "screens", "one", "kitchen-screen", "hide"),
    job("loft", "loft.main", "More counter when three of us cook", "pieces", "cart", "island", "roll"),
    job("loft", "loft.main", "The printer lives on the floor", "pieces", "cart", "work-cart", "roll"),
    job("loft", "loft.main", "The router and all the chargers", "pieces", "cart", "device-cabinet", "hide"),
    // our workshop
    job("workshop", "workshop.floor", "Tools on one side, a whiteboard on the other", "screens", "two", "tool-screen", "write"),
    job("workshop", "workshop.floor", "A standing desk on the screen itself", "screens", "one", "standing-desk", "work"),
    job("workshop", "workshop.floor", "A backdrop for product videos", "screens", "tall", "standing-background", "hide"),
    job("workshop", "workshop.floor", "Three heights in a row, in the window", "walls", "three-turned", "steps", "show"),
    job("workshop", "workshop.floor", "A frame around one piece, in the window", "walls", "bridge", "niche", "show")
];
const jobsIn = (home)=>jobs.filter((j)=>j.home === home);
const jobOf = (id)=>jobs.find((j)=>j.id === id);
const recordsIn = (home)=>new Set(families.flatMap((f)=>f.bodies.flatMap((b)=>b.lives.filter((l)=>l.caseId.startsWith(`${home}.`)).map((l)=>l.record)))).size;
}),
"[project]/src/features/family/outfit.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCounts",
    ()=>buildCounts,
    "changeBetween",
    ()=>changeBetween,
    "outfitFor",
    ()=>outfitFor,
    "tallyBetween",
    ()=>tallyBetween
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$props$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/props.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/steps.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/blocks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$house$2f$detail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/house/detail.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$prop$2d$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/prop-models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/data.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
/** What is left when a body wears nothing: base, carcass, top. */ const DRESS_GROUPS = [
    "Shelves",
    "Doors",
    "Desk",
    "Accessories",
    "Connections"
];
const HANGS = new Set([
    "coat",
    "bag",
    "towel",
    "headphones"
]);
const cache = new Map();
let serial = 0;
function buildFor(family, body, look) {
    const life = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lifeOf"])(body, look.lifeId) ?? body.lives[0];
    if (!life) throw new Error(`Body ${body.id} has no lives`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveLife"])(life, family.strip);
}
function outfitFor(family, body, look) {
    const key = `${family.id}|${body.id}|${look.lifeId ?? "bare"}|${look.doors ? 1 : 0}`;
    const hit = cache.get(key);
    if (hit) return hit;
    const bare = look.lifeId === null;
    const b = buildFor(family, body, look);
    const parts = [];
    const props = [];
    b.placements.forEach((pl, i)=>{
        const doors = look.doors || pl.config.storage === "doors";
        const config = doors && pl.product.door && !bare ? {
            ...pl.config,
            storage: "doors"
        } : {
            ...pl.config,
            storage: "open"
        };
        parts.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$house$2f$detail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detailBlocks"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placementBlocks"])({
            key: `${body.id}:${i}`,
            product: pl.product,
            config,
            x: pl.x,
            ...pl.y !== undefined ? {
                y: pl.y
            } : {},
            ...pl.rot ? {
                rot: pl.rot
            } : {}
        }, {
            depthMm: family.strip,
            hideGroups: bare ? DRESS_GROUPS : undefined
        })));
        if (!bare && pl.props && !pl.rot) {
            const py = pl.y ?? family.strip - (pl.product.depth ?? 400);
            // A list of things written for a two-bay body is also used on walls of
            // other widths and stepped heights: what would stand on a shelf that is
            // not there is left out.
            const several = b.placements.length > 1;
            const held = (bl)=>!several || b.placements.some((q)=>!q.rot && bl.x + bl.w / 2 >= q.x && bl.x + bl.w / 2 <= q.x + q.product.width && bl.z <= q.product.height + 300);
            props.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["propBlocks"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$props$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["propsForPiece"])(pl.props, pl.product.height), {
                x: pl.x,
                y: py
            }, `${body.id}:${look.lifeId}:${i}`).filter(held).map((bl)=>({
                    ...bl,
                    hangs: HANGS.has(bl.key.split(":").pop() ?? "")
                })));
        }
    });
    if (!bare) for (const bd of b.boards)parts.push({
        key: `${body.id}:board:${bd.id}:${serial++}`,
        kind: "part",
        partId: bd.id,
        group: "Top",
        x: bd.x,
        y: bd.y,
        z: bd.z,
        w: bd.w,
        d: bd.d,
        h: bd.h,
        color: bd.color ?? "#d9b98c",
        opacity: 1,
        lift: 0,
        holes: null,
        order: serial++,
        ...bd.color ? {
            mat: "paint"
        } : {}
    });
    const out = {
        parts,
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$prop$2d$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["realise"])(props),
        width: b.width,
        depth: b.depth,
        height: b.height,
        left: b.left
    };
    cache.set(key, out);
    return out;
}
const geoKey = (b)=>[
        b.partId,
        b.x,
        b.y,
        b.z,
        b.w,
        b.d,
        b.h,
        b.color,
        b.geo ?? "box"
    ].join("|");
function changeBetween(from, to) {
    if (!from) return {
        kept: to.parts,
        off: [],
        on: []
    };
    const a = new Map(from.parts.map((b)=>[
            geoKey(b),
            b
        ]));
    const b = new Map(to.parts.map((bl)=>[
            geoKey(bl),
            bl
        ]));
    return {
        kept: to.parts.filter((bl)=>a.has(geoKey(bl))),
        on: to.parts.filter((bl)=>!a.has(geoKey(bl))),
        off: from.parts.filter((bl)=>!b.has(geoKey(bl)))
    };
}
/** The bill of parts for a whole build: every placement, plus its boards. */ function billOfBuild(b, doors) {
    const map = new Map();
    const put = (r)=>{
        const old = map.get(r.id);
        if (old) old.quantity += r.quantity;
        else map.set(r.id, {
            ...r
        });
    };
    for (const pl of b.placements){
        const config = (doors || pl.config.storage === "doors") && pl.product.door ? {
            ...pl.config,
            storage: "doors"
        } : {
            ...pl.config,
            storage: "open"
        };
        for (const r of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billOfParts"])(pl.product, config))put(r);
    }
    for (const bd of b.boards)put({
        id: bd.id,
        name: bd.name,
        quantity: 1,
        spec: `${bd.w} × ${bd.d} × ${bd.h} mm`,
        group: "Top",
        kind: "panel"
    });
    return [
        ...map.values()
    ];
}
function tallyBetween(family, body, from, to) {
    const lifeA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lifeOf"])(body, from.lifeId);
    const lifeB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lifeOf"])(body, to.lifeId);
    if (!lifeA || !lifeB) return {
        stay: 0,
        off: 0,
        on: 0,
        offNames: [],
        onNames: []
    };
    const quantity = lifeB.grownFrom === lifeA.id ? lifeB.quantity ?? 1 : 1;
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["difference"])(billOfBuild((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveLife"])(lifeA, family.strip), from.doors), billOfBuild((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveLife"])(lifeB, family.strip), to.doors), quantity);
    const names = (k)=>rows.filter((r)=>r[k] > 0).map((r)=>`${r[k] > 1 ? `${r[k]} × ` : ""}${r.name.toLowerCase()}`);
    return {
        stay: rows.reduce((s, r)=>s + r.kept, 0),
        off: rows.reduce((s, r)=>s + r.removed, 0),
        on: rows.reduce((s, r)=>s + r.added, 0),
        offNames: names("removed"),
        onNames: names("added")
    };
}
function buildCounts(b) {
    let parts = 0;
    let bolts = 0;
    let minutes = 0;
    let people = 1;
    for (const pl of b.placements){
        const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["counts"])(pl.product, pl.config);
        parts += c.parts;
        bolts += c.bolts;
        minutes += c.minutes;
        if (c.people === 2) people = 2;
    }
    parts += b.boards.length;
    if (b.placements.length > 1) people = 2;
    return {
        parts,
        bolts,
        minutes,
        people
    };
}
}),
"[project]/src/features/family/prop-models.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRACO",
    ()=>DRACO,
    "modelUrl",
    ()=>modelUrl,
    "realise",
    ()=>realise
]);
const DRACO = "/draco/";
const modelUrl = (id)=>`/models/${id}.glb`;
const nameOf = (b)=>b.key.split(":").pop() ?? "";
const mid = (b)=>[
        b.x + b.w / 2,
        b.y + b.d / 2
    ];
const near = (a, b, reach)=>{
    const [ax, ay] = mid(a);
    const [bx, by] = mid(b);
    return Math.abs(ax - bx) < reach && Math.abs(ay - by) < reach;
};
/** one real thing, and the stand-in blocks it replaces */ const SWAPS = [
    // a pot with a ball of leaves is a plant
    {
        base: "plant",
        with: [
            "leaves"
        ],
        model: "potted_plant_04",
        reach: 160
    },
    // a vase keeps its own size; the ball of "stems" above it goes
    {
        base: "vase",
        with: [
            "stems"
        ],
        model: "ceramic_vase_01",
        reach: 160,
        own: true
    },
    {
        base: "laptop",
        with: [
            "screen"
        ],
        model: "classic_laptop",
        reach: 260,
        turn: Math.PI
    },
    {
        base: "basket",
        with: [],
        model: "wicker_basket_01",
        reach: 0
    },
    /* A trough of earth, with the bush left to grow out of it: `with` is empty
     on purpose, so the leaves above are not swallowed by the box. */ {
        base: "planter",
        with: [],
        model: "planter_box_02",
        reach: 0
    },
    /* No model for a lamp. desk_lamp_arm_01 is an articulated arm, and fitted
     into the upright box that a base, a stem and a shade make, it comes out
     stretched and hanging over the back corner. The three stand-ins read as a
     lamp; the real one did not. */ // cardboard: what a cabinet keeps, and what a child's toys live in
    {
        base: "toy box",
        with: [],
        model: "cardboard_box_01",
        reach: 0
    },
    {
        base: "cushion",
        with: [],
        model: "throw_pillows_01",
        reach: 0
    }
];
function realise(props) {
    const gone = new Set();
    const out = [];
    for (const p of props){
        const swap = SWAPS.find((s)=>s.base === nameOf(p));
        if (!swap) continue;
        const parts = props.filter((q)=>swap.with.includes(nameOf(q)) && near(p, q, swap.reach));
        for (const q of parts)gone.add(q.key);
        gone.add(p.key);
        const all = swap.own ? [
            p
        ] : [
            p,
            ...parts
        ];
        const x0 = Math.min(...all.map((q)=>q.x));
        const x1 = Math.max(...all.map((q)=>q.x + q.w));
        const y0 = Math.min(...all.map((q)=>q.y));
        const y1 = Math.max(...all.map((q)=>q.y + q.d));
        const top = Math.max(...all.map((q)=>q.z + q.h));
        out.push({
            ...p,
            // the block now stands for the whole thing: the model is fitted inside it
            geo: "box",
            x: x0,
            w: x1 - x0,
            y: y0,
            d: y1 - y0,
            h: top - p.z,
            model: swap.model,
            ...swap.turn !== undefined ? {
                turn: swap.turn
            } : {}
        });
    }
    return [
        ...props.filter((p)=>!gone.has(p.key)),
        ...out
    ];
}
}),
"[project]/src/features/family/street-props.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "streetProps",
    ()=>streetProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/data.ts [app-rsc] (ecmascript)");
;
/** Where each family opens: a room where it is already standing, dressed.
    (The same rooms the page's one move by itself starts from.) */ const firstCase = {
    pieces: "flat.door",
    walls: "family.kids",
    screens: "loft.main"
};
function streetProps(familyId, q) {
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["familyOf"])(familyId);
    if (!f) return null;
    const initialCase = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["places"].find((c)=>c.id === q.case)?.id ?? firstCase[f.id];
    const focus = f.bodies.some((b)=>b.id === q.focus) ? q.focus ?? null : null;
    // a version named by the shop: the frame arrives wearing it
    const life = f.bodies.find((b)=>b.id === focus)?.lives.find((l)=>l.id === q.life && l.caseId === initialCase)?.id ?? null;
    return {
        familyId: f.id,
        initialCase,
        initialFocus: focus,
        initialJob: typeof q.job === "string" ? q.job : null,
        initialLife: life,
        given: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["places"].some((c)=>c.id === q.case)
    };
}
}),
"[project]/src/features/family/town.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOUNDS",
    ()=>BOUNDS,
    "CLOSE",
    ()=>CLOSE,
    "CUT_H",
    ()=>CUT_H,
    "KEEP_D",
    ()=>KEEP_D,
    "NORTH_H",
    ()=>NORTH_H,
    "ROADS",
    ()=>ROADS,
    "SKINS",
    ()=>SKINS,
    "WALL_T",
    ()=>WALL_T,
    "allRooms",
    ()=>allRooms,
    "art",
    ()=>art,
    "defaultKind",
    ()=>defaultKind,
    "floorLines",
    ()=>floorLines,
    "floorWords",
    ()=>floorWords,
    "homeFrame",
    ()=>homeFrame,
    "homeKeeps",
    ()=>homeKeeps,
    "homeModels",
    ()=>homeModels,
    "homeOf",
    ()=>homeOf,
    "homePoint",
    ()=>homePoint,
    "homes",
    ()=>homes,
    "roomFrame",
    ()=>roomFrame,
    "roomOf",
    ()=>roomOf,
    "roomsOf",
    ()=>roomsOf,
    "rugs",
    ()=>rugs,
    "scenery",
    ()=>scenery,
    "standAt",
    ()=>standAt,
    "thresholds",
    ()=>thresholds,
    "worldPoint",
    ()=>worldPoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/three/blocks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$house$2f$furnish$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/house/furnish.ts [app-rsc] (ecmascript)");
;
;
const NORTH_H = 2500;
const CUT_H = 850;
const WALL_T = 100;
const KEEP_D = 2400;
const SKINS = {
    sofa_02: [
        {
            match: "Seat",
            color: "#eadfcc",
            roughness: 0.94
        },
        {
            match: "",
            color: "#dccfb9",
            roughness: 0.92
        }
    ],
    modern_arm_chair_01: [
        {
            match: "pillow",
            color: "#b98a5e",
            roughness: 0.62
        }
    ],
    painted_wooden_chair_02: [
        {
            match: "",
            color: "#dcc09a",
            roughness: 0.6
        }
    ],
    dining_chair_02: [
        {
            match: "",
            color: "#caa57b",
            roughness: 0.66
        }
    ],
    modern_coffee_table_01: [
        {
            match: "",
            color: "#e2c9a4",
            roughness: 0.55
        }
    ]
};
const spot = (id, kind, x, z, rot = 0)=>({
        id,
        kind,
        x,
        z,
        rot
    });
const wall = (x0, z0, x1, z1, kind = "cut")=>({
        x0,
        z0,
        x1,
        z1,
        kind
    });
/** A low wall with doorways: `gaps` are [from, to] along the wall, home mm. */ const doorway = (x0, z0, x1, z1, ...gaps)=>{
    const along = z0 === z1;
    const out = [];
    let from = along ? x0 : z0;
    const end = along ? x1 : z1;
    for (const [a, b] of [
        ...gaps
    ].sort((p, q)=>p[0] - q[0])){
        if (a > from) out.push(along ? wall(from, z0, a, z1) : wall(x0, from, x1, a));
        from = b;
    }
    if (end > from) out.push(along ? wall(from, z0, end, z1) : wall(x0, from, x1, end));
    return out;
};
const homes = [
    {
        id: "flat",
        name: "the flat",
        who: "Two of us. A hallway, a kitchen, a living room, a balcony.",
        origin: {
            x: -15.5,
            z: 14.4
        },
        rot: 4,
        w: 14500,
        d: 4900,
        tone: {
            wall: "#f6f1e8",
            cut: "#f7f3eb"
        },
        rooms: [
            {
                id: "flat.door",
                name: "By the door",
                line: "Coats, keys and shoes stop landing on the chair.",
                home: "flat",
                x0: 0,
                x1: 3400,
                z0: 0,
                z1: 2400,
                floor: "plank",
                keeps: [
                    {
                        id: "door",
                        x: 200
                    }
                ],
                models: [
                    {
                        id: "painted_wooden_chair_02",
                        x: 2950,
                        z: 480,
                        rot: 200
                    },
                    {
                        id: "cardboard_box_01",
                        x: 1500,
                        z: 1950,
                        rot: 12
                    },
                    {
                        id: "cardboard_box_01",
                        x: 1950,
                        z: 2000,
                        rot: -25,
                        scale: 0.85
                    }
                ],
                spots: [
                    spot("beside-door", "wall", 1250, 0),
                    spot("next", "wall", 1950, 0),
                    spot("left-wall", "wall", 100, 2300, 90),
                    spot("right-wall", "wall", 3300, 1000, 270),
                    spot("floor", "floor", 500, 1000)
                ]
            },
            {
                id: "flat.kitchen",
                name: "In the kitchen",
                line: "More counter when you cook, out of the way when you don't.",
                home: "flat",
                x0: 3500,
                x1: 7300,
                z0: 0,
                z1: 2400,
                floor: "plaster",
                keeps: [
                    {
                        id: "counter",
                        x: 3700
                    }
                ],
                models: [
                    {
                        id: "ceramic_vase_01",
                        x: 4300,
                        z: 250,
                        h: 900
                    }
                ],
                spots: [
                    spot("end-of-counter", "wall", 5300, 0),
                    spot("corner", "wall", 5950, 0),
                    spot("wall-end", "wall", 6600, 0),
                    spot("floor", "floor", 4300, 1000)
                ]
            },
            {
                id: "flat.living",
                name: "In the living room",
                line: "Cables, remotes and the things with no home go behind a door.",
                home: "flat",
                x0: 7400,
                x1: 12400,
                z0: 0,
                z1: 2400,
                floor: "plank",
                keeps: [
                    {
                        id: "tv",
                        x: 10850
                    }
                ],
                models: [
                    {
                        id: "sofa_02",
                        x: 8550,
                        z: 720
                    },
                    {
                        id: "modern_coffee_table_01",
                        x: 8550,
                        z: 1750
                    },
                    {
                        id: "book_encyclopedia_set_01",
                        x: 8550,
                        z: 1750,
                        h: 430,
                        scale: 0.7
                    },
                    {
                        id: "modern_arm_chair_01",
                        x: 10050,
                        z: 1500,
                        rot: -35
                    },
                    {
                        id: "potted_plant_04",
                        x: 12100,
                        z: 420
                    }
                ],
                spots: [
                    spot("under-tv", "wall", 10500, 0),
                    spot("sofa-side", "wall", 9500, 0),
                    spot("floor", "floor", 7600, 1000),
                    spot("corner", "floor", 10600, 1300)
                ]
            },
            {
                id: "flat.balcony",
                name: "On the balcony",
                line: "A cart that goes out for the evening and comes back in.",
                home: "flat",
                x0: 12500,
                x1: 14500,
                z0: 0,
                z1: 2400,
                floor: "plaster",
                keeps: [
                    {
                        id: "rail",
                        x: 12500
                    }
                ],
                models: [
                    {
                        id: "potted_plant_04",
                        x: 14100,
                        z: 450,
                        scale: 1.15
                    }
                ],
                spots: [
                    spot("by-the-rail", "wall", 12800, 0),
                    spot("floor", "floor", 12700, 900)
                ]
            },
            {
                id: "flat.bath",
                name: "In the bathroom",
                line: "Towels, bottles and the laundry basket, off the floor.",
                home: "flat",
                x0: 0,
                x1: 2400,
                z0: 2500,
                z1: 4900,
                floor: "plaster",
                keeps: [
                    {
                        id: "basin",
                        x: 200
                    },
                    {
                        id: "washer",
                        x: 1000
                    }
                ],
                spots: [
                    spot("beside-washer", "wall", 1700, 0),
                    spot("floor", "floor", 600, 1100)
                ]
            },
            {
                id: "flat.bed",
                name: "Beside the bed",
                line: "The phone, the book and tomorrow's clothes each get a place.",
                home: "flat",
                x0: 2500,
                x1: 6300,
                z0: 2500,
                z1: 4900,
                floor: "plank",
                keeps: [
                    {
                        id: "bed",
                        x: 2700
                    }
                ],
                spots: [
                    spot("bedside", "wall", 4300, 0),
                    spot("stand", "wall", 4950, 0),
                    spot("floor", "floor", 4400, 900)
                ]
            },
            {
                id: "flat.child",
                name: "In the child's room",
                line: "One room, two children, or one child and a lot of toys.",
                home: "flat",
                x0: 6400,
                x1: 9800,
                z0: 2500,
                z1: 4900,
                floor: "plank",
                keeps: [
                    {
                        id: "smallbed",
                        x: 6600
                    }
                ],
                models: [
                    {
                        id: "wicker_basket_01",
                        x: 9250,
                        z: 1850,
                        rot: 30
                    }
                ],
                spots: [
                    spot("bedside", "wall", 7650, 0),
                    spot("next", "wall", 8300, 0),
                    spot("floor", "floor", 7700, 1000)
                ]
            },
            {
                id: "flat.desk",
                name: "At the desk",
                line: "The desk stays. What piles up on it moves beside it.",
                home: "flat",
                x0: 9900,
                x1: 14500,
                z0: 2500,
                z1: 4900,
                floor: "plank",
                keeps: [
                    {
                        id: "desk",
                        x: 10100
                    }
                ],
                models: [
                    {
                        id: "dining_chair_02",
                        x: 10700,
                        z: 1250,
                        rot: 195
                    },
                    {
                        id: "classic_laptop",
                        x: 10800,
                        z: 320,
                        h: 735,
                        rot: 180
                    },
                    {
                        id: "desk_lamp_arm_01",
                        x: 10250,
                        z: 220,
                        h: 735,
                        rot: 20
                    }
                ],
                spots: [
                    spot("beside-desk", "wall", 11400, 0),
                    spot("cart", "wall", 12050, 0),
                    spot("floor", "floor", 11800, 1300)
                ]
            }
        ],
        walls: [
            wall(-100, -50, 12450, -50, "full"),
            wall(-50, -100, -50, 4900),
            // the rooms open onto each other: a wall with a doorway is two walls
            ...doorway(-100, 2450, 14600, 2450, [
                5500,
                6300
            ], [
                8950,
                9750
            ], [
                13300,
                14100
            ]),
            ...doorway(3450, 0, 3450, 2400, [
                1500,
                2300
            ]),
            ...doorway(7350, 0, 7350, 2400, [
                1500,
                2300
            ]),
            ...doorway(12450, 0, 12450, 2400, [
                1300,
                2200
            ]),
            ...doorway(2450, 2500, 2450, 4900, [
                3900,
                4700
            ]),
            wall(6350, 2500, 6350, 4900),
            wall(9850, 2500, 9850, 4900),
            wall(14550, 2500, 14550, 4900)
        ]
    },
    {
        id: "studio",
        name: "the studio",
        who: "One person, one room. The bed, the desk and the kitchen share it.",
        origin: {
            x: -9.6,
            z: -0.8
        },
        rot: 9,
        w: 6400,
        d: 5200,
        tone: {
            wall: "#f4eee3",
            cut: "#f6f1e7"
        },
        rooms: [
            {
                id: "studio.room",
                name: "The one room",
                line: "Everything happens in here: sleeping, working, calls, cooking.",
                home: "studio",
                x0: 0,
                x1: 6400,
                z0: 0,
                z1: 3800,
                floor: "plank",
                keeps: [
                    {
                        id: "bed",
                        x: 200
                    },
                    {
                        id: "desk",
                        x: 2000
                    },
                    {
                        id: "counter",
                        x: 4800
                    }
                ],
                models: [
                    {
                        id: "dining_chair_02",
                        x: 2600,
                        z: 1100,
                        rot: 190
                    },
                    {
                        id: "classic_laptop",
                        x: 2600,
                        z: 300,
                        h: 735,
                        rot: 180
                    },
                    {
                        id: "potted_plant_04",
                        x: 5250,
                        z: 3450,
                        scale: 0.9
                    },
                    {
                        id: "painted_wooden_chair_02",
                        x: 900,
                        z: 3300,
                        rot: 120
                    }
                ],
                spots: [
                    spot("beside-desk", "wall", 3250, 0),
                    spot("kitchen-end", "wall", 3900, 0),
                    spot("by-the-door", "wall", 200, 3300, 90),
                    spot("between", "floor", 1750, 900, 90),
                    spot("behind-chair", "floor", 2400, 2300),
                    // 1800 of folding screen along the east wall has to end before the bathroom
                    spot("folded", "floor", 6000, 1850, 270)
                ]
            },
            {
                id: "studio.bath",
                name: "The bathroom",
                line: "A basin and a shower, and nowhere for the towels.",
                home: "studio",
                x0: 4400,
                x1: 6400,
                z0: 3900,
                z1: 5200,
                floor: "plaster",
                keeps: [
                    {
                        id: "basin",
                        x: 4600
                    }
                ],
                spots: [
                    spot("beside-basin", "wall", 5400, 0)
                ]
            }
        ],
        walls: [
            wall(-100, -50, 6500, -50, "full"),
            // the west wall ends with the room: in front of it on that side is garden
            wall(-50, -100, -50, 3850),
            wall(6450, -100, 6450, 5200),
            ...doorway(4350, 3850, 4350, 5200, [
                4250,
                5050
            ]),
            wall(4400, 3850, 6400, 3850)
        ]
    },
    {
        id: "loft",
        name: "the loft",
        who: "Three flatmates who all work from home, in one big room.",
        origin: {
            x: 8,
            z: -4.6
        },
        rot: -5,
        w: 12000,
        d: 8000,
        tone: {
            wall: "#f5f0e7",
            cut: "#f7f3ec"
        },
        rooms: [
            {
                id: "loft.main",
                name: "The big room",
                line: "Sofa, desks and kitchen in one space, and no way to close any of it.",
                home: "loft",
                x0: 0,
                x1: 9500,
                z0: 0,
                z1: 8000,
                floor: "plaster",
                keeps: [
                    {
                        id: "desk",
                        x: 200
                    },
                    {
                        id: "desk",
                        x: 1500
                    },
                    {
                        id: "desk",
                        x: 2800
                    },
                    {
                        id: "counter",
                        x: 5200
                    },
                    {
                        id: "counter",
                        x: 6700
                    },
                    {
                        id: "tv",
                        x: 8300
                    }
                ],
                models: [
                    {
                        id: "dining_chair_02",
                        x: 800,
                        z: 1150,
                        rot: 180
                    },
                    {
                        id: "dining_chair_02",
                        x: 2100,
                        z: 1200,
                        rot: 172
                    },
                    {
                        id: "dining_chair_02",
                        x: 3400,
                        z: 1150,
                        rot: 188
                    },
                    {
                        id: "classic_laptop",
                        x: 800,
                        z: 300,
                        h: 735,
                        rot: 180
                    },
                    {
                        id: "classic_laptop",
                        x: 3400,
                        z: 300,
                        h: 735,
                        rot: 180
                    },
                    {
                        id: "desk_lamp_arm_01",
                        x: 2300,
                        z: 220,
                        h: 735,
                        rot: 30
                    },
                    {
                        id: "sofa_02",
                        x: 4000,
                        z: 4300,
                        rot: 180
                    },
                    {
                        id: "modern_coffee_table_01",
                        x: 4000,
                        z: 5700
                    },
                    {
                        id: "book_encyclopedia_set_01",
                        x: 4000,
                        z: 5700,
                        h: 430,
                        scale: 0.7
                    },
                    {
                        id: "modern_arm_chair_01",
                        x: 6300,
                        z: 5300,
                        rot: 215
                    },
                    {
                        id: "potted_plant_04",
                        x: 9100,
                        z: 7500
                    },
                    {
                        id: "potted_plant_04",
                        x: 300,
                        z: 7600,
                        scale: 0.8
                    },
                    {
                        id: "ceramic_vase_01",
                        x: 5800,
                        z: 250,
                        h: 900
                    }
                ],
                spots: [
                    spot("behind-sofa", "floor", 3100, 3250),
                    spot("middle", "floor", 5900, 2600),
                    spot("corner", "floor", 200, 5200),
                    spot("window", "floor", 7200, 6600),
                    spot("kitchen", "floor", 5300, 1700),
                    spot("party", "floor", 8000, 3700, 90),
                    spot("desk-end", "wall", 4200, 0),
                    spot("north-end", "wall", 4800, 0)
                ]
            },
            {
                id: "loft.bath",
                name: "The bathroom",
                line: "Three people's towels and one rail.",
                home: "loft",
                x0: 9600,
                x1: 12000,
                z0: 0,
                z1: 2000,
                floor: "plaster",
                keeps: [
                    {
                        id: "basin",
                        x: 9800
                    },
                    {
                        id: "washer",
                        x: 10700
                    }
                ],
                spots: [
                    spot("beside-washer", "wall", 11400, 0)
                ]
            },
            {
                id: "loft.bed",
                name: "The small bedroom",
                line: "A bed, a window and nothing else.",
                home: "loft",
                x0: 9600,
                x1: 12000,
                z0: 2100,
                z1: 8000,
                floor: "plaster",
                keeps: [
                    {
                        id: "bed",
                        x: 9800
                    }
                ],
                spots: [
                    spot("bedside", "wall", 11400, 0),
                    spot("floor", "floor", 9800, 2400)
                ]
            }
        ],
        walls: [
            wall(-100, -50, 12100, -50, "full"),
            wall(-50, -100, -50, 8000),
            wall(12050, -100, 12050, 8000),
            ...doorway(9550, 0, 9550, 8000, [
                1000,
                1800
            ], [
                4200,
                5100
            ]),
            wall(9600, 2050, 12000, 2050)
        ]
    },
    {
        id: "family",
        name: "the family house",
        who: "Parents, two children and a cat. A hallway, three bedrooms and a garden.",
        origin: {
            x: -3.3,
            z: -28.8
        },
        rot: 0,
        w: 13000,
        d: 9000,
        tone: {
            wall: "#f6efe3",
            cut: "#f7f2e8"
        },
        rooms: [
            {
                id: "family.hall",
                name: "The hallway",
                line: "Shoes, school bags, the pram and the cat, all in one corridor.",
                home: "family",
                x0: 0,
                x1: 3000,
                z0: 0,
                z1: 4600,
                floor: "plank",
                keeps: [
                    {
                        id: "door",
                        x: 1050
                    }
                ],
                models: [
                    {
                        id: "wicker_basket_01",
                        x: 2600,
                        z: 4200,
                        rot: 15,
                        scale: 0.9
                    }
                ],
                spots: [
                    spot("hall-wall", "wall", 100, 0),
                    spot("hall-side", "wall", 100, 4400, 90),
                    spot("hall-floor", "floor", 300, 1600)
                ]
            },
            {
                id: "family.kids",
                name: "The children's room",
                line: "Two beds, one room, no line between them.",
                home: "family",
                x0: 3100,
                x1: 8000,
                z0: 0,
                z1: 4600,
                floor: "plank",
                keeps: [
                    {
                        id: "smallbed",
                        x: 3300
                    },
                    {
                        id: "smallbed",
                        x: 6000
                    }
                ],
                models: [
                    {
                        id: "wicker_basket_01",
                        x: 5200,
                        z: 3900,
                        rot: -20
                    }
                ],
                spots: [
                    spot("kids-floor", "floor", 4500, 1200, 90),
                    spot("kids-corner", "floor", 4400, 2800),
                    spot("kids-wall", "wall", 7350, 0),
                    spot("kids-door", "floor", 3200, 4000)
                ]
            },
            {
                id: "family.parents",
                name: "The parents' bedroom",
                line: "A bed and a chair, and clothes on the chair.",
                home: "family",
                x0: 8100,
                x1: 13000,
                z0: 0,
                z1: 4600,
                floor: "plank",
                keeps: [
                    {
                        id: "bed",
                        x: 8300
                    }
                ],
                models: [
                    {
                        id: "painted_wooden_chair_02",
                        x: 12400,
                        z: 3800,
                        rot: 150
                    }
                ],
                spots: [
                    spot("parents-wall", "wall", 9900, 0),
                    spot("parents-floor", "floor", 10200, 1800),
                    spot("parents-corner", "floor", 12300, 3600, 270)
                ]
            },
            {
                id: "family.living",
                name: "The living room",
                line: "The sofa, the toys, and the friend who stays the night.",
                home: "family",
                x0: 0,
                x1: 6000,
                z0: 4700,
                z1: 9000,
                floor: "plank",
                keeps: [],
                models: [
                    {
                        id: "sofa_02",
                        x: 3000,
                        z: 2100
                    },
                    {
                        id: "modern_coffee_table_01",
                        x: 3000,
                        z: 3300
                    },
                    {
                        id: "potted_plant_04",
                        x: 5600,
                        z: 400
                    }
                ],
                spots: [
                    spot("living-corner", "floor", 200, 200),
                    spot("living-floor", "floor", 3600, 2700),
                    spot("living-wall", "wall", 200, 0)
                ]
            }
        ],
        walls: [
            wall(-100, -50, 13100, -50, "full"),
            wall(-50, -100, -50, 9000),
            wall(13050, -100, 13050, 4600),
            ...doorway(3050, 0, 3050, 4600, [
                3500,
                4350
            ]),
            ...doorway(8050, 0, 8050, 4600, [
                3500,
                4350
            ]),
            ...doorway(-100, 4650, 13100, 4650, [
                1100,
                2000
            ]),
            ...doorway(6050, 4700, 6050, 9000, [
                6400,
                7500
            ])
        ]
    },
    {
        id: "workshop",
        name: "our workshop",
        who: "Where the panels are cut and the boxes are packed. Ours.",
        origin: {
            x: 5.5,
            z: 14.6
        },
        rot: -8,
        w: 8000,
        d: 5600,
        tone: {
            wall: "#f3ede2",
            cut: "#f5f0e6"
        },
        rooms: [
            {
                id: "workshop.floor",
                name: "The workshop",
                line: "Sheets come in, the router cuts twelve panels from each, and today's orders go out in boxes.",
                home: "workshop",
                x0: 0,
                x1: 8000,
                z0: 0,
                z1: 5600,
                floor: "plaster",
                keeps: [
                    {
                        id: "workbench",
                        x: 4650
                    }
                ],
                floorKeeps: [
                    {
                        id: "sheetstack",
                        x: 180,
                        z: 1450
                    },
                    {
                        id: "cnc",
                        x: 2300,
                        z: 3800
                    },
                    {
                        id: "partscart",
                        x: 5950,
                        z: 1900
                    },
                    {
                        id: "panelrack",
                        x: 6480,
                        z: 3350
                    },
                    {
                        id: "packing",
                        x: 250,
                        z: 4560
                    },
                    {
                        id: "boxpallet",
                        x: 3350,
                        z: 120
                    }
                ],
                models: [
                    {
                        id: "rollershutter_door",
                        x: 1250,
                        z: 160,
                        scale: 0.95
                    },
                    {
                        id: "metal_stool_01",
                        x: 5700,
                        z: 1350,
                        rot: 30
                    },
                    {
                        id: "classic_laptop",
                        x: 6500,
                        z: 330,
                        h: 905,
                        rot: 180,
                        scale: 0.9
                    },
                    {
                        id: "desk_lamp_arm_01",
                        x: 4900,
                        z: 250,
                        h: 905,
                        rot: 25
                    }
                ],
                spots: [
                    spot("window", "wall", 2600, 0),
                    spot("stand", "wall", 7250, 0),
                    spot("floor", "floor", 5300, 2600),
                    spot("niche", "floor", 2300, 3300),
                    spot("bench-side", "floor", 3300, 2200)
                ]
            }
        ],
        walls: [
            wall(-100, -50, 8100, -50, "full"),
            wall(-50, -100, -50, 5600),
            wall(8050, -100, 8050, 5600)
        ]
    }
];
/* What makes rooms read as lived in rather than as a plan: something soft on
   the floor where people sit and sleep, something framed on the tall walls. */ const OAT = "#d9ccb4";
const SAND = "#cfb995";
const CLAY = "#cc9f80";
const SAGE = "#b4bb9a";
const rugs = [
    {
        room: "flat.door",
        x: 1900,
        z: 1350,
        w: 2300,
        d: 800,
        tone: SAND
    },
    {
        room: "flat.living",
        x: 9050,
        z: 1550,
        w: 2700,
        d: 1500,
        tone: OAT
    },
    {
        room: "flat.bed",
        x: 5050,
        z: 1350,
        w: 1000,
        d: 1700,
        tone: OAT
    },
    {
        room: "flat.child",
        x: 8300,
        z: 1600,
        w: 1600,
        d: 1100,
        tone: CLAY
    },
    {
        room: "flat.desk",
        x: 10850,
        z: 1300,
        w: 1700,
        d: 1200,
        tone: SAGE
    },
    {
        room: "studio.room",
        x: 3100,
        z: 2500,
        w: 2600,
        d: 1600,
        tone: OAT
    },
    {
        room: "loft.main",
        x: 4800,
        z: 5300,
        w: 3800,
        d: 2500,
        tone: OAT
    },
    {
        room: "loft.bed",
        x: 10750,
        z: 3000,
        w: 1900,
        d: 1200,
        tone: SAND
    },
    {
        room: "family.hall",
        x: 1500,
        z: 2500,
        w: 900,
        d: 2800,
        tone: SAND
    },
    {
        room: "family.kids",
        x: 5350,
        z: 2900,
        w: 1900,
        d: 1500,
        tone: CLAY
    },
    {
        room: "family.parents",
        x: 10500,
        z: 3100,
        w: 2300,
        d: 1300,
        tone: OAT
    },
    {
        room: "family.living",
        x: 3000,
        z: 2800,
        w: 3200,
        d: 2000,
        tone: SAGE
    }
];
const frame = (room, x0, z0, x1, z1, t = 50)=>[
        {
            room,
            x: x0,
            z: z0,
            w: x1 - x0,
            d: t
        },
        {
            room,
            x: x0,
            z: z1 - t,
            w: x1 - x0,
            d: t
        },
        {
            room,
            x: x0,
            z: z0,
            w: t,
            d: z1 - z0
        },
        {
            room,
            x: x1 - t,
            z: z0,
            w: t,
            d: z1 - z0
        }
    ];
const floorLines = [
    // keep clear in front of the shutter
    ...frame("workshop.floor", 150, 120, 2350, 1250),
    // where the sheets stand
    ...frame("workshop.floor", 90, 1350, 1560, 4060),
    // round the router
    ...frame("workshop.floor", 2100, 3560, 6350, 5560)
];
const floorWords = [
    {
        room: "workshop.floor",
        x: 330,
        z: 860,
        text: "IN / OUT",
        size: 230
    },
    {
        room: "workshop.floor",
        x: 4750,
        z: 1700,
        text: "FINISH",
        size: 230
    }
];
const art = [
    {
        room: "flat.door",
        x: 2950,
        y: 1620,
        w: 480,
        h: 640,
        pic: 1
    },
    {
        room: "flat.living",
        x: 8550,
        y: 1720,
        w: 1300,
        h: 860,
        pic: 0
    },
    {
        room: "studio.room",
        x: 1050,
        y: 1720,
        w: 1000,
        h: 700,
        pic: 2
    },
    {
        room: "loft.main",
        x: 800,
        y: 1760,
        w: 460,
        h: 600,
        pic: 1
    },
    {
        room: "loft.main",
        x: 2100,
        y: 1760,
        w: 460,
        h: 600,
        pic: 3
    },
    {
        room: "loft.main",
        x: 3400,
        y: 1760,
        w: 460,
        h: 600,
        pic: 2
    },
    {
        room: "family.kids",
        x: 3800,
        y: 1560,
        w: 600,
        h: 600,
        pic: 3
    },
    {
        room: "family.kids",
        x: 6500,
        y: 1560,
        w: 600,
        h: 600,
        pic: 1
    },
    {
        room: "family.parents",
        x: 9200,
        y: 1760,
        w: 1300,
        h: 820,
        pic: 0
    },
    // working drawings pinned over the bench
    {
        room: "workshop.floor",
        x: 5150,
        y: 1700,
        w: 700,
        h: 500,
        pic: 4
    },
    {
        room: "workshop.floor",
        x: 6050,
        y: 1700,
        w: 700,
        h: 500,
        pic: 4
    }
];
function thresholds(h) {
    const out = [];
    const lines = new Map();
    for (const w of h.walls){
        const along = w.z0 === w.z1;
        const key = along ? `z${w.z0}` : `x${w.x0}`;
        lines.set(key, [
            ...lines.get(key) ?? [],
            w
        ]);
    }
    for (const [key, list] of lines){
        const along = key.startsWith("z");
        const sorted = [
            ...list
        ].sort((p, q)=>along ? p.x0 - q.x0 : p.z0 - q.z0);
        for(let i = 0; i + 1 < sorted.length; i++){
            const a = sorted[i];
            const b = sorted[i + 1];
            const from = along ? a.x1 : a.z1;
            const to = along ? b.x0 : b.z0;
            if (to - from < 500 || to - from > 1400) continue;
            out.push(along ? {
                x: (from + to) / 2,
                z: a.z0,
                w: to - from,
                d: WALL_T
            } : {
                x: a.x0,
                z: (from + to) / 2,
                w: WALL_T,
                d: to - from
            });
        }
    }
    return out;
}
const homeOf = (id)=>homes.find((h)=>h.id === id);
const allRooms = homes.flatMap((h)=>h.rooms);
const roomOf = (id)=>allRooms.find((r)=>r.id === id);
const roomsOf = (home)=>homes.find((h)=>h.id === home)?.rooms ?? [];
function homePoint(h, lx, lz) {
    const r = h.rot * Math.PI / 180;
    const c = Math.cos(r);
    const s = Math.sin(r);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mm"])(lx);
    const z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mm"])(lz);
    return [
        h.origin.x + x * c + z * s,
        h.origin.z - x * s + z * c
    ];
}
function standAt(r, s) {
    const h = homeOf(r.home);
    if (!h) throw new Error(`Room ${r.id} has no home`);
    const [x, z] = homePoint(h, s.x, r.z0 + s.z);
    return {
        x,
        z,
        rot: (h.rot + s.rot) * Math.PI / 180
    };
}
function worldPoint(st, lx, ly, lz) {
    const c = Math.cos(st.rot);
    const s = Math.sin(st.rot);
    return [
        st.x + lx * c + lz * s,
        ly,
        st.z - lx * s + lz * c
    ];
}
function roomFrame(r) {
    const h = homeOf(r.home);
    if (!h) throw new Error(`Room ${r.id} has no home`);
    const [x, z] = homePoint(h, (r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2);
    return {
        x,
        z,
        wide: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mm"])(r.x1 - r.x0),
        deep: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mm"])(r.z1 - r.z0)
    };
}
function homeFrame(h) {
    const [x, z] = homePoint(h, h.w / 2, h.d / 2);
    return {
        x,
        z,
        wide: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mm"])(h.w),
        deep: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$three$2f$blocks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mm"])(h.d)
    };
}
const defaultKind = (family)=>family === "pieces" ? "wall" : "floor";
/* ---------- furniture the homes already have, beyond the house site's own ---------- */ const wood = "#c8a67a";
const linen = "#ede5d7";
const pillow = "#f7f2ea";
const white = "#f6f1ea";
const steel = "#c9cbcc";
const legDark = "#2f2b28";
const green = "#6d8b5a";
const clay = "#b9866a";
function more(id, x, D) {
    switch(id){
        case "basin":
            return [
                // the cabinet, in the home's own oak, with two doors and their pulls
                {
                    x,
                    y: D - 470,
                    z: 80,
                    w: 600,
                    d: 470,
                    h: 700,
                    color: wood,
                    mat: "wood"
                },
                {
                    x: x + 40,
                    y: D - 440,
                    z: 0,
                    w: 520,
                    d: 400,
                    h: 80,
                    color: "#3a3633",
                    mat: "matte"
                },
                {
                    x: x + 296,
                    y: D - 474,
                    z: 100,
                    w: 8,
                    d: 6,
                    h: 660,
                    color: "#8a6a48",
                    mat: "matte"
                },
                {
                    x: x + 250,
                    y: D - 486,
                    z: 560,
                    w: 14,
                    d: 14,
                    h: 120,
                    color: steel,
                    mat: "metal"
                },
                {
                    x: x + 336,
                    y: D - 486,
                    z: 560,
                    w: 14,
                    d: 14,
                    h: 120,
                    color: steel,
                    mat: "metal"
                },
                // the ceramic top, and the bowl let into it
                {
                    x: x - 20,
                    y: D - 510,
                    z: 780,
                    w: 640,
                    d: 510,
                    h: 110,
                    color: white,
                    mat: "ceramic"
                },
                {
                    x: x + 110,
                    y: D - 440,
                    z: 868,
                    w: 420,
                    d: 300,
                    h: 24,
                    color: "#d8d3cb",
                    mat: "ceramic"
                },
                // the tap: a riser and a spout
                {
                    x: x + 309,
                    y: D - 95,
                    z: 890,
                    w: 22,
                    d: 22,
                    h: 190,
                    color: steel,
                    mat: "metal",
                    geo: "cylinder"
                },
                {
                    x: x + 311,
                    y: D - 215,
                    z: 1062,
                    w: 18,
                    d: 130,
                    h: 18,
                    color: steel,
                    mat: "metal"
                }
            ];
        case "washer":
            return [
                {
                    x,
                    y: D - 600,
                    z: 0,
                    w: 600,
                    d: 600,
                    h: 850,
                    color: white,
                    mat: "paint"
                },
                // the door: a steel ring and dark glass, flat on the front
                {
                    x: x + 95,
                    y: D - 612,
                    z: 215,
                    w: 410,
                    d: 14,
                    h: 410,
                    color: "#c9cdd0",
                    mat: "metal",
                    geo: "cylinder",
                    axis: "y"
                },
                {
                    x: x + 135,
                    y: D - 618,
                    z: 255,
                    w: 330,
                    d: 10,
                    h: 330,
                    color: "#2c3136",
                    mat: "screen",
                    geo: "cylinder",
                    axis: "y"
                },
                // the panel: a drawer, a dial, a small display
                {
                    x: x + 30,
                    y: D - 604,
                    z: 730,
                    w: 190,
                    d: 6,
                    h: 80,
                    color: "#e9e6e1",
                    mat: "matte"
                },
                {
                    x: x + 265,
                    y: D - 612,
                    z: 735,
                    w: 70,
                    d: 14,
                    h: 70,
                    color: "#c9cdd0",
                    mat: "metal",
                    geo: "cylinder",
                    axis: "y"
                },
                {
                    x: x + 380,
                    y: D - 604,
                    z: 748,
                    w: 170,
                    d: 6,
                    h: 44,
                    color: "#2c3136",
                    mat: "screen"
                }
            ];
        /* ---- the workshop's own: what panels are cut, stacked and packed on ---- */ case "workbench":
            {
                const out = [
                    // a birch top on a dark steel frame, with a shelf under it
                    {
                        x,
                        y: D - 900,
                        z: 860,
                        w: 2400,
                        d: 900,
                        h: 45,
                        color: "#d9b98c",
                        mat: "ply"
                    },
                    {
                        x: x + 60,
                        y: D - 840,
                        z: 220,
                        w: 2280,
                        d: 780,
                        h: 18,
                        color: "#d9b98c",
                        mat: "ply"
                    }
                ];
                for (const [lx, ly] of [
                    [
                        40,
                        40
                    ],
                    [
                        2310,
                        40
                    ],
                    [
                        40,
                        810
                    ],
                    [
                        2310,
                        810
                    ]
                ])out.push({
                    x: x + lx,
                    y: D - 900 + ly,
                    z: 0,
                    w: 50,
                    d: 50,
                    h: 860,
                    color: "#3a3633",
                    mat: "matte"
                });
                // a panel on the bench, and the one key beside it
                out.push({
                    x: x + 520,
                    y: D - 800,
                    z: 905,
                    w: 1200,
                    d: 600,
                    h: 18,
                    color: "#d9b98c",
                    mat: "ply"
                });
                out.push({
                    x: x + 1900,
                    y: D - 620,
                    z: 905,
                    w: 70,
                    d: 8,
                    h: 8,
                    color: "#e7551a",
                    mat: "paint"
                });
                out.push({
                    x: x + 1962,
                    y: D - 620,
                    z: 905,
                    w: 8,
                    d: 60,
                    h: 8,
                    color: "#e7551a",
                    mat: "paint"
                });
                // boxes of bolts on the shelf
                for(let i = 0; i < 3; i++)out.push({
                    x: x + 200 + i * 420,
                    y: D - 700,
                    z: 238,
                    w: 340,
                    d: 260,
                    h: 160,
                    color: "#c9a877",
                    mat: "matte"
                });
                return out;
            }
        case "panelstack":
            {
                // a pallet, and cut panels stacked on it: each sheet sits a hair off the last
                const out = [
                    {
                        x,
                        y: D - 760,
                        z: 0,
                        w: 1340,
                        d: 760,
                        h: 110,
                        color: "#b89468",
                        mat: "wood"
                    }
                ];
                for(let i = 0; i < 20; i++){
                    const dx = i * 37 % 13 - 6;
                    const dy = i * 53 % 11 - 5;
                    out.push({
                        x: x + 60 + dx,
                        y: D - 700 + dy,
                        z: 110 + i * 18.5,
                        w: 1220,
                        d: 620,
                        h: 18,
                        color: "#d9b98c",
                        mat: "ply"
                    });
                }
                return out;
            }
        case "panelrack":
            {
                // board standing on edge in a steel rack, a finger apart
                const out = [
                    {
                        x,
                        y: D - 640,
                        z: 0,
                        w: 1400,
                        d: 640,
                        h: 60,
                        color: "#3a3633",
                        mat: "matte"
                    },
                    {
                        x,
                        y: D - 640,
                        z: 60,
                        w: 40,
                        d: 40,
                        h: 1100,
                        color: "#3a3633",
                        mat: "matte"
                    },
                    {
                        x: x + 1360,
                        y: D - 640,
                        z: 60,
                        w: 40,
                        d: 40,
                        h: 1100,
                        color: "#3a3633",
                        mat: "matte"
                    },
                    {
                        x,
                        y: D - 40,
                        z: 60,
                        w: 40,
                        d: 40,
                        h: 1100,
                        color: "#3a3633",
                        mat: "matte"
                    },
                    {
                        x: x + 1360,
                        y: D - 40,
                        z: 60,
                        w: 40,
                        d: 40,
                        h: 1100,
                        color: "#3a3633",
                        mat: "matte"
                    }
                ];
                for(let i = 0; i < 11; i++)out.push({
                    x: x + 70 + i * 29 % 40,
                    y: D - 600 + i * 52,
                    z: 60,
                    w: 1180 - i * 61 % 3 * 200,
                    d: 18,
                    h: 800 + i * 17 % 3 * 200,
                    color: "#d9b98c",
                    mat: "ply"
                });
                return out;
            }
        case "cnc":
            {
                /* The router the panels are cut on: a flat bed with a bridge over it. On
         the bed lies one birch sheet with its cuts marked: 2440 x 1220 gives
         four by three of our 600 x 400 panel, with a hand of waste. That is
         the whole system, and it is the one place the site can show it. */ const W = 3300;
                const DP = 1750;
                const STEEL = "#dcd6cb";
                const DARK = "#38332f";
                const out = [
                    // plinth, frame, the dark vacuum bed
                    {
                        x: x + 60,
                        y: D - DP + 60,
                        z: 0,
                        w: W - 120,
                        d: DP - 120,
                        h: 90,
                        color: DARK,
                        mat: "matte"
                    },
                    {
                        x,
                        y: D - DP,
                        z: 90,
                        w: W,
                        d: DP,
                        h: 560,
                        color: STEEL,
                        mat: "paint"
                    },
                    {
                        x: x + 40,
                        y: D - DP + 40,
                        z: 650,
                        w: W - 80,
                        d: DP - 80,
                        h: 46,
                        color: DARK,
                        mat: "matte"
                    },
                    // the sheet
                    {
                        x: x + 320,
                        y: D - DP + 265,
                        z: 696,
                        w: 2440,
                        d: 1220,
                        h: 18,
                        color: "#d9b98c",
                        mat: "ply"
                    },
                    // the rails the bridge runs on
                    {
                        x: x + 40,
                        y: D - DP + 10,
                        z: 650,
                        w: W - 80,
                        d: 60,
                        h: 70,
                        color: DARK,
                        mat: "matte"
                    },
                    {
                        x: x + 40,
                        y: D - 70,
                        z: 650,
                        w: W - 80,
                        d: 60,
                        h: 70,
                        color: DARK,
                        mat: "matte"
                    },
                    // the bridge: two legs and a beam, the head on it in the brand's orange
                    {
                        x: x + 1180,
                        y: D - DP - 40,
                        z: 650,
                        w: 240,
                        d: 150,
                        h: 560,
                        color: "#f1ece3",
                        mat: "paint"
                    },
                    {
                        x: x + 1180,
                        y: D - 110,
                        z: 650,
                        w: 240,
                        d: 150,
                        h: 560,
                        color: "#f1ece3",
                        mat: "paint"
                    },
                    {
                        x: x + 1150,
                        y: D - DP - 40,
                        z: 1210,
                        w: 300,
                        d: DP + 80,
                        h: 250,
                        color: "#f1ece3",
                        mat: "paint"
                    },
                    {
                        x: x + 1120,
                        y: D - DP + 520,
                        z: 1010,
                        w: 360,
                        d: 330,
                        h: 470,
                        color: "#e7551a",
                        mat: "paint"
                    },
                    {
                        x: x + 1262,
                        y: D - DP + 647,
                        z: 760,
                        w: 76,
                        d: 76,
                        h: 250,
                        color: DARK,
                        mat: "matte",
                        geo: "cylinder"
                    },
                    // the cable chain along the back, and the desk it is run from
                    {
                        x: x + 60,
                        y: D - DP - 70,
                        z: 560,
                        w: W - 120,
                        d: 60,
                        h: 90,
                        color: DARK,
                        mat: "matte"
                    },
                    {
                        x: x + W + 120,
                        y: D - 560,
                        z: 0,
                        w: 420,
                        d: 420,
                        h: 1020,
                        color: STEEL,
                        mat: "paint"
                    },
                    {
                        x: x + W + 150,
                        y: D - 545,
                        z: 1020,
                        w: 360,
                        d: 40,
                        h: 300,
                        color: DARK,
                        mat: "matte"
                    }
                ];
                // the cuts: three across, four along, drawn on the sheet
                for(let i = 0; i <= 4; i++)out.push({
                    x: x + 320 + 18 + i * 600,
                    y: D - DP + 265 + 8,
                    z: 714,
                    w: 5,
                    d: 1204,
                    h: 1.5,
                    color: "#8a6a44",
                    mat: "matte"
                });
                for(let k = 0; k <= 3; k++)out.push({
                    x: x + 320 + 18,
                    y: D - DP + 265 + 8 + k * 400,
                    z: 714,
                    w: 2404,
                    d: 5,
                    h: 1.5,
                    color: "#8a6a44",
                    mat: "matte"
                });
                return out;
            }
        case "sheetstack":
            {
                // full sheets as they arrive, on a pallet, the long side toward the visitor
                const out = [
                    {
                        x,
                        y: D - 2500,
                        z: 0,
                        w: 1280,
                        d: 2500,
                        h: 120,
                        color: "#b89468",
                        mat: "wood"
                    }
                ];
                for(let i = 0; i < 16; i++){
                    const dx = i * 37 % 9 - 4;
                    const dy = i * 53 % 9 - 4;
                    out.push({
                        x: x + 30 + dx,
                        y: D - 2470 + dy,
                        z: 120 + i * 18.4,
                        w: 1220,
                        d: 2440,
                        h: 18,
                        color: "#d9b98c",
                        mat: "ply"
                    });
                }
                return out;
            }
        case "partscart":
            {
                // cut panels, sorted, on a cart: three piles of our 600 x 400
                const out = [
                    {
                        x,
                        y: D - 760,
                        z: 150,
                        w: 1960,
                        d: 760,
                        h: 40,
                        color: "#38332f",
                        mat: "matte"
                    },
                    {
                        x: x + 1900,
                        y: D - 760,
                        z: 190,
                        w: 40,
                        d: 760,
                        h: 760,
                        color: "#38332f",
                        mat: "matte"
                    }
                ];
                for (const [wx, wy] of [
                    [
                        90,
                        90
                    ],
                    [
                        1790,
                        90
                    ],
                    [
                        90,
                        590
                    ],
                    [
                        1790,
                        590
                    ]
                ])out.push({
                    x: x + wx,
                    y: D - 760 + wy,
                    z: 0,
                    w: 80,
                    d: 80,
                    h: 150,
                    color: "#2f2b28",
                    mat: "matte",
                    geo: "cylinder"
                });
                [
                    14,
                    9,
                    11
                ].forEach((n, pile)=>{
                    for(let i = 0; i < n; i++){
                        const dx = (i * 29 + pile * 7) % 7 - 3;
                        out.push({
                            x: x + 40 + pile * 620 + dx,
                            y: D - 700 + (i * 41 % 7 - 3),
                            z: 190 + i * 18.4,
                            w: 600,
                            d: 400,
                            h: 18,
                            color: "#d9b98c",
                            mat: "ply"
                        });
                    }
                });
                return out;
            }
        case "boxpallet":
            {
                // today's orders: flat boxes, taped in our orange, on a pallet by the door
                const out = [
                    {
                        x,
                        y: D - 900,
                        z: 0,
                        w: 1240,
                        d: 900,
                        h: 120,
                        color: "#b89468",
                        mat: "wood"
                    }
                ];
                const rows = [
                    [
                        20,
                        20,
                        0
                    ],
                    [
                        640,
                        30,
                        0
                    ],
                    [
                        25,
                        470,
                        0
                    ],
                    [
                        630,
                        465,
                        0
                    ],
                    [
                        40,
                        30,
                        1
                    ],
                    [
                        650,
                        40,
                        1
                    ],
                    [
                        330,
                        470,
                        1
                    ],
                    [
                        300,
                        60,
                        2
                    ]
                ];
                for (const [bx, by, layer] of rows){
                    const z = 120 + layer * 172;
                    out.push({
                        x: x + bx,
                        y: D - 900 + by,
                        z,
                        w: 580,
                        d: 400,
                        h: 170,
                        color: "#c9a877",
                        mat: "matte"
                    });
                    out.push({
                        x: x + bx + 250,
                        y: D - 900 + by - 1,
                        z: z + 0.5,
                        w: 80,
                        d: 402,
                        h: 170.5,
                        color: "#e7551a",
                        mat: "paint"
                    });
                }
                return out;
            }
        case "packing":
            {
                const out = [
                    {
                        x,
                        y: D - 760,
                        z: 820,
                        w: 1700,
                        d: 760,
                        h: 36,
                        color: "#d9b98c",
                        mat: "ply"
                    },
                    // flat cartons waiting, one made up, a roll of tape
                    {
                        x: x + 80,
                        y: D - 700,
                        z: 856,
                        w: 900,
                        d: 560,
                        h: 90,
                        color: "#c9a877",
                        mat: "matte"
                    },
                    {
                        x: x + 1080,
                        y: D - 640,
                        z: 856,
                        w: 520,
                        d: 420,
                        h: 300,
                        color: "#c9a877",
                        mat: "matte"
                    },
                    {
                        x: x + 1240,
                        y: D - 170,
                        z: 856,
                        w: 110,
                        d: 110,
                        h: 50,
                        color: "#e7551a",
                        mat: "paint",
                        geo: "cylinder"
                    }
                ];
                for (const [lx, ly] of [
                    [
                        40,
                        40
                    ],
                    [
                        1610,
                        40
                    ],
                    [
                        40,
                        670
                    ],
                    [
                        1610,
                        670
                    ]
                ])out.push({
                    x: x + lx,
                    y: D - 760 + ly,
                    z: 0,
                    w: 50,
                    d: 50,
                    h: 820,
                    color: "#3a3633",
                    mat: "matte"
                });
                return out;
            }
        case "smallbed":
            return [
                {
                    x,
                    y: D - 1800,
                    z: 0,
                    w: 900,
                    d: 1800,
                    h: 220,
                    color: wood,
                    mat: "wood"
                },
                {
                    x: x + 25,
                    y: D - 1775,
                    z: 220,
                    w: 850,
                    d: 1750,
                    h: 170,
                    color: linen,
                    mat: "duvet"
                },
                {
                    x: x + 20,
                    y: D - 1790,
                    z: 390,
                    w: 860,
                    d: 1250,
                    h: 90,
                    color: "#e7dcc6",
                    mat: "duvet"
                },
                {
                    x: x + 120,
                    y: D - 420,
                    z: 390,
                    w: 480,
                    d: 340,
                    h: 100,
                    color: pillow,
                    mat: "fabric"
                },
                {
                    x: x + 950,
                    y: D - 320,
                    z: 0,
                    w: 320,
                    d: 320,
                    h: 260,
                    color: clay,
                    mat: "fabric"
                }
            ];
        case "rail":
            return [
                {
                    x,
                    y: D - 40,
                    z: 1000,
                    w: 2000,
                    d: 40,
                    h: 40,
                    color: legDark,
                    mat: "metal"
                },
                ...[
                    0,
                    400,
                    800,
                    1200,
                    1600,
                    1980
                ].map((dx)=>({
                        x: x + dx,
                        y: D - 30,
                        z: 0,
                        w: 20,
                        d: 20,
                        h: 1000,
                        color: legDark,
                        mat: "metal"
                    })),
                {
                    x,
                    y: D - 8,
                    z: 60,
                    w: 2000,
                    d: 8,
                    h: 900,
                    color: "#dfe7ea",
                    mat: "glass"
                }
            ];
        case "plant":
            return [
                {
                    x,
                    y: D - 420,
                    z: 0,
                    w: 380,
                    d: 380,
                    h: 340,
                    color: clay,
                    mat: "ceramic",
                    geo: "cylinder"
                },
                {
                    x: x + 40,
                    y: D - 380,
                    z: 340,
                    w: 300,
                    d: 300,
                    h: 60,
                    color: "#5b4636",
                    mat: "matte",
                    geo: "cylinder"
                },
                {
                    x: x + 180,
                    y: D - 240,
                    z: 400,
                    w: 22,
                    d: 22,
                    h: 700,
                    color: "#4f6b3a",
                    mat: "matte",
                    geo: "cylinder"
                },
                {
                    x: x - 60,
                    y: D - 480,
                    z: 900,
                    w: 520,
                    d: 500,
                    h: 420,
                    color: green,
                    mat: "fabric",
                    geo: "sphere"
                }
            ];
        case "deskchair":
            return [
                {
                    x,
                    y: D - 1250,
                    z: 0,
                    w: 480,
                    d: 480,
                    h: 30,
                    color: legDark,
                    mat: "metal",
                    geo: "cylinder"
                },
                {
                    x: x + 220,
                    y: D - 1030,
                    z: 30,
                    w: 40,
                    d: 40,
                    h: 420,
                    color: legDark,
                    mat: "metal",
                    geo: "cylinder"
                },
                {
                    x: x + 10,
                    y: D - 1240,
                    z: 450,
                    w: 460,
                    d: 460,
                    h: 70,
                    color: "#5f6f7a",
                    mat: "fabric"
                },
                {
                    x: x + 30,
                    y: D - 830,
                    z: 520,
                    w: 420,
                    d: 40,
                    h: 420,
                    color: "#5f6f7a",
                    mat: "fabric"
                }
            ];
        default:
            return [];
    }
}
const extras = new Set([
    "basin",
    "washer",
    "smallbed",
    "rail",
    "plant",
    "deskchair",
    "workbench",
    "panelstack",
    "panelrack",
    "packing"
]);
function homeKeeps(h) {
    const out = [];
    let n = 0;
    for (const r of h.rooms){
        for (const k of r.keeps){
            const list = extras.has(k.id) ? more(k.id, k.x, KEEP_D).map((b, i)=>({
                    key: `keep:${r.id}:${k.id}:${k.x}:${i}`,
                    kind: "keep",
                    ...b.geo ? {
                        geo: b.geo
                    } : {},
                    ...b.axis ? {
                        axis: b.axis
                    } : {},
                    partId: null,
                    group: null,
                    x: b.x,
                    y: b.y,
                    z: b.z,
                    w: b.w,
                    d: b.d,
                    h: b.h,
                    color: b.color,
                    opacity: 1,
                    lift: 0,
                    holes: null,
                    order: n++,
                    mat: b.mat
                })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$house$2f$furnish$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["homeBlocks"])(k.id, k.x, KEEP_D).map((b)=>({
                    ...b,
                    key: `${r.id}:${k.x}:${b.key}`
                }));
            for (const block of list)out.push({
                block,
                zBack: r.z0
            });
        }
        for (const k of r.floorKeeps ?? [])more(k.id, k.x, KEEP_D).forEach((b, i)=>out.push({
                block: {
                    key: `floor:${r.id}:${k.id}:${k.x}:${i}`,
                    kind: "keep",
                    ...b.geo ? {
                        geo: b.geo
                    } : {},
                    ...b.axis ? {
                        axis: b.axis
                    } : {},
                    partId: null,
                    group: null,
                    x: b.x,
                    y: b.y,
                    z: b.z,
                    w: b.w,
                    d: b.d,
                    h: b.h,
                    color: b.color,
                    opacity: 1,
                    lift: 0,
                    holes: null,
                    order: n++,
                    mat: b.mat
                },
                zBack: r.z0 + k.z
            }));
    }
    return out;
}
function homeModels(h) {
    const out = [];
    for (const r of h.rooms)(r.models ?? []).forEach((m, i)=>out.push({
            key: `${r.id}:${m.id}:${i}`,
            id: m.id,
            url: `/models/${m.id}.glb`,
            x: m.x,
            z: r.z0 + m.z,
            h: m.h ?? 0,
            rot: (m.rot ?? 0) * Math.PI / 180,
            scale: m.scale ?? 1
        }));
    return out;
}
const ROADS = [
    {
        // the main street
        line: [
            [
                -46,
                12.2
            ],
            [
                -34,
                11.5
            ],
            [
                -18,
                10
            ],
            [
                -4,
                9.2
            ],
            [
                8,
                10
            ],
            [
                20,
                9
            ],
            [
                34,
                10.2
            ],
            [
                46,
                9.4
            ],
            [
                58,
                10
            ]
        ],
        w: 4.2,
        kerb: 1.5
    },
    {
        // the lane up to the close
        line: [
            [
                2.6,
                8.2
            ],
            [
                3.4,
                3
            ],
            [
                2.4,
                -3.5
            ],
            [
                3.2,
                -9.5
            ]
        ],
        w: 3.2,
        kerb: 1
    }
];
const CLOSE = {
    x: 3.2,
    z: -12.4,
    r: 4.8,
    green: 2.1
};
const BOUNDS = {
    x0: -13,
    x1: 19,
    z0: -27,
    z1: 20
};
const block = (x, z, w, d, h, rot = 0)=>({
        kind: "block",
        x,
        z,
        w,
        d,
        h,
        rot
    });
const tree = (x, z, size = 1)=>({
        kind: "tree",
        x,
        z,
        size
    });
const scenery = [
    // neighbours along the main street, west then east, north side then south
    block(-23, 2.4, 8, 7, 3.2, 6),
    block(-35, 3.4, 9, 8, 3.6, -3),
    block(-47, 3, 8, 7, 3.2, 4),
    block(-28, 19.2, 10, 7, 3.4, 3),
    block(-40, 20.4, 8, 8, 3.8, -4),
    block(29, 1.2, 9, 8, 3.6, -4),
    block(40, 2, 8, 7, 3.2, 5),
    block(52, 1.9, 9, 7, 3.4, -2),
    block(20.5, 19, 9, 7, 3.4, -6),
    block(31.5, 18, 10, 8, 3.6, 2),
    block(43, 18.6, 8, 7, 3.2, -3),
    // up the lane and round the close
    block(-33, -21.5, 9, 7, 3.4, -8),
    block(-24, -30, 8, 8, 3.6, 4),
    block(17, -17.5, 9, 7, 3.4, 10),
    block(19, -28, 8, 7, 3.2, -5),
    block(27, -12, 9, 8, 3.6, 3),
    block(-27, -10, 8, 7, 3.2, 8),
    // behind the family house
    block(-3, -40, 10, 7, 3.4, 0),
    block(10, -41, 9, 8, 3.6, 6),
    block(-16, -36, 8, 7, 3.2, -6),
    block(24, -38, 9, 7, 3.4, -4),
    // Nothing is built south of the flat and the workshop: that is where the
    // visitor looks from, and a roof there would fill the bottom of the picture.
    // Their gardens run down to a back lane instead.
    // Trees: on the green, along the lane and the street, in the gardens. They
    // stand still, so none is planted between a home's open side and where the
    // visitor looks from (checked by walking every home's view corridor).
    tree(CLOSE.x, CLOSE.z, 1.0),
    tree(-1.5, -3.6, 0.9),
    tree(-1.0, -7.4, 1.05),
    tree(8.8, -7.6, 0.85),
    tree(-8.5, -25.5, 1.1),
    tree(13.2, -22.5, 1.0),
    tree(-17, -1.5, 1.0),
    tree(-15.5, -5, 1.15),
    tree(12.5, -9.6, 0.9),
    tree(18.5, -10, 1.0),
    tree(22.9, -2.4, 0.8),
    tree(-21.2, 6.2, 0.9),
    tree(35, 6.2, 1.05),
    tree(-22, 14.3, 1.0),
    tree(17.5, 13.4, 0.9),
    tree(25.7, 13.5, 0.9),
    tree(38, 13.6, 0.95),
    tree(-17.5, 25.6, 1.1),
    tree(-1.6, 27.2, 0.9),
    tree(15, 26.8, 1.0),
    tree(24, 26.2, 1.1),
    tree(-23, 24.5, 1.0),
    // lamps: the street, the lane, the close
    {
        kind: "lamp",
        x: -17.5,
        z: 6.3,
        rot: 0
    },
    {
        kind: "lamp",
        x: 23.5,
        z: 5.9,
        rot: 0
    },
    {
        kind: "lamp",
        x: 30,
        z: 6.4,
        rot: 0
    },
    {
        kind: "lamp",
        x: -21,
        z: 13.6,
        rot: 180
    },
    {
        kind: "lamp",
        x: 1.8,
        z: 13.2,
        rot: 180
    },
    {
        kind: "lamp",
        x: 24,
        z: 13.1,
        rot: 180
    },
    {
        kind: "lamp",
        x: 0.6,
        z: 0.5,
        rot: 90
    },
    {
        kind: "lamp",
        x: 5.8,
        z: -6.4,
        rot: -90
    },
    {
        kind: "lamp",
        x: 9.6,
        z: -11.4,
        rot: -90
    }
];
}),
"[project]/src/features/house/detail.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detailBlocks",
    ()=>detailBlocks
]);
/**
 * The parts list draws every part as one box. Here the small parts become
 * what they are: a hook is a peg with a tip, a tray has rims, a rail is a
 * rod, a caster is a wheel in a fork. Same part ids, same order, so the
 * assembly timing and the pull-apart still work part by part.
 */ const accent = "#e7551a";
const tyre = "#2a2623";
const hub = "#a7a7a5";
const fork = "#3a3a3a";
const steel = "#c9cbcc";
function sub(b, j, patch) {
    return {
        ...b,
        ...patch,
        key: `${b.key}:d${j}`
    };
}
function detailBlocks(list) {
    const out = [];
    for (const b of list){
        if (b.kind !== "part" || !b.partId) {
            out.push(b);
            continue;
        }
        const id = b.partId;
        if (id === "coat-hook" || id.endsWith("-hook") && b.w <= 24) {
            // a peg out of the working face, with a rounded tip
            const cx = b.x + b.w / 2;
            const cz = b.z + b.h / 2;
            out.push(sub(b, 0, {
                x: cx - 12,
                y: b.y + b.d - 6,
                z: cz - 22,
                w: 24,
                d: 6,
                h: 44,
                color: accent,
                mat: "paint"
            }), sub(b, 1, {
                x: cx - 5,
                y: b.y + 8,
                z: cz - 5,
                w: 10,
                d: b.d - 8,
                h: 10,
                color: accent,
                mat: "paint"
            }), sub(b, 2, {
                x: cx - 9,
                y: b.y,
                z: cz - 9,
                w: 18,
                d: 18,
                h: 18,
                color: accent,
                mat: "paint",
                geo: "sphere"
            }));
            continue;
        }
        if (id === "key-tray" || id.endsWith("-tray")) {
            // a shallow tray: a floor and four rims
            out.push(sub(b, 0, {
                x: b.x,
                y: b.y,
                z: b.z,
                w: b.w,
                d: b.d,
                h: 5,
                color: accent,
                mat: "paint"
            }), sub(b, 1, {
                x: b.x,
                y: b.y,
                z: b.z,
                w: 5,
                d: b.d,
                h: b.h,
                color: accent,
                mat: "paint"
            }), sub(b, 2, {
                x: b.x + b.w - 5,
                y: b.y,
                z: b.z,
                w: 5,
                d: b.d,
                h: b.h,
                color: accent,
                mat: "paint"
            }), sub(b, 3, {
                x: b.x,
                y: b.y,
                z: b.z,
                w: b.w,
                d: 5,
                h: b.h,
                color: accent,
                mat: "paint"
            }), sub(b, 4, {
                x: b.x,
                y: b.y + b.d - 5,
                z: b.z,
                w: b.w,
                d: 5,
                h: b.h,
                color: accent,
                mat: "paint"
            }));
            continue;
        }
        if (id === "clothes-rail") {
            out.push(sub(b, 0, {
                x: b.x,
                y: b.y,
                z: b.z,
                w: b.w,
                d: 22,
                h: 22,
                color: steel,
                mat: "metal",
                geo: "cylinder",
                axis: "x"
            }), sub(b, 1, {
                x: b.x,
                y: b.y - 4,
                z: b.z - 4,
                w: 8,
                d: 30,
                h: 30,
                color: steel,
                mat: "metal"
            }), sub(b, 2, {
                x: b.x + b.w - 8,
                y: b.y - 4,
                z: b.z - 4,
                w: 8,
                d: 30,
                h: 30,
                color: steel,
                mat: "metal"
            }));
            continue;
        }
        if (id === "kitchen-rail") {
            out.push(sub(b, 0, {
                x: b.x,
                y: b.y,
                z: b.z,
                w: 18,
                d: b.d,
                h: 18,
                color: steel,
                mat: "metal",
                geo: "cylinder",
                axis: "y"
            }), sub(b, 1, {
                x: b.x - 4,
                y: b.y,
                z: b.z - 4,
                w: 26,
                d: 8,
                h: 26,
                color: steel,
                mat: "metal"
            }), sub(b, 2, {
                x: b.x - 4,
                y: b.y + b.d - 8,
                z: b.z - 4,
                w: 26,
                d: 8,
                h: 26,
                color: steel,
                mat: "metal"
            }));
            continue;
        }
        if (id === "caster-display") {
            // a wheel in a fork under the base
            const cx = b.x + b.w / 2;
            const cy = b.y + b.d / 2;
            out.push(sub(b, 0, {
                x: cx - 10,
                y: cy - 4,
                z: b.z + b.h - 12,
                w: 20,
                d: 8,
                h: 12,
                color: fork,
                mat: "matte"
            }), sub(b, 1, {
                x: cx - 18,
                y: cy - 30,
                z: b.z + 4,
                w: 4,
                d: 40,
                h: b.h - 14,
                color: fork,
                mat: "matte"
            }), sub(b, 2, {
                x: cx + 14,
                y: cy - 30,
                z: b.z + 4,
                w: 4,
                d: 40,
                h: b.h - 14,
                color: fork,
                mat: "matte"
            }), sub(b, 3, {
                x: cx - 12,
                y: cy - 26,
                z: b.z,
                w: 24,
                d: 52,
                h: 52,
                color: tyre,
                mat: "rubber",
                geo: "cylinder",
                axis: "x"
            }), sub(b, 4, {
                x: cx - 13,
                y: cy - 12,
                z: b.z + 14,
                w: 26,
                d: 24,
                h: 24,
                color: hub,
                mat: "metal",
                geo: "cylinder",
                axis: "x"
            }));
            continue;
        }
        if (id.startsWith("door-assembly")) {
            // the door, and a handle on its opening edge
            out.push(b, sub(b, 1, {
                x: b.x + b.w - 60,
                y: b.y - 14,
                z: b.z + b.h / 2 - 45,
                w: 12,
                d: 14,
                h: 90,
                color: steel,
                mat: "metal"
            }));
            continue;
        }
        out.push(b);
    }
    return out;
}
}),
"[project]/src/features/house/furnish.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homeBlocks",
    ()=>homeBlocks,
    "homeBlocksFor",
    ()=>homeBlocksFor
]);
const wood = "#c8a67a";
const woodDark = "#8a6a4b";
const legDark = "#2f2b28";
const cream = "#f2ebe0";
const linen = "#ede5d7";
const pillow = "#f7f2ea";
const grey = "#8f8a80";
const white = "#f6f1ea";
const steel = "#c9cbcc";
const screen = "#15171a";
function homeBlocks(id, x, D) {
    const list = [];
    const add = (b)=>list.push(b);
    switch(id){
        case "door":
            {
                add({
                    x,
                    y: D - 40,
                    z: 0,
                    w: 60,
                    d: 40,
                    h: 2100,
                    color: white,
                    mat: "matte"
                });
                add({
                    x: x + 840,
                    y: D - 40,
                    z: 0,
                    w: 60,
                    d: 40,
                    h: 2100,
                    color: white,
                    mat: "matte"
                });
                add({
                    x,
                    y: D - 40,
                    z: 2050,
                    w: 900,
                    d: 40,
                    h: 60,
                    color: white,
                    mat: "matte"
                });
                add({
                    x: x + 60,
                    y: D - 36,
                    z: 0,
                    w: 780,
                    d: 36,
                    h: 2050,
                    color: "#efe4d3",
                    mat: "matte"
                });
                add({
                    x: x + 700,
                    y: D - 62,
                    z: 1000,
                    w: 110,
                    d: 26,
                    h: 26,
                    color: steel,
                    mat: "metal"
                });
                break;
            }
        case "chair":
            {
                const legs = [
                    [
                        20,
                        20
                    ],
                    [
                        400,
                        20
                    ],
                    [
                        20,
                        400
                    ],
                    [
                        400,
                        400
                    ]
                ];
                for (const [dx, dy] of legs)add({
                    x: x + dx,
                    y: D - 450 + dy,
                    z: 0,
                    w: 30,
                    d: 30,
                    h: 430,
                    color: woodDark,
                    mat: "wood"
                });
                add({
                    x,
                    y: D - 450,
                    z: 430,
                    w: 450,
                    d: 450,
                    h: 32,
                    color: wood,
                    mat: "wood"
                });
                add({
                    x: x + 20,
                    y: D - 50,
                    z: 462,
                    w: 30,
                    d: 30,
                    h: 420,
                    color: woodDark,
                    mat: "wood"
                });
                add({
                    x: x + 400,
                    y: D - 50,
                    z: 462,
                    w: 30,
                    d: 30,
                    h: 420,
                    color: woodDark,
                    mat: "wood"
                });
                add({
                    x,
                    y: D - 48,
                    z: 700,
                    w: 450,
                    d: 26,
                    h: 170,
                    color: wood,
                    mat: "wood"
                });
                break;
            }
        case "desk":
            {
                add({
                    x,
                    y: D - 600,
                    z: 700,
                    w: 1200,
                    d: 600,
                    h: 28,
                    color: wood,
                    mat: "wood"
                });
                add({
                    x: x + 20,
                    y: D - 560,
                    z: 0,
                    w: 30,
                    d: 520,
                    h: 700,
                    color: legDark,
                    mat: "matte"
                });
                add({
                    x: x + 1150,
                    y: D - 560,
                    z: 0,
                    w: 30,
                    d: 520,
                    h: 700,
                    color: legDark,
                    mat: "matte"
                });
                add({
                    x: x + 480,
                    y: D - 190,
                    z: 728,
                    w: 240,
                    d: 150,
                    h: 14,
                    color: legDark,
                    mat: "matte"
                });
                add({
                    x: x + 585,
                    y: D - 130,
                    z: 742,
                    w: 30,
                    d: 30,
                    h: 130,
                    color: legDark,
                    mat: "matte"
                });
                add({
                    x: x + 340,
                    y: D - 130,
                    z: 872,
                    w: 520,
                    d: 22,
                    h: 320,
                    color: screen,
                    mat: "screen"
                });
                add({
                    x: x + 330,
                    y: D - 460,
                    z: 728,
                    w: 300,
                    d: 110,
                    h: 12,
                    color: "#3a3734",
                    mat: "matte"
                });
                break;
            }
        case "bed":
            {
                add({
                    x,
                    y: D - 2000,
                    z: 0,
                    w: 1500,
                    d: 2000,
                    h: 240,
                    color: wood,
                    mat: "wood"
                });
                add({
                    x: x + 30,
                    y: D - 1970,
                    z: 240,
                    w: 1440,
                    d: 1940,
                    h: 200,
                    color: linen,
                    mat: "duvet"
                });
                add({
                    x: x + 20,
                    y: D - 1990,
                    z: 440,
                    w: 1460,
                    d: 1420,
                    h: 110,
                    color: cream,
                    mat: "duvet"
                });
                add({
                    x: x + 120,
                    y: D - 440,
                    z: 440,
                    w: 560,
                    d: 380,
                    h: 110,
                    color: pillow,
                    mat: "fabric"
                });
                add({
                    x: x + 820,
                    y: D - 440,
                    z: 440,
                    w: 560,
                    d: 380,
                    h: 110,
                    color: pillow,
                    mat: "fabric"
                });
                add({
                    x,
                    y: D - 60,
                    z: 0,
                    w: 1500,
                    d: 60,
                    h: 900,
                    color: wood,
                    mat: "wood"
                });
                break;
            }
        case "sofa":
            {
                add({
                    x,
                    y: D - 850,
                    z: 0,
                    w: 1800,
                    d: 850,
                    h: 400,
                    color: grey,
                    mat: "fabric"
                });
                add({
                    x,
                    y: D - 250,
                    z: 400,
                    w: 1800,
                    d: 250,
                    h: 400,
                    color: grey,
                    mat: "fabric"
                });
                add({
                    x: x + 180,
                    y: D - 830,
                    z: 400,
                    w: 700,
                    d: 580,
                    h: 140,
                    color: "#9a958b",
                    mat: "fabric"
                });
                add({
                    x: x + 920,
                    y: D - 830,
                    z: 400,
                    w: 700,
                    d: 580,
                    h: 140,
                    color: "#9a958b",
                    mat: "fabric"
                });
                add({
                    x,
                    y: D - 850,
                    z: 400,
                    w: 180,
                    d: 600,
                    h: 200,
                    color: grey,
                    mat: "fabric"
                });
                add({
                    x: x + 1620,
                    y: D - 850,
                    z: 400,
                    w: 180,
                    d: 600,
                    h: 200,
                    color: grey,
                    mat: "fabric"
                });
                break;
            }
        case "counter":
            {
                add({
                    x,
                    y: D - 600,
                    z: 0,
                    w: 1500,
                    d: 600,
                    h: 860,
                    color: "#efe7db",
                    mat: "matte"
                });
                add({
                    x: x - 15,
                    y: D - 615,
                    z: 860,
                    w: 1530,
                    d: 630,
                    h: 40,
                    color: "#d9d2c6",
                    mat: "ceramic"
                });
                add({
                    x: x + 900,
                    y: D - 500,
                    z: 880,
                    w: 500,
                    d: 400,
                    h: 24,
                    color: "#b9bcbd",
                    mat: "metal"
                });
                add({
                    x: x + 1140,
                    y: D - 100,
                    z: 900,
                    w: 22,
                    d: 22,
                    h: 260,
                    color: steel,
                    mat: "metal",
                    geo: "cylinder"
                });
                add({
                    x: x + 1090,
                    y: D - 120,
                    z: 1140,
                    w: 120,
                    d: 18,
                    h: 18,
                    color: steel,
                    mat: "metal"
                });
                // three oak fronts standing proud of the carcass, each with a steel pull,
                // and a dark plinth set back under them
                for(let i = 0; i < 3; i++){
                    add({
                        x: x + 12 + i * 496,
                        y: D - 612,
                        z: 110,
                        w: 484,
                        d: 14,
                        h: 740,
                        color: "#d9bd93",
                        mat: "wood"
                    });
                    add({
                        x: x + 12 + i * 496 + 182,
                        y: D - 628,
                        z: 770,
                        w: 120,
                        d: 14,
                        h: 12,
                        color: steel,
                        mat: "metal"
                    });
                }
                add({
                    x: x + 30,
                    y: D - 560,
                    z: 0,
                    w: 1440,
                    d: 20,
                    h: 100,
                    color: "#3a3633",
                    mat: "matte"
                });
                // a hob on the worktop, away from the sink
                add({
                    x: x + 180,
                    y: D - 520,
                    z: 900,
                    w: 520,
                    d: 420,
                    h: 8,
                    color: "#26282b",
                    mat: "screen"
                });
                break;
            }
        case "tv":
            {
                add({
                    x,
                    y: D - 30,
                    z: 900,
                    w: 1100,
                    d: 30,
                    h: 650,
                    color: screen,
                    mat: "screen"
                });
                add({
                    x: x + 20,
                    y: D - 20,
                    z: 920,
                    w: 1060,
                    d: 8,
                    h: 610,
                    color: "#0c0d0f",
                    mat: "screen"
                });
                break;
            }
    }
    return list.map((b, i)=>({
            key: `home:${id}:${x}:${i}`,
            kind: "keep",
            ...b.geo ? {
                geo: b.geo
            } : {},
            partId: null,
            group: null,
            x: b.x,
            y: b.y,
            z: b.z,
            w: b.w,
            d: b.d,
            h: b.h,
            color: b.color,
            opacity: 1,
            lift: 0,
            holes: null,
            order: i,
            mat: b.mat
        }));
}
function homeBlocksFor(keeps, D) {
    return keeps.flatMap((k)=>homeBlocks(k.id, k.x, D));
}
}),
"[project]/src/features/landing/plan-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DAYS",
    ()=>DAYS,
    "cardPic",
    ()=>cardPic,
    "designs",
    ()=>designs,
    "rooms",
    ()=>rooms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$outfit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/outfit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/town.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$ask$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/ask.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shop$2f$athome$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/shop/athome.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shop$2f$price$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/shop/price.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const DAYS = [
    {
        id: "wfh",
        label: "I work from home",
        say: "I work from home at a desk with a laptop and papers"
    },
    {
        id: "kids",
        label: "There are children",
        say: "children with toys and school bags everywhere"
    },
    {
        id: "cook",
        label: "I cook a lot",
        say: "I cook a lot and the kitchen counter is crowded"
    },
    {
        id: "small",
        label: "Small, and rented",
        say: "a small rented flat: nothing drilled, clutter everywhere, no storage"
    },
    {
        id: "share",
        label: "I share the room",
        say: "I share a room with someone and want a divider between us"
    },
    {
        id: "calls",
        label: "I am on calls",
        say: "video calls with the bed behind me"
    },
    {
        id: "books",
        label: "Books and records",
        say: "books and records with nowhere to live"
    },
    {
        id: "hall",
        label: "No hallway",
        say: "no hallway: coats, keys and shoes land by the door"
    }
];
function cardPic(card, stills) {
    for (const a of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$ask$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asked"])(card.say, null, {}, 3).answers){
        const src = stills[a.job.life];
        if (src) return src;
    }
    return null;
}
function rooms() {
    const n = new Map();
    for (const j of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobs"]){
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeOf"])(j.room)?.name;
        if (name) n.set(name, (n.get(name) ?? 0) + 1);
    }
    return [
        ...n.entries()
    ].filter(([, count])=>count > 1).sort((a, b)=>b[1] - a[1] || a[0].localeCompare(b[0])).map(([name])=>name).slice(0, 9);
}
function designs() {
    const stills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shop$2f$athome$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["athomeSrc"])();
    const out = {};
    for (const f of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["families"])for (const b of f.bodies)for (const l of b.lives){
        const made = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveLife"])(l, f.strip);
        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$outfit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCounts"])(made);
        const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productOf"])(l);
        const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["statusOf"])(l);
        out[l.id] = {
            name: l.name,
            line: l.line,
            where: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["homeOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roomOf"])(l.caseId)?.home)?.name,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeOf"])(l.caseId)?.name.toLowerCase()
            ].filter(Boolean).join(" · "),
            build: `${n.parts} parts · one key · about ${n.minutes} min`,
            price: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shop$2f$price$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["euro"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shop$2f$price$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["priceOfBuild"])(made).eur)} est.`,
            status: st.label,
            made: st.made,
            still: stills[l.id] ?? null,
            href: product && st.made ? `/pieces/${product.id}` : `/family/${f.id}?case=${l.caseId}&focus=${b.id}&life=${l.id}`
        };
    }
    return out;
}
}),
"[project]/src/features/shop/athome.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "athomeFor",
    ()=>athomeFor,
    "athomeOf",
    ()=>athomeOf,
    "athomeSrc",
    ()=>athomeSrc
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/family/town.ts [app-rsc] (ecmascript)");
;
;
;
;
const dir = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "family", "athome");
const lives = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["families"].flatMap((f)=>f.bodies.flatMap((b)=>b.lives));
const where = (life)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["homeOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$town$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roomOf"])(life?.caseId ?? null)?.home)?.name,
        life ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$family$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeOf"])(life.caseId)?.name.toLowerCase() : undefined
    ].filter(Boolean).join(", ");
/* The stills are kept as WebP, at 960 px: twice the widest place they are
   shown. A fresh one from the street arrives as a JPEG, so both are read. */ const KINDS = [
    ".webp",
    ".jpg"
];
const fileOf = (lifeId)=>KINDS.find((k)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dir(), lifeId + k)));
function athomeOf(lifeId) {
    const kind = fileOf(lifeId);
    if (!kind) return null;
    const w = where(lives().find((l)=>l.id === lifeId));
    return {
        src: `/family/athome/${lifeId}${kind}`,
        caption: w ? `At home: ${w}` : "At home"
    };
}
function athomeFor(productId) {
    const all = lives().filter((l)=>l.productId === productId);
    const life = all.find((l)=>!l.grownFrom) ?? all[0];
    return life ? athomeOf(life.id) : null;
}
function athomeSrc() {
    const out = {};
    try {
        for (const f of (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readdirSync"])(dir())){
            const kind = KINDS.find((k)=>f.endsWith(k));
            if (!kind) continue;
            const id = f.slice(0, -kind.length);
            // a WebP wins over the JPEG it was made from
            if (kind === ".webp" || !out[id]) out[id] = `/family/athome/${f}`;
        }
    } catch  {
    /* no stills taken yet */ }
    return out;
}
}),
"[project]/src/features/shop/price.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RATES",
    ()=>RATES,
    "euro",
    ()=>euro,
    "partPrices",
    ()=>partPrices,
    "priceOf",
    ()=>priceOf,
    "priceOfBuild",
    ()=>priceOfBuild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/steps.ts [app-rsc] (ecmascript)");
;
;
const RATES = {
    /** one 2440 × 1220 × 18 mm sheet of birch plywood, delivered */ sheet: 86,
    sheetM2: 2.977,
    /** offcuts: the drawn area is never the area bought */ waste: 0.12,
    /** sanding and oil, both faces */ finishM2: 2.4,
    /** a furniture bolt and the insert it turns into */ bolt: 0.42,
    /** the one L-key, parked in the base */ key: 1.1,
    /** a base, by tier */ feet: 9,
    casters: 16,
    /** a rail, a hook strip, a tray: the small steel and the fixings */ accessory: 6,
    /** hinges, catch and handle for one door leaf */ doorParts: 7,
    /** one box, its tray and the printed sheet */ box: 3.8,
    /** our own minutes on one part: cutting, edging, sanding, checking, packing */ minutesPerPart: 1.6,
    /** what an hour of that costs us */ hour: 42,
    /** rent, machines, drawings, returns, the studio and what is left over */ overhead: 2.15
};
/** the face area of a part, from the spec it is drawn with ("564 × 380 × 18 mm") */ function area(spec) {
    if (!spec) return 0;
    const mm = [
        ...spec.matchAll(/(\d{2,4})\s*(?=×|mm)/g)
    ].map((m)=>Number(m[1])).filter((n)=>n > 0);
    if (mm.length < 2) return 0;
    const [a = 0, b = 0] = mm.sort((x, y)=>y - x);
    return a * b / 1_000_000;
}
const round5 = (n)=>Math.max(5, Math.round(n / 5) * 5);
/** what one product in one configuration is made of, priced */ function priceOne(p, c) {
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billOfParts"])(p, c);
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["counts"])(p, c);
    let m2 = 0;
    let panels = 0;
    let bases = 0;
    let casters = 0;
    let doors = 0;
    let extras = 0;
    for (const r of rows){
        if (r.kind === "panel" || r.kind === "door") {
            m2 += area(r.spec) * r.quantity;
            panels += r.quantity;
            if (r.kind === "door") doors += r.quantity;
        } else if (r.kind === "base") {
            bases += r.quantity;
            if (/caster|wheel/i.test(r.spec ?? "")) casters += r.quantity;
        } else if (r.kind === "accessory") {
            extras += r.quantity;
        }
    }
    const bought = m2 * (1 + RATES.waste);
    return {
        board: bought / RATES.sheetM2 * RATES.sheet,
        finish: m2 * 2 * RATES.finishM2,
        fixings: n.bolts * RATES.bolt + RATES.key + doors * RATES.doorParts + extras * RATES.accessory,
        base: casters * RATES.casters + (bases - casters) * RATES.feet,
        work: n.parts * RATES.minutesPerPart / 60 * RATES.hour,
        pack: n.boxes * RATES.box,
        m2,
        panels,
        bolts: n.bolts,
        boxes: n.boxes
    };
}
function priceOf(placements) {
    const sum = placements.map((pl)=>priceOne(pl.product, pl.config));
    const add = (of)=>sum.reduce((t, x)=>t + of(x), 0);
    const lines = [
        {
            label: "Birch plywood, cut",
            eur: add((x)=>x.board)
        },
        {
            label: "Sanded and oiled",
            eur: add((x)=>x.finish)
        },
        {
            label: "Bolts, key and fittings",
            eur: add((x)=>x.fixings)
        },
        {
            label: "Base",
            eur: add((x)=>x.base)
        },
        {
            label: "Our work on it",
            eur: add((x)=>x.work)
        },
        {
            label: "Boxes",
            eur: add((x)=>x.pack)
        }
    ].filter((l)=>l.eur > 0.01);
    const cost = lines.reduce((t, l)=>t + l.eur, 0);
    return {
        eur: round5(cost * RATES.overhead),
        lines: lines.map((l)=>({
                ...l,
                eur: Math.round(l.eur)
            })),
        m2: Math.round(add((x)=>x.m2) * 100) / 100,
        panels: add((x)=>x.panels),
        bolts: add((x)=>x.bolts),
        boxes: add((x)=>x.boxes)
    };
}
function partPrices(p, c) {
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billOfParts"])(p, c);
    const own = new Map();
    for (const r of rows){
        const each = r.kind === "panel" || r.kind === "door" ? area(r.spec) * (1 + RATES.waste) * RATES.sheet / RATES.sheetM2 + area(r.spec) * 2 * RATES.finishM2 + (r.kind === "door" ? RATES.doorParts : 0) : r.kind === "base" ? /caster|wheel/i.test(r.spec ?? "") ? RATES.casters : RATES.feet : r.kind === "accessory" ? RATES.accessory : 0.5;
        own.set(r.id, each * r.quantity);
    }
    const material = [
        ...own.values()
    ].reduce((t, v)=>t + v, 0) || 1;
    const whole = priceOf([
        {
            product: p,
            config: c
        }
    ]).eur;
    const out = {};
    for (const [id, v] of own)out[id] = Math.max(1, Math.round(v / material * whole));
    return out;
}
const priceOfBuild = (b)=>priceOf(b.placements);
const euro = (n)=>`€${n.toLocaleString("en-GB")}`;
}),
"[project]/src/features/storefront/lib/assembly.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assembly",
    ()=>assembly,
    "billOfParts",
    ()=>billOfParts,
    "difference",
    ()=>difference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/catalog.ts [app-rsc] (ecmascript)");
;
const accessoryName = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["accessories"][id]?.name ?? id;
const accessoryBlurb = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["accessories"][id]?.description ?? "";
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
"[project]/src/features/storefront/lib/catalog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/custom.ts [app-rsc] (ecmascript)");
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
    if (c.productId === "custom") return c.custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customProduct"])(c.custom) : undefined;
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
        ...defaultConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customProduct"])(spec)),
        custom: spec
    };
}
function validConfig(input) {
    if (!input || typeof input !== "object") return null;
    const c = input;
    const custom = String(c.productId) === "custom" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validCustom"])(c.custom) : null;
    const p = custom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$custom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customProduct"])(custom) : getProduct(String(c.productId));
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
"[project]/src/features/storefront/lib/custom.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/features/storefront/lib/draw.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "holeGrid",
    ()=>holeGrid,
    "partColors",
    ()=>partColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-rsc] (ecmascript)");
;
function partColors(n, finish) {
    const accent = n.kind === "accessory" || n.kind === "hardware" || finish === "orange" && (n.kind === "door" || n.partId === "functional-panel" || n.partId === "fold-panel");
    if (accent) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].accent;
    if (n.kind === "wheel") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].wheel;
    if (n.kind === "base") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].base;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].wood;
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
"[project]/src/features/storefront/lib/exploration.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/features/storefront/lib/iso.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/features/storefront/lib/props.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/features/storefront/lib/scene.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-rsc] (ecmascript)");
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
    const k = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].keep;
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].keepSoft;
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
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].door
                },
                {
                    x: x + 790,
                    y: D - 40,
                    z: 1000,
                    w: 30,
                    d: 28,
                    h: 30,
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].wheel
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
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].wheel
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
                    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["palette"].wheel
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
"[project]/src/features/storefront/lib/steps.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-rsc] (ecmascript)");
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
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assembly"])(p, c);
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
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billOfParts"])(p, c);
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
        parts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["billOfParts"])(p, c).reduce((s, r)=>s + r.quantity, 0),
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
"[project]/src/features/storefront/lib/three/blocks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/assembly.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/draw.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$exploration$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/exploration.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/iso.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/scene.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/storefront/lib/steps.ts [app-rsc] (ecmascript)");
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
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assembly"])(p, pl.config);
    const nodes = o.morphTo ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$exploration$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transitionParts"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$assembly$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assembly"])(o.morphTo.product, o.morphTo.config), o.morphProgress ?? 0) : source;
    const out = [];
    for (const n of nodes){
        if (o.hideGroups?.includes(n.group)) continue;
        const [from, to] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["explodeStage"][n.group] ?? [
            0,
            1
        ];
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stage"])(o.explode ?? 0, from, to);
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
        ].includes(p.shape) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$draw$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["holeGrid"])({
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
        const [from, to] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["explodeStage"].Base ?? [
            0,
            0.35
        ];
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$iso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stage"])(o.explode ?? 0, from, to);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$storefront$2f$lib$2f$scene$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keepBoxes"])(k.id, k.x, k.y ?? depthMm).forEach((b, i)=>{
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f5iujr._.js.map