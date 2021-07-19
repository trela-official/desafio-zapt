import * as S from './styles'

interface ReviewProps{
  review: string
  name: string
}

export function Review({review, name }: ReviewProps){
  return(
    <S.Review>
      <S.TextReview>{review}</S.TextReview>
      <S.Person>@{name}</S.Person>
    </S.Review>
  )
}