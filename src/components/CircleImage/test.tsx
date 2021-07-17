import { render, screen } from 'utils/test-utils';

import CircleImage from '.';

describe('<CircleImage />', () => {
  it('should render correctly', () => {
    const { container } = render(<CircleImage />);

    expect(
      screen.getByRole('img', { name: /circle/i }).parentElement
    ).toHaveStyle({
      color: '#ffffff',
      width: '8rem',
      height: '8rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
