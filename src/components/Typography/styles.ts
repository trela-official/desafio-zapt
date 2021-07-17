import styled, { css, DefaultTheme } from 'styled-components'
import { TypographyProps } from '.'

const sizeModifiers = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

const colorModifier = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,
  lightGray: (theme: DefaultTheme) => css`
    color: ${theme.colors.lightGray};
  `,
  gray: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
  `,
  lightBlue: (theme: DefaultTheme) => css`
    color: ${theme.colors.lightBlue};
  `,
  neutralBlue: (theme: DefaultTheme) => css`
    color: ${theme.colors.neutralBlue};
  `,
  darkBlue: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkBlue};
  `,
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}

const weightModifier = {
  light: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.light};
  `,
  regular: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.regular};
  `,
  medium: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.medium};
  `
}

export const Typography = styled.h1<TypographyProps>`
  ${({ theme, color, size, weight }) => css`
    ${!!size && sizeModifiers[size](theme)}
    ${!!color && colorModifier[color](theme)}
    ${!!weight && weightModifier[weight](theme)}
  `}
`
