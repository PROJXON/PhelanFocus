/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/PhelanFocus/out', // Your GitHub repo name
    assetPrefix: '/PhelanFocus/out', // Same as above
    images: {
      unoptimized: true, // Avoid issues with Next.js image optimization
    },
    output: 'export', // Add this line for static export
  };
  
  export default nextConfig;
  