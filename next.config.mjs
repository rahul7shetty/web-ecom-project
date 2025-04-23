/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'www.apple.com',
      'plus.unsplash.com'
    ],
    unoptimized: true,
  },
}

export default nextConfig
