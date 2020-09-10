import React from 'react';
import AuthContext from '../context/AuthContext';

const AuthProvider = (props) => {
  const [authData, setAuthData] = React.useState({
    loading: false,
    isAuthenticated: false,
    user: {},
  });
  return (
    <AuthContext.Provider value={{ ...authData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
