import * as S from './styles'

interface ReviewProps{
  review: string
  name: string
  imageSrc: string
}

export function Review({review, name, imageSrc }: ReviewProps){
  return(
    <S.Review>
      <S.TextReview>{review}</S.TextReview>
      <S.Person>
        <img src={`peopleReview/${imageSrc}`} alt="Imagem da pessoa que avaliou a zapt." />
        <S.Name>@{name}</S.Name>
      </S.Person>
    </S.Review>
  )
}