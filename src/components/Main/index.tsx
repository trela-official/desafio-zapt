import Welcome from 'components/Welcome'
import SocialComments from 'components/SocialComments'

import mockWelcome from 'components/Welcome/mock'
import mockSocialComments from 'components/SocialComments/mock'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Welcome {...mockWelcome} />
    <SocialComments
      title="O que estão falando nas redes sociais"
      comments={mockSocialComments}
    />
  </S.Wrapper>
)

export default Main
