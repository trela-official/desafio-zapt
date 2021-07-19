import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => (
  <div style={{ width: '42rem' }}>
    <Logo {...args} />
  </div>
)
