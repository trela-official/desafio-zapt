import styled, { css, DefaultTheme } from 'styled-components';
import { darken, lighten } from 'polished';

import { ButtonProps } from '.';

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3.8rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4.8rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5.8rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.small} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border: 1px solid currentColor;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-weight: 400;
    text-decoration: none;
    line-height: 0;
    cursor: pointer;
    outline: none;
    transition: background-color, border, ${theme.transition.default};

    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${lighten(0.2, theme.colors.primary)};
    }

    &:active {
      background: ${lighten(0.2, theme.colors.primary)};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled()};
  `}
`;
