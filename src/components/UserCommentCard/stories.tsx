import { Story, Meta } from '@storybook/react/types-6-0';

import UserCommentCard, { UserCommentCardProps } from '.';
import { userComment } from './mock';

export default {
  title: 'UserCommentCard',
  component: UserCommentCard,
} as Meta;

export const Default: Story<UserCommentCardProps> = (args) => (
  <UserCommentCard {...args} />
);

Default.args = { ...userComment };
