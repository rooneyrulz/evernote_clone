import React from 'react';
import SpinnerGIF from '../assets/Spinner.gif';

const Spinner = () => {
  return (
    <div
      className='spinner__container'
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={SpinnerGIF} alt='loading spinner' />
    </div>
  );
};

export default Spinner;
