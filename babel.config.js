module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  plugins: [
    ['babel-plugin-styled-components', { ssr: true, displayName: true }],
    'inline-react-svg'
  ],
  env: {
    test: {
      plugins: [
        'dynamic-import-node',
        ['babel-plugin-styled-components', { ssr: false, displayName: false }]
      ]
    }
  }
}
