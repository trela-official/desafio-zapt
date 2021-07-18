import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../helpers/renderWithThame';

import Heading from '.';

describe('<Heading />', () => {
  it('should render heading correctly', () => {
    renderWithTheme(<Heading text="heading" />);

    const element = screen.getByRole('heading', { name: /heading/i });

    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });

  it('should render heading correctly bold value [300]', () => {
    renderWithTheme(<Heading bold="300" text="heading" />);

    const element = screen.getByRole('heading', { name: /heading/i });

    expect(element).toHaveStyleRule('font-weight', '300');
    expect(element).toMatchSnapshot();
  });

  it('should render heading correctly bold value [400]', () => {
    renderWithTheme(<Heading bold="400" text="heading" />);

    const element = screen.getByRole('heading', { name: /heading/i });

    expect(element).toHaveStyleRule('font-weight', '400');
    expect(element).toMatchSnapshot();
  });

  it('should render heading correctly bold value [500]', () => {
    renderWithTheme(<Heading bold="500" text="heading" />);

    const element = screen.getByRole('heading', { name: /heading/i });

    expect(element).toHaveStyleRule('font-weight', '500');
    expect(element).toMatchSnapshot();
  });

  it('should render heading correctly font size and line height value [small]', () => {
    renderWithTheme(<Heading bold="500" text="heading" size="small" />);

    const element = screen.getByRole('heading', { name: /heading/i });

    expect(element).toHaveStyle({
      'font-size': '2.8rem',
      'line-height': '3.3rem',
    });
    expect(element).toMatchSnapshot();
  });
  it('should render heading correctly font size and line height value [large]', () => {
    renderWithTheme(<Heading bold="500" text="heading" size="large" />);

    const element = screen.getByRole('heading', { name: /heading/i });

    expect(element).toHaveStyle({
      'font-size': '4rem',
      'line-height': '3.6rem',
    });
    expect(element).toMatchSnapshot();
  });
});
