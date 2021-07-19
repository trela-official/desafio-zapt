import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Zapt</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Desafio da Zapt" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
