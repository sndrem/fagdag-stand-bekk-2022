import {
    Link,
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-NJUEIAVU.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$photoId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    const data = useLoaderData();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_jsx_dev_runtime.Fragment,
        {
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Link,
                    {
                        to: "/search",
                        children: "Nytt s\xF8k",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 31,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "grid grid-cols-2",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "div",
                                {
                                    className: "border-2 border-red-300",
                                    children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "h1",
                                            {
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
                                            "img",
                                            {
                                                className: "h-1/3 object-cover",
                                                src: `/${data.result.nedlastetBildePath}`,
                                                alt: "Originalbilde",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 35,
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
                                                children:
                                                    "SVG etter konvertering",
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
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "img",
                                            {
                                                className: "h-1/3",
                                                src: `/${data.result.resultatSvgPath}`,
                                                alt: "SVG av originalbilde",
                                            },
                                            void 0,
                                            false,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 43,
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
                                    lineNumber: 41,
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
                    "pre",
                    {
                        children: JSON.stringify(data, null, 2),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 50,
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
            lineNumber: 30,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$photoId-3T7XIV5X.js.map
