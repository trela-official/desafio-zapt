import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from '../pages/Welcome';

const Routes = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Welcome,
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
