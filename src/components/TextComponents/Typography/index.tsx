import React from 'react';
import * as Styled from './styles';

export type TypographyProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'xmedium' | 'large';
  color?: 'black' | 'darkgray' | 'white' | 'primary';
  bold?: '400' | '500';
};

const Typography = ({
  children,
  size = 'medium',
  color = 'black',
  bold = '400',
}: TypographyProps) => (
  <Styled.Text bold={bold} color={color} size={size}>
    {children}
  </Styled.Text>
);

export default Typography;
