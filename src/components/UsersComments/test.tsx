import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import UsersComments from '.'

import mock from './mock'

jest.mock('components/CommentCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock CommentCard" />
  }
}))

describe('<UsersComments />', () => {
  beforeEach(() => {
    render(<UsersComments title="UsersCommentsTitle" items={mock} />)
  })
  it('should render correctly', () => {
    expect(
      screen.getByRole('button', { name: /next comment/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /previous comment/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /next comment/i })).toHaveStyle({
      background: '#FFF',
      color: '#011FBB'
    })

    expect(
      screen.getByRole('button', { name: /previous comment/i })
    ).toHaveStyle({
      background: '#FFF',
      color: '#011FBB'
    })
  })
})
