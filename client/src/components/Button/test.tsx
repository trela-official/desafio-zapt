import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/tests/test-util'

import Button from '.'

describe('<Button />', () => {
  it('should render the button correctly', () => {
    const { container } = renderWithTheme(<Button>Entrar em grupo</Button>)

    expect(
      screen.getByRole('button', { name: /Entrar em grupo/i })
    ).toHaveStyle({
      padding: '1.6rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Entrar em grupo
      </Button>
    )

    expect(
      screen.getByRole('link', { name: /Entrar em grupo/i })
    ).toHaveAttribute('href', '/link')
  })
})
