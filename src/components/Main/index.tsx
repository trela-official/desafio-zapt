import Welcome from 'components/Welcome'
import UsersComments from 'components/UsersComments'
import SocialComments from 'components/SocialComments'

import mockWelcome from 'components/Welcome/mock'
import mockUsersComments from 'components/UsersComments/mock'
import mockSocialComments from 'components/SocialComments/mock'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Welcome {...mockWelcome} />
    <UsersComments
      title="O que as pessoas estão achando"
      items={mockUsersComments}
    />
    <SocialComments
      title="O que estão falando nas redes sociais"
      comments={mockSocialComments}
    />
  </S.Wrapper>
)

export default Main
