import Banner, { BannerProps } from '../../components/Banner'

import * as S from './styles'

export type HomeTemplateProps = {
  banner: BannerProps
}

const Home = ({ banner }: HomeTemplateProps) => (
  <S.Container>
    <Banner {...banner} />
  </S.Container>
)

export default Home
