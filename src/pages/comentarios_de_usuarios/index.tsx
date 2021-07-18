import * as C from 'components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import * as S from 'pages/comentarios_de_usuarios/styles'
import axios from 'axios'

export default function UsersComments({
  dataUsersComments
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <S.Container>
      <C.HeadPage title="O que as pessoas estão achando" />

      <C.TitleSection title="O que as pessoas estão achando" />

      <S.ContainerCarousel>
        <C.CarouselUsersComments dataUsersComments={dataUsersComments} />
      </S.ContainerCarousel>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/desafio-zapt/main/public/API/card_users_comments.json'
  )
  const dataUsersComments = data

  return {
    props: {
      dataUsersComments
    }
  }
}
