import styled, { css, DefaultTheme } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  red: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `,
  blue: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
  small: () => css`
    width: 6.2rem;
    height: 6.2rem;
  `,

  medium: () => css`
    width: 10rem;
    height: 10rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifiers[color](theme)};
    ${!!size && wrapperModifiers[size]};
  `}
`
