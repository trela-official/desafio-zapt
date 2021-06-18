import React from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';
import useAuth from '../contexts/hooks/useAuth';

type RouterProps = {
  isPrivate: boolean;
} & RouteProps;

const Router = ({ isPrivate, ...rest }: RouterProps) => {
  const { logged } = useAuth();

  if (!logged && isPrivate) return <Redirect to="/" />;
  if (logged && !isPrivate) return <Redirect to="/home" />;

  return <Route {...rest} />;
};

export default Router;
