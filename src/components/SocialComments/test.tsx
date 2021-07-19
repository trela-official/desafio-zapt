import { render, screen } from 'utils/test-utils'

import SocialComments from '.'

describe('<SocialComments />', () => {
  it('should render the heading', () => {
    const { container } = render(<SocialComments />)

    expect(screen.getByRole('heading', { name: /SocialComments/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
