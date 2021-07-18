export default {
  grid: {
    container: '120rem',
    gutter: '2.4rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xs: '1.2rem',
      small: '1.4rem',
      base: '1.6rem',
      lg: '2rem',
      xl: '2.8rem',
      title: '4rem'
    }
  },
  colors: {
    black: '#000000',
    white: '#ffffff',
    gray: '#7a7a7a',
    primary: '#011fbb',
    primaryLight: '#334bc8',
    primaryDark: '#001c33',
    secondary: '#ff5b58',
    backgroundGray: '#fafafa',
    backgroundLight: '#e9f5fe'
  },
  spacings: {
    xs: '0.8rem',
    sm: '1.2rem',
    base: '1.6rem',
    lg: '2.4rem',
    xl: '3.2rem',
    xl2: '4.0rem',
    xl3: '4.8rem',
    xl4: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '0.7s ease-in-out'
  }
} as const
