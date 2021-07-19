import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Button } from 'components';

import * as Styled from './styles';

export type ContainerProps = {
  children: React.ReactNode | React.ReactNodeArray;
  nextComponentUrl?: string;
  prevComponentUrl?: string;
};

const Container = ({
  nextComponentUrl = '',
  children,
  prevComponentUrl = '',
}: ContainerProps) => {
  const history = useHistory();
  return (
    <Styled.Wrapper>
      {children}
      <Fragment>
        {location.pathname === '/usercomments' && (
          <Styled.ButtonWrapper>
            <Button
              label="Componente anterior"
              onClick={() => history.push(prevComponentUrl)}
            />
          </Styled.ButtonWrapper>
        )}

        {location.pathname === '/' && (
          <Styled.ButtonWrapper>
            <Button
              label="Proximo componente"
              onClick={() => history.push(nextComponentUrl)}
            />
          </Styled.ButtonWrapper>
        )}

        {location.pathname === '/socialcomments' && (
          <Styled.ButtonWrapper>
            <Button
              label="Componente anterior"
              onClick={() => history.push(prevComponentUrl)}
            />
            <Button
              label="Proximo anterior"
              onClick={() => history.push(nextComponentUrl)}
            />
          </Styled.ButtonWrapper>
        )}
      </Fragment>
    </Styled.Wrapper>
  );
};

export default Container;
