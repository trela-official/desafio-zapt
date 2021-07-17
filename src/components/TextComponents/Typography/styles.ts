import styled, { css, DefaultTheme } from 'styled-components';

import { TypographyProps } from '.';

type StyledTextProps = Pick<TypographyProps, 'size' | 'color' | 'bold'>;
type TextColors = 'black' | 'darkgray' | 'white' | 'primary';

const textModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 2rem;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 2.6rem;
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
