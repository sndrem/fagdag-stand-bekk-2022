import {
    Link,
    require_jsx_dev_runtime,
    useActionData,
    useTransition,
} from "/build/_shared/chunk-NJUEIAVU.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/search/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashSearchRoute() {
    var _a;
    const actionData = useActionData();
    const transition = useTransition();
    if (transition.state === "loading") {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "p",
            {
                children:
                    "Henter bilde fra Unsplash, knasker det gjennom Sqip og spytter ut svg. Vennligst vent...",
            },
            void 0,
            false,
            {
                fileName: "app/routes/search/index.tsx",
                lineNumber: 27,
                columnNumber: 7,
            },
            this
        );
    }
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
                        lineNumber: 36,
                        columnNumber: 7,
                    },
                    this
                ),
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
                                                "S\xF8k hos",
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
                                                            "app/routes/search/index.tsx",
                                                        lineNumber: 43,
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
                                                "app/routes/search/index.tsx",
                                            lineNumber: 41,
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
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/search/index.tsx",
                                            lineNumber: 47,
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
                                                "app/routes/search/index.tsx",
                                            lineNumber: 53,
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
                                lineNumber: 40,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 39,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "grid grid-cols-4 gap-5",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 62,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 69,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 76,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 83,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 90,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 97,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 104,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                ImageLink,
                                {
                                    id: "",
                                    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                                    altText: "img.alt_description",
                                    photoBy: "img.user.name",
                                    attributionLink: "img.links.download",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 111,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            (_a =
                                actionData == null
                                    ? void 0
                                    : actionData.response) == null
                                ? void 0
                                : _a.results.map((img) => {
                                      return /* @__PURE__ */ (0,
                                      import_jsx_dev_runtime.jsxDEV)(
                                          ImageLink,
                                          {
                                              id: img.id,
                                              src: img.urls.regular,
                                              altText: img.alt_description,
                                              photoBy: img.user.name,
                                              attributionLink:
                                                  img.links.download,
                                          },
                                          img.id,
                                          false,
                                          {
                                              fileName:
                                                  "app/routes/search/index.tsx",
                                              lineNumber: 121,
                                              columnNumber: 13,
                                          },
                                          this
                                      );
                                  }),
                        ],
                    },
                    void 0,
                    true,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 61,
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
            lineNumber: 35,
            columnNumber: 5,
        },
        this
    );
}
function ImageLink({ src, id, altText = "", photoBy, attributionLink }) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
            className: "flex flex-1 flex-col",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Link,
                    {
                        prefetch: "intent",
                        to: `/unsplash/${encodeURIComponent(id)}`,
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
                            "img",
                            {
                                className: "h-96 w-4/5 object-cover shadow-lg",
                                alt: altText,
                                src,
                            },
                            void 0,
                            false,
                            {
                                fileName: "app/routes/search/index.tsx",
                                lineNumber: 152,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 151,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "small",
                    {
                        children: [
                            "Foto av ",
                            photoBy,
                            " -",
                            " ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "a",
                                {
                                    href: attributionLink,
                                    download: true,
                                    children: "Last ned",
                                },
                                void 0,
                                false,
                                {
                                    fileName: "app/routes/search/index.tsx",
                                    lineNumber: 160,
                                    columnNumber: 9,
                                },
                                this
                            ),
                        ],
                    },
                    void 0,
                    true,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 158,
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
            lineNumber: 150,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashSearchRoute as default };
//# sourceMappingURL=/build/routes/search/index-LGP6WIF7.js.map