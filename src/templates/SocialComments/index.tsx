import Container from 'components/Container';
import Heading from 'components/Heading';
import SocialCommentsList from 'components/SocialCommentsList';

import { socialComments } from 'components/SocialCommentsList/mock';

import * as S from './styles';

const SocialCommentsTemplate = () => (
  <Container as="section" id="social-comments">
    <S.TitleContainer>
      <Heading>O que estão falando nas redes sociais</Heading>
    </S.TitleContainer>

    <SocialCommentsList comments={socialComments} />

    <div style={{ marginBottom: '8rem' }} />
  </Container>
);

export default SocialCommentsTemplate;
