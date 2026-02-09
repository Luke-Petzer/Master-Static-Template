import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Vercel deployment region
  // Note: This is typically set in the Vercel dashboard, 
  // but we can provide hints or use it for edge functions.
};

export default nextConfig;
