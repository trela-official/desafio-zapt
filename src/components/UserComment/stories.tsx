import { Story, Meta } from '@storybook/react'

import userComments from './mock'
import UserCommentCard, { CommentCardProps } from '.'

export default {
  title: 'UserCommentCard',
  component: UserCommentCard
} as Meta

export const Default: Story<CommentCardProps> = () => (
  <UserCommentCard userComment={userComments[0]} />
)

export const withoutStyleVerson: Story<CommentCardProps> = () => (
  <div style={{ background: 'gray', width: '384px' }}>
    <UserCommentCard
      userComment={userComments[1]}
      removePadding
      removeBackgroundColor
      contentColor="white"
      userDataColor="white"
    />
  </div>
)
