import styled, { css } from "styled-components";
import { IButton } from "../../models/button.model";

const SIZE = {
  small: css`
    width: 100px;
  `,
  medium: css`
    width: 160px;
  `,
  large: css`
    width: 200px;
  `,
};

const VARIANT = {
  default: css`
    background-color: #334bc8;
    color: #fff;
    &:hover {
      background-color: #001997;
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.514);
    }
  `,
  secondary: css`
    font-size: 12px;
    &:hover {
      background-color: #001997;
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.514);
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background-color: #c3c3c3;
  color: #f5f5f5;
  &:hover {
    background-color: #c3c3c3;
    color: #f5f5f5;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.114);
  }
`;

export const Container = styled.button<IButton>`
  width: 160px;
  height: 50px;
  background-color: #334bc8;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 16px 0 0;
  transition: all 0.3s;

  ${(props) => props.variant && VARIANT[props.variant]};
  ${(props) => props.disabled && DISABLED};
  ${(props) => props.size && SIZE[props.size]};
`;
