import { Story, Meta } from '@storybook/react'
import WelcomeBanner, { WelcomeBannerProps } from '.'

export default {
  title: 'Welcome Banner',
  component: WelcomeBanner
} as Meta

export const Default: Story<WelcomeBannerProps> = (args) => (
  <WelcomeBanner {...args} />
)

Default.args = {
  user: {
    gender: 'male',
    name: 'Alan Gabriel'
  }
}
