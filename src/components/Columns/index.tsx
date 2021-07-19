import { ReactElement } from 'react'
import * as S from './styles'

interface ColumnProps{
  children: ReactElement[] | ReactElement
}

export function Column({children}: ColumnProps){
  return(
    <S.Column>
      {children}
    </S.Column>
  )
}