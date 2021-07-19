import Container from 'components/Container';
import Heading from 'components/Heading';
import SocialCommentsList from 'components/SocialCommentsList';

import { SocialCommentCardProps } from 'components/SocialCommentCard';

export type SocialCommentsTemplateProps = {
  comments: SocialCommentCardProps[];
};

import * as S from './styles';

const SocialCommentsTemplate = ({ comments }: SocialCommentsTemplateProps) => (
  <S.Wrapper>
    <Container as="section" id="social-comments">
      <S.TitleContainer>
        <Heading size="huge">O que estão falando nas redes sociais</Heading>
      </S.TitleContainer>

      <SocialCommentsList comments={comments} />
    </Container>
  </S.Wrapper>
);

export default SocialCommentsTemplate;
