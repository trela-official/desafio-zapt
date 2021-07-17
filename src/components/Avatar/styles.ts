import styled, { css, DefaultTheme } from 'styled-components'
import { AvatarProps } from '.'

const avatarModifiers = {
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,

  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,

  normal: () => css`
    box-shadow: 0 0 0 1px;
  `,

  thick: () => css`
    box-shadow: 0 0 0 2px;
  `,

  small: () => css`
    width: 3.6rem;
    height: 3.6rem;
  `
}

export const Avatar = styled.img<AvatarProps>`
  ${({ theme, borderColor, borderWeight, size }) => css`
    border-radius: 50%;
    object-fit: cover;

    ${!!borderColor && avatarModifiers[borderColor](theme)}
    ${!!borderWeight && avatarModifiers[borderWeight]()}
    ${!!size && avatarModifiers[size]()}
  `}
`
