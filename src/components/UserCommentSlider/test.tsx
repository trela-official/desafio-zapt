import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import UserCommentSlider from '.'

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
  }
]

describe('<UserCommentSlider />', () => {
  it('should render the slider', () => {
    const { container } = render(<UserCommentSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('div.slick-active')).toHaveLength(2)

    expect(
      screen.getByRole('heading', { name: /patrícia godoy/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /marcinho ribeiro/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /luana melo/i, hidden: true })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the dots and arrows', () => {
    const { container } = render(<UserCommentSlider items={items} />)

    expect(container.querySelectorAll('.slick-arrow')).toHaveLength(2)
    expect(container.querySelectorAll('.slick-dots li')).toHaveLength(2)
  })
})
