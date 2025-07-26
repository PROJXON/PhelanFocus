/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/PhelanFocus",
  // output: "export",  // Removed - now using server-side rendering
  reactStrictMode: true,

  // Enable image optimization
  images: {
    unoptimized: false,  // Enable Next.js image optimization
  },
};

module.exports = nextConfig;
