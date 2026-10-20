/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "webtrisukses";

const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  // Make prod export work on GitHub Pages project site (https://avrebarra.github.io/webtrisukses/)
  // Dev (runtask dev) stays at "/" so localhost:3000 matches. assetPrefix makes _next/* correct.
  basePath,
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
