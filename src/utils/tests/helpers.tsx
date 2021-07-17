import { render, RenderResult } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { T } from 'theme'

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={T}>{children}</ThemeProvider>)
