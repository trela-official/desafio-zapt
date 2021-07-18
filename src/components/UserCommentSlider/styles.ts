import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;

    .slick-dots {
      display: flex !important;
      justify-content: center;
      align-items: center;

      list-style: none;
      padding-top: ${theme.spacings.base};

      ${media.greaterThan('medium')`
        padding-top: ${theme.spacings.xl2};
      `}

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 0.6rem;
        height: 0.6rem;
        margin: 0 calc(${theme.spacings.xs} / 2);

        background: ${theme.colors.backgroundLight};
        border-radius: 50%;
        cursor: pointer;
        transition: background-color ${theme.transition.slow};

        &.slick-active {
          background: ${theme.colors.primaryLight};
        }
      }

      button {
        width: 0.6rem;
        height: 0.6rem;

        opacity: 0;
        cursor: pointer;
      }
    }

    .slick-slide > div {
      margin: 0 calc(${theme.grid.gutter} / 2);
    }

    .slick-list {
      margin: 0 calc(-${theme.grid.gutter} / 2);
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`

export const Arrow = styled.span`
  ${({ theme }) => css`
    display: flex !important;
    align-items: center;

    position: absolute;
    top: calc(50% - ${theme.spacings.lg});
    transform: translate(0, -50%);
    z-index: ${theme.layers.menu};

    width: 4.2rem;
    height: 8.4rem;

    background: ${theme.colors.white};
    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;

      color: ${theme.colors.primary};
    }

    &.slick-prev {
      left: 0;
      justify-content: flex-start;

      border-bottom-right-radius: 8.4rem;
      border-top-right-radius: 8.4rem;
    }

    &.slick-next {
      right: 0;
      justify-content: flex-end;

      border-bottom-left-radius: 8.4rem;
      border-top-left-radius: 8.4rem;
    }
  `}
`
