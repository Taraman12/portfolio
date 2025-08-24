import type { NextConfig } from "next";

const repoName = "portfolio";

const isProd = process.env.NODE_ENV === "production";
const base = isProd && repoName ? `/${repoName}` : "";


const nextConfig: NextConfig = {
  // Export to static HTML for GitHub Pages
  output: "export",                 // writes to /out
  trailingSlash: true,              // friendlier on Pages’ static hosting

  images: { unoptimized: true },

  // Ensure routes and assets resolve under /<repo> on project sites
  basePath: base,                   // affects routing
  assetPrefix: base ? `${base}/` : undefined, // helps CSS/JS assets on some setups
};

export default nextConfig;
