import React from 'react';

// Context
import NoteContext from '../context/NoteContext';
import { getNotes } from '../actions/note';

// Components & Layouts
import NoteItem from '../components/NoteItem';
import NewNote from '../components/NewNote';

// Styles
import styles from '../styles/Note.module.css';

const Notes = () => {
  const { everNote, dispatch } = React.useContext(NoteContext);

  React.useEffect(() => {
    getNotes(dispatch);
  });

  return (
    <div className={styles.note__container}>
      <NewNote />
      <div className={styles.note_item_container}>
        {everNote.loading ? (
          <p>Loading..</p>
        ) : !everNote.notes.length ? (
          <p>No notes found yet!</p>
        ) : (
          everNote.notes.map((note) => <NoteItem key={note.id} note={note} />)
        )}
      </div>
    </div>
  );
};

export default Notes;
