import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import UserCommentsCardSlider, { UserCommentsCardSliderProps } from '.';
import userSliderMocks from 'mocks/userSliderMocks';

export default {
  title: 'User Comments/UserCommentsSlider',
  component: UserCommentsCardSlider,
} as Meta;

export const UserCommentsSliderDefault: Story<UserCommentsCardSliderProps> = args => (
  <div style={{ width: '120rem', height: '40rem', margin: '20px' }}>
    <UserCommentsCardSlider {...args} />
  </div>
);

UserCommentsSliderDefault.args = {
  cardsData: userSliderMocks,
};
