import React from 'react';
import { Route, redirect } from 'react-router-dom';
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = /* Check if the user is authenticated */ false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <redirect to="/login" />
      }
    />
  );
}
export default PrivateRoute;