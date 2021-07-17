import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import UserCommentsCard, { UserCommentsCardProps } from '.';

export default {
  title: 'UserCommentsCard',
  component: UserCommentsCard,
} as Meta;

export const UserCommentsCardDefault: Story<UserCommentsCardProps> = args => (
  <div
    style={{
      maxWidth: '58rem',
      height: ' 40rem',
    }}
  >
    <UserCommentsCard {...args} />
  </div>
);

UserCommentsCardDefault.args = {
  username: '@LuisCarlos',
  userSubtext: 'Luis carlos nascimento bastos',
  image:
    'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
  comment:
    '”Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal”',

  backgroundImage:
    'https://images.unsplash.com/photo-1626181181323-d0834fb2e2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
};
