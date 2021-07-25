import { Story, Meta } from '@storybook/react'
import TextContent, {TextContentProps} from '.'

export default {
  title: 'TextContent',
  component: TextContent,
  args: {
    children: 'dadsdsadadasdsd',
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => <TextContent {...args}/>
