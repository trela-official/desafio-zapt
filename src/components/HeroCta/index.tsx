import HeroTitle from 'components/HeroTitle'
import Cta, { TOption } from 'components/Cta'

import * as S from './styles'

export type HeroCtaProps = {
  heroTitle: string
  heroSubtitle: string
  ctaTitle: string
  firstOption: TOption
  secondOption: TOption
}

const HeroCta = ({
  heroTitle,
  heroSubtitle,
  ctaTitle,
  firstOption,
  secondOption
}: HeroCtaProps) => (
  <>
    <S.TitleWrapper>
      <HeroTitle title={heroTitle} subtitle={heroSubtitle} />
    </S.TitleWrapper>
    <Cta
      hasTwoOptions
      title={ctaTitle}
      firstOption={firstOption}
      secondOption={secondOption}
    />
  </>
)

export default HeroCta
