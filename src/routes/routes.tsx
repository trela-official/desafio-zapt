import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from 'pages/Welcome';
import SocialComments from 'pages/SocialComments';
import UserComments from 'pages/UserComments';

const Routes = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Welcome,
    },
    {
      path: '/socialcomments',
      exact: false,
      component: SocialComments,
    },
    {
      path: '/usercomments',
      exact: false,
      component: UserComments,
    },
  ];

  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
