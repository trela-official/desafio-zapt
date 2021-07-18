import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'color' | 'fullWidth'>

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primaryLight};

    &:hover {
      background: ${darken(0.05, theme.colors.primaryLight)};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};

    &:hover {
      background: ${darken(0.05, theme.colors.secondary)};
    }
  `,

  gray: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray};

    &:hover {
      background: ${darken(0.05, theme.colors.gray)};
    }
  `,

  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.base} ${theme.spacings.lg};
    height: 5.1rem;

    border: 0;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    text-decoration: none;

    ${!!color && wrapperModifiers[color](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `}
`
