import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static deployment
  output: "export",

  // GitHub Pages does not provide Next.js image optimization
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],

    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Allow production builds to complete despite ESLint warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
