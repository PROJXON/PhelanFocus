/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/PhelanFocus",
  /*output: "export",*/  // Enables static exports
  reactStrictMode: true,

  // Disable image optimization for static export compatibility
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
