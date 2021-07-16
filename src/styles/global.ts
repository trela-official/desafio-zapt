import { createGlobalStyle, css } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight[400]};
    `}
  }
`;
