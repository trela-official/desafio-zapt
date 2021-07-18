const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  optimizeFonts: false,
  images: {
    path: '/_next/image',
    loader: 'default'
  },
  eslint: {
    dirs: [
      'components',
      'hooks',
      'layouts',
      'pages',
      'store',
      'styles',
      'theme',
      'utils'
    ]
  },
  reactStrictMode: true,
  pageExtensions: ['tsx']
})
