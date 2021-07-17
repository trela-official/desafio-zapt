import { Story, Meta } from '@storybook/react'
import { H2 } from './typography.component.style'

export default {
  title: 'Typography components'
} as Meta

export const Typography: Story = () => (
  <>
    <H2>Olá, eu sou um H2</H2>
  </>
)
