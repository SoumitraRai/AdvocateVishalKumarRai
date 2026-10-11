import type { NextConfig } from "next";

// REPLACE "your-repo-name" with your actual GitHub repository name (e.g. "my-portfolio")
// Leave it as "" if deploying to a root user site (username.github.io)
const repoName = "AdvocateVishalKumarRai";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static deployment[cite: 1]
  output: "export",

  // Fixes missing styles/design by adding your repo prefix to asset paths
  basePath: repoName ? `/${repoName}` : "",
  assetPrefix: repoName ? `/${repoName}` : "",

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