import { render, screen } from 'utils/test-utils'
import comments from './mock'

import SocialComments from '.'

jest.mock('components/UserComment', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock UserComment">{children}</div>
  }
}))

describe('<SocialComments />', () => {
  it('should render the heading', () => {
    render(<SocialComments userComments={comments} />)

    expect(
      screen.getByText('O que estão falando nas redes sociais')
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock UserComment')).toHaveLength(9)
  })
})
