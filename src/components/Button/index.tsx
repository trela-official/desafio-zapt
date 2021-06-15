import React, { ButtonHTMLAttributes } from 'react';

import * as Styled from './styles';

export type ButtonProps = {
  label: string;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, onClick }: ButtonProps) => {
  return <Styled.Button onClick={onClick}>{label}</Styled.Button>;
};

export default Button;
