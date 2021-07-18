import { Story, Meta } from '@storybook/react'
import { Card } from './card.component'
import { Body } from 'components/Typography'

export default {
  title: 'Card component',
  component: Card
} as Meta

export const CardStory: Story = (args) => (
  <Card {...args}>
    <Body color="primarymain">Sou o conteúdo do card!</Body>
  </Card>
)
