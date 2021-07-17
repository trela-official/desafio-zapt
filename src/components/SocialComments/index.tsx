import SocialReview, { SocialReviewProps } from 'components/SocialReview'
import Section from 'components/Section'
import * as S from './styles'

export type SocialCommentsProps = {
  title: string
  comments: SocialReviewProps[]
}

const SocialComments = ({ title, comments }: SocialCommentsProps) => (
  <Section title={title}>
    <S.Grid>
      {comments.map(({ author, feedback }) => (
        <SocialReview
          key={author.username}
          author={author}
          feedback={feedback}
        />
      ))}
    </S.Grid>
  </Section>
)

export default SocialComments
