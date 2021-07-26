import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'components/Container'
import Button from 'components/Button'

import ImageWellcome from '../../../public/img/image-wellcome.png'
import ElementSmall from '../../../public/img/element-small.svg'
import ElementCircle from '../../../public/img/element-circle.svg'
import ElementCurve from '../../../public/img/element-curve.svg'
import ElementBig from '../../../public/img/element-big.svg'

export type WellcomeProps = {
  user?: string
  contentMessage?: string
  messageCTA?: string
  contactCTA?: string
}

const Wellcome = ({
  user,
  contentMessage,
  messageCTA,
  contactCTA
}: WellcomeProps) => (
  <Container>
    <S.Wrapper>
      <S.ElementSmall>
        <Image src={ElementSmall} />
      </S.ElementSmall>
      <S.TextContainer>
        <S.Text>
          <S.Title>Bem vindo, {user}</S.Title>
          <S.Content>{contentMessage}</S.Content>
        </S.Text>
        <S.ContentCTA>
          <S.TitleCTA>O que você prefere?</S.TitleCTA>
          <Button>Criar um grupo</Button>
          <Button>Entrar em um grupo</Button>
        </S.ContentCTA>
      </S.TextContainer>
      <S.ImageContainer>
        <S.ElementCircle>
          <Image
            src={ElementCircle}
            alt="Elemento círculo sobre a imagem de boas vindas!"
          />
        </S.ElementCircle>

        <S.ElementCurve>
          <Image
            src={ElementCurve}
            alt="Elemento curva sobre a imagem de boas vindas!"
          />
        </S.ElementCurve>

        <S.ElementBig>
          <Image
            src={ElementBig}
            alt="Elemento azul grande sobre a imagem de boas vindas!"
          />
        </S.ElementBig>
        <Image
          src={ImageWellcome}
          alt="Imagem de boas vindas, pessoas felizes!"
        />
      </S.ImageContainer>
    </S.Wrapper>
    <S.TextInfo>
      {messageCTA}
      <Link href="/">{contactCTA}</Link>
    </S.TextInfo>
  </Container>
)

export default Wellcome
