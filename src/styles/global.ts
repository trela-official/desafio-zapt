import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('../fonts/inter-v3-latin-300.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/inter-v3-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('../fonts/inter-v3-latin-500.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
