import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --color-main: #334BC8;
    --color-main-light: #2196F3;
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
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }
  button {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
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
`
export default GlobalStyle
