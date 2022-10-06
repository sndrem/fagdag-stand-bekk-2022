import {
    require_jsx_dev_runtime,
    useLoaderData,
    useParams,
} from "/build/_shared/chunk-ER4D2HGA.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/unsplash/$unsplashId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UnsplashUrl() {
    const url = useParams().unsplashId;
    const data = useLoaderData();
    console.log({ data });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
            className: "h-1/3",
            src: `/images/tpxnuebsy28-2022-09-29T15:38:58.918Z.png`,
            alt: "Bilde",
        },
        void 0,
        false,
        {
            fileName: "app/routes/unsplash/$unsplashId.tsx",
            lineNumber: 23,
            columnNumber: 5,
        },
        this
    );
}
export { UnsplashUrl as default };
//# sourceMappingURL=/build/routes/unsplash/$unsplashId-XPPDF37R.js.map
