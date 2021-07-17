import { render, screen } from 'utils/test-utils'

import HeroCta from '.'

describe('<HeroCta />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroCta />)

    expect(screen.getByRole('heading', { name: /HeroCta/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
