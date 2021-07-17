import { render, screen } from 'utils/test-utils'

import Base from '.'

describe('<Base />', () => {
  it('should render base template with logo and footer', () => {
    const { container } = render(
      <Base>
        <h1>Base Template</h1>
      </Base>
    )

    expect(
      screen.getByRole('img', { name: /imagem do logo da zapt/i })
    ).toHaveAttribute('src', '/img/logo.svg')

    expect(
      screen.getByRole('heading', { name: /base template/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/desafio frontend zapt 🧑‍💻/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
