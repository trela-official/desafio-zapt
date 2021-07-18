import Home, { HomeTemplateProps } from '../templates/Home'

import BannerMock from '../components/Banner/mock'
import TestimonialsMock from '../components/Testimonials/mock'

export default function index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banner: BannerMock,
      testimonials: {
        testimonials: TestimonialsMock
      }
    }
  }
}
