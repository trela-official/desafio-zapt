import * as S from "./styles";

type CommentBoxProps = {
  user: string;
  userImg: string;
  text: React.ReactNode;
};

const CommentBox = ({ text, user, userImg }: CommentBoxProps) => {
  return (
    <S.Wrapper>
      <S.CommentWrapper>{text}</S.CommentWrapper>
      <S.UserInfo>
        <img src={userImg} />
        <span>{user}</span>
      </S.UserInfo>
    </S.Wrapper>
  );
};

export default CommentBox;
