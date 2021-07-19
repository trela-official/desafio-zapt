import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/renderWithThame';

import SocialCard, { SocialCardProps } from '.';

jest.mock('components/UserProfile', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="userProfile"></div>;
    },
  };
});

const props: SocialCardProps = {
  comment: 'test comment',
  username: 'test name',
  imageProfile: 'image ',
};

describe('<SocialCard />', () => {
  it('should render SocialCard', () => {
    const { container } = renderWithTheme(<SocialCard {...props} />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByTestId('userProfile')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render SocialCard with size default', () => {
    const { container } = renderWithTheme(<SocialCard {...props} />);

    expect(container.firstChild).toHaveStyleRule('max-width', '38rem');
  });

  it('should render SocialCard with full size if passed', () => {
    const { container } = renderWithTheme(
      <SocialCard maxSizeCard {...props} />
    );

    expect(container.firstChild).toHaveStyleRule('max-width', '46rem');
  });

  it('should render SocialCard with backgroung', () => {
    const { container } = renderWithTheme(<SocialCard {...props} />);

    expect(container.firstChild).toHaveStyle({
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3',
    });
  });

  it('should render SocialCard without backgroung', () => {
    const { container } = renderWithTheme(
      <SocialCard transparent {...props} />
    );

    expect(container.firstChild).toHaveStyle({
      background: 'transparent',
    });
  });
});
