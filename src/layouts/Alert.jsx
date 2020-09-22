import React from 'react';

import AuthContext from '../context/AuthContext';
import NoteContext from '../context/NoteContext';

const Alert = () => {
  const { authData } = React.useContext(AuthContext);
  const { everNote } = React.useContext(NoteContext);

  return authData.errors.length > 0 ? (
    <div>
      {authData.errors.map((error) => (
        <p style={{ color: 'crimson' }}>{error.msg}</p>
      ))}
    </div>
  ) : everNote.errors.length > 0 ? (
    <div>
      {everNote.errors.map((error) => (
        <p style={{ color: 'crimson' }}>{error.msg}</p>
      ))}
    </div>
  ) : null;
};

export default Alert;
