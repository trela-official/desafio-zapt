import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import UserCommentsCardSlider from '.';

export default {
  title: 'UserCommentsSlider',
  component: UserCommentsCardSlider,
} as Meta;

export const UserCommentsSliderDefault: Story = () => (
  <div style={{ width: '120rem', height: '40rem', margin: '20px' }}>
    <UserCommentsCardSlider />
  </div>
);
