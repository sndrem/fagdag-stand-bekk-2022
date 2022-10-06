window.__remixManifest = {
    version: "59824d59",
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
            module: "/build/routes/index-KKQP5P47.js",
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/search/$query": {
            id: "routes/search/$query",
            parentId: "root",
            path: "search/:query",
            module: "/build/routes/search/$query-FDLHLJDE.js",
            imports: ["/build/_shared/chunk-C322CBAD.js"],
            hasAction: true,
            hasLoader: false,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/search/index": {
            id: "routes/search/index",
            parentId: "root",
            path: "search",
            index: true,
            module: "/build/routes/search/index-ZCV4WNIY.js",
            hasAction: false,
            hasLoader: false,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/unsplash/$photoId": {
            id: "routes/unsplash/$photoId",
            parentId: "root",
            path: "unsplash/:photoId",
            module: "/build/routes/unsplash/$photoId-2YRN6CBK.js",
            imports: ["/build/_shared/chunk-C322CBAD.js"],
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
    },
    url: "/build/manifest-59824D59.js",
};
