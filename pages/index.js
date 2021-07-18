import Head from 'next/head';
import UsersComments from '../components/UsersComments';
import Welcome from '../components/Welcome';

export default function Home({ name }) {
  name = 'Marcio';

  return (
    <>
      <Head>
        <title>Bem vindo {name} - Zapt</title>
        <meta name="description" content="Desafio Zapt - Feito com NextJS ❤️" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Welcome name={name} />
      <UsersComments />
    </>
  );
}
