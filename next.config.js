/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Ensure we're building for serverless, not static export
  trailingSlash: false,
  distDir: '.next',
};

module.exports = nextConfig;
