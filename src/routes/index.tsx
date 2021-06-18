import React from 'react';
import { Switch } from 'react-router-dom';

import Router from './Router';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => {
  const routes = [
    {
      path: '/',
      component: Login,
      exact: true,
      isPrivate: false,
    },
    {
      path: '/home',
      component: Home,
      exact: false,
      isPrivate: true,
    },
  ];

  return (
    <Switch>
      {routes.map(route => (
        <Router
          key={route.path}
          exact={route.exact}
          component={route.component}
          path={route.path}
          isPrivate={route.isPrivate}
        />
      ))}
    </Switch>
  );
};

export default Routes;
