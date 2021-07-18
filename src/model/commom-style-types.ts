import { theme } from 'styles'

export type Color = keyof typeof theme.colors

export type ImageSize = keyof typeof theme.imageSizes

export type FontSize = keyof typeof theme.font.sizes

export type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit'
