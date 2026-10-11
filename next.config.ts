import type { NextConfig } from "next";

// CHANGE THIS to your exact GitHub repository name (e.g. "AdvocateVishalKumarRai" or whatever your repo is named)
// Leave it as "" if your repo is named username.github.io
const repoName = "AdvocateVishalKumarRai";

// Only apply basePath and assetPrefix during production builds (GitHub Pages), not during local `npm run dev`
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static deployment[cite: 1]
  output: "export",

  // Applies the repo prefix only on production builds, keeping local dev clean
  basePath: isProd && repoName ? `/${repoName}` : "",
  assetPrefix: isProd && repoName ? `/${repoName}` : "",

  // Ensures standard routing works correctly on static hosting
  trailingSlash: true,

  // GitHub Pages does not provide Next.js image optimization[cite: 1]
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

  // Allow production builds to complete despite ESLint warnings[cite: 1]
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;