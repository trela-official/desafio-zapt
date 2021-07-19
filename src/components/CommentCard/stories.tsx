import { Story, Meta } from '@storybook/react'
import CommentCard, { CommentCardProps } from '.'

export default {
  title: 'CommentCard',
  component: CommentCard,
  args: {
    img: '/img/mocks/fake-card-bg.jpg',
    title: 'Card Mock',
    feedback:
      'Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal',
    author: {
      name: 'Patricia Godoy',
      photo: '/img/mocks/fake-avatar.jpg',
      city: 'São Paulo',
      state: 'São Paulo'
    }
  }
} as Meta

export const Default: Story<CommentCardProps> = (args) => (
  <div style={{ maxWidth: '58.8rem', margin: 'auto' }}>
    <CommentCard {...args} />
  </div>
)
