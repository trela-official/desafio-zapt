import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-main: #334BC8;
    --color-main-light: #2196F3;
    --color-main-dark: #001AA3;
    --color-neutral: #FAFAFA;
    --color-neutral-dark: #7B7B7B;
    --color-dark: #000;
    --color-light: #fff;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font: 16px 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button {
    font: 16px 'Inter', sans-serif;
    &:focus{
      outline: none;
    }
  }
  h1{
    font-size: 1.75rem;
    line-height: 1.2;
  }
  p{
    font-size: 1rem;
    line-height: 24px;
  }
  a {
    background-color: var(--color-main);
    color: var(--color-light);
    font-size: 0.875rem;
    text-decoration: none;
    padding: 18px 32px;
    border-radius: 4px;
    width: fit-content;
    transition: all 0.125s ease-in-out;
    &.external-link{
      background: transparent;
      padding: 0;
      text-decoration: underline;
      color: var(--color-main);
      &:hover{
        background-color: transparent;
        box-shadow: none;
      }
    }
    &:hover{
      background-color: var(--color-main-dark);
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
    @media (max-width: 575px){
      padding: 15px 25px;
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
export default GlobalStyle;
