export default {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "0.4rem",
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      xsmall: "1.0rem",
      small: "1.2rem",
      medium: "1.6rem",
      large: "2.0rem",
      xlarge: "2.6rem",
    },
  },
  colors: {
    blue: "#334BC8",
    lightBlue: "#2196F3",
    darkerBlue: "#2196F3",
    salmon: "#FF5B58",
    gray: "#7B7B7B",
    lightGray: "#EBEDFA",
    white: "#ffffff",
    black: "#000000",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
} as const;
