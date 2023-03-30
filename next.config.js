const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  withPlugins: ([
    [
      optimizedImages,
      {
        // all other plugins will go here
      },
    ],
  ]),
  images: {
    loader: 'custom',
  },
 
}

module.exports = nextConfig




