import { ReactElement } from 'react'
import * as S from './styles'

interface MainProps{
  children: ReactElement[] | ReactElement
}

export function Main({children}: MainProps){
  return(
    <S.Main>
      {children}
    </S.Main>
  )
}