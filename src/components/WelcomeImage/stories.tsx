import { Story, Meta } from '@storybook/react/types-6-0';
import WelcomeImage from '.';

export default {
  title: 'WelcomeImage',
  component: WelcomeImage,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = () => (
  <div style={{ width: '41.8rem', height: '31.3rem' }}>
    <WelcomeImage />
  </div>
);
