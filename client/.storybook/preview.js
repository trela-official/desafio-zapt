import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
