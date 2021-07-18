import { Story, Meta } from '@storybook/react'
import CardSocialComment, { CardSocialCommentProps } from '.'

export default {
  title: 'CardSocialComment',
  component: CardSocialComment,
  args: {
    user: {
      name: 'Alan Gabriel',
      avatar_url: '/img/profile.jpg',
      username: 'eualangabriel',
      social_provider: 'Twitter'
    },
    testimonial: {
      text:
        'Eu disse que seria a melhor pessoa para ajudar a criar uma ambiente foda, para construir coisas incríveis'
    }
  }
} as Meta

export const Default: Story<CardSocialCommentProps> = (args) => (
  <CardSocialComment {...args} />
)
