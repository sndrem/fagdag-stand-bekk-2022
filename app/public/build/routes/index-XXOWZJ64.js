import {
    Link,
    Outlet,
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-NJUEIAVU.js";
import { __commonJS, __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// empty-module:../lib/db.server
var require_db = __commonJS({
    "empty-module:../lib/db.server"(exports, module) {
        module.exports = {};
    },
});

// app/routes/index.tsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
    const loaderData = useLoaderData();
    console.log(loaderData);
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
                        lineNumber: 17,
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
                        lineNumber: 20,
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
            lineNumber: 16,
            columnNumber: 5,
        },
        this
    );
}
export { Index as default };
//# sourceMappingURL=/build/routes/index-XXOWZJ64.js.map
