import { render, screen } from 'utils/test-utils'

import UserComment from '.'

const props = {
  comment:
    'Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal',
  name: 'Marcinho Ribeiro',
  userImage: '/img/sample-person.jpeg',
  city: 'São José do Vale do Rio Preto',
  state: 'Rio de Janeiro',
  backgroundImage: '/img/promo/patricia-godoy.jpg'
}

describe('<UserComment />', () => {
  it('should render an user comment correctly', () => {
    const { container } = render(<UserComment {...props} />)

    expect(
      screen.getByText(
        /”não consigo mais viver sem os produtos do sítio, a diferença do que eu comprava antes e agora é abissal”/i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /user avatar/i
      })
    ).toHaveAttribute('src', '/img/sample-person.jpeg')

    expect(
      screen.getByText(/são josé do vale do rio preto • rio de janeiro/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/img/promo/patricia-godoy.jpg)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
