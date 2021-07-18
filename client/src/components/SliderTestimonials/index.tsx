import Slider, { SliderSettings } from 'components/Slider'
import TestimonyCard from 'components/TestimonyCard'
import Arrow from './Arrow'
import itens from './mock'

import * as S from './styles'

const settings: SliderSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <Arrow direction="right" />,
  prevArrow: <Arrow direction="left" />,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

const SliderTestimonials = () => (
  <S.Wrapper>
    <Slider settings={settings}>
      {itens.map((item) => (
        <TestimonyCard key={item.testimonial.text} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default SliderTestimonials
