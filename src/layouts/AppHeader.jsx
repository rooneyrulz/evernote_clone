import React from 'react';
import { Link } from 'react-router-dom';

// NavLinks
import AppHeaderLinks from './AppHeaderLinks';

// Styles
import { layoutStyles } from '../styles/layout.module';

const AppHeader = () => {
  return (
    <div className='nav' style={layoutStyles.nav}>
      <div className='nav__header' style={layoutStyles.navHeader}>
        <Link className='nav__link' to='/' style={layoutStyles.navLink}>
          Evernote Clone
        </Link>
      </div>
      <AppHeaderLinks />
    </div>
  );
};

export default AppHeader;
