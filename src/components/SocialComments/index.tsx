import SocialCommentCard, { TUserComment } from 'components/SocialCommentCard'
import Typography from 'components/Typography'

import * as S from './styles'

type SocialCommentsProps = {
  comments: TUserComment[]
}

const SocialComments = ({ comments }: SocialCommentsProps) => (
  <S.Wrapper>
    <S.TitleWrapper>
      <Typography weight="light" size="huge">
        O que estão falando nas redes sociais
      </Typography>
    </S.TitleWrapper>
    <S.CommentsWrapper>
      {comments.map((item, index) => (
        <SocialCommentCard key={index} comment={item.comment} />
      ))}
    </S.CommentsWrapper>
  </S.Wrapper>
)

export default SocialComments
