import Image from 'next/image'
import * as S from './styled'

type SocialCommentsProps = {
  comments: {
    title: string
    comments: {
      id: number
      comment: string
      name: string
      image: string
    }[]
  }
}

const SocialComments = ({ comments }: SocialCommentsProps) => {
  return (
    <S.Wrapper>
      <S.Title>{comments.title}</S.Title>
      <S.Grid>
        {comments.comments.map((comment) => (
          <S.Box key={comment.id}>
            <S.Comment>{comment.comment}</S.Comment>
            <S.Info>
              <Image
                src={comment.image}
                alt={comment.name}
                height={36}
                width={36}
              />
              <span>@{comment.name}</span>
            </S.Info>
          </S.Box>
        ))}
      </S.Grid>
    </S.Wrapper>
  )
}

export default SocialComments
