export default {
  grid: {
    container: '130rem',
    gutter: '2.4rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.8rem',
      huge: '4rem'
    }
  },
  colors: {
    primary: '#334BC8',
    blue: '#011FBB',
    darkBlue: '#001C33',
    white: '#FFF',
    black: '#000',
    gray: '#7B7B7B'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
