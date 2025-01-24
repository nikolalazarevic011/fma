/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  experimental: {
    scrollRestoration: true,
  },
  basePath: '/frontend', // Add this line
  trailingSlash: true,    // Ensure trailing slashes for static export
};

module.exports = nextConfig;
