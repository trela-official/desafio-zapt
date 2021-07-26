import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  args: {
    children: 'Criar um grupo'
  },
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
