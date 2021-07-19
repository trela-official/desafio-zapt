import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Zapt | Junte seus amigos para comprar com desconto</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <link
          rel="shortcut icon"
          href="/img/fav-512x512.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Economize até 50% nos melhores produtos comprando junto com seus amigos"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
