/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://firebasestorage.googleapis.com/v0/b/kleencode-dfc9b.appspot.com/o/',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}


module.exports = nextConfig
