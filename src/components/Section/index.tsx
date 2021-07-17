import * as S from './styles'

export type SectionProps = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    {children}
  </S.Wrapper>
)

export default Section
