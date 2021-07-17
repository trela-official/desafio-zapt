export default {
  colors: {
    primary: '#011FBB',
    primaryLight: '#334BC8',
    black: '#000000',
    white: '#ffffff',
    background: '#E5E5E5',
    bacgrounCard: '#FAFAFA',
    darkgray: '#7B7B7B',

    gradients: {
      lightBg:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3;',
    },
  },

  border: {
    radius: '0.4rem',
  },

  font: {
    family: 'Inter',

    weight: {
      '400': 400,
      '500': 500,
    },

    sizes: {
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.8rem',
      xlarge: '4rem',
    },
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
  },
} as const;
