import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 40rem;
    width: 58.8rem;

    padding: ${theme.spacings.small};

    .card-testimony {
      z-index: ${theme.layers.base};
      width: 40rem;
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.weight.normal};
      text-align: left;
      margin-bottom: ${theme.spacings.xsmall};
    }

    .card-background {
      border-radius: ${theme.border.radius};
      filter: brightness(60%);
    }

    .card-noise-overlay {
      position: absolute;
      opacity: 1;
      top: 0;
      left: 0;
    }

    ${media.lessThan("medium")`
      .card-testimony {
        width: 30rem;
      }
    `};
  `}
`;
