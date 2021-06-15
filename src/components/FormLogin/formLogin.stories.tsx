import React from 'react';
import { Meta } from '@storybook/react';
import FormLogin from '.';

export default {
  title: 'Form login',
  component: FormLogin,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const FormLoginDefault = () => <FormLogin />;
