import { render, screen } from 'utils/test-utils';

import Teardrop from '.';

describe('<Teardrop />', () => {
  it('should render with primary color and normal size by default', () => {
    const { container } = render(<Teardrop />);

    expect(screen.getByLabelText(/Teardrop/i).parentElement).toHaveStyle({
      color: '#334bc8',
      width: '6.8rem',
      height: '6.8rem',
    });
    expect(
      screen.getByLabelText(/Teardrop/i).parentElement
    ).toHaveStyleRule('width', '10rem', { media: '(min-width:768px)' });
    expect(
      screen.getByLabelText(/Teardrop/i).parentElement
    ).toHaveStyleRule('height', '10rem', { media: '(min-width:768px)' });

    expect(container.firstChild).toMatchSnapshot();
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
      width: '5.2rem',
      height: '5.2rem',
    });
    expect(
      screen.getByLabelText(/Teardrop/i).parentElement
    ).toHaveStyleRule('width', '6.2rem', { media: '(min-width:768px)' });
    expect(
      screen.getByLabelText(/Teardrop/i).parentElement
    ).toHaveStyleRule('height', '6.2rem', { media: '(min-width:768px)' });
  });
});
