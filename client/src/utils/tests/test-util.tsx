import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export default renderWithTheme
