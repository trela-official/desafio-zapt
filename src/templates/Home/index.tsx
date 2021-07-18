import Banner, { BannerProps } from '../../components/Banner'
import Testmonials, { TestmonialsProps } from '../../components/Testmonials'

import * as S from './styles'

export type HomeTemplateProps = {
  banner: BannerProps
  testmonials: TestmonialsProps
}

const Home = ({ banner, testmonials }: HomeTemplateProps) => (
  <S.Container>
    <S.BannerWrapper>
      <Banner {...banner} />
    </S.BannerWrapper>

    <S.TestmonialsWrapper>
      <Testmonials testmonials={testmonials} />
    </S.TestmonialsWrapper>
  </S.Container>
)

export default Home
