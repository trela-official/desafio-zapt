import { Story, Meta } from '@storybook/react'
import TestimonyCard, { TestimonyCardProps } from '.'

export default {
  title: 'TestimonyCard',
  component: TestimonyCard
} as Meta

export const Default: Story<TestimonyCardProps> = (args) => (
  <TestimonyCard {...args} />
)

Default.args = {
  user: {
    name: 'Alan Gabriel',
    avatar_url: '/img/profile.jpg',
    address: {
      city: 'Arinos',
      state: 'Minas Gerias'
    }
  },
  testimonial: {
    text:
      'Depois que entrei pra Zapt consegui ter clareza sobre o futuro da minha carreira',
    thumbnail: '/img/IMG_1756.jpg'
  }
}
