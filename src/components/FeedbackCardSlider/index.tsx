import SlickSlider from "react-slick";
import FeedbackCard, { FeedbackCardProps } from "components/FeedbackCard";

import SlideArrow from "components/SlideArrow";

import * as S from "./styles";

type FeedbackCardSliderProps = {
  feedbacks: FeedbackCardProps[];
};

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: <SlideArrow side="left" />,
  nextArrow: <SlideArrow side="right" />,
};

const FeedbackCardSlider = ({ feedbacks }: FeedbackCardSliderProps) => {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>
        {feedbacks.map((feedback) => (
          <FeedbackCard
            userName={feedback.userName}
            userImg={feedback.userImg}
            userCity={feedback.userCity}
            userUf={feedback.userUf}
            bgImg={feedback.bgImg}
            key={`${feedback.userName}${feedback.userUf}`}
          >
            {feedback.children}
          </FeedbackCard>
        ))}
      </SlickSlider>
    </S.Wrapper>
  );
};

export default FeedbackCardSlider;
