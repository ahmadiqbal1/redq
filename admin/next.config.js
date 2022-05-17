const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config');

module.exports = withPWA({
basePath:'/admin',
  experimental: {
    esmExternals: false,
  },
  i18n,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },

  images: {
    domains: [
      'via.placeholder.com',
      'res.cloudinary.com',
      's3.amazonaws.com',
      '18.141.64.26',
      '127.0.0.1:8000',
      'localhost',
      'picsum.photos',
      'lh3.googleusercontent.com',
      'pixarlaravel.s3.ap-southeast-1.amazonaws.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
