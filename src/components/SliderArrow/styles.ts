import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import media from 'styled-media-query';

import { SliderArrowProps } from '.';

const wrapperModifiers = {
  left: () => css`
    transform: rotate(90deg);
    left: -0.4rem;

    svg {
      margin-top: 0.8rem;
    }

    ${media.greaterThan('large')`
      left: -0.9rem;

      svg {
        margin-top: 1.5rem;
      }
    `}
  `,

  right: () => css`
    transform: rotate(-90deg);
    right: -0.4rem;

    svg {
      margin-top: 0.8rem;
    }

    ${media.greaterThan('large')`
      right: -0.9rem;

      svg {
        margin-top: 1.5rem;
      }
    `}
  `,
};

export const Wrapper = styled.button<SliderArrowProps>`
  ${({ theme, direction }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryDarken};
    width: 6.3rem;
    height: 3rem;
    border-top-left-radius: 6.4rem;
    border-top-right-radius: 6.4rem;
    cursor: pointer;
    border: 0;
    outline: none;
    position: absolute;
    top: 35%;
    bottom: 0;
    transition: background-color ${theme.transition.default},
      color ${theme.transition.fast}, visibility ${theme.transition.default};
    z-index: ${theme.layers.base};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${lighten(0.2, theme.colors.primary)};
    }

    &:active {
      background: ${lighten(0.2, theme.colors.primary)};
    }

    svg {
      width: 2rem;
      height: 2rem;
      transform: rotate(90deg);
    }

    ${media.greaterThan('large')`
      width: 8.4rem;
      height: 4.2rem;
      border-top-left-radius: 8.5rem;
      border-top-right-radius: 8.5rem;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    `}

    ${!!direction && wrapperModifiers[direction!]()};
  `}
`;
