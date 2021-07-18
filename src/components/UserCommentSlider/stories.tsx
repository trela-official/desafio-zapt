import { Story, Meta } from '@storybook/react'
import UserCommentSlider, { UserCommentSliderProps } from '.'

const items = [
  {
    comment:
      'Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal',
    name: 'Patrícia Godoy',
    userImage: '/img/users/patricia_godoy.jpeg',
    city: 'São Paulo',
    state: 'São Paulo',
    backgroundImage: '/img/promo/patricia-godoy.jpg'
  },
  {
    comment:
      'Depois que você começa a usar produtos de qualidade é bem difícil voltar atrás...',
    name: 'Marcinho Ribeiro',
    userImage: '/img/users/marcinho_ribeiro.jpeg',
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    backgroundImage: '/img/promo/marcinho-ribeiro.jpeg'
  },
  {
    comment:
      'Amigas indicaram a Zapt para a compra de cervejas artesanais... preços muito abaixo de outras lojas virtuais!',
    name: 'Luana Melo',
    userImage: '/img/users/duque.jpg',
    city: 'São José do Vale do Rio Preto',
    state: 'Rio de Janeiro',
    backgroundImage: '/img/promo/luana-melo.jpeg'
  },
  {
    comment:
      'Pizza na faixa que me lembrou as que minha avó fazia, sabor imbatível!',
    name: 'Mauro Assis',
    userImage: '/img/users/shitz.jpg',
    city: 'Manaus',
    state: 'Amazônia',
    backgroundImage: '/img/promo/mauro-assis.jpeg'
  },
  {
    comment:
      'Eu e a torcida local nos juntamos para comprar camisas oficiais com um desconto incrível. Agora todo mundo vai torcer uniformizado!',
    name: 'Rafael Marques',
    userImage: '/img/sample-person.jpeg',
    city: 'São Luís',
    state: 'Maranhão',
    backgroundImage: '/img/promo/rafael-marques.jpeg'
  }
]

export default {
  title: 'UserCommentSlider',
  component: UserCommentSlider,
  args: { items }
} as Meta

export const Default: Story<UserCommentSliderProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: 'auto' }}>
    <UserCommentSlider {...args} />
  </div>
)
