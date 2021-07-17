import { Story, Meta } from '@storybook/react/types-6-0';
import CircleImage from '.';

export default {
  title: 'CircleImage',
  component: CircleImage,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = () => <CircleImage />;
