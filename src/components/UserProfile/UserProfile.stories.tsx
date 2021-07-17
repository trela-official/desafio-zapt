import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import UserProfile, { UserProfileProps } from '.';

export default {
  title: 'Social Comments/UserProfile',
  component: UserProfile,
} as Meta;

export const UserProfileDefault: Story<UserProfileProps> = args => (
  <UserProfile {...args} />
);
UserProfileDefault.args = {
  username: '@LuisCarlos',
  imageProfile:
    'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
};
