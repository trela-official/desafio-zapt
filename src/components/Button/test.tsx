import { ExclamationTriangle } from '@styled-icons/bootstrap'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('should render a small blue button with text', () => {
    const { container } = renderWithTheme(
      <Button text="Mais Informações" color="blue" size="small" />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      height: 'min-content',
      padding: '0.8rem 1.2rem',
      fontSize: '1.2rem',
      backgroundColor: '#334BC8'
    })

    expect(btn.closest('button')).not.toBeDisabled()
    expect(container).toMatchSnapshot()
  })

  it('should render a medium blue button with text and icon', () => {
    renderWithTheme(
      <Button
        size="medium"
        text="Mais Informações"
        color="blue"
        icon={<ExclamationTriangle data-testid="icon" />}
      />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
    expect(btn).toHaveStyle({
      height: 'min-content',
      padding: '1.2rem 2.4rem',
      fontSize: '1.4rem',
      backgroundColor: '#334BC8'
    })
  })

  it('should render a large gray button with icon only', () => {
    renderWithTheme(
      <Button
        icon={<ExclamationTriangle data-testid="icon" />}
        color="gray"
        size="large"
      />
    )

    const btn = screen.getByRole('button')
    const icon = screen.getByTestId('icon')

    expect(btn).toHaveStyle({
      height: 'min-content',
      padding: '1.6rem 3.2rem',
      fontSize: '1.4rem',
      backgroundColor: '#7A7A7A'
    })
    expect(icon).toBeInTheDocument()
  })

  it('should render a disabled Button', () => {
    renderWithTheme(
      <Button disabled text="Mais Informações" color="blue" size="large" />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })

    expect(btn).toHaveStyle({
      cursor: 'not-allowed',
      opacity: 0.5,
      backgroundColor: '#a1a4b0'
    })
    expect(btn.closest('button')).toBeDisabled()
  })

  it('should call a function once on click on the button', () => {
    const onClick = jest.fn()

    renderWithTheme(
      <Button
        onClick={onClick}
        text="Mais Informações"
        color="blue"
        size="large"
      />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })

    userEvent.click(btn)

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
