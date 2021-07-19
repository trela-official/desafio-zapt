import * as C from 'components'
import * as S from 'styles'
import Link from 'next/link'

export default function Home() {
  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Desafio Zapt" />

      <S.BtnGroup>
        <Link href="/boas-vindas" passHref>
          <S.LinkBtn>
            <C.Button
              fullWidth={true}
              color="blue"
              size="large"
              text="Página Welcome"
              className="btn1"
            />
          </S.LinkBtn>
        </Link>

        <Link href="/comentarios_de_usuarios" passHref>
          <S.LinkBtn>
            <C.Button
              fullWidth={true}
              color="blue"
              size="large"
              text="Página UsersComments"
              className="btn2"
            />
          </S.LinkBtn>
        </Link>

        <Link href="/comentarios_nas_redes_sociais" passHref>
          <S.LinkBtn>
            <C.Button
              fullWidth={true}
              color="blue"
              size="large"
              text="Página SocialComments"
              className="btn3"
            />
          </S.LinkBtn>
        </Link>
      </S.BtnGroup>
    </S.Container>
  )
}
