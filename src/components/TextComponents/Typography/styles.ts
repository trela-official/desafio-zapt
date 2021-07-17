import styled, { css, DefaultTheme } from 'styled-components';

import { TypographyProps } from '.';

type StyledTextProps = Pick<TypographyProps, 'size' | 'color' | 'bold'>;
type TextColors = 'black' | 'darkgray' | 'white' | 'primary';

const textModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  defineColor: (theme: DefaultTheme, color: TextColors) => css`
    color: ${theme.colors[color]};
  `,
};

export const Text = styled.span<StyledTextProps>`
  ${({ theme, size, color, bold }) => css`
    font-weight: ${theme.font.weight[bold!]};

    ${!!size && textModifiers[size](theme)};
    ${!!color && textModifiers.defineColor(theme, color)}
  `}
`;
