import { Story, Meta } from '@storybook/react'
import { H2, Body, H4 } from './typography.component.style'

export default {
  title: 'Typography components'
} as Meta

export const Typography: Story = () => (
  <>
    <H2>Sou um H2</H2>
    <Body>Sou um Body</Body>
    <Body color="primarymain">Sou um Body com primary color</Body>
    <H4 color="primaryxdark">Sou um H4 com primaryxdark color</H4>
  </>
)
