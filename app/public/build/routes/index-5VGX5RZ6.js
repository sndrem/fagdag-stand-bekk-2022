import {
    Link,
    Outlet,
    require_jsx_dev_runtime,
} from "/build/_shared/chunk-6ZX3C243.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "main",
        {
            className: "m-auto flex w-5/6 flex-col content-center items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Link,
                    {
                        className: "underline",
                        to: "/search",
                        children: "S\xF8k p\xE5 Unsplash",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 6,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Outlet,
                    {},
                    void 0,
                    false,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 9,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        true,
        {
            fileName: "app/routes/index.tsx",
            lineNumber: 5,
            columnNumber: 5,
        },
        this
    );
}
export { Index as default };
//# sourceMappingURL=/build/routes/index-5VGX5RZ6.js.map