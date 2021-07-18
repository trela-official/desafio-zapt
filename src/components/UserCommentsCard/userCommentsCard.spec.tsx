import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../helpers/renderWithThame';

import UserCommentsCard, { UserCommentsCardProps } from '.';

jest.mock('../../components/SocialCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="socialCard"></div>;
    },
  };
});

const props: UserCommentsCardProps = {
  backgroundImage: 'test img',
  comment: 'test comment',
  image: 'test img',
  username: 'test username',
};

describe('<UserCommentsCard />', () => {
  it('should render UserCommentsCard', () => {
    const { container } = renderWithTheme(<UserCommentsCard {...props} />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByTestId('socialCard')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render UserCommentsCard whith background image correctly', () => {
    const { container } = renderWithTheme(<UserCommentsCard {...props} />);

    expect(container.firstChild).toHaveStyle({
      background: `${props.backgroundImage} no-repeat`,
    });
  });

  it('should render UserCommentsCard whith background image correctly', () => {
    renderWithTheme(<UserCommentsCard {...props} />);

    const element = screen.getByLabelText(/overlay/i);

    expect(element).toBeInTheDocument();
  });
});
