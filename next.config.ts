import type { NextConfig } from "next";
import path from 'path';

const repoName = "portfolio";

const isProd = process.env.NODE_ENV === "production";
const base = isProd && repoName ? `/${repoName}` : "";


const nextConfig: NextConfig = {
  // set turbo pack root to monorepo root
  turbopack: {
    root: path.join(__dirname, '..'),
  },
  // Export to static HTML for GitHub Pages
  output: "export",
  trailingSlash: true,

  images: { unoptimized: true },

  // Ensure routes and assets resolve under /<repo> on project sites
  basePath: base,
  assetPrefix: base ? `${base}/` : undefined,
};

export default nextConfig;
