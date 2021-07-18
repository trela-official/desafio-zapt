import Container from 'components/Container';
import Heading from 'components/Heading';
import UsersCommentsSlider from 'components/UsersCommentsSlider';

import { usersComments } from 'components/UsersCommentsSlider/mock';

import * as S from './styles';

const UsersCommentsTemplate = () => (
  <Container as="section" id="users-comments">
    <S.TitleContainer>
      <Heading>O que as pessoas estão achando</Heading>
    </S.TitleContainer>

    <UsersCommentsSlider comments={usersComments} />

    <div style={{ marginBottom: '2rem' }} />
  </Container>
);

export default UsersCommentsTemplate;
