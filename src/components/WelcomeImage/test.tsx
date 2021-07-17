import { render, screen } from 'utils/test-utils';

import WelcomeImage from '.';

describe('<WelcomeImage />', () => {
  it('should render correctly', () => {
    const { container } = render(<WelcomeImage />);

    expect(
      screen.getByRole('img', { name: /grupo de amigos/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /circle/i })).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /quarter circumference/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
