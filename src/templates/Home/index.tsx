import Masonry from 'react-masonry-css'

import Base from 'templates/Base'
import SocialComment, { SocialCommentProps } from 'components/SocialComment'

export type HomeTemplateProps = {
  comments?: SocialCommentProps[]
}

const masonryBreakpoints = {
  default: 3,
  1170: 2,
  768: 1
}

import * as S from './styles'

const Home = ({ comments }: HomeTemplateProps) => (
  <Base>
    {!!comments && (
      <S.SectionSocialComments>
        <S.SectionTitle>O que estão falando nas redes sociais</S.SectionTitle>

        <S.SocialCommentsWrapper>
          <Masonry breakpointCols={masonryBreakpoints} className="masonry-grid">
            {comments.map((item) => (
              <SocialComment key={item.name} {...item} />
            ))}
          </Masonry>
        </S.SocialCommentsWrapper>
      </S.SectionSocialComments>
    )}
  </Base>
)

export default Home
