import React from 'react';
import { Meta, Story } from '@storybook/react';
import FieldText, { FiledTextProps } from '.';

export default {
  title: 'FieldText',
  component: FieldText,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const FieldTextDefault: Story<FiledTextProps> = args => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <FieldText {...args} />
  </div>
);
