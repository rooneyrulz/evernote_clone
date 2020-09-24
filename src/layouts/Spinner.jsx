import React from 'react';
import SpinnerGIF from '../assets/Spinner.gif';

// Styles
import styles from '../styles/Layout.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner__container}>
      <img
        className={styles.spinner__GIF}
        src={SpinnerGIF}
        alt='loading spinner'
      />
    </div>
  );
};

export default Spinner;
