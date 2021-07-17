import * as C from 'components'
import Link from 'next/link'
import * as S from 'pages/404/styles'

export default function Custom404() {
  return (
    <>
      <C.HeadPage title="Página de Erro" />
      <S.Container>
        <S.Paragraph>
          Página não encontrada! Por favor, verifique a url acessada.
          <br />
          <br />
          Caso prefira, clique no botão abaixo e retorne para a página inicial:
        </S.Paragraph>
        <Link href="/" passHref>
          <S.NavLink>
            <S.BtnHome>Página Inicial</S.BtnHome>
          </S.NavLink>
        </Link>
      </S.Container>
    </>
  )
}
