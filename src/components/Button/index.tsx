import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  color?: 'primary' | 'secondary' | 'gray'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper color={color} fullWidth={fullWidth} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
