import { Story, Meta } from '@storybook/react'
import { H2, Body, H4, H5, H3 } from './typography.component.style'

export default {
  title: 'Typography components'
} as Meta

export const TypographyStory: Story = () => (
  <>
    <H2>Sou um H2</H2>
    <H3>Sou um H3</H3>
    <H4 color="primaryxdark">Sou um H4 com primaryxdark color</H4>
    <H5>Sou um H5</H5>
    <Body>Sou um Body</Body>
    <Body color="primarymain">Sou um Body com primary color</Body>
  </>
)
