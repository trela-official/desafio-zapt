import React from 'react';
import { render, screen } from '@testing-library/react';

import Slider from '.';

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>slide 1</p>
        <p>slide 2</p>
      </Slider>
    );

    expect(screen.getByText(/1/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    );
    expect(screen.getByText(/2/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    );
  });
});
