window.__remixManifest = {
    version: "f73ec339",
    entry: {
        module: "/build/entry.client-KGG7HWQV.js",
        imports: [
            "/build/_shared/chunk-OS36OLQS.js",
            "/build/_shared/chunk-42Z7WWMI.js",
        ],
    },
    routes: {
        root: {
            id: "root",
            path: "",
            module: "/build/root-P2343TWF.js",
            hasAction: false,
            hasLoader: false,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/healthcheck": {
            id: "routes/healthcheck",
            parentId: "root",
            path: "healthcheck",
            module: "/build/routes/healthcheck-VW3PL5WX.js",
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/index": {
            id: "routes/index",
            parentId: "root",
            index: true,
            module: "/build/routes/index-FAC52F42.js",
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/search/index": {
            id: "routes/search/index",
            parentId: "root",
            path: "search",
            index: true,
            module: "/build/routes/search/index-XMWOKOIN.js",
            imports: ["/build/_shared/chunk-DU7OUM7T.js"],
            hasAction: true,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/unsplash/$photoId": {
            id: "routes/unsplash/$photoId",
            parentId: "root",
            path: "unsplash/:photoId",
            module: "/build/routes/unsplash/$photoId-SDQTFDJM.js",
            imports: ["/build/_shared/chunk-DU7OUM7T.js"],
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
    },
    url: "/build/manifest-F73EC339.js",
};