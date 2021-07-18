import HeroTitle from 'components/HeroTitle'
import Cta from 'components/Cta'

import * as S from './styles'

export type HeroCtaProps = {
  heroTitle: string
  heroSubtitle: string
  ctaTitle: string
  firstOptionLabel: string
  secondOptionLabel: string
}

const HeroCta = ({
  heroTitle,
  heroSubtitle,
  ctaTitle,
  firstOptionLabel,
  secondOptionLabel
}: HeroCtaProps) => (
  <>
    <S.TitleWrapper>
      <HeroTitle title={heroTitle} subtitle={heroSubtitle} />
    </S.TitleWrapper>
    <Cta
      hasTwoOptions
      title={ctaTitle}
      firstOptionLabel={firstOptionLabel}
      secondOptionLabel={secondOptionLabel}
    />
  </>
)

export default HeroCta
