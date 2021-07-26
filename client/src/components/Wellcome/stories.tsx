import { Story, Meta } from '@storybook/react'
import Wellcome, { WellcomeProps } from '.'
import mock from './mock'

export default {
  title: 'Wellcome',
  args: { ...mock },
  component: Wellcome
} as Meta

export const Default: Story<WellcomeProps> = (args) => <Wellcome {...args} />
