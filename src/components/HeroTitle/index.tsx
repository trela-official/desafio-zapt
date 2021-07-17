import Typography from 'components/Typography'
import * as S from './styles'

export type HeroTitleProps = {
  title: string
  subtitle: string
}

const HeroTitle = ({ title, subtitle }: HeroTitleProps) => (
  <S.Wrapper>
    <Typography as="h3" size="xlarge">
      {title}
    </Typography>
    <Typography as="p" color="gray">
      {subtitle}
    </Typography>
  </S.Wrapper>
)

export default HeroTitle
