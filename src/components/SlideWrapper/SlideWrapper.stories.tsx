import React from 'react';
import styled from 'styled-components';
import { Settings } from 'react-slick';

import { Story, Meta } from '@storybook/react/types-6-0';
import SlideWrapper from '.';

export default {
  title: 'SlideWrapper',
  component: SlideWrapper,
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 1px solid red;
  color: white;
  text-align: center;
`;

export const SlideWrapperDefault: Story = () => (
  <SlideWrapper settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </SlideWrapper>
);
