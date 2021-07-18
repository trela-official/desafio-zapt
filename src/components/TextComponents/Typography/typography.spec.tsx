import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/renderWithThame';

import Typography from '.';

describe('<Typography />', () => {
  it('should render Typography correctly', () => {
    renderWithTheme(<Typography>text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith color black for default', () => {
    renderWithTheme(<Typography>text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('color', '#000000');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith colors correctly [darkgray]', () => {
    renderWithTheme(<Typography color="darkgray">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('color', '#7B7B7B');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith colors correctly [white]', () => {
    renderWithTheme(<Typography color="white">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('color', '#ffffff');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith colors correctly [primary]', () => {
    renderWithTheme(<Typography color="primary">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('color', '#011FBB');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith bold 400 for default', () => {
    renderWithTheme(<Typography>text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('font-weight', '400');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith bold 500 if passed', () => {
    renderWithTheme(<Typography bold="500">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('font-weight', '500');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith font size medium for default', () => {
    renderWithTheme(<Typography>text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('font-size', '1.6rem');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith font size xsmall is passed', () => {
    renderWithTheme(<Typography size="xsmall">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('font-size', '1.2rem');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith font size small is passed', () => {
    renderWithTheme(<Typography size="small">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('font-size', '1.4rem');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith font size xmedium is passed', () => {
    renderWithTheme(<Typography size="xmedium">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('font-size', '2rem');
    expect(element).toMatchSnapshot();
  });

  it('should render Typography whith font size large is passed', () => {
    renderWithTheme(<Typography size="large">text</Typography>);

    const element = screen.getByText(/text/i);

    expect(element).toHaveStyleRule('font-size', '2.8rem');
    expect(element).toMatchSnapshot();
  });
});
