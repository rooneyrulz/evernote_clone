import React from 'react';

import AuthContext from '../context/AuthContext';
import AuthReducer from '../reducers/auth';

const AuthProvider = (props) => {
  const [authData, dispatch] = React.useReducer(AuthReducer, {
    loading: true,
    isAuthenticated: null,
    user: {},
  });

  return (
    <AuthContext.Provider
      value={{
        authData,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
