import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFF;

    --blue-300: #E9F5FE;
    --blue-900: #011FBB;
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
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  /* Slick Slider */
  .slick-next {
    right: 12px;
  }

  .slick-prev {
    left: 20px;
    z-index: 100;
  }
`

export default GlobalStyles
