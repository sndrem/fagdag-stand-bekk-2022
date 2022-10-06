import {
    require_jsx_dev_runtime,
    useParams,
} from "/build/_shared/chunk-6M5Y2YQO.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$unsplashUrl.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    const url = useParams().unsplashUrl;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
            className: "h-1/6",
            src: url,
            alt: "Bilde",
        },
        void 0,
        false,
        {
            fileName: "app/routes/unsplash/$unsplashUrl.tsx",
            lineNumber: 5,
            columnNumber: 10,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$unsplashUrl-2ZELOVK6.js.map
