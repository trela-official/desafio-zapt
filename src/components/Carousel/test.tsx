import { screen } from '@testing-library/react'
import Carousel from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<CarouselUsersComments />', () => {
  it('should render the carousel with children', () => {
    const { container } = renderWithTheme(
      <Carousel>
        <h1>Children exemplo</h1>
      </Carousel>
    )

    const children = screen.getByRole('heading', { name: 'Children exemplo' })

    expect(children).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
