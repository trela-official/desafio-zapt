import { Story, Meta } from '@storybook/react/types-6-0';

import Teardrop, { TeardropProps } from '.';

export default {
  title: 'Teardrop',
  component: Teardrop,
} as Meta;

export const Default: Story<TeardropProps> = (args) => <Teardrop {...args} />;
