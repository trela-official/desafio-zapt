import { render, screen } from 'utils/test-utils'

import Welcome from '.'

describe('<Welcome />', () => {
  it('should render the Welcome component', () => {
    render(<Welcome />)

    expect(screen.getByText('Bem vindo Marcio,')).toBeInTheDocument()
  })
})
