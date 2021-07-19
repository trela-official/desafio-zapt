import { Story } from '@storybook/react'
import Link from 'next/link'
import * as S from 'pages/boas-vindas/styles'
import Banner, { BannerProps } from '.'

const Template: Story<BannerProps> = args => (
  <S.WrapperBanner>
    <S.Container>
      <Banner {...args}>
        <S.Paragraph>
          Qualquer dúvida que você tiver é só nos chamar no nosso número de
          <Link href="/boas-vindas" passHref>
            <S.LinkZap>WhatsApp.</S.LinkZap>
          </Link>
        </S.Paragraph>
      </Banner>
    </S.Container>
  </S.WrapperBanner>
)

export const Default = Template.bind({})

Default.args = {
  title: 'Bem-vindo Marcio,',
  description:
    'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar.',
  question: 'O que você prefere?',
  img: '/imgs/persons.jpg',
  btn: [
    { textBtn: 'Criar um grupo', route: '/boas-vindas' },
    { textBtn: 'Entrar em um grupo', route: '/boas-vindas' }
  ]
}
