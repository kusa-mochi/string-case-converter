/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV !== 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isDevelopment ? '' : '/string-case-converter/',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
