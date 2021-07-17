import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import { Avatar } from './avatar.component'
import { AvatarProps } from './avatar.model'

export default {
  title: 'Avatar component',
  component: Avatar
} as Meta

export const AvatarStory: Story<AvatarProps> = (args) => <Avatar {...args} />

AvatarStory.args = {
  imageUrl:
    'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
  size: 'large'
}
