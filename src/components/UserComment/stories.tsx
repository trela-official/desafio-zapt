import { Story, Meta } from '@storybook/react'

import userComments from './mock'
import UserComment, { CommentCardProps } from '.'

export default {
  title: 'UserComment',
  component: UserComment
} as Meta

export const Default: Story<CommentCardProps> = () => (
  <UserComment userComment={userComments[0]} />
)

export const withoutStyleVerson: Story<CommentCardProps> = () => (
  <div style={{ background: 'gray', width: '384px' }}>
    <UserComment
      userComment={userComments[1]}
      removePadding
      removeBackgroundColor
      contentColor="white"
      userDataColor="white"
    />
  </div>
)
