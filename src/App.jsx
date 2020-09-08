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

const App = (props) => {
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

  return loading ? (
    <div>Loading...</div>
  ) : (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
