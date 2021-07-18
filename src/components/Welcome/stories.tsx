import { Story, Meta } from '@storybook/react'
import Welcome, { WelcomeProps } from '.'

import mock from './mock'

export default {
  title: 'Welcome',
  component: Welcome,
  args: { ...mock }
} as Meta

export const Default: Story<WelcomeProps> = (args) => <Welcome {...args} />
