import React from 'react';
import * as Styled from './styles';

import { Typography } from '../index';

export type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => (
  <Styled.Wrapper>
    <Typography color="white" size="small">
      {label}
    </Typography>
  </Styled.Wrapper>
);

export default Button;
