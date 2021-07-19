import React from 'react';

import { Heading, SocialCard, Container } from 'components';
import comments from 'mocks/socialComments';

import * as Styled from './styles';

const SocialComments = () => (
  <Container>
    <Styled.Wrapper>
      <Styled.TextWrapper>
        <Heading size="large" text="O que estão falando nas redes sociais" />
      </Styled.TextWrapper>
      <Styled.CommentsWrapper>
        {Array.isArray(comments) &&
          comments.length > 0 &&
          comments.map(comment => (
            <SocialCard
              colorUserProfile="black"
              usernameSize="small"
              key={comment.username}
              username={comment.username}
              comment={comment.comment}
              imageProfile={comment.imageProfile}
            />
          ))}
      </Styled.CommentsWrapper>
    </Styled.Wrapper>
  </Container>
);

export default SocialComments;
