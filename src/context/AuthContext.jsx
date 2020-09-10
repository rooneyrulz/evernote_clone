import React from 'react';

const AuthContext = React.createContext({
  loading: true,
  isAuthenticated: null,
  user: null,
});

export default AuthContext;
