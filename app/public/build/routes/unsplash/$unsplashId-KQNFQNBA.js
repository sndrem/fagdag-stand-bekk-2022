import {
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-6ZX3C243.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$unsplashId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    const data = useLoaderData();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_jsx_dev_runtime.Fragment,
        {
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "h1",
                    {
                        children: "Originalbilde",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$unsplashId.tsx",
                        lineNumber: 30,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "img",
                    {
                        className: "h-1/3",
                        src: `/${data.nedlastetBildePath}`,
                        alt: "Originalbilde",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$unsplashId.tsx",
                        lineNumber: 31,
                        columnNumber: 7,
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
                        fileName: "app/routes/unsplash/$unsplashId.tsx",
                        lineNumber: 36,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "img",
                    {
                        className: "h-1/3",
                        src: `/${data.resultatSvgPath}`,
                        alt: "SVG av originalbilde",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/unsplash/$unsplashId.tsx",
                        lineNumber: 37,
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
                        lineNumber: 42,
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
            lineNumber: 29,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$unsplashId-KQNFQNBA.js.map
