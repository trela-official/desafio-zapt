import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const ButtonDefault: Story<ButtonProps> = args => <Button {...args} />;
