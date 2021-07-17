import { Story, Meta } from '@storybook/react'
import Typography, { TypographyProps } from '.'

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string'
    },
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'p']
      }
    },
    weight: {
      control: {
        type: 'select',
        options: ['light', 'regular', 'medium']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'white',
          'gray',
          'lightBlue',
          'neutralBlue',
          'darkBlue',
          'black'
        ]
      }
    }
  }
} as Meta

export const Default: Story<TypographyProps> = (args) => (
  <Typography {...args} />
)

Default.args = {
  children: 'Test'
}
