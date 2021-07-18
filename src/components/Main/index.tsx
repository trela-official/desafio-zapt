import SocialComments from 'components/SocialComments'
import mock from 'components/SocialComments/mock'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <SocialComments
      title="O que estão falando nas redes sociais"
      comments={mock}
    />
  </S.Wrapper>
)

export default Main
