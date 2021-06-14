import React from 'react';
import { Meta, Story } from '@storybook/react';
import Layout, { LayoutProps } from '.';

export default {
  title: 'Base Layout',
  component: Layout,
} as Meta;

export const LayoutDefault: Story<LayoutProps> = () => (
  <Layout>
    <h1>Hello Word</h1>
  </Layout>
);
