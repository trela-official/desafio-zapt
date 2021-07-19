import HeroCta from 'components/HeroCta'
import SubtitleWithLink from 'components/SubtitleWithLink'

import * as S from './styles'

type WelcomePrps = {
  username: string
}

const Welcome = ({ username }: WelcomePrps) => {
  const createGroup = () => {
    window.alert('Criar um grupo')
  }

  const enterGroup = () => {
    window.alert('Entrar em um grupo')
  }

  return (
    <S.CardWrapper>
      <S.ContentWrapper>
        <S.BorderTopImage src="/img/orange-icon.png" />

        <S.HeroWrapper>
          <HeroCta
            heroTitle={`Bem vindo ${username},`}
            heroSubtitle="Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar."
            ctaTitle="O que você prefere?"
            firstOption={{ label: 'Entrar em um grupo', action: enterGroup }}
            secondOption={{ label: 'Criar um grupo', action: createGroup }}
          />
        </S.HeroWrapper>

        <S.WelcomeImageWrapper>
          <S.Circle />
          <S.Ellipse />
        </S.WelcomeImageWrapper>
        <S.BorderBottomImage src="/img/blue-icon.png" />
      </S.ContentWrapper>
      <SubtitleWithLink
        text="Qualquer dúvida que você tiver é só nos chamar no nosso número de"
        link={{ label: 'Whatsapp.', href: '/' }}
      />
    </S.CardWrapper>
  )
}

export default Welcome
