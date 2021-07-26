import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`


@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('/fonts/inter-v3-latin-regulawoff2') format('woff2'),
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('/fonts/inter-v3-latin-500.woff2') format('woff2'),
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:before,
    &:after{
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `}
    }
  `}

`

export default GlobalStyles
