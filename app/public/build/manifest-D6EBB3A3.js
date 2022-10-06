window.__remixManifest = {
    version: "d6ebb3a3",
    entry: {
        module: "/build/entry.client-JZ5BIVR3.js",
        imports: [
            "/build/_shared/chunk-345BUX6A.js",
            "/build/_shared/chunk-42Z7WWMI.js",
        ],
    },
    routes: {
        root: {
            id: "root",
            path: "",
            module: "/build/root-6IRSMQY5.js",
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
            module: "/build/routes/index-SAT6AWZU.js",
            imports: ["/build/_shared/chunk-YICFNOOV.js"],
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/search/$query": {
            id: "routes/search/$query",
            parentId: "root",
            path: "search/:query",
            module: "/build/routes/search/$query-2JHLMZLV.js",
            imports: ["/build/_shared/chunk-YICFNOOV.js"],
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
            module: "/build/routes/search/index-RLGIPKUS.js",
            imports: [
                "/build/_shared/chunk-C322CBAD.js",
                "/build/_shared/chunk-YICFNOOV.js",
            ],
            hasAction: true,
            hasLoader: false,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/unsplash/$photoId": {
            id: "routes/unsplash/$photoId",
            parentId: "root",
            path: "unsplash/:photoId",
            module: "/build/routes/unsplash/$photoId-WVCRVW2M.js",
            imports: [
                "/build/_shared/chunk-C322CBAD.js",
                "/build/_shared/chunk-YICFNOOV.js",
            ],
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
    },
    url: "/build/manifest-D6EBB3A3.js",
};
