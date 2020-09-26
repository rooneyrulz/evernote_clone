import React from 'react';

// Contexts
import { AuthContext, NoteContext } from '../context';

const Alert = () => {
  const { authData } = React.useContext(AuthContext);
  const { everNote } = React.useContext(NoteContext);

  return authData.errors.length > 0 ? (
    <div className='alert__container'>
      {authData.errors.map(
        (error) =>
          error.msg && (
            <div key={error.id} className='alert'>
              <p style={{ color: 'crimson' }} className='alert__text'>
                {error.msg}
              </p>
            </div>
          )
      )}
    </div>
  ) : everNote.errors.length > 0 ? (
    <div className='alert__container'>
      {everNote.errors.map(
        (error) =>
          error.msg && (
            <div key={error.id} className='alert'>
              <p style={{ color: 'crimson' }} className='alert__text'>
                {error.msg}
              </p>
            </div>
          )
      )}
    </div>
  ) : null;
};

export default Alert;
