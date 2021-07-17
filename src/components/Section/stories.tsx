import { Story, Meta } from '@storybook/react'
import Section, { SectionProps } from '.'

export default {
  title: 'Section',
  component: Section,
  args: {
    title: 'This is a section',
    children: <p>Content</p>
  }
} as Meta

export const Default: Story<SectionProps> = (args) => <Section {...args} />
