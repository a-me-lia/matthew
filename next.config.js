/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      serverActions: true,
    },
    env: {
      RESEND_KEY: process.env.RESEND_KEY,
    },
    rewrites: async () => {
      return [
        {
          source: '/',
          destination: '/cv.html',
        },
      ]
  },
  };

module.exports = nextConfig
