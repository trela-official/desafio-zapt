import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a small blue logo by default', () => {
    render(<Logo />)

    expect(screen.getByRole('img')).toHaveStyle({
      color: '#334BC8',
      width: '6.2rem'
    })
  })

  it('should render a red logo when passed by props', () => {
    render(<Logo color="red" />)

    expect(screen.getByRole('img')).toHaveStyle({
      color: '#FF5B58'
    })
  })

  it('should render a medium logo when passed by props', () => {
    render(<Logo size="medium" />)

    expect(screen.getByRole('img')).toHaveStyle({
      width: '10rem'
    })
  })
})
