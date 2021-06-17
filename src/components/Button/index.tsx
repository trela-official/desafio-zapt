import React, { ButtonHTMLAttributes } from 'react';

import * as Styled from './styles';

export type ButtonProps = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, ...rest }: ButtonProps) => {
  return <Styled.Button {...rest}>{label}</Styled.Button>;
};

export default Button;
