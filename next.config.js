/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  experimental: {
    scrollRestoration: true,
  },
  output: "export", // Add this line for static export
};

module.exports = nextConfig;
