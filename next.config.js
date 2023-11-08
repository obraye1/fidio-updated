const path = require('path');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d2ib7gxb0luc1i.cloudfront.net', 'another-domain.com'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['/modules'] = path.join(__dirname, 'modules/');
    config.resolve.alias['/app.config'] = path.join(__dirname, 'app.config.js');
    config.resolve.alias['/styles'] = path.join(__dirname, 'src/styles');

    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
