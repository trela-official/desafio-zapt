import Typography from 'components/Typography'

import * as S from './styles'

export type TUserComment = {
  comment: {
    content: string
    user: {
      profileIcon: string
      username: string
    }
  }
}

const SocialCommentCard = ({ comment }: TUserComment) => (
  <S.Card>
    <Typography as="p" color="neutralBlue" size="medium">
      {comment.content}
    </Typography>
    <S.UserProfile>
      <S.UserImage src={comment.user.profileIcon} />
      <Typography as="p" size="small" color="darkBlue" weight="medium">
        {comment.user.username}
      </Typography>
    </S.UserProfile>
  </S.Card>
)

export default SocialCommentCard
