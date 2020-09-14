import React from 'react';

import NoteContext from '../context/NoteContext';
import NoteReducer from '../reducers/note';

const NoteProvider = (props) => {
  const [notes, dispatch] = React.useReducer(NoteReducer, [
    { id: '322109', text: 'It is note one' },
    { id: '498429', text: 'It is note two' },
    { id: '289989', text: 'It is note three' },
    { id: '392021', text: 'It is note four' },
    { id: '389287', text: 'It is note five' },
  ]);

  return (
    <NoteContext.Provider
      value={{
        notes,
        dispatch,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
