import React from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  text: string;
  size?: 'small' | 'large';
  bold?: '300' | '400' | '500';
};

const Heading = ({ text, size = 'small', bold = '400' }: HeadingProps) => (
  <Styled.Heading bold={bold} size={size}>
    {text}
  </Styled.Heading>
);

export default Heading;
