import Link from 'next/link'
import * as C from 'components'
import * as S from 'pages/boas-vindas/styles'

export default function Welcome() {
  return (
    <S.WrapperBanner>
      <S.Container>
        <C.HeadPage title="Página de Boas-Vindas" />

        <C.Banner
          title="Bem-vindo Marcio,"
          description="Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar."
          question="O que você prefere?"
          img="/imgs/persons.jpg"
          btn={[
            { textBtn: 'Criar um grupo', route: '/boas-vindas' },
            { textBtn: 'Entrar em um grupo', route: '/boas-vindas' }
          ]}
        >
          <S.Paragraph>
            Qualquer dúvida que você tiver é só nos chamar no nosso número de
            <Link href="/boas-vindas" passHref>
              <S.LinkZap>WhatsApp.</S.LinkZap>
            </Link>
          </S.Paragraph>
        </C.Banner>
      </S.Container>
    </S.WrapperBanner>
  )
}
