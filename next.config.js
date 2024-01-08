const path = require('path')

const website = 'https://www.tv.tycoon.systems' // You must set this line to your own website


/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: website,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias['/modules'] = path.join(__dirname, 'modules/')
    config.resolve.alias['/app.config'] = path.join(__dirname, 'app.config.js')
    config.resolve.alias['/styles'] = path.join(__dirname, 'src/styles')
    
    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          }
        }
      })
      // Add a rule to handle font files
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
          },
        },
      })
    }
    return config
  }
}

module.exports = nextConfig
