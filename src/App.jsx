import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import firebase from './config/firebase.config';
import './App.css';

// Layouts
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';

// Pages
import Dashboard from './pages/Dashboard';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

// Auth Provider
import AuthContext from './context/AuthContext';
import AuthProvider from './providers/AuthProvider';

const App = (props) => {
  const authContext = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserData(user.email);
        setLoading(false);
      } else {
        setUserData(null);
        setLoading(false);
      }
    });
  }, [loading]);

  console.log(`from App: ${authContext.loading}`);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <BrowserRouter>
      <AuthProvider>
        <>
          <header className='app__header'>
            <AppHeader />
          </header>
          <main className='app__main'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/sign-in' component={Login} />
              <Route exact path='/sign-up' component={Register} />
            </Switch>
          </main>
          <footer className='app__footer'>
            <AppFooter />
          </footer>
        </>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
