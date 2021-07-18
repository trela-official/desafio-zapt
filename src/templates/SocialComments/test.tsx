import { render, screen } from 'utils/test-utils';

import SocialComments from '.';

describe('<SocialComments />', () => {
  beforeEach(() => {
    render(<SocialComments />);
  });

  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /O que estão falando nas redes sociais/i,
      })
    ).toBeInTheDocument();
  });

  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /O que estão falando nas redes sociais/i,
      })
    ).toBeInTheDocument();
  });
});
