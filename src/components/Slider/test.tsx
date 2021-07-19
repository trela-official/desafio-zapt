import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Slider from '.'

describe('<Slider />', () => {
  it('should render slider items', () => {
    render(
      <Slider settings={{ slidesToShow: 2 }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
  })
})
