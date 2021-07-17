import { render, screen } from 'utils/test-utils';

import Heading from '.';

describe('<Heading />', () => {
  it('should render tje heading with a black color by default', () => {
    render(<Heading>Zpat</Heading>);

    expect(screen.getByRole('heading', { name: /zpat/i })).toHaveStyle({
      color: '#000',
    });
  });

  describe('size', () => {
    it('should render a heading with a medium size by default', () => {
      render(<Heading>Zpat</Heading>);

      expect(screen.getByRole('heading', { name: /zpat/i })).toHaveStyle({
        'font-size': '2.0rem',
      });
    });

    it('should render a heading with a small size', () => {
      render(<Heading size="small">Zpat</Heading>);

      expect(screen.getByRole('heading', { name: /zpat/i })).toHaveStyle({
        'font-size': '1.6rem',
      });
    });

    it('should render a heading with a huge size', () => {
      render(<Heading size="huge">Zpat</Heading>);

      expect(screen.getByRole('heading', { name: /zpat/i })).toHaveStyle({
        'font-size': '5.2rem',
      });
    });
  });
});
