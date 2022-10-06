import { PhotoAttribution } from "/build/_shared/chunk-4PIG6PW6.js";
import {
    Link2 as Link,
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-HLUDVZYK.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$photoId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    var _a, _b, _c, _d;
    const data = useLoaderData();
    const metadata = JSON.parse(data.result[0].metadata);
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
                        className: "grid grid-cols-1 gap-20 text-center",
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
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
                                            lineNumber: 48,
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
                                            lineNumber: 49,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_dev_runtime.jsxDEV)(
                                        "img",
                                        {
                                            className: "w-2/5",
                                            src: `/${metadata.nedlastetBildePath}`,
                                            alt: "Originalbilde",
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
                                                unsplash == null
                                                    ? void 0
                                                    : unsplash.exif.aperture,
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
                                            lineNumber: 58,
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
                                                        : unsplash.user.name) !=
                                                null
                                                    ? _c
                                                    : "",
                                            userProfileLink:
                                                (_d =
                                                    unsplash == null
                                                        ? void 0
                                                        : unsplash.user.links
                                                              .html) != null
                                                    ? _d
                                                    : "",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/unsplash/$photoId.tsx",
                                            lineNumber: 62,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                ],
                            },
                            void 0,
                            true,
                            {
                                fileName: "app/routes/unsplash/$photoId.tsx",
                                lineNumber: 47,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 46,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "h1",
                                {
                                    className: "text-center font-bold",
                                    children: "SVG etter konvertering",
                                },
                                void 0,
                                false,
                                {
                                    fileName:
                                        "app/routes/unsplash/$photoId.tsx",
                                    lineNumber: 70,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "div",
                                {
                                    className: "grid grid-cols-4 gap-10",
                                    children: data.result.map((result) => {
                                        const metadata2 = JSON.parse(
                                            result.metadata
                                        );
                                        return /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "div",
                                            {
                                                className: "mb-10",
                                                children: [
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "p",
                                                        {
                                                            children: [
                                                                "Ny st\xF8rrelse p\xE5 bilde: ",
                                                                metadata2.nyStorrelse,
                                                                " MB",
                                                            ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "img",
                                                        {
                                                            src: `/${metadata2.resultatSvgPath}`,
                                                            alt: "SVG av originalbilde",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "p",
                                                        {
                                                            children: [
                                                                "Antall primitives: ",
                                                                result.numberOfPrimitives,
                                                            ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "p",
                                                        {
                                                            children: [
                                                                "Du sparer ",
                                                                metadata2.prosentSpart,
                                                                " %",
                                                            ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                ],
                                            },
                                            result.id,
                                            true,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15,
                                            },
                                            this
                                        );
                                    }),
                                },
                                void 0,
                                false,
                                {
                                    fileName:
                                        "app/routes/unsplash/$photoId.tsx",
                                    lineNumber: 72,
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
                        lineNumber: 69,
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
                        lineNumber: 90,
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
            lineNumber: 45,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$photoId-6YB2VZSJ.js.map
