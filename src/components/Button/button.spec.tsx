import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/renderWithThame';

import Button from '.';

describe('<Button />', () => {
  it('should render button with label', () => {
    renderWithTheme(<Button label="button label" />);

    expect(screen.getByText(/button label/i)).toBeInTheDocument();
    expect(screen.getByText(/button label/i)).toMatchSnapshot();
  });
});
