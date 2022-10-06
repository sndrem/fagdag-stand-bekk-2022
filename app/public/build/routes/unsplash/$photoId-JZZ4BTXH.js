import { PhotoAttribution } from "/build/_shared/chunk-YMTL42QF.js";
import {
    Link,
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-KXONRPXY.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$photoId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    var _a, _b, _c, _d;
    const data = useLoaderData();
    const metadata = JSON.parse(data.result.metadata);
    const unsplash =
        (_a = metadata.unsplashResponse) == null ? void 0 : _a.response;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
            className: "flex flex-col items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "grid grid-cols-2 gap-20 text-center",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "div",
                                {
                                    children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "h1",
                                            {
                                                className: "font-bold",
                                                children: "Originalbilde",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 34,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "p",
                                            {
                                                children: [
                                                    "Original st\xF8rrelse p\xE5 bilde:",
                                                    " ",
                                                    parseInt(
                                                        metadata.originalStorrelse
                                                    ).toFixed(2),
                                                    " MB",
                                                ],
                                            },
                                            void 0,
                                            true,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 35,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "img",
                                            {
                                                src: `/${metadata.nedlastetBildePath}`,
                                                alt: "Originalbilde",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 39,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "p",
                                            {
                                                children: [
                                                    unsplash == null
                                                        ? void 0
                                                        : unsplash.exif
                                                              .aperture,
                                                    " / ",
                                                    unsplash == null
                                                        ? void 0
                                                        : unsplash.exif
                                                              .exposure_time,
                                                    " -",
                                                    " ",
                                                    unsplash == null
                                                        ? void 0
                                                        : unsplash.exif.model,
                                                ],
                                            },
                                            void 0,
                                            true,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 40,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            PhotoAttribution,
                                            {
                                                attributionLink:
                                                    (_b =
                                                        unsplash == null
                                                            ? void 0
                                                            : unsplash.links
                                                                  .html) != null
                                                        ? _b
                                                        : "",
                                                photoBy:
                                                    (_c =
                                                        unsplash == null
                                                            ? void 0
                                                            : unsplash.user
                                                                  .name) != null
                                                        ? _c
                                                        : "",
                                                userProfileLink:
                                                    (_d =
                                                        unsplash == null
                                                            ? void 0
                                                            : unsplash.user
                                                                  .links
                                                                  .html) != null
                                                        ? _d
                                                        : "",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 44,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                    ],
                                },
                                void 0,
                                true,
                                {
                                    fileName:
                                        "app/routes/unsplash/$photoId.tsx",
                                    lineNumber: 33,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "div",
                                {
                                    children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "h1",
                                            {
                                                className: "font-bold",
                                                children:
                                                    "SVG etter konvertering",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 51,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "p",
                                            {
                                                children: [
                                                    "Ny st\xF8rrelse p\xE5 bilde: ",
                                                    metadata.nyStorrelse,
                                                    " MB",
                                                ],
                                            },
                                            void 0,
                                            true,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 52,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "img",
                                            {
                                                src: `/${metadata.resultatSvgPath}`,
                                                alt: "SVG av originalbilde",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 53,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "p",
                                            {
                                                children: [
                                                    "Antall primitives: ",
                                                    data.result
                                                        .numberOfPrimitives,
                                                ],
                                            },
                                            void 0,
                                            true,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 57,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                    ],
                                },
                                void 0,
                                true,
                                {
                                    fileName:
                                        "app/routes/unsplash/$photoId.tsx",
                                    lineNumber: 50,
                                    columnNumber: 9,
                                },
                                this
                            ),
                        ],
                    },
                    void 0,
                    true,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 32,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "m-5",
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
                            "p",
                            {
                                className: "text-2xl",
                                children: [
                                    "Du sparer ",
                                    metadata.prosentSpart,
                                    " %",
                                ],
                            },
                            void 0,
                            true,
                            {
                                fileName: "app/routes/unsplash/$photoId.tsx",
                                lineNumber: 61,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 60,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Link,
                    {
                        className: "rounded-md bg-accent py-5 px-10",
                        to: "/search",
                        children: "Nytt s\xF8k",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 64,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        true,
        {
            fileName: "app/routes/unsplash/$photoId.tsx",
            lineNumber: 31,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$photoId-JZZ4BTXH.js.map
