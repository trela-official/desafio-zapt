import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 30px auto 0;
    padding: 0 ${theme.spacings.xxsmall};
    position: relative;

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      flex-grow: 0;
      height: 100%;

      display: flex;
      justify-content: center;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      transition: all 0.1s;
      visibility: hidden;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      justify-content: center;
      gap: ${theme.spacings.xxsmall};
      margin-top: ${theme.spacings.medium};

      li {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 100%;
        background: ${rgba(theme.colors.primary, 0.08)};

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
  `}
`
