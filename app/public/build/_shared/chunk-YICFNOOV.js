// node_modules/@remix-run/server-runtime/dist/esm/responses.js
var redirect = (url, init = 302) => {
    let responseInit = init;
    if (typeof responseInit === "number") {
        responseInit = {
            status: responseInit,
        };
    } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
    }
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, {
        ...responseInit,
        headers,
    });
};

export { redirect };
/**
 * @remix-run/server-runtime v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/_shared/chunk-YICFNOOV.js.map
