import Avatar from 'components/Avatar'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type UserCommentProps = {
  comment: string
  name: string
  userImage: string
  city: string
  state: string
  backgroundImage: string
}

const UserComment = ({
  comment,
  name,
  userImage,
  city,
  state,
  backgroundImage
}: UserCommentProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.CommentWrapper>
      <S.Comment>{`”${comment}”`}</S.Comment>
      <S.User>
        <Avatar image={userImage} borderColor="white" borderWeight="thick" />
        <S.UserInfo>
          <S.Name>{name}</S.Name>

          <MediaMatch lessThan="small">
            <S.Location>
              {city} <br /> {state}
            </S.Location>
          </MediaMatch>

          <MediaMatch greaterThan="small">
            <S.Location>{`${city} • ${state}`}</S.Location>
          </MediaMatch>
        </S.UserInfo>
      </S.User>
    </S.CommentWrapper>
  </S.Wrapper>
)

export default UserComment
