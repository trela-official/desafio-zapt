import { Story, Meta } from '@storybook/react'
import { H2, Body, BodySecondary } from './typography.component.style'

export default {
  title: 'Typography components'
} as Meta

export const Typography: Story = () => (
  <>
    <H2>Sou um H2</H2>
    <Body>Sou um Body</Body>
    <Body color="primary">Sou um Body com primary color</Body>
    <BodySecondary color="darkBlue">
      Sou um BodySecondary com dark blue color
    </BodySecondary>
  </>
)
