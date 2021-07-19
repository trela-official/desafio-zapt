import { Story } from '@storybook/react'
import * as C from 'components'
import Carousel from '.'
import * as S from 'pages/comentarios_de_usuarios/styles'
import { dataUsersComments } from 'components/CardUsersComments/mock'

const Template: Story = args => (
  <S.Container>
    <S.ContainerCarousel>
      <Carousel {...args}>
        {dataUsersComments.map(
          (
            {
              userName,
              city,
              state,
              urlUserBg,
              urlAvatar,
              urlProfile,
              comment
            },
            i
          ) => (
            <C.CardUsersComments
              key={userName + i}
              userName={userName}
              city={city}
              state={state}
              urlUserBg={urlUserBg}
              urlAvatar={urlAvatar}
              urlProfile={urlProfile}
              heigthREM={40}
              comment={comment}
            />
          )
        )}
      </Carousel>
    </S.ContainerCarousel>
  </S.Container>
)

export const Default = Template.bind({})
