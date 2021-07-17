import { Story, Meta } from '@storybook/react'
import SubtitleWithLink from '.'

export default {
  title: 'SubtitleWithLink',
  component: SubtitleWithLink,
  argTypes: {
    text: {
      type: 'string'
    },
    link: {
      control: {
        type: 'object'
      }
    }
  }
} as Meta

export const Default: Story = () => (
  <SubtitleWithLink
    text="Qualquer dúvida que você tiver é só nos chamar no nosso número de"
    link={{ label: 'Whatsapp.', href: '/' }}
  />
)
