import { Story, Meta } from '@storybook/react'

import comment from './mock'
import SocialCommentCard, { TUserComment } from '.'

export default {
  title: 'SocialCommentCard',
  component: SocialCommentCard,
  args: {
    comment
  }
} as Meta

export const Default: Story<TUserComment> = (args) => (
  <SocialCommentCard {...args} />
)
