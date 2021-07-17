import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Typography, { TypographyProps } from '.';

export default {
  title: 'Text Components/Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const TypographyDefault: Story<TypographyProps> = args => (
  <Typography {...args} />
);
