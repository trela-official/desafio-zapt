import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Criar um grupo',
    color: 'primary'
  },
  argTypes: {
    as: {
      table: {
        disable: true
      }
    }
  }
} as Meta

export const PrimaryColor: Story<ButtonProps> = (args) => <Button {...args} />

export const SecondaryColor: Story<ButtonProps> = (args) => <Button {...args} />

SecondaryColor.args = {
  color: 'secondary'
}

export const Gray: Story<ButtonProps> = (args) => <Button {...args} />

Gray.args = {
  color: 'gray'
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  as: 'a',
  href: '/link'
}

export const FullWidth: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <Button {...args} />
  </div>
)

FullWidth.args = {
  fullWidth: true
}
