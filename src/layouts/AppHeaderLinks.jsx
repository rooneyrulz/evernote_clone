import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Context
import AuthContext from '../context/AuthContext';
import { signOutUser } from '../actions/auth';

// Styles
import { layoutStyles } from '../styles/layout.module';

const AppHeaderLinks = () => {
  const {
    authData: { isAuthenticated },
    dispatch,
  } = React.useContext(AuthContext);

  return (
    <div className='nav__link__wrapper'>
      {isAuthenticated ? (
        <>
          <NavLink
            className='nav__link'
            exact
            to='/'
            style={layoutStyles.navLink}
          >
            Dashboard
          </NavLink>
          <NavLink
            className='nav__link'
            exact
            to='/notes'
            style={layoutStyles.navLink}
          >
            Notes
          </NavLink>
          <Link
            className='nav__link'
            to=''
            onClick={(e) => signOutUser(dispatch)}
            style={layoutStyles.navLink}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <NavLink
            className='nav__link'
            exact
            to='/sign-up'
            style={layoutStyles.navLink}
          >
            Sign Up
          </NavLink>
          <NavLink
            className='nav__link'
            exact
            to='/sign-in'
            style={layoutStyles.navLink}
          >
            Sign In
          </NavLink>
        </>
      )}
    </div>
  );
};

export default AppHeaderLinks;
