import { render, screen } from 'utils/test-utils';

import UserInfo from '.';

import { userInfo } from './mock';

describe('<UserInfo />', () => {
  it('should match snapshot', () => {
    const { container } = render(<UserInfo {...userInfo} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with avatar image', () => {
    const avatarUrl = 'some-url';
    const name = 'user name';

    render(<UserInfo {...userInfo} avatarUrl={avatarUrl} name={name} />);

    expect(screen.getByRole('img', { name })).toHaveAttribute('src', avatarUrl);
  });

  it('should render with user name', () => {
    const name = 'user name';

    render(<UserInfo {...userInfo} name={name} />);

    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });

  it('should render with city and state', () => {
    const city = 'Belo Horizonte';
    const state = 'Minas Gerais';

    render(<UserInfo {...userInfo} city={city} state={state} />);

    expect(screen.getByText(`${city} • ${state}`)).toBeInTheDocument();
  });
});
