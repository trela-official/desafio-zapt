import * as C from 'components'
import { GetStaticProps } from 'next'
import * as S from 'pages/comentarios_de_usuarios/styles'
import axios from 'axios'

export type dataUsersCommentsProps = {
  dataUsersComments: {
    userName: string
    city: string
    state: string
    urlUserBg: string
    urlAvatar: string
    urlProfile: string
    comment: string
  }[]
}

export default function UsersComments({
  dataUsersComments
}: dataUsersCommentsProps) {
  return (
    <S.Container>
      <C.HeadPage title="O que as pessoas estão achando" />

      <C.TitleSection title="O que as pessoas estão achando" />

      <S.ContainerCarousel>
        <C.Carousel>
          {dataUsersComments.map(
            (
              {
                userName,
                city,
                state,
                urlUserBg,
                urlAvatar,
                urlProfile,
                comment
              },
              i
            ) => (
              <C.CardUsersComments
                key={userName + i}
                userName={userName}
                city={city}
                state={state}
                urlUserBg={urlUserBg}
                urlAvatar={urlAvatar}
                urlProfile={urlProfile}
                heigthREM={40}
                comment={comment}
              />
            )
          )}
        </C.Carousel>
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
