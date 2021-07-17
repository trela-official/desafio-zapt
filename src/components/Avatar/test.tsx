import { render, screen } from 'utils/test-utils'

import Avatar from '.'

describe('<Avatar />', () => {
  it('should render the avatar default values', () => {
    const { container } = render(<Avatar />)

    expect(screen.getAllByAltText(/user avatar/i)).toHaveLength(1)

    expect(screen.getByAltText(/user avatar/i)).toHaveAttribute(
      'src',
      '/img/user.jpg'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the user avatar', () => {
    render(<Avatar image="/img/sample-person.jpeg" />)

    expect(screen.getByAltText(/user avatar/i)).toHaveAttribute(
      'src',
      '/img/sample-person.jpeg'
    )
  })

  it('should render white border', () => {
    render(<Avatar borderColor="white" />)

    expect(screen.getByAltText(/user avatar/i)).toHaveStyle({
      color: '#ffffff'
    })
  })

  it('should render secondary color border', () => {
    render(<Avatar borderColor="secondary" />)

    expect(screen.getByAltText(/user avatar/i)).toHaveStyle({
      color: '#ff5b58'
    })
  })

  it('should render thick border', () => {
    render(<Avatar borderWeight="thick" />)

    expect(screen.getByAltText(/user avatar/i)).toHaveStyle({
      boxShadow: '0 0 0 2px'
    })
  })
})
