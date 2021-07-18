import React from 'react';
import * as Styled from './styles';

import bow from '../../assets/bow_image.svg';
import circleImg from '../../assets/circle_img.svg';

const WelcomeImage = () => (
  <Styled.Wrapper>
    <Styled.CircleWrapper>
      <Styled.Image src={circleImg} alt="circle" />
    </Styled.CircleWrapper>
    <Styled.BowWrapper>
      <Styled.Image src={bow} alt="bow" />
    </Styled.BowWrapper>
  </Styled.Wrapper>
);

export default WelcomeImage;
