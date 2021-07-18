import { Story, Meta } from '@storybook/react/types-6-0';

import SocialCommentsList, { SocialCommentsListProps } from '.';

import { socialComments } from './mock';

export default {
  title: 'SocialCommentsList',
  component: SocialCommentsList,
} as Meta;

export const Default: Story<SocialCommentsListProps> = (args) => (
  <div style={{ maxWidth: '120rem' }}>
    <SocialCommentsList {...args} />
  </div>
);

Default.args = {
  comments: socialComments,
};
