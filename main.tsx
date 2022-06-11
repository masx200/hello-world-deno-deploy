import { ConnInfo, serve } from "https://deno.land/std@0.143.0/http/server.ts";

function handler(req: Request, connInfo: ConnInfo): Response {
    const { url, headers, method } = req;

    const data = {
        connInfo,
        url,
        method,
        headers: Object.fromEntries(headers),
    };
    console.log(data);
    return new Response(JSON.stringify(data, null, 4), {
        headers: { "content-type": "application/json" },
    });
}

console.log("Listening on http://localhost:8000");
await Promise.all([
    serve(handler, { port: 8000 }),
    serve(handler, { hostname: "::", port: 8000 }),
]);
