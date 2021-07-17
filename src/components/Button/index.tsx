import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'medium', fullWidth = false, ...props },
  ref
) => (
  <S.Wrapper size={size} fullWidth={fullWidth} ref={ref} {...props}>
    <span>{children}</span>
  </S.Wrapper>
);

export default forwardRef(Button);
