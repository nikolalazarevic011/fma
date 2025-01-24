/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  experimental: {
    scrollRestoration: true,
  },
  // basePath: '/frontend', // Base path for serving files under /frontend
  // trailingSlash: true,   // Ensures all routes include a trailing slash
  // output: 'export',      // Use static export
};

module.exports = nextConfig;
