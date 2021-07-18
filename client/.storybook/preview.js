import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/theme'

import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />
  }
})

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
