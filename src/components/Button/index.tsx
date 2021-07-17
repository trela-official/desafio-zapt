import React from 'react';
import * as Styled from './styles';

import { Typography } from '../index';

export type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => (
  <Styled.Wrapper>
    <Typography content={label} color="white" size="small" />
  </Styled.Wrapper>
);

export default Button;
