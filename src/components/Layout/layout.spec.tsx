import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/renderWithTheme';

import Layout from '.';
import theme from '../../styles/theme';

describe('<Layout />', () => {
  it('should render with correctly background', () => {
    renderWithTheme(
      <Layout>
        <h1>test</h1>
      </Layout>
    );

    expect(screen.getByLabelText(/layout/i)).toHaveStyle({
      background: theme.colors.primary,
    });
  });

  it('should render with height and with 100% of screen', () => {
    renderWithTheme(
      <Layout>
        <h1>test</h1>
      </Layout>
    );

    expect(screen.getByLabelText(/layout/i)).toHaveStyle({
      height: '100vh',
      width: '100%',
    });
  });
});
