import { Story, Meta } from '@storybook/react'
import SocialReview, { SocialReviewProps } from '.'

import mock from './mock'

export default {
  title: 'SocialReview',
  component: SocialReview,
  args: { ...mock }
} as Meta

export const Default: Story<SocialReviewProps> = (args) => (
  <div style={{ width: '38.4rem', margin: 'auto' }}>
    <SocialReview {...args} />
  </div>
)
