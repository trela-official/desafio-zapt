import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Text Components/Heading',
  component: Heading,
} as Meta;

export const HeadingDefault: Story<HeadingProps> = args => (
  <Heading {...args} />
);
