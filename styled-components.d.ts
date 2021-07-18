import theme from './src/styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
