import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'next-image.mock'

jest.isolateModules(() => {
  const preloadAll = require('jest-next-dynamic')
  beforeAll(async () => {
    await preloadAll()
  })
})
