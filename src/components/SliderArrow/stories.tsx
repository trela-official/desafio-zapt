import { Story, Meta } from '@storybook/react/types-6-0';

import SliderArrow from '.';

export default {
  title: 'SliderArrow',
  component: SliderArrow,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      width: '100%',
      marginTop: '2.4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}
  >
    <SliderArrow direction="left" />
    <SliderArrow direction="right" />
  </div>
);
