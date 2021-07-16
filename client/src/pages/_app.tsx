import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React - Boilerplate</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
