import React from 'react';

import firebase from '../config/firebase.config';
import AuthContext from '../context/AuthContext';

const AuthProvider = (props) => {
  const [authData, setAuthData] = React.useState({
    loading: true,
    isAuthenticated: null,
    user: null,
    error: {},
  });

  const checkIsAuthenticated = async () => {
    try {
      const user = await firebase.auth().onAuthStateChanged();
      if (user) {
        setAuthData({
          ...authData,
          loading: false,
          isAuthenticated: true,
          user: user.email,
        });
      } else {
        setAuthData({
          ...authData,
          loading: false,
          isAuthenticated: false,
          user: null,
        });
      }
    } catch (error) {
      setAuthData({
        ...authData,
        loading: false,
        isAuthenticated: false,
        error: { ...authData.error, checkAuth: error.message },
      });
    }
  };

  const loginUser = async ({ email, password }, history) => {
    if (!email.trim() || !password.trim()) window.alert('Invalid fields!');
    // checkIsAuthenticated();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setAuthData({
        ...authData,
        loading: false,
        isAuthenticated: true,
      });
      history.push('/');
    } catch (error) {
      setAuthData({
        ...authData,
        loading: false,
        isAuthenticated: false,
        error: { ...authData.error, login: error.message },
      });
    }
  };

  const registerUser = async ({ email, password }, history) => {
    if (!email.trim() || !password.trim()) window.alert('Invalid fields!');
    // checkIsAuthenticated();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setAuthData({
        ...authData,
        loading: false,
        isAuthenticated: true,
      });
      history.push('/');
    } catch (error) {
      setAuthData({
        ...authData,
        loading: false,
        isAuthenticated: false,
        error: { ...authData.error, register: error.message },
      });
    }
  };

  const signOutUser = async (history) => {
    try {
      await firebase.auth().signOut();
      setAuthData({
        ...authData,
        loading: false,
        isAuthenticated: false,
        user: null,
      });
      history.push('/sign-in');
    } catch (error) {
      setAuthData({
        ...authData,
        loading: false,
        isAuthenticated: false,
        error: { ...authData.error, signOut: error.message },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authData,
        checkIsAuthenticated: checkIsAuthenticated,
        loginUser: loginUser,
        registerUser: registerUser,
        signOutUser: signOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
