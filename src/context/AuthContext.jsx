import React from 'react';

const AuthContext = React.createContext({
  loading: true,
  isAuthenticated: null,
  user: null,
  checkIsAuthenticated: () => {},
  loginUser: () => {},
  registerUser: () => {},
});

export default AuthContext;
