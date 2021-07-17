import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Entrar em um grupo'
}

export const asLink: Story<ButtonProps> = ({ ...args }) => <Button {...args} />

asLink.args = {
  children: 'Criar um grupo',
  as: 'a',
  href: '/link'
}
