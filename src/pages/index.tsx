import Home, { HomeTemplateProps } from '../templates/Home'

import BannerMock from '../components/Banner/mock'

export default function index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banner: BannerMock
    }
  }
}
