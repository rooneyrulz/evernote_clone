import React from 'react';

// Context
import NoteContext from '../context/NoteContext';
import { updateNote, removeNote } from '../actions/note';

// Styles
import styles from '../styles/note.module.css';

const NoteItem = ({ note }) => {
  const { dispatch } = React.useContext(NoteContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [newNote, setNewNote] = React.useState({});

  const onHandleEdit = (e) => setIsEdit(true);

  const onHandleUpdate = (id) => {
    updateNote(dispatch, id, newNote);
    setIsEdit((prev) => false);
  };

  const onHandleDelete = (id) => removeNote(dispatch, id);

  const onHandleChange = (e) =>
    setNewNote({ ...newNote, [e.target.id]: e.target.value });

  React.useEffect(() => {
    setNewNote({ ...newNote, ...note });
  }, []);

  return (
    <div className={styles.note__item}>
      <div className={styles.note__item__left}>
        {isEdit ? (
          <input
            id='text'
            type='text'
            autoFocus
            value={newNote.text}
            onChange={(e) => onHandleChange(e)}
            className={styles.note__edit__input}
          />
        ) : (
          <p>{note.text}</p>
        )}
      </div>
      <div className={styles.note__item__right}>
        {isEdit ? (
          <button onClick={(e) => onHandleUpdate(note.id)}>Update</button>
        ) : (
          <button onClick={(e) => onHandleEdit(e)}>Edit</button>
        )}

        <button onClick={(e) => onHandleDelete(note.id)}>Remove</button>
      </div>
    </div>
  );
};

export default NoteItem;
