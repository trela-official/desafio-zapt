import { keyframes } from 'styled-components'

export const T = {
  grid: {
    container: '130rem',
    gutter: '2.4rem'
  },
  border: {
    radius: '0.4rem',
    circle: '50%'
  },
  font: {
    family:
      "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    bold: 500,
    sizes: {
      xSmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      Large: '2.0rem',
      xLarge: '2.8rem',
      xxLarge: '4rem'
    }
  },
  colors: {
    primary: '#334BC8',
    secondary: '#fff',
    primaryHover: '#5872ff',
    gray: '#7A7A7A',
    grayHover: '#aaaaaa',
    grayLight: '#FAFAFA',
    white: '#fff',
    black: '#000',
    blue: '#011FBB',
    blueLight: '#E9F4FE',
    disabled: '#a1a4b0'
  },
  spacings: {
    xxSmall: '0.4rem',
    xSmall: '0.8rem',
    small: '1.2rem',
    medium: '1.6rem',
    large: '2rem',
    xLarge: '2.4rem',
    xxLarge: '2.8rem',
    xxxLarge: '3.2rem'
  },
  layers: {
    base: 10
  },
  transitions: {
    default: '0.3s ease-in-out'
  },
  animations: {
    rotate: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `
  },
  breakPoint: (num1: number) => `@media screen and (min-width: ${num1}rem)`
} as const
