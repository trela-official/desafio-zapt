import * as React from 'react'

import * as S from './card.component.style'
import { CardProps } from './card.model'

export const Card = ({ color, noGutter, children, src }: CardProps) => (
  <S.Wrapper color={color} noGutter={noGutter} src={src}>
    {children}
  </S.Wrapper>
)
