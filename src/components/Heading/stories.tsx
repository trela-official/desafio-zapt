import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      type: '',
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = ({ children }) => (
  <>
    <Heading size="huge">Huge - {children}</Heading>
    <Heading>Medium - {children}</Heading>
    <Heading size="small">Small - {children}</Heading>
  </>
);

Default.args = {
  children: 'Heading',
};
