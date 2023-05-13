/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/string-case-converter/',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
