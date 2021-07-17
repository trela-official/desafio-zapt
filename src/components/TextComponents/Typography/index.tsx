import React from 'react';
import * as Styled from './styles';

export type TypographyProps = {
  content: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'darkgray' | 'white' | 'primary';
  bold?: '400' | '500';
};

const Typography = ({
  content,
  size = 'medium',
  color = 'black',
  bold = '400',
}: TypographyProps) => (
  <Styled.Text bold={bold} color={color} size={size}>
    {content}
  </Styled.Text>
);

export default Typography;
