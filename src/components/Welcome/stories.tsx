import { Story, Meta } from '@storybook/react'
import Welcome from '.'

export default {
  title: 'Welcome',
  component: Welcome
} as Meta

export const Default: Story = () => (
  <div style={{ padding: '50px' }}>
    <Welcome username="Marcio" />
  </div>
)
