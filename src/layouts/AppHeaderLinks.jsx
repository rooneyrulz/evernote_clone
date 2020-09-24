import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Context
import AuthContext from '../context/AuthContext';
import { signOutUser } from '../actions/auth';

// Styles
import styles from '../styles/Layout.module.css';

const AppHeaderLinks = () => {
  const {
    authData: { isAuthenticated },
    dispatch,
  } = React.useContext(AuthContext);

  return (
    <div className='nav__link__wrapper'>
      {isAuthenticated ? (
        <>
          <NavLink exact to='/' className={styles.nav__link}>
            Dashboard
          </NavLink>
          <NavLink exact to='/notes' className={styles.nav__link}>
            Notes
          </NavLink>
          <Link
            to=''
            onClick={(e) => signOutUser(dispatch)}
            className={styles.nav__link}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <NavLink exact to='/sign-up' className={styles.nav__link}>
            Sign Up
          </NavLink>
          <NavLink exact to='/sign-in' className={styles.nav__link}>
            Sign In
          </NavLink>
        </>
      )}
    </div>
  );
};

export default AppHeaderLinks;
