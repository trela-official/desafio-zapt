import { render, screen } from 'utils/test-utils'

import comment from './mock'
import SocialCommentCard from '.'

describe('<SocialCommentCard />', () => {
  it('should render with right username', () => {
    render(<SocialCommentCard comment={comment} />)

    expect(screen.getByText('@ferri-gui')).toBeInTheDocument()
  })

  it('should render user comment', () => {
    render(<SocialCommentCard comment={comment} />)

    expect(
      screen.getByText(
        '”Não da para parar de comer.. esse final de semana pedi 20 pasteis da Ilma e acabaram TODOS em um só dia... O pessoal aqui de casa ficou viciado de um nível que terei que comprar toda semana... Assim não tem academia que secura rsrsrsrs Obrigado Zapt.”'
      )
    ).toBeInTheDocument()
  })

  it('should render user picture', () => {
    render(<SocialCommentCard comment={comment} />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/img/users-icon/user-icon1.png'
    )
  })
})
