import styled, { css } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = Pick<ButtonProps, "size">;

const wrapperModifiers = {
  medium: () => css`
    width: 16.1rem;
  `,
  large: () => css`
    width: 19.3rem;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ size }) => css`
    background-color: #334bc8;
    border: 0;
    color: #fff;
    border-radius: 4px;
    font-size: 1.4rem;
    height: 5.1rem;
    cursor: pointer;

    ${!!size && wrapperModifiers[size]};
  `}
`;
