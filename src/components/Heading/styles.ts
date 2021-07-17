import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from '.';

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size, weight }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font[weight!]};

    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
