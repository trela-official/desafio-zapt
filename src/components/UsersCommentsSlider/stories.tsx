import { Story, Meta } from '@storybook/react/types-6-0';

import UsersCommentsSlider, { BannerSliderProps } from '.';
import { usersComments } from './mock';

export default {
  title: 'UsersCommentsSlider',
  component: UsersCommentsSlider,
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
    <UsersCommentsSlider {...args} />
  </div>
);

Default.args = {
  comments: [...usersComments],
};
