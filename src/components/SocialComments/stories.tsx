import { Story, Meta } from '@storybook/react'
import SocialComments, { SocialCommentsProps } from '.'

import mock from './mock'

export default {
  title: 'SocialComments',
  component: SocialComments,
  args: {
    title: 'O que estão falando nas redes sociais',
    comments: mock
  }
} as Meta

export const Default: Story<SocialCommentsProps> = (args) => (
  <SocialComments {...args} />
)
