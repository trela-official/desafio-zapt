import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import { usersComments } from 'components/UsersCommentsSlider/mock';

import UsersCommentsTemplate from '.';

describe('<UsersCommentsTemplate />', () => {
  beforeEach(() => {
    render(<UsersCommentsTemplate />);
  });

  it('should render with the heading', () => {
    expect(
      screen.getByRole('heading', { name: /o que as pessoas estão achando/i })
    ).toBeInTheDocument();
  });

  it('should render with users comments slider', () => {
    expect(
      screen.getByRole('heading', { name: usersComments[0].user.name })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: usersComments[1].user.name })
    ).toBeInTheDocument();
  });
});
