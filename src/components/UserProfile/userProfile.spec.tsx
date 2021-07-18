import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/renderWithThame';

import UserProfile, { UserProfileProps } from '.';

const props: UserProfileProps = {
  username: '@LuisCarlos',
  imageProfile:
    'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
};

describe('<UserProfile />', () => {
  it('should render UserProfile', () => {
    const { container } = renderWithTheme(<UserProfile {...props} />);

    const imgProfile = screen.getByRole('img', { name: /image profile/i });
    const username = screen.getByText(props.username);

    expect(imgProfile).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render UserProfile whith subtext', () => {
    renderWithTheme(<UserProfile subtext="subtext" {...props} />);

    const element = screen.getByText(/subtext/i);

    expect(element).toBeInTheDocument();
  });

  it('should render UserProfile whithout subtext', () => {
    renderWithTheme(<UserProfile {...props} />);

    const element = screen.queryByText(/subtext/i);

    expect(element).not.toBeInTheDocument();
  });
});
