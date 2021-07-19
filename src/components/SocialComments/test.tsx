import { render, screen } from 'utils/test-utils'

import SocialComments from '.'

import mock from './mock'

jest.mock('components/SocialReview', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock SocialReview" />
  }
}))

describe('<SocialComments />', () => {
  beforeEach(() => {
    render(<SocialComments title="SocialComments Title" comments={mock} />)
  })

  it('should render correctly with one column by default', () => {
    expect(screen.getAllByTestId(/mock socialreview/i)).toHaveLength(9)

    expect(
      screen.getAllByTestId(/mock socialreview/i)[0].parentElement
    ).toHaveStyle({
      'column-count': '1'
    })
  })

  it('should render 3 columns on large devices', () => {
    expect(
      screen.getAllByTestId(/mock socialreview/i)[0].parentElement
    ).toHaveStyleRule('column-count', '3', { media: '(min-width: 1170px)' })
  })
})
