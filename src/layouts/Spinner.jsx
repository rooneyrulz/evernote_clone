import React from 'react';

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
      <span>Loading...</span>
    </div>
  );
};

export default Spinner;
