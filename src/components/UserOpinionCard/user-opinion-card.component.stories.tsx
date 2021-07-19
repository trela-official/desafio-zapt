import { Story, Meta } from '@storybook/react'
import { UserOpinionCard } from './user-opinion-card.component'

export default {
  title: 'UserOpinionCard component',
  component: UserOpinionCard
} as Meta

export const UserOpinionCardStory: Story = (args) => (
  <UserOpinionCard
    avatarUrl={avatarUrl}
    city={city}
    name={name}
    backgroundUrl={backgroundUrl}
    state={state}
    description={description}
    {...args}
  />
)

const description =
  'Depois que você começa a usar produtos de qualidade é bem difícil voltar atrás...'
const avatarUrl = '/img/marcinho-ribeiro.png'
const name = 'Marcinho Ribeiro'
const city = 'Belo Horizonte'
const state = 'Minas Gerais'
const backgroundUrl = '/img/couple-card.png'

UserOpinionCardStory.args = {
  description,
  avatarUrl,
  name,
  city,
  state,
  backgroundUrl
}
