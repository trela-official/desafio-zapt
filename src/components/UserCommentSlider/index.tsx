import Slider, { SliderSettings } from 'components/Slider'
import UserComment, { UserCommentProps } from 'components/UserComment'

import {
  ChevronForward as ArrowNext,
  ChevronBack as ArrowPrev
} from '@styled-icons/ionicons-outline'

import * as S from './styles'

export type UserCommentSliderProps = {
  items: UserCommentProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: (
    <S.Arrow>
      <ArrowNext aria-label="next comments" />
    </S.Arrow>
  ),
  prevArrow: (
    <S.Arrow>
      <ArrowPrev aria-label="previous comments" />
    </S.Arrow>
  ),
  responsive: [
    {
      breakpoint: 1130,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const UserCommentSlider = ({ items }: UserCommentSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <UserComment key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default UserCommentSlider
