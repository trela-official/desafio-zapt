import Banner, { BannerProps } from '../../components/Banner'
import Testimonials, { TestimonialsProps } from '../../components/Testimonials'

import * as S from './styles'

export type HomeTemplateProps = {
  banner: BannerProps
  testimonials: TestimonialsProps
}

const Home = ({ banner, testimonials }: HomeTemplateProps) => (
  <S.Container>
    <S.BannerWrapper>
      <Banner {...banner} />
    </S.BannerWrapper>

    <S.TestimonialsWrapper>
      <Testimonials {...testmonials} />
    </S.TestimonialsWrapper>
  </S.Container>
)

export default Home
