import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, as, ...props }: ButtonProps) => (
  <S.Wrapper as={as} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
