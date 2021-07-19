import Head from 'next/head'

type TitleProps = {
  title: string
}

const HeadPage = ({ title }: TitleProps) => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <title>{'Desafio - ' + title}</title>
  </Head>
)

export default HeadPage
