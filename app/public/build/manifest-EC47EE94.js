window.__remixManifest = {
    version: "ec47ee94",
    entry: {
        module: "/build/entry.client-F5D7VHCS.js",
        imports: [
            "/build/_shared/chunk-NJUEIAVU.js",
            "/build/_shared/chunk-42Z7WWMI.js",
        ],
    },
    routes: {
        root: {
            id: "root",
            path: "",
            module: "/build/root-5JD4YXUK.js",
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
            module: "/build/routes/index-FQK7PDP7.js",
            hasAction: false,
            hasLoader: false,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/search/index": {
            id: "routes/search/index",
            parentId: "root",
            path: "search",
            index: true,
            module: "/build/routes/search/index-UJYD67TQ.js",
            hasAction: true,
            hasLoader: false,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
        "routes/unsplash/$photoId": {
            id: "routes/unsplash/$photoId",
            parentId: "root",
            path: "unsplash/:photoId",
            module: "/build/routes/unsplash/$photoId-EPRAHP2J.js",
            hasAction: false,
            hasLoader: true,
            hasCatchBoundary: false,
            hasErrorBoundary: false,
        },
    },
    url: "/build/manifest-EC47EE94.js",
};