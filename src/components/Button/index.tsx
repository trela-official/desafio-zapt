import * as C from 'components'
import * as S from 'components/Button/styles'
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

export type SizeProps = 'small' | 'medium' | 'large'

export type ColorProps = 'gray' | 'blue'

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  ({ icon, text, ...props }, ref) => (
    <S.Container {...props} ref={ref}>
      {icon}
      <C.IF condition={!!text}>
        <span>{text}</span>
      </C.IF>
    </S.Container>
  )
)

export default Button
