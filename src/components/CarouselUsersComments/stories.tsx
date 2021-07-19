import { Story } from '@storybook/react'
import CarouselUsersComments, { dataUsersCommentsProps } from '.'
import * as S from 'pages/comentarios_de_usuarios/styles'
import { dataUsersComments } from '../CardUsersComments/mock'

const Template: Story<dataUsersCommentsProps> = args => (
  <S.Container>
    <S.ContainerCarousel>
      <CarouselUsersComments {...args} />
    </S.ContainerCarousel>
  </S.Container>
)

export const Default = Template.bind({})

Default.args = {
  dataUsersComments
} as dataUsersCommentsProps
