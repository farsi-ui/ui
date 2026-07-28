/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@farsi-ui/react', '@farsi-ui/tokens'],
}

export default nextConfig
