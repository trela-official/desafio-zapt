import { render, screen } from 'utils/test-utils'

import SocialComment from '.'

const comment = {
  image: '/img/sample-person.jpeg',
  comment:
    'Estava precisando achar algum lugar que vendia produtos que vêem direto da fazenda... a Zapt salvou.. e ainda paguei um preço muito mais barato que supermecado 🙌',
  name: '@rafael'
}

describe('<SocialComment />', () => {
  it('should render the heading', () => {
    const { container } = render(<SocialComment {...comment} />)

    expect(
      screen.getByText(
        /”estava precisando achar algum lugar que vendia produtos que vêem direto da fazenda\.\.\. a zapt salvou\.\. e ainda paguei um preço muito mais barato que supermecado 🙌”/i
      )
    ).toBeInTheDocument()
    expect(screen.getByAltText(/user avatar/i)).toBeInTheDocument()
    expect(screen.getByText(/@rafael/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
