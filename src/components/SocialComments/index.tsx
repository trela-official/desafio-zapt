import UserComment, { TUserComment } from 'components/UserComment'
import Typography from 'components/Typography'

import * as S from './styles'

type SocialCommentsProps = {
  userComments: TUserComment[]
}

const SocialComments = ({ userComments }: SocialCommentsProps) => (
  <S.Wrapper>
    <S.TitleWrapper>
      <Typography weight="light" size="huge">
        O que estão falando nas redes sociais
      </Typography>
    </S.TitleWrapper>
    <S.CommentsWrapper>
      {userComments?.map((item, index) => (
        <UserComment key={index} userComment={item.userComment} />
      ))}
    </S.CommentsWrapper>
  </S.Wrapper>
)

export default SocialComments
