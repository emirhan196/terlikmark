/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.example.com'],
    unoptimized: true,
  },
  basePath: process.env.BASE_PATH || '',
};

module.exports = nextConfig;
