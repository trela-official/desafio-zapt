import styled, { css } from 'styled-components';

import { TeardropProps } from '.';

const wrapperModifiers = {
  small: () => css`
    width: 6.2rem;
    height: 6.2rem;
  `,

  normal: () => css`
    width: 10rem;
    height: 10rem;
  `,
};

export const Wrapper = styled.div<TeardropProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`;
