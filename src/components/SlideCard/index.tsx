import UserComment from 'components/UserComment'
import * as S from './styles'

export type TUserComment = {
  userComment: {
    content: string
    user: {
      name: string
      location: string
      icon: string
    }
    backgroundImage: string
  }
}

const SlideCard = ({ userComment }: TUserComment) => (
  <S.Wrapper userComment={userComment}>
    <S.Card>
      <UserComment
        userComment={userComment}
        userDataColor="white"
        contentColor="white"
        removeBackgroundColor
        removePadding
      />
    </S.Card>
  </S.Wrapper>
)

export default SlideCard
