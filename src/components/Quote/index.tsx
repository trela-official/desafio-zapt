import styled, { css } from "styled-components";

type QuoteProps = {
  size: "small" | "medium";
  color: "red" | "blue";
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
};

const wrapperModifiers = {
  small: () => css`
    width: 6.2rem;
    height: 6.2rem;
  `,
  medium: () => css`
    width: 10rem;
    height: 10rem;
  `,
  red: () => css`
    background-color: #ff5b58;
  `,
  blue: () => css`
    background-color: #334bc8;
  `,
};

const Quote = styled.div<QuoteProps>`
  ${({ size, color, top, left, bottom, right }) => css`
    position: absolute;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;

    top: ${top};
    right: ${right};
    left: ${left};
    bottom: ${bottom};

    ${wrapperModifiers[size]}
    ${wrapperModifiers[color]}
  `}
`;

export default Quote;
