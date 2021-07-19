import { render, screen } from 'utils/test-utils'

import Welcome from '.'

import mock from './mock'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo" />
  }
}))

describe('<Welcome />', () => {
  beforeEach(() => {
    render(<Welcome {...mock} />)
  })

  it('should render correctly', () => {
    expect(
      screen.getByRole('heading', { name: /bem vindo marcio/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /o que você prefere\?/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /criar um grupo/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /entrar em um grupo/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()
  })

  it('should not render images on smaller devices', () => {
    const img = screen.queryByRole('img', {
      name: /a group of friends having fun/i
    })

    const logo = screen.getAllByTestId(/mock logo/i)[0]?.parentElement

    expect(img).toHaveStyleRule('display', 'none', {
      media: '(max-width: 1170px)'
    })

    expect(logo).toHaveStyleRule('display', 'none', {
      media: '(max-width: 1170px)'
    })
  })
})
