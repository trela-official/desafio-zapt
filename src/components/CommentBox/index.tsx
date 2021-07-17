import * as S from "./styles";

type CommentBoxProps = {
  user: string;
  userImg: string;
  children: React.ReactNode;
};

const CommentBox = ({ children, user, userImg }: CommentBoxProps) => {
  return (
    <S.Wrapper>
      <S.CommentWrapper>{children}</S.CommentWrapper>
      <S.UserInfo>
        <img src={userImg} />
        <span>{user}</span>
      </S.UserInfo>
    </S.Wrapper>
  );
};

export default CommentBox;
