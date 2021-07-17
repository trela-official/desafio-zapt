import * as S from './styles'

export type Author = {
  username: string
  photo: string
}

export type SocialReviewProps = {
  author: Author
  feedback: string
}

const SocialReview = ({ author, feedback }: SocialReviewProps) => (
  <S.Wrapper>
    <S.FeedbackWrapper>
      <S.Feedback>{feedback}</S.Feedback>
    </S.FeedbackWrapper>

    <S.Author>
      <S.AuthorAvatar src={author.photo} alt={author.username} />
      <S.AuthorUsername>{author.username}</S.AuthorUsername>
    </S.Author>
  </S.Wrapper>
)

export default SocialReview
