import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React - Boilerplate/i })
    ).toBeInTheDocument()
  })

  it('Should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#003ecb',
      color: '#fff'
    })
  })
})
