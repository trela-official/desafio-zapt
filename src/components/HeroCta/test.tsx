import { render, screen } from 'utils/test-utils'
import mockHeroCtaArgs from './mock'

import HeroCta from '.'

describe('<HeroCta />', () => {
  it('should render the HeroCta with right titles and subtitle', () => {
    render(<HeroCta {...mockHeroCtaArgs} />)

    expect(screen.getByText('Bem vindo Marcio,')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar.'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('O que você prefere?')).toBeInTheDocument()
  })

  it('should render the HeroCta with 2 buttons', () => {
    render(<HeroCta {...mockHeroCtaArgs} />)

    expect(screen.getAllByRole('button').length).toEqual(2)
  })

  it('should render the HeroCta buttons with right labels', () => {
    render(<HeroCta {...mockHeroCtaArgs} />)

    expect(
      screen.getByRole('button', { name: /Entrar em um grupo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Criar um grupo/i })
    ).toBeInTheDocument()
  })
})
