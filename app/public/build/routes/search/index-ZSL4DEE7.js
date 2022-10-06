import { PhotoAttribution } from "/build/_shared/chunk-DU7OUM7T.js";
import {
    Form,
    Link,
    require_jsx_dev_runtime,
    useActionData,
    useSearchParams,
    useTransition,
} from "/build/_shared/chunk-OS36OLQS.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/search/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashSearchRoute() {
    var _a, _b;
    const actionData = useActionData();
    const transition = useTransition();
    const [search] = useSearchParams();
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
                            fileName: "app/routes/search/index.tsx",
                            lineNumber: 47,
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
                            fileName: "app/routes/search/index.tsx",
                            lineNumber: 51,
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
                lineNumber: 46,
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
                    Form,
                    {
                        method: "get",
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
                                                            "app/routes/search/index.tsx",
                                                        lineNumber: 66,
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
                                            lineNumber: 64,
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
                                            defaultValue:
                                                (_a = search.get("query")) !=
                                                null
                                                    ? _a
                                                    : "",
                                        },
                                        void 0,
                                        false,
                                        {
                                            fileName:
                                                "app/routes/search/index.tsx",
                                            lineNumber: 70,
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
                                            lineNumber: 77,
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
                                lineNumber: 63,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 62,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "grid grid-cols-4 gap-5",
                        children:
                            (_b =
                                actionData == null
                                    ? void 0
                                    : actionData.response) == null
                                ? void 0
                                : _b.results.map((img) => {
                                      return /* @__PURE__ */ (0,
                                      import_jsx_dev_runtime.jsxDEV)(
                                          ImageLink,
                                          {
                                              id: img.id,
                                              src: img.urls.regular,
                                              altText: img.alt_description,
                                              photoBy: img.user.name,
                                              attributionLink: img.links.html,
                                              userProfileLink:
                                                  img.user.links.html,
                                          },
                                          img.id,
                                          false,
                                          {
                                              fileName:
                                                  "app/routes/search/index.tsx",
                                              lineNumber: 153,
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
                        lineNumber: 85,
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
            lineNumber: 61,
            columnNumber: 5,
        },
        this
    );
}
function ImageLink({
    src,
    id,
    altText = "",
    photoBy,
    attributionLink,
    userProfileLink,
}) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
            className: "flex flex-1 flex-col",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Link,
                    {
                        to: `/unsplash/${encodeURIComponent(id)}`,
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
                            "img",
                            {
                                className: "h-96 w-96 object-cover shadow-lg",
                                alt: altText,
                                src,
                            },
                            void 0,
                            false,
                            {
                                fileName: "app/routes/search/index.tsx",
                                lineNumber: 187,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 186,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    PhotoAttribution,
                    {
                        attributionLink,
                        photoBy,
                        userProfileLink,
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 193,
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
            lineNumber: 185,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashSearchRoute as default };
//# sourceMappingURL=/build/routes/search/index-ZSL4DEE7.js.map
