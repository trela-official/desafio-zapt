import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import WelcomeImage from '.';

export default {
  title: 'Welcome/WelcomeImage',
  component: WelcomeImage,
} as Meta;

export const WelcomeImageDefault: Story = () => <WelcomeImage />;
