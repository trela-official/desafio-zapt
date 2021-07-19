import { screen } from '@testing-library/react'
import SocialComments from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<SocialComments />', () => {
  it('should render the card social with 2 texts, 1 link and 1 image ', () => {
    renderWithTheme(
      <SocialComments
        comment="Comentário de exemplo"
        img="avatar-woman.jpg"
        userName="@paolaC"
        urlProfile="/comentarios_nas_redes_sociais"
      />
    )

    const textUserName = screen.getByText('@paolaC')
    const textComment = screen.getByText('Comentário de exemplo')
    const link = screen.getByTitle('/comentarios_nas_redes_sociais')

    expect(textUserName).toBeInTheDocument()
    expect(textComment).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/comentarios_nas_redes_sociais')
  })
})
