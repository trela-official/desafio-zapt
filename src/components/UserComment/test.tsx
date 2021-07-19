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

  it('should render user location', () => {
    render(<UserComment userComment={userComments[1]} />)

    expect(screen.getByText('São Paulo • São Paulo')).toBeInTheDocument()
  })

  it('should render without padding', () => {
    const { container } = render(
      <UserComment userComment={userComments[1]} removePadding />
    )

    expect(container.firstChild).toHaveStyle({
      padding: '0px'
    })
  })

  it('should render without background-color', () => {
    const { container } = render(
      <UserComment userComment={userComments[1]} removeBackgroundColor />
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': 'transparent'
    })
  })

  it('should render with white label', () => {
    render(
      <UserComment
        userComment={userComments[1]}
        contentColor="white"
        userDataColor="white"
      />
    )

    expect(
      screen.getByText(
        '”Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal”'
      )
    ).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    })

    expect(screen.getByText('Patricia Godoy')).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    })

    expect(screen.getByText('São Paulo • São Paulo')).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    })
  })
})
