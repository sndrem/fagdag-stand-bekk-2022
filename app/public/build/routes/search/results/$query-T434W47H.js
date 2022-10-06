import { PhotoAttribution } from "/build/_shared/chunk-4SHTREEV.js";
import {
    Link,
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-MVBLZFJA.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/search/results/$query.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QueryResult() {
    var _a, _b;
    const data = useLoaderData();
    console.log({ data });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
            className: "grid grid-cols-4 gap-5",
            children:
                (_b =
                    (_a = data == null ? void 0 : data.response) == null
                        ? void 0
                        : _a.results) == null
                    ? void 0
                    : _b.map((result) => {
                          return /* @__PURE__ */ (0,
                          import_jsx_dev_runtime.jsxDEV)(
                              ImageLink,
                              {
                                  id: result.id,
                                  src: result.urls.regular,
                                  altText: result.alt_description,
                                  photoBy: result.user.name,
                                  attributionLink: result.user.links.html,
                                  userProfileLink: result.user.links.html,
                              },
                              result.id,
                              false,
                              {
                                  fileName:
                                      "app/routes/search/results/$query.tsx",
                                  lineNumber: 95,
                                  columnNumber: 11,
                              },
                              this
                          );
                      }),
        },
        void 0,
        false,
        {
            fileName: "app/routes/search/results/$query.tsx",
            lineNumber: 28,
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
                                fileName:
                                    "app/routes/search/results/$query.tsx",
                                lineNumber: 128,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/results/$query.tsx",
                        lineNumber: 127,
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
                        fileName: "app/routes/search/results/$query.tsx",
                        lineNumber: 134,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        true,
        {
            fileName: "app/routes/search/results/$query.tsx",
            lineNumber: 126,
            columnNumber: 5,
        },
        this
    );
}
export { QueryResult as default };
//# sourceMappingURL=/build/routes/search/results/$query-T434W47H.js.map
