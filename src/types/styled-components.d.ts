/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from '../styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
