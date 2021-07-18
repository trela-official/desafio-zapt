import React from 'react';
import { Settings } from 'react-slick';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import { UserCommentsCardProps } from '../../components/UserCommentsCard';
import { SlideWrapper, UserCommentsCard } from '../../components';

import * as Styled from './styles';

export type UserCommentsCardSliderProps = {
  cardsData: UserCommentsCardProps[];
};

const UserCommentsCardSlider = ({ cardsData }: UserCommentsCardSliderProps) => {
  const settings: Settings = {
    slidesToShow: 2,
    infinite: false,
    dots: true,
    nextArrow: (
      <Styled.SlickArrows>
        <ArrowRight aria-label="prev user card" />
      </Styled.SlickArrows>
    ),
    prevArrow: (
      <Styled.SlickArrows>
        <ArrowLeft aria-label="next user card" />
      </Styled.SlickArrows>
    ),
  };
  return (
    <Styled.Wrapper>
      <SlideWrapper settings={settings}>
        {Array.isArray(cardsData) &&
          cardsData.length > 0 &&
          cardsData.map(card => (
            <UserCommentsCard
              key={card.username}
              userSubtext={card.userSubtext}
              username={card.username}
              comment={card.comment}
              image={card.image}
              backgroundImage={card.backgroundImage}
            />
          ))}
      </SlideWrapper>
    </Styled.Wrapper>
  );
};

export default UserCommentsCardSlider;
