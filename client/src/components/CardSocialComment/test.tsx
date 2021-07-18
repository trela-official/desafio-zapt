import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/test-util'

import CardSocialComment from '.'

const props = {
  user: {
    name: 'Alan Gabriel',
    avatar_url: '/img/profile.jpg',
    username: 'eualangabriel',
    social_provider: 'Twitter'
  },
  testimonial: {
    text:
      'Eu disse que seria a melhor pessoa para ajudar a criar uma ambiente foda, para construir coisas incríveis'
  }
}

describe('<CardSocialComment />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CardSocialComment {...props} />)

    expect(screen.getByText(props.testimonial.text)).toBeInTheDocument()

    expect(
      screen.getByTitle(`${props.user.name} via ${props.user.social_provider}`)
    ).toBeInTheDocument()

    expect(screen.getByText(`@${props.user.username}`)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `Foto de perfil de ${props.user.name}` })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
