import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/test-util'

import WelcomeBanner from '.'

describe('<WelcomeBanner />', () => {
  it('should render the username on the banner', () => {
    const { container } = renderWithTheme(
      <WelcomeBanner
        user={{
          name: 'Alan Gabriel',
          gender: 'male'
        }}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Alan Gabriel/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the welcome phrase with the feminine gender when the user's gender is "female"`, () => {
    renderWithTheme(
      <WelcomeBanner
        user={{
          name: 'Alana Gabriela',
          gender: 'female'
        }}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Bem vinda Alana Gabriela/i })
    ).toBeInTheDocument()
  })

  it(`should render the welcome phrase with the male gender when the user gender is "male"`, () => {
    renderWithTheme(
      <WelcomeBanner
        user={{
          name: 'Alan Gabriel',
          gender: 'male'
        }}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Bem vindo Alan Gabriel/i })
    ).toBeInTheDocument()
  })
})
