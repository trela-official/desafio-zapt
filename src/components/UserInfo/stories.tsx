import { Story, Meta } from '@storybook/react/types-6-0';

import UserInfo, { UserInfoProps } from '.';
import { userInfo } from './mock';

export default {
  title: 'UserInfo',
  component: UserInfo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<UserInfoProps> = (args) => <UserInfo {...args} />;

Default.args = { ...userInfo };
