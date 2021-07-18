import { Story, Meta } from '@storybook/react'
import UserComment, { UserCommentProps } from '.'

export default {
  title: 'UserComment',
  component: UserComment,
  args: {
    comment:
      'Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal',
    name: 'Marcinho Ribeiro',
    userImage: '/img/sample-person.jpeg',
    city: 'São José do Vale do Rio Preto',
    state: 'Rio de Janeiro',
    backgroundImage: '/img/promo/patricia-godoy.jpg'
  }
} as Meta

export const Default: Story<UserCommentProps> = (args) => (
  <div style={{ maxWidth: '58.8rem', margin: 'auto' }}>
    <UserComment {...args} />
  </div>
)
