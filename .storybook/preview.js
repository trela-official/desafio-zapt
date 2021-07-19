import '../.jest/next-image.mock'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import { T } from 'theme'

const customViewports = {
  MotoG4: {
    name: 'Moto G4',
    styles: {
      width: '360px',
      height: '640px'
    }
  },
  iphone12: {
    name: 'iPhone 12',
    styles: {
      height: '844px',
      width: '390px'
    },
    type: 'mobile'
  },
  desktop1: {
    name: 'HD Desktop',
    styles: {
      width: '1024px',
      height: '768px'
    }
  },
  desktop2: {
    name: 'Full HD Desktop',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

export const parameters = {
  layout: 'centered',
  darkMode: {
    dark: {
      ...themes.dark,
      appContentBg: '#000927',
      barBg: '#051542',
      appBg: '#051542',
      brandTitle: 'Desafio Zapt',
      brandUrl: '/',
      colorSecondary: '#1EA7FD',
      appBorderColor: '#ffffff26',
      fontCode: '#fff',
      textColor: '#fff',
      textMutedColor: '#ddd',
      barTextColor: '#fff',
      barSelectedColor: '#1EA7FD',
      inputBg: '#051542',
      inputBorder: '#ffffff26',
      inputTextColor: '#fff'
    }
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    }
  },
  backgrounds: {
    values: [
      { name: 'Black', value: '#000' },
      { name: 'White', value: '#fff' },
      { name: 'Light', value: '#f5f5ff' },
      { name: 'Dark', value: '#000927' },
      { name: 'DarkSmooth', value: '#051542' }
    ]
  }
}

addDecorator(withNextRouter())

export const decorators = [
  Story => (
    <ThemeProvider theme={T}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
