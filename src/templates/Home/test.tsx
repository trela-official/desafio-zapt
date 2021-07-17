import { render, screen } from 'utils/test-utils'

import { socialCommentsMock } from 'templates/Home/mock'

import Home from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/SocialComment', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock SocialComment" />
  }
}))

const props = {
  socialHeading: 'O que estão falando nas redes sociais'
}

describe('<Home />', () => {
  it('should render the home page', () => {
    render(<Home />)

    expect(
      screen.queryByRole('heading', { name: props.socialHeading })
    ).not.toBeInTheDocument()

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.queryAllByTestId('Mock SocialComment')).toHaveLength(0)
  })

  it('should render the social comments', () => {
    render(<Home comments={socialCommentsMock} />)

    expect(
      screen.getByRole('heading', { name: props.socialHeading })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock SocialComment')).toHaveLength(9)
  })
})
