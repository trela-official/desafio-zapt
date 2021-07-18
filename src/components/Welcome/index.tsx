import Link from 'next/link'
import Logo from 'components/Logo'

import { Circle, Curve } from './figures'
import * as S from './styles'

export type Option = {
  text: string
  link: string
}

export type WelcomeProps = {
  username: string
  message: string
  question: string
  options: Option[]
  contactNumber: number
}

const Welcome = ({
  username,
  message,
  question,
  options,
  contactNumber
}: WelcomeProps) => (
  <S.Section>
    <S.Wrapper>
      <S.Container>
        <S.LogoWrapper corner="top-left">
          <Logo color="red" size="small" />
        </S.LogoWrapper>
        <S.Content>
          <S.Title>Bem vindo {username}</S.Title>
          <S.Message>{message}</S.Message>
          <S.Question>{question}</S.Question>
          <S.Options>
            <S.List>
              {options.map((option) => (
                <li key={option.link}>
                  <Link href={option.link} passHref>
                    <S.Link>{option.text}</S.Link>
                  </Link>
                </li>
              ))}
            </S.List>
          </S.Options>
        </S.Content>

        <S.ImageWrapper img={'/img/welcome.png'} mask={'/img/mask.svg'}>
          <Circle />
          <Curve />
        </S.ImageWrapper>

        <S.LogoWrapper corner="bottom-right">
          <Logo color="blue" size="medium" />
        </S.LogoWrapper>
      </S.Container>

      <S.ContactLink>
        Qualquer dúvida que você tiver é só nos chamar no nosso número de {''}
        <Link href={`https://wa.me/${contactNumber}`}>
          <a target="_blank" rel="noopener">
            WhatsApp
          </a>
        </Link>
        .
      </S.ContactLink>
    </S.Wrapper>
  </S.Section>
)

export default Welcome
