import { Story, Meta } from '@storybook/react'
import Cta, { CtaProps } from '.'

export default {
  title: 'Cta',
  component: Cta,
  argTypes: {
    title: { type: 'string' },
    firstOptionLabel: { type: 'string' },
    secondOptionLabel: { type: 'string' },
    hasTwoOptions: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta

export const Default: Story<CtaProps> = (args) => <Cta {...args} />

Default.args = {
  title: 'Descontos para você e seus amigos',
  firstOptionLabel: 'Aproveitar oportunidade'
}

export const withTwoOptions: Story<CtaProps> = (args) => <Cta {...args} />

withTwoOptions.args = {
  title: 'O que você prefere',
  firstOptionLabel: 'Criar um grupo',
  secondOptionLabel: 'Entrar em um grupo',
  hasTwoOptions: true
}
