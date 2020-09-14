import React from 'react';
import SpinnerGIF from '../assets/Spinner.gif';

// Styles
import { layoutStyles } from '../styles/layout.module';

const Spinner = () => {
  return (
    <div className='spinner__container' style={layoutStyles.spinnerContainer}>
      <img
        style={layoutStyles.spinnerGIF}
        src={SpinnerGIF}
        alt='loading spinner'
      />
    </div>
  );
};

export default Spinner;
