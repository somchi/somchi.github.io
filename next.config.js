/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
//   basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
//   assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
//   env: {
//     NEXT_PUBLIC_BASE_PATH:
//       process.env.NODE_ENV === "production" ? "/portfolio" : "",
//   },
// };

const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  basePath: '',
};

module.exports = nextConfig;
