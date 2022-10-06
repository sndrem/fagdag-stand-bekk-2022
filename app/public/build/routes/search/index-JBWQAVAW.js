import {
    Link,
    require_jsx_dev_runtime,
    useActionData,
} from "/build/_shared/chunk-6M5Y2YQO.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/search/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashSearchRoute() {
    var _a;
    const actionData = useActionData();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_jsx_dev_runtime.Fragment,
        {
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Link,
                    {
                        className: "underline",
                        to: "..",
                        children: "Forsiden",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 26,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "form",
                    {
                        method: "post",
                        action: "/search?index",
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
                            "div",
                            {
                                className: "my-5 flex flex-col items-center",
                                children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_dev_runtime.jsxDEV)(
                                        "label",
                                        {
                                            htmlFor: "query",
                                            children: "S\xF8k hos Unsplash",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/search/index.tsx",
                                            lineNumber: 31,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_dev_runtime.jsxDEV)(
                                        "input",
                                        {
                                            type: "text",
                                            name: "query",
                                            placeholder: "S\xF8k p\xE5 engelsk",
                                            className: "rounded-lg p-2",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/search/index.tsx",
                                            lineNumber: 32,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_dev_runtime.jsxDEV)(
                                        "button",
                                        {
                                            type: "submit",
                                            className:
                                                "mt-2 block w-full rounded-lg bg-accent",
                                            children: "S\xF8k",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/search/index.tsx",
                                            lineNumber: 38,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                ],
                            },
                            void 0,
                            true,
                            {
                                fileName: "app/routes/search/index.tsx",
                                lineNumber: 30,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 29,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "grid grid-cols-5 gap-10",
                        children:
                            (_a =
                                actionData == null
                                    ? void 0
                                    : actionData.response) == null
                                ? void 0
                                : _a.results.map((img) => {
                                      return /* @__PURE__ */ (0,
                                      import_jsx_dev_runtime.jsxDEV)(
                                          Link,
                                          {
                                              to: `/unsplash/${img.urls.regular}`,
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_dev_runtime.jsxDEV)(
                                                  "img",
                                                  {
                                                      alt: img.alt_description,
                                                      src: img.urls.regular,
                                                  },
                                                  img.id,
                                                  false,
                                                  {
                                                      fileName:
                                                          "app/routes/search/index.tsx",
                                                      lineNumber: 50,
                                                      columnNumber: 15,
                                                  },
                                                  this
                                              ),
                                          },
                                          void 0,
                                          false,
                                          {
                                              fileName:
                                                  "app/routes/search/index.tsx",
                                              lineNumber: 49,
                                              columnNumber: 13,
                                          },
                                          this
                                      );
                                  }),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 46,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        true,
        {
            fileName: "app/routes/search/index.tsx",
            lineNumber: 25,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashSearchRoute as default };
//# sourceMappingURL=/build/routes/search/index-JBWQAVAW.js.map
