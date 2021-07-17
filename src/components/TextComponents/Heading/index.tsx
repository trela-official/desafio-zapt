import React from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  text: string;
  size?: 'small' | 'large';
};

const Heading = ({ text, size = 'small' }: HeadingProps) => (
  <Styled.Heading size={size}>{text}</Styled.Heading>
);

export default Heading;
