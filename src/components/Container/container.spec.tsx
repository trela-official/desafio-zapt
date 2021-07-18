import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../helpers/renderWithThame';

import Container from '.';

describe('<Container />', () => {
  it('should render Container', () => {
    renderWithTheme(
      <Container>
        <h1>container</h1>
      </Container>
    );

    const element = screen.getByRole('heading', { name: /container/i })
      .parentElement;

    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });

  it('should render Container whith height 100vh', () => {
    renderWithTheme(
      <Container>
        <h1>container</h1>
      </Container>
    );

    const element = screen.getByRole('heading', { name: /container/i })
      .parentElement;

    expect(element).toHaveStyleRule('height', '100vh');
  });

  it('should render Container whith display flex and align center elements', () => {
    renderWithTheme(
      <Container>
        <h1>container</h1>
      </Container>
    );

    const element = screen.getByRole('heading', { name: /container/i })
      .parentElement;

    expect(element).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    });
  });
});
