import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    outline: none;
    transition: box-shadow ${theme.transition.default};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${lighten(0.2, theme.colors.primary)};
    }
  `}
`;
