import '@testing-library/jest-dom'
import 'jest-styled-components'

jest.isolateModules(() => {
  const preloadAll = require('jest-next-dynamic')
  beforeAll(async () => {
    await preloadAll()
  })
})
