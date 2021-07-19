import { Story } from '@storybook/react'
import Layouts from 'layouts'
import styled from 'styled-components'
import CardUsersComments, { CardUsersCommentsProps } from '.'

const Wrapper = styled(Layouts.Row)`
  max-width: 50rem;
  height: 35rem;
`

const Template: Story<CardUsersCommentsProps> = args => (
  <Wrapper>
    <CardUsersComments {...args} />
  </Wrapper>
)

export const Default = Template.bind({})

Default.args = {
  userName: 'Patricia Godoy',
  city: 'São Paulo',
  state: 'São Paulo',
  urlUserBg: 'slide-2.jpg',
  urlAvatar: 'avatar-woman.jpg',
  urlProfile: '/comentarios_de_usuarios',
  comment:
    '”Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal”',
  heigthREM: 35
}
