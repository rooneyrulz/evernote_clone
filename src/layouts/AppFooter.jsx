import React from 'react';

// Styles
import styles from '../styles/Layout.module.css';

const AppFooter = () => {
  return (
    <div className={styles.footer__container}>
      <p className={styles.footer__text}>
        <strong className={styles.footer__text__badge}>Evernote Clone</strong>{' '}
        &copy; by devrulz
      </p>
    </div>
  );
};

export default AppFooter;
