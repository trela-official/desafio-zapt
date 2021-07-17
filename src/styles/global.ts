import { createGlobalStyle, css } from 'styled-components'

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

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
