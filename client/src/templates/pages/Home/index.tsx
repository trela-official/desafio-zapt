import Heading from 'components/Heading'
import SliderTestimonials from 'components/SliderTestimonials'
import WelcomeBanner, { UserType } from 'components/WelcomeBanner'

import * as S from './styles'

export type HomeTemplate = {
  user: UserType
}

const HomeTemplate = ({ user }: HomeTemplate) => {
  return (
    <S.Wrapper>
      <WelcomeBanner user={user} />
      <S.WrapperSlider>
        <Heading level={2} size="huge">
          O que as pessoas estão achando
        </Heading>
        <SliderTestimonials />
      </S.WrapperSlider>
    </S.Wrapper>
  )
}

export default HomeTemplate
