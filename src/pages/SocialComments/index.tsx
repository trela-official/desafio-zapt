import CommentBox from "components/CommentBox";

import { commentsColumn1, commentsColumn2, commentsColumn3 } from "./mock";

import * as S from "./styles";

const SocialComments = () => {
  return (
    <S.Wrapper>
      <h1>O que estão falando nas redes sociais</h1>
      <S.CommentsWrapper>
        <S.CommentColumn>
          {commentsColumn1.map((comment) => (
            <CommentBox user={comment.user} userImg={comment.img}>
              {comment.text}
            </CommentBox>
          ))}
        </S.CommentColumn>
        <S.CommentColumn>
          {commentsColumn2.map((comment) => (
            <CommentBox user={comment.user} userImg={comment.img}>
              {comment.text}
            </CommentBox>
          ))}
        </S.CommentColumn>

        <S.CommentColumn>
          {commentsColumn3.map((comment) => (
            <CommentBox user={comment.user} userImg={comment.img}>
              {comment.text}
            </CommentBox>
          ))}
        </S.CommentColumn>
      </S.CommentsWrapper>
    </S.Wrapper>
  );
};

export default SocialComments;
