import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

export type ButtonProps = {
  size?: "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ size = "medium", children, ...props }: ButtonProps) => {
  return (
    <S.Wrapper size={size} {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
