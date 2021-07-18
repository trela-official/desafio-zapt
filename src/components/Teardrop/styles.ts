import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { TeardropProps } from '.';

const wrapperModifiers = {
  small: () => css`
    width: 5.2rem;
    height: 5.2rem;

    ${media.greaterThan('medium')`
      width: 6.2rem;
      height: 6.2rem;
    `}
  `,

  normal: () => css`
    width: 6.8rem;
    height: 6.8rem;

    ${media.greaterThan('medium')`
      width: 10rem;
      height: 10rem;
    `}
  `,
};

export const Wrapper = styled.div<TeardropProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`;
