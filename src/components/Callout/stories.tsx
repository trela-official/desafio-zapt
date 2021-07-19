import { Story, Meta } from '@storybook/react'
import Callout, { CallOutProps } from '.'
import Button from 'components/Button'

export default {
  title: 'Callout',
  component: Callout,
  args: {
    title: 'Bem vindo Márcio,',
    subtitle:
      'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar. ',
    image: '/img/promo/callout.jpeg',
    imageDirection: 'right',
    imageText: 'Três mulheres abraçadas e sorrindo',
    details: false
  },
  argTypes: {
    imageText: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta

export const WithDetails: Story<CallOutProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '5rem auto' }}>
    <Callout {...args} />
  </div>
)

WithDetails.args = {
  details: true,
  children: <Button>Criar grupo</Button>
}

export const Default: Story<CallOutProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '5rem auto' }}>
    <Callout {...args} />
  </div>
)

export const LeftImage: Story<CallOutProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '5rem auto' }}>
    <Callout {...args} />
  </div>
)

LeftImage.args = {
  imageDirection: 'left'
}
