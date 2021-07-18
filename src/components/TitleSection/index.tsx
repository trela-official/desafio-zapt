import * as S from 'components/TitleSection/styles'

export type TitleProps = {
  title: string
}

const TitleSection = ({ title }: TitleProps) => (
  <S.TitleSection>{title}</S.TitleSection>
)

export default TitleSection
