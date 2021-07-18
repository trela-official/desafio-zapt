import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('../fonts/inter-400.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
      url('../fonts/inter-400.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'PlusJakarta';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('../fonts/jakarta-400.woff2') format('woff2'),
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
