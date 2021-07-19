import { render, screen } from 'utils/test-utils'

import Welcome from '.'

describe('<Welcome />', () => {
  it('should render the Welcome component with the right username', () => {
    render(<Welcome username="Username" />)

    expect(screen.getByText('Bem vindo Username,')).toBeInTheDocument()
  })
})
