import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zapt | Junte seus amigos para comprar com desconto</title>
        <link rel="icon" href="/img/pwa-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Economize até 50% nos melhores produtos comprando junto com seus grupos de WhatsApp. Convide amigos para comprar junto e ganhe cashback"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
