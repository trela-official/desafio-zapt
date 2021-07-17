import { render, screen } from 'utils/test-utils';

import Link from '.';

describe('<Link />', () => {
  it('should render an anchor', () => {
    render(<Link>My link</Link>);

    expect(screen.getByRole('link', { name: /my link/i })).toBeInTheDocument();
  });

  it('should render with primary color', () => {
    render(<Link>My link</Link>);

    expect(screen.getByRole('link', { name: /my link/i })).toHaveStyle({
      color: '#334bc8',
    });
  });

  it('should render an external link', () => {
    render(<Link isExternal>My link</Link>);

    expect(screen.getByRole('link', { name: /my link/i })).toHaveAttribute(
      'target',
      '_blank'
    );
    expect(screen.getByRole('link', { name: /my link/i })).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });
});
