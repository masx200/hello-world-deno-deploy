import { serve } from "https://deno.land/std@0.133.0/http/server.ts";

function handler(req: Request): Response {
    const { url, headers } = req;

    return new Response(
        JSON.stringify([
            "Hello world",
            { url, headers: Object.fromEntries(headers) },
        ]),
        { headers: { "content-type": "application/json" } },
    );
}

console.log("Listening on http://localhost:8000");
await serve(handler, { port: 8000 });
