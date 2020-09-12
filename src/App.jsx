import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layouts
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';

// Pages
import Dashboard from './pages/Dashboard';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

// Components
import PrivateRoute from './components/routing/PrivateRoute';
import Spinner from './layouts/Spinner';

// Auth Context
import AuthContext from './context/AuthContext';
import { loadUser } from './actions/auth';

// Styles
import './App.css';

const App = () => {
  const {
    authData: { loading },
    dispatch,
  } = React.useContext(AuthContext);

  React.useEffect(() => {
    loadUser(dispatch);
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <>
        <header className='app__header'>
          <AppHeader />
        </header>
        <main className='app__main'>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
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
