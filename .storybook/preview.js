import { RouterContext } from 'next/dist/next-server/lib/router-context'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from 'styles'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
