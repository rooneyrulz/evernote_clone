import React from 'react';

import NoteContext from '../context/NoteContext';
import NoteReducer from '../reducers/note';

const NoteProvider = (props) => {
  const [everNote, dispatch] = React.useReducer(NoteReducer, {
    loading: true,
    notes: [],
    userNotes: [],
    errors: [],
  });

  return (
    <NoteContext.Provider
      value={{
        everNote,
        dispatch,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
