import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'next-image.mock'

jest.isolateModules(() => {
  const preloadAll = require('jest-next-dynamic')
  beforeAll(async () => {
    await preloadAll()
  })
})

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    }
  }
