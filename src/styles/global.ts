import { createGlobalStyle, css } from 'styled-components';
import { lighten } from 'polished';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-300.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-regular.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-500.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }



  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      &::-webkit-scrollbar {
        width: 1rem;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${lighten(0.2, theme.colors.gray)};
        border-radius: ${theme.border.radius};
      }

      &::-webkit-scrollbar-thumb:hover,
      &::-webkit-scrollbar-thumb:active {
        background-color: ${theme.colors.gray};
      }
    }

    ::-moz-selection {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    ::selection {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}
`;

export default GlobalStyles;
