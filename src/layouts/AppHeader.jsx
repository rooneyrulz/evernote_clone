import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import { signOutUser } from '../actions/auth';

const AppHeader = (props) => {
  const {
    authData: { isAuthenticated },
    dispatch,
  } = React.useContext(AuthContext);

  return (
    <div className='nav'>
      <div className='nav__header'>
        <Link className='nav__link' to='/'>
          Evernote Clone
        </Link>
      </div>
      <div className='nav__link__wrapper'>
        {isAuthenticated ? (
          <>
            <NavLink className='nav__link' exact to='/'>
              Dashboard
            </NavLink>
            <Link
              className='nav__link'
              to=''
              onClick={(e) => signOutUser(dispatch, props.history)}
            >
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
