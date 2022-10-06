import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    require_jsx_dev_runtime,
} from "/build/_shared/chunk-NJUEIAVU.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ICH3LJ3K.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
    return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
    charset: "utf-8",
    title: "Fagdag-stand",
    viewport: "width=device-width,initial-scale=1",
});
function App() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "html",
        {
            lang: "en",
            className: "h-full bg-regn",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "head",
                    {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                Meta,
                                {},
                                void 0,
                                false,
                                {
                                    fileName: "app/root.tsx",
                                    lineNumber: 27,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                Links,
                                {},
                                void 0,
                                false,
                                {
                                    fileName: "app/root.tsx",
                                    lineNumber: 28,
                                    columnNumber: 9,
                                },
                                this
                            ),
                        ],
                    },
                    void 0,
                    true,
                    {
                        fileName: "app/root.tsx",
                        lineNumber: 26,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "body",
                    {
                        className: "h-full",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "header",
                                {
                                    className:
                                        "mb-10 w-full bg-accent py-10 px-5",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_dev_runtime.jsxDEV)(
                                        "p",
                                        {
                                            children:
                                                "Bildeoptimalisering med trekanter",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName: "app/root.tsx",
                                            lineNumber: 32,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/root.tsx",
                                    lineNumber: 31,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "main",
                                {
                                    className:
                                        "m-auto flex h-full w-5/6 flex-col justify-center border-2 border-red-200",
                                    children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            Outlet,
                                            {},
                                            void 0,
                                            false,
                                            {
                                                fileName: "app/root.tsx",
                                                lineNumber: 35,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            ScrollRestoration,
                                            {},
                                            void 0,
                                            false,
                                            {
                                                fileName: "app/root.tsx",
                                                lineNumber: 36,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            Scripts,
                                            {},
                                            void 0,
                                            false,
                                            {
                                                fileName: "app/root.tsx",
                                                lineNumber: 37,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            LiveReload,
                                            {},
                                            void 0,
                                            false,
                                            {
                                                fileName: "app/root.tsx",
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
                                    fileName: "app/root.tsx",
                                    lineNumber: 34,
                                    columnNumber: 9,
                                },
                                this
                            ),
                        ],
                    },
                    void 0,
                    true,
                    {
                        fileName: "app/root.tsx",
                        lineNumber: 30,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        true,
        {
            fileName: "app/root.tsx",
            lineNumber: 25,
            columnNumber: 5,
        },
        this
    );
}
export { App as default, links, meta };
//# sourceMappingURL=/build/root-JC6UXMKP.js.map