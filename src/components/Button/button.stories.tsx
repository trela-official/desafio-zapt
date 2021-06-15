import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const ButtonDefault: Story<ButtonProps> = args => <Button {...args} />;
