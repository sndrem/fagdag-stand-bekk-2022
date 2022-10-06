var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
    __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
        for (var name in all)
            __defProp(target, name, { get: all[name], enumerable: !0 });
    },
    __copyProps = (to, from, except, desc) => {
        if ((from && typeof from == "object") || typeof from == "function")
            for (let key of __getOwnPropNames(from))
                !__hasOwnProp.call(to, key) &&
                    key !== except &&
                    __defProp(to, key, {
                        get: () => from[key],
                        enumerable:
                            !(desc = __getOwnPropDesc(from, key)) ||
                            desc.enumerable,
                    });
        return to;
    };
var __toESM = (mod, isNodeMode, target) => (
        (target = mod != null ? __create(__getProtoOf(mod)) : {}),
        __copyProps(
            isNodeMode || !mod || !mod.__esModule
                ? __defProp(target, "default", { value: mod, enumerable: !0 })
                : target,
            mod
        )
    ),
    __toCommonJS = (mod) =>
        __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
    assets: () => assets_manifest_default,
    assetsBuildDirectory: () => assetsBuildDirectory,
    entry: () => entry,
    publicPath: () => publicPath,
    routes: () => routes,
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
    default: () => handleRequest,
});
var import_stream = require("stream"),
    import_node = require("@remix-run/node"),
    import_react = require("@remix-run/react"),
    import_isbot = __toESM(require("isbot")),
    import_server = require("react-dom/server"),
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
    ABORT_DELAY = 5e3;
function handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
) {
    let callbackName = (0, import_isbot.default)(
        request.headers.get("user-agent")
    )
        ? "onAllReady"
        : "onShellReady";
    return new Promise((resolve, reject) => {
        let didError = !1,
            { pipe, abort } = (0, import_server.renderToPipeableStream)(
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_react.RemixServer,
                    {
                        context: remixContext,
                        url: request.url,
                    },
                    void 0,
                    !1,
                    {
                        fileName: "app/entry.server.tsx",
                        lineNumber: 24,
                        columnNumber: 7,
                    },
                    this
                ),
                {
                    [callbackName]: () => {
                        let body = new import_stream.PassThrough();
                        responseHeaders.set("Content-Type", "text/html"),
                            resolve(
                                new import_node.Response(body, {
                                    headers: responseHeaders,
                                    status: didError ? 500 : responseStatusCode,
                                })
                            ),
                            pipe(body);
                    },
                    onShellError: (err) => {
                        reject(err);
                    },
                    onError: (error) => {
                        (didError = !0), console.error(error);
                    },
                }
            );
        setTimeout(abort, ABORT_DELAY);
    });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
    default: () => App,
    links: () => links,
    meta: () => meta,
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VVUY4NTF.css";

// app/styles/app.css
var app_default = "/build/_assets/app-6FAIBIHR.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
    links = () => [
        { rel: "stylesheet", href: tailwind_default },
        { rel: "stylesheet", href: app_default },
    ],
    meta = () => ({
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
                                import_react2.Meta,
                                {},
                                void 0,
                                !1,
                                {
                                    fileName: "app/root.tsx",
                                    lineNumber: 33,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                import_react2.Links,
                                {},
                                void 0,
                                !1,
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
                    !0,
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
                                        import_react2.Link,
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
                                                !1,
                                                {
                                                    fileName: "app/root.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 13,
                                                },
                                                this
                                            ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                            fileName: "app/root.tsx",
                                            lineNumber: 38,
                                            columnNumber: 11,
                                        },
                                        this
                                    ),
                                },
                                void 0,
                                !1,
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
                                            import_react2.Outlet,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                                fileName: "app/root.tsx",
                                                lineNumber: 43,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            import_react2.ScrollRestoration,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                                fileName: "app/root.tsx",
                                                lineNumber: 44,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            import_react2.Scripts,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                                fileName: "app/root.tsx",
                                                lineNumber: 45,
                                                columnNumber: 11,
                                            },
                                            this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            import_react2.LiveReload,
                                            {},
                                            void 0,
                                            !1,
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
                                !0,
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
                    !0,
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
        !0,
        {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 5,
        },
        this
    );
}

// app/routes/unsplash/$photoId.tsx
var photoId_exports = {};
__export(photoId_exports, {
    default: () => UnsplashUrl,
    loader: () => loader,
});
var import_react3 = require("@remix-run/react"),
    import_server_runtime = require("@remix-run/server-runtime");

// app/constants.ts
var APP_NAME = "fagdagstand",
    UNSPLASH_URL = "https://unsplash.com";

// app/components/PhotoAttribution.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
                    !0,
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
                    !1,
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
        !0,
        {
            fileName: "app/components/PhotoAttribution.tsx",
            lineNumber: 19,
            columnNumber: 5,
        },
        this
    );
}

// app/services/sqip.ts
var import_promises = __toESM(require("fs/promises")),
    import_path = __toESM(require("path")),
    import_sqip = require("sqip");

// app/lib/db.server.ts
var import_client = require("@prisma/client"),
    prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()),
    (prisma = global.__db__),
    prisma.$connect();

// app/services/imageDownloadService.ts
var import_image_downloader = __toESM(require("image-downloader"));
async function downloadImage(url, filepath) {
    try {
        let result = await import_image_downloader.default.image({
            url,
            dest: filepath,
            maxHeaderSize: void 0,
        });
        console.log(
            `Resultat fra nedlasting og lagring av bilde: ${result.filename}`
        );
    } catch (error) {
        console.log("Klarte ikke lagre bilde", error);
    }
}

// app/services/unsplash.ts
var import_unsplash_js = require("unsplash-js"),
    serverApi = (0, import_unsplash_js.createApi)({
        accessKey: process.env.UNSPLASH_ACCESS_KEY,
    }),
    searchPhotos = async (query) => {
        try {
            return await serverApi.search.getPhotos({
                query,
                perPage: 20,
            });
        } catch (error) {
            console.error("Klarte ikke s\xF8ke etter bilder", error);
        }
    },
    getPhotoById = async (id) => {
        try {
            return await serverApi.photos.get({
                photoId: id,
            });
        } catch (error) {
            console.error(`Klarte ikke finne bilde med id: ${id}`, error);
        }
    };

// app/services/sqip.ts
function regnUtStorrelseIMB(fil) {
    return fil.size / (1024 * 1024);
}
function regnUtBesparelseIProsent(original, nyStorrelse) {
    return ((original - nyStorrelse) / original) * 100;
}
async function lagreFilTilMappe(destination, content) {
    await import_promises.default.writeFile(destination, content);
}
async function genererSqipBilde(unsplashResponse, nedlastetBildePath, options) {
    var _a;
    let result = await (0, import_sqip.sqip)({
            input: nedlastetBildePath,
            plugins: [
                {
                    name: "sqip-plugin-primitive",
                    options,
                },
                "sqip-plugin-svgo",
            ],
        }),
        resultatSvgPath = `${import_path.default.dirname(
            __dirname
        )}/public/images/${
            (_a =
                unsplashResponse == null
                    ? void 0
                    : unsplashResponse.response) == null
                ? void 0
                : _a.id
        }-${options.numberOfPrimitives}.svg`;
    await lagreFilTilMappe(resultatSvgPath, result.content);
    let original = await import_promises.default.stat(nedlastetBildePath),
        resultat = await import_promises.default.stat(resultatSvgPath),
        originalStorrelse = regnUtStorrelseIMB(original),
        nyStorrelse = regnUtStorrelseIMB(resultat),
        prosentSpart = regnUtBesparelseIProsent(
            originalStorrelse,
            nyStorrelse
        ).toFixed(2);
    return {
        originalStorrelse: originalStorrelse.toString(),
        nyStorrelse: nyStorrelse.toFixed(10),
        prosentSpart,
        nedlastetBildePath: import_path.default.join(
            "images",
            import_path.default.basename(nedlastetBildePath)
        ),
        resultatSvgPath: import_path.default.join(
            "images",
            import_path.default.basename(resultatSvgPath)
        ),
        unsplashResponse,
    };
}
async function fetchFromUnsplashAndRunThroughSqip(
    photoId,
    numberOfPrimitives = 500
) {
    var _a, _b;
    let metadataFinnesFraFor = await prisma.konvertering.findMany({
        where: { unsplashId: photoId, numberOfPrimitives },
        orderBy: { numberOfPrimitives: "asc" },
    });
    if (metadataFinnesFraFor.length)
        return metadataFinnesFraFor.map((meta2) => ({
            ...JSON.parse(meta2.metadata),
            ...meta2,
        }));
    let unsplashResponse = await getPhotoById(photoId),
        unsplashUrl =
            (((_a =
                unsplashResponse == null
                    ? void 0
                    : unsplashResponse.response) == null
                ? void 0
                : _a.urls.raw) ?? "") + ".png",
        nedlastetBildePath = `${import_path.default.dirname(
            __dirname
        )}/public/images/${photoId}.png`;
    await downloadImage(unsplashUrl, nedlastetBildePath);
    let options = {
            numberOfPrimitives,
            mode: 1,
            blur: 0,
        },
        konvertering = await genererSqipBilde(
            unsplashResponse,
            nedlastetBildePath,
            options
        );
    return [
        await prisma.konvertering.create({
            data: {
                unsplashId:
                    (_b =
                        unsplashResponse == null
                            ? void 0
                            : unsplashResponse.response) == null
                        ? void 0
                        : _b.id,
                metadata: JSON.stringify(konvertering),
                blur: options.blur,
                mode: options.mode,
                numberOfPrimitives: options.numberOfPrimitives,
                pathOriginalbilde: konvertering.nedlastetBildePath,
                pathSvgBilde: konvertering.resultatSvgPath,
            },
        }),
    ];
}

// app/routes/unsplash/$photoId.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
    loader = async ({ params }) => {
        let photoId = params.photoId;
        if (!photoId)
            throw (0, import_server_runtime.json)(
                { message: "Unsplash id er tom" },
                409
            );
        let alternativeImages = [10, 50, 100, 300, 500, 1e3],
            result = [];
        return (
            await Promise.all(
                alternativeImages.map(async (numOfPrimitive) => {
                    let resultatFraKonvertering =
                        await fetchFromUnsplashAndRunThroughSqip(
                            photoId,
                            numOfPrimitive
                        );
                    result.push(...resultatFraKonvertering);
                })
            ),
            (0, import_server_runtime.json)(
                {
                    result: result.sort(
                        (a, b) => a.numberOfPrimitives - b.numberOfPrimitives
                    ),
                },
                200
            )
        );
    };
function UnsplashUrl() {
    var _a;
    let data = (0, import_react3.useLoaderData)(),
        metadata = JSON.parse(data.result[0].metadata),
        unsplash =
            (_a = metadata.unsplashResponse) == null ? void 0 : _a.response;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
            className: "flex flex-col items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "h1",
                    {
                        className: "font-bold",
                        children: "Originalbilde",
                    },
                    void 0,
                    !1,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 46,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "p",
                    {
                        children: [
                            "Original st\xF8rrelse p\xE5 bilde:",
                            " ",
                            parseInt(metadata.originalStorrelse).toFixed(2),
                            " MB",
                        ],
                    },
                    void 0,
                    !0,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 47,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "img",
                    {
                        className: "w-2/5",
                        src: `/${metadata.nedlastetBildePath}`,
                        alt: "Originalbilde",
                    },
                    void 0,
                    !1,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 51,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "p",
                    {
                        children: [
                            unsplash == null ? void 0 : unsplash.exif.aperture,
                            " / ",
                            unsplash == null
                                ? void 0
                                : unsplash.exif.exposure_time,
                            " -",
                            " ",
                            unsplash == null ? void 0 : unsplash.exif.model,
                        ],
                    },
                    void 0,
                    !0,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 56,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    PhotoAttribution,
                    {
                        attributionLink:
                            (unsplash == null ? void 0 : unsplash.links.html) ??
                            "",
                        photoBy:
                            (unsplash == null ? void 0 : unsplash.user.name) ??
                            "",
                        userProfileLink:
                            (unsplash == null
                                ? void 0
                                : unsplash.user.links.html) ?? "",
                    },
                    void 0,
                    !1,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 60,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                        className: "mt-10",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "h1",
                                {
                                    className: "text-center font-bold",
                                    children: "SVG etter konvertering",
                                },
                                void 0,
                                !1,
                                {
                                    fileName:
                                        "app/routes/unsplash/$photoId.tsx",
                                    lineNumber: 66,
                                    columnNumber: 9,
                                },
                                this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "div",
                                {
                                    className: "grid grid-cols-3 gap-10",
                                    children: data.result.map((result) => {
                                        let metadata2 = JSON.parse(
                                            result.metadata
                                        );
                                        return /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                            "div",
                                            {
                                                className: "mb-10",
                                                children: [
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "p",
                                                        {
                                                            children: [
                                                                "Ny st\xF8rrelse p\xE5 bilde: ",
                                                                metadata2.nyStorrelse,
                                                                " MB",
                                                            ],
                                                        },
                                                        void 0,
                                                        !0,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "img",
                                                        {
                                                            src: `/${metadata2.resultatSvgPath}`,
                                                            alt: "SVG av originalbilde",
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "p",
                                                        {
                                                            children: [
                                                                "Antall primitives: ",
                                                                result.numberOfPrimitives,
                                                            ],
                                                        },
                                                        void 0,
                                                        !0,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_dev_runtime.jsxDEV)(
                                                        "p",
                                                        {
                                                            children: [
                                                                "Du sparer ",
                                                                metadata2.prosentSpart,
                                                                " %",
                                                            ],
                                                        },
                                                        void 0,
                                                        !0,
                                                        {
                                                            fileName:
                                                                "app/routes/unsplash/$photoId.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 17,
                                                        },
                                                        this
                                                    ),
                                                ],
                                            },
                                            result.id,
                                            !0,
                                            {
                                                fileName:
                                                    "app/routes/unsplash/$photoId.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15,
                                            },
                                            this
                                        );
                                    }),
                                },
                                void 0,
                                !1,
                                {
                                    fileName:
                                        "app/routes/unsplash/$photoId.tsx",
                                    lineNumber: 68,
                                    columnNumber: 9,
                                },
                                this
                            ),
                        ],
                    },
                    void 0,
                    !0,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 65,
                        columnNumber: 7,
                    },
                    this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_react3.Link,
                    {
                        className: "rounded-md bg-accent py-5 px-10",
                        to: "/search",
                        children: "Nytt s\xF8k",
                    },
                    void 0,
                    !1,
                    {
                        fileName: "app/routes/unsplash/$photoId.tsx",
                        lineNumber: 86,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        !0,
        {
            fileName: "app/routes/unsplash/$photoId.tsx",
            lineNumber: 45,
            columnNumber: 5,
        },
        this
    );
}

// app/routes/search/index.tsx
var search_exports = {};
__export(search_exports, {
    default: () => UnsplashSearchRoute,
    loader: () => loader2,
});
var import_react4 = require("@remix-run/react"),
    import_server_runtime2 = require("@remix-run/server-runtime");

// app/components/Soketips.tsx
var import_react_router_dom = require("react-router-dom"),
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
    tips = [
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
                    !1,
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
                    !1,
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
                        children: tips.map(({ emoji, query }) =>
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                import_react_router_dom.Link,
                                {
                                    to: `/search?query=${query}`,
                                    children: emoji,
                                },
                                query,
                                !1,
                                {
                                    fileName: "app/components/Soketips.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13,
                                },
                                this
                            )
                        ),
                    },
                    void 0,
                    !1,
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
        !0,
        {
            fileName: "app/components/Soketips.tsx",
            lineNumber: 17,
            columnNumber: 5,
        },
        this
    );
}

// app/routes/search/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
    loader2 = async ({ request }) => {
        let url = new URL(request.url),
            query = new URLSearchParams(url.search).get("query");
        if (!query) return (0, import_server_runtime2.json)([], 200);
        let results = await searchPhotos(query);
        return (0, import_server_runtime2.json)(results);
    };
function UnsplashSearchRoute() {
    var _a;
    let actionData = (0, import_react4.useLoaderData)(),
        transition = (0, import_react4.useTransition)(),
        [search] = (0, import_react4.useSearchParams)();
    return transition.state === "loading" &&
        transition.location.pathname.includes("/unsplash")
        ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                          !1,
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
                          !1,
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
              !0,
              {
                  fileName: "app/routes/search/index.tsx",
                  lineNumber: 36,
                  columnNumber: 7,
              },
              this
          )
        : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                  className: "flex flex-col items-center",
                  children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          import_react4.Form,
                          {
                              method: "get",
                              className: "w-3/5",
                              children: /* @__PURE__ */ (0,
                              import_jsx_dev_runtime.jsxDEV)(
                                  "div",
                                  {
                                      className:
                                          "my-5 flex flex-col items-center",
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
                                                              className:
                                                                  "underline",
                                                              href: "https://unsplash.com/",
                                                              children:
                                                                  "Unsplash",
                                                          },
                                                          void 0,
                                                          !1,
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
                                              !0,
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
                                                  placeholder:
                                                      "S\xF8k p\xE5 engelsk",
                                                  className:
                                                      "w-full rounded-lg p-2",
                                                  defaultValue:
                                                      search.get("query") ?? "",
                                              },
                                              void 0,
                                              !1,
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
                                              !1,
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
                                  !0,
                                  {
                                      fileName: "app/routes/search/index.tsx",
                                      lineNumber: 53,
                                      columnNumber: 9,
                                  },
                                  this
                              ),
                          },
                          void 0,
                          !1,
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
                          !1,
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
                                  (_a =
                                      actionData == null
                                          ? void 0
                                          : actionData.response) == null
                                      ? void 0
                                      : _a.results.map((img) =>
                                            /* @__PURE__ */ (0,
                                            import_jsx_dev_runtime.jsxDEV)(
                                                ImageLink,
                                                {
                                                    id: img.id,
                                                    src: img.urls.regular,
                                                    altText:
                                                        img.alt_description,
                                                    photoBy: img.user.name,
                                                    attributionLink:
                                                        img.links.html,
                                                    userProfileLink:
                                                        img.user.links.html,
                                                },
                                                img.id,
                                                !1,
                                                {
                                                    fileName:
                                                        "app/routes/search/index.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 13,
                                                },
                                                this
                                            )
                                        ),
                          },
                          void 0,
                          !1,
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
              !0,
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
                    import_react4.Link,
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
                            !1,
                            {
                                fileName: "app/routes/search/index.tsx",
                                lineNumber: 179,
                                columnNumber: 9,
                            },
                            this
                        ),
                    },
                    void 0,
                    !1,
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
                    !1,
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
        !0,
        {
            fileName: "app/routes/search/index.tsx",
            lineNumber: 177,
            columnNumber: 5,
        },
        this
    );
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
    loader: () => loader3,
});
async function loader3({ request }) {
    let host =
        request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
    try {
        let url = new URL("/", `http://${host}`);
        return (
            await Promise.all([
                fetch(url.toString(), { method: "HEAD" }).then((r) => {
                    if (!r.ok) return Promise.reject(r);
                }),
            ]),
            new Response("OK")
        );
    } catch (error) {
        return (
            console.log("healthcheck \u274C", { error }),
            new Response("ERROR", { status: 500 })
        );
    }
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
    default: () => Index,
    loader: () => loader4,
});
var import_react5 = require("@remix-run/react"),
    import_server_runtime3 = require("@remix-run/server-runtime");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
    loader4 = async () => {
        let tidligereBilder = await prisma.konvertering.findMany({
            take: 50,
            where: { numberOfPrimitives: 500 },
        });
        return (0, import_server_runtime3.json)(tidligereBilder);
    };
function Index() {
    let loaderData = (0, import_react5.useLoaderData)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "main",
        {
            className: "m-auto flex w-5/6 flex-col content-center items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_react5.Link,
                    {
                        className: "rounded-lg bg-accent p-10",
                        to: "/search",
                        children: "Generer et nytt bilde",
                    },
                    void 0,
                    !1,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 21,
                        columnNumber: 7,
                    },
                    this
                ),
                loaderData.length
                    ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          import_jsx_dev_runtime.Fragment,
                          {
                              children: [
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime.jsxDEV)(
                                      "h2",
                                      {
                                          className: "mt-20 mb-5",
                                          children: "Tidligere konverteringer",
                                      },
                                      void 0,
                                      !1,
                                      {
                                          fileName: "app/routes/index.tsx",
                                          lineNumber: 26,
                                          columnNumber: 11,
                                      },
                                      this
                                  ),
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime.jsxDEV)(
                                      "div",
                                      {
                                          className: "grid grid-cols-4 gap-5",
                                          children:
                                              loaderData == null
                                                  ? void 0
                                                  : loaderData.map((data) => {
                                                        let metadata =
                                                            JSON.parse(
                                                                data.metadata
                                                            );
                                                        return /* @__PURE__ */ (0,
                                                        import_jsx_dev_runtime.jsxDEV)(
                                                            import_react5.Link,
                                                            {
                                                                prefetch:
                                                                    "intent",
                                                                to: `/unsplash/${data.unsplashId}`,
                                                                children:
                                                                    /* @__PURE__ */ (0,
                                                                    import_jsx_dev_runtime.jsxDEV)(
                                                                        "img",
                                                                        {
                                                                            className:
                                                                                "h-96 w-96 bg-black object-cover p-2 shadow-lg",
                                                                            alt:
                                                                                (metadata ==
                                                                                null
                                                                                    ? void 0
                                                                                    : metadata.alt_description) ??
                                                                                "Bilde av en tidligere konvertering",
                                                                            src: data.pathSvgBilde,
                                                                        },
                                                                        void 0,
                                                                        !1,
                                                                        {
                                                                            fileName:
                                                                                "app/routes/index.tsx",
                                                                            lineNumber: 36,
                                                                            columnNumber: 19,
                                                                        },
                                                                        this
                                                                    ),
                                                            },
                                                            data.id,
                                                            !1,
                                                            {
                                                                fileName:
                                                                    "app/routes/index.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 17,
                                                            },
                                                            this
                                                        );
                                                    }),
                                      },
                                      void 0,
                                      !1,
                                      {
                                          fileName: "app/routes/index.tsx",
                                          lineNumber: 27,
                                          columnNumber: 11,
                                      },
                                      this
                                  ),
                              ],
                          },
                          void 0,
                          !0,
                          {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 25,
                              columnNumber: 9,
                          },
                          this
                      )
                    : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_react5.Outlet,
                    {},
                    void 0,
                    !1,
                    {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 51,
                        columnNumber: 7,
                    },
                    this
                ),
            ],
        },
        void 0,
        !0,
        {
            fileName: "app/routes/index.tsx",
            lineNumber: 20,
            columnNumber: 5,
        },
        this
    );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = {
    version: "99fe5ff4",
    entry: {
        module: "/build/entry.client-LFQEXK5H.js",
        imports: [
            "/build/_shared/chunk-HLUDVZYK.js",
            "/build/_shared/chunk-42Z7WWMI.js",
        ],
    },
    routes: {
        root: {
            id: "root",
            parentId: void 0,
            path: "",
            index: void 0,
            caseSensitive: void 0,
            module: "/build/root-GZHQU5YN.js",
            imports: void 0,
            hasAction: !1,
            hasLoader: !1,
            hasCatchBoundary: !1,
            hasErrorBoundary: !1,
        },
        "routes/healthcheck": {
            id: "routes/healthcheck",
            parentId: "root",
            path: "healthcheck",
            index: void 0,
            caseSensitive: void 0,
            module: "/build/routes/healthcheck-VW3PL5WX.js",
            imports: void 0,
            hasAction: !1,
            hasLoader: !0,
            hasCatchBoundary: !1,
            hasErrorBoundary: !1,
        },
        "routes/index": {
            id: "routes/index",
            parentId: "root",
            path: void 0,
            index: !0,
            caseSensitive: void 0,
            module: "/build/routes/index-4N5QE3LJ.js",
            imports: void 0,
            hasAction: !1,
            hasLoader: !0,
            hasCatchBoundary: !1,
            hasErrorBoundary: !1,
        },
        "routes/search/index": {
            id: "routes/search/index",
            parentId: "root",
            path: "search",
            index: !0,
            caseSensitive: void 0,
            module: "/build/routes/search/index-VMN6RKQ4.js",
            imports: ["/build/_shared/chunk-4PIG6PW6.js"],
            hasAction: !1,
            hasLoader: !0,
            hasCatchBoundary: !1,
            hasErrorBoundary: !1,
        },
        "routes/unsplash/$photoId": {
            id: "routes/unsplash/$photoId",
            parentId: "root",
            path: "unsplash/:photoId",
            index: void 0,
            caseSensitive: void 0,
            module: "/build/routes/unsplash/$photoId-KJ42HSEO.js",
            imports: ["/build/_shared/chunk-4PIG6PW6.js"],
            hasAction: !1,
            hasLoader: !0,
            hasCatchBoundary: !1,
            hasErrorBoundary: !1,
        },
    },
    url: "/build/manifest-99FE5FF4.js",
};

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build",
    publicPath = "/build/",
    entry = { module: entry_server_exports },
    routes = {
        root: {
            id: "root",
            parentId: void 0,
            path: "",
            index: void 0,
            caseSensitive: void 0,
            module: root_exports,
        },
        "routes/unsplash/$photoId": {
            id: "routes/unsplash/$photoId",
            parentId: "root",
            path: "unsplash/:photoId",
            index: void 0,
            caseSensitive: void 0,
            module: photoId_exports,
        },
        "routes/search/index": {
            id: "routes/search/index",
            parentId: "root",
            path: "search",
            index: !0,
            caseSensitive: void 0,
            module: search_exports,
        },
        "routes/healthcheck": {
            id: "routes/healthcheck",
            parentId: "root",
            path: "healthcheck",
            index: void 0,
            caseSensitive: void 0,
            module: healthcheck_exports,
        },
        "routes/index": {
            id: "routes/index",
            parentId: "root",
            path: void 0,
            index: !0,
            caseSensitive: void 0,
            module: routes_exports,
        },
    };
// Annotate the CommonJS export names for ESM import in node:
0 &&
    (module.exports = {
        assets,
        assetsBuildDirectory,
        entry,
        publicPath,
        routes,
    });
//# sourceMappingURL=index.js.map
