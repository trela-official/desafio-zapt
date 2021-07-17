import { Story, Meta } from '@storybook/react'
import SocialReview, { SocialReviewProps } from '.'

export default {
  title: 'SocialReview',
  component: SocialReview,
  args: {
    author: {
      photo: '/img/mocks/fake-avatar.jpg',
      username: '@ferri-gui'
    },
    feedback:
      'Não da para parar de comer.. esse final de semana pedi 20 pasteis da Ilma e acabaram TODOS em um só dia... O pessoal aqui de casa ficou viciado de um nível que terei que comprar toda semana... Assim não tem academia que secura rsrsrsrs Obrigado Zapt.'
  }
} as Meta

export const Default: Story<SocialReviewProps> = (args) => (
  <div style={{ width: '38.4rem', margin: 'auto' }}>
    <SocialReview {...args} />
  </div>
)
