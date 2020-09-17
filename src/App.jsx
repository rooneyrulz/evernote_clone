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

// Components
import PrivateRoute from './components/routing/PrivateRoute';

// Auth Context
import AuthContext from './context/AuthContext';
import { loadUser } from './actions/auth';

// Styles
import { layoutStyles } from './styles/layout.module';
import './global.css';

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
        <header className='app__header' style={layoutStyles.appHeader}>
          <AppHeader />
        </header>
        <main className='app__main' style={layoutStyles.appMain}>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute exact path='/notes' component={Notes} />
            <Route exact path='/sign-in' component={Login} />
            <Route exact path='/sign-up' component={Register} />
            <Route exact component={NotFound} />
          </Switch>
        </main>
        <footer className='app__footer' style={layoutStyles.appFooter}>
          <AppFooter />
        </footer>
      </>
    </BrowserRouter>
  );
};

export default App;
