import { Story } from '@storybook/react'
import styled from 'styled-components'
import SocialComments, { SocialCommentsProps } from '.'

const Wrapper = styled.div`
  display: flex;
  max-width: 40rem;
  width: 100%;
`

const Template: Story<SocialCommentsProps> = args => (
  <Wrapper>
    <SocialComments {...args} />
  </Wrapper>
)

export const Default = Template.bind({})

Default.args = {
  userName: '@paolaC',
  img: 'avatar-woman.jpg',
  comment:
    '”Estava precisando achar algum lugar que vendia produtos que veem direto da fazenda... a Zapt salvou.. e ainda paguei um preço muito mais barato que supermercado 🙌”',
  urlProfile: '/comentarios_nas_redes_sociais'
}
