import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const response = NextResponse.next();

    // Geo-routing and Compliance Logic
    // Vercel Geolocation headers
    const country = request.headers.get("x-vercel-ip-country") || "ZA";
    const region = request.headers.get("x-vercel-ip-country-region") || "CPT";

    // POPIA / GDPR Compliance Headers
    response.headers.set("x-compliance-standard", country === "ZA" ? "POPIA" : "GDPR");
    response.headers.set("x-deployment-region", "af-south-1");

    // Security Headers
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https: data:;"
    );

    return response;
}

// Only run middleware on relevant paths
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
