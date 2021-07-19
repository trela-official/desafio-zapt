import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

import { Typography } from 'components';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, onClick }: ButtonProps) => (
  <Styled.Wrapper onClick={onClick}>
    <Typography color="white" size="small">
      {label}
    </Typography>
  </Styled.Wrapper>
);

export default Button;
