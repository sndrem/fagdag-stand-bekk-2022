import { redirect } from "/build/_shared/chunk-YICFNOOV.js";
import {
    require_jsx_dev_runtime,
    useLoaderData,
} from "/build/_shared/chunk-345BUX6A.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/search/$query.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QueryResult() {
    var _a, _b;
    const data = useLoaderData();
    if (!data) return redirect("/search");
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
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              ImageLink,
                              {
                                  src: result.urls.regular,
                                  altText: result.alt_description,
                                  photoBy: result.user.name,
                                  attributionLink: result.user.links.html,
                                  userProfileLink: result.user.links.html,
                              },
                              result.id,
                              false,
                              {
                                  fileName: "app/routes/search/$query.tsx",
                                  lineNumber: 92,
                                  columnNumber: 9,
                              },
                              this
                          );
                      }),
        },
        void 0,
        false,
        {
            fileName: "app/routes/search/$query.tsx",
            lineNumber: 26,
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
                                fileName: "app/routes/search/$query.tsx",
                                lineNumber: 123,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/routes/search/$query.tsx",
                        lineNumber: 122,
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
                        fileName: "app/routes/search/$query.tsx",
                        lineNumber: 129,
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
            lineNumber: 121,
            columnNumber: 5,
        },
        this
    );
}
export { QueryResult as default };
//# sourceMappingURL=/build/routes/search/$query-2JHLMZLV.js.map
