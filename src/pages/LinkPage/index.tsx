import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Container, Heading, Typography } from 'components';

import * as Styled from './styles';

const LinkPage = () => {
  const history = useHistory();

  const routes = [
    {
      component: 'Welcome',
      path: '/welcome',
    },
    {
      component: 'Social comments',
      path: '/socialcomments',
    },
    {
      component: 'User comments',
      path: '/usercomments',
    },
  ];

  return (
    <Container>
      <Styled.Wrapper>
        <Styled.TextWrapper>
          <Heading text="Bem vindo!" />
          <Typography>
            Aqui estão os links para os components do desafio
          </Typography>
        </Styled.TextWrapper>
        <Styled.LinksWrapper>
          {Array.isArray(routes) &&
            routes.length > 0 &&
            routes.map(route => (
              <Button
                key={route.component}
                label={route.component}
                onClick={() => history.push(route.path)}
              />
            ))}
        </Styled.LinksWrapper>
      </Styled.Wrapper>
    </Container>
  );
};

export default LinkPage;
