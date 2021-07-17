import * as React from 'react'

import * as S from './card.component.style'
import { CardProps } from './card.model'

export const Card = ({ color, hasGutter, children }: CardProps) => {
  return (
    <S.Wrapper color={color} hasGutter={hasGutter}>
      {children}
    </S.Wrapper>
  )
}

Card.defaultProps = { color: 'secondary', hasGutter: true }
