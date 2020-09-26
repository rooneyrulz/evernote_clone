import React from 'react';

// Contexts
import { AuthContext, NoteContext } from '../context';
import { createNote } from '../actions/note';

// Styles
import styles from '../styles/Note.module.css';

const NewNote = () => {
  const {
    authData: { user },
  } = React.useContext(AuthContext);
  const { dispatch } = React.useContext(NoteContext);

  const [newNote, setNewNote] = React.useState({ text: '' });

  const onHandleChange = (e) =>
    setNewNote({ ...newNote, [e.target.id]: e.target.value });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      text: newNote.text,
      private: false,
      owner: user.id,
    };
    createNote(dispatch, payload);
  };

  return (
    <div className={styles.new__note__container}>
      <form className={styles.note__form} onSubmit={(e) => onHandleSubmit(e)}>
        <input
          id='text'
          type='text'
          placeholder="Let's create a note.."
          className={styles.note__input}
          onChange={(e) => onHandleChange(e)}
        />
        <button type='submit' className={styles.btn__note}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewNote;
