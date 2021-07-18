import Image from 'next/image'
import * as S from './styles'

type UserType = {
  name: string
  avatar_url: string
  username: string
  social_provider: string
}

type Testimonial = {
  text: string
}

export type CardSocialCommentProps = {
  user: UserType
  testimonial: Testimonial
}

const CardSocialComment = ({ testimonial, user }: CardSocialCommentProps) => (
  <S.Wrapper>
    <p>{testimonial.text}</p>
    <S.UserInfo title={`${user.name} via ${user.social_provider}`}>
      <Image
        src={user.avatar_url}
        alt={`Foto de perfil de ${user.name}`}
        width={36}
        height={36}
        objectFit="cover"
      />
      <span>@{user.username}</span>
    </S.UserInfo>
  </S.Wrapper>
)

export default CardSocialComment
