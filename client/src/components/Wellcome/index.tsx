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
  content?: string
  ctatext?: string
}

const Wellcome = ({ user, content, ctatext }: WellcomeProps) => (
  <Container>
    <S.Wrapper>
      <S.ElementSmall>
        <Image src={ElementSmall} />
      </S.ElementSmall>
      <S.TextContainer>
        <S.Text>
          <S.Title>Bem vindo, Marcio</S.Title>
          <S.Content>
            Para você aproveitar nossas oportunidades primeiro você precisa
            estar dentro de um grupo, estamos aqui para lhe ajudar.{' '}
          </S.Content>
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
      Qualquer dúvida que você tiver é só nos chamar no nosso número de
      <Link href="/">WhatsApp.</Link>
    </S.TextInfo>
  </Container>
)

export default Wellcome
