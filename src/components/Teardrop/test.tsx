import { render, screen } from 'utils/test-utils';

import Teardrop from '.';

describe('<Teardrop />', () => {
  it('should render with primary color and normal size by default', () => {
    render(<Teardrop />);

    expect(screen.getByLabelText(/Teardrop/i).parentElement).toHaveStyle({
      color: '#334bc8',
      width: '10rem',
      height: '10rem',
    });
  });

  it('should render with secondary color when passed', () => {
    render(<Teardrop color="secondary" />);

    expect(screen.getByLabelText(/Teardrop/i).parentElement).toHaveStyle({
      color: '#ff5b58',
    });
  });

  it('should render with small size when passed', () => {
    render(<Teardrop size="small" />);

    expect(screen.getByLabelText(/Teardrop/i).parentElement).toHaveStyle({
      width: '6.2rem',
      height: '6.2rem',
    });
  });
});
