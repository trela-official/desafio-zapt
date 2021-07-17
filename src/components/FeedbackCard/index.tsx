import * as S from "./styles";

type FeedbackCardProps = {
  userName: string;
  userImg: string;
  userCity: string;
  userUf: string;
  bgImg: string;
  children: React.ReactNode;
};

const FeedbackCard = ({
  userName,
  userImg,
  userCity,
  userUf,
  bgImg,
  children,
}: FeedbackCardProps) => {
  return (
    <S.Wrapper>
      <S.BackgroundImg src={bgImg} />
      <S.Content>
        <p>{children}</p>

        <S.UserInfo>
          <img src={userImg} alt={`${userName} avatar`} />
          <S.UserData>
            <h2>{userName}</h2>
            <span>
              {userCity} &bull; {userUf}
            </span>
          </S.UserData>
        </S.UserInfo>
      </S.Content>
    </S.Wrapper>
  );
};

export default FeedbackCard;
