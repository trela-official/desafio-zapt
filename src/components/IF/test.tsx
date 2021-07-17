import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { ELSE, IF } from '.'

describe('<IF />', () => {
  it('should render a element conditional with children if condition is true', () => {
    renderWithTheme(
      <IF condition={7 > 5}>
        <h1>Verdadeiro com children!</h1>
      </IF>
    )

    const isChildren = screen.getByRole('heading', {
      name: 'Verdadeiro com children!'
    })
    expect(isChildren).toBeInTheDocument()
  })

  it('should not render a element conditional with children if condition is false', () => {
    renderWithTheme(
      <IF condition={5 > 7}>
        <h1>Falso com children!</h1>
      </IF>
    )

    const isChildren = screen.queryByRole('heading', {
      name: 'Falso com children!'
    })
    expect(isChildren).not.toBeInTheDocument()
  })
})

describe('<ELSE />', () => {
  it('should render a element conditional with children if condition is true', () => {
    renderWithTheme(
      <ELSE condition={7 > 5}>
        <h1>Verdadeiro com children!</h1>
      </ELSE>
    )

    const isChildren = screen.getByRole('heading', {
      name: 'Verdadeiro com children!'
    })
    expect(isChildren).toBeInTheDocument()
  })

  it('should not render a element conditional with children if condition is false', () => {
    renderWithTheme(
      <ELSE condition={5 > 7}>
        <h1>Falso com children!</h1>
      </ELSE>
    )

    const isChildren = screen.queryByRole('heading', {
      name: 'Falso com children!'
    })
    expect(isChildren).not.toBeInTheDocument()
  })
})
