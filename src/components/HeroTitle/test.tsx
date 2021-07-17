import { render, screen } from 'utils/test-utils'

import HeroTitle from '.'

describe('<HeroTitle />', () => {
  it('should render the HeroTitle with title and subtitle', () => {
    render(<HeroTitle title="Title" subtitle="Subtitle" />)

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
  })
})
