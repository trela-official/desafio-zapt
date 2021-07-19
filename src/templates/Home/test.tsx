import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import { socialCommentsMock, userCommentsMock } from 'templates/Home/mock'

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

jest.mock('components/UserCommentSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock UserCommentSlider" />
  }
}))

const props = {
  socialHeading: 'O que estão falando nas redes sociais',
  userHeading: 'O que as pessoas estão achando'
}

describe('<Home />', () => {
  it('should render the home page', () => {
    render(<Home />)

    expect(
      screen.queryByRole('heading', { name: /o que você prefere?/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /criar um grupo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /entrar em um grupo/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: props.socialHeading })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: props.userHeading })
    ).not.toBeInTheDocument()

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.queryAllByTestId('Mock SocialComment')).toHaveLength(0)
    expect(
      screen.queryByTestId('Mock UserCommentSlider')
    ).not.toBeInTheDocument()
  })

  it('should render the social comments', () => {
    render(<Home socialComments={socialCommentsMock} />)

    expect(
      screen.getByRole('heading', { name: props.socialHeading })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock SocialComment')).toHaveLength(9)
  })

  it('should render the user comments', () => {
    render(<Home userComments={userCommentsMock} />)

    expect(
      screen.queryByRole('heading', { name: props.userHeading })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock UserCommentSlider')).toBeInTheDocument()
  })
})
