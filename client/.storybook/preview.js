import GlobalStyles from '../src/styles/GlobalStyles'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
