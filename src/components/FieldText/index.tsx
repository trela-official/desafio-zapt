import React, { InputHTMLAttributes } from 'react';

import * as Styled from './styles';

export type FiledTextProps = {
  label?: string;
  labelId?: string;
  inputSize?: 'normal' | 'huge';
} & InputHTMLAttributes<HTMLInputElement>;

const FieldText = ({
  label,
  labelId = '',
  inputSize = 'normal',
  ...rest
}: FiledTextProps) => {
  return (
    <Styled.Wrapper>
      {!!label && <Styled.Label htmlFor={labelId}>{label}</Styled.Label>}
      <Styled.Input {...rest} inputSize={inputSize} id={labelId} />
    </Styled.Wrapper>
  );
};

export default FieldText;
