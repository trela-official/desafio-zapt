import Home, { HomeTemplateProps } from '../templates/Home'

import BannerMock from '../components/Banner/mock'
import TestmonialsMock from '../components/Testmonials/mock'

export default function index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banner: BannerMock,
      testmonials: TestmonialsMock
    }
  }
}
