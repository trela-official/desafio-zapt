import { render, screen } from 'utils/test-utils'

import userComments from './mock'
import UserComment from '.'

describe('<UserComment />', () => {
  it('should render with right username', () => {
    render(<UserComment userComment={userComments[0]} />)

    expect(screen.getByText('@ferri-gui')).toBeInTheDocument()
  })

  it('should render user comment', () => {
    render(<UserComment userComment={userComments[0]} />)

    expect(
      screen.getByText(
        '”Não da para parar de comer.. esse final de semana pedi 20 pasteis da Ilma e acabaram TODOS em um só dia... O pessoal aqui de casa ficou viciado de um nível que terei que comprar toda semana... Assim não tem academia que secura rsrsrsrs Obrigado Zapt.”'
      )
    ).toBeInTheDocument()
  })

  it('should render user picture', () => {
    render(<UserComment userComment={userComments[0]} />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/img/users-icon/user-icon1.png'
    )
  })
})
