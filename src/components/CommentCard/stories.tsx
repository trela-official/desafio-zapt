import { Story, Meta } from '@storybook/react'
import CommentCard, { CommentCardProps } from '.'

import mock from './mock'

export default {
  title: 'CommentCard',
  component: CommentCard,
  args: { ...mock }
} as Meta

export const Default: Story<CommentCardProps> = (args) => (
  <div style={{ maxWidth: '58.8rem', margin: 'auto' }}>
    <CommentCard {...args} />
  </div>
)
