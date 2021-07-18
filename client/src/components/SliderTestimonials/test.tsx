import renderWithTheme from 'utils/tests/test-util'

import SliderTestimonials from '.'
import itens from './mock'

describe('<SliderTestimonials />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<SliderTestimonials />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(
      itens.length
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
