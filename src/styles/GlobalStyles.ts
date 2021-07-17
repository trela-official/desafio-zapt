import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: ${({ theme }) => theme.font.family};
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #__next {
    ${({ theme }) => css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.black};
    `}
  }

  body, #root, input, select, textarea, button {
    ${({ theme }) => css`
      font: ${theme.font.normal} ${theme.font.sizes.medium} 'Poppins',
        sans-serif;
    `}
  }

  button {
    border: none;
    border-radius: ${({ theme }) => theme.border.radius};
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 1.2rem !important;
    background-color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    ${({ theme }) => css`
      background-color: ${theme.colors.gray};
      border-radius: 2rem;
      border: 0.3rem solid ${theme.colors.white};
    `}
  }

  :root {
    ${({ theme }) => css`
      scrollbar-color: ${theme.colors.gray} ${theme.colors.white} !important;
      scrollbar-width: 1.2rem !important;
    `}
  }
`
