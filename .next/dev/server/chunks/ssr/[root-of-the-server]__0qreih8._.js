module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/components/gallery/panel-gallery.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "caption": "panel-gallery-module__TYEFrq__caption",
  "captionHeader": "panel-gallery-module__TYEFrq__captionHeader",
  "commentary": "panel-gallery-module__TYEFrq__commentary",
  "exhibition": "panel-gallery-module__TYEFrq__exhibition",
  "eyebrow": "panel-gallery-module__TYEFrq__eyebrow",
  "folio": "panel-gallery-module__TYEFrq__folio",
  "gallerySection": "panel-gallery-module__TYEFrq__gallerySection",
  "image": "panel-gallery-module__TYEFrq__image",
  "imageFrame": "panel-gallery-module__TYEFrq__imageFrame",
  "intro": "panel-gallery-module__TYEFrq__intro",
  "introCopy": "panel-gallery-module__TYEFrq__introCopy",
  "introFooter": "panel-gallery-module__TYEFrq__introFooter",
  "introStatement": "panel-gallery-module__TYEFrq__introStatement",
  "introTitle": "panel-gallery-module__TYEFrq__introTitle",
  "kicker": "panel-gallery-module__TYEFrq__kicker",
  "landscape": "panel-gallery-module__TYEFrq__landscape",
  "metadata": "panel-gallery-module__TYEFrq__metadata",
  "panel": "panel-gallery-module__TYEFrq__panel",
  "panelItem": "panel-gallery-module__TYEFrq__panelItem",
  "panelList": "panel-gallery-module__TYEFrq__panelList",
  "portrait": "panel-gallery-module__TYEFrq__portrait",
  "rank": "panel-gallery-module__TYEFrq__rank",
  "rule": "panel-gallery-module__TYEFrq__rule",
  "sectionHeader": "panel-gallery-module__TYEFrq__sectionHeader",
  "sectionText": "panel-gallery-module__TYEFrq__sectionText",
  "sectionTitle": "panel-gallery-module__TYEFrq__sectionTitle",
  "spread": "panel-gallery-module__TYEFrq__spread",
  "square": "panel-gallery-module__TYEFrq__square",
  "title": "panel-gallery-module__TYEFrq__title",
});
}),
"[project]/src/components/gallery/panel-gallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Exhibition",
    ()=>Exhibition,
    "PanelGallery",
    ()=>PanelGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7.29.7_supports-color@7.2.0__react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7.29.7_supports-color@7.2.0__react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/gallery/panel-gallery.module.css [app-rsc] (css module)");
;
;
;
const orientationLabel = {
    portrait: "Portrait",
    landscape: "Landscape",
    square: "Square",
    spread: "Double-page spread"
};
function formatRank(rank) {
    return rank.toString().padStart(2, "0");
}
function formatMetadata(panel) {
    const chapter = panel.chapter === null ? null : `Chapter ${panel.chapter}`;
    const parts = [
        panel.series,
        panel.creator,
        chapter,
        panel.chapterTitle,
        panel.arc,
        panel.publicationYear?.toString(),
        orientationLabel[panel.orientation]
    ].filter(Boolean);
    return parts.join(" / ");
}
function PanelGallery({ panels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].gallerySection,
        "aria-labelledby": "gallery-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: "Selected sequence"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 39,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "gallery-title",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Six panels arranged as a reading room."
                    }, void 0, false, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 40,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionText,
                        children: "The sequence keeps each image intact and lets the rhythm come from scale, proportion, and marginal notes rather than identical cards."
                    }, void 0, false, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 43,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                lineNumber: 38,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].panelList,
                children: panels.map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].panelItem,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][panel.orientation]}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].imageFrame,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].image,
                                        src: panel.image.src,
                                        alt: panel.image.alt,
                                        width: panel.image.width,
                                        height: panel.image.height,
                                        sizes: panel.orientation === "spread" ? "(min-width: 760px) 88vw, 100vw" : "(min-width: 760px) 62vw, 100vw",
                                        priority: panel.featured
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                        lineNumber: 54,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                    lineNumber: 53,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].caption,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].captionHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].rank,
                                                    children: formatRank(panel.rank)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                                    children: panel.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                            lineNumber: 70,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].metadata,
                                            children: formatMetadata(panel)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                            lineNumber: 74,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].commentary,
                                            children: panel.commentary
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                            lineNumber: 75,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                    lineNumber: 69,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                            lineNumber: 52,
                            columnNumber: 7
                        }, this)
                    }, panel.id, false, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 51,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, this);
}
function Exhibition({ panels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].exhibition,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].intro,
                "aria-labelledby": "exhibition-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].kicker,
                        children: "Personal collection / panel study"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 89,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].folio,
                        children: "Six-panel vertical slice"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 90,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].introCopy,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "exhibition-title",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].introTitle,
                                children: "Manga Panel Gallery"
                            }, void 0, false, {
                                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                lineNumber: 92,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].rule,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                lineNumber: 95,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].introStatement,
                                children: "A curated sequence of favorite manga panels, paced like a small exhibition where paper, ink, and notation stay quiet enough for the artwork to lead."
                            }, void 0, false, {
                                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                lineNumber: 96,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 91,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].introFooter,
                        "aria-label": "Exhibition status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].kicker,
                                children: [
                                    panels.length,
                                    " panels"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                lineNumber: 103,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].kicker,
                                children: "Canonical local records"
                            }, void 0, false, {
                                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                                lineNumber: 104,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                        lineNumber: 102,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                lineNumber: 88,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelGallery, {
                panels: panels
            }, void 0, false, {
                fileName: "[project]/src/components/gallery/panel-gallery.tsx",
                lineNumber: 108,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/gallery/panel-gallery.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/data/panels.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuredPanel",
    ()=>featuredPanel,
    "panels",
    ()=>panels
]);
const panels = [
    {
        id: "panel-001",
        slug: "straw-hat-at-dawn",
        rank: 1,
        title: "Straw Hat at Dawn",
        series: "One Piece",
        creator: "Eiichiro Oda",
        chapter: 1,
        chapterTitle: "Romance Dawn",
        publicationYear: 1997,
        arc: "East Blue",
        characters: [
            "Monkey D. Luffy",
            "Shanks"
        ],
        themes: [
            "inheritance",
            "promise",
            "departure"
        ],
        commentary: "A quiet promise becomes the emotional scale for an entire voyage, turning a small gesture into a lifelong horizon.",
        featured: true,
        image: {
            src: "/panels/straw-hat-at-dawn.webp",
            alt: "Portrait placeholder panel of a young pirate holding a straw hat beneath an open sky.",
            width: 1200,
            height: 1800
        },
        orientation: "portrait"
    },
    {
        id: "panel-002",
        slug: "swordsman-in-the-rain",
        rank: 2,
        title: "Swordsman in the Rain",
        series: "Vagabond",
        creator: "Takehiko Inoue",
        chapter: 117,
        publicationYear: 2001,
        arc: "Kyoto",
        characters: [
            "Miyamoto Musashi"
        ],
        themes: [
            "solitude",
            "discipline",
            "violence"
        ],
        commentary: "The horizontal pause lets weather and silence carry the scene, making restraint feel heavier than action.",
        image: {
            src: "/panels/swordsman-in-the-rain.webp",
            alt: "Landscape placeholder panel of a lone swordsman standing in rain across a wide empty road.",
            width: 1800,
            height: 1100
        },
        orientation: "landscape"
    },
    {
        id: "panel-003",
        slug: "alchemy-circle",
        rank: 3,
        title: "Alchemy Circle",
        series: "Fullmetal Alchemist",
        creator: "Hiromu Arakawa",
        chapter: 23,
        publicationYear: 2003,
        arc: "Central City",
        characters: [
            "Edward Elric",
            "Alphonse Elric"
        ],
        themes: [
            "equivalent exchange",
            "grief",
            "resolve"
        ],
        commentary: "The square composition compresses grief and calculation into a single emblem, precise enough to feel ceremonial.",
        image: {
            src: "/panels/alchemy-circle.webp",
            alt: "Square placeholder panel of two brothers framed around a chalk transmutation circle.",
            width: 1400,
            height: 1400
        },
        orientation: "square"
    },
    {
        id: "panel-004",
        slug: "wall-of-titans",
        rank: 4,
        title: "Wall of Titans",
        series: "Attack on Titan",
        creator: "Hajime Isayama",
        chapter: 50,
        publicationYear: 2013,
        arc: "Clash of the Titans",
        characters: [
            "Eren Yeager",
            "Mikasa Ackerman"
        ],
        themes: [
            "terror",
            "survival",
            "scale"
        ],
        commentary: "The spread uses impossible scale as the subject, forcing the reader to measure human fear against the page itself.",
        image: {
            src: "/panels/wall-of-titans.webp",
            alt: "Double-page spread placeholder panel of tiny figures facing a vast wall of looming silhouettes.",
            width: 2400,
            height: 1500
        },
        orientation: "spread"
    },
    {
        id: "panel-005",
        slug: "karasuno-final-jump",
        rank: 5,
        title: "Karasuno Final Jump",
        series: "Haikyu!!",
        creator: "Haruichi Furudate",
        chapter: 292,
        publicationYear: 2018,
        arc: "Nationals",
        characters: [
            "Shoyo Hinata",
            "Tobio Kageyama"
        ],
        themes: [
            "teamwork",
            "momentum",
            "joy"
        ],
        commentary: "The panel turns athletic timing into bright vertical lift, letting bodies and white space share the same rush upward.",
        image: {
            src: "/panels/karasuno-final-jump.webp",
            alt: "Portrait placeholder panel of two volleyball players rising near the net in a decisive jump.",
            width: 1100,
            height: 1700
        },
        orientation: "portrait"
    },
    {
        id: "panel-006",
        slug: "moonlit-train-platform",
        rank: 6,
        title: "Moonlit Train Platform",
        series: "Demon Slayer",
        creator: "Koyoharu Gotouge",
        chapter: 66,
        publicationYear: 2017,
        arc: "Mugen Train",
        characters: [
            "Tanjiro Kamado",
            "Kyojuro Rengoku"
        ],
        themes: [
            "duty",
            "farewell",
            "courage"
        ],
        commentary: "The low, quiet angle gives the aftermath room to breathe, making courage register through stillness instead of spectacle.",
        image: {
            src: "/panels/moonlit-train-platform.webp",
            alt: "Landscape placeholder panel of two figures on a moonlit train platform after a battle.",
            width: 1800,
            height: 1200
        },
        orientation: "landscape"
    }
];
const featuredPanel = panels.find((panel)=>panel.featured) ?? panels[0];
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7.29.7_supports-color@7.2.0__react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/gallery/panel-gallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$panels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/panels.ts [app-rsc] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "exhibition-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f$react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$gallery$2f$panel$2d$gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Exhibition"], {
            panels: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$panels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["panels"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 7,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0qreih8._.js.map