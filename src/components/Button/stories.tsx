import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    minimal: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Button',
};

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />;

asLink.args = {
  size: 'large',
  children: 'Button',
  as: 'a',
  href: '/link',
};
