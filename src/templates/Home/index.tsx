import Masonry from 'react-masonry-css'

import Base from 'templates/Base'
import Button from 'components/Button'
import Callout from 'components/Callout'
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

const Home = ({ userComments, socialComments }: HomeTemplateProps) => (
  <Base>
    <S.SectionWelcome>
      <Callout
        title="Bem vindo Marcio,"
        subtitle="Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar."
        image="/img/promo/callout.jpeg"
        imageText="Três mulheres abraçadas e sorrindo"
      >
        <S.CalloutContent>
          <S.ContentTitle>O que você prefere?</S.ContentTitle>
          <S.ContentButtons>
            <Button>Criar um grupo</Button>
            <Button>Entrar em um grupo</Button>
          </S.ContentButtons>
        </S.CalloutContent>
      </Callout>
      <S.CalloutFooter>
        Qualquer dúvida que você tiver é só nos chamar no nosso número de{' '}
        <a href="#">WhatsApp</a>.
      </S.CalloutFooter>
    </S.SectionWelcome>

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
