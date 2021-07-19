import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <>
    <S.SectionHeader>
      <S.Logo src="/img/logo.svg" alt="Imagem do logo da Zapt" />
    </S.SectionHeader>
    <S.Wrapper>
      <S.Content>{children}</S.Content>
      <S.SectionFooter>
        <S.Footer>Desafio Frontend Zapt 🧑‍💻</S.Footer>
      </S.SectionFooter>
    </S.Wrapper>
  </>
)

export default Base
