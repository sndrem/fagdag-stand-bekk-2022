import {
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-6ZX3C243.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$unsplashId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    const data = useLoaderData();
    console.log(data.result);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_jsx_dev_runtime.Fragment,
        {
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "h1",
                                {
                                    children: "Originalbilde",
                                },
                                void 0,
                                false,
                                {
                                    fileName:
                                        "app/routes/unsplash/$unsplashId.tsx",
                                    lineNumber: 34,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "img",
                                {
                                    className: "h-1/3",
                                    src: `/${data.result.nedlastetBildePath}`,
                                    alt: "Originalbilde",
                                },
                                void 0,
                                false,
                                {
                                    fileName:
                                        "app/routes/unsplash/$unsplashId.tsx",
                                    lineNumber: 35,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "h1",
                                {
                                    children: "SVG etter konvertering",
                                },
                                void 0,
                                false,
                                {
                                    fileName:
                                        "app/routes/unsplash/$unsplashId.tsx",
                                    lineNumber: 40,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                                        "app/routes/unsplash/$unsplashId.tsx",
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
                        fileName: "app/routes/unsplash/$unsplashId.tsx",
                        lineNumber: 33,
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
                        fileName: "app/routes/unsplash/$unsplashId.tsx",
                        lineNumber: 47,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        true,
        {
            fileName: "app/routes/unsplash/$unsplashId.tsx",
            lineNumber: 32,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$unsplashId-K3YHUGNN.js.map
