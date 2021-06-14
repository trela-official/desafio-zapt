export const sizeScreen = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  MobileLarge: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${sizeScreen.mobileSmall})`,
  mobileM: `(min-width: ${sizeScreen.mobileMedium})`,
  mobileL: `(min-width: ${sizeScreen.MobileLarge})`,
  tablet: `(min-width: ${sizeScreen.tablet})`,
  laptop: `(min-width: ${sizeScreen.laptop})`,
  laptopL: `(min-width: ${sizeScreen.laptopLarge})`,
  desktop: `(min-width: ${sizeScreen.desktop})`,
  desktopL: `(min-width: ${sizeScreen.desktop})`,
};
