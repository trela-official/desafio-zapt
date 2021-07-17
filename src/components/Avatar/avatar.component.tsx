import * as React from 'react'

import * as S from './avatar.component.style'
import { AvatarProps } from './avatar.model'

export const Avatar = ({ imageUrl, borderColor, size }: AvatarProps) => (
  <S.Avatar borderColor={borderColor} size={size} imageUrl={imageUrl} />
)
