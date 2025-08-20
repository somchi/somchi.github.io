/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
//   basePath: '',
//   assetPrefix: '',
//   env: {
//     NEXT_PUBLIC_BASE_PATH: '',
//   },
// };

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'somchi.github.io';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

module.exports = nextConfig;
