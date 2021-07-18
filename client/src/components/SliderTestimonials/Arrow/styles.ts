import styled, { css } from 'styled-components'
import { ArrowProps } from '.'

const wrapperModifier = {
  right() {
    return css`
      border-radius: 50% 0 0 50%;
      right: -30px;

      svg {
        right: 8px;
        transform: rotate(0);
      }
    `
  },
  left() {
    return css`
      border-radius: 0 50% 50% 0;
      left: -30px;

      svg {
        left: 8px;
        transform: rotate(180deg);
      }
    `
  }
}

export const Wrapper = styled.button<Pick<ArrowProps, 'direction'>>`
  ${({ theme, direction }) => css`
    cursor: pointer;

    background: ${theme.colors.white};
    border: none;

    width: 80px;
    height: 80px;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: ${theme.layers.alwaysOnTop};

    svg {
      position: relative;
      width: 24px;
      height: 24px;
    }

    ${wrapperModifier[direction]}

    @media (max-width: 450px) {
      width: 60px;
      height: 60px;
      top: 25%;
    }
  `}
`
