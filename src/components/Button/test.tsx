import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render primary button', () => {
    const { container } = render(<Button>Criar um grupo</Button>)

    expect(screen.getByRole('button', { name: /criar um grupo/i })).toHaveStyle(
      {
        background: '#011fbb'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with secondary color', () => {
    render(<Button color="secondary">Criar um grupo</Button>)

    expect(screen.getByRole('button', { name: /criar um grupo/i })).toHaveStyle(
      {
        background: '#ff5b58'
      }
    )
  })

  it('should render with gray color', () => {
    render(<Button color="gray">Criar um grupo</Button>)

    expect(screen.getByRole('button', { name: /criar um grupo/i })).toHaveStyle(
      {
        background: '#7a7a7a'
      }
    )
  })

  it('should render the button with full width', () => {
    render(<Button fullWidth>Criar um grupo</Button>)

    expect(screen.getByRole('button', { name: /criar um grupo/i })).toHaveStyle(
      {
        width: '100%'
      }
    )
  })

  it('should render the button as a link', () => {
    render(
      <Button as="a" href="/link">
        Criar um grupo
      </Button>
    )

    expect(
      screen.getByRole('link', { name: /criar um grupo/i })
    ).toHaveAttribute('href', '/link')
  })
})
