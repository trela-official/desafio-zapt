import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Zapt Challange</title>
        <link rel="shortcut icon" href="/img/logo.svg" />
        <link rel="apple-touch-icon" href="/img/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Zapt test application" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
