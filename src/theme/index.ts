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
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    bold: 500,
    sizes: {
      xSmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      Large: '2rem',
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
    bullet: '#EBEDFA',
    white: '#fff',
    black: '#000',
    blue: '#011FBB',
    blueDark: '#001C33',
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
    xxxLarge: '3.2rem',
    xtreme: '4rem'
  },
  layers: {
    base: 10
  },
  animations: {
    rotate: keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `,
    fadeInMove: (x: string, y: string, z: string) => keyframes`
      0% {
        opacity: 0;
        transform: translate3d(${x}, ${y}, ${z});
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `,
    fadeIn: keyframes`
      to {
        opacity: 1;
      }
    `
  },
  breakPoint: (width: number) => `@media screen and (min-width: ${width}px)`
} as const
