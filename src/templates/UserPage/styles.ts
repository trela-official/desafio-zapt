import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: ${theme.grid.container};
    margin: 0 auto;

    .user-page-title {
      margin-top: calc(${theme.spacings.large} * 2);
      margin-bottom: ${theme.spacings.xlarge};
      font-size: calc(${theme.font.sizes.large} * 2);
      font-weight: ${theme.font.weight.light};
      text-align: center;
    }
  `}
`;

export const Slide = styled.section`
  ${({ theme }) => css`
    overflow-x: hidden;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};

    .rec-arrow {
      width: 8.3rem;
      height: 8.3rem;
      color: ${theme.colors.blue};
      z-index: ${theme.layers.base};

      &:hover,
      &:enabled {
        background-color: ${theme.colors.white};
        color: ${theme.colors.blue};
        box-shadow: none;
      }

      &:disabled {
        display: none;
      }
    }

    .rec-arrow-left {
      position: absolute;
      left: 0;
      box-shadow: none;
      background-color: ${theme.colors.white};
    }

    .rec-arrow-right {
      position: absolute;
      right: 0;
      box-shadow: none;
      background-color: ${theme.colors.white};
    }

    .rec-dot {
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.small};
      background-color: ${theme.colors.lightGray};
      box-shadow: none;

      height: 0.6rem;
      width: 0.6rem;
    }
    .rec-dot_active {
      background-color: ${theme.colors.blue};
    }

    ${media.lessThan("large")`
      .rec-arrow {
        display: none;
      }
    `};
  `}
`;
