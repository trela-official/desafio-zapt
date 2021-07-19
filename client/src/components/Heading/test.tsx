import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/test-util'

import Heading from '.'

describe('<Heading />', () => {
  it('should render heading as h1 by default', () => {
    const { container } = renderWithTheme(<Heading>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 1 })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 1 })
    ).toHaveStyle({
      color: '#000000',
      'font-size': '1.8rem',
      'font-weight': 500
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render heading as h2 when level 2 is passed', () => {
    renderWithTheme(<Heading level={2}>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 2 })
    ).toBeInTheDocument()
  })

  it('should render heading as h3 when level 3 is passed', () => {
    renderWithTheme(<Heading level={3}>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 3 })
    ).toBeInTheDocument()
  })

  it('should render heading as h4 when level 4 is passed', () => {
    renderWithTheme(<Heading level={4}>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 4 })
    ).toBeInTheDocument()
  })

  it('should render heading as h5 when level 5 is passed', () => {
    renderWithTheme(<Heading level={5}>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 5 })
    ).toBeInTheDocument()
  })

  it('should render heading as h5 when level 5 is passed', () => {
    renderWithTheme(<Heading level={5}>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 5 })
    ).toBeInTheDocument()
  })

  it('should render heading as h6 when level 6 is passed', () => {
    renderWithTheme(<Heading level={6}>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 6 })
    ).toBeInTheDocument()
  })

  it('should render heading with the color "white" when color white is passed', () => {
    renderWithTheme(<Heading color="white">Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 1 })
    ).toHaveStyle({
      color: 'white'
    })
  })

  it('should render heading with size "4.0rem" when size huge is passed', () => {
    renderWithTheme(<Heading size="huge">Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 1 })
    ).toHaveStyle({
      'font-size': '4.0rem'
    })
  })

  it('should render heading with fontWeight "300" when passed', () => {
    renderWithTheme(<Heading fontWeight={300}>Bem vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /bem vindo/i, level: 1 })
    ).toHaveStyle({
      'font-weight': 300
    })
  })
})
