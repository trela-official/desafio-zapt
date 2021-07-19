import { Story, Meta } from '@storybook/react'

import userComments from './mock'
import SocialComments from '.'

export default {
  title: 'SocialComments',
  component: SocialComments
} as Meta

export const Default: Story = () => (
  <SocialComments userComments={userComments} />
)
