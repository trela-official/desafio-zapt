import CardSocialComment from 'components/CardSocialComment'
import Heading from 'components/Heading'
import mock from './mock'
import * as S from './styles'

const SectionSocialComments = () => (
  <S.Wrapper>
    <Heading level={2} size="huge">
      O que estão falando nas redes sociais
    </Heading>
    <S.WrapperCards data-testid="wraper-social-cards">
      {mock.map((item, index) => (
        <CardSocialComment key={`${item.user.username}-${index}`} {...item} />
      ))}
    </S.WrapperCards>
  </S.Wrapper>
)

export default SectionSocialComments
