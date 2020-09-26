import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages | Layouts | Components
import { Login, Register, Dashboard, Notes, NotFound } from './pages';
import { AppHeader, AppFooter, Spinner, Alert } from './layouts';
import PrivateRoute from './components/routing/PrivateRoute';

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
