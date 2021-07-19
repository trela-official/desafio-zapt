import Welcome from 'components/Welcome'
import SocialComments from 'components/SocialComments'
import comments from 'components/SocialComments/mock'

import * as S from './styles'

export default function ShowComponents() {
  return (
    <S.Container>
      <Welcome username="Marcio" />
      <SocialComments userComments={comments} />
    </S.Container>
  )
}
