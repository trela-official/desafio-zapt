import * as S from './styles'

const Main = ({
  description = 'Junte seus amigos para comprar com desconto'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem do logo da Zapt" />
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
