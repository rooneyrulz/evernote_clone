import React from 'react';

// Context
import NoteContext from '../context/NoteContext';
import { getNotes } from '../actions/note';

// Components
import NoteItem from '../components/NoteItem';

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
      <h2>All the notes go on here..</h2>

      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </div>
  );
};

export default Notes;
