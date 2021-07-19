import Container from 'components/Container';
import Heading from 'components/Heading';
import UsersCommentsSlider from 'components/UsersCommentsSlider';

import { UserCommentCardProps } from 'components/UserCommentCard';

export type UsersCommentsTemplateProps = {
  comments: UserCommentCardProps[];
};

import * as S from './styles';

const UsersCommentsTemplate = ({ comments }: UsersCommentsTemplateProps) => (
  <Container as="section" id="users-comments">
    <S.TitleContainer>
      <Heading size="huge">O que as pessoas estão achando</Heading>
    </S.TitleContainer>

    <UsersCommentsSlider comments={comments} />
  </Container>
);

export default UsersCommentsTemplate;
