import Typography, { TFontColor } from 'components/Typography'

import * as S from './styles'

export type TUserComment = {
  userComment: {
    content: string
    user: {
      name: string
      location?: string
      icon: string
    }
    backgroundImage?: string
  }
}

export type CommentCardProps = {
  removeBackgroundColor?: boolean
  removePadding?: boolean
  contentColor?: TFontColor
  userDataColor?: TFontColor
} & TUserComment

const UserCommentCard = ({
  userComment,
  contentColor = 'neutralBlue',
  userDataColor = 'darkBlue',
  removeBackgroundColor = false,
  removePadding = false
}: CommentCardProps) => {
  const hasUserLocation = !!userComment.user.location

  return (
    <S.Card
      removeBackgroundColor={removeBackgroundColor}
      removePadding={removePadding}
    >
      <Typography as="p" color={contentColor} size="medium">
        {userComment.content}
      </Typography>
      <S.UserProfile>
        <S.UserImage src={userComment?.user.icon} />
        <div>
          <Typography as="p" size="small" color={userDataColor} weight="medium">
            {userComment?.user.name}
          </Typography>
          {hasUserLocation && (
            <Typography
              as="p"
              size="xsmall"
              color={userDataColor}
              weight="medium"
            >
              {userComment?.user.location}
            </Typography>
          )}
        </div>
      </S.UserProfile>
    </S.Card>
  )
}

export default UserCommentCard
