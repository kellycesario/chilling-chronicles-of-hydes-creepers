const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, '.src/styles')],
    prependData: `@import "./src/styles/index.scss";`,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig
