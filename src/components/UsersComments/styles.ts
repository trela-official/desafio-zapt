import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;

      li {
        background: ${theme.colors.primary};
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;

        &:not(.slick-active) {
          opacity: 10%;
        }
      }

      button {
        opacity: 0;
        width: 0.6rem;
        height: 0.6rem;
        cursor: pointer;
      }
    }

    .slick-prev,
    .slick-next {
      background: ${theme.colors.white};
      color: ${theme.colors.blue};
      cursor: pointer;
      position: absolute;
      top: 50%;
      padding: 0;
      z-index: 50;
      transform: translate(0, -50%);
      display: flex !important;
      align-items: center;
      width: 4.2rem;
      height: 8.3rem;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`

export const ArrowRight = styled.div`
  right: 0;
  justify-content: flex-end;
  clip-path: circle(50% at 100% 50%);
`

export const ArrowLeft = styled.div`
  left: 0;
  justify-content: flex-start;
  clip-path: circle(50% at 0 50%);
`
