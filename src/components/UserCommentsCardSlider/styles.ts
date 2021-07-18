import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide {
      height: 40rem;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.primary};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.small};
    }
    .slick-next {
      right: -${theme.spacings.small};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      li {
        background: rgba(1, 31, 187, 0.08);
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.primaryLight};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    .slick-next {
      right: -1.4rem;
    }
    .slick-prev {
      left: -1.4rem;
      z-index: 1;
    }
  `}
`;
