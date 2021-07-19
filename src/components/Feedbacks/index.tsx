import React from "react";
import Carousel from "react-elastic-carousel";
import { Item } from "./Item";
import * as S from "./styles";

import feedbackprofile1 from "../../images/feedbackprofile1.jpg";
import feedbackbg1 from "../../images/feedbackbg1.jpg";
import feedbackprofile2 from "../../images/feedbackprofile2.jpg";
import feedbackbg2 from "../../images/feedbackbg2.jpg";

export const Feedbacks = () => {
  return (
    <S.FeedbacksContainer>
      <S.FeedbacksTitle>O que as pessoas estão achando</S.FeedbacksTitle>
      <S.CarouselContainer>
        <Carousel isRTL={false} itemsToScroll={2} itemsToShow={2}>
          <Item
            userName="Patrícia"
            userImage={feedbackprofile1}
            userLocation="Anchieta, Espírito Santo"
            backgroundImg={feedbackbg1}
          >
            Este componente ficou lindo!
          </Item>
          <Item
            userName="Pedro"
            userImage={feedbackprofile2}
            userLocation="United States of America"
            backgroundImg={feedbackbg2}
          >
            Eu amo a Zapt!
          </Item>
          <Item
            userName="Patrícia"
            userImage={feedbackprofile1}
            userLocation="Europe"
            backgroundImg={feedbackbg1}
          >
            Testando!
          </Item>
        </Carousel>
      </S.CarouselContainer>
    </S.FeedbacksContainer>
  );
};
