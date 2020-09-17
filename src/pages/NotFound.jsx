import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found' style={styles.notFoundContainer}>
      <h2>Oops, This page is not available!</h2>
      <p>
        <Link to='/' style={styles.notFoundLink}>
          Go to home
        </Link>
      </p>
    </div>
  );
};

const styles = {
  notFoundContainer: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'crimson',
  },
  notFoundLink: {
    color: 'crimson',
  },
};

export default NotFound;
