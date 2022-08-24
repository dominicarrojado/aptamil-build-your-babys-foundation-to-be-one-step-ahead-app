/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  trailingSlash: true,
  basePath: isProd
    ? '/aptamil-build-your-babys-foundation-to-be-one-step-ahead-app'
    : '',
};

module.exports = nextConfig;
