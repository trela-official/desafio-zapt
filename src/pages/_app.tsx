import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Desafio Zapt Polyane</title>
        <link rel="shortcut icon" href="/assets/icon-384.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="Desafio para vaga de Fron-End by Poly Tuag"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
