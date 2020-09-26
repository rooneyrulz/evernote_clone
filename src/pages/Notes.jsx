import React from 'react';

// Contexts
import { NoteContext } from '../context';
import { getNotes } from '../actions/note';

// Components
import { NewNote, NoteItem } from '../components';

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
