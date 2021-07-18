import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/test-util'

import mock from 'components/TestimonyCard/mock'
import TestimonyCard from '.'

describe('<TestimonyCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<TestimonyCard {...mock} />)

    expect(screen.getByText(mock.testimonial.text)).toBeInTheDocument()

    expect(screen.getByText(mock.user.name)).toBeInTheDocument()

    expect(
      screen.getByText(`${mock.user.address.city} • ${mock.user.address.state}`)
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: mock.user.name })).toHaveAttribute(
      'src',
      mock.user.avatar_url
    )

    expect(
      screen.getByRole('img', {
        name: `Imagem de capa do depoimento de ${mock.user.name}`
      })
    ).toHaveAttribute('src', mock.testimonial.thumbnail)

    expect(container.firstChild).toMatchSnapshot()
  })
})
