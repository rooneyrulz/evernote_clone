import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../context';
import { Spinner } from '../../layouts';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    authData: { loading, isAuthenticated },
  } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : !isAuthenticated ? (
          <Redirect to='/sign-in' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
