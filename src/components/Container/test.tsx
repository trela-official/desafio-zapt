import { render, screen } from 'utils/test-utils';

import theme from 'styles/theme';

import Container from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <div data-testid="mock children">Desafio Zapt</div>
      </Container>
    );

    expect(screen.getByTestId('mock children').parentElement).toHaveStyleRule(
      'max-width',
      theme.grid.container
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
