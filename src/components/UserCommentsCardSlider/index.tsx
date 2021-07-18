import React from 'react';
import { Settings } from 'react-slick';

import { SlideWrapper, UserCommentsCard } from '../../components';

import * as Styled from './styles';

const UserCommentsCardSlider = () => {
  const settings: Settings = {
    slidesToShow: 2,
    infinite: false,
    dots: true,
  };
  return (
    <Styled.Wrapper>
      <SlideWrapper settings={settings}>
        <UserCommentsCard
          userSubtext="subtext"
          username="Luis Carlos"
          comment="comentario de teste"
          image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          backgroundImage="https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg"
        />

        <UserCommentsCard
          userSubtext="subtext"
          username="Luis Carlos"
          comment="comentario de teste"
          image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          backgroundImage="https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg"
        />

        <UserCommentsCard
          userSubtext="subtext"
          username="Luis Carlos"
          comment="comentario de teste"
          image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          backgroundImage="https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg"
        />
      </SlideWrapper>
    </Styled.Wrapper>
  );
};

export default UserCommentsCardSlider;
