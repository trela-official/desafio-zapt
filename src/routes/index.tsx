import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => {
  const routes = [
    {
      path: '/',
      component: Login,
      exact: true,
    },
    // {
    //   path: '/home',
    //   component: Home,
    //   exact: false,
    // },
  ];

  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          exact={route.exact}
          component={route.component}
          path={route.path}
        />
      ))}
    </Switch>
  );
};

export default Routes;
