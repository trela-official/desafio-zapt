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
  top: (top: string) => css`
    top: ${top};
  `,
  right: (right: string) => css`
    right: ${right};
  `,
  bottom: (bottom: string) => css`
    bottom: ${bottom};
  `,
  left: (left: string) => css`
    left: ${left};
  `,
};

const Quote = styled.div<QuoteProps>`
  ${({ size, color, top, left, bottom, right }) => css`
    position: absolute;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;

    ${!!top && wrapperModifiers.top(top)};
    ${!!right && wrapperModifiers.right(right)};
    ${!!left && wrapperModifiers.left(left)};
    ${!!bottom && wrapperModifiers.bottom(bottom)};

    ${wrapperModifiers[size]()}
    ${wrapperModifiers[color]()}
  `}
`;

export default Quote;
