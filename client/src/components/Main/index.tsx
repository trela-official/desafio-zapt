import * as S from './styles'

const Main = ({
  title = 'React - Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-llustration.svg"
      alt="Representação de blocos de interfaces de usuários e codigo"
    />
  </S.Wrapper>
)

export default Main
