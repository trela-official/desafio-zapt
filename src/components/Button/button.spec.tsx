/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from '../../utils/renderWithTheme';

import Button from '.';
import userEvent from '@testing-library/user-event';

describe('<FieldText', () => {
  it('should render button with label', () => {
    renderWithTheme(<Button label="send" onClick={() => {}} />);

    expect(screen.getByText(/send/i)).toBeInTheDocument();
  });

  it('should render button with onclick', async () => {
    const onclick = jest.fn();

    renderWithTheme(<Button label="send" onClick={onclick} />);

    userEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(onclick).toBeCalledTimes(1);
    });
  });
});
