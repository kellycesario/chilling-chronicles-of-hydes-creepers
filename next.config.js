const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, '.src/styles')],
    prependData: `@import "./src/styles/index.scss";`,
  },
}

module.exports = nextConfig
