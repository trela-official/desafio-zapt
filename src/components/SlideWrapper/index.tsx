import React from 'react';
import Slider, { Settings } from 'react-slick';
import * as Styled from './styles';

type SettingsProps = Settings;

export type SliderProps = {
  children: React.ReactNode | React.ReactNodeArray;
  settings: SettingsProps;
};

const SlideWrapper = ({ children, settings }: SliderProps) => (
  <Styled.Wrapper>
    <Slider {...settings}>{children}</Slider>
  </Styled.Wrapper>
);

export default SlideWrapper;
