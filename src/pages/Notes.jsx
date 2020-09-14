import React from 'react';

// Context
import NoteContext from '../context/NoteContext';
import { getNotes } from '../actions/note';

// Components
import NoteItem from '../components/NoteItem';
import NewNote from '../components/NewNote';

const Notes = () => {
  const {
    everNote: { loading, notes },
    dispatch,
  } = React.useContext(NoteContext);

  React.useEffect(() => {
    getNotes(dispatch);
  }, [dispatch, loading]);

  return (
    <div className='notes'>
      <NewNote />

      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </div>
  );
};

export default Notes;
