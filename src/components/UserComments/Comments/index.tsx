import React from "react";
import { IComments } from "../../../models/comments.model";
import * as S from "./styles";

export const Comments: React.FC<IComments> = ({
  children,
  userImage,
  userName,
}) => {
  return (
    <S.CommentsContainer>
      <S.CommentText>{children}</S.CommentText>
      <S.userProfile>
        <S.userImage src={userImage} />
        <S.userName>{userName}</S.userName>
      </S.userProfile>
    </S.CommentsContainer>
  );
};
