import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-500.woff2') format('woff2');
  }

  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${theme.font.family};
    }

    body {
      font-size: ${theme.font.sizes.medium};
    }
  `}

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyles
