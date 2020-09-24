import React from 'react';

// Context
import AuthContext from '../context/AuthContext';
import NoteContext from '../context/NoteContext';
import { createNote } from '../actions/note';

// Styles
import styles from '../styles/note.module.css';

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
