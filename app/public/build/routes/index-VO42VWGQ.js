import {
    require_jsx_dev_runtime,
    useActionData,
} from "/build/_shared/chunk-NMCBDIDI.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
    const actionData = useActionData();
    console.log({ actionData });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "main",
        {
            className: "m-auto flex w-5/6 flex-col content-center items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "h1",
                    {
                        className: "text-3xl",
                        children: "Hello Fagdag-stand \u{1F44B}",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 15,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "form",
                    {
                        method: "post",
                        action: "/?index",
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
                                            fileName: "app/routes/index.tsx",
                                            lineNumber: 18,
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
                                            fileName: "app/routes/index.tsx",
                                            lineNumber: 19,
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
                                            fileName: "app/routes/index.tsx",
                                            lineNumber: 25,
                                            columnNumber: 11,
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
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 16,
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
            lineNumber: 14,
            columnNumber: 5,
        },
        this
    );
}
export { Index as default };
//# sourceMappingURL=/build/routes/index-VO42VWGQ.js.map
