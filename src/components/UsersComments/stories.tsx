import { Story, Meta } from '@storybook/react'
import UserComments, { UsersCommentsProps } from '.'

import mock from './mock'

export default {
  title: 'UserComments',
  component: UserComments,
  args: {
    title: 'O que as pessoas estão achando',
    items: mock
  }
} as Meta

export const Default: Story<UsersCommentsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <UserComments {...args} />
  </div>
)
