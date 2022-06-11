import { ConnInfo, serve } from "https://deno.land/std@0.143.0/http/server.ts";

function handler(req: Request, connInfo: ConnInfo): Response {
    const { url, headers, method } = req;

    const data = {
        connInfo,
        url,
        method,
        headers: Object.fromEntries(headers),
    };

    const body = JSON.stringify(data, null, 4);
    console.log(body);
    return new Response(body, {
        headers: { "content-type": "application/json" },
    });
}

console.log("Listening on http://localhost:8000");
await Promise.all([
    serve(handler, { port: 8000 }),
    serve(handler, { hostname: "::", port: 8000 }),
]);
