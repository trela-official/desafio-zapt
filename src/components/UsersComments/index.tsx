import CommentCard, { CommentCardProps } from 'components/CommentCard'
import Section from 'components/Section'
import Slider, { SliderSettings } from 'components/Slider'

import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-rounded/ArrowForwardIos'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-rounded/ArrowBackIos'

import * as S from './styles'

export type UsersCommentsProps = {
  title: string
  items: CommentCardProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: true,
  slidesToShow: 2,
  vertical: false,
  verticalSwiping: false,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ],
  nextArrow: (
    <S.ArrowRight aria-label="next comment">
      <ArrowRight />
    </S.ArrowRight>
  ),
  prevArrow: (
    <S.ArrowLeft aria-label="previous comment">
      <ArrowLeft />
    </S.ArrowLeft>
  )
}

const UsersComments = ({ title, items }: UsersCommentsProps) => (
  <Section title={title}>
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <CommentCard key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  </Section>
)

export default UsersComments
