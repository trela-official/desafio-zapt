import React from 'react';
import FieldText from '../FieldText';
import Button from '../Button';

import * as Styled from './styles';

const FormLogin = () => {
  return (
    <Styled.Wrapper>
      <Styled.Form>
        <Styled.Box>
          <FieldText label="Your name" labelId="username" inputSize="huge" />
          <Button label="Go!" onClick={() => console.log('entrou')} />
        </Styled.Box>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default FormLogin;
