import React, { useState } from 'react';
import FieldText from '../FieldText';
import Button from '../Button';

import * as Styled from './styles';
import useAuth from '../../contexts/hooks/useAuth';

const FormLogin = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    signIn(username);
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Box>
          <FieldText
            label="Your name"
            labelId="username"
            inputSize="huge"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <Button type="submit" label="Go!" />
        </Styled.Box>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default FormLogin;
