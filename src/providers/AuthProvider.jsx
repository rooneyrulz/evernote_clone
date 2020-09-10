import React from 'react';
import AuthContext from '../context/AuthContext';

const AuthProvider = (props) => {
  const [authData, setAuthData] = React.useState({
    loading: true,
    isAuthenticated: null,
    user: null,
  });
  return (
    <AuthContext.Provider value={{ ...authData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
