import Button from 'components/Button'
import Heading from 'components/Heading'
import IconFour from './icons/IconFour'
import IconOne from './icons/IconOne'
import IconThree from './icons/IconThree'
import IconTwo from './icons/IconTwo'
import * as S from './styles'

export type UserType = {
  name: string
  gender: 'male' | 'female'
}

export type WelcomeBannerProps = {
  user: UserType
}

const WelcomeBanner = ({ user }: WelcomeBannerProps) => {
  const isFemale = user.gender === 'female'
  const sentenceGenre = isFemale ? 'a' : 'o'

  return (
    <S.Wrapper>
      <S.Content>
        <Heading level={2} size="xlarge" lineHeight="3.4rem">
          {`Bem vind${sentenceGenre} ${user.name}!`}
        </Heading>
        <p>
          Para você aproveitar nossas oportunidades primeiro você precisa estar
          dentro de um grupo, estamos aqui para lhe ajudar.
        </p>
        <S.WrapperButtons>
          <Heading level={3} size="medium">
            O que você prefere?
          </Heading>
          <Button>Criar um grupo</Button>
          <Button>Entrar em um grupo</Button>
        </S.WrapperButtons>
        <S.WrapperFloatIcons>
          <IconOne />
          <IconTwo />
          <IconThree />
          <IconFour />
        </S.WrapperFloatIcons>
      </S.Content>
      <S.WhatAppContact>
        Qualquer dúvida que você tiver é só nos chamar no nosso número de{' '}
        <a target="_blank" rel="noreferrer" href="https://wa.me/5538998280928">
          WhatsApp.
        </a>
      </S.WhatAppContact>
    </S.Wrapper>
  )
}

export default WelcomeBanner
