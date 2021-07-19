import Image from 'next/image'

import { Feedback, Author } from 'components/SocialReview/styles'
import * as S from './styles'

export type Author = {
  photo?: string
  name: string
  city: string
  state: string
}

export type CommentCardProps = {
  img: string
  title: string
  feedback: string
  author: Author
}

const CommentCard = ({ img, title, feedback, author }: CommentCardProps) => {
  return (
    <S.Wrapper>
      <S.NoiseOverlay src={'/img/noise-overlay.png'} />
      <S.ImageWrapper>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageWrapper>

      <S.Content>
        <S.FeedbackWrapper>
          <Feedback>{feedback}</Feedback>
        </S.FeedbackWrapper>

        <Author>
          <S.AuthorAvatar src={author?.photo} alt={`${author.name}`} />
          <S.AuthorInfo>
            <S.AuthorName>{author.name}</S.AuthorName>
            <S.AuthorLocation>
              {author.city} • {author.state}
            </S.AuthorLocation>
          </S.AuthorInfo>
        </Author>
      </S.Content>
    </S.Wrapper>
  )
}

export default CommentCard
