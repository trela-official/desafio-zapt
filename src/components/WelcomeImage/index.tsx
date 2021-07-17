import CircleImage from 'components/CircleImage';
import QuarterCircumferenceImage from 'components/QuarterCircumferenceImage';

import * as S from './styles';

const WelcomeImage = () => (
  <S.Wrapper>
    <S.Image src="/img/group.png" alt="Grupo de amigos" />

    <S.CircleImageContainer>
      <CircleImage />
    </S.CircleImageContainer>

    <S.QuarterCircumferenceImageContainer>
      <QuarterCircumferenceImage />
    </S.QuarterCircumferenceImageContainer>
  </S.Wrapper>
);

export default WelcomeImage;
