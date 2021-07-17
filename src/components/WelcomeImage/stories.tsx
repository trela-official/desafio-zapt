import { Story, Meta } from '@storybook/react/types-6-0';
import WelcomeImage from '.';

export default {
  title: 'WelcomeImage',
  component: WelcomeImage,
} as Meta;

export const Default: Story = () => <WelcomeImage />;
