import * as React from 'react'

import * as S from './card.component.style'
import { CardProps } from './card.model'

export const Card = ({ color, noGutter: hasGutter, children }: CardProps) => {
  return (
    <S.Wrapper color={color} noGutter={hasGutter}>
      {children}
    </S.Wrapper>
  )
}
