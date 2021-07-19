import { screen } from '@testing-library/react'
import { UserType } from 'components/WelcomeBanner'
import renderWithTheme from 'utils/tests/test-util'
import HomeTemplate from '.'

jest.mock('components/WelcomeBanner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="WelcomeBanner"></div>
    }
  }
})

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <h1 data-testid="Heading"></h1>
    }
  }
})

jest.mock('components/SliderTestimonials', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="SliderTestimonials"></div>
    }
  }
})

const user: UserType = {
  name: 'Alan Gabriel',
  gender: 'male'
}

describe('<HomeTemplate />', () => {
  it('should render banner welcome and testimonial slider', () => {
    renderWithTheme(<HomeTemplate user={user} />)

    expect(screen.getByTestId('WelcomeBanner')).toBeInTheDocument()
    expect(screen.getAllByTestId('Heading')).toHaveLength(2)
    expect(screen.getByTestId('SliderTestimonials')).toBeInTheDocument()
  })
})
