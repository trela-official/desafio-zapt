import { Story, Meta } from '@storybook/react/types-6-0';
import QuarterCircumferenceImage from '.';

export default {
  title: 'QuarterCircumferenceImage',
  component: QuarterCircumferenceImage,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = () => <QuarterCircumferenceImage />;
