const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  optimizeFonts: false,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1300, 1500, 1700],
    iconSizes: [],
    domains: [],
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
