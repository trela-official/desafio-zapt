import Masonry from 'react-masonry-css'

import Base from 'templates/Base'
import SocialComment, { SocialCommentProps } from 'components/SocialComment'
import { UserCommentProps } from 'components/UserComment'
import UserCommentSlider from 'components/UserCommentSlider'

export type HomeTemplateProps = {
  socialComments?: SocialCommentProps[]
  userComments?: UserCommentProps[]
}

const masonryBreakpoints = {
  default: 3,
  1170: 2,
  768: 1
}

import * as S from './styles'

const Home = ({ socialComments, userComments }: HomeTemplateProps) => (
  <Base>
    {!!userComments && (
      <S.SectionUserComments>
        <S.SectionTitle>O que as pessoas estão achando</S.SectionTitle>

        <UserCommentSlider items={userComments} />
      </S.SectionUserComments>
    )}

    {!!socialComments && (
      <S.SectionSocialComments>
        <S.SectionTitle>O que estão falando nas redes sociais</S.SectionTitle>

        <S.SocialCommentsWrapper>
          <Masonry breakpointCols={masonryBreakpoints} className="masonry-grid">
            {socialComments.map((item) => (
              <SocialComment key={item.name} {...item} />
            ))}
          </Masonry>
        </S.SocialCommentsWrapper>
      </S.SectionSocialComments>
    )}
  </Base>
)

export default Home
