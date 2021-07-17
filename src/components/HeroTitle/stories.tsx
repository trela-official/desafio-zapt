import { Story, Meta } from '@storybook/react'
import HeroTitle, { HeroTitleProps } from '.'

export default {
  title: 'HeroTitle',
  component: HeroTitle,
  argTypes: {
    title: { type: 'string ' },
    subtitle: { type: 'string ' }
  }
} as Meta

export const Default: Story<HeroTitleProps> = (args) => <HeroTitle {...args} />

Default.args = {
  title: 'Bem vindo Marcio,',
  subtitle:
    'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar. '
}
