import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/test-util'

import TestimonyCard from '.'

const mock = {
  testimonial: {
    text:
      'Depois que entrei pra Zapt consegui ter clareza sobre o futuro da minha carreira',
    thumbnail: '/img/IMG_1756.jpg'
  },
  user: {
    name: 'Alan Gabriel',
    avatar_url: '/img/profile.jpg',
    address: {
      city: 'Arinos',
      state: 'Minas Gerais'
    }
  }
}

describe('<TestimonyCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <TestimonyCard testimonial={mock.testimonial} user={mock.user} />
    )

    expect(screen.getByText(mock.testimonial.text)).toBeInTheDocument()

    expect(screen.getByText(mock.user.name)).toBeInTheDocument()

    expect(
      screen.getByText(`${mock.user.address.city} • ${mock.user.address.state}`)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: mock.user.name })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: `Imagem de capa do depoimento de ${mock.user.name}`
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
