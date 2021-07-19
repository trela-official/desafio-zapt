import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'helpers/renderWithThame';

import Button from '.';

describe('<Button />', () => {
  it('should render button with label', () => {
    renderWithTheme(<Button label="button label" />);

    expect(screen.getByText(/button label/i)).toBeInTheDocument();
    expect(screen.getByText(/button label/i)).toMatchSnapshot();
  });

  it('should render button with on click if passed', async () => {
    const onclick = jest.fn();
    renderWithTheme(<Button label="button label" onClick={onclick} />);

    userEvent.click(screen.getByText(/button label/i));
    await waitFor(() => {
      expect(onclick).toHaveBeenCalledTimes(1);
    });
  });
});
