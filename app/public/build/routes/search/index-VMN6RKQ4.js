import { PhotoAttribution } from "/build/_shared/chunk-4PIG6PW6.js";
import {
    Form,
    Link,
    Link2,
    require_jsx_dev_runtime,
    useLoaderData,
    useSearchParams,
    useTransition,
} from "/build/_shared/chunk-HLUDVZYK.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/components/Soketips.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var tips = [
    { emoji: "\u{1F63B}", query: "kittens" },
    { emoji: "\u{1F436}", query: "puppies" },
    { emoji: "\u{1F341}", query: "fall" },
    { emoji: "\u{1F355}", query: "pizza" },
    { emoji: "\u{1F420}", query: "fish" },
    { emoji: "\u{1F4F8}", query: "photography" },
    { emoji: "\u{1F422}", query: "turtles" },
    { emoji: "\u{1F984}", query: "unicorns" },
    { emoji: "\u{1F43F}", query: "chipmunks" },
];
function Soketips() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
            className: "text-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "p",
                    {
                        children: "Usikker p\xE5 hva du skal s\xF8ke etter?",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/components/Soketips.tsx",
                        lineNumber: 18,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "p",
                    {
                        children:
                            "Trykk p\xE5 en av emojiene og se hva som skjer...",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/components/Soketips.tsx",
                        lineNumber: 19,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "my-10 grid grid-cols-3 gap-5 text-4xl",
                        children: tips.map(({ emoji, query }) => {
                            return /* @__PURE__ */ (0,
                            import_jsx_dev_runtime.jsxDEV)(
                                Link,
                                {
                                    to: `/search?query=${query}`,
                                    children: emoji,
                                },
                                query,
                                false,
                                {
                                    fileName: "app/components/Soketips.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13,
                                },
                                this
                            );
                        }),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/components/Soketips.tsx",
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
            fileName: "app/components/Soketips.tsx",
            lineNumber: 17,
            columnNumber: 5,
        },
        this
    );
}

// app/routes/search/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashSearchRoute() {
    var _a, _b;
    const actionData = useLoaderData();
    const transition = useTransition();
    const [search] = useSearchParams();
    if (
        transition.state === "loading" &&
        transition.location.pathname.includes("/unsplash")
    ) {
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
                            fileName: "app/routes/search/index.tsx",
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
                fileName: "app/routes/search/index.tsx",
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
                    Form,
                    {
                        method: "get",
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
                                                "app/routes/search/index.tsx",
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
                                                "app/routes/search/index.tsx",
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
                                fileName: "app/routes/search/index.tsx",
                                lineNumber: 53,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 52,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Soketips,
                    {},
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 75,
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
                                              lineNumber: 145,
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
                        lineNumber: 77,
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
            lineNumber: 51,
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
                    Link2,
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
                                lineNumber: 179,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/index.tsx",
                        lineNumber: 178,
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
                        lineNumber: 185,
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
            lineNumber: 177,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashSearchRoute as default };
//# sourceMappingURL=/build/routes/search/index-VMN6RKQ4.js.map