export default {
  grid: {
    container: '123.2rem',
    gutter: '2.4rem'
  },
  border: {
    radius: '0.4rem',
    none: 'none'
  },
  font: {
    family: {
      primary:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      secondary:
        "PlusJakarta, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },

    light: 300,
    normal: 400,
    semibold: 500,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.8rem',
      xxlarge: '4.0rem'
    },
    line: {
      medium: '1.5',
      large: '1.3',
      xlarge: '0.9'
    }
  },
  colors: {
    primary: '#334BC8',
    secondary: '#FF5B58',
    bgBanner: '#FAFAFA',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#7B7B7B',
    darkBlue: '#001C33',
    bglight:
      'linear-gradient( 0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9) ), #2196f3;'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    overlay: 20
  },
  transition: {
    default: '0.3s ease-in-out'
  }
} as const
