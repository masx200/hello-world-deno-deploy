import { ConnInfo } from "https://deno.land/std@0.182.0/http/server.ts";

export function handler(req: Request, connInfo: ConnInfo): Response {
    const { url, headers, method } = req;

    const data = {
        connInfo,
        request: {
            url,
            method,
            headers: Object.fromEntries(headers),
        },
    };

    const body = JSON.stringify(data);
    // console.log("request", data);
    const response = new Response(body, {
        headers: {
            "Strict-Transport-Security": "max-age=31536000",
            "content-type": "application/json",
        },
    });
    // console.log(response, { url, method });

    console.log({
        connInfo,
        request: { url, method, headers: Object.fromEntries(headers) },
        response: {
            status: response.status,
            headers: Object.fromEntries(response.headers),
        },
    });
    return response;
}
