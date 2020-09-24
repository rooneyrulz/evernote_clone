import React from 'react';
import { Link } from 'react-router-dom';

// NavLinks
import AppHeaderLinks from './AppHeaderLinks';

// Styles
import styles from '../styles/Layout.module.css';

const AppHeader = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__header}>
        <Link className={styles.nav__link} to='/'>
          Evernote Clone
        </Link>
      </div>
      <AppHeaderLinks />
    </div>
  );
};

export default AppHeader;
