import styled, { css } from 'styled-components';

import { TypographyProps } from '.';

type StyledTextProps = Pick<TypographyProps, 'size' | 'color' | 'bold'>;

export const Text = styled.span<StyledTextProps>`
  ${({ theme, size, color, bold }) => css`
    font-weight: ${theme.font.weight[bold!]};
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};
  `}
`;
