import { Story, Meta } from '@storybook/react'
import Avatar, { AvatarProps } from '.'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    borderColor: 'primary',
    borderWeight: 'normal',
    size: 'small'
  }
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />

Default.args = {
  image: '/img/sample-person.jpeg'
}

export const NoAvatar: Story<AvatarProps> = (args) => <Avatar {...args} />

export const ThickBorder: Story<AvatarProps> = (args) => <Avatar {...args} />

ThickBorder.args = {
  image: '/img/sample-person.jpeg',
  borderWeight: 'thick'
}
