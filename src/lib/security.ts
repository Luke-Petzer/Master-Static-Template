import "server-only";
import { z } from "zod";

/**
 * Validates request body against a Zod schema.
 * Part of the "Zero-Trust" API setup.
 */
export async function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): Promise<T> {
    const result = schema.safeParse(data);
    if (!result.success) {
        throw new Error(`Validation failed: ${result.error.message}`);
    }
    return result.data;
}

/**
 * Stub for Turnstile verification.
 * Cloudflare Turnstile provides phising-resistant MFA logic.
 */
export async function verifyTurnstile(token: string): Promise<boolean> {
    // In production, this would make a request to:
    // https://challenges.cloudflare.com/turnstile/v0/siteverify
    // with the secret key and response token.
    return !!token;
}
