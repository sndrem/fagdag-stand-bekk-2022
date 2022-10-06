import "/build/_shared/chunk-H524VYY6.js";
import {
    Outlet,
    useActionData,
    useParams,
    useTransition,
} from "/build/_shared/chunk-57HXC7CF.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-3CPB4T5C.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/search/$query.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashSearchRoute() {
    var _a;
    const actionData = useActionData();
    const params = useParams();
    const transition = useTransition();
    if (transition.state === "loading") {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
                className: "flex flex-col items-center",
                children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "p",
                        {
                            children:
                                "Henter bilde fra Unsplash, knasker det gjennom Sqip og spytter ut svg. Vennligst vent...",
                        },
                        void 0,
                        false,
                        {
                            fileName: "app/routes/search/$query.tsx",
                            lineNumber: 37,
                            columnNumber: 9,
                        },
                        this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "img",
                        {
                            className:
                                "mt-10 h-64 rounded-lg bg-white shadow-lg",
                            src: "/sauelaster.gif",
                            alt: "",
                        },
                        void 0,
                        false,
                        {
                            fileName: "app/routes/search/$query.tsx",
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
                fileName: "app/routes/search/$query.tsx",
                lineNumber: 36,
                columnNumber: 7,
            },
            this
        );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
            className: "flex flex-col items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "form",
                    {
                        method: "post",
                        action: "/search?index",
                        className: "w-3/5",
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
                                            className: "my-2",
                                            children: [
                                                "S\xF8k via",
                                                " ",
                                                /* @__PURE__ */ (0,
                                                import_jsx_dev_runtime.jsxDEV)(
                                                    "a",
                                                    {
                                                        className: "underline",
                                                        href: "https://unsplash.com/",
                                                        children: "Unsplash",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                        fileName:
                                                            "app/routes/search/$query.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 13,
                                                    },
                                                    this
                                                ),
                                            ],
                                        },
                                        void 0,
                                        true,
                                        {
                                            fileName:
                                                "app/routes/search/$query.tsx",
                                            lineNumber: 54,
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
                                            className: "w-full rounded-lg p-2",
                                            value:
                                                (_a = params.query) != null
                                                    ? _a
                                                    : "",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/search/$query.tsx",
                                            lineNumber: 60,
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
                                                "mt-5 block rounded-lg bg-accent px-52 py-2",
                                            children: "S\xF8k",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/search/$query.tsx",
                                            lineNumber: 67,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                ],
                            },
                            void 0,
                            true,
                            {
                                fileName: "app/routes/search/$query.tsx",
                                lineNumber: 53,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/$query.tsx",
                        lineNumber: 52,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "grid grid-cols-4 gap-5",
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
                            Outlet,
                            {},
                            void 0,
                            false,
                            {
                                fileName: "app/routes/search/$query.tsx",
                                lineNumber: 141,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/$query.tsx",
                        lineNumber: 75,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        true,
        {
            fileName: "app/routes/search/$query.tsx",
            lineNumber: 51,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashSearchRoute as default };
//# sourceMappingURL=/build/routes/search/$query-CD35T4EQ.js.map
