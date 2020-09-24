import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layouts
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';
import Spinner from './layouts/Spinner';

// Pages
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import NotFound from './pages/NotFound';

// Components & Layouts
import PrivateRoute from './components/routing/PrivateRoute';
import Alert from './layouts/Alert';

// Auth Context
import AuthContext from './context/AuthContext';
import { loadUser } from './actions/auth';

// Styles
import styles from './styles/Layout.module.css';
import './Global.css';

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
        <header className={styles.app__header}>
          <AppHeader />
        </header>
        <main className={styles.app__main}>
          <Alert />
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute exact path='/notes' component={Notes} />
            <Route exact path='/sign-in' component={Login} />
            <Route exact path='/sign-up' component={Register} />
            <Route exact component={NotFound} />
          </Switch>
        </main>
        <footer className={styles.app__footer}>
          <AppFooter />
        </footer>
      </>
    </BrowserRouter>
  );
};

export default App;
