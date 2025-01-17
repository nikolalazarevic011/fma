// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [process.env.WP_IMAGES_URL],
//     unoptimized: true, // Disable the default image optimization to support static exports
//   },
//   output: "export", // Set the build output for static export
//   basePath: "/next", //only for prod
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
    unoptimized: process.env.NODE_ENV === "production", // Disable optimization in production for static export
  },
};

// Conditionally apply settings for production
if (process.env.NODE_ENV === "production") {
  nextConfig.output = "export"; // Enable static export only in production
}

module.exports = nextConfig;
