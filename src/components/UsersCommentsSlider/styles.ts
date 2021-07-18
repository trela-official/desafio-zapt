import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 1.2rem;
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.large};

      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 calc(${theme.spacings.xxsmall} / 2);
        cursor: pointer;

        &.slick-active button {
          background: ${theme.colors.primary};
          color: ${theme.colors.primary};
        }
      }

      button {
        width: 0.6rem;
        height: 0.6rem;
        cursor: pointer;
        border-radius: 50%;
        background-color: #ebedfa;
        color: #ebedfa;
        border: none;
        font-size: 0;
        outline: none;

        &:focus {
          box-shadow: 0 0 0 3px ${lighten(0.2, theme.colors.primary)};
        }
      }
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
