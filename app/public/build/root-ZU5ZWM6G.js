import {
    Link2 as Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    require_jsx_dev_runtime,
} from "/build/_shared/chunk-HLUDVZYK.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-GZ3Z6DJM.css";

// app/styles/app.css
var app_default = "/build/_assets/app-6FAIBIHR.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
    return [
        { rel: "stylesheet", href: tailwind_default },
        { rel: "stylesheet", href: app_default },
    ];
};
var meta = () => ({
    charset: "utf-8",
    title: "Fagdag-stand",
    viewport: "width=device-width,initial-scale=1",
    description: "Tjeneste som konverterer bilder til svg-bilder via Sqip",
});
function App() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "html",
        {
            lang: "en",
            className: "h-full bg-background",
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
                                    lineNumber: 33,
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
                        lineNumber: 32,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "body",
                    {
                        className: "h-full font-din text-lg",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "header",
                                {
                                    className:
                                        "mb-10 w-full bg-regn py-10 px-5",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_dev_runtime.jsxDEV)(
                                        Link,
                                        {
                                            to: "/",
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
                                                    lineNumber: 39,
                                                    columnNumber: 13,
                                                },
                                                this
                                            ),
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName: "app/root.tsx",
                                            lineNumber: 38,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/root.tsx",
                                    lineNumber: 37,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "main",
                                {
                                    className: "m-auto h-full w-5/6",
                                    children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            Outlet,
                                            {},
                                            void 0,
                                            false,
                                            {
                                                fileName: "app/root.tsx",
                                                lineNumber: 43,
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
                                                lineNumber: 44,
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
                                                lineNumber: 45,
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
                                                lineNumber: 46,
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
                                    lineNumber: 42,
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
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 5,
        },
        this
    );
}
export { App as default, links, meta };
//# sourceMappingURL=/build/root-ZU5ZWM6G.js.map
