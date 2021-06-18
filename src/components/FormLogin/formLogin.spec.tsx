/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/renderWithTheme';

import FormLogin from '.';

jest.mock('../FieldText', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="input"></div>;
    },
  };
});

jest.mock('../Button', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="button"></div>;
    },
  };
});

describe('<FormLogin />', () => {
  it('should render form with input and button', () => {
    renderWithTheme(<FormLogin />);

    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
