import { Story, Meta } from '@storybook/react'
import Cta, { CtaProps } from '.'

export default {
  title: 'Cta',
  component: Cta,
  argTypes: {
    title: { type: 'string' },
    firstOption: { type: 'object' },
    secondOption: { type: 'object' },
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
  firstOption: {
    label: 'Aproveitar oportunidade',
    action: () => console.log('first option action')
  }
}

export const withTwoOptions: Story<CtaProps> = (args) => <Cta {...args} />

withTwoOptions.args = {
  title: 'O que você prefere?',
  firstOption: {
    label: 'Criar um grupo',
    action: () => console.log('first option action')
  },
  secondOption: {
    label: 'Entrar em um grupo',
    action: () => console.log('second option action')
  },
  hasTwoOptions: true
}
