import { render, screen } from 'utils/test-utils'

import Callout from '.'

const props = {
  title: 'Bem vindo Márcio,',
  subtitle:
    'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar. ',
  image: '/img/promo/callout.jpeg',
  imageText: 'Três mulheres abraçadas e sorrindo'
}

describe('<Callout />', () => {
  it('should render the callout with default values', () => {
    const { container } = render(<Callout {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content image'",
      {
        media: '(min-width: 768px)'
      }
    )

    expect(
      screen.getByRole('heading', { name: /bem vindo márcio,/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar./i
      })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/callout image/i)).toHaveAttribute(
      'src',
      '/img/promo/callout.jpeg'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render callout with image on the left', () => {
    const { container } = render(<Callout {...props} imageDirection="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'image content'",
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render with children', () => {
    render(
      <Callout {...props}>
        <span>A Children</span>
      </Callout>
    )

    expect(screen.getByText(/a children/i)).toBeInTheDocument()
  })

  it('should render with details', () => {
    render(<Callout {...props} details />)

    expect(screen.getByLabelText(/shape primary/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shape secondary/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shape circle/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shape semi circle/i)).toBeInTheDocument()
  })
})
