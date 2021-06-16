import React, { ButtonHTMLAttributes } from 'react';

import * as Styled from './styles';

export type ButtonProps = {
  label: string;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, onClick, ...rest }: ButtonProps) => {
  return (
    <Styled.Button {...rest} onClick={onClick}>
      {label}
    </Styled.Button>
  );
};

export default Button;
