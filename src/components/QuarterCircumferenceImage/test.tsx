import { render, screen } from 'utils/test-utils';

import QuarterCircumferenceImage from '.';

describe('<QuarterCircumferenceImage />', () => {
  it('should render correctly', () => {
    const { container } = render(<QuarterCircumferenceImage />);

    expect(
      screen.getByRole('img', { name: /quarter circumference/i }).parentElement
    ).toHaveStyle({
      color: '#ffffff',
      width: '17.2rem',
      height: '10.5rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
