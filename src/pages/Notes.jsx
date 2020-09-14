import React from 'react';

// Context
import NoteContext from '../context/NoteContext';
import { getNotes } from '../actions/note';

// Components & Layouts
import NoteItem from '../components/NoteItem';
import NewNote from '../components/NewNote';
import Spinner from '../layouts/Spinner';

// Styles
import { noteStyles } from '../styles/note.module';

const Notes = () => {
  const { everNote, dispatch } = React.useContext(NoteContext);

  React.useEffect(() => {
    getNotes(dispatch);
  }, []);

  return (
    <div className='notes' style={noteStyles.noteContainer}>
      <NewNote />
      <div className='noteItemContainer' style={noteStyles.noteItemContainer}>
        {everNote.loading ? (
          <Spinner />
        ) : (
          everNote.notes.map((note) => <NoteItem key={note.id} note={note} />)
        )}
      </div>
    </div>
  );
};

export default Notes;
