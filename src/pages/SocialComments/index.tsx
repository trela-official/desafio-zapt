import CommentBox from "components/CommentBox";
import { Container } from "components/Container";

import { commentsColumn1, commentsColumn2, commentsColumn3 } from "./mock";

import * as S from "./styles";

const SocialComments = () => {
  return (
    <Container>
      <h1>O que estão falando nas redes sociais</h1>
      <S.CommentsWrapper>
        <S.CommentColumn>
          {commentsColumn1.map((comment) => (
            <CommentBox
              user={comment.user}
              userImg={comment.img}
              key={comment.user}
            >
              {comment.text}
            </CommentBox>
          ))}
        </S.CommentColumn>

        <S.CommentColumn>
          {commentsColumn2.map((comment) => (
            <CommentBox
              user={comment.user}
              userImg={comment.img}
              key={comment.user}
            >
              {comment.text}
            </CommentBox>
          ))}
        </S.CommentColumn>

        <S.CommentColumn>
          {commentsColumn3.map((comment) => (
            <CommentBox
              user={comment.user}
              userImg={comment.img}
              key={comment.user}
            >
              {comment.text}
            </CommentBox>
          ))}
        </S.CommentColumn>
      </S.CommentsWrapper>
    </Container>
  );
};

export default SocialComments;
