import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the component correctly', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /junte seus amigos para comprar com desconto/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
