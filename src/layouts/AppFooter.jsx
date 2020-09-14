import React from 'react';

// Styles
import { layoutStyles } from '../styles/layout.module';

const AppFooter = () => {
  return (
    <div className='footer' style={layoutStyles.footerContainer}>
      <p className='footer__text' style={layoutStyles.footerText}>
        <strong>Evernote Clone</strong> &copy; by devrulz
      </p>
    </div>
  );
};

export default AppFooter;
