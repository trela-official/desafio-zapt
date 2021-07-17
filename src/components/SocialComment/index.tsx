import Avatar from 'components/Avatar'

import * as S from './styles'

export type SocialCommentProps = {
  comment: string
  image?: string
  name: string
}

const SocialComment = ({ comment, image, name }: SocialCommentProps) => (
  <S.Wrapper>
    <S.Comment>{`”${comment}”`}</S.Comment>
    <S.User>
      <Avatar image={image} />
      <S.Name>{name}</S.Name>
    </S.User>
  </S.Wrapper>
)

export default SocialComment
