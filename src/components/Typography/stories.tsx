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
      type: 'string'
    },
    weight: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    color: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TypographyProps> = (args) => (
  <Typography {...args} />
)

Default.args = {
  children: 'Test'
}
