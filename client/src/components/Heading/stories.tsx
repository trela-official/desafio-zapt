import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      options: [
        'xsmall',
        'small',
        'medium',
        'normal',
        'large',
        'xlarge',
        'huge'
      ],
      control: { type: 'select' },
      defaultValue: 'normal'
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
      defaultValue: 1
    },
    color: {
      control: 'color',
      defaultValue: '#000000'
    },
    fontWeight: {
      name: 'Font Weight',
      options: [300, 400, 500],
      control: { type: 'select' },
      defaultValue: 500
    },
    lineHeight: {
      name: 'Line Height',
      type: 'number',
      defaultValue: 1.5
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Bem Vindo Alan Gabriel'
}
