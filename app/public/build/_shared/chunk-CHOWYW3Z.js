import { require_jsx_dev_runtime } from "/build/_shared/chunk-WJFQG6BR.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/constants.ts
var APP_NAME = "fagdagstand";
var UNSPLASH_URL = "https://unsplash.com";

// app/components/PhotoAttribution.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function utmQueries() {
    return `?utm_source=${APP_NAME}&utm_medium=referral`;
}
function PhotoAttribution({ userProfileLink, photoBy, attributionLink }) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "small",
        {
            children: [
                "Foto av",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                        className: "underline",
                        href: `${userProfileLink}${utmQueries()}`,
                        children: [" ", photoBy, " "],
                    },
                    void 0,
                    true,
                    {
                        fileName: "app/components/PhotoAttribution.tsx",
                        lineNumber: 21,
                        columnNumber: 7,
                    },
                    this
                ),
                " ",
                "fra",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                        className: "underline",
                        href: `${UNSPLASH_URL}${utmQueries()}`,
                        children: "Unsplash",
                    },
                    void 0,
                    false,
                    {
                        fileName: "app/components/PhotoAttribution.tsx",
                        lineNumber: 26,
                        columnNumber: 7,
                    },
                    this
                ),
                " ",
            ],
        },
        void 0,
        true,
        {
            fileName: "app/components/PhotoAttribution.tsx",
            lineNumber: 19,
            columnNumber: 5,
        },
        this
    );
}

export { PhotoAttribution };
//# sourceMappingURL=/build/_shared/chunk-CHOWYW3Z.js.map
