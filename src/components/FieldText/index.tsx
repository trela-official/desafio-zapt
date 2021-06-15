import React, { InputHTMLAttributes } from 'react';

import * as Styled from './styles';

export type FiledTextProps = {
  label?: string;
  labelId?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FieldText = ({ label, labelId = '' }: FiledTextProps) => {
  return (
    <Styled.Wrapper>
      {!!label && <Styled.Label htmlFor={labelId}>{label}</Styled.Label>}
      <Styled.Input id={labelId} />
    </Styled.Wrapper>
  );
};

export default FieldText;
