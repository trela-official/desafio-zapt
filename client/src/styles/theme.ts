export default {
  grid: {
    container: '124.8rem',
    gutter: '2.0rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      normal: '1.8rem',
      large: '2.0rem',
      xlarge: '2.8rem',
      huge: '4.0rem'
    }
  },
  colors: {
    primary: '#334BC8',
    secondary: '#FF5B58',
    white: '#FFFFFF',
    black: '#000000',
    drWhite: '#FAFAFA',
    namaraGrey: '#7B7B7B'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
