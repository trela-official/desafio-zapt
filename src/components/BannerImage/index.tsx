import arcCircle from "assets/images/arc_circle.svg";
import bgImg from "assets/images/welcome.png";
import * as S from "./styles";

const BannerImage = () => {
  return (
    <S.Wrapper>
      <S.BackgroundImg src={bgImg} />
      <S.Circle />
      <S.ArcCircle src={arcCircle} />
    </S.Wrapper>
  );
};

export default BannerImage;
