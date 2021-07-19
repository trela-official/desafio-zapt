import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/renderWithThame';

import WelcomeImage from '.';

import image from 'assets/image.svg';

describe('<WelcomeImage />', () => {
  it('should render WelcomeImage', () => {
    const { container } = renderWithTheme(<WelcomeImage />);

    const bow = screen.getByRole('img', { name: 'bow' });
    const circle = screen.getByRole('img', { name: 'circle' });

    expect(bow).toBeInTheDocument();
    expect(circle).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule(
      'background',
      `#ffff url(${image}) no-repeat`
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
