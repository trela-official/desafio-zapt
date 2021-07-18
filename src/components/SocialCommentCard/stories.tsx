import { Story, Meta } from '@storybook/react/types-6-0';

import SocialCommentCard, { SocialCommentCardProps } from '.';

import { socialComment1 } from './mock';

export default {
  title: 'SocialCommentCard',
  component: SocialCommentCard,
} as Meta;

export const Default: Story<SocialCommentCardProps> = (args) => (
  <div style={{ maxWidth: '38.4rem', maxHeight: '23.2rem' }}>
    <SocialCommentCard {...args} />
  </div>
);

Default.args = { ...socialComment1 };
