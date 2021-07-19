import { Story, Meta } from '@storybook/react'

import { Body } from 'components/Typography'
import { Carousel } from './carousel.component'

export default {
  title: 'Carousel component',
  component: Carousel
} as Meta

export const CarouselStory: Story = (args) => (
  <Carousel {...args}>
    <Body color="primarymain">Sou o conteúdo do carousel</Body>
    <Body color="primarymain">Sou o conteúdo do carousel</Body>
    <Body color="primarymain">Sou o conteúdo do carousel</Body>
    <Body color="primarymain">Sou o conteúdo do carousel</Body>
  </Carousel>
)
