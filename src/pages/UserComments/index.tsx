import React from 'react';
import { Container, Heading, UserCommentsCardSlider } from 'components';

import * as Styled from './styles';

import sliderMock from 'mocks/userSliderMocks';

const UserComments = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <Styled.TextWrapper>
          <Heading size="large" text="O que as pessoas estão achando" />
        </Styled.TextWrapper>
        <Styled.SliderWrapper>
          <UserCommentsCardSlider cardsData={sliderMock} />
        </Styled.SliderWrapper>
      </Styled.Wrapper>
    </Container>
  );
};

export default UserComments;
