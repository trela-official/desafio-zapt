import { screen } from '@testing-library/react'
import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Banner />', () => {
  it('should render the banner', () => {
    const { container } = renderWithTheme(
      <Banner
        title="Bem-vindo Marcio,"
        description="Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar."
        question="O que você prefere?"
        img="/imgs/persons.jpg"
        btn={[
          { textBtn: 'Criar um grupo', route: '/boas-vindas' },
          { textBtn: 'Entrar em um grupo', route: '/boas-vindas' }
        ]}
      />
    )

    const banner = screen.getByAltText('Banner')

    expect(banner).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
