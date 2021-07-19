import { Story, Meta } from '@storybook/react'

import comments from './mock'
import SocialComments from '.'

export default {
  title: 'SocialComments',
  component: SocialComments
} as Meta

export const Default: Story = () => <SocialComments comments={comments} />
