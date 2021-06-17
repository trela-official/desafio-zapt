import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from '../../utils/renderWithTheme';

import FieldText from '.';
import userEvent from '@testing-library/user-event';

describe('<FieldText />', () => {
  it('should render input text', () => {
    renderWithTheme(<FieldText />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render input label', () => {
    renderWithTheme(
      <form>
        <FieldText label="label" labelId="labelid" />
      </form>
    );

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
  });

  it('should render input size normal', () => {
    renderWithTheme(
      <form>
        <FieldText label="label" labelId="labelid" />
      </form>
    );

    expect(screen.getByLabelText(/label/i)).toHaveStyle({
      height: '3.5rem',
      width: '100%',
      maxWidth: '30rem',
    });
  });

  it('should render input size huge', () => {
    renderWithTheme(
      <form>
        <FieldText label="label" labelId="labelid" inputSize="huge" />
      </form>
    );

    expect(screen.getByLabelText(/label/i)).toHaveStyle({
      height: '4rem',
      width: '100%',
      maxWidth: '40rem',
    });
  });

  it('should render input whith correctly values ', async () => {
    const change = jest.fn();

    renderWithTheme(
      <form>
        <FieldText onChange={change} />
      </form>
    );

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'text to test');

    await waitFor(() => {
      expect(input).toHaveValue('text to test');
      expect(change).toHaveBeenCalledTimes('text to test'.length);
    });
  });
});
