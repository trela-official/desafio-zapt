import { render, screen } from 'utils/test-utils';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Button text</Button>);

    expect(screen.getByRole('button', { name: /button text/i })).toHaveStyle({
      height: '4.8rem',
      padding: '1.6rem 3.2rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    render(<Button size="small">Button text</Button>);

    expect(screen.getByRole('button', { name: /button text/i })).toHaveStyle({
      height: '3.8rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Button text</Button>);

    expect(screen.getByRole('button', { name: /button text/i })).toHaveStyle({
      height: '5.8rem',
      'font-size': '1.6rem',
      padding: '2.4rem 4.8rem',
    });
  });

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Button text</Button>);

    expect(screen.getByRole('button', { name: /button text/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render a disabled Button', () => {
    render(<Button disabled>Button text</Button>);

    expect(
      screen.getByRole('button', { name: /button text/i })
    ).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });
  });

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Button text
      </Button>
    );

    expect(screen.getByRole('link', { name: /button text/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
