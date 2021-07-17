import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render the button with style and children', () => {
    render(<Button>Crie um grupo</Button>)

    expect(
      screen.getByRole('button', { name: /Crie um grupo/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Crie um grupo/i })).toHaveStyle({
      'font-size': '1.4rem',
      'font-weight': '400',
      color: '#FFFFFF',
      'background-color': '#334BC8',
      padding: '1.6rem 3.2rem 1.8rem'
    })
  })
})
