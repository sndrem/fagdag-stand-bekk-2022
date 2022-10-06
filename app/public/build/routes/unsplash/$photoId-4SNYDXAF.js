import { PhotoAttribution } from "/build/_shared/chunk-JNAMZLR2.js";
import {
    Link,
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-NJUEIAVU.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$photoId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    var _a;
    const data = useLoaderData();
    if (
        ((_a = data.result.unsplashResponse) == null ? void 0 : _a.type) !==
        "success"
    ) {
        return null;
    }
    const unsplash = data.result.unsplashResponse.response;
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
                                                lineNumber: 36,
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
                                                        data.result
                                                            .originalStorrelse
                                                    ).toFixed(2),
                                                    " MB",
                                                ],
                                            },
                                            void 0,
                                            true,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 37,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "img",
                                            {
                                                src: `/${data.result.nedlastetBildePath}`,
                                                alt: "Originalbilde",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 41,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            PhotoAttribution,
                                            {
                                                attributionLink:
                                                    unsplash.links.html,
                                                photoBy: unsplash.user.name,
                                                userProfileLink:
                                                    unsplash.user.links.html,
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 42,
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
                                    lineNumber: 35,
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
                                                lineNumber: 49,
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
                                                    data.result.nyStorrelse,
                                                    " MB",
                                                ],
                                            },
                                            void 0,
                                            true,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 50,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "img",
                                            {
                                                src: `/${data.result.resultatSvgPath}`,
                                                alt: "SVG av originalbilde",
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
                                    ],
                                },
                                void 0,
                                true,
                                {
                                    fileName:
                                        "app/routes/unsplash/$photoId.tsx",
                                    lineNumber: 48,
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
                        lineNumber: 34,
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
                                    data.result.prosentSpart,
                                    " %",
                                ],
                            },
                            void 0,
                            true,
                            {
                                fileName: "app/routes/unsplash/$photoId.tsx",
                                lineNumber: 58,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 57,
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
                        lineNumber: 61,
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
            lineNumber: 33,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$photoId-4SNYDXAF.js.map
