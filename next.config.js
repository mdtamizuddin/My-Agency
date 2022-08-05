/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['img.freepik.com', 'firebasestorage.googleapis.com',
      'i.ibb.co'
    ],
  },
}