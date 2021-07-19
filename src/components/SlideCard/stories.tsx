import { Story, Meta } from '@storybook/react'

import userComment from './mock'
import SlideCard, { TUserComment } from '.'

export default {
  title: 'SlideCard',
  component: SlideCard,
  args: {
    userComment
  }
} as Meta

export const Default: Story<TUserComment> = (args) => <SlideCard {...args} />
