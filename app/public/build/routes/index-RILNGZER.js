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
                        children: "S\xF8k via Unsplash",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 18,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "h2",
                    {
                        className: "mt-20 mb-5",
                        children: "Tidligere konverteringer",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 21,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "grid grid-cols-4 gap-5",
                        children:
                            loaderData == null
                                ? void 0
                                : loaderData.map((data) => {
                                      const metadata = JSON.parse(
                                          data.metadata
                                      );
                                      return /* @__PURE__ */ (0,
                                      import_jsx_dev_runtime.jsxDEV)(
                                          Link,
                                          {
                                              to: `/unsplash/${data.unsplashId}`,
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_dev_runtime.jsxDEV)(
                                                  "img",
                                                  {
                                                      className:
                                                          "h-96 w-96 bg-black object-cover p-2 shadow-lg",
                                                      alt:
                                                          metadata == null
                                                              ? void 0
                                                              : metadata.alt_description,
                                                      src: data.pathSvgBilde,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                      fileName:
                                                          "app/routes/index.tsx",
                                                      lineNumber: 27,
                                                      columnNumber: 15,
                                                  },
                                                  this
                                              ),
                                          },
                                          data.id,
                                          false,
                                          {
                                              fileName: "app/routes/index.tsx",
                                              lineNumber: 26,
                                              columnNumber: 13,
                                          },
                                          this
                                      );
                                  }),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 22,
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
                        lineNumber: 36,
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
            lineNumber: 17,
            columnNumber: 5,
        },
        this
    );
}
export { Index as default };
//# sourceMappingURL=/build/routes/index-RILNGZER.js.map
