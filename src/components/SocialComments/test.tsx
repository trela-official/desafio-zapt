import { render, screen } from 'utils/test-utils'
import comments from './mock'

import SocialComments from '.'

jest.mock('components/SocialCommentCard', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock SocialComment">{children}</div>
  }
}))

describe('<SocialComments />', () => {
  it('should render the heading', () => {
    render(<SocialComments comments={comments} />)

    expect(
      screen.getByText('O que estão falando nas redes sociais')
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock SocialComment')).toHaveLength(9)
  })
})
