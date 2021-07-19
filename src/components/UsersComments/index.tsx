import Image from 'next/image'

import SlideShow from 'components/Slide'

import * as S from './styled'

type UserCommentsProps = {
  comments: {
    title: string
    comments: {
      id: number
      comment: string
      image: string
      user: {
        avatar: string
        name: string
        city: string
        state: string
      }
    }[]
  }
}

const UsersComments = ({ comments }: UserCommentsProps) => (
  <S.Wrapper>
    <S.Title>{comments.title}</S.Title>
    <SlideShow>
      {comments.comments.map((comment) => (
        <S.ImageWrapper key={comment.id}>
          <Image
            src={comment.image}
            alt={comment.user.name}
            width={588}
            height={422}
          />
          <S.CommentWrapper>
            <S.CommentDescription>{`"${comment.comment}"`}</S.CommentDescription>
            <S.CommentAvatarWrapper>
              <Image
                src={comment.user.avatar}
                alt={comment.user.name}
                width={40}
                height={40}
              />
              <S.CommentAvatarInfo>
                <p>{comment.user.name}</p>
                <span>
                  {comment.user.city} • {comment.user.state}
                </span>
              </S.CommentAvatarInfo>
            </S.CommentAvatarWrapper>
          </S.CommentWrapper>
        </S.ImageWrapper>
      ))}
    </SlideShow>
  </S.Wrapper>
)

export default UsersComments
