import React from 'react';

import { renderWithTheme } from 'helpers/renderWithThame';
import userSliderMocks from 'mocks/userSliderMocks';

import UserCommentsCardSlider from '.';

describe('<UserCommentsCardSlider />', () => {
  it('should render UserCommentsCardSlider', () => {
    const { container } = renderWithTheme(
      <UserCommentsCardSlider cardsData={userSliderMocks} />
    );

    const element = container.querySelectorAll('.slick-active > div');

    expect(element).toHaveLength(2);
  });
});
