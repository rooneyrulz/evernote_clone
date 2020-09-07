import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import firebase from '../config/firebase.config';

const AppHeader = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const onSignOut = async (e) => {
    try {
      await firebase.auth().signOut();
      // props.history.push('/sign-in');
    } catch (error) {
      throw error.message;
    }
  };

  return (
    <div className='nav'>
      <div className='nav__header'>
        <Link className='nav__link' to='/'>
          Evernote Clone
        </Link>
      </div>
      <div className='nav__link__wrapper'>
        {isLoggedIn ? (
          <>
            <NavLink className='nav__link' exact to='/'>
              Dashboard
            </NavLink>
            <Link className='nav__link' to='' onClick={(e) => onSignOut(e)}>
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <NavLink className='nav__link' exact to='/sign-up'>
              Sign Up
            </NavLink>
            <NavLink className='nav__link' exact to='/sign-in'>
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(AppHeader);
