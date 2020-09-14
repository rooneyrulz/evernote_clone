import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import { signOutUser } from '../actions/auth';

// Styles
import { layoutStyles } from '../styles/layout.module';

const AppHeader = (props) => {
  const {
    authData: { isAuthenticated },
    dispatch,
  } = React.useContext(AuthContext);

  return (
    <div className='nav' style={layoutStyles.nav}>
      <div className='nav__header' style={layoutStyles.navHeader}>
        <Link className='nav__link' to='/' style={layoutStyles.navLink}>
          Evernote Clone
        </Link>
      </div>
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
            <Link
              className='nav__link'
              to=''
              onClick={(e) => signOutUser(dispatch, props.history)}
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
    </div>
  );
};

export default withRouter(AppHeader);
